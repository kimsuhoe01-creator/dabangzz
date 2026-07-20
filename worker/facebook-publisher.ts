type FacebookPost = {
  slug: string;
  kind?: "story" | "news";
  category: string;
  title: string;
  summary: string;
  publishedAt?: string;
};

type FacebookPublisherEnv = {
  META_PAGE_ACCESS_TOKEN?: string;
  META_PAGE_ID?: string;
  META_FACEBOOK_AUTOMATION_ENABLED?: string;
  META_GRAPH_API_VERSION?: string;
  META_SITE_URL?: string;
};

type FacebookFeedResponse = {
  data?: { message?: string }[];
};

type FacebookPublishResponse = {
  id?: string;
};

export type FacebookShareKind = "news" | "story";

export const FACEBOOK_CRON_KIND: Record<string, FacebookShareKind> = {
  "10 0 * * *": "news",  // 07:10 in Vietnam
  "10 5 * * *": "news",  // 12:10 in Vietnam
  "50 9 * * *": "story", // 16:50 in Vietnam
  "50 14 * * *": "news", // 21:50 in Vietnam
};

const DEFAULT_GRAPH_API_VERSION = "v26.0";
const DEFAULT_SITE_URL = "https://dabangzz.com";

function normalizeOrigin(value: string) {
  return value.replace(/\/+$/, "");
}

export function articleUrl(post: Pick<FacebookPost, "slug">, siteUrl = DEFAULT_SITE_URL) {
  return `${normalizeOrigin(siteUrl)}/bai-viet/${encodeURIComponent(post.slug)}`;
}

export function selectFacebookCandidate(
  posts: FacebookPost[],
  scheduledTime: Date,
  preferredKind: FacebookShareKind,
) {
  const scheduledMs = scheduledTime.getTime();
  const maximumAge = preferredKind === "news"
    ? 6 * 60 * 60 * 1000
    : 10 * 60 * 60 * 1000;

  return posts
    .filter((post) => {
      if (!post.publishedAt) return false;
      if (preferredKind === "news" ? post.kind !== "news" : post.kind === "news") return false;

      const publishedMs = Date.parse(post.publishedAt);
      const age = scheduledMs - publishedMs;
      return Number.isFinite(publishedMs) && age >= 0 && age <= maximumAge;
    })
    .sort((a, b) => Date.parse(b.publishedAt!) - Date.parse(a.publishedAt!))[0] ?? null;
}

export function buildFacebookMessage(post: FacebookPost, siteUrl = DEFAULT_SITE_URL) {
  const label = post.kind === "news" ? "TIN VIỆT NAM · ĐỌC CÓ NGUỒN" : "CHUYỆN HÀN QUỐC · GÓC NHÌN CHO NGƯỜI VIỆT";
  const hashtags = post.kind === "news" ? "#Dabangzz #TinVietNam" : "#Dabangzz #ChuyenHanQuoc";

  return [
    label,
    post.title,
    post.summary,
    `Đọc bài đầy đủ:\n${articleUrl(post, siteUrl)}`,
    hashtags,
  ].join("\n\n");
}

export function wasAlreadyShared(messages: { message?: string }[], url: string) {
  return messages.some((item) => item.message?.includes(url));
}

async function graphJson<T>(response: Response, operation: string) {
  if (!response.ok) {
    throw new Error(`Facebook ${operation} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function publishScheduledFacebookPost(
  posts: FacebookPost[],
  scheduledTime: Date,
  preferredKind: FacebookShareKind,
  env: FacebookPublisherEnv,
  fetchImpl: typeof fetch = fetch,
) {
  if (env.META_FACEBOOK_AUTOMATION_ENABLED !== "true") {
    return { status: "disabled" as const };
  }
  if (!env.META_PAGE_ACCESS_TOKEN || !env.META_PAGE_ID) {
    throw new Error("Facebook publisher is missing its Page credentials");
  }

  const candidate = selectFacebookCandidate(posts, scheduledTime, preferredKind);
  if (!candidate) return { status: "no-candidate" as const };

  const siteUrl = env.META_SITE_URL || DEFAULT_SITE_URL;
  const postUrl = articleUrl(candidate, siteUrl);
  const graphVersion = env.META_GRAPH_API_VERSION || DEFAULT_GRAPH_API_VERSION;
  const graphRoot = `https://graph.facebook.com/${graphVersion}`;
  const authorization = `Bearer ${env.META_PAGE_ACCESS_TOKEN}`;

  const recentUrl = new URL(`${graphRoot}/${encodeURIComponent(env.META_PAGE_ID)}/published_posts`);
  recentUrl.searchParams.set("fields", "message,created_time");
  recentUrl.searchParams.set("limit", "100");

  const recentResponse = await fetchImpl(recentUrl, {
    headers: { authorization },
  });
  const recent = await graphJson<FacebookFeedResponse>(recentResponse, "duplicate check");
  if (wasAlreadyShared(recent.data ?? [], postUrl)) {
    return { status: "duplicate" as const, slug: candidate.slug };
  }

  const body = new URLSearchParams({
    link: postUrl,
    message: buildFacebookMessage(candidate, siteUrl),
  });
  const publishResponse = await fetchImpl(
    `${graphRoot}/${encodeURIComponent(env.META_PAGE_ID)}/feed`,
    {
      method: "POST",
      headers: {
        authorization,
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    },
  );
  const published = await graphJson<FacebookPublishResponse>(publishResponse, "publish");
  if (!published.id) throw new Error("Facebook publish response did not contain a post id");

  return { status: "published" as const, slug: candidate.slug, postId: published.id };
}
