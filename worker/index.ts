/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { communityPosts } from "../app/content/community-posts";
import {
  FACEBOOK_CRON_KIND,
  publishScheduledFacebookPost,
} from "./facebook-publisher";

interface Env {
  ASSETS: Fetcher;
  DB?: D1Database;
  META_PAGE_ACCESS_TOKEN?: string;
  META_PAGE_ID?: string;
  META_FACEBOOK_AUTOMATION_ENABLED?: string;
  META_GRAPH_API_VERSION?: string;
  META_SITE_URL?: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

interface ScheduledController {
  cron: string;
  scheduledTime: number;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },

  async scheduled(controller: ScheduledController, env: Env): Promise<void> {
    const preferredKind = FACEBOOK_CRON_KIND[controller.cron];
    if (!preferredKind) return;

    const result = await publishScheduledFacebookPost(
      communityPosts,
      new Date(controller.scheduledTime),
      preferredKind,
      env,
    );
    console.log(`Facebook publisher: ${result.status}${"slug" in result ? ` (${result.slug})` : ""}`);
  },
};

export default worker;
