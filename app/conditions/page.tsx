import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "Meditron treats Autism Spectrum Disorder, ADHD, Cerebral Palsy, and Down Syndrome in children. Learn about each condition and how we help families in Vijayawada.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to discuss my child's condition."
)}`;

const conditions = [
  {
    slug: "autism",
    name: "Autism Spectrum Disorder",
    tagline: "Communication & Connection",
    summary:
      "ASD affects how children communicate, relate to others, and experience the world. Early, personalised therapy unlocks language, connection, and independence.",
    image: "/images/autism.png",
    imageAlt: "Child with autism in therapy at Meditron, Vijayawada",
    symptoms: ["Limited eye contact", "Delayed speech", "Repetitive behaviours", "Sensory sensitivities"],
  },
  {
    slug: "adhd",
    name: "ADHD",
    tagline: "Focus & Self-Regulation",
    summary:
      "ADHD is not naughtiness — it's a neurodevelopmental difference in attention and impulse control. Behaviour therapy and focus training transform how these children learn.",
    image: "/images/adhd.png",
    imageAlt: "Child with ADHD in therapy at Meditron, Vijayawada",
    symptoms: ["Can't stay seated", "Forgets instructions", "Impulsive behaviour", "Difficulty focusing"],
  },
  {
    slug: "cerebral-palsy",
    name: "Cerebral Palsy",
    tagline: "Movement & Independence",
    summary:
      "CP affects movement and muscle tone. With consistent physiotherapy and occupational therapy, children gain strength, mobility, and independence — milestone by milestone.",
    image: "/images/cerebral.png",
    imageAlt: "Child with cerebral palsy in physiotherapy at Meditron, Vijayawada",
    symptoms: ["Delayed motor milestones", "Stiff or floppy muscles", "Asymmetric movement", "Difficulty walking"],
  },
  {
    slug: "down-syndrome",
    name: "Down Syndrome",
    tagline: "Development & Potential",
    summary:
      "Children with Down syndrome learn everything — speaking, reading, self-care — on their own timeline. Our therapists walk every step of that timeline with them.",
    image: "/images/down.png",
    imageAlt: "Child with Down syndrome in therapy at Meditron, Vijayawada",
    symptoms: ["Low muscle tone", "Developmental delays", "Speech differences", "Learning differences"],
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        label="What We Treat"
        title="Conditions we"
        accent="specialise in."
        subtitle="We focus deeply on four neurodevelopmental conditions — because depth of expertise leads to better outcomes than breadth without mastery."
        breadcrumbs={[{ label: "Conditions", href: "#" }]}
      />

      {/* ── Condition cards ─────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-8">
          {conditions.map((c, i) => (
            <article
              key={c.slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 sm:p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{c.tagline}</span>
                <h2 className="text-slate-800 font-extrabold text-xl sm:text-2xl mb-3">{c.name}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{c.summary}</p>

                {/* Symptom chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.symptoms.map((s) => (
                    <span key={s} className="text-[0.7rem] font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/conditions/${c.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group/link"
                >
                  <ArrowRight className="w-4 h-4 text-accent shrink-0 group-hover/link:translate-x-1 transition-transform" />
                  Learn about {c.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── "Not sure?" section ─────────────────────────────────────────── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest">Not sure where to start?</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
            You don&apos;t need a diagnosis to reach out.
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8">
            If something doesn&apos;t feel right — a missed milestone, a teacher&apos;s concern, a gut feeling — that is enough reason to book an assessment. We will help you understand what you are seeing.
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
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
