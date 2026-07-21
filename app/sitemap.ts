import type { MetadataRoute } from "next";
import { getPublishedPosts } from "./content/community-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dabangzz.com";
  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date("2026-07-20T08:10:00+07:00"), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tin-viet-nam`, lastModified: new Date("2026-07-20T08:10:00+07:00"), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/chuyen-han-quoc`, lastModified: new Date("2026-07-20T08:10:00+07:00"), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/kim-o-viet-nam`, lastModified: new Date("2026-07-21T09:49:00+07:00"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/chinh-sach-bien-tap`, lastModified: new Date("2026-07-20T01:35:00+07:00"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/quyen-rieng-tu`, lastModified: new Date("2026-07-20T01:35:00+07:00"), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/lien-he`, lastModified: new Date("2026-07-20T01:35:00+07:00"), changeFrequency: "monthly", priority: 0.3 },
  ];

  return pages.concat(getPublishedPosts().map(post => ({
    url: `${base}/bai-viet/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt ?? "2026-07-19T00:00:00+07:00"),
    changeFrequency: post.kind === "news" ? "daily" : "monthly",
    priority: post.kind === "news" ? 0.8 : post.kind === "review" ? 0.9 : 0.6,
  })));
}
