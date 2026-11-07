"use client";

import { Check } from "lucide-react";
import { CONCERNS, FACTS, IMG, TE } from "./content";
import { useConcerns } from "./ConcernsContext";
import { CallLink, Telugu, WhatsAppButton } from "./ui";

/* Left text column on desktop, aligned to the 1240px page grid */
const COL = "lg:w-[min(540px,46vw)] lg:ml-[max(2rem,calc((100vw-1240px)/2))]";

export default function HeroSection() {
  const { isSelected, toggle, selected } = useConcerns();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative grid grid-cols-1 lg:flex lg:min-h-[min(86vh,780px)] lg:flex-col lg:justify-center lg:py-14"
    >
      {/* Photograph: vertical crop on phones, wide crop from 768px */}
      <div className="relative col-start-1 row-start-1 lg:absolute lg:inset-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`${IMG}/hero-desktop-1200.webp 1200w, ${IMG}/hero-desktop-1672.webp 1672w`}
            sizes="100vw"
          />
          <img
            src={`${IMG}/hero-mobile-720.webp`}
            srcSet={`${IMG}/hero-mobile-720.webp 720w, ${IMG}/hero-mobile-1080.webp 1080w`}
            sizes="100vw"
            alt="A mother sitting on the floor at home, her hand on her young son's back as he quietly stacks wooden blocks"
            width={1080}
            height={1350}
            fetchPriority="high"
            className="block aspect-[4/5] w-full object-cover object-[50%_100%] md:aspect-square lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:object-[25%_45%]"
          />
        </picture>
        <div className="lp-hero-fade-mobile absolute inset-0 lg:hidden" aria-hidden="true" />
        <div className="lp-hero-fade absolute inset-0 hidden lg:block" aria-hidden="true" />
      </div>

      {/* Headline sits on the empty wall at the top of the phone photo */}
      <div className={`relative z-10 col-start-1 row-start-1 self-start px-5 pt-6 md:px-8 md:pt-8 ${COL} lg:px-0 lg:pt-0`}>
        <h1
          id="hero-heading"
          className="max-w-[17ch] text-[2rem] font-semibold leading-[1.12] text-[var(--lp-teal)] min-[400px]:text-[2.25rem] md:max-w-[22ch] md:text-[2.75rem] lg:max-w-[17ch] lg:text-[3.25rem] lg:leading-[1.06] xl:text-[3.625rem]"
        >
          You&rsquo;ve noticed something. Let&rsquo;s understand it, together.
        </h1>
      </div>

      <div className={`relative z-10 row-start-2 px-5 pb-12 md:px-8 ${COL} lg:mt-6 lg:px-0 lg:pb-0`}>
        <Telugu className="text-[var(--lp-teal)]">{TE.hero}</Telugu>
        <p className="mt-3 max-w-[46ch] text-[1.0625rem] text-[var(--lp-ink)] md:text-lg">
          It&rsquo;s not your fault, and you&rsquo;re not alone. Dr. Sirisha will listen, explain what&rsquo;s
          happening in simple words, and show you what helps.
        </p>

        <fieldset className="mt-7">
          <legend className="text-[0.9375rem] font-bold text-[var(--lp-teal)]">
            What have you noticed? Tap all that fit.
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {CONCERNS.map((c) => {
              const on = isSelected(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(c.id)}
                  className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-full border px-3.5 text-[0.875rem] font-semibold transition-colors md:min-h-[44px] md:px-4 md:text-[0.9375rem] ${
                    on
                      ? "border-[var(--lp-sage-deep)] bg-[var(--lp-sage-tint)] text-[var(--lp-teal)]"
                      : "border-[#e2d6c4] bg-white/75 text-[var(--lp-ink)] hover:border-[var(--lp-sage)]"
                  }`}
                >
                  {on && <Check className="h-4 w-4 text-[var(--lp-sage-deep)]" aria-hidden="true" />}
                  {c.chip}
                </button>
              );
            })}
          </div>
          <p className="mt-3 min-h-[1.5rem] text-[0.9375rem] text-[var(--lp-muted)]" aria-live="polite">
            {selected.length > 0 && (
              <>
                We&rsquo;ll add this to your message.{" "}
                <a href="#signs" className="font-semibold text-[var(--lp-teal)] underline underline-offset-4">
                  See what it can mean
                </a>
              </>
            )}
          </p>
        </fieldset>

        <div id="hero-actions" className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <WhatsAppButton />
          <CallLink />
        </div>
        <p className="mt-4 text-[0.9375rem] text-[var(--lp-muted)]">
          The first visit is free. We speak {FACTS.languages}.
        </p>
      </div>
    </section>
  );
}
