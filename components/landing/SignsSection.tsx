"use client";

import { Check, Hand, MessageCircle, Plus } from "lucide-react";
import { CONCERNS, TE, type Concern } from "./content";
import { useConcerns } from "./ConcernsContext";
import { Telugu, Voice, WhatsAppButton } from "./ui";

function Explanation({ c, compact = false }: { c: Concern; compact?: boolean }) {
  if (!c.why) {
    return (
      <p className="text-[1rem] text-[var(--lp-ink)]">
        Tell the doctor in your own words. Nothing is too small to ask, and she&rsquo;ll help you make sense of it.
      </p>
    );
  }
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <p className="text-[1rem] leading-relaxed text-[var(--lp-ink)]">{c.why}</p>
      <dl className="grid gap-3 text-[0.9375rem]">
        <div>
          <dt className="font-bold text-[var(--lp-teal)]">Sometimes seen with</dt>
          <dd className="text-[var(--lp-muted)]">{c.seenIn}</dd>
        </div>
        <div>
          <dt className="font-bold text-[var(--lp-teal)]">What helps</dt>
          <dd className="text-[var(--lp-ink)]">{c.helps}</dd>
        </div>
      </dl>
    </div>
  );
}

function Thumb({ c, className }: { c: Concern; className: string }) {
  if (!c.image) {
    return (
      <span className={`flex items-center justify-center bg-[var(--lp-sage-tint)] text-[var(--lp-sage-deep)] ${className}`}>
        <MessageCircle className="h-1/3 w-1/3" aria-hidden="true" />
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={c.image.src} alt="" width={600} height={600} loading="lazy" decoding="async" className={`object-cover ${className}`} />
  );
}

export default function SignsSection() {
  const { isSelected, toggle, selected } = useConcerns();
  const picked = CONCERNS.filter((c) => selected.includes(c.id));

  return (
    <section id="signs" aria-labelledby="signs-heading" className="scroll-mt-4 bg-[var(--lp-sand)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Desktop: heading on the left, the instruction answers it on the right */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div className="max-w-[640px]">
            <Voice>Why is my child doing this?</Voice>
            <h2 id="signs-heading" className="text-[1.875rem] font-semibold leading-[1.15] text-[var(--lp-teal)] md:text-[2.75rem]">
              Every one of these has a reason, and every one can be helped.
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 lg:pb-2">
            <Telugu className="text-[var(--lp-teal)]">{TE.signs}</Telugu>
            <p className="mt-1 text-[var(--lp-muted)] lg:text-[1.0625rem]">
              Tap what you&rsquo;ve seen. We&rsquo;ll explain it in plain words.
            </p>
          </div>
        </div>

        {/* Phones: a list that opens right where she taps */}
        <ul className="mt-8 space-y-3 md:hidden">
          {CONCERNS.map((c) => {
            const on = isSelected(c.id);
            return (
              <li key={c.id} className={`overflow-hidden rounded-[20px] bg-white transition-shadow ${on ? "shadow-[0_0_0_2px_var(--lp-sage-deep)]" : ""}`}>
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`sign-${c.id}`}
                  onClick={() => toggle(c.id)}
                  className="flex w-full items-center gap-4 p-2.5 pr-4 text-left"
                >
                  <Thumb c={c} className="h-[72px] w-[72px] shrink-0 rounded-[14px]" />
                  <span className="flex-1 text-[1.0625rem] font-bold leading-snug text-[var(--lp-teal)]">{c.chip}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      on ? "bg-[var(--lp-sage-deep)] text-white" : "bg-[var(--lp-sand)] text-[var(--lp-teal)]"
                    }`}
                    aria-hidden="true"
                  >
                    {on ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div id={`sign-${c.id}`} hidden={!on} className="px-4 pb-5 pt-1">
                  <Explanation c={c} compact />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Tablet and desktop: photo grid with the explanations beside it */}
        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
          <ul className="grid content-start grid-cols-3 gap-x-4 gap-y-6 self-start lg:grid-cols-4 lg:gap-x-5">
            {CONCERNS.map((c) => {
              const on = isSelected(c.id);
              return (
                <li key={c.id}>
                  <button type="button" aria-pressed={on} onClick={() => toggle(c.id)} className="group block w-full text-left">
                    <span
                      className={`relative block overflow-hidden rounded-[22px] transition-shadow ${
                        on ? "shadow-[0_0_0_3px_var(--lp-sage-deep)]" : "group-hover:shadow-[0_0_0_3px_var(--lp-sage)]"
                      }`}
                    >
                      <Thumb c={c} className="aspect-square w-full" />
                      {on && (
                        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--lp-sage-deep)] text-white">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </span>
                    <span className="mt-3 block text-[1rem] font-bold leading-snug text-[var(--lp-teal)]">{c.chip}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Notes panel: same height as the photos, so it never floats as an empty box */}
          <aside className="flex min-h-0 flex-col rounded-[28px] bg-white p-7 shadow-[0_1px_0_#c8d8dc]">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[1.25rem] font-semibold text-[var(--lp-teal)]">Your notes for the doctor</h3>
              {picked.length > 0 && (
                <span className="shrink-0 rounded-full bg-[var(--lp-sage-tint)] px-2.5 py-0.5 text-[0.8125rem] font-bold text-[var(--lp-sage-deep)]">
                  {picked.length} added
                </span>
              )}
            </div>

            <div aria-live="polite" className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
              {picked.length === 0 ? (
                <div className="flex h-full flex-col justify-center gap-4 py-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lp-sage-tint)] text-[var(--lp-sage-deep)]">
                    <Hand className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="lp-serif text-[1.3125rem] leading-snug text-[var(--lp-teal)]">
                    Tap the photos that look like your child.
                  </p>
                  <p className="text-[0.9375rem] text-[var(--lp-muted)]">
                    Each one opens here in plain words, and goes into your WhatsApp message, so you don&rsquo;t have to
                    explain it all again.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[var(--lp-sand)]">
                  {[...picked].reverse().map((c) => (
                    <div key={c.id} className="py-5 first:pt-0">
                      <h4 className="mb-2 text-[1.125rem] font-bold leading-snug text-[var(--lp-teal)]">{c.chip}</h4>
                      <Explanation c={c} compact />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 border-t border-[var(--lp-sand)] pt-5">
              <WhatsAppButton size="sm" className="w-full whitespace-nowrap" />
              <p className="mt-3 text-center text-[0.875rem] text-[var(--lp-muted)]">
                {picked.length === 0 ? "Or just message the doctor directly." : "Your notes go with the message."}
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-10 max-w-[640px] space-y-4 md:mt-12">
          <p className="text-[0.9375rem] text-[var(--lp-muted)]">
            This isn&rsquo;t a diagnosis. Only a proper assessment can tell, and many children simply need a little help
            to catch up.
          </p>
          <p className="lp-serif text-[1.375rem] leading-snug text-[var(--lp-teal)] md:text-[1.625rem]">
            The good news is how much a young child can still change.
          </p>
        </div>
      </div>
    </section>
  );
}
