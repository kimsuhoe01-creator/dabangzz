import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommunityArticle from "../../components/CommunityArticle";
import { communityPosts } from "../../content/community-posts";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return communityPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = communityPosts.find(item => item.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Dabangzz`, description: post.summary };
}

export default async function ArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = communityPosts.find(item => item.slug === slug);
  if (!post) notFound();
  return <CommunityArticle post={post} />;
}
