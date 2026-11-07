import Bloom from "./Bloom";
import { IMG, MILESTONES, TE } from "./content";
import { Telugu, Voice } from "./ui";

export default function HopeSection() {
  return (
    <section aria-labelledby="hope-heading" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
          <div className="max-w-[600px]">
            <Voice>Can it really get better?</Voice>
            <h2 id="hope-heading" className="text-[1.875rem] font-semibold leading-[1.15] text-[var(--lp-teal)] md:text-[2.75rem]">
              Yes. Your child&rsquo;s brain is still growing, and the right help shapes how it grows.
            </h2>
            <p className="mt-6 max-w-[54ch] text-[1.0625rem] md:text-lg">
              In the early years, a child&rsquo;s brain forms new connections faster than at any other time in life.
              Therapy uses play to strengthen the ones your child needs most: for words, for movement, for focus, and
              for connecting with you.
            </p>
            <p className="mt-5 max-w-[54ch] border-l-[3px] border-[var(--lp-sage)] pl-4 text-[1.0625rem] font-semibold text-[var(--lp-teal)] md:text-lg">
              It&rsquo;s never too late, and the earlier you start, the easier it gets.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[420px] text-center">
            <Bloom>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/growing-brain-520.webp`}
                srcSet={`${IMG}/growing-brain-520.webp 520w, ${IMG}/growing-brain-800.webp 800w`}
                sizes="(min-width: 768px) 420px, 80vw"
                alt="Line drawing of a child's head with a small tree growing inside, its branches like brain pathways, some still forming, some in flower"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="mx-auto w-[78%] md:w-full"
              />
            </Bloom>
            <figcaption className="mt-2">
              <Telugu className="text-[var(--lp-teal)]">{TE.flower}</Telugu>
              <p className="mt-1 text-[0.9375rem] text-[var(--lp-muted)]">
                Every child is a flower. Some simply bloom a little later.
              </p>
            </figcaption>
          </figure>
        </div>

        <h3 className="mt-16 text-[1.375rem] font-semibold text-[var(--lp-teal)] md:mt-20 md:text-[1.625rem]">
          What progress looks like at home
        </h3>
        <ul className="lp-swipe -mx-5 mt-6 flex scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {MILESTONES.map((m) => (
            <li key={m.src} className="relative w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-[24px] md:w-auto md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${m.src}-520.webp`}
                srcSet={`${m.src}-520.webp 520w, ${m.src}-800.webp 800w`}
                sizes="(min-width: 768px) 33vw, 78vw"
                alt={m.alt}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(31,40,42,0.72)] via-[rgba(31,40,42,0.35)] to-transparent px-5 pb-5 pt-20"
              >
                <p className="lp-serif text-[1.25rem] leading-snug text-white">{m.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
