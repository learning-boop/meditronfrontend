"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const steps = [
  {
    img: `${IMG_DIR}/21-Method-1-Understand.jpg`,
    step: 1,
    title: "Understand the child",
    desc: "A free 45-minute assessment. You sit in the room. No labels first \u2014 just your child.",
    alt: "Therapist observing a child during initial assessment at Meditron",
  },
  {
    img: `${IMG_DIR}/22-Method-2-Body.jpg`,
    step: 2,
    title: "Body",
    desc: "Physiotherapy and sensory integration build the foundation: balance, strength, calm.",
    alt: "Child doing physiotherapy exercises with therapist support",
  },
  {
    img: `${IMG_DIR}/23-Method-3-Activity.jpg`,
    step: 3,
    title: "Activity",
    desc: "Speech, occupational, behaviour and play therapy turn that foundation into daily skills.",
    alt: "Child engaged in speech therapy activity with toys",
  },
  {
    img: `${IMG_DIR}/24-Method-4-Participation.jpg`,
    step: 4,
    title: "Participation",
    desc: "School readiness, friendships, family life \u2014 the goal every step points to.",
    alt: "Child participating in group activity, showing social progress",
  },
];

const envPills = [
  "Environment: Telugu \u00b7 Hindi \u00b7 English \u00b7 Online sessions \u00b7 Amma\u2019s parents\u2019 circle",
  "Personal: your child\u2019s pace \u00b7 no judgement \u00b7 you decide the timing",
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
    <div ref={ref} className={`${className} ${visible ? "nh-fade-up" : "opacity-0"}`}>
      {children}
    </div>
  );
}

export default function MethodSection() {
  return (
    <section
      aria-labelledby="method-heading"
      className="bg-[var(--color-nh-cream)] py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2
            id="method-heading"
            className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-2xl md:text-4xl font-bold leading-tight"
          >
            How Dr Sirisha treats it &mdash; step by step
          </h2>
        </FadeIn>

        {/* ── 5a. Timeline ── */}

        {/* Desktop: horizontal 4-column */}
        <FadeIn className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-[calc(50%_-_60px)] left-[12.5%] right-[12.5%] h-0.5 bg-[var(--color-nh-terracotta)]/30" />

            {steps.map((s) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-md mb-5">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    sizes="280px"
                  />
                </div>
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-[var(--color-nh-sage)] flex items-center justify-center text-white font-bold font-[var(--font-nh-sans)] text-sm mb-3 relative z-10">
                  {s.step}
                </div>
                <h3 className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-lg font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[var(--color-nh-teal)] text-sm font-[var(--font-nh-sans)] opacity-80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((s, i) => (
            <FadeIn key={s.step} className="flex gap-4">
              {/* Left line + circle */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-[var(--color-nh-sage)] flex items-center justify-center text-white font-bold font-[var(--font-nh-sans)] text-xs">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-0.5 bg-[var(--color-nh-terracotta)]/30 my-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="rounded-2xl overflow-hidden shadow-md mb-3">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    sizes="70vw"
                  />
                </div>
                <h3 className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-base font-bold">
                  {s.title}
                </h3>
                <p className="mt-1 text-[var(--color-nh-teal)] text-sm font-[var(--font-nh-sans)] opacity-80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Environment pills */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 md:mt-14">
          {envPills.map((pill, i) => (
            <span
              key={i}
              className="inline-block bg-[var(--color-nh-sage)]/10 text-[var(--color-nh-teal)] text-xs font-[var(--font-nh-sans)] px-4 py-2.5 rounded-full text-center"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* ── 5b. Doctor's letter ── */}
        <FadeIn className="mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto">
            {/* Letter */}
            <div>
              <h3 className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-xl md:text-2xl font-bold italic mb-6">
                Dear Amma,
              </h3>
              <div className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-base md:text-lg leading-[1.9] space-y-4">
                <p>
                  I know why you&apos;re reading this. You&apos;ve been watching your child and something doesn&apos;t feel right. Maybe it&apos;s the words that should have come by now. Maybe it&apos;s the way they play alone, or how they struggle to sit still.
                </p>
                <p>
                  You&apos;ve probably been told to wait. &ldquo;Every child is different,&rdquo; they say. And they&apos;re right &mdash; every child is different. But you&apos;re also right to ask why.
                </p>
                <p>
                  At Meditron, we don&apos;t start with a label. We start with your child. We watch them play, move, respond. Then we build a plan &mdash; one that fits them, not a textbook. And you sit in the room for every session, because nobody knows your child like you do.
                </p>
                <p>
                  The first visit is free. Come and see how we work. No pressure, no jargon. Just a conversation about your child.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 border-t border-[var(--color-nh-sage)]/20 pt-6">
                <p className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] font-bold text-base">
                  Venkata Sirisha Matla
                </p>
                <p className="text-[var(--color-nh-teal)] text-sm font-[var(--font-nh-sans)] opacity-70 mt-1">
                  BPT &middot; Sensory Integration &middot; Brain Gym &middot; Founder, Meditron CDC
                </p>
                {/* Credential chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["BPT", "Sensory Integration", "Brain Gym (26 Movements)", "Intensive Care for Autism", "Speech-Language Techniques"].map(
                    (cred) => (
                      <span
                        key={cred}
                        className="inline-block bg-[var(--color-nh-sage)]/10 text-[var(--color-nh-teal)] text-[10px] font-[var(--font-nh-sans)] px-3 py-1 rounded-full"
                      >
                        {cred}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
