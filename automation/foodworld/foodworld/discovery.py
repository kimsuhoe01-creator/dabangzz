from __future__ import annotations

import email.utils
import hashlib
import html
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from html.parser import HTMLParser
from urllib.parse import urljoin

import httpx

from .models import Candidate, FeedSource


USER_AGENT = "FoodRadarVN/0.1 (+editorial research; contact via repository)"


class _TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in {"script", "style", "noscript", "svg", "nav", "footer"}:
            self.skip_depth += 1
        elif tag in {"p", "br", "li", "h1", "h2", "h3"} and not self.skip_depth:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style", "noscript", "svg", "nav", "footer"} and self.skip_depth:
            self.skip_depth -= 1
        elif tag in {"p", "li", "h1", "h2", "h3"} and not self.skip_depth:
            self.parts.append("\n")

    def handle_data(self, data: str) -> None:
        if not self.skip_depth:
            self.parts.append(data)

    def text(self) -> str:
        value = " ".join("".join(self.parts).split())
        return value


def strip_html(value: str) -> str:
    parser = _TextExtractor()
    parser.feed(html.unescape(value or ""))
    return parser.text()


def _local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1].lower()


def _child_text(element: ET.Element, names: set[str]) -> str:
    for child in list(element):
        if _local_name(child.tag) in names:
            return "".join(child.itertext()).strip()
    return ""


def _child_attr(element: ET.Element, name: str, attr: str) -> str:
    for child in list(element):
        if _local_name(child.tag) == name:
            value = child.attrib.get(attr)
            if value:
                return value.strip()
    return ""


def parse_datetime(value: str) -> datetime | None:
    if not value:
        return None
    value = value.strip()
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        if parsed:
            return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)
    except (TypeError, ValueError, OverflowError):
        pass
    normalized = value.replace("Z", "+00:00")
    try:
        parsed = datetime.fromisoformat(normalized)
        return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)
    except ValueError:
        return None


def parse_feed(xml_text: str, source: FeedSource, limit: int = 20) -> list[Candidate]:
    root = ET.fromstring(xml_text)
    entries = [node for node in root.iter() if _local_name(node.tag) in {"item", "entry"}]
    candidates: list[Candidate] = []

    for entry in entries[:limit]:
        title = _child_text(entry, {"title"})
        link = _child_text(entry, {"link"}) or _child_attr(entry, "link", "href")
        summary = _child_text(entry, {"description", "summary", "content", "encoded"})
        published = _child_text(entry, {"pubdate", "published", "updated", "date"})
        image = (
            _child_attr(entry, "content", "url")
            or _child_attr(entry, "thumbnail", "url")
            or _child_attr(entry, "enclosure", "url")
        )
        if not title or not link:
            continue
        try:
            candidates.append(
                Candidate(
                    title=strip_html(title),
                    url=urljoin(str(source.url), link),
                    source_name=source.name,
                    source_country=source.country,
                    source_weight=source.weight,
                    published_at=parse_datetime(published),
                    summary=strip_html(summary)[:1200],
                    image_url=image or None,
                )
            )
        except ValueError:
            continue
    return candidates


def fetch_feed(source: FeedSource, limit: int = 20, timeout: float = 20.0) -> list[Candidate]:
    with httpx.Client(timeout=timeout, follow_redirects=True, headers={"user-agent": USER_AGENT}) as client:
        response = client.get(str(source.url))
        response.raise_for_status()
        return parse_feed(response.text, source, limit=limit)


def discover(sources: list[FeedSource], limit_per_feed: int = 20) -> tuple[list[Candidate], list[str]]:
    all_candidates: list[Candidate] = []
    errors: list[str] = []
    seen: set[str] = set()
    for source in sources:
        if not source.enabled:
            continue
        try:
            items = fetch_feed(source, limit=limit_per_feed)
        except (httpx.HTTPError, ET.ParseError, ValueError) as exc:
            errors.append(f"{source.name}: {exc}")
            continue
        for item in items:
            fingerprint = hashlib.sha256(str(item.url).encode("utf-8")).hexdigest()
            if fingerprint in seen:
                continue
            seen.add(fingerprint)
            all_candidates.append(item)
    return all_candidates, errors


def extract_article(url: str, timeout: float = 25.0, max_chars: int = 12000) -> tuple[str, str | None]:
    with httpx.Client(timeout=timeout, follow_redirects=True, headers={"user-agent": USER_AGENT}) as client:
        response = client.get(url)
        response.raise_for_status()
        html_text = response.text

    image_match = re.search(
        r'<meta[^>]+(?:property|name)=["\']og:image["\'][^>]+content=["\']([^"\']+)',
        html_text,
        flags=re.IGNORECASE,
    )
    if not image_match:
        image_match = re.search(
            r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\']og:image["\']',
            html_text,
            flags=re.IGNORECASE,
        )
    image_url = urljoin(url, html.unescape(image_match.group(1))) if image_match else None
    return strip_html(html_text)[:max_chars], image_url
