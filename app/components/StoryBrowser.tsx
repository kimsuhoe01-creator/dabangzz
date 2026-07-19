"use client";

import { useState } from "react";
import { communityPosts } from "../content/community-posts";

const filters = [
  { key: "all", label: "Tất cả" },
  { key: "culture", label: "Văn hóa" },
  { key: "work", label: "Công sở" },
  { key: "love", label: "Tình yêu" },
  { key: "life", label: "Cuộc sống" },
  { key: "beauty", label: "K-beauty" },
];

function belongsTo(category: string, filter: string) {
  if (filter === "all") return true;
  if (filter === "culture") return category.includes("Văn hóa");
  if (filter === "work") return category.includes("Công sở");
  if (filter === "love") return category.includes("Tình yêu") || category.includes("Gia đình");
  if (filter === "beauty") return category.includes("K-beauty");
  return ["Cuộc sống", "Đời sống", "Nhà ở", "Trải nghiệm", "Du học"].some(word => category.includes(word));
}

export default function StoryBrowser() {
  const [active, setActive] = useState("all");
  const visible = communityPosts.filter(post => belongsTo(post.category, active));
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
        <div className="lead-visual"><span>01</span><small>SEOUL<br/>ARCHIVE</small></div>
        <div className="lead-body">
          <span className="label">{featured.category}</span>
          <h3>{featured.title}</h3>
          <p>{featured.summary}</p>
          <div className="story-link"><span>19.07.2026 · {featured.readTime}</span><b>Đọc bài →</b></div>
        </div>
      </a>}

      <div className="latest-list">
        {latest.map((story, index) => <a className="list-story" href={`/bai-viet/${story.slug}`} key={story.slug}>
          <span className="list-index">{String(index + 2).padStart(2, "0")}</span>
          <div><span className="label">{story.category}</span><h3>{story.title}</h3><p>{story.summary}</p></div>
          <span className="list-meta">{story.readTime}<b>↗</b></span>
        </a>)}
      </div>
    </section>
  </>;
}
