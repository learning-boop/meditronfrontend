"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CalendarCheck, Video, X, ShieldCheck } from "lucide-react";
import { NAP } from "@/lib/data";

// ─── condition data ─────────────────────────────────────────────────
const conditions = [
  {
    slug: "autism",
    name: "Autism Spectrum Disorder",
    question:
      "Not talking yet? Avoids looking into your eyes? Prefers playing alone?",
    body: "You're not alone — about 1 in 68 children in India is on the autism spectrum, most undiagnosed until it's late. Here's what we've seen in our own centre: with early therapy, children begin communicating, connecting, and joining the world at their own pace. The earlier we start, the further they go.",
    cta: "Understand Autism Care",
    image: "/images/Conditions/1.png",
    imageAlt: "Child with autism receiving therapy at Meditron, Vijayawada",
  },
  {
    slug: "adhd",
    name: "ADHD",
    question:
      "Can't sit still even for two minutes? School keeps complaining? Forgets everything instantly?",
    body: "This is not naughtiness, and it\u2019s not your parenting. Around 1 in 15 school-age children lives with ADHD. With behaviour therapy and focus training, these same \u2018restless\u2019 children become the most energetic learners in their class. We watch it happen every week.",
    cta: "Understand ADHD Support",
    image: "/images/Conditions/2.png",
    imageAlt: "Child with ADHD in therapy session at Meditron, Vijayawada",
  },
  {
    slug: "cerebral-palsy",
    name: "Cerebral Palsy",
    question:
      "Late to sit, stand, or walk? Stiff or floppy arms and legs? Milestones not coming?",
    body: "Roughly 3 in every 1,000 children in India are born with cerebral palsy. It\u2019s lifelong — but here\u2019s what matters: with consistent physiotherapy, children who were told they\u2019d never walk take supported steps, feed themselves, gain independence. Movement improves. Every single year.",
    cta: "Understand CP Therapy",
    image: "/images/Conditions/3.png",
    imageAlt:
      "Physiotherapy for child with cerebral palsy at Meditron, Vijayawada",
  },
  {
    slug: "down-syndrome",
    name: "Down Syndrome",
    question: "Slower to learn, but faster to love?",
    body: "About 1 in 830 babies in India is born with Down syndrome. These children learn everything — speaking, reading, self-care — just on their own timeline. Our job is walking that timeline with them, milestone by milestone, so they live full, capable, joyful lives.",
    cta: "Understand Down Syndrome Care",
    image: "/images/Conditions/4.png",
    imageAlt: "Child with Down syndrome in therapy at Meditron, Vijayawada",
  },
];

const CARD_BG = [
  "bg-cream",
  "bg-[#eaf5f4]",
  "bg-[#fef6f0]",
  "bg-primary-light",
];

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I\u2019d like to book an online consultation for my child."
)}`;

// ─── single stacked card ─────────────────────────────────────────────
function ConditionCard({
  condition,
  index,
  scrollYProgress,
}: {
  condition: (typeof conditions)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const n = conditions.length;
  const imageOnLeft = index % 2 === 0;

  // Entry: slide up from below during progress [(index-1)/n → index/n]
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [(index - 1) / n, index / n],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  // Push-back: scale down as next card enters, during [index/n → (index+1)/n]
  const scale = useTransform(
    scrollYProgress,
    index === n - 1 ? [0, 1] : [index / n, (index + 1) / n],
    index === n - 1 ? [1, 1] : [1, 0.88]
  );

  return (
    <motion.div
      style={{ y, scale, transformOrigin: "top center", zIndex: index + 1 }}
      className={`absolute inset-0 ${CARD_BG[index]} overflow-hidden`}
    >
      <div
        className={`h-full flex flex-col ${
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* ── Image ── */}
        <div className="relative w-full md:w-[46%] h-[38vh] md:h-full shrink-0">
          <Image
            src={condition.image}
            alt={condition.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 46vw"
          />
          {/* edge fade toward content */}
          <div
            className={`absolute inset-0 ${
              imageOnLeft
                ? "bg-gradient-to-r from-transparent via-transparent to-black/8"
                : "bg-gradient-to-l from-transparent via-transparent to-black/8"
            }`}
          />
        </div>

        {/* ── Content ── */}
        <div className="flex-1 flex flex-col justify-center px-7 sm:px-12 lg:px-16 py-8 md:py-0 relative overflow-y-auto">
          {/* large decorative number */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-4 md:right-8 font-heading font-black leading-none select-none pointer-events-none text-[7rem] md:text-[11rem] text-primary/[0.06]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 max-w-xl">
            {/* condition badge */}
            <span className="inline-block text-primary text-[0.8rem] font-bold uppercase tracking-[0.18em] mb-3 border border-primary/20 rounded-full px-3 py-1 bg-primary/5">
              {condition.name}
            </span>

            <h3 className="text-confident-navy font-extrabold text-xl sm:text-2xl lg:text-[1.75rem] leading-tight mb-5">
              {condition.question}
            </h3>

            <p className="text-dusty-blue leading-relaxed text-sm sm:text-base mb-8">
              {condition.body}
            </p>

            <Link
              href={`/conditions/${condition.slug}`}
              className="inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base hover:gap-3 transition-all duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors shrink-0">
                <ArrowRight
                  className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
              {condition.cta}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── main section ────────────────────────────────────────────────────
export default function ConditionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Trigger popup when ADHD card (index 1) enters view
  useEffect(() => {
    if (dismissed) return;
    let timer: ReturnType<typeof setTimeout>;
    const unsub = scrollYProgress.on("change", (v) => {
      if (v >= 1 / conditions.length) {
        timer = setTimeout(() => setShowPopup(true), 900);
        unsub();
      }
    });
    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, [dismissed, scrollYProgress]);

  const dismiss = () => {
    setShowPopup(false);
    setDismissed(true);
    // Signal to TimedPopup that a conversion prompt has already been shown this session
    try { sessionStorage.setItem("meditron-consult-popup-seen", "1"); } catch {}
  };

  return (
    <>
      <section aria-labelledby="conditions-heading">
        {/* ── Section header ── */}
        <div className="bg-cream py-10 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Does This Feel Like Your Child?
          </span>
          <h2
            id="conditions-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy"
          >
            You&apos;ve noticed. Now let&apos;s help.
          </h2>
          <p className="mt-4 text-dusty-blue max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            You&apos;ve noticed the small things no one else sees. That&apos;s
            not worry — that&apos;s a mother&apos;s instinct. Here&apos;s what
            it might mean, and how we help.
          </p>
        </div>

        {/* ── Scroll-stacked cards ── */}
        <div
          ref={sectionRef}
          style={{ height: `${conditions.length * 100}vh` }}
          className="relative"
        >
          {/* sticky viewport frame */}
          <div className="sticky top-0 h-screen">
            {conditions.map((condition, index) => (
              <ConditionCard
                key={condition.slug}
                condition={condition}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* ── Closing CTA ── */}
        <div className="bg-primary-light py-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy text-base sm:text-lg leading-relaxed max-w-3xl mx-auto italic mb-10">
            &ldquo;Whatever brought you here tonight — the late talking, the
            school complaints, the milestone that hasn&apos;t come — it has a
            name, it has a path, and thousands of families in India are already
            walking it. Take the first step. We&apos;ll walk the rest
            together.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-md text-base"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-md text-base"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Online Consultation Popup ── */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Online consultation available"
        className={`fixed bottom-0 inset-x-0 sm:bottom-6 sm:right-6 sm:left-auto sm:w-[340px] z-50
          transition-all duration-500 ease-out
          ${
            showPopup && !dismissed
              ? "translate-y-0 opacity-100"
              : "translate-y-full sm:translate-y-6 opacity-0 pointer-events-none"
          }`}
      >
        <div className="bg-cream rounded-t-3xl sm:rounded-3xl shadow-2xl border border-primary-light overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-extrabold text-confident-navy text-sm leading-tight">
                    Online Consultation
                  </p>
                  <p className="text-primary text-xs font-semibold mt-0.5">
                    Available now
                  </p>
                </div>
              </div>
              <button
                onClick={dismiss}
                aria-label="Close notification"
                className="text-sage hover:text-muted-navy transition-colors p-2.5 -mt-1 -mr-1 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-navy text-sm leading-relaxed mb-4">
              Can&apos;t travel to our centre right now? Our specialists are
              available for{" "}
              <span className="font-semibold text-confident-navy">
                secure one-on-one video sessions
              </span>{" "}
              — from your home, at your time, completely private.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-sage mb-5">
              <ShieldCheck
                className="w-3.5 h-3.5 text-primary shrink-0"
                aria-hidden="true"
              />
              Encrypted &amp; confidential · No travel needed · Flexible timing
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                onClick={dismiss}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                <CalendarCheck className="w-4 h-4 shrink-0" />
                Book Online
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
