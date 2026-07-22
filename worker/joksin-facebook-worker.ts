const DEFAULT_GRAPH_VERSION = "v25.0";
const DEFAULT_MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_CAPTION_CHARS = 2_000;
const IDEMPOTENCY_TTL_MS = 7 * 24 * 60 * 60 * 1_000;

type FileLike = {
  name?: string;
  type: string;
  size: number;
  arrayBuffer(): Promise<ArrayBuffer>;
};

type DurableObjectStubLike = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

type DurableObjectNamespaceLike = {
  idFromName(name: string): unknown;
  get(id: unknown): DurableObjectStubLike;
};

type DurableObjectStorageLike = {
  get<T>(key: string): Promise<T | undefined>;
  put<T>(key: string, value: T): Promise<void>;
  transaction<T>(callback: (transaction: DurableObjectStorageLike) => Promise<T>): Promise<T>;
};

type DurableObjectStateLike = {
  storage: DurableObjectStorageLike;
};

export type JoksinEnv = {
  JOKSIN_PUBLISH_API_KEY?: string;
  JOKSIN_META_PAGE_ACCESS_TOKEN?: string;
  JOKSIN_META_PAGE_ID?: string;
  JOKSIN_FACEBOOK_PUBLISH_ENABLED?: string;
  JOKSIN_META_GRAPH_API_VERSION?: string;
  JOKSIN_MAX_IMAGE_BYTES?: string;
  JOKSIN_GATE?: DurableObjectNamespaceLike;
};

type PreparedPhoto = {
  bytes: Uint8Array;
  contentType: "image/jpeg" | "image/png";
  filename: string;
  imageSha256: string;
  captionKo: string;
  captionVi: string;
  caption: string;
};

type GateState = {
  status: "processing" | "published" | "failed";
  expiresAt: number;
  postId?: string;
};

class HttpError extends Error {
  readonly status: number;
  readonly details?: Record<string, unknown>;

  constructor(
    status: number,
    message: string,
    details?: Record<string, unknown>,
  ) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

function parsePositiveInteger(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function base64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function hex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256(value: Uint8Array | string) {
  const input = typeof value === "string" ? new TextEncoder().encode(value) : value;
  const buffer = new ArrayBuffer(input.byteLength);
  new Uint8Array(buffer).set(input);
  return new Uint8Array(await crypto.subtle.digest("SHA-256", buffer));
}

async function secureEqual(left: string, right: string) {
  const [leftHash, rightHash] = await Promise.all([sha256(left), sha256(right)]);
  let difference = 0;
  for (let index = 0; index < leftHash.length; index += 1) {
    difference |= leftHash[index] ^ rightHash[index];
  }
  return difference === 0;
}

function canonicalApprovalPayload(
  idempotencyKey: string,
  imageSha256: string,
  captionKo: string,
  captionVi: string,
) {
  return JSON.stringify({
    version: 1,
    idempotencyKey,
    imageSha256,
    captionKo,
    captionVi,
  });
}

export async function createApprovalSignature(
  apiKey: string,
  idempotencyKey: string,
  imageSha256: string,
  captionKo: string,
  captionVi: string,
) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(apiKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(
      canonicalApprovalPayload(idempotencyKey, imageSha256, captionKo, captionVi),
    ),
  );
  return base64Url(new Uint8Array(signature));
}

function getBearerToken(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  return authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
}

async function requireAuthentication(request: Request, env: JoksinEnv) {
  if (!env.JOKSIN_PUBLISH_API_KEY) {
    throw new HttpError(503, "Publisher API credentials are not configured");
  }
  const provided = getBearerToken(request);
  if (!provided || !(await secureEqual(provided, env.JOKSIN_PUBLISH_API_KEY))) {
    throw new HttpError(401, "Authentication required");
  }
}

function requireIdempotencyKey(request: Request) {
  const key = request.headers.get("idempotency-key") || "";
  if (!/^[A-Za-z0-9._:-]{16,128}$/.test(key)) {
    throw new HttpError(400, "A valid Idempotency-Key header is required");
  }
  return key;
}

function isFileLike(value: FormDataEntryValue | null): value is FormDataEntryValue & FileLike {
  return Boolean(
    value
    && typeof value !== "string"
    && typeof (value as FileLike).arrayBuffer === "function"
    && typeof (value as FileLike).size === "number"
    && typeof (value as FileLike).type === "string",
  );
}

function normalizeCaption(value: FormDataEntryValue | null, field: string) {
  if (typeof value !== "string") throw new HttpError(400, field + " is required");
  const normalized = value.replace(/\r\n/g, "\n").trim();
  if (!normalized) throw new HttpError(400, field + " is required");
  if (normalized.length > MAX_CAPTION_CHARS) {
    throw new HttpError(400, field + " exceeds " + MAX_CAPTION_CHARS + " characters");
  }
  return normalized;
}

function detectImageType(bytes: Uint8Array) {
  const jpeg = bytes.length >= 3
    && bytes[0] === 0xff
    && bytes[1] === 0xd8
    && bytes[2] === 0xff;
  const png = bytes.length >= 8
    && bytes[0] === 0x89
    && bytes[1] === 0x50
    && bytes[2] === 0x4e
    && bytes[3] === 0x47
    && bytes[4] === 0x0d
    && bytes[5] === 0x0a
    && bytes[6] === 0x1a
    && bytes[7] === 0x0a;
  return jpeg ? "image/jpeg" : png ? "image/png" : null;
}

async function preparePhoto(request: Request, env: JoksinEnv): Promise<PreparedPhoto> {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data;")) {
    throw new HttpError(415, "multipart/form-data is required");
  }

  const maxBytes = parsePositiveInteger(env.JOKSIN_MAX_IMAGE_BYTES, DEFAULT_MAX_IMAGE_BYTES);
  const contentLength = Number.parseInt(request.headers.get("content-length") || "0", 10);
  if (contentLength > maxBytes + 512 * 1024) {
    throw new HttpError(413, "Request body is too large");
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    throw new HttpError(400, "Invalid multipart request");
  }

  const image = form.get("image");
  if (!isFileLike(image)) throw new HttpError(400, "image is required");
  if (image.size <= 0) throw new HttpError(400, "image is empty");
  if (image.size > maxBytes) throw new HttpError(413, "image exceeds the configured limit");
  if (image.type !== "image/jpeg" && image.type !== "image/png") {
    throw new HttpError(415, "Only JPEG and PNG images are accepted");
  }

  const bytes = new Uint8Array(await image.arrayBuffer());
  const detected = detectImageType(bytes);
  if (!detected || detected !== image.type) {
    throw new HttpError(415, "Image MIME type does not match its file signature");
  }

  const captionKo = normalizeCaption(form.get("captionKo"), "captionKo");
  const captionVi = normalizeCaption(form.get("captionVi"), "captionVi");
  const imageSha256 = hex(await sha256(bytes));
  const extension = detected === "image/jpeg" ? "jpg" : "png";

  return {
    bytes,
    contentType: detected,
    filename: "joksin-" + imageSha256.slice(0, 12) + "." + extension,
    imageSha256,
    captionKo,
    captionVi,
    caption: captionKo + "\n\n———\n\n" + captionVi,
  };
}

function graphRoot(env: JoksinEnv) {
  const version = env.JOKSIN_META_GRAPH_API_VERSION || DEFAULT_GRAPH_VERSION;
  if (!/^v\d+\.\d+$/.test(version)) {
    throw new HttpError(503, "Meta Graph API version is invalid");
  }
  return "https://graph.facebook.com/" + version;
}

async function graphJson(
  response: Response,
  operation: string,
) {
  let body: Record<string, unknown> = {};
  try {
    body = await response.json() as Record<string, unknown>;
  } catch {
    body = {};
  }

  if (!response.ok) {
    const graphError = body.error && typeof body.error === "object"
      ? body.error as Record<string, unknown>
      : {};
    throw new HttpError(502, "Meta " + operation + " failed", {
      upstreamStatus: response.status,
      graphCode: typeof graphError.code === "number" ? graphError.code : undefined,
      graphType: typeof graphError.type === "string" ? graphError.type : undefined,
    });
  }
  return body;
}

async function verifyMetaPage(env: JoksinEnv, fetchImpl: typeof fetch) {
  if (!env.JOKSIN_META_PAGE_ACCESS_TOKEN || !env.JOKSIN_META_PAGE_ID) {
    throw new HttpError(503, "Dedicated Meta Page credentials are not configured");
  }

  const url = new URL(
    graphRoot(env) + "/" + encodeURIComponent(env.JOKSIN_META_PAGE_ID),
  );
  url.searchParams.set("fields", "id,name,link");
  const response = await fetchImpl(url, {
    headers: { authorization: "Bearer " + env.JOKSIN_META_PAGE_ACCESS_TOKEN },
  });
  const page = await graphJson(response, "Page verification");
  if (page.id !== env.JOKSIN_META_PAGE_ID) {
    throw new HttpError(409, "Configured Page ID did not match Meta response");
  }
  return {
    id: page.id,
    name: typeof page.name === "string" ? page.name : null,
    link: typeof page.link === "string" ? page.link : null,
  };
}

async function gateRequest(
  env: JoksinEnv,
  idempotencyKey: string,
  path: "/claim" | "/finish",
  body: Record<string, unknown>,
) {
  if (!env.JOKSIN_GATE) {
    throw new HttpError(503, "Idempotency gate is not configured");
  }
  const id = env.JOKSIN_GATE.idFromName("photo:" + idempotencyKey);
  const response = await env.JOKSIN_GATE.get(id).fetch("https://joksin-gate.internal" + path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  let result: Record<string, unknown> = {};
  try {
    result = await response.json() as Record<string, unknown>;
  } catch {
    result = {};
  }
  return { response, result };
}

async function claimIdempotency(env: JoksinEnv, idempotencyKey: string) {
  const { response, result } = await gateRequest(env, idempotencyKey, "/claim", {
    expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
  });
  if (response.status === 409) {
    throw new HttpError(409, "This Idempotency-Key has already been used", {
      priorStatus: typeof result.status === "string" ? result.status : "unknown",
    });
  }
  if (!response.ok) throw new HttpError(503, "Idempotency gate failed");
}

async function finishIdempotency(
  env: JoksinEnv,
  idempotencyKey: string,
  status: "published" | "failed",
  postId?: string,
) {
  await gateRequest(env, idempotencyKey, "/finish", {
    status,
    postId,
    expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
  });
}

async function publishPhoto(
  photo: PreparedPhoto,
  env: JoksinEnv,
  fetchImpl: typeof fetch,
) {
  if (!env.JOKSIN_META_PAGE_ACCESS_TOKEN || !env.JOKSIN_META_PAGE_ID) {
    throw new HttpError(503, "Dedicated Meta Page credentials are not configured");
  }

  const form = new FormData();
  const imageBuffer = new ArrayBuffer(photo.bytes.byteLength);
  new Uint8Array(imageBuffer).set(photo.bytes);
  form.append("source", new Blob([imageBuffer], { type: photo.contentType }), photo.filename);
  form.append("caption", photo.caption);
  form.append("published", "true");

  const response = await fetchImpl(
    graphRoot(env) + "/" + encodeURIComponent(env.JOKSIN_META_PAGE_ID) + "/photos",
    {
      method: "POST",
      headers: { authorization: "Bearer " + env.JOKSIN_META_PAGE_ACCESS_TOKEN },
      body: form,
    },
  );
  const published = await graphJson(response, "photo publish");
  if (typeof published.id !== "string" || !published.id) {
    throw new HttpError(502, "Meta photo publish response did not include an id");
  }
  return published.id;
}

function readiness(env: JoksinEnv) {
  const apiKeyConfigured = Boolean(env.JOKSIN_PUBLISH_API_KEY);
  const pageCredentialsConfigured = Boolean(
    env.JOKSIN_META_PAGE_ACCESS_TOKEN && env.JOKSIN_META_PAGE_ID,
  );
  const idempotencyConfigured = Boolean(env.JOKSIN_GATE);
  const publishEnabled = env.JOKSIN_FACEBOOK_PUBLISH_ENABLED === "true";
  return {
    service: "joksin-bacninh-facebook-publisher",
    publishEnabled,
    ready: apiKeyConfigured && pageCredentialsConfigured && idempotencyConfigured && publishEnabled,
    apiKeyConfigured,
    pageCredentialsConfigured,
    idempotencyConfigured,
  };
}

export async function handleJoksinRequest(
  request: Request,
  env: JoksinEnv,
  fetchImpl: typeof fetch = fetch,
) {
  const url = new URL(request.url);

  try {
    if (url.pathname === "/health") {
      if (request.method !== "GET") throw new HttpError(405, "Method not allowed");
      return json(readiness(env));
    }

    if (url.pathname === "/v1/meta/verify") {
      if (request.method !== "GET") throw new HttpError(405, "Method not allowed");
      await requireAuthentication(request, env);
      return json({ ok: true, page: await verifyMetaPage(env, fetchImpl) });
    }

    if (url.pathname === "/v1/photos/dry-run") {
      if (request.method !== "POST") throw new HttpError(405, "Method not allowed");
      await requireAuthentication(request, env);
      const idempotencyKey = requireIdempotencyKey(request);
      const photo = await preparePhoto(request, env);
      return json({
        ok: true,
        publishAttempted: false,
        approvalRequired: true,
        approvalPayload: {
          version: 1,
          idempotencyKey,
          imageSha256: photo.imageSha256,
          captionKo: photo.captionKo,
          captionVi: photo.captionVi,
        },
        image: {
          sha256: photo.imageSha256,
          bytes: photo.bytes.byteLength,
          contentType: photo.contentType,
        },
      });
    }

    if (url.pathname === "/v1/photos/publish") {
      if (request.method !== "POST") throw new HttpError(405, "Method not allowed");
      await requireAuthentication(request, env);
      if (env.JOKSIN_FACEBOOK_PUBLISH_ENABLED !== "true") {
        throw new HttpError(503, "Publishing is disabled");
      }

      const idempotencyKey = requireIdempotencyKey(request);
      const photo = await preparePhoto(request, env);
      const providedSignature = request.headers.get("x-joksin-approval-signature") || "";
      const expectedSignature = await createApprovalSignature(
        env.JOKSIN_PUBLISH_API_KEY!,
        idempotencyKey,
        photo.imageSha256,
        photo.captionKo,
        photo.captionVi,
      );
      if (!providedSignature || !(await secureEqual(providedSignature, expectedSignature))) {
        throw new HttpError(403, "Final approval signature is missing or invalid");
      }

      await claimIdempotency(env, idempotencyKey);
      try {
        const postId = await publishPhoto(photo, env, fetchImpl);
        await finishIdempotency(env, idempotencyKey, "published", postId);
        return json({ ok: true, status: "published", postId }, 201);
      } catch (error) {
        await finishIdempotency(env, idempotencyKey, "failed");
        throw error;
      }
    }

    throw new HttpError(404, "Not found");
  } catch (error) {
    if (error instanceof HttpError) {
      return json({
        ok: false,
        error: error.message,
        ...(error.details ? { details: error.details } : {}),
      }, error.status);
    }
    return json({ ok: false, error: "Unexpected publisher error" }, 500);
  }
}

export class JoksinPublishGate {
  private readonly state: DurableObjectStateLike;

  constructor(state: DurableObjectStateLike) {
    this.state = state;
  }

  async fetch(request: Request) {
    const url = new URL(request.url);
    if (request.method !== "POST") return json({ ok: false }, 405);

    const payload = await request.json() as Partial<GateState>;
    if (url.pathname === "/claim") {
      const result = await this.state.storage.transaction(async (transaction) => {
        const existing = await transaction.get<GateState>("state");
        if (existing && existing.expiresAt > Date.now()) {
          return { claimed: false, status: existing.status };
        }
        const next: GateState = {
          status: "processing",
          expiresAt: typeof payload.expiresAt === "number"
            ? payload.expiresAt
            : Date.now() + IDEMPOTENCY_TTL_MS,
        };
        await transaction.put("state", next);
        return { claimed: true, status: next.status };
      });
      return json(result, result.claimed ? 201 : 409);
    }

    if (url.pathname === "/finish") {
      if (payload.status !== "published" && payload.status !== "failed") {
        return json({ ok: false }, 400);
      }
      await this.state.storage.put("state", {
        status: payload.status,
        expiresAt: typeof payload.expiresAt === "number"
          ? payload.expiresAt
          : Date.now() + IDEMPOTENCY_TTL_MS,
        ...(typeof payload.postId === "string" ? { postId: payload.postId } : {}),
      } satisfies GateState);
      return json({ ok: true });
    }

    return json({ ok: false }, 404);
  }
}

const joksinWorker = {
  fetch(request: Request, env: JoksinEnv) {
    return handleJoksinRequest(request, env);
  },
};

export default joksinWorker;
