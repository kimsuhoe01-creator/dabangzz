import assert from "node:assert/strict";
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

function assertCanonical(html, pathname) {
  const href = pathname === "/" ? "https://dabangzz.com/" : `https://dabangzz.com${pathname}`;
  assert.match(html, new RegExp(`<link[^>]+rel="canonical"[^>]+href="${href.replaceAll("/", "\\/")}"|<link[^>]+href="${href.replaceAll("/", "\\/")}"[^>]+rel="canonical"`));
}

test("limits the sitemap to the reviewed indexable URL set", async () => {
  const response = await fetchPage("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.equal((xml.match(/<loc>/g) ?? []).length, 42);
  assert.doesNotMatch(xml, /\/chuyen-han-quoc</);
  assert.doesNotMatch(xml, /\/bai-viet\/van-hoa-thang-may-han-quoc</);
  assert.doesNotMatch(xml, /\/bai-viet\/du-bao-thoi-tiet-viet-nam-21-30-7-2026</);
  assert.match(xml, /\/bai-viet\/the-can-cuoc-vneid-va-can-cuoc-dien-tu</);
  assert.match(xml, /\/bai-viet\/nghi-dinh-168-12-diem-gplx-tra-cuu-phuc-hoi</);
  assert.match(xml, /\/bai-viet\/smile-hoi-quan-bac-ninh-set-thit-590k/);
  assert.match(xml, /\/bai-viet\/em-chang-hieu-anh-loi-dap/);
});

test("keeps legacy URLs reachable while clearly excluding them from search", async () => {
  for (const pathname of [
    "/chuyen-han-quoc",
    "/bai-viet/van-hoa-thang-may-han-quoc",
    "/bai-viet/du-bao-thoi-tiet-viet-nam-21-30-7-2026",
  ]) {
    const response = await fetchPage(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /<meta[^>]+name="robots"[^>]+content="noindex,\s*follow"|<meta[^>]+content="noindex,\s*follow"[^>]+name="robots"/, pathname);
  }
});

test("removes reviewed-out content from the home feed and primary navigation", async () => {
  const response = await fetchPage("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.doesNotMatch(html, /\/bai-viet\/van-hoa-thang-may-han-quoc/);
  assert.doesNotMatch(html, /href="\/chuyen-han-quoc"/);
  assert.match(html, /href="\/tin-viet-nam"/);
  assert.match(html, /href="\/kim-o-viet-nam"/);
  assert.match(html, /href="\/am-nhac-loi-dap"/);
});

test("publishes self-canonicals on every indexable section and trust page", async () => {
  for (const pathname of ["/", "/tin-viet-nam", "/kim-o-viet-nam", "/am-nhac-loi-dap", "/gioi-thieu", "/chinh-sach-bien-tap", "/quyen-rieng-tu", "/lien-he"]) {
    const response = await fetchPage(pathname);
    assert.equal(response.status, 200, pathname);
    assertCanonical(await response.text(), pathname);
  }
});
