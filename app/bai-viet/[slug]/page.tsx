import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommunityArticle from "../../components/CommunityArticle";
import StructuredData from "../../components/StructuredData";
import { communityPosts, getIndexablePosts, isPostIndexable, isPostPublished } from "../../content/community-posts";
import { getLoiDapEmbedUrl } from "../../content/loi-dap-music";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = communityPosts.find(item => item.slug === slug);
  if (!post || !isPostPublished(post)) return {};
  const url = `/bai-viet/${post.slug}`;
  const image = post.images?.[0];
  const images = image ? [{ url: image.src, width: 1536, height: 1024, alt: image.alt }] : undefined;

  return {
    title: `${post.title} | Dabangzz`,
    description: post.summary,
    alternates: { canonical: url },
    robots: isPostIndexable(post) ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      siteName: "Dabangzz",
      locale: "vi_VN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: image ? [image.src] : undefined,
    },
  };
}

export default async function ArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = communityPosts.find(item => item.slug === slug);
  if (!post || !isPostPublished(post)) notFound();
  const articleUrl = `https://dabangzz.com/bai-viet/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.kind === "news" ? "NewsArticle" : "Article",
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    inLanguage: "vi-VN",
    articleSection: post.category,
    isAccessibleForFree: true,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: post.images?.map(image => new URL(image.src, "https://dabangzz.com").toString()),
    author: post.author
      ? { "@type": "Person", name: post.author, url: "https://dabangzz.com/gioi-thieu" }
      : { "@type": "Organization", name: "Dabangzz", url: "https://dabangzz.com/gioi-thieu" },
    publisher: { "@id": "https://dabangzz.com/#publisher" },
  };
  const videoSchema = post.youtube ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: post.youtube.sourceTitle,
    description: post.summary,
    thumbnailUrl: post.youtube.thumbnailUrl,
    uploadDate: post.youtube.uploadDate,
    embedUrl: getLoiDapEmbedUrl(post.youtube),
    contentUrl: post.youtube.watchUrl,
  } : null;

  return <><StructuredData data={articleSchema} />{videoSchema ? <StructuredData data={videoSchema} /> : null}<CommunityArticle post={post} posts={getIndexablePosts()} /></>;
}
