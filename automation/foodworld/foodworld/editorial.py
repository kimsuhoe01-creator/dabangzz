from __future__ import annotations

import json
import os
import re
import unicodedata
from datetime import datetime, timezone
from typing import Any
from urllib.parse import urlparse

import httpx

from .config import AppConfig
from .models import Candidate, Slide, StoryPackage


TREND_TERMS = {
    "launch": 2.4,
    "new": 1.5,
    "limited": 2.2,
    "menu": 1.4,
    "flavor": 1.2,
    "snack": 1.1,
    "restaurant": 1.0,
    "technology": 1.4,
    "robot": 1.8,
    "ai": 1.3,
    "price": 1.4,
    "record": 1.0,
    "trend": 1.2,
    "innovation": 1.4,
    "vietnam": 1.8,
    "asia": 1.3,
    "korea": 1.2,
    "japan": 1.2,
}


def slugify(value: str, max_length: int = 72) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii").lower()
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_value).strip("-")
    if not slug:
        slug = f"food-story-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}"
    return slug[:max_length].strip("-")


def contains_excluded_term(candidate: Candidate, terms: list[str]) -> str | None:
    haystack = f"{candidate.title} {candidate.summary} {candidate.article_text}".casefold()
    for term in terms:
        normalized = term.strip().casefold()
        if normalized and normalized in haystack:
            return term
    return None


def rank_candidates(candidates: list[Candidate], config: AppConfig, now: datetime | None = None) -> list[Candidate]:
    now = now or datetime.now(timezone.utc)
    ranked: list[Candidate] = []
    for candidate in candidates:
        excluded = contains_excluded_term(candidate, config.editorial.excluded_terms)
        if excluded:
            continue
        score = candidate.source_weight * 2.0
        reasons = [f"source_weight={candidate.source_weight:.1f}"]
        if candidate.published_at:
            published = candidate.published_at.astimezone(timezone.utc)
            age_hours = max(0.0, (now - published).total_seconds() / 3600)
            if age_hours > config.editorial.max_candidate_age_hours:
                continue
            recency = max(0.0, 5.0 * (1.0 - age_hours / config.editorial.max_candidate_age_hours))
            score += recency
            reasons.append(f"recency={recency:.2f}")
        text = f"{candidate.title} {candidate.summary}".casefold()
        for token, weight in TREND_TERMS.items():
            if token in text:
                score += weight
                reasons.append(f"keyword:{token}")
        if "?" in candidate.title:
            score += 0.3
        if 35 <= len(candidate.title) <= 105:
            score += 0.4
        candidate.score = round(score, 3)
        candidate.score_reasons = reasons
        ranked.append(candidate)
    return sorted(ranked, key=lambda item: item.score, reverse=True)


def _story_schema() -> dict[str, Any]:
    return {
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "slug": {"type": "string", "pattern": "^[a-z0-9-]{4,90}$", "maxLength": 90},
            "title_vi": {"type": "string", "minLength": 8, "maxLength": 120},
            "hook_vi": {"type": "string", "minLength": 6, "maxLength": 120},
            "country_label": {"type": "string", "minLength": 2, "maxLength": 30},
            "category": {
                "type": "string",
                "enum": [
                    "new_product",
                    "unusual_food",
                    "price_comparison",
                    "food_business",
                    "food_technology",
                    "vietnam_relevance",
                ],
            },
            "summary_ko": {"type": "string", "minLength": 20, "maxLength": 600},
            "caption_vi": {"type": "string", "minLength": 20, "maxLength": 1500},
            "hashtags": {"type": "array", "items": {"type": "string"}, "minItems": 3, "maxItems": 10},
            "source_urls": {"type": "array", "items": {"type": "string"}, "minItems": 1, "maxItems": 5},
            "slides": {
                "type": "array",
                "minItems": 5,
                "maxItems": 7,
                "items": {
                    "type": "object",
                    "additionalProperties": False,
                    "properties": {
                        "eyebrow": {"type": "string", "minLength": 1, "maxLength": 42},
                        "headline": {"type": "string", "minLength": 1, "maxLength": 100},
                        "body": {"type": "string", "minLength": 1, "maxLength": 260},
                    },
                    "required": ["eyebrow", "headline", "body"],
                },
            },
            "verification_notes": {"type": "array", "items": {"type": "string"}, "maxItems": 8},
            "risk_flags": {"type": "array", "items": {"type": "string"}, "maxItems": 8},
            "confidence": {"type": "number", "minimum": 0, "maximum": 1},
        },
        "required": [
            "slug",
            "title_vi",
            "hook_vi",
            "country_label",
            "category",
            "summary_ko",
            "caption_vi",
            "hashtags",
            "source_urls",
            "slides",
            "verification_notes",
            "risk_flags",
            "confidence",
        ],
    }


def _extract_output_text(payload: dict[str, Any]) -> str:
    direct = payload.get("output_text")
    if isinstance(direct, str) and direct.strip():
        return direct
    fragments: list[str] = []
    for item in payload.get("output", []):
        if not isinstance(item, dict):
            continue
        for content in item.get("content", []):
            if not isinstance(content, dict):
                continue
            text = content.get("text")
            if isinstance(text, str):
                fragments.append(text)
    if not fragments:
        raise ValueError("OpenAI response did not contain output text")
    return "".join(fragments)


def build_prompt(candidate: Candidate, config: AppConfig) -> str:
    article = candidate.article_text or candidate.summary
    article = article[:10000]
    return f"""
Create one Vietnamese short-form editorial package about a global food or non-alcoholic beverage story.

Audience: Vietnamese consumers and food-business operators.
Brand: {config.brand.name} — {config.brand.tagline}
Required slides: {config.editorial.slides}

Non-negotiable rules:
- Use only facts supported by the supplied source. Do not invent sales numbers, prices, launch dates, taste reviews, or Vietnam availability.
- Clearly separate confirmed facts from interpretation.
- Do not write medical, nutrition-treatment, weight-loss, alcohol, nicotine, cannabis, supplement, or gambling promotion.
- Do not imitate the source wording. Summarize and add concise business/consumer context.
- Vietnamese must be natural, punchy, and easy to read on a phone.
- Slide 1: curiosity hook. Slides 2-4: verified facts/context. Slide 5: why it matters. Final slide: a genuine discussion question, not engagement bait.
- Keep each headline under 90 characters and each body under 220 characters.
- The Korean summary is for the owner to review before publishing.
- Use 3-7 relevant hashtags; no spam tags.
- source_urls must include exactly the supplied URL unless another source is actually present in the text.
- confidence below 0.75 or any ambiguity must be recorded in risk_flags and should remain in review mode.

SOURCE
Title: {candidate.title}
Publisher: {candidate.source_name}
Country label: {candidate.source_country}
Published: {candidate.published_at.isoformat() if candidate.published_at else 'unknown'}
URL: {candidate.url}
Feed summary: {candidate.summary}
Article text: {article}
""".strip()


def generate_story(candidate: Candidate, config: AppConfig, api_key: str | None = None) -> StoryPackage:
    api_key = api_key or os.getenv("OPENAI_API_KEY")
    if not api_key:
        return fallback_story(candidate, config)
    model = os.getenv("OPENAI_TEXT_MODEL", "gpt-5-mini")
    payload = {
        "model": model,
        "instructions": "You are a rigorous bilingual food-media editor. Return only schema-valid JSON.",
        "input": build_prompt(candidate, config),
        "max_output_tokens": 2500,
        "text": {
            "format": {
                "type": "json_schema",
                "name": "food_story_package",
                "strict": True,
                "schema": _story_schema(),
            }
        },
    }
    with httpx.Client(timeout=120.0) as client:
        response = client.post(
            "https://api.openai.com/v1/responses",
            headers={"authorization": f"Bearer {api_key}", "content-type": "application/json"},
            json=payload,
        )
        response.raise_for_status()
        raw = json.loads(_extract_output_text(response.json()))
    raw["source_urls"] = [str(candidate.url)]
    raw["slug"] = slugify(raw.get("slug") or raw.get("title_vi") or candidate.title)
    return StoryPackage.model_validate(raw)


def fallback_story(candidate: Candidate, config: AppConfig) -> StoryPackage:
    """Deterministic package for tests and manual review when no API key is present."""
    source_domain = urlparse(str(candidate.url)).netloc.replace("www.", "")
    summary = candidate.summary or candidate.article_text[:360] or "Nguồn chưa cung cấp phần tóm tắt."
    summary = summary[:500]
    title = candidate.title[:115]
    slides = [
        Slide(eyebrow="FOOD RADAR", headline=title[:90], body="Một câu chuyện mới trong ngành ăn uống toàn cầu."),
        Slide(eyebrow="ĐIỀU ĐÃ BIẾT", headline="Thông tin từ nguồn gốc", body=summary[:210]),
        Slide(eyebrow="BỐI CẢNH", headline="Chưa thêm dữ kiện ngoài nguồn", body=f"Bài gốc được đăng bởi {candidate.source_name}."),
        Slide(eyebrow="GÓC KINH DOANH", headline="Điểm cần kiểm tra", body="Giá bán, thị trường áp dụng và phản hồi thực tế cần được xác minh trước khi kết luận."),
        Slide(eyebrow="VIỆT NAM", headline="Có thể áp dụng tại Việt Nam?", body="Chưa có dữ liệu đủ chắc chắn. Hãy xem đây là ý tưởng để nghiên cứu, không phải xác nhận sản phẩm đã có mặt."),
        Slide(eyebrow="BẠN NGHĨ SAO?", headline="Xu hướng này có đáng theo dõi?", body=f"Nguồn: {source_domain}"),
    ]
    return StoryPackage(
        slug=slugify(title),
        title_vi=title,
        hook_vi=title,
        country_label=candidate.source_country,
        category="food_business",
        summary_ko=f"API 키가 없어 검토용 초안으로 생성했습니다. 원문: {candidate.title}. 사실관계와 베트남어 문장을 확인해야 합니다.",
        caption_vi=f"{title}\n\n{summary[:450]}\n\nNguồn: {source_domain}",
        hashtags=["#FoodRadarVN", "#AmThucTheGioi", "#TinThucPham"],
        source_urls=[candidate.url],
        slides=slides,
        verification_notes=["Fallback draft generated without AI editorial pass."],
        risk_flags=["manual_review_required"],
        confidence=0.55,
    )
