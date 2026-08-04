from __future__ import annotations

from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field, HttpUrl, field_validator, model_validator


class FeedSource(BaseModel):
    name: str
    url: HttpUrl
    country: str = "GLOBAL"
    weight: float = 1.0
    enabled: bool = True


class Candidate(BaseModel):
    title: str
    url: HttpUrl
    source_name: str
    source_country: str = "GLOBAL"
    source_weight: float = 1.0
    published_at: datetime | None = None
    summary: str = ""
    article_text: str = ""
    image_url: HttpUrl | None = None
    score: float = 0.0
    score_reasons: list[str] = Field(default_factory=list)

    @field_validator("title", "summary", "article_text")
    @classmethod
    def normalize_space(cls, value: str) -> str:
        return " ".join(value.split())


class Slide(BaseModel):
    eyebrow: str = Field(min_length=1, max_length=42)
    headline: str = Field(min_length=1, max_length=100)
    body: str = Field(min_length=1, max_length=260)


class StoryPackage(BaseModel):
    slug: str = Field(pattern=r"^[a-z0-9-]{4,90}$")
    title_vi: str = Field(min_length=8, max_length=120)
    hook_vi: str = Field(min_length=6, max_length=120)
    country_label: str = Field(min_length=2, max_length=30)
    category: Literal[
        "new_product",
        "unusual_food",
        "price_comparison",
        "food_business",
        "food_technology",
        "vietnam_relevance",
    ]
    summary_ko: str = Field(min_length=20, max_length=600)
    caption_vi: str = Field(min_length=20, max_length=1500)
    hashtags: list[str] = Field(min_length=3, max_length=10)
    source_urls: list[HttpUrl] = Field(min_length=1, max_length=5)
    slides: list[Slide] = Field(min_length=5, max_length=7)
    verification_notes: list[str] = Field(default_factory=list, max_length=8)
    risk_flags: list[str] = Field(default_factory=list, max_length=8)
    confidence: float = Field(ge=0, le=1)
    generated_at: datetime = Field(default_factory=lambda: datetime.now().astimezone())

    @field_validator("hashtags")
    @classmethod
    def normalize_hashtags(cls, values: list[str]) -> list[str]:
        cleaned: list[str] = []
        for value in values:
            token = value.strip().replace(" ", "")
            if not token.startswith("#"):
                token = f"#{token}"
            if token not in cleaned:
                cleaned.append(token)
        return cleaned

    @model_validator(mode="after")
    def require_source_slide_alignment(self) -> "StoryPackage":
        if len(self.slides) < 5:
            raise ValueError("At least five slides are required")
        return self


class PublishResult(BaseModel):
    platform: str
    status: Literal["published", "uploaded", "skipped", "failed"]
    remote_id: str | None = None
    detail: str = ""
