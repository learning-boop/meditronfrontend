import { MessageCircle, Eye, ClipboardList } from "lucide-react";

const trustChips = [
  "M.D. · Pediatric Rehabilitation",
  "8+ years with children",
  "500+ families guided",
  "Speaks Telugu, Hindi & English",
];

const visitSteps = [
  {
    num: "01",
    icon: MessageCircle,
    badge: "45 mins",
    title: "We talk",
    body: "You tell me everything you've noticed — nothing is too small, nothing is too much.",
  },
  {
    num: "02",
    icon: Eye,
    badge: "No pressure",
    title: "I observe your child",
    body: "Playing naturally, in their own way. No tests. No clipboards. Just watching.",
  },
  {
    num: "03",
    icon: ClipboardList,
    badge: "Before you leave",
    title: "You leave with clarity",
    body: "A clear plan in your hands — not confusion, not a stack of referrals. A real path forward.",
  },
];

export default function WhyMeditron() {
  return (
    <section
      className="relative bg-primary-dark overflow-hidden"
      aria-label="About Meditron Child Development Centre"
    >
      {/*
        ── Video background ──────────────────────────────────────────────
        Add src="/videos/your-video.mp4" to the <source> tag below and
        change opacity-0 to opacity-20 (or desired level) on the <video>.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/About/1.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      >
        <source src="/videos/meditron-cdc-background.mp4" type="video/mp4" />
      </video>
      {/* Overlay at 50% so the video shows through */}
      <div className="absolute inset-0 bg-primary-dark/50" aria-hidden="true" />

      {/* ── Top decorative accent strip ── */}
      <div className="relative h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ── Large section title ── */}
          <div className="text-center mb-10">
            <span className="text-accent/80 font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              About Us
            </span>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Child Development Center
              <span className="block text-accent mt-1">in Vijayawada</span>
            </h2>
          </div>

          {/* ── Centered letter card ── */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-cream rounded-[2rem] shadow-2xl">
              {/* Accent left bookmark bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-accent via-primary to-accent/30" />

              {/* Floating opening quote */}
              <span
                className="absolute -top-7 left-8 text-accent font-black select-none pointer-events-none leading-none"
                style={{ fontSize: "7rem", lineHeight: 1, opacity: 0.18 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative px-6 sm:px-10 pt-8 sm:pt-10 pb-7 sm:pb-8">
                {/* Salutation */}
                <p className="text-primary font-extrabold text-lg sm:text-xl mb-5 tracking-wide">
                  Dear Amma,
                </p>

                {/* Letter body */}
                <div className="space-y-4 text-navy text-sm sm:text-base leading-[1.85]">
                  <p>
                    Every day, a mother sits in front of me and asks the same
                    question with the same eyes:{" "}
                    <span className="font-semibold text-confident-navy italic">
                      &ldquo;Doctor, will my child be okay?&rdquo;
                    </span>
                  </p>
                  <p>
                    I never answer with statistics first. I answer with what
                    I&apos;ve seen for{" "}
                    <span className="font-bold text-primary">8+ years</span>{" "}in
                    this room — children who wouldn&apos;t look up, now calling
                    out to their friends. Children who couldn&apos;t hold a
                    pencil, now writing their names and showing it to everyone{" "}
                    <em>twice.</em>
                  </p>
                  <p>
                    Your child is not a case file to me. Therapy doesn&apos;t
                    start with a diagnosis — it starts with understanding{" "}
                    <span className="font-bold text-primary">
                      one particular child. Yours.
                    </span>
                  </p>
                  <p>
                    Bring your questions. Bring your fears. Bring your child.
                    We&apos;ll take it from there — together.
                  </p>
                </div>

                {/* Signature row */}
                <div className="mt-6 pt-5 border-t border-primary-light flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <p className="text-confident-navy font-extrabold text-base sm:text-lg">
                      Dr. Sunitha Reddy
                    </p>
                    <p className="text-dusty-blue text-xs sm:text-sm mt-0.5">
                      M.D. · Pediatric Rehabilitation &amp; Development
                    </p>
                    <p className="text-primary text-xs font-semibold mt-1">
                      Founder, Meditron CDC · Vijayawada
                    </p>
                  </div>
                  <span
                    className="text-accent font-black leading-none select-none hidden sm:block"
                    style={{ fontSize: "3.5rem", lineHeight: 0.8, opacity: 0.22 }}
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                </div>

                {/* Trust chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-block bg-primary/10 text-primary text-[0.7rem] sm:text-xs font-bold px-4 py-1.5 rounded-full tracking-wide"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── "Your first visit" steps ── */}
          <div className="mt-10">
            <p className="text-center text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Your first visit with me
            </p>

            <div className="grid sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {visitSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="bg-primary-dark/80 px-7 py-7 flex flex-col gap-4 group hover:bg-primary/30 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-black text-3xl leading-none tabular-nums">
                        {step.num}
                      </span>
                      <span className="text-[0.65rem] font-bold text-white/35 uppercase tracking-widest border border-white/15 rounded-full px-2.5 py-1">
                        {step.badge}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mt-2">
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
