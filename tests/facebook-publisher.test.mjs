import assert from "node:assert/strict";
import test from "node:test";
import { articleUrl, buildFacebookMessage, publishScheduledFacebookPost, selectFacebookCandidate, wasAlreadyShared } from "../worker/facebook-publisher.ts";

const posts = [
  { slug: "news-old", kind: "news", category: "Tin mới Việt Nam", title: "Tin cũ hơn", summary: "Tóm tắt cũ", publishedAt: "2026-07-20T10:30:00+07:00" },
  { slug: "news-latest", kind: "news", category: "Tin mới Việt Nam", title: "Tin mới nhất", summary: "Tóm tắt rõ ràng", publishedAt: "2026-07-20T11:45:00+07:00" },
  { slug: "korea-latest", kind: "story", category: "Chuyện Hàn Quốc · Công sở", title: "Chuyện Hàn mới nhất", summary: "Tóm tắt câu chuyện", publishedAt: "2026-07-20T16:30:00+07:00" },
  { slug: "kim-review", kind: "review", category: "Kim ở Việt Nam · Hà Nội", title: "Trải nghiệm của Kim", summary: "Tóm tắt trải nghiệm", publishedAt: "2026-07-20T16:40:00+07:00" },
];

test("selects the newest eligible article for each Facebook slot", () => {
  assert.equal(selectFacebookCandidate(posts, new Date("2026-07-20T12:10:00+07:00"), "news")?.slug, "news-latest");
  assert.equal(selectFacebookCandidate(posts, new Date("2026-07-20T16:50:00+07:00"), "story")?.slug, "korea-latest");
});

test("builds a canonical link message and detects duplicate URLs", () => {
  const url = articleUrl(posts[1]);
  const message = buildFacebookMessage(posts[1]);
  assert.match(message, /TIN VIỆT NAM/);
  assert.match(message, new RegExp(url));
  assert.equal(wasAlreadyShared([{ message }], url), true);
  assert.equal(wasAlreadyShared([{ message: "another post" }], url), false);
});

test("publishes a unique link without putting the token in the URL", async () => {
  const requests = [];
  const fakeFetch = async (input, init) => {
    const url = String(input);
    requests.push({ url, init });
    if (url.includes("published_posts")) return new Response(JSON.stringify({ data: [] }), { status: 200 });
    return new Response(JSON.stringify({ id: "655324960999161_123" }), { status: 200 });
  };
  const result = await publishScheduledFacebookPost(posts, new Date("2026-07-20T12:10:00+07:00"), "news", {
    META_FACEBOOK_AUTOMATION_ENABLED: "true", META_PAGE_ID: "655324960999161", META_PAGE_ACCESS_TOKEN: "test-token",
  }, fakeFetch);
  assert.equal(result.status, "published");
  assert.equal(requests.length, 2);
  assert.match(requests[1].url, /\/feed$/);
  const body = requests[1].init.body;
  assert.equal(body.get("link"), "https://dabangzz.com/bai-viet/news-latest");
  assert.doesNotMatch(requests[1].url, /test-token/);
});
