"use client";

import type { MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackedInMemory = new Set<string>();

export default function YouTubeOutboundLink({
  videoId,
  href,
  children,
  className,
}: {
  videoId: string;
  href: string;
  children: ReactNode;
  className?: string;
}) {
  function trackOnce(event: MouseEvent<HTMLAnchorElement>) {
    if (!event.isTrusted) return;

    const storageKey = `dabangzz:outbound-youtube:${videoId}`;
    if (trackedInMemory.has(storageKey)) return;

    try {
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, "1");
    } catch {
      // Tracking must never block navigation when storage is unavailable.
    }
    trackedInMemory.add(storageKey);

    window.gtag?.("event", "outbound_youtube_click", {
      event_category: "music",
      video_id: videoId,
      transport_type: "beacon",
    });
  }

  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={trackOnce}>{children}</a>;
}
