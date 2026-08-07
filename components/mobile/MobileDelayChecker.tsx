"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Reveal from "@/components/mobile/Reveal";
import { NAP } from "@/lib/data";

const signs = [
  "No words by age 2",
  "Doesn't respond to name",
  "Avoids eye contact",
  "Not walking by 18 months",
  "Repeats the same movement",
  "Can't hold a pencil",
  "Very restless at school",
];

const messages = [
  "Tick whatever you have noticed. Nothing here is a diagnosis — it only helps us understand your child before you arrive.",
  "One sign on its own is often nothing. Still, a 45-minute look costs you nothing but time.",
  "Two signs together are worth a conversation. Bring them to us exactly as you ticked them here.",
  "Three or more — please don't wait for someone to say \u201Che will speak on his own\u201D. Early therapy is what changes the ending.",
];

export default function MobileDelayChecker() {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (sign: string) =>
    setPicked((p) =>
      p.includes(sign) ? p.filter((s) => s !== sign) : [...p, sign]
    );

  const n = picked.length;
  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    n === 0
      ? "Hi Meditron, I'd like to talk to a therapist about my child."
      : `Hi Meditron, I've noticed these in my child: ${picked.join(
          ", "
        )}. Can we talk?`
  )}`;

  const CounterCard = (
    <div className="rounded-[1.25rem] border border-gold/30 bg-white/[0.06] p-4 sm:p-5">
      <p
        className="font-heading text-[0.8rem] font-extrabold tracking-[0.06em] text-gold"
        aria-live="polite"
      >
        {n} {n === 1 ? "SIGN NOTICED" : "SIGNS NOTICED"}
      </p>
      <p className="mt-1.5 font-serif text-[0.9rem] leading-relaxed text-white/80">
        {messages[Math.min(n, 3)]}
      </p>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3.5 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] font-heading text-[0.88rem] font-extrabold text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        Send this to a therapist
      </a>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-confident-navy px-5 py-9 md:py-16 lg:py-20"
      aria-labelledby="delay-check-heading"
    >
      <div
        className="absolute inset-0 opacity-10 muggu-dots-light"
        aria-hidden="true"
      />

      {/* ── Centered wrapper ── */}
      <div className="relative max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-14 lg:gap-20 md:items-center">

        {/* Left — heading + counter (desktop) */}
        <Reveal>
          <span className="font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-gold">
            2-minute check
          </span>
          <h2
            id="delay-check-heading"
            className="mt-2 font-heading text-[1.6rem] md:text-[2.2rem] lg:text-[2.6rem] font-extrabold leading-tight text-white"
          >
            Is it just a delay?
          </h2>
          <p className="mt-2 font-[family-name:var(--font-telugu)] text-[0.95rem] text-white/60">
            మీ బిడ్డలో ఇవి కనిపిస్తున్నాయా? టిక్ చేయండి.
          </p>

          {/* Counter card — desktop only (sits under heading) */}
          <div className="hidden md:block mt-8">
            {CounterCard}
          </div>
        </Reveal>

        {/* Right — tick pills + counter (mobile) */}
        <Reveal delay={0.1} className="mt-4 md:mt-0">
          <div className="flex flex-wrap gap-2">
            {signs.map((sign) => {
              const on = picked.includes(sign);
              return (
                <button
                  key={sign}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(sign)}
                  className={`min-h-11 rounded-full border px-3.5 py-2.5 text-[0.78rem] font-bold transition-all duration-200 ${
                    on
                      ? "-translate-y-px border-accent bg-accent text-white"
                      : "border-white/20 bg-white/[0.07] text-white/80 hover:border-white/40"
                  }`}
                >
                  {sign}
                </button>
              );
            })}
          </div>

          {/* Counter card — mobile only (sits under pills) */}
          <div className="md:hidden mt-4">
            {CounterCard}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
