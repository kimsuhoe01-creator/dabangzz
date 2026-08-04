from __future__ import annotations

import os
from pathlib import Path
from typing import Any

import yaml
from pydantic import BaseModel, Field

from .models import FeedSource


class BrandConfig(BaseModel):
    name: str = "Food Radar VN"
    tagline: str = "Mỗi ngày một chuyện ăn uống đáng biết"
    language: str = "vi"
    review_language: str = "ko"


class EditorialConfig(BaseModel):
    max_candidate_age_hours: int = 168
    max_items_per_feed: int = 20
    shortlist_size: int = 8
    slides: int = 6
    min_source_count: int = 1
    allow_ai_cover: bool = False
    topics: list[str] = Field(default_factory=list)
    excluded_terms: list[str] = Field(default_factory=list)


class RenderConfig(BaseModel):
    output_dir: str = "runtime/output"
    state_file: str = "runtime/state.json"
    vertical_width: int = 1080
    vertical_height: int = 1920
    carousel_width: int = 1080
    carousel_height: int = 1350
    fps: int = 30
    seconds_per_slide: float = 2.2
    font_regular: str = ""
    font_bold: str = ""


class PublishingConfig(BaseModel):
    approval_mode: str = "review"
    enabled: bool = False
    platforms: dict[str, bool] = Field(default_factory=dict)
    privacy_status: str = "private"


class AppConfig(BaseModel):
    brand: BrandConfig = Field(default_factory=BrandConfig)
    editorial: EditorialConfig = Field(default_factory=EditorialConfig)
    render: RenderConfig = Field(default_factory=RenderConfig)
    publishing: PublishingConfig = Field(default_factory=PublishingConfig)
    sources: list[FeedSource] = Field(default_factory=list)
    root_dir: Path = Field(default_factory=Path.cwd, exclude=True)

    def resolve(self, path_value: str) -> Path:
        path = Path(path_value)
        return path if path.is_absolute() else (self.root_dir / path)


def _expand_environment(value: Any) -> Any:
    if isinstance(value, str):
        return os.path.expandvars(value)
    if isinstance(value, list):
        return [_expand_environment(item) for item in value]
    if isinstance(value, dict):
        return {key: _expand_environment(item) for key, item in value.items()}
    return value


def load_config(path: str | Path) -> AppConfig:
    config_path = Path(path).expanduser().resolve()
    if not config_path.exists():
        raise FileNotFoundError(f"Config not found: {config_path}")
    raw = yaml.safe_load(config_path.read_text(encoding="utf-8")) or {}
    raw = _expand_environment(raw)
    config = AppConfig.model_validate(raw)
    config.root_dir = config_path.parent

    env_mode = os.getenv("FOODWORLD_APPROVAL_MODE")
    env_publish = os.getenv("FOODWORLD_PUBLISH_ENABLED")
    if env_mode:
        config.publishing.approval_mode = env_mode.strip().lower()
    if env_publish:
        config.publishing.enabled = env_publish.strip().lower() == "true"
    return config
