from __future__ import annotations

import hashlib
import json
import os
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from .config import AppConfig
from .discovery import discover, extract_article
from .editorial import generate_story, rank_candidates
from .models import Candidate, PublishResult, StoryPackage
from .publishers import publish_enabled
from .render import render_story


def fingerprint(candidate: Candidate) -> str:
    return hashlib.sha256(str(candidate.url).encode("utf-8")).hexdigest()


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_state(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {"processed": {}, "runs": []}
    try:
        state = json.loads(path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {"processed": {}, "runs": []}
    state.setdefault("processed", {})
    state.setdefault("runs", [])
    return state


def save_state(path: Path, state: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(".tmp")
    temp.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")
    temp.replace(path)


def choose_candidate(candidates: list[Candidate], config: AppConfig, state: dict[str, Any]) -> Candidate:
    ranked = rank_candidates(candidates, config)
    processed = state.get("processed", {})
    for candidate in ranked[: config.editorial.shortlist_size]:
        if fingerprint(candidate) not in processed:
            return candidate
    raise RuntimeError("No new eligible candidate was found")


def enrich_candidate(candidate: Candidate) -> Candidate:
    try:
        article_text, image_url = extract_article(str(candidate.url))
        candidate.article_text = article_text
        if image_url and not candidate.image_url:
            candidate.image_url = image_url
    except Exception:
        # Feed title/summary remain usable; the editorial prompt will lower confidence when evidence is thin.
        pass
    return candidate


def run_discovery_pipeline(config: AppConfig, publish: bool = False) -> tuple[StoryPackage, Path, list[PublishResult], list[str]]:
    state_path = config.resolve(config.render.state_file)
    state = load_state(state_path)
    candidates, errors = discover(config.sources, config.editorial.max_items_per_feed)
    if not candidates:
        raise RuntimeError("No candidates were discovered. Feed errors: " + "; ".join(errors))
    selected = enrich_candidate(choose_candidate(candidates, config, state))
    story = generate_story(selected, config)
    base_dir = render_story(story, config)
    results = publish_enabled(base_dir, story, config) if publish else [
        PublishResult(platform="all", status="skipped", detail="Dry run / review package generated")
    ]

    stamp = datetime.now(timezone.utc).isoformat()
    state["processed"][fingerprint(selected)] = {
        "url": str(selected.url),
        "title": selected.title,
        "slug": story.slug,
        "generated_at": stamp,
    }
    state["runs"] = (state.get("runs", []) + [{"at": stamp, "slug": story.slug, "errors": errors}])[-50:]
    save_state(state_path, state)
    return story, base_dir, results, errors


def run_manual_candidate(config: AppConfig, payload_path: Path, publish: bool = False) -> tuple[StoryPackage, Path, list[PublishResult]]:
    raw = json.loads(payload_path.read_text(encoding="utf-8"))
    candidate = Candidate.model_validate(raw)
    candidate = enrich_candidate(candidate)
    excluded = next(
        (term for term in config.editorial.excluded_terms if term.casefold() in f"{candidate.title} {candidate.summary}".casefold()),
        None,
    )
    if excluded:
        raise ValueError(f"Manual topic rejected by editorial safety filter: {excluded}")
    story = generate_story(candidate, config)
    base_dir = render_story(story, config)
    results = publish_enabled(base_dir, story, config) if publish else [
        PublishResult(platform="all", status="skipped", detail="Manual review package generated")
    ]
    return story, base_dir, results


def approve_package(
    package_dir: Path,
    *,
    approved_by: str,
    note: str = "",
    allow_risk_flags: bool = False,
) -> dict[str, Any]:
    package_dir = package_dir.resolve()
    story_path = package_dir / "story.json"
    video_path = package_dir / "video.mp4"
    if not story_path.exists() or not video_path.exists():
        raise FileNotFoundError("The package must contain story.json and video.mp4")
    story = StoryPackage.model_validate_json(story_path.read_text(encoding="utf-8"))
    if (story.confidence < 0.75 or story.risk_flags) and not allow_risk_flags:
        raise RuntimeError(
            "This package still has low confidence or risk flags. Resolve them first, or explicitly use --allow-risk after manual verification."
        )
    approval = {
        "status": "approved",
        "approved_by": approved_by.strip() or os.getenv("FOODWORLD_APPROVER", "owner"),
        "approved_at": datetime.now(timezone.utc).isoformat(),
        "note": note.strip(),
        "allow_risk_flags": allow_risk_flags,
        "story_sha256": _sha256(story_path),
        "video_sha256": _sha256(video_path),
    }
    (package_dir / "approval.json").write_text(
        json.dumps(approval, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    manifest_path = package_dir / "manifest.json"
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        manifest["approval_status"] = "approved"
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return approval


def publish_reviewed_package(config: AppConfig, package_dir: Path) -> tuple[StoryPackage, list[PublishResult]]:
    package_dir = package_dir.resolve()
    story_path = package_dir / "story.json"
    video_path = package_dir / "video.mp4"
    approval_path = package_dir / "approval.json"
    if not approval_path.exists():
        raise RuntimeError("Package has not been approved")
    approval = json.loads(approval_path.read_text(encoding="utf-8"))
    if approval.get("status") != "approved":
        raise RuntimeError("Package approval status is not approved")
    if approval.get("story_sha256") != _sha256(story_path) or approval.get("video_sha256") != _sha256(video_path):
        raise RuntimeError("Package changed after approval; review and approve the new version again")

    story = StoryPackage.model_validate_json(story_path.read_text(encoding="utf-8"))
    results = publish_enabled(
        package_dir,
        story,
        config,
        explicit_approval=True,
        allow_risk_flags=bool(approval.get("allow_risk_flags")),
    )
    (package_dir / "publish-results.json").write_text(
        json.dumps([result.model_dump() for result in results], ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return story, results
