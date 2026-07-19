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
  return { title: `${post.title} | Dabangzz`, description: post.summary };
}

export default async function ArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = communityPosts.find(item => item.slug === slug);
  if (!post || !isPostPublished(post)) notFound();
  return <CommunityArticle post={post} posts={getPublishedPosts()} />;
}
