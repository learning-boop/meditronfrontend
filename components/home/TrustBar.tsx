"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type StatSlide = {
  kind: "stat";
  number: string;
  title: string;
  sub: string;
  duration: number;
};

type MessageSlide = {
  kind: "message";
  symbol: string;
  title: string;
  sub: string;
  duration: number;
};

type Slide = StatSlide | MessageSlide;

const slides: Slide[] = [
  {
    kind: "stat",
    number: "8+",
    title: "Years of Experience",
    sub: "Years spent learning what each child needs.",
    duration: 500,
  },
  {
    kind: "stat",
    number: "500+",
    title: "Children Guided",
    sub: "Every one of them, someone's whole world.",
    duration: 500,
  },
  {
    kind: "stat",
    number: "1000s",
    title: "of Small Firsts",
    sub: "First words. First steps. First eye contact — celebrated here every week.",
    duration: 600,
  },
  {
    kind: "message",
    symbol: "\u201C",
    title: "అమ్మా, మీ బిడ్డ ఎవరికంటే తక్కువ కాదు.",
    sub: "ప్రతి బిడ్డ ఒక్కో పువ్వు — కొన్ని పువ్వులు కాస్త ఆలస్యంగా వికసిస్తాయి, అంతే.",
    duration: 1000,
  },
];

const FADE_MS = 500;

export default function TrustBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    const duration = slides[current].duration;
    const t1 = setTimeout(() => setVisible(false), duration);
    const t2 = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setVisible(true);
    }, duration + FADE_MS);
    timers.current = [t1, t2];
    return clearAll;
  }, [current, clearAll]);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      clearAll();
      setVisible(false);
      const t = setTimeout(() => {
        setCurrent(index);
        setVisible(true);
      }, FADE_MS);
      timers.current = [t];
    },
    [current, clearAll]
  );

  const slide = slides[current];

  return (
    <section className="bg-primary-dark py-12" aria-label="Meditron — our impact">
      <div className="flex items-center gap-3 sm:gap-5 px-4 sm:px-6 lg:px-8">

        {/* ── Fading content: left number + right text ── */}
        <div
          className={`flex items-center gap-5 flex-1 min-w-0 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Left — big number or quote symbol */}
          <span className="text-accent font-black text-4xl sm:text-5xl lg:text-6xl tabular-nums leading-none shrink-0 w-16 sm:w-24 lg:w-32 text-center">
            {slide.kind === "stat" ? slide.number : slide.symbol}
          </span>

          {/* Thin vertical divider */}
          <div className="w-px self-stretch bg-white/20 shrink-0" />

          {/* Right — title top, sub bottom */}
          <div className="min-w-0">
            <p className="text-white font-bold text-sm sm:text-xl leading-snug line-clamp-2">
              {slide.title}
            </p>
            <p className="text-white/55 text-sm sm:text-base italic mt-1 leading-snug line-clamp-2">
              {slide.sub}
            </p>
          </div>
        </div>

        {/* ── Dot nav — stacked vertically on the right edge ── */}
        <div
          className="flex flex-col gap-1.5 shrink-0 ml-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              onClick={() => goTo(i)}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent h-4"
                  : "bg-white/25 hover:bg-white/50 h-1.5"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
