import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommunityArticle from "../../components/CommunityArticle";
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
  return <CommunityArticle post={post} posts={getPublishedPosts()} />;
}
