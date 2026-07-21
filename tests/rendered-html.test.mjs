import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://dabangzz.com${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Dabangzz homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="vi"/i);
  assert.match(html, /Dabangzz — Tin Việt Nam, hiểu rõ hơn/);
  assert.match(html, /Tin Việt Nam/);
  assert.match(html, /Kim ở Việt Nam/);
  assert.match(html, /Chính sách biên tập/);
  assert.match(html, /Quyền riêng tư/);
  assert.match(html, /Liên hệ/);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working/i);
});

test("unknown article routes return 404", async () => {
  const response = await render("/bai-viet/khong-ton-tai");
  assert.equal(response.status, 404);
});
