import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommunityArticle from "../../components/CommunityArticle";
import StructuredData from "../../components/StructuredData";
import { communityPosts, getPublishedPosts, isPostPublished } from "../../content/community-posts";

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

  return <><StructuredData data={articleSchema} /><CommunityArticle post={post} posts={getPublishedPosts()} /></>;
}
