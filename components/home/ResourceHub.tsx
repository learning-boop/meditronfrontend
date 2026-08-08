import Link from "next/link";
import { ArrowRight, BookHeart, Users, Globe } from "lucide-react";

const resources = [
  {
    icon: BookHeart,
    label: "Healing Stories",
    href: "/healing-stories",
    accentClass: "bg-accent/10 text-accent",
    borderClass: "hover:border-accent/40",
    pullQuote:
      "The day he said 'Amma' for the first time, I sat on the floor and cried. I had waited two years for that word.",
    description:
      "Three honest family journeys — Autism, ADHD, Cerebral Palsy — told by parents who were lost, found their way, and kept walking.",
    cta: "Read the stories",
  },
  {
    icon: Users,
    label: "For Parents",
    href: "/for-parents",
    accentClass: "bg-primary/10 text-primary",
    borderClass: "hover:border-primary/40",
    pullQuote:
      "These are the things our specialists wish every parent already knew before walking through our doors.",
    description:
      "Practical home-care tips for children with Autism, ADHD, Cerebral Palsy, and Down Syndrome — written plainly, condition by condition.",
    cta: "Read the guide",
  },
  {
    icon: Globe,
    label: "International & NRI Families",
    href: "/international",
    accentClass: "bg-healing-green/15 text-healing-green",
    borderClass: "hover:border-healing-green/40",
    pullQuote:
      "Your timezone. Your schedule. We will find the best time that works for both of us — no exceptions.",
    description:
      "Online consultations for families anywhere in the world. No time zone is a barrier. One consistent specialist, every session.",
    cta: "See how it works",
  },
];

export default function ResourceHub() {
  return (
    <section
      className="bg-primary-dark py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="resource-hub-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-accent/80 font-bold text-xs uppercase tracking-[0.22em] block mb-3">
            Go deeper
          </span>
          <h2
            id="resource-hub-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
          >
            Everything you need,{" "}
            <span className="text-accent">all in one place.</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Healing stories from real families, a care guide for parents, and
            support for families anywhere in the world.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <Link
                key={res.href}
                href={res.href}
                className={`group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 ${res.borderClass} hover:bg-white/10`}
              >
                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${res.accentClass}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-white font-extrabold text-base leading-snug">
                    {res.label}
                  </span>
                </div>

                {/* Pull quote */}
                <blockquote className="border-l-2 border-white/20 pl-4 mb-5">
                  <p className="text-white/70 font-serif text-sm leading-relaxed italic">
                    &ldquo;{res.pullQuote}&rdquo;
                  </p>
                </blockquote>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                  {res.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all duration-200">
                  <span>{res.cta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
