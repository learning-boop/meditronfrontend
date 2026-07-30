"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Heart,
  Star,
  Users,
} from "lucide-react";
import type { ConditionDetail } from "@/lib/conditions-detail";

// ── Animation primitives ───────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ── Per-condition hero copy ────────────────────────────────────────────────────

const HERO_LINES: Record<string, string> = {
  autism: "Your child is different. Not less.",
  adhd: "Not naughty. Not lazy. Just wired differently.",
  "cerebral-palsy": "Every movement they make is a win worth celebrating.",
  "down-syndrome": "Slower to learn. Faster to love.",
};

const HERO_SUB: Record<string, string> = {
  autism:
    "What you're seeing isn't imaginary — and it isn't your fault. Thousands of families have walked through our door with the same questions you have right now.",
  adhd:
    "That restless child who can't sit still is not broken. They just need someone who understands how their brain works — and that's exactly what we do.",
  "cerebral-palsy":
    "A CP diagnosis is not a ceiling. Every week, children here surprise their parents, their teachers, and sometimes even us — with what they're capable of.",
  "down-syndrome":
    "The moment you accept your child exactly as they are is also the moment their progress begins to accelerate. We've seen it with every single family.",
};

// ── FAQ accordion item ─────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-clean-neutral rounded-2xl overflow-hidden border border-primary-light shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between gap-4 w-full px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      >
        <span className="font-bold text-confident-navy text-sm sm:text-base leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-dusty-blue text-sm leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

type Props = {
  detail: ConditionDetail;
  image: string;
  waUrl: string;
};

export default function ConditionPageContent({ detail, image, waUrl }: Props) {
  const heroLine = HERO_LINES[detail.slug] ?? detail.name;
  const heroSub =
    HERO_SUB[detail.slug] ??
    "We've helped hundreds of families navigate exactly what you're going through.";

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-clean-neutral overflow-hidden">
        {/* Background blobs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary-light/50 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/6 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-xs text-sage mb-10"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link
              href="/conditions"
              className="hover:text-primary transition-colors"
            >
              Conditions
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-muted-navy">{detail.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Left: copy ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Tagline badge */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-5"
              >
                <span className="w-5 h-px bg-primary/40" aria-hidden="true" />
                {detail.tagline}
              </motion.span>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-confident-navy leading-[1.1] tracking-tight mb-5"
              >
                {heroLine}
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="text-dusty-blue text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              >
                {heroSub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-lg shadow-primary/20 text-sm"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  Book Free Assessment
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-lg shadow-green-500/15 text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </motion.div>

              {/* Trust chips */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2.5"
              >
                {[
                  "500+ children helped",
                  "Free first assessment",
                  "Vijayawada's trusted centre",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 text-xs font-semibold text-dusty-blue bg-cream border border-primary-light px-3.5 py-1.5 rounded-full"
                  >
                    <CheckCircle
                      className="w-3.5 h-3.5 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Image card */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-primary-light shadow-xl shadow-primary/10">
                {image && (
                  <Image
                    src={image}
                    alt={`${detail.name} therapy at Meditron Vijayawada`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                )}
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -left-5 bg-clean-neutral rounded-2xl shadow-xl px-5 py-4 border border-primary-light"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-extrabold text-confident-navy text-sm leading-tight">
                      95% of families
                    </p>
                    <p className="text-sage text-xs mt-0.5">
                      saw progress within 6 months
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. INTRO — what is this condition
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-accent font-semibold text-xs uppercase tracking-widest"
          >
            What is {detail.name}?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy mb-6"
          >
            Understanding what your child is going through
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-dusty-blue text-sm sm:text-base leading-[1.95]"
          >
            {detail.intro}
          </motion.p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. SIGNS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent font-semibold text-xs uppercase tracking-widest"
            >
              Signs to Watch For
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy"
            >
              You may have already noticed some of these
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-sage text-sm max-w-xl mx-auto leading-relaxed"
            >
              If your child shows{" "}
              <strong className="text-muted-navy font-bold">
                2–3 of these patterns consistently
              </strong>
              , that&apos;s your signal to reach out. You don&apos;t need a formal
              diagnosis to talk to us.
            </motion.p>
          </motion.div>

          {/* Sign cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-3 mb-8"
          >
            {detail.signs.map((sign) => (
              <motion.div
                key={sign}
                variants={fadeUp}
                className="flex items-start gap-3 bg-cream rounded-2xl px-5 py-4 border border-primary-light hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-primary-light group-hover:bg-primary/15 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <CheckCircle
                    className="w-3.5 h-3.5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-navy text-sm leading-relaxed">{sign}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Signs reassurance note */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-2xl px-7 py-6 flex items-start gap-4"
          >
            <Heart
              className="w-5 h-5 text-white/70 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-white text-sm leading-relaxed font-medium">
              {detail.signsNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. REASSURANCE STRIP — "It's not your fault"
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-14 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5"
        >
          {(
            [
              {
                icon: Heart,
                title: "It's not your fault",
                body: "Neurodevelopmental differences are nobody's fault. They just happen — and with the right support, they can be worked with.",
              },
              {
                icon: Star,
                title: "It's not too late",
                body: "Whether your child is 18 months or 10 years old, the brain always has room to grow. Therapy works at every age.",
              },
              {
                icon: Users,
                title: "You're not alone",
                body: "Over 500 families in Vijayawada have sat exactly where you are right now — and walked out with a plan and hope.",
              },
            ] as const
          ).map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-clean-neutral rounded-2xl p-7 border border-primary-light text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-extrabold text-confident-navy text-base mb-2">
                {title}
              </h3>
              <p className="text-sage text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. HOW WE HELP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-primary-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent font-semibold text-xs uppercase tracking-widest"
            >
              How We Help
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-white"
            >
              Our therapy approach for {detail.name}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-white/45 text-sm max-w-lg mx-auto leading-relaxed"
            >
              Every child gets a personalised plan. No two plans look the same —
              because no two children are the same.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-5"
          >
            {detail.therapies.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="relative bg-white/6 hover:bg-white/10 rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
              >
                {/* Large ghost number */}
                <span
                  className="absolute top-4 right-5 font-black text-[4.5rem] leading-none text-white/5 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-bold text-base mb-3 leading-snug pr-10">
                  {t.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. JOURNEY — what happens when you reach out
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent font-semibold text-xs uppercase tracking-widest"
            >
              Your Journey With Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy"
            >
              What happens when you reach out
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sage text-sm"
            >
              One WhatsApp message is all it takes to start.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop */}
            <div
              className="hidden sm:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"
              aria-hidden="true"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="grid sm:grid-cols-3 gap-10 relative"
            >
              {detail.journey.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-full bg-primary-light border-4 border-white shadow-lg flex items-center justify-center mb-5 relative z-10">
                    <span className="font-black text-primary text-base">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-confident-navy font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sage text-sm leading-relaxed">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent font-semibold text-xs uppercase tracking-widest"
            >
              Common Questions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy"
            >
              Questions parents ask us most
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sage text-sm max-w-md mx-auto leading-relaxed"
            >
              No question is too small. If you don&apos;t see yours here, just
              WhatsApp us — we reply within the hour.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="space-y-3"
          >
            {detail.faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. CLOSING CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative blobs */}
        <div
          className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 pointer-events-none"
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="max-w-2xl mx-auto relative"
        >
          {/* Stars */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-1 mb-6"
            aria-label="5 star rating"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-5 h-5 text-accent"
                fill="currentColor"
                aria-hidden="true"
              />
            ))}
          </motion.div>

          {/* Closing quote */}
          <motion.p
            variants={fadeUp}
            className="text-white/90 text-lg sm:text-xl font-medium italic leading-relaxed mb-3"
          >
            &ldquo;{detail.closing}&rdquo;
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-sm mb-10"
          >
            — Meditron Care Team, Vijayawada
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-xl text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-xl text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              WhatsApp Us Now
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
