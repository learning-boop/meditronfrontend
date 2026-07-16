import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, MessageCircle, CheckCircle, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import { conditionDetails } from "@/lib/conditions-detail";
import { conditions } from "@/lib/data";
import { NAP } from "@/lib/data";

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const detail = conditionDetails[slug];
  if (!detail) return {};
  return {
    title: detail.name,
    description: `Learn about ${detail.name} and how Meditron's specialists in Vijayawada help children with personalised therapy.`,
  };
}

// ── Condition image map ───────────────────────────────────────────────────────
const IMAGES: Record<string, string> = {
  autism: "/images/autism.png",
  adhd: "/images/adhd.png",
  "cerebral-palsy": "/images/cerebral.png",
  "down-syndrome": "/images/down.png",
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = conditionDetails[slug];
  if (!detail) notFound();

  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    `Hi Meditron, I'd like to learn more about ${detail.name} therapy for my child.`
  )}`;

  const image = IMAGES[slug];

  // JSON-LD FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        label={detail.tagline}
        title={detail.name}
        subtitle="Understanding the condition is the first step to helping your child."
        breadcrumbs={[
          { label: "Conditions", href: "/conditions" },
          { label: detail.name, href: "#" },
        ]}
      />

      {/* ── Introduction ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-primary-light/40">
            {image && (
              <Image
                src={image}
                alt={`${detail.name} — Meditron Vijayawada`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
          </div>
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">What Is It?</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-800 mb-6">
              Understanding {detail.name}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-[1.9]">{detail.intro}</p>
          </div>
        </div>
      </section>

      {/* ── Signs ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Signs to Watch For</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-800">
              Does this sound familiar?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {detail.signs.map((sign) => (
              <div key={sign} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-700 text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary/8 rounded-2xl px-6 py-5 border-l-4 border-primary">
            <p className="text-primary text-sm font-medium leading-relaxed">{detail.signsNote}</p>
          </div>
        </div>
      </section>

      {/* ── How We Help ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">How We Help</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              Our therapy approach for {detail.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {detail.therapies.map((t) => (
              <div key={t.name} className="bg-white/8 rounded-2xl p-7 border border-white/10">
                <h3 className="text-white font-bold text-base mb-3">{t.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Your Journey With Us</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-800">
              What to expect at Meditron
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {detail.journey.map((step) => (
              <div key={step.num} className="flex flex-col gap-4">
                <span className="text-accent font-black text-4xl leading-none">{step.num}</span>
                <h3 className="text-slate-800 font-bold text-base">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Common Questions</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-800">
              Questions parents ask us most
            </h2>
          </div>
          <div className="space-y-4">
            {detail.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-bold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing quote + CTA ───────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white/90 text-lg sm:text-xl font-medium italic leading-relaxed mb-8">
            &ldquo;{detail.closing}&rdquo;
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
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
