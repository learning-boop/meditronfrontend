"use client";

import { ADDRESS_SHORT, CONCERNS, FACTS, IMG, TE } from "./content";
import { useConcerns } from "./ConcernsContext";
import { CallLink, Telugu, Voice, WhatsAppButton } from "./ui";

const COL = "lg:w-[min(520px,44vw)] lg:ml-[max(2rem,calc((100vw-1240px)/2))]";

export default function FinalSection() {
  const { selected, waUrl } = useConcerns();
  const picked = CONCERNS.filter((c) => selected.includes(c.id));

  return (
    <section
      id="talk"
      aria-labelledby="final-heading"
      className="relative grid grid-cols-1 bg-[var(--lp-night)] text-[var(--lp-cream)] lg:flex lg:min-h-[min(84vh,760px)] lg:flex-col lg:justify-center lg:py-20"
    >
      <div className="relative col-start-1 row-start-1 lg:absolute lg:inset-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`${IMG}/final-cta-desktop-1200.webp 1200w, ${IMG}/final-cta-desktop-1672.webp 1672w`}
            sizes="100vw"
          />
          <img
            src={`${IMG}/final-cta-mobile-720.webp`}
            srcSet={`${IMG}/final-cta-mobile-720.webp 720w, ${IMG}/final-cta-mobile-1080.webp 1080w`}
            sizes="100vw"
            alt="Late at night, a mother sits beside her sleeping son, phone in hand, gently stroking his hair with a small relieved smile"
            width={1080}
            height={1350}
            loading="lazy"
            decoding="async"
            className="block aspect-[4/5] w-full object-cover object-[60%_100%] md:aspect-square lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:object-[30%_50%]"
          />
        </picture>
        <div className="lp-night-fade-mobile absolute inset-0 lg:hidden" aria-hidden="true" />
        <div className="lp-night-fade absolute inset-0 hidden lg:block" aria-hidden="true" />
      </div>

      <div className={`relative z-10 col-start-1 row-start-1 self-start px-5 pt-14 md:px-8 ${COL} lg:px-0 lg:pt-0`}>
        <Voice tone="dark">Okay. What do I do now?</Voice>
        <h2 id="final-heading" className="max-w-[16ch] text-[2rem] font-semibold leading-[1.12] text-[var(--lp-cream)] md:max-w-[22ch] md:text-[2.75rem] lg:max-w-[19ch] lg:text-[3rem]">
          Send one message. We&rsquo;ll take care of the rest.
        </h2>
      </div>

      <div className={`relative z-10 row-start-2 px-5 pb-28 md:px-8 md:pb-16 ${COL} lg:mt-6 lg:px-0 lg:pb-0`}>
        <Telugu className="text-[var(--lp-clay-light)]">{TE.final}</Telugu>
        <p className="mt-3 max-w-[44ch] text-[1.0625rem] text-[var(--lp-cream)]/90 md:text-lg">
          Tell us what you&rsquo;ve noticed. We&rsquo;ll call you back during clinic hours, in your language, and book
          your free first visit at a time that suits you.
        </p>

        {picked.length > 0 && (
          <div className="mt-6 rounded-[18px] bg-white/10 p-4">
            <p className="text-[0.9375rem] text-[var(--lp-cream)]/80">Your message will mention:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {picked.map((c) => (
                <li key={c.id} className="rounded-full bg-white/15 px-3 py-1 text-[0.9375rem] font-semibold">
                  {c.chip}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7 flex flex-col items-start gap-3">
          <WhatsAppButton tone="dark" />
          <CallLink tone="dark" />
        </div>

        <div className="mt-8 space-y-1 text-[0.9375rem] text-[var(--lp-cream)]/75">
          <p>
            {FACTS.hours}. {ADDRESS_SHORT}.
          </p>
          <p>
            Far from Vijayawada?{" "}
            <a href={waUrl("online")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--lp-cream)] underline underline-offset-4">
              Ask for an online consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
