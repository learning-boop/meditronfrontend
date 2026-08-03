import Reveal from "@/components/mobile/Reveal";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Mother of Arjun, 6",
    quote:
      "Within six months of speech therapy my son started speaking full sentences. The therapists here are unbelievably patient.",
    telugu: false,
  },
  {
    name: "Ravi Kumar",
    role: "Father of Ananya, 4",
    quote:
      "మా పాప ఇప్పుడు తనే బట్టలు వేసుకుంటుంది. ఇక్కడ డాక్టర్ గారు మా భయాన్ని ముందు తీసేశారు.",
    telugu: true,
  },
  {
    name: "Sunita Reddy",
    role: "Mother of Vikram, 7",
    quote:
      "Occupational therapy changed our life. Vikram writes, dresses himself, and joins his classmates with confidence now.",
    telugu: false,
  },
];

/** Mobile-only Google-review rail. Replace rating/count with the live values. */
export default function MobileReviews() {
  return (
    <section className="md:hidden bg-cream py-9" aria-label="Parent reviews">
      <Reveal className="flex items-center justify-between gap-3 px-5">
        <div>
          <span className="font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-accent">
            Parents of Vijayawada
          </span>
          <h2 className="mt-1.5 font-heading text-[1.55rem] font-extrabold leading-tight text-confident-navy">
            4.9 on Google
          </h2>
        </div>
        <div className="text-right">
          <span className="block text-[0.95rem] tracking-[2px] text-gold" aria-hidden="true">
            ★★★★★
          </span>
          <span className="mt-0.5 block text-[0.7rem] text-dusty-blue">
            128 reviews
          </span>
        </div>
      </Reveal>

      <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1.5">
        {reviews.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 0.06}
            className="w-[258px] shrink-0 snap-start"
          >
            <article className="h-full rounded-[1.25rem] border border-primary/10 bg-white p-[18px]">
              <span className="block text-[0.75rem] tracking-[2px] text-gold" aria-hidden="true">
                ★★★★★
              </span>
              <p
                className={`mt-2.5 leading-[1.75] text-muted-navy ${
                  r.telugu
                    ? "font-[family-name:var(--font-telugu)] text-[0.9rem]"
                    : "font-serif text-[0.85rem]"
                }`}
              >
                {r.quote}
              </p>
              <p className="mt-3 font-heading text-[0.78rem] font-extrabold text-confident-navy">
                {r.name}
              </p>
              <p className="text-[0.7rem] text-dusty-blue">{r.role}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
