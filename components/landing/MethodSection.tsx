import { STEPS } from "./content";
import { Voice } from "./ui";

export default function MethodSection() {
  return (
    <section aria-labelledby="method-heading" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div className="max-w-[680px]">
            <Voice>How exactly will you help?</Voice>
            <h2 id="method-heading" className="text-[1.875rem] font-semibold leading-[1.15] text-[var(--lp-teal)] md:text-[2.75rem]">
              Four steps, and you&rsquo;re part of every one.
            </h2>
          </div>
          <p className="mt-5 max-w-[56ch] text-[1.0625rem] md:text-lg lg:mt-0 lg:pb-2">
            Dr. Sirisha follows the World Health Organization&rsquo;s ICF approach. She looks at your whole child, from
            body and everyday skills to life at home and at school, not just a diagnosis.
          </p>
        </div>

        <ol className="relative mt-12 md:mt-16 md:grid md:grid-cols-4 md:gap-7">
          {/* Dotted path joining the steps: down the left on phones, across on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[19px] top-2 border-l-2 border-dotted border-[var(--lp-sage)] md:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[20px] right-[12%] top-[19px] hidden border-t-2 border-dotted border-[var(--lp-sage)] md:block"
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[40px_1fr] gap-x-4 pb-12 last:pb-0 md:flex md:flex-col md:pb-0">
              {/* image — after the text on phones, on top on desktop */}
              <div className="col-start-2 row-start-2 mt-5 md:order-2 md:mt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${s.img}-500.webp`}
                  srcSet={`${s.img}-500.webp 500w, ${s.img}-800.webp 800w`}
                  sizes="(min-width: 768px) 25vw, 85vw"
                  alt={s.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-[20px] object-cover md:aspect-square"
                />
              </div>
              <span
                aria-hidden="true"
                className="relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lp-teal)] text-[1rem] font-bold text-white ring-[6px] ring-[var(--lp-cream)] md:order-1"
              >
                {i + 1}
              </span>
              <div className="col-start-2 row-start-1 md:order-3 md:mt-5">
                <h3 className="text-[1.375rem] font-semibold leading-snug text-[var(--lp-teal)]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-relaxed">{s.body}</p>
                <p className="mt-3 text-[1rem] text-[var(--lp-ink)]">
                  <span className="font-bold text-[var(--lp-sage-deep)]">Your part: </span>
                  {s.yourPart}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
