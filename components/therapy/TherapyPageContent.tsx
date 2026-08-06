import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import type { TherapyPageData } from "@/lib/therapy-pages";
import { NAP } from "@/lib/data";

// ── Inline link parser: converts [text](/href) to <Link> ──────────────────────
function ParsedParagraph({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <p className="text-muted-navy text-sm sm:text-base leading-relaxed">
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <Link
              key={i}
              href={match[2]}
              className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
            >
              {match[1]}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({
  children,
  alt,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section className={`py-14 sm:py-20 ${alt ? "bg-cream" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-extrabold text-confident-navy mb-6 leading-tight">
      {children}
    </h2>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function TherapyPageContent({
  data,
  waUrl,
}: {
  data: TherapyPageData;
  waUrl: string;
}) {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-healing-green py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Treatment at Meditron Vijayawada
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {data.hero.title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
              >
                <CalendarCheck className="w-5 h-5 shrink-0" />
                Book Free Assessment
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={`${data.name} at Meditron Child Development Centre Vijayawada`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 1. Understanding ──────────────────────────────────────────────── */}
      <Section>
        <SectionHeading>{data.understanding.title}</SectionHeading>
        <div className="space-y-4">
          {data.understanding.paragraphs.map((p, i) => (
            <ParsedParagraph key={i} text={p} />
          ))}
        </div>
      </Section>

      {/* ── 2. Why Your Child Needs This ──────────────────────────────────── */}
      <Section alt>
        <SectionHeading>{data.whyChild.title}</SectionHeading>
        <div className="space-y-4 mb-8">
          {data.whyChild.paragraphs.map((p, i) => (
            <ParsedParagraph key={i} text={p} />
          ))}
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {data.whyChild.signs.map((sign) => (
            <li key={sign} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-primary-light/40">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-navy text-sm leading-snug">{sign}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 3. How It Works ───────────────────────────────────────────────── */}
      <Section>
        <SectionHeading>{data.howItWorks.title}</SectionHeading>
        <div className="space-y-4 mb-10">
          {data.howItWorks.paragraphs.map((p, i) => (
            <ParsedParagraph key={i} text={p} />
          ))}
        </div>
        <div className="space-y-4">
          {data.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="flex gap-5 p-5 rounded-2xl border border-primary-light/50 bg-primary-light/10">
              <span className="text-primary font-black text-xl leading-none shrink-0 w-7 pt-0.5">
                {i + 1}.
              </span>
              <div>
                <p className="font-bold text-confident-navy text-sm mb-1">{step.title}</p>
                <p className="text-muted-navy text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. Benefits ───────────────────────────────────────────────────── */}
      <Section alt>
        <SectionHeading>{data.benefits.title}</SectionHeading>
        <div className="space-y-4 mb-8">
          {data.benefits.paragraphs.map((p, i) => (
            <ParsedParagraph key={i} text={p} />
          ))}
        </div>
        <ul className="grid sm:grid-cols-2 gap-2.5">
          {data.benefits.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-muted-navy text-sm">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 5. Specialist Role ────────────────────────────────────────────── */}
      <Section>
        <SectionHeading>{data.specialistRole.title}</SectionHeading>
        <div className="space-y-4">
          {data.specialistRole.paragraphs.map((p, i) => (
            <ParsedParagraph key={i} text={p} />
          ))}
        </div>
      </Section>

      {/* ── Related Treatments ────────────────────────────────────────────── */}
      <section className="py-14 bg-primary-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-confident-navy mb-6">
            Also Available at Meditron Vijayawada
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.relatedTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/therapies/${t.slug}`}
                className="flex items-center justify-between gap-2 bg-white hover:bg-cream border border-primary-light rounded-xl px-4 py-3.5 text-sm font-semibold text-confident-navy hover:text-primary transition-colors shadow-sm group"
              >
                <span>{t.name} in Vijayawada</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-primary group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-white/60 font-semibold text-xs uppercase tracking-widest">
            Ready to Begin in Vijayawada?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Book a Free Assessment at Meditron Vijayawada
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            Our specialist team in Vijayawada will assess your child, answer your questions,
            and recommend the right therapy plan — with clear reasons for every decision.
            No pressure. No guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WhatsApp Meditron Vijayawada
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
