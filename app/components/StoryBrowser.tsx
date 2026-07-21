"use client";

import { useState } from "react";
import type { CommunityPost } from "../content/community-posts";
import { getPostImages } from "../content/post-images";

const filters = [
  { key: "all", label: "Tất cả" },
  { key: "kim", label: "Kim ở Việt Nam" },
  { key: "news", label: "Tin mới Việt Nam" },
  { key: "korea", label: "Chuyện Hàn Quốc" },
];

function belongsTo(post: CommunityPost, filter: string) {
  if (filter === "all") return true;
  if (filter === "kim") return post.kind === "review";
  if (filter === "news") return post.kind === "news";
  return filter === "korea" && post.kind === "story";
}

function publishedDate(post: CommunityPost) {
  const date = post.publishedAt ?? post.updatedAt;
  if (!date) return "19.07.2026";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(date));
}

export default function StoryBrowser({ posts, defaultFilter = "all" }: { posts: CommunityPost[]; defaultFilter?: string }) {
  const [active, setActive] = useState(defaultFilter);
  const visible = posts.filter(post => belongsTo(post, active));
  const [featured, ...latest] = visible;
  const activeLabel = filters.find(filter => filter.key === active)?.label ?? "Tất cả";

  return <>
    <div className="category-bar" id="topics">
      <div>{filters.map(filter => <button type="button" className={filter.key === active ? "active" : ""} aria-pressed={filter.key === active} onClick={() => setActive(filter.key)} key={filter.key}>{filter.label}</button>)}</div>
    </div>

    <section className="content" id="latest" aria-live="polite">
      <div className="section-heading">
        <div><span>{visible.length} BÀI · {activeLabel.toUpperCase()}</span><h2>Câu chuyện đáng đọc</h2></div>
        <span className="issue">ISSUE 02 · 2026</span>
      </div>

      {featured && <a className="lead-card" href={`/bai-viet/${featured.slug}`}>
        <div className="lead-visual">
          <img src={getPostImages(featured)[0].src} alt={getPostImages(featured)[0].alt} width="720" height="480" loading="eager" />
          <small>{featured.kind === "news" ? "TIN VIỆT NAM · GIẢI THÍCH" : featured.kind === "review" ? "TRẢI NGHIỆM THỰC TẾ · KIM" : "DABANGZZ · EDITORIAL"}</small>
        </div>
        <div className="lead-body">
          <span className="label">{featured.category}</span>
          <h3>{featured.title}</h3>
          <p>{featured.summary}</p>
          <div className="story-link"><span>{publishedDate(featured)} · {featured.readTime}</span><b>Đọc bài →</b></div>
        </div>
      </a>}

      <div className="latest-list">
        {latest.map((story, index) => <a className="list-story" href={`/bai-viet/${story.slug}`} key={story.slug}>
          <span className="list-index">{String(index + 2).padStart(2, "0")}</span>
          <img className="list-thumb" src={getPostImages(story)[0].src} alt="" width="168" height="112" loading="lazy" />
          <div><span className="label">{story.category}</span><h3>{story.title}</h3><p>{story.summary}</p></div>
          <span className="list-meta">{story.readTime}<b>↗</b></span>
        </a>)}
      </div>
    </section>
  </>;
}
