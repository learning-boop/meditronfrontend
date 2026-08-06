"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const total = testimonials.length; // 6

// Padded array for seamless loop: [last, ...all, first, second]
const PADDED = [
  testimonials[total - 1],
  ...testimonials,
  testimonials[0],
  testimonials[1],
];
const N = PADDED.length; // total + 3 = 9

// Track width as % of container: (N/3) * 100%
// Each card as % of track: 100/N %
// translateX per step: 100/N % of track = 100/3 % of container = 1 card width ✓
const TRACK_WIDTH_PCT = (N / 3) * 100;
const CARD_WIDTH_PCT = 100 / N;

export default function Testimonials() {
  // trackIdx: which index in PADDED is the center card (starts at 1 = testimonials[0])
  const [trackIdx, setTrackIdx] = useState(1);
  const [animated, setAnimated] = useState(true);
  const resetting = useRef(false);

  // Auto-advance every 4.5 s
  useEffect(() => {
    const id = setInterval(() => {
      if (resetting.current) return;
      setAnimated(true);
      setTrackIdx((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  // When we hit the clone at position total+1, instantly jump back to position 1
  useEffect(() => {
    if (trackIdx === total + 1) {
      resetting.current = true;
      const t = setTimeout(() => {
        setAnimated(false);
        setTrackIdx(1);
        // Re-enable animation after the paint so the jump is invisible
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimated(true);
            resetting.current = false;
          })
        );
      }, 520);
      return () => clearTimeout(t);
    }
  }, [trackIdx]);

  const translateXPct = -((trackIdx - 1) * CARD_WIDTH_PCT);

  return (
    <section
      className="relative hidden md:block bg-cream py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Watermark quote */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-black text-primary pointer-events-none select-none leading-none"
        style={{ fontSize: "38rem", opacity: 0.03 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Header */}
      <div className="relative text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-[0.22em]">
          <span className="block w-8 h-px bg-accent/40" />
          Success Stories
          <span className="block w-8 h-px bg-accent/40" />
        </span>
        <h2
          id="testimonials-heading"
          className="mt-4 text-3xl sm:text-4xl font-extrabold text-confident-navy leading-tight"
        >
          Words from the families
          <br />
          <span className="text-primary">we walk with</span>
        </h2>
        <p className="mt-4 text-dusty-blue text-sm sm:text-base leading-relaxed">
          Every review is a milestone someone&apos;s child reached.
          Real families. Real journeys. Vijayawada.
        </p>
      </div>

      {/* ── Carousel ── */}
      {/* Outer: clips the sliding track horizontally; py-6 gives room for shadow */}
      <div className="relative max-w-5xl mx-auto" style={{ overflow: "hidden", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
        {/* Track */}
        <div
          style={{
            display: "flex",
            width: `${TRACK_WIDTH_PCT}%`,
            transform: `translateX(${translateXPct}%)`,
            transition: animated ? "transform 520ms cubic-bezier(0.4,0,0.2,1)" : "none",
            alignItems: "center",
          }}
        >
          {PADDED.map((t, i) => {
            const isCenter = i === trackIdx;
            return (
              <div
                key={`${t.id}-${i}`}
                style={{ flex: `0 0 ${CARD_WIDTH_PCT}%` }}
                className="px-3"
              >
                {isCenter ? (
                  /* ── Featured center card — dark teal ── */
                  <div className="relative bg-primary-dark rounded-[1.75rem] p-7 shadow-2xl flex flex-col gap-5 transition-all duration-500">
                    {/* Accent bar */}
                    <div className="h-px bg-gradient-to-r from-accent via-accent/40 to-transparent rounded-full" />

                    <Stars />

                    <blockquote className="flex-1">
                      <span
                        className="text-accent font-black text-4xl leading-none block mb-2"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <p className="text-white/85 text-sm sm:text-base leading-[1.85] italic font-serif">
                        {t.quote}
                      </p>
                    </blockquote>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-accent font-black text-sm">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        <p className="text-white/45 text-xs mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── Side cards — white ── */
                  <div className="bg-white rounded-[1.75rem] p-7 shadow-md flex flex-col gap-5 opacity-80 transition-all duration-500">
                    <Stars />

                    <blockquote className="flex-1">
                      <p className="text-navy text-sm leading-[1.85] italic font-serif">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </blockquote>

                    <div className="h-px bg-primary-light" />

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                        <span className="text-primary font-black text-sm">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-confident-navy font-bold text-sm">{t.name}</p>
                        <p className="text-sage text-xs mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="relative flex justify-center gap-2 mt-6">
        {testimonials.map((t, i) => {
          const isActive = PADDED[trackIdx]?.id === t.id;
          return (
            <button
              key={t.id}
              onClick={() => {
                if (resetting.current) return;
                setAnimated(true);
                setTrackIdx(i + 1);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-primary" : "w-2 bg-sage/50 hover:bg-sage"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="relative text-center text-sage text-xs mt-8 tracking-wide">
        All stories are from real Meditron families in Vijayawada &mdash; shared with their permission.
      </p>
    </section>
  );
}
