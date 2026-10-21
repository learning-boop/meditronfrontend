"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const slides = [
  {
    img: `${IMG_DIR}/01-Hero-A.jpg`,
    headline: "Why isn\u2019t my child talking yet?",
    telugu: "\u0C28\u0C3E \u0C2C\u0C3F\u0C21\u0C4D\u0C21 \u0C07\u0C02\u0C15\u0C3E \u0C0E\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C2E\u0C3E\u0C1F\u0C4D\u0C32\u0C3E\u0C21\u0C1F\u0C4D\u0C32\u0C47\u0C26\u0C41?",
    alt: "Indian toddler looking up at parent, not speaking yet",
  },
  {
    img: `${IMG_DIR}/02-Hero-B.jpg`,
    headline: "Why doesn\u2019t he look at me when I call?",
    telugu: "\u0C2A\u0C3F\u0C32\u0C3F\u0C38\u0C4D\u0C24\u0C47 \u0C0E\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C1A\u0C42\u0C21\u0C1F\u0C4D\u0C32\u0C47\u0C26\u0C41?",
    alt: "Child avoiding eye contact while parent calls their name",
  },
  {
    img: `${IMG_DIR}/03-Hero-C.jpg`,
    headline: "Why can\u2019t she sit still?",
    telugu: "\u0C0E\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C12\u0C15\u0C4D\u0C15 \u0C1A\u0C4B\u0C1F \u0C15\u0C42\u0C30\u0C4D\u0C1A\u0C4B\u0C32\u0C47\u0C15\u0C2A\u0C4B\u0C24\u0C41\u0C02\u0C26\u0C3F?",
    alt: "Restless child unable to sit still in a classroom setting",
  },
  {
    img: `${IMG_DIR}/04-Hero-D.jpg`,
    headline: "Why hasn\u2019t he started walking?",
    telugu: "\u0C07\u0C02\u0C15\u0C3E \u0C0E\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C28\u0C21\u0C35\u0C1F\u0C4D\u0C32\u0C47\u0C26\u0C41?",
    alt: "Toddler being supported while trying to take first steps",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const scrollToChecklist = () => {
    document
      .getElementById("checklist")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-[var(--color-nh-cream)] overflow-hidden"
    >
      {/* ── Desktop: two columns ── */}
      <div className="hidden md:grid md:grid-cols-[45fr_55fr] min-h-[85vh] max-w-[1400px] mx-auto">
        {/* Text column */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-16 z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-nh-sage)] font-[var(--font-nh-sans)] font-semibold mb-5">
            Child Development Centre &middot; Vijayawada
          </p>

          {/* Headline with fade */}
          <div className="relative min-h-[240px] lg:min-h-[220px]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h1
                  id={i === 0 ? "hero-heading" : undefined}
                  className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.15] font-bold"
                >
                  {s.headline}
                </h1>
                <p className="mt-3 font-[var(--font-nh-serif)] text-[var(--color-nh-sage)] text-xl lg:text-2xl italic">
                  {s.telugu}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[var(--color-nh-teal)] text-base lg:text-lg leading-relaxed font-[var(--font-nh-sans)] max-w-md">
            You&apos;ve noticed something. You&apos;re not wrong, and you&apos;re not alone.
          </p>

          <button
            onClick={scrollToChecklist}
            className="mt-8 inline-flex items-center gap-2 bg-[var(--color-nh-terracotta)] hover:bg-[#c4674d] text-white font-semibold font-[var(--font-nh-sans)] px-8 py-4 rounded-2xl transition-colors shadow-lg text-base w-fit cursor-pointer"
          >
            Find out why &darr;
          </button>

          <p className="mt-4 text-[var(--color-nh-ink)] text-xs font-[var(--font-nh-sans)] opacity-60">
            Free first visit &middot; Telugu &middot; Hindi &middot; English
          </p>
        </div>

        {/* Image column */}
        <div className="relative">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="55vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: image on top, text below ── */}
      <div className="md:hidden">
        {/* Image */}
        <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="px-5 py-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-nh-sage)] font-[var(--font-nh-sans)] font-semibold mb-4">
            Child Development Centre &middot; Vijayawada
          </p>

          <div className="relative min-h-[160px]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-x-0 top-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h1
                  className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-[1.75rem] leading-[1.2] font-bold"
                >
                  {s.headline}
                </h1>
                <p className="mt-2 font-[var(--font-nh-serif)] text-[var(--color-nh-sage)] text-lg italic">
                  {s.telugu}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[var(--color-nh-teal)] text-sm leading-relaxed font-[var(--font-nh-sans)]">
            You&apos;ve noticed something. You&apos;re not wrong, and you&apos;re not alone.
          </p>

          <button
            onClick={scrollToChecklist}
            className="mt-6 w-full bg-[var(--color-nh-terracotta)] hover:bg-[#c4674d] text-white font-semibold font-[var(--font-nh-sans)] px-6 py-4 rounded-2xl transition-colors shadow-lg text-base cursor-pointer"
          >
            Find out why &darr;
          </button>

          <p className="mt-3 text-center text-[var(--color-nh-ink)] text-xs font-[var(--font-nh-sans)] opacity-60">
            Free first visit &middot; Telugu &middot; Hindi &middot; English
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 md:left-auto md:translate-x-0 md:right-[27.5%]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "w-7 bg-[var(--color-nh-terracotta)]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
