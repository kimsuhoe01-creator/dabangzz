from __future__ import annotations

import json
import mimetypes
import os
from pathlib import Path
from typing import Any

import httpx

from .config import AppConfig
from .models import PublishResult, StoryPackage


MEBIBYTE = 1024 * 1024


def _require(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise RuntimeError(f"Missing environment variable: {name}")
    return value


def _json(response: httpx.Response, operation: str) -> dict[str, Any]:
    response.raise_for_status()
    payload = response.json()
    if not isinstance(payload, dict):
        raise RuntimeError(f"{operation} returned a non-object response")
    return payload


def publish_facebook_reel(video_path: Path, story: StoryPackage) -> PublishResult:
    page_id = _require("META_PAGE_ID")
    token = _require("META_PAGE_ACCESS_TOKEN")
    version = os.getenv("META_GRAPH_API_VERSION", "v26.0")
    root = f"https://graph.facebook.com/{version}/{page_id}/video_reels"
    authorization = {"authorization": f"Bearer {token}"}

    with httpx.Client(timeout=180.0, follow_redirects=True) as client:
        started = _json(
            client.post(root, headers=authorization, data={"upload_phase": "start"}),
            "Facebook initialize Reel",
        )
        video_id = str(started["video_id"])
        upload_url = started.get("upload_url") or f"https://rupload.facebook.com/video-upload/{version}/{video_id}"

        size = video_path.stat().st_size
        with video_path.open("rb") as handle:
            upload = client.post(
                str(upload_url),
                headers={
                    "authorization": f"OAuth {token}",
                    "offset": "0",
                    "file_size": str(size),
                    "content-type": "application/octet-stream",
                },
                content=handle.read(),
            )
        uploaded = _json(upload, "Facebook upload Reel")
        if uploaded.get("success") is False:
            raise RuntimeError(f"Facebook upload rejected: {uploaded}")

        finished = _json(
            client.post(
                root,
                headers=authorization,
                data={
                    "upload_phase": "finish",
                    "video_id": video_id,
                    "video_state": "PUBLISHED",
                    "title": story.title_vi,
                    "description": f"{story.caption_vi}\n\n{' '.join(story.hashtags)}",
                },
            ),
            "Facebook finish Reel",
        )
        if finished.get("success") is False:
            raise RuntimeError(f"Facebook publish rejected: {finished}")
    return PublishResult(
        platform="facebook",
        status="uploaded",
        remote_id=video_id,
        detail="Submitted to Facebook for processing and publishing",
    )


def _tiktok_chunks(size: int) -> tuple[int, list[tuple[int, int]]]:
    if size <= 0:
        raise ValueError("TikTok video is empty")
    if size <= 64 * MEBIBYTE:
        return size, [(0, size)]

    chunk_size = 32 * MEBIBYTE
    full_chunks = size // chunk_size
    chunks: list[tuple[int, int]] = []
    offset = 0
    for index in range(full_chunks):
        # TikTok permits the final chunk to absorb the trailing remainder.
        length = size - offset if index == full_chunks - 1 else chunk_size
        chunks.append((offset, length))
        offset += length
    return chunk_size, chunks


def _check_tiktok_payload(payload: dict[str, Any], operation: str) -> dict[str, Any]:
    error = payload.get("error") or {}
    code = error.get("code")
    if code and code != "ok":
        raise RuntimeError(f"{operation} failed: {code} — {error.get('message', '')}")
    data = payload.get("data")
    if not isinstance(data, dict):
        raise RuntimeError(f"{operation} did not return data")
    return data


def publish_tiktok(video_path: Path, story: StoryPackage) -> PublishResult:
    token = _require("TIKTOK_ACCESS_TOKEN")
    mode = os.getenv("TIKTOK_MODE", "inbox").strip().lower()
    if mode not in {"inbox", "direct"}:
        raise ValueError("TIKTOK_MODE must be inbox or direct")
    if mode == "direct" and os.getenv("TIKTOK_DIRECT_POST_APPROVED", "false").lower() != "true":
        raise RuntimeError("Direct posting is locked until TikTok app review is approved")

    size = video_path.stat().st_size
    chunk_size, chunks = _tiktok_chunks(size)
    source_info = {
        "source": "FILE_UPLOAD",
        "video_size": size,
        "chunk_size": chunk_size,
        "total_chunk_count": len(chunks),
    }
    if mode == "direct":
        endpoint = "https://open.tiktokapis.com/v2/post/publish/video/init/"
        payload: dict[str, Any] = {
            "post_info": {
                "title": f"{story.caption_vi[:150]} {' '.join(story.hashtags)}",
                "privacy_level": os.getenv("TIKTOK_PRIVACY_LEVEL", "SELF_ONLY"),
                "disable_duet": False,
                "disable_comment": False,
                "disable_stitch": False,
                "video_cover_timestamp_ms": 1000,
            },
            "source_info": source_info,
        }
    else:
        endpoint = "https://open.tiktokapis.com/v2/post/publish/inbox/video/init/"
        payload = {"source_info": source_info}

    headers = {"authorization": f"Bearer {token}", "content-type": "application/json; charset=UTF-8"}
    with httpx.Client(timeout=180.0) as client:
        init_payload = _json(client.post(endpoint, headers=headers, json=payload), "TikTok initialize upload")
        data = _check_tiktok_payload(init_payload, "TikTok initialize upload")
        upload_url = str(data["upload_url"])
        publish_id = data.get("publish_id")
        content_type = mimetypes.guess_type(video_path.name)[0] or "video/mp4"

        with video_path.open("rb") as handle:
            for offset, length in chunks:
                handle.seek(offset)
                content = handle.read(length)
                if len(content) != length:
                    raise RuntimeError("Could not read the complete TikTok upload chunk")
                upload = client.put(
                    upload_url,
                    headers={
                        "content-type": content_type,
                        "content-length": str(length),
                        "content-range": f"bytes {offset}-{offset + length - 1}/{size}",
                    },
                    content=content,
                )
                upload.raise_for_status()

    return PublishResult(
        platform="tiktok",
        status="uploaded",
        remote_id=publish_id,
        detail="Direct-post request submitted" if mode == "direct" else "Uploaded to creator inbox for final confirmation",
    )


def _youtube_access_token() -> str:
    client_id = _require("YOUTUBE_CLIENT_ID")
    client_secret = _require("YOUTUBE_CLIENT_SECRET")
    refresh_token = _require("YOUTUBE_REFRESH_TOKEN")
    with httpx.Client(timeout=30.0) as client:
        response = client.post(
            "https://oauth2.googleapis.com/token",
            data={
                "client_id": client_id,
                "client_secret": client_secret,
                "refresh_token": refresh_token,
                "grant_type": "refresh_token",
            },
        )
        payload = _json(response, "YouTube refresh access token")
        return str(payload["access_token"])


def publish_youtube_short(video_path: Path, story: StoryPackage, config: AppConfig) -> PublishResult:
    access_token = _youtube_access_token()
    size = video_path.stat().st_size
    metadata = {
        "snippet": {
            "title": story.title_vi[:100],
            "description": f"{story.caption_vi}\n\n{' '.join(story.hashtags)}\n\nNguồn:\n" + "\n".join(str(url) for url in story.source_urls),
            "tags": [tag.lstrip("#") for tag in story.hashtags],
            "categoryId": "22",
            "defaultLanguage": "vi",
        },
        "status": {
            "privacyStatus": config.publishing.privacy_status,
            "selfDeclaredMadeForKids": False,
        },
    }
    headers = {
        "authorization": f"Bearer {access_token}",
        "content-type": "application/json; charset=UTF-8",
        "x-upload-content-type": "video/mp4",
        "x-upload-content-length": str(size),
    }
    initiate_url = "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status"
    with httpx.Client(timeout=300.0) as client:
        initiate = client.post(
            initiate_url,
            headers=headers,
            content=json.dumps(metadata, ensure_ascii=False).encode("utf-8"),
        )
        initiate.raise_for_status()
        upload_url = initiate.headers["location"]
        with video_path.open("rb") as handle:
            upload = client.put(
                upload_url,
                headers={
                    "authorization": f"Bearer {access_token}",
                    "content-type": "video/mp4",
                    "content-length": str(size),
                    "content-range": f"bytes 0-{size - 1}/{size}",
                },
                content=handle.read(),
            )
        payload = _json(upload, "YouTube upload video")
        video_id = payload.get("id")
    return PublishResult(platform="youtube", status="uploaded", remote_id=video_id, detail="Video uploaded to YouTube")


def publish_enabled(
    base_dir: Path,
    story: StoryPackage,
    config: AppConfig,
    *,
    explicit_approval: bool = False,
    allow_risk_flags: bool = False,
) -> list[PublishResult]:
    if not config.publishing.enabled:
        return [PublishResult(platform="all", status="skipped", detail="Publishing disabled")]
    if not explicit_approval and config.publishing.approval_mode != "auto":
        return [PublishResult(platform="all", status="skipped", detail="Approval mode is review")]
    if not allow_risk_flags and (story.confidence < 0.75 or story.risk_flags):
        return [PublishResult(platform="all", status="skipped", detail="Story requires manual review")]

    video_path = base_dir / "video.mp4"
    results: list[PublishResult] = []
    platform_flags = config.publishing.platforms
    for platform, enabled in platform_flags.items():
        if not enabled:
            continue
        try:
            if platform == "facebook":
                results.append(publish_facebook_reel(video_path, story))
            elif platform == "tiktok":
                results.append(publish_tiktok(video_path, story))
            elif platform == "youtube":
                results.append(publish_youtube_short(video_path, story, config))
        except Exception as exc:  # Keep one platform failure from blocking the remaining uploads.
            results.append(PublishResult(platform=platform, status="failed", detail=str(exc)))
    return results or [PublishResult(platform="all", status="skipped", detail="No platform enabled")]
