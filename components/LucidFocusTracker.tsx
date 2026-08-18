"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/* ──────────────────────────────────────────────────────────────
   Lucid Focus — telemetry tracker (SDK v1.1)
   Streams page views, clicks, searches, time-on-page and session
   heartbeats to the Lucid Focus hub. What gets tracked is fixed
   by the SDK; init only takes the site token and the API base.
   Config is env-driven so the same build can point at a local hub
   in dev and the live hub in production.
   ────────────────────────────────────────────────────────────── */

type LucidFocusConfig = {
  apiKey: string;
  endpoint?: string;
};

type LucidFocusApi = {
  init: (config: LucidFocusConfig) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  track: (eventName: string, properties?: Record<string, unknown>) => void;
  page: (name?: string, properties?: Record<string, unknown>) => void;
  reset: () => void;
};

declare global {
  interface Window {
    LucidFocus?: LucidFocusApi;
  }
}

const SDK_TOKEN = process.env.NEXT_PUBLIC_LUCIDFOCUS_TOKEN;
const SDK_URL =
  process.env.NEXT_PUBLIC_LUCIDFOCUS_SDK_URL ??
  "https://www.mylucidfocus.com/sdk/lucidfocus.js";
const ENDPOINT =
  process.env.NEXT_PUBLIC_LUCIDFOCUS_ENDPOINT ??
  "https://www.mylucidfocus.com/api/v1";

export default function LucidFocusTracker() {
  const pathname = usePathname();

  // No token configured → stay completely inert (local builds, previews).
  // /admin is excluded: staff sessions aren't visitor analytics, and the SDK
  // fires a Login event for any form holding an email + password field.
  if (!SDK_TOKEN || pathname?.startsWith("/admin")) return null;

  return (
    <Script
      id="lucidfocus-sdk"
      src={SDK_URL}
      strategy="afterInteractive"
      onLoad={() => {
        window.LucidFocus?.init({ apiKey: SDK_TOKEN, endpoint: ENDPOINT });
      }}
    />
  );
}
