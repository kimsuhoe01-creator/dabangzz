import type { MetadataRoute } from "next";
import { getIndexablePosts } from "./content/community-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dabangzz.com";
  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tin-viet-nam`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/am-nhac-loi-dap`, lastModified: new Date("2026-07-25T07:50:00+07:00"), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/kim-o-viet-nam`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/gioi-thieu`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/chinh-sach-bien-tap`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/quyen-rieng-tu`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/lien-he`, lastModified: new Date("2026-08-04T11:00:00+07:00"), changeFrequency: "monthly", priority: 0.4 },
  ];

  return pages.concat(getIndexablePosts().map(post => ({
    url: `${base}/bai-viet/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt ?? "2026-07-19T00:00:00+07:00"),
    changeFrequency: post.kind === "news" || post.kind === "music" ? "daily" : "monthly",
    priority: post.kind === "news" ? 0.8 : post.kind === "review" ? 0.9 : post.kind === "music" ? 0.7 : 0.6,
  })));
}
