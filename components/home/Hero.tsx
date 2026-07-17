"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ClipboardList } from "lucide-react";
import { NAP } from "@/lib/data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    "Hi Meditron, I'd like to book a free assessment for my child."
  )}`;

  const sectionRef = useRef<HTMLElement>(null);

  // Raw mouse position normalised to -1 → +1
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring smoothing gives the "floating" feel
  const springX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18 });

  // Map to pixel offsets — keep subtle so it feels elegant, not dizzying
  const translateX = useTransform(springX, [-1, 1], [-22, 22]);
  const translateY = useTransform(springY, [-1, 1], [-14, 14]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    rawY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >

      {/* ── Mobile banner — shown below md ── */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/mobile_banner.png"
          alt="Meditron Child Development Centre — caring therapists with children in Vijayawada"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Desktop: Layer 1 — static background ── */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/background-1.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Desktop: Layer 2 — people (parallax float) ── */}
      {/* scale(1.06) gives edge buffer so movement never reveals gaps */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{ translateX, translateY, scale: 1.06 }}
      >
        <Image
          src="/images/people.png"
          alt="Therapists and children at Meditron Child Development Centre"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/20"
      />

      {/* ── Centered content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
          The care you give at home,
          <br />
          <span className="text-accent">we continue here.</span>
        </h1>

        {/* Subline */}
        <p className="text-sm sm:text-xl text-white/85 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
          Expert therapy for Autism, ADHD, Cerebral Palsy &amp; Down Syndrome
          — with a mother&apos;s patience.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-colors shadow-xl text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-colors shadow-xl text-sm sm:text-base"
          >
            <ClipboardList className="w-5 h-5 shrink-0" />
            Book Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
