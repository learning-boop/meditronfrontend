"use client";

import { Camera, MapPin } from "lucide-react";
import { ADDRESS_SHORT, CENTRE_PHOTOS, FACTS, IMG, MAP_URL, VISIT_STEPS } from "./content";
import { useConcerns } from "./ConcernsContext";
import { Voice } from "./ui";

export default function FirstVisitSection() {
  const { waUrl } = useConcerns();
  const showCentrePhotos = CENTRE_PHOTOS.some((p) => p.src);

  return (
    <section aria-labelledby="visit-heading" className="bg-[var(--lp-sand)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16">
          <div className="md:order-2">
            <Voice>What if I&rsquo;m overreacting?</Voice>
            <h2
              id="visit-heading"
              className="text-[1.875rem] font-semibold leading-[1.15] text-[var(--lp-teal)] md:text-[2.75rem]"
            >
              If it&rsquo;s nothing, one free visit will tell you, and you&rsquo;ll sleep better tonight.
            </h2>

            <h3 className="mt-10 text-[1.25rem] font-semibold text-[var(--lp-teal)]">
              What happens in the free {FACTS.visitMinutes}-minute visit
            </h3>
            <ol className="mt-5 space-y-6">
              {VISIT_STEPS.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[32px_1fr] gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--lp-sage-deep)] text-[0.9375rem] font-bold text-[var(--lp-sage-deep)]"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[1.0625rem] font-bold text-[var(--lp-teal)]">{s.title}</p>
                    <p className="mt-1 text-[1rem]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[1rem] text-[var(--lp-muted)]">No fee for the first visit. Open {FACTS.hours}.</p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${IMG}/first-visit-welcome-600.webp`}
            srcSet={`${IMG}/first-visit-welcome-600.webp 600w, ${IMG}/first-visit-welcome-900.webp 900w`}
            sizes="(min-width: 768px) 42vw, 100vw"
            alt="A therapist kneeling at a shy little boy's eye level, offering him a toy, while his mother smiles at the doorway"
            width={900}
            height={1126}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[28px] object-cover object-[45%_40%] md:order-1"
          />
        </div>

        <div className={showCentrePhotos ? "mt-16 md:mt-20" : "mt-12 border-t border-[#e3d7c5] pt-8 md:mt-16"}>
          {/* Centre photos stay hidden until at least one real photo is added in content.ts */}
          {showCentrePhotos && (
            <>
              <h3 className="text-[1.375rem] font-semibold text-[var(--lp-teal)] md:text-[1.625rem]">
                See the place before you come
              </h3>
              <ul className="lp-swipe -mx-5 mt-6 flex scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
                {CENTRE_PHOTOS.map((p) => (
                  <li key={p.label} className="w-[70vw] max-w-[300px] shrink-0 md:w-auto md:max-w-none">
                    {p.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.src}
                        alt={p.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-[16px] object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-[16px] border-2 border-dashed border-[#d9cbb6] bg-[var(--lp-cream)] text-[0.875rem] text-[var(--lp-muted)]">
                        <Camera className="h-5 w-5" aria-hidden="true" />
                        Real photo coming
                      </div>
                    )}
                    <p className="mt-2 text-[0.9375rem] font-semibold text-[var(--lp-teal)]">{p.label}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div
            className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${showCentrePhotos ? "mt-8" : ""}`}
          >
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-3 text-[1rem] text-[var(--lp-ink)] underline decoration-[var(--lp-teal)]/30 underline-offset-4 hover:decoration-[var(--lp-teal)]"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--lp-teal)]" aria-hidden="true" />
              {ADDRESS_SHORT}. Open in Google Maps
            </a>
            <a
              href={waUrl("online")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1rem] font-semibold text-[var(--lp-teal)] underline underline-offset-4"
            >
              Live far away? Ask for an online consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
