import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import {
  JoksinPublishGate,
  createApprovalSignature,
  handleJoksinRequest,
} from "../worker/joksin-facebook-worker.ts";

const PNG_BYTES = Uint8Array.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  0x00, 0x00, 0x00, 0x0d,
]);
const API_KEY = "joksin-test-api-key-never-use-in-production";
const IDEMPOTENCY_KEY = "joksin-photo-20260722-0001";

class MemoryStorage {
  values = new Map();

  async get(key) {
    return this.values.get(key);
  }

  async put(key, value) {
    this.values.set(key, value);
  }

  async transaction(callback) {
    return callback(this);
  }
}

class FakeGateNamespace {
  objects = new Map();

  idFromName(name) {
    return name;
  }

  get(id) {
    if (!this.objects.has(id)) {
      const gate = new JoksinPublishGate({ storage: new MemoryStorage() });
      this.objects.set(id, {
        fetch(input, init) {
          return gate.fetch(new Request(input, init));
        },
      });
    }
    return this.objects.get(id);
  }
}

function photoForm({
  bytes = PNG_BYTES,
  type = "image/png",
  captionKo = "박닌에서 즐기는 따뜻한 족발 한 상",
  captionVi = "Một mâm jokbal ấm áp tại Bắc Ninh",
} = {}) {
  const form = new FormData();
  form.append("image", new Blob([bytes], { type }), "joksin.png");
  form.append("captionKo", captionKo);
  form.append("captionVi", captionVi);
  return form;
}

function photoRequest(path, {
  apiKey = API_KEY,
  idempotencyKey = IDEMPOTENCY_KEY,
  approvalSignature,
  form = photoForm(),
} = {}) {
  const headers = new Headers({
    authorization: "Bearer " + apiKey,
    "idempotency-key": idempotencyKey,
  });
  if (approvalSignature) {
    headers.set("x-joksin-approval-signature", approvalSignature);
  }
  return new Request("https://publisher.example" + path, {
    method: "POST",
    headers,
    body: form,
  });
}

function baseEnv(overrides = {}) {
  return {
    JOKSIN_PUBLISH_API_KEY: API_KEY,
    JOKSIN_META_PAGE_ACCESS_TOKEN: "dedicated-joksin-page-token",
    JOKSIN_META_PAGE_ID: "verified-joksin-page-id",
    JOKSIN_FACEBOOK_PUBLISH_ENABLED: "true",
    JOKSIN_META_GRAPH_API_VERSION: "v25.0",
    JOKSIN_GATE: new FakeGateNamespace(),
    ...overrides,
  };
}

test("health is public but discloses only readiness booleans", async () => {
  const response = await handleJoksinRequest(
    new Request("https://publisher.example/health"),
    baseEnv(),
  );
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.ready, true);
  assert.equal(body.publishEnabled, true);
  assert.equal(JSON.stringify(body).includes("dedicated-joksin-page-token"), false);
  assert.equal(JSON.stringify(body).includes("verified-joksin-page-id"), false);
});

test("root console exposes verify and dry-run but no publish form", async () => {
  const response = await handleJoksinRequest(
    new Request("https://publisher.example/"),
    baseEnv(),
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /name="operation" value="verify"/);
  assert.match(html, /name="operation" value="dry-run"/);
  assert.doesNotMatch(html, /\/v1\/photos\/publish/);
});

test("dry-run requires authentication and never calls Meta", async () => {
  const unauthenticated = await handleJoksinRequest(
    photoRequest("/v1/photos/dry-run", { apiKey: "wrong-key" }),
    baseEnv(),
  );
  assert.equal(unauthenticated.status, 401);

  let graphCalls = 0;
  const response = await handleJoksinRequest(
    photoRequest("/v1/photos/dry-run"),
    baseEnv(),
    async () => {
      graphCalls += 1;
      throw new Error("dry-run must not call Meta");
    },
  );
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.publishAttempted, false);
  assert.equal(body.approvalRequired, true);
  assert.equal(body.approvalPayload.idempotencyKey, IDEMPOTENCY_KEY);
  assert.equal(body.image.contentType, "image/png");
  assert.equal(graphCalls, 0);
});

test("publish fails closed when disabled or approval is missing", async () => {
  const disabled = await handleJoksinRequest(
    photoRequest("/v1/photos/publish"),
    baseEnv({ JOKSIN_FACEBOOK_PUBLISH_ENABLED: "false" }),
  );
  assert.equal(disabled.status, 503);

  const noApproval = await handleJoksinRequest(
    photoRequest("/v1/photos/publish"),
    baseEnv(),
  );
  assert.equal(noApproval.status, 403);
});

test("approved photo posts once, keeps token out of URL, and rejects duplicates", async () => {
  const captionKo = "박닌에서 즐기는 따뜻한 족발 한 상";
  const captionVi = "Một mâm jokbal ấm áp tại Bắc Ninh";
  const digest = createHash("sha256").update(PNG_BYTES).digest("hex");
  const signature = await createApprovalSignature(
    API_KEY,
    IDEMPOTENCY_KEY,
    digest,
    captionKo,
    captionVi,
  );
  const env = baseEnv();
  const requests = [];
  const fakeFetch = async (input, init) => {
    requests.push({ url: String(input), init });
    return new Response(JSON.stringify({ id: "photo-post-id-123" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  const first = await handleJoksinRequest(
    photoRequest("/v1/photos/publish", { approvalSignature: signature }),
    env,
    fakeFetch,
  );
  assert.equal(first.status, 201);
  assert.equal((await first.json()).postId, "photo-post-id-123");
  assert.equal(requests.length, 1);
  assert.match(requests[0].url, /\/verified-joksin-page-id\/photos$/);
  assert.doesNotMatch(requests[0].url, /dedicated-joksin-page-token/);
  assert.equal(
    requests[0].init.headers.authorization,
    "Bearer dedicated-joksin-page-token",
  );
  assert.equal(requests[0].init.body.get("published"), "true");
  assert.match(requests[0].init.body.get("caption"), /Một mâm jokbal/);

  const duplicate = await handleJoksinRequest(
    photoRequest("/v1/photos/publish", { approvalSignature: signature }),
    env,
    fakeFetch,
  );
  assert.equal(duplicate.status, 409);
  assert.equal(requests.length, 1);
});

test("content changes invalidate approval and spoofed MIME is rejected", async () => {
  const digest = createHash("sha256").update(PNG_BYTES).digest("hex");
  const signature = await createApprovalSignature(
    API_KEY,
    IDEMPOTENCY_KEY,
    digest,
    "승인된 한국어",
    "Bản tiếng Việt đã duyệt",
  );
  const changed = await handleJoksinRequest(
    photoRequest("/v1/photos/publish", {
      approvalSignature: signature,
      form: photoForm({ captionKo: "승인 뒤 바뀐 한국어" }),
    }),
    baseEnv(),
  );
  assert.equal(changed.status, 403);

  const spoofed = await handleJoksinRequest(
    photoRequest("/v1/photos/dry-run", {
      form: photoForm({
        bytes: Uint8Array.from([0x47, 0x49, 0x46, 0x38]),
        type: "image/png",
      }),
    }),
    baseEnv(),
  );
  assert.equal(spoofed.status, 415);
});

test("read-only Page verification requires an exact official Graph ID match", async () => {
  const success = await handleJoksinRequest(
    new Request("https://publisher.example/v1/meta/verify", {
      headers: { authorization: "Bearer " + API_KEY },
    }),
    baseEnv(),
    async () => new Response(JSON.stringify({
      id: "verified-joksin-page-id",
      name: "족발신선생 박닌점 joksin.bacninh",
      link: "https://www.facebook.com/61591844516933/",
    }), { status: 200 }),
  );
  assert.equal(success.status, 200);

  const mismatch = await handleJoksinRequest(
    new Request("https://publisher.example/v1/meta/verify", {
      headers: { authorization: "Bearer " + API_KEY },
    }),
    baseEnv(),
    async () => new Response(JSON.stringify({
      id: "some-other-page",
      name: "Wrong page",
    }), { status: 200 }),
  );
  assert.equal(mismatch.status, 409);
});

test("browser-safe form authentication works only for verify and dry-run", async () => {
  const verifyForm = new FormData();
  verifyForm.append("apiKey", API_KEY);
  const verified = await handleJoksinRequest(
    new Request("https://publisher.example/v1/meta/verify", {
      method: "POST",
      body: verifyForm,
    }),
    baseEnv(),
    async () => new Response(JSON.stringify({
      id: "verified-joksin-page-id",
      name: "Joksin Bac Ninh",
    }), { status: 200 }),
  );
  assert.equal(verified.status, 200);

  const dryRunForm = photoForm();
  dryRunForm.append("apiKey", API_KEY);
  dryRunForm.append("idempotencyKey", IDEMPOTENCY_KEY + "-form");
  const dryRun = await handleJoksinRequest(
    new Request("https://publisher.example/v1/photos/dry-run", {
      method: "POST",
      body: dryRunForm,
    }),
    baseEnv(),
  );
  assert.equal(dryRun.status, 200);
  assert.equal((await dryRun.json()).publishAttempted, false);

  const consoleVerifyForm = new FormData();
  consoleVerifyForm.append("operation", "verify");
  consoleVerifyForm.append("apiKey", API_KEY);
  const consoleVerified = await handleJoksinRequest(
    new Request("https://publisher.example/", {
      method: "POST",
      body: consoleVerifyForm,
    }),
    baseEnv(),
    async () => new Response(JSON.stringify({
      id: "verified-joksin-page-id",
      name: "Joksin Bac Ninh",
    }), { status: 200 }),
  );
  assert.equal(consoleVerified.status, 200);
});
