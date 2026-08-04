"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { IconWhatsApp } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

const BANNERS = [
  {
    src: "/images/Mother obsvering/1.png",
    alt: "Mother watching her child during physiotherapy session at Meditron, Vijayawada",
  },
  {
    src: "/images/Mother obsvering/2.png",
    alt: "Father observing his child's balance therapy session at Meditron Child Development Centre",
  },
];

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book a free assessment for my child."
)}`;

const ease = [0.22, 0.68, 0.28, 1] as const;

/** Mobile — Muggu hero. Not rendered at md and above. */
function MobileHero() {
  return (
    <section
      className="md:hidden relative overflow-hidden bg-cream px-5 pt-6 pb-8"
      aria-label="Meditron Child Development Centre, Vijayawada"
    >
      <div className="absolute inset-0 opacity-50 muggu-dots" aria-hidden="true" />
      <div
        className="absolute -top-16 -right-20 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(214,120,97,0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-2.5 py-1 font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[#8d7521]"
        >
          <span className="h-[5px] w-[5px] rounded-full bg-gold" aria-hidden="true" />
          Vijayawada · Since 2018
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-4 font-[family-name:var(--font-telugu-display)] text-[1.3rem] leading-[1.5] text-primary"
        >
          అమ్మా, మీ బిడ్డ ఎవరికంటే తక్కువ కాదు.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease }}
          className="mt-2.5 font-heading text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-confident-navy text-pretty"
        >
          Your child is not broken.
          <span className="text-accent"> Just early in their own story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease }}
          className="mt-3.5 max-w-[20rem] font-serif text-[0.97rem] leading-[1.7] text-[#5b6b80]"
        >
          Speech, occupational and physiotherapy for Autism, ADHD, Cerebral
          Palsy and Down Syndrome — by people who sit with you, in Telugu, at
          your pace.
        </motion.p>

        {/* temple-arch photo */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease }}
          className="relative mt-5"
        >
          <div
            className="absolute -inset-x-2 -top-2 bottom-2.5 border border-primary/25 muggu-arch-outline"
            aria-hidden="true"
          />
          <div className="relative h-[300px] overflow-hidden shadow-[0_24px_44px_-22px_rgba(42,58,87,0.45)] muggu-arch">
            <Image
              src="/images/Mother obsvering/mobile1.png"
              alt={BANNERS[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_28%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[rgba(20,30,45,0.5)] via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2.5 p-4">
              <p className="font-[family-name:var(--font-telugu)] text-[0.9rem] leading-snug text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                తల్లి కళ్ల ముందే
                <br />
                ప్రతి థెరపీ సెషన్.
              </p>
              <div className="shrink-0 rounded-xl bg-white/90 px-2.5 py-1.5 text-center">
                <span className="block font-heading text-[0.95rem] font-extrabold leading-none text-primary">
                  45
                </span>
                <span className="mt-0.5 block text-[0.5rem] font-extrabold uppercase tracking-[0.1em] text-dusty-blue">
                  min visit
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
          className="mt-5 flex flex-col gap-2.5"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="muggu-pulse inline-flex items-center justify-center gap-2.5 rounded-[1.15rem] bg-[#25D366] px-6 py-4 font-heading text-[0.95rem] font-extrabold text-white shadow-[0_14px_26px_-12px_rgba(37,211,102,0.7)]"
          >
            <IconWhatsApp className="h-[19px] w-[19px] shrink-0" />
            WhatsApp Us — free reply
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-[1.15rem] border-[1.5px] border-primary/25 bg-white px-6 py-4 font-heading text-[0.95rem] font-extrabold text-primary shadow-[0_10px_22px_-14px_rgba(42,58,87,0.4)]"
          >
            <ClipboardList className="h-[18px] w-[18px] shrink-0" />
            Book Free Assessment
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-3 text-center font-heading text-[0.72rem] font-semibold text-[#8b9aab]"
        >
          No fee for the first visit · Telugu · Hindi · English
        </motion.p>
      </div>
    </section>
  );
}

/** Desktop — unchanged crossfade banner hero. */
function DesktopHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hidden md:flex relative min-h-[92vh] flex-col overflow-hidden">
      {BANNERS.map((banner, i) => (
        <div
          key={banner.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
      />

      <div className="relative z-10 mt-auto w-full px-5 sm:px-10 lg:px-16 pb-10 sm:pb-14">
        {/* Desktop headline */}
        <div className="mb-8 max-w-2xl">
          <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Child Development Centre · Vijayawada
          </p>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Your child is not broken.{" "}
            <span className="text-accent">Just early in their own story.</span>
          </h1>
          <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
            Speech, occupational and physiotherapy for Autism, ADHD, Cerebral Palsy and Down Syndrome — by specialists who sit with you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xs sm:max-w-none">
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

        <div className="flex gap-2 mt-4" aria-hidden="true">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
