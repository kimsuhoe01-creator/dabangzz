from __future__ import annotations

import html
import json
import shutil
import subprocess
from pathlib import Path
from urllib.parse import urlparse

from PIL import Image, ImageDraw, ImageFilter, ImageFont

from .config import AppConfig
from .models import StoryPackage


FONT_CANDIDATES_REGULAR = [
    "C:/Windows/Fonts/arial.ttf",
    "C:/Windows/Fonts/NotoSans-Regular.ttf",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]
FONT_CANDIDATES_BOLD = [
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/NotoSans-Bold.ttf",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]


def _font_path(configured: str, candidates: list[str]) -> str:
    if configured and Path(configured).exists():
        return configured
    for value in candidates:
        if Path(value).exists():
            return value
    raise FileNotFoundError("No suitable TrueType font was found. Set render.font_regular/font_bold.")


def _font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def _gradient(size: tuple[int, int], index: int) -> Image.Image:
    width, height = size
    palettes = [
        ((17, 24, 39), (46, 16, 101)),
        ((13, 44, 54), (10, 78, 92)),
        ((56, 25, 18), (116, 45, 23)),
        ((25, 30, 46), (32, 66, 119)),
        ((51, 24, 48), (116, 39, 74)),
        ((19, 45, 34), (29, 91, 65)),
    ]
    top, bottom = palettes[index % len(palettes)]

    # Build a 1-pixel-wide vertical gradient, then resize. This is much faster
    # than calculating every full-resolution pixel in Python.
    strip = Image.new("RGB", (1, height))
    pixels = strip.load()
    for y in range(height):
        t = y / max(1, height - 1)
        pixels[0, y] = tuple(int(top[channel] * (1 - t) + bottom[channel] * t) for channel in range(3))
    image = strip.resize(size)

    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse(
        (-int(width * 0.15), int(height * 0.05), int(width * 1.15), int(height * 0.70)),
        fill=(255, 255, 255, 32),
    )
    glow = glow.filter(ImageFilter.GaussianBlur(radius=max(20, int(width * 0.16))))
    return Image.alpha_composite(image.convert("RGBA"), glow).convert("RGB")


def _wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        attempt = word if not current else f"{current} {word}"
        if draw.textbbox((0, 0), attempt, font=font)[2] <= max_width:
            current = attempt
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def _fit_font(
    draw: ImageDraw.ImageDraw,
    text: str,
    font_path: str,
    max_width: int,
    max_height: int,
    start_size: int,
    min_size: int,
    spacing: int,
) -> tuple[ImageFont.FreeTypeFont, list[str]]:
    for size in range(start_size, min_size - 1, -2):
        font = _font(font_path, size)
        lines = _wrap(draw, text, font, max_width)
        line_height = draw.textbbox((0, 0), "Ag", font=font)[3]
        if line_height * len(lines) + spacing * max(0, len(lines) - 1) <= max_height:
            return font, lines
    font = _font(font_path, min_size)
    return font, _wrap(draw, text, font, max_width)


def _draw_lines(
    draw: ImageDraw.ImageDraw,
    lines: list[str],
    xy: tuple[int, int],
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    spacing: int,
) -> int:
    x, y = xy
    line_height = draw.textbbox((0, 0), "Ag", font=font)[3]
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        y += line_height + spacing
    return y


def render_card(
    story: StoryPackage,
    slide_index: int,
    size: tuple[int, int],
    output_path: Path,
    config: AppConfig,
) -> None:
    slide = story.slides[slide_index]
    width, height = size
    image = _gradient(size, slide_index)
    draw = ImageDraw.Draw(image)
    regular_path = _font_path(config.render.font_regular, FONT_CANDIDATES_REGULAR)
    bold_path = _font_path(config.render.font_bold, FONT_CANDIDATES_BOLD)
    margin = int(width * 0.075)

    # Decorative accents remain brand-neutral and reproducible.
    draw.rounded_rectangle(
        (margin, int(height * 0.055), margin + int(width * 0.36), int(height * 0.105)),
        radius=18,
        fill=(255, 255, 255),
    )
    eyebrow_font = _font(bold_path, max(22, int(width * 0.027)))
    draw.text((margin + 22, int(height * 0.067)), slide.eyebrow.upper(), font=eyebrow_font, fill=(24, 31, 49))

    counter_font = _font(bold_path, max(22, int(width * 0.025)))
    counter = f"{slide_index + 1:02d}/{len(story.slides):02d}"
    counter_box = draw.textbbox((0, 0), counter, font=counter_font)
    draw.text((width - margin - (counter_box[2] - counter_box[0]), int(height * 0.069)), counter, font=counter_font, fill=(245, 245, 245))

    title_top = int(height * 0.21)
    title_font, title_lines = _fit_font(
        draw,
        slide.headline,
        bold_path,
        width - 2 * margin,
        int(height * 0.27),
        start_size=max(54, int(width * 0.078)),
        min_size=max(38, int(width * 0.050)),
        spacing=16,
    )
    title_bottom = _draw_lines(draw, title_lines, (margin, title_top), title_font, (255, 255, 255), 16)

    accent_y = title_bottom + int(height * 0.035)
    draw.rounded_rectangle((margin, accent_y, margin + int(width * 0.18), accent_y + 12), radius=6, fill=(255, 220, 105))

    body_font, body_lines = _fit_font(
        draw,
        slide.body,
        regular_path,
        width - 2 * margin,
        int(height * 0.25),
        start_size=max(36, int(width * 0.047)),
        min_size=max(28, int(width * 0.036)),
        spacing=13,
    )
    _draw_lines(draw, body_lines, (margin, accent_y + int(height * 0.055)), body_font, (239, 242, 247), 13)

    footer_y = height - int(height * 0.105)
    draw.line((margin, footer_y, width - margin, footer_y), fill=(255, 255, 255), width=2)
    footer_font = _font(regular_path, max(20, int(width * 0.025)))
    brand_text = f"{config.brand.name.upper()}  •  {story.country_label.upper()}"
    draw.text((margin, footer_y + 24), brand_text, font=footer_font, fill=(230, 232, 238))
    source_domain = urlparse(str(story.source_urls[0])).netloc.replace("www.", "")
    source_bbox = draw.textbbox((0, 0), source_domain, font=footer_font)
    draw.text((width - margin - (source_bbox[2] - source_bbox[0]), footer_y + 24), source_domain, font=footer_font, fill=(230, 232, 238))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path, format="PNG", optimize=True)


def render_story(story: StoryPackage, config: AppConfig) -> Path:
    base_dir = config.resolve(config.render.output_dir) / story.slug
    vertical_dir = base_dir / "vertical"
    carousel_dir = base_dir / "carousel"
    vertical_dir.mkdir(parents=True, exist_ok=True)
    carousel_dir.mkdir(parents=True, exist_ok=True)

    for index in range(len(story.slides)):
        render_card(
            story,
            index,
            (config.render.vertical_width, config.render.vertical_height),
            vertical_dir / f"slide-{index + 1:02d}.png",
            config,
        )
        render_card(
            story,
            index,
            (config.render.carousel_width, config.render.carousel_height),
            carousel_dir / f"slide-{index + 1:02d}.png",
            config,
        )

    (base_dir / "story.json").write_text(story.model_dump_json(indent=2), encoding="utf-8")
    (base_dir / "caption-vi.txt").write_text(
        f"{story.caption_vi}\n\n{' '.join(story.hashtags)}\n",
        encoding="utf-8",
    )
    (base_dir / "review-ko.txt").write_text(
        f"제목: {story.title_vi}\n\n{story.summary_ko}\n\n"
        f"신뢰도: {story.confidence:.0%}\n"
        f"위험 플래그: {', '.join(story.risk_flags) or '없음'}\n"
        f"검증 메모:\n- " + "\n- ".join(story.verification_notes or ["없음"]) + "\n",
        encoding="utf-8",
    )
    (base_dir / "manifest.json").write_text(
        json.dumps(
            {
                "slug": story.slug,
                "video": "video.mp4",
                "vertical_slides": [f"vertical/slide-{i + 1:02d}.png" for i in range(len(story.slides))],
                "carousel_slides": [f"carousel/slide-{i + 1:02d}.png" for i in range(len(story.slides))],
                "source_urls": [str(url) for url in story.source_urls],
                "approval_status": "review",
                "approval_file": "approval.json",
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    create_video(vertical_dir, base_dir / "video.mp4", config)
    create_review_html(base_dir, story, config)
    return base_dir


def create_review_html(base_dir: Path, story: StoryPackage, config: AppConfig) -> None:
    cards = "\n".join(
        f'<img loading="lazy" src="vertical/slide-{index + 1:02d}.png" alt="Slide {index + 1}">'
        for index in range(len(story.slides))
    )
    sources = "\n".join(
        f'<li><a href="{html.escape(str(url), quote=True)}" target="_blank" rel="noreferrer">{html.escape(str(url))}</a></li>'
        for url in story.source_urls
    )
    risks = "<li>없음</li>" if not story.risk_flags else "".join(
        f"<li>{html.escape(flag)}</li>" for flag in story.risk_flags
    )
    notes = "<li>없음</li>" if not story.verification_notes else "".join(
        f"<li>{html.escape(note)}</li>" for note in story.verification_notes
    )
    document = f"""<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(story.title_vi)} — 검토</title>
<style>
:root {{ color-scheme: dark; font-family: Arial, "Noto Sans KR", sans-serif; }}
body {{ margin:0; background:#0c111b; color:#eef2f7; }}
main {{ max-width:1180px; margin:auto; padding:32px 22px 80px; }}
header {{ display:grid; grid-template-columns:minmax(260px,380px) 1fr; gap:32px; align-items:start; }}
video {{ width:100%; border-radius:18px; background:#000; box-shadow:0 18px 60px #0008; }}
.panel {{ background:#151d2b; border:1px solid #ffffff18; border-radius:18px; padding:24px; }}
h1 {{ margin-top:0; font-size:clamp(27px,4vw,48px); line-height:1.1; }}
h2 {{ margin-top:34px; }}
.badge {{ display:inline-block; padding:7px 11px; border-radius:999px; background:#f6d365; color:#151515; font-weight:700; }}
pre {{ white-space:pre-wrap; word-break:break-word; font:inherit; line-height:1.65; background:#0c111b; padding:18px; border-radius:12px; }}
.cards {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:14px; }}
.cards img {{ width:100%; border-radius:12px; }}
a {{ color:#8bc5ff; }}
.warning {{ color:#ffd28c; }}
@media (max-width:760px) {{ header {{ grid-template-columns:1fr; }} }}
</style>
</head>
<body><main>
<header>
  <video controls preload="metadata" src="video.mp4"></video>
  <section class="panel">
    <span class="badge">검토 대기</span>
    <h1>{html.escape(story.title_vi)}</h1>
    <p>{html.escape(story.summary_ko)}</p>
    <p><strong>신뢰도:</strong> {story.confidence:.0%}</p>
    <p class="warning"><strong>자동 게시:</strong> 기본 차단. 승인 파일과 플랫폼 설정이 모두 필요합니다.</p>
  </section>
</header>
<h2>세로 카드</h2><section class="cards">{cards}</section>
<h2>베트남어 게시 문구</h2><pre>{html.escape(story.caption_vi)}

{html.escape(' '.join(story.hashtags))}</pre>
<section class="panel"><h2>위험 플래그</h2><ul>{risks}</ul><h2>검증 메모</h2><ul>{notes}</ul><h2>원문 출처</h2><ul>{sources}</ul></section>
</main></body></html>"""
    (base_dir / "review.html").write_text(document, encoding="utf-8")


def create_video(slide_dir: Path, output_path: Path, config: AppConfig) -> None:
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        raise RuntimeError("FFmpeg was not found on PATH. Run the setup script or install FFmpeg.")
    slides = sorted(slide_dir.glob("slide-*.png"))
    if not slides:
        raise ValueError("No slide images were found")
    concat_path = output_path.parent / "slides.ffconcat"
    lines = ["ffconcat version 1.0"]
    for slide in slides:
        safe_path = slide.resolve().as_posix().replace("'", "'\\''")
        lines.append(f"file '{safe_path}'")
        lines.append(f"duration {config.render.seconds_per_slide:.3f}")
    last_path = slides[-1].resolve().as_posix().replace("'", "'\\''")
    lines.append(f"file '{last_path}'")
    concat_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    command = [
        ffmpeg,
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(concat_path),
        "-f",
        "lavfi",
        "-i",
        "anullsrc=r=44100:cl=stereo",
        "-shortest",
        "-vf",
        f"fps={config.render.fps},format=yuv420p",
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        "20",
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-movflags",
        "+faststart",
        str(output_path),
    ]
    subprocess.run(command, check=True, capture_output=True, text=True)
