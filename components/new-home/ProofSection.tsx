"use client";

import { useRef, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

// Pick testimonials that mention school, friends, parties, or "Amma" first
const priorityIds = [1, 4, 5, 6, 2, 3];
const sorted = priorityIds
  .map((id) => testimonials.find((t) => t.id === id)!)
  .filter(Boolean);

const YOUTUBE_SHORTS = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3",
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[var(--color-nh-terracotta)]" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? "nh-fade-up" : "opacity-0"}`}>
      {children}
    </div>
  );
}

export default function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="bg-white py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <p className="text-[var(--color-nh-terracotta)] text-sm font-[var(--font-nh-sans)] font-semibold">
            &#9733;&#9733;&#9733;&#9733;&#9733; 4.9 on Google &middot; 128 reviews
          </p>
        </FadeIn>
        <FadeIn className="text-center mb-10 md:mb-14">
          <h2
            id="proof-heading"
            className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-2xl md:text-4xl font-bold leading-tight"
          >
            Words from the families we walk with.
          </h2>
        </FadeIn>

        {/* ── Testimonials ── */}

        {/* Mobile: horizontal snap-scroll */}
        <div className="md:hidden -mx-5 px-5 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {sorted.map((t) => (
            <div
              key={t.id}
              className="snap-start shrink-0 w-[85vw] max-w-[340px] bg-[var(--color-nh-cream)] rounded-3xl p-6 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-4">
                <p className="text-[var(--color-nh-teal)] text-sm leading-[1.85] font-[var(--font-nh-serif)] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--color-nh-sage)]/20 flex items-center justify-center shrink-0">
                  <span className="text-[var(--color-nh-sage)] font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[var(--color-nh-teal)] font-bold font-[var(--font-nh-sans)] text-sm">{t.name}</p>
                  <p className="text-[var(--color-nh-ink)] text-xs font-[var(--font-nh-sans)] opacity-50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-up grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {sorted.slice(0, 6).map((t) => (
            <FadeIn key={t.id}>
              <div className="bg-[var(--color-nh-cream)] rounded-3xl p-7 shadow-sm h-full flex flex-col">
                <Stars />
                <blockquote className="mt-4 flex-1">
                  <p className="text-[var(--color-nh-teal)] text-sm leading-[1.85] font-[var(--font-nh-serif)] italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-nh-sage)]/20 flex items-center justify-center shrink-0">
                    <span className="text-[var(--color-nh-sage)] font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-[var(--color-nh-teal)] font-bold font-[var(--font-nh-sans)] text-sm">{t.name}</p>
                    <p className="text-[var(--color-nh-ink)] text-xs font-[var(--font-nh-sans)] opacity-50">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── YouTube Shorts ── */}
        <FadeIn className="mt-14 md:mt-20">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:justify-center" style={{ scrollbarWidth: "none" }}>
            {YOUTUBE_SHORTS.map((url, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[200px] md:w-[220px] rounded-2xl overflow-hidden shadow-md bg-[var(--color-nh-ink)]/5"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src={url}
                  title={`Meditron parent story ${i + 1}`}
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.youtube.com/@Meditroncdc/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-nh-terracotta)] font-semibold font-[var(--font-nh-sans)] text-sm hover:underline"
            >
              See all Shorts &middot; @Meditroncdc &rarr;
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
