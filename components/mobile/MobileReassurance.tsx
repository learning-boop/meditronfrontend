import Reveal from "@/components/mobile/Reveal";
import CountUp from "@/components/mobile/CountUp";

const stats = [
  { to: 8, label: "Years" },
  { to: 500, label: "Children" },
  { to: 15, label: "Therapists" },
];

/** Mobile-only reassurance strip — "your child is not broken". */
export default function MobileReassurance() {
  return (
    <>
      <div className="h-2.5 muggu-silk md:hidden" aria-hidden="true" />
      <section
        className="md:hidden relative overflow-hidden bg-primary-dark px-5 py-9"
        aria-label="Every child blooms in their own time"
      >
        <div
          className="absolute inset-0 opacity-[0.16] muggu-dots-light"
          aria-hidden="true"
        />

        <Reveal className="relative text-center">
          <span
            className="block font-[family-name:var(--font-telugu-display)] text-4xl leading-[0.6] text-[#ffd9a8]"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="mt-3 font-serif italic text-[1.15rem] leading-relaxed text-white">
            Every child is a flower. Some simply bloom a little later — that is
            all.
          </p>
          <p className="mt-2.5 font-[family-name:var(--font-telugu)] text-[0.95rem] leading-relaxed text-white/70">
            ప్రతి బిడ్డ ఒక్కో పువ్వు — కొన్ని పువ్వులు కాస్త ఆలస్యంగా
            వికసిస్తాయి, అంతే.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-6">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[1.15rem] bg-white/20">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#3a8280] px-2 py-4 text-center"
              >
                <CountUp
                  to={s.to}
                  className="block font-heading text-[1.65rem] font-extrabold leading-none text-[#ffbfa6] tabular-nums"
                />
                <span className="mt-1.5 block text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-white/60">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
