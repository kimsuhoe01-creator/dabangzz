from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image

from foodworld.config import AppConfig
from foodworld.discovery import parse_feed
from foodworld.editorial import fallback_story, rank_candidates, slugify
from foodworld.models import Candidate, FeedSource
from foodworld.pipeline import approve_package, publish_reviewed_package
from foodworld.publishers import _tiktok_chunks
from foodworld.render import render_story


FIXTURES = Path(__file__).parent / "fixtures"


def test_parse_and_filter_feed() -> None:
    source = FeedSource(name="Sample", url="https://example.com/feed.xml", country="VN")
    candidates = parse_feed((FIXTURES / "sample_feed.xml").read_text(encoding="utf-8"), source)
    assert len(candidates) == 2
    config = AppConfig()
    config.editorial.excluded_terms = ["wine", "alcohol"]
    ranked = rank_candidates(candidates, config, now=datetime(2026, 8, 4, 5, tzinfo=timezone.utc))
    assert [item.title for item in ranked] == ["Restaurant group launches compact rice bowl concept in Vietnam"]


def test_slugify_is_stable() -> None:
    assert slugify("Món ăn mới ở Việt Nam!") == "mon-an-moi-o-viet-nam"


def test_fallback_render_creates_platform_assets(tmp_path: Path) -> None:
    candidate = Candidate(
        title="New rice bowl format tested in Vietnam",
        url="https://example.com/rice-bowl-launch",
        source_name="Sample Publisher",
        source_country="VN",
        published_at=datetime.now(timezone.utc),
        summary="A compact menu and small footprint are being tested at two locations.",
    )
    config = AppConfig()
    config.root_dir = tmp_path
    config.render.output_dir = "output"
    config.render.vertical_width = 360
    config.render.vertical_height = 640
    config.render.carousel_width = 360
    config.render.carousel_height = 450
    config.render.fps = 24
    config.render.seconds_per_slide = 0.25
    story = fallback_story(candidate, config)
    output = render_story(story, config)

    assert (output / "story.json").exists()
    assert (output / "caption-vi.txt").exists()
    assert (output / "review-ko.txt").exists()
    assert (output / "review.html").exists()
    assert (output / "video.mp4").stat().st_size > 1000
    vertical = Image.open(output / "vertical" / "slide-01.png")
    carousel = Image.open(output / "carousel" / "slide-01.png")
    assert vertical.size == (360, 640)
    assert carousel.size == (360, 450)
    manifest = json.loads((output / "manifest.json").read_text(encoding="utf-8"))
    assert manifest["approval_status"] == "review"


def test_approval_is_bound_to_rendered_files(tmp_path: Path) -> None:
    candidate = Candidate(
        title="New rice bowl format tested in Vietnam",
        url="https://example.com/rice-bowl-launch",
        source_name="Sample Publisher",
        source_country="VN",
        summary="A compact menu and small footprint are being tested at two locations.",
    )
    config = AppConfig()
    config.root_dir = tmp_path
    config.render.output_dir = "output"
    config.render.vertical_width = 360
    config.render.vertical_height = 640
    config.render.carousel_width = 360
    config.render.carousel_height = 450
    config.render.seconds_per_slide = 0.15
    story = fallback_story(candidate, config)
    package = render_story(story, config)

    approval = approve_package(package, approved_by="tester", allow_risk_flags=True)
    assert approval["status"] == "approved"
    assert (package / "approval.json").exists()

    # Any post-approval edit invalidates the approval hash before platform calls run.
    (package / "story.json").write_text((package / "story.json").read_text(encoding="utf-8") + "\n", encoding="utf-8")
    try:
        publish_reviewed_package(config, package)
    except RuntimeError as exc:
        assert "changed after approval" in str(exc)
    else:
        raise AssertionError("Modified package should not publish")


def test_tiktok_chunk_plan_covers_file_without_gaps() -> None:
    chunk_size, chunks = _tiktok_chunks(100 * 1024 * 1024)
    assert chunk_size == 32 * 1024 * 1024
    assert chunks[0][0] == 0
    assert sum(length for _, length in chunks) == 100 * 1024 * 1024
    for previous, current in zip(chunks, chunks[1:]):
        assert current[0] == previous[0] + previous[1]
