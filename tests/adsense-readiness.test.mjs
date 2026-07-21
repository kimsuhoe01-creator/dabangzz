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

test("publishes clear ownership and working contact information", async () => {
  const about = await fetchPage("/gioi-thieu");
  assert.equal(about.status, 200);
  const aboutHtml = await about.text();
  assert.match(aboutHtml, /Một ấn phẩm nhỏ, trách nhiệm rõ ràng/);
  assert.match(aboutHtml, /Bắc Ninh, Việt Nam/);
  assert.match(aboutHtml, /Kim/);

  const contact = await fetchPage("/lien-he");
  assert.equal(contact.status, 200);
  const contactHtml = await contact.text();
  assert.match(contactHtml, /Người phụ trách nội dung/);
  assert.match(contactHtml, /github\.com\/kimsuhoe01-creator\/dabangzz\/issues/);
});

test("discloses current advertising state and article provenance", async () => {
  const privacy = await fetchPage("/quyen-rieng-tu");
  assert.equal(privacy.status, 200);
  const privacyHtml = await privacy.text();
  assert.match(privacyHtml, /đã cài mã Google AdSense để xác minh/);
  assert.match(privacyHtml, /quảng cáo có thể chưa xuất hiện/);

  const home = await fetchPage("/");
  assert.equal(home.status, 200);
  assert.match(await home.text(), /ca-pub-9173524239392546/);

  const adsTxt = await readFile(new URL("../public/ads.txt", import.meta.url), "utf8");
  assert.equal(adsTxt.trim(), "google.com, pub-9173524239392546, DIRECT, f08c47fec0942fa0");

  const article = await fetchPage("/bai-viet/sinh-nhat-vo-tai-labri-ha-noi");
  assert.equal(article.status, 200);
  const articleHtml = await article.text();
  assert.match(articleHtml, /application\/ld\+json/);
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /https:\/\/dabangzz\.com\/gioi-thieu/);
});

test("lists the about page in navigation and sitemap", async () => {
  const home = await fetchPage("/");
  assert.equal(home.status, 200);
  assert.match(await home.text(), /href="\/gioi-thieu"/);

  const sitemap = await fetchPage("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /https:\/\/dabangzz\.com\/gioi-thieu/);
});
