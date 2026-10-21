"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const conditions = [
  {
    tag: "Autism Spectrum Disorder",
    headline: "Not talking yet? Avoids eye contact? Prefers playing alone?",
    body: "About 1 in 68 children in India is on the spectrum. With early therapy, children begin communicating and connecting at their own pace.",
    link: "/conditions/autism-vijayawada",
    desktopImg: `${IMG_DIR}/11-Condition-Autism-Desktop.jpg`,
    mobileImg: `${IMG_DIR}/12-Condition-Autism-Mobile.jpg`,
    altDesktop: "Child with autism engaging in play therapy at Meditron",
    altMobile: "Child with autism engaging in play therapy at Meditron",
  },
  {
    tag: "ADHD",
    headline: "Can\u2019t sit still? School keeps complaining?",
    body: "Around 1 in 15 school-age children lives with ADHD. It is not naughtiness and it is not your parenting.",
    link: "/conditions/adhd-vijayawada",
    desktopImg: `${IMG_DIR}/13-Condition-ADHD-Desktop.jpg`,
    mobileImg: `${IMG_DIR}/14-Condition-ADHD-Mobile.jpg`,
    altDesktop: "Active child with ADHD being supported in a therapy session",
    altMobile: "Active child with ADHD being supported in a therapy session",
  },
  {
    tag: "Cerebral Palsy",
    headline: "Late to sit, stand or walk? Stiff or floppy limbs?",
    body: "About 3 in 1,000 children in India are born with CP. With consistent physiotherapy, movement improves every single year.",
    link: "/conditions/cerebral-palsy-vijayawada",
    desktopImg: `${IMG_DIR}/15-Condition-Cerebral-Palsy-Desktop.jpg`,
    mobileImg: `${IMG_DIR}/16-Condition-Cerebral-Palsy-Mobile.jpg`,
    altDesktop: "Child with cerebral palsy during physiotherapy session",
    altMobile: "Child with cerebral palsy during physiotherapy session",
  },
  {
    tag: "Down Syndrome",
    headline: "Slower to learn, but faster to love.",
    body: "About 1 in 830 babies in India is born with Down syndrome. They learn everything \u2014 just on their own timeline.",
    link: "/conditions/down-syndrome-vijayawada",
    desktopImg: `${IMG_DIR}/17-Condition-Down-Syndrome-Desktop.jpg`,
    mobileImg: `${IMG_DIR}/18-Condition-Down-Syndrome-Mobile.jpg`,
    altDesktop: "Smiling child with Down syndrome learning with a therapist",
    altMobile: "Smiling child with Down syndrome learning with a therapist",
  },
];

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "nh-fade-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function ConditionsSection() {
  return (
    <section
      aria-labelledby="conditions-heading"
      className="bg-[var(--color-nh-cream)] py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2
            id="conditions-heading"
            className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-2xl md:text-4xl font-bold leading-tight"
          >
            It has a name. And it has a path.
          </h2>
        </FadeIn>

        {/* Alternating rows */}
        <div className="space-y-12 md:space-y-20">
          {conditions.map((c, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <FadeIn key={i}>
                {/* Desktop: alternating columns */}
                <div
                  className={`hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    imageLeft ? "" : "direction-rtl"
                  }`}
                  style={!imageLeft ? { direction: "rtl" } : undefined}
                >
                  {/* Image */}
                  <div className="rounded-3xl overflow-hidden shadow-lg" style={{ direction: "ltr" }}>
                    <Image
                      src={c.desktopImg}
                      alt={c.altDesktop}
                      width={900}
                      height={600}
                      className="w-full h-auto"
                      sizes="(max-width: 1200px) 50vw, 580px"
                    />
                  </div>
                  {/* Text */}
                  <div style={{ direction: "ltr" }}>
                    <span className="inline-block bg-[var(--color-nh-sage)]/15 text-[var(--color-nh-sage)] text-xs font-semibold font-[var(--font-nh-sans)] uppercase tracking-wider px-4 py-1.5 rounded-full">
                      {c.tag}
                    </span>
                    <h3 className="mt-4 font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-xl lg:text-2xl font-bold leading-snug">
                      {c.headline}
                    </h3>
                    <p className="mt-3 text-[var(--color-nh-teal)] text-base leading-relaxed font-[var(--font-nh-sans)] opacity-80">
                      {c.body}
                    </p>
                    <Link
                      href={c.link}
                      className="mt-4 inline-flex items-center gap-1 text-[var(--color-nh-terracotta)] font-semibold font-[var(--font-nh-sans)] text-sm hover:underline"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>

                {/* Mobile: stacked card */}
                <div className="md:hidden bg-white rounded-3xl overflow-hidden shadow-md">
                  <div>
                    <Image
                      src={c.mobileImg}
                      alt={c.altMobile}
                      width={800}
                      height={1000}
                      className="w-full h-auto"
                      sizes="90vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-[var(--color-nh-sage)]/15 text-[var(--color-nh-sage)] text-[10px] font-semibold font-[var(--font-nh-sans)] uppercase tracking-wider px-3 py-1 rounded-full">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-lg font-bold leading-snug">
                      {c.headline}
                    </h3>
                    <p className="mt-2 text-[var(--color-nh-teal)] text-sm leading-relaxed font-[var(--font-nh-sans)] opacity-80">
                      {c.body}
                    </p>
                    <Link
                      href={c.link}
                      className="mt-3 inline-flex items-center gap-1 text-[var(--color-nh-terracotta)] font-semibold font-[var(--font-nh-sans)] text-sm hover:underline"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Closing line */}
        <FadeIn className="text-center mt-14 md:mt-20">
          <p className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-lg md:text-2xl italic leading-relaxed max-w-2xl mx-auto">
            It is not your parenting. It is not too late.
            <br />
            It has a name &mdash; and a path.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
