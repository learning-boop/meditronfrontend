"use client";

import { useEffect, useState } from "react";
import { IMG } from "./content";

const KEY = "meditron-intro-seen";

/*
 * Runs while the HTML is still being read, before anything paints:
 * returning visitors and people who prefer reduced motion skip the splash,
 * first-time visitors are remembered so they only see it once.
 */
const SKIP_SCRIPT = `(function(){try{var e=document.getElementById("lp-intro");if(!e)return;var r=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r||localStorage.getItem("${KEY}")){e.setAttribute("data-skip","")}else{localStorage.setItem("${KEY}","1")}}catch(_){}})();`;

/**
 * First-visit logo animation: the emblem settles in, the name is revealed beside it,
 * then the cream curtain lifts onto the hero. About 1.5 seconds, tap to skip.
 * The timing lives in CSS (landing.css), so it plays and leaves even before
 * React has loaded; React only removes it from the page afterwards.
 */
export default function IntroSplash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const el = document.getElementById("lp-intro");
    const skipped = !el || el.hasAttribute("data-skip");
    const t = window.setTimeout(() => setGone(true), skipped ? 0 : 1800);
    return () => window.clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <>
      <div id="lp-intro" className="lp-intro" aria-hidden="true" suppressHydrationWarning onClick={() => setGone(true)}>
        <div className="lp-intro-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/logo-emblem.webp`} alt="" width={183} height={200} className="lp-intro-emblem" fetchPriority="high" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/logo-wordmark.webp`} alt="" width={428} height={200} className="lp-intro-word" fetchPriority="high" />
        </div>
        <span className="lp-intro-line" />
      </div>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
    </>
  );
}
