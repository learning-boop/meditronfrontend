import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative hidden md:block bg-cream py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* ── Giant watermark quote — depth layer ── */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-black text-primary pointer-events-none select-none leading-none"
        style={{ fontSize: "38rem", opacity: 0.03 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* ── Header ── */}
      <div className="relative text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-[0.22em]">
          <span className="block w-8 h-px bg-accent/40" />
          Parent Stories
          <span className="block w-8 h-px bg-accent/40" />
        </span>
        <h2
          id="testimonials-heading"
          className="mt-4 text-3xl sm:text-4xl font-extrabold text-confident-navy leading-tight"
        >
          Words from the families
          <br />
          <span className="text-primary">we walk with</span>
        </h2>
        <p className="mt-4 text-dusty-blue text-sm sm:text-base leading-relaxed">
          Every review is a milestone someone&apos;s child reached.
          Real families. Real journeys. Vijayawada.
        </p>
      </div>

      {/* ── Three-card staggered grid ── */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-center">
        {testimonials.map((t, i) => {
          const isCenter = i === 1;

          if (isCenter) {
            return (
              /* ── Featured center card — dark teal ── */
              <div
                key={t.id}
                className="relative bg-primary-dark rounded-[1.75rem] p-8 shadow-2xl md:scale-[1.07] md:z-10 flex flex-col gap-6"
              >
                {/* Accent bar */}
                <div className="h-px bg-gradient-to-r from-accent via-accent/40 to-transparent rounded-full" />

                <Stars />

                <blockquote className="flex-1">
                  {/* Opening mark */}
                  <span className="text-accent font-black text-4xl leading-none block mb-3" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="text-white/85 text-sm sm:text-base leading-[1.85] italic font-serif">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-black text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/45 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          }

          return (
            /* ── Side cards — warm white ── */
            <div
              key={t.id}
              className={`bg-clean-neutral rounded-[1.75rem] p-8 shadow-lg flex flex-col gap-5 ${
                i === 0
                  ? "md:-translate-y-4 md:-rotate-1"
                  : "md:translate-y-4 md:rotate-1"
              }`}
            >
              <Stars />

              <blockquote className="flex-1">
                <p className="text-navy text-sm leading-[1.85] italic font-serif">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-primary-light" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-primary font-black text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-confident-navy font-bold text-sm">{t.name}</p>
                  <p className="text-sage text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom note ── */}
      <p className="relative text-center text-sage text-xs mt-14 tracking-wide">
        All stories are from real Meditron families in Vijayawada &mdash; shared with their permission.
      </p>
    </section>
  );
}
