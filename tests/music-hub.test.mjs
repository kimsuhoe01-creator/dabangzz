import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function fetchPage(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://dabangzz.com${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("validates the fixed Lời Đáp channel and derives a safe embed URL", async () => {
  const moduleUrl = new URL("../app/content/loi-dap-music.ts", import.meta.url);
  moduleUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const {
    getLoiDapEmbedUrl,
    isVerifiedLoiDapVideo,
    LOI_DAP_CHANNEL_ID,
    loiDapMusicPosts,
  } = await import(moduleUrl.href);

  assert.equal(loiDapMusicPosts.length, 3);
  assert.deepEqual(
    new Set(loiDapMusicPosts.map(post => post.youtube?.videoId)),
    new Set(["dW06ZveTgtc", "ZgEZVAPe3Ek", "ltjue-nusFw"]),
  );
  const video = loiDapMusicPosts.find(post => post.youtube?.videoId === "ltjue-nusFw")?.youtube;
  assert.ok(video);
  assert.equal(video.channelId, LOI_DAP_CHANNEL_ID);
  assert.equal(getLoiDapEmbedUrl(video), "https://www.youtube-nocookie.com/embed/ltjue-nusFw?controls=1");
  assert.equal(isVerifiedLoiDapVideo(video), true);
  assert.equal(isVerifiedLoiDapVideo({ ...video, channelId: "wrong-channel" }), false);
  assert.equal(isVerifiedLoiDapVideo({ ...video, watchUrl: "https://example.com/watch?v=ltjue-nusFw" }), false);
  assert.equal(isVerifiedLoiDapVideo({ ...video, videoId: "bad" }), false);
});

test("renders one privacy-enhanced player without autoplay and valid VideoObject data", async () => {
  const response = await fetchPage("/bai-viet/noi-di-em-nghe-loi-dap");
  assert.equal(response.status, 200);
  const html = await response.text();

  const iframes = html.match(/<iframe\b[^>]*>/gi) ?? [];
  assert.equal(iframes.length, 1);
  assert.match(iframes[0], /youtube-nocookie\.com\/embed\/ltjue-nusFw\?controls=1/);
  assert.match(iframes[0], /loading="lazy"/);
  assert.match(iframes[0], /title="Nghe NÓI ĐI, EM NGHE:/);
  assert.match(iframes[0], /allowfullscreen/i);
  assert.doesNotMatch(iframes[0], /autoplay/i);
  assert.match(html, /https:\/\/www\.youtube\.com\/watch\?v=ltjue-nusFw/);
  assert.match(html, /https:\/\/www\.youtube\.com\/channel\/UCFKSv3qumWBRQ_ljks7DO6Q/);
  assert.match(html, /"@type":"VideoObject"/);
  assert.match(html, /"name":"NÓI ĐI, EM NGHE \| Vietnamese Female Emotional Hip-Hop"/);
  assert.match(html, /"uploadDate":"2026-07-24T13:00:25Z"/);
  assert.match(html, /"thumbnailUrl":"https:\/\/i\.ytimg\.com\/vi\/ltjue-nusFw\/hqdefault\.jpg"/);
  assert.match(html, /"embedUrl":"https:\/\/www\.youtube-nocookie\.com\/embed\/ltjue-nusFw\?controls=1"/);
});

test("publishes only the verified music hub and article in navigation and sitemap", async () => {
  const hub = await fetchPage("/am-nhac-loi-dap");
  assert.equal(hub.status, 200);
  const hubHtml = await hub.text();
  const hubDocument = hubHtml.split("<script>self.__VINEXT_RSC_CHUNKS__")[0];
  assert.match(hubHtml, /Âm nhạc · Lời Đáp/);
  assert.ok((hubDocument.match(/href="\/bai-viet\/noi-di-em-nghe-loi-dap"/g) ?? []).length >= 1);
  assert.ok((hubDocument.match(/href="\/bai-viet\/mai-lai-gap-anh-nhe-loi-dap"/g) ?? []).length >= 1);
  assert.ok((hubDocument.match(/href="\/bai-viet\/them-mot-chut-gan-loi-dap"/g) ?? []).length >= 1);

  const home = await fetchPage("/");
  assert.equal(home.status, 200);
  const homeHtml = await home.text();
  assert.match(homeHtml, /href="\/am-nhac-loi-dap"/);
  assert.match(homeHtml, /href="\/bai-viet\/mai-lai-gap-anh-nhe-loi-dap"/);

  const sitemap = await fetchPage("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  assert.equal((sitemapXml.match(/https:\/\/dabangzz\.com\/am-nhac-loi-dap/g) ?? []).length, 1);
  assert.equal((sitemapXml.match(/https:\/\/dabangzz\.com\/bai-viet\/noi-di-em-nghe-loi-dap/g) ?? []).length, 1);
  assert.equal((sitemapXml.match(/https:\/\/dabangzz\.com\/bai-viet\/mai-lai-gap-anh-nhe-loi-dap/g) ?? []).length, 1);
  assert.equal((sitemapXml.match(/https:\/\/dabangzz\.com\/bai-viet\/them-mot-chut-gan-loi-dap/g) ?? []).length, 1);
});

test("documents YouTube privacy and deduplicates the outbound analytics event", async () => {
  const privacy = await fetchPage("/quyen-rieng-tu");
  assert.equal(privacy.status, 200);
  const privacyHtml = await privacy.text();
  assert.match(privacyHtml, /youtube-nocookie\.com/);
  assert.match(privacyHtml, /một video chỉ được ghi một lần trong mỗi phiên/);

  const source = await readFile(new URL("../app/components/YouTubeOutboundLink.tsx", import.meta.url), "utf8");
  assert.match(source, /outbound_youtube_click/);
  assert.match(source, /sessionStorage/);
  assert.match(source, /dabangzz:outbound-youtube:/);
  assert.equal((source.match(/gtag\?\.\("event", "outbound_youtube_click"/g) ?? []).length, 1);
});

test("keeps the player at a responsive 16:9 ratio", async () => {
  const css = await readFile(new URL("../app/community.css", import.meta.url), "utf8");
  assert.match(css, /\.youtube-frame\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9/s);
  assert.match(css, /\.youtube-frame iframe\s*\{[^}]*width:\s*100%[^}]*height:\s*100%/s);
});
