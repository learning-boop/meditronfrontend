"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./content";
import { useConcerns } from "./ConcernsContext";
import { WhatsAppGlyph } from "./ui";

/**
 * Keeps the two actions in reach: a bottom bar on phones and tablets. Hidden while
 * the hero's own buttons or the final section are on screen, so the actions never
 * appear twice. The desktop top bar is switched off now that the site's sticky
 * navbar (with its WhatsApp button) sits on this page; add `lg:block` back to
 * the lp-topbar div to bring it back.
 */
export default function StickyBar() {
  const { waUrl, selected } = useConcerns();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("hero-actions");
    const final = document.getElementById("talk");
    if (!heroActions || !final) return;
    let heroActionsVisible = false;
    let atFinal = false;
    const update = () => setShow(!heroActionsVisible && !atFinal);
    const heroObs = new IntersectionObserver(([e]) => {
      heroActionsVisible = e.isIntersecting;
      update();
    });
    const finalObs = new IntersectionObserver(
      ([e]) => {
        atFinal = e.isIntersecting;
        update();
      },
      { threshold: 0.25 },
    );
    heroObs.observe(heroActions);
    finalObs.observe(final);
    return () => {
      heroObs.disconnect();
      finalObs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop: a slim bar slides down from the top with the same two actions */}
      <div
        className={`lp-topbar fixed inset-x-0 top-0 z-40 hidden border-b border-[#c8d8dc] bg-[var(--lp-cream)]/95 px-8 backdrop-blur ${
          show ? "is-on" : ""
        }`}
        aria-hidden={!show}
      >
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-v2/meditron-logo-440.webp"
            alt="Meditron Child Development Centre"
            width={440}
            height={139}
            className="h-9 w-auto"
          />
          <p className="lp-serif hidden flex-1 text-center text-[1.0625rem] italic text-[var(--lp-teal)] xl:block">
            Worried about your child? Talk to Dr. Sirisha. The first visit is free.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_TEL}
              tabIndex={show ? 0 : -1}
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[var(--lp-teal)] underline decoration-[var(--lp-teal)]/30 underline-offset-4 hover:decoration-[var(--lp-teal)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={show ? 0 : -1}
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-[var(--lp-teal)] pl-2 pr-5 text-[0.9375rem] font-bold text-white hover:bg-[var(--lp-teal-deep)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--lp-wa)]">
                <WhatsAppGlyph className="h-[18px] w-[18px] text-white" />
              </span>
              Talk to the doctor on WhatsApp
              {selected.length > 0 && (
                <span className="rounded-full bg-white/20 px-2 text-[0.8125rem]">{selected.length}</span>
              )}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`lp-sticky fixed inset-x-0 bottom-0 z-40 border-t border-[#c8d8dc] bg-[var(--lp-cream)]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden ${
          show ? "is-on" : ""
        }`}
        aria-hidden={!show}
      >
        <div className="flex items-center gap-3">
          <a
            href={waUrl()}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={show ? 0 : -1}
            className="flex min-h-[50px] flex-1 items-center justify-center gap-2.5 rounded-full bg-[var(--lp-teal)] px-4 text-[1rem] font-bold text-white"
          >
            <WhatsAppGlyph className="h-5 w-5 text-[var(--lp-wa)]" />
            Talk to the doctor
            {selected.length > 0 && (
              <span className="rounded-full bg-white/20 px-2 text-[0.8125rem]">{selected.length}</span>
            )}
          </a>
          <a
            href={PHONE_TEL}
            tabIndex={show ? 0 : -1}
            aria-label="Call Meditron"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[var(--lp-teal)] text-[var(--lp-teal)]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
