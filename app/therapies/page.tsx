import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Mic, Hand, Activity } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Therapy Programmes",
  description:
    "Speech therapy, occupational therapy, and physiotherapy for children in Vijayawada. All sessions are led by certified specialists at Meditron Child Development Centre.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to know which therapy is right for my child."
)}`;

const therapies = [
  {
    id: "speech",
    icon: Mic,
    label: "Speech Therapy",
    tagline: "Language & Communication",
    heading: "Finding your child's voice — however that voice sounds",
    intro:
      "Speech therapy at Meditron goes beyond pronunciation. We work on the full spectrum of communication — understanding language, using language, articulation, fluency, and social communication. Whether your child is non-verbal, late to talk, or struggling to make themselves understood, we meet them exactly where they are.",
    whoFor: [
      "Children with Autism who are non-verbal or minimally verbal",
      "Children with Down syndrome and low oral muscle tone",
      "Children with speech sound disorders, lisps, or stuttering",
      "Children with language delays — understanding or expression",
      "Children with Cerebral Palsy affecting speech or swallowing",
      "Children with ADHD who struggle with social communication",
    ],
    process: [
      { title: "Detailed speech & language assessment", body: "We evaluate comprehension, expression, articulation, fluency, voice, and social use of language using standardised and observational tools." },
      { title: "Individual therapy sessions", body: "45-minute weekly or twice-weekly sessions using play-based, structured, and technology-supported methods depending on the child's age and profile." },
      { title: "Home programme", body: "We train parents in daily exercises and communication strategies that turn every meal, bath, and walk into a language-learning opportunity." },
    ],
    highlights: ["Play-based methods", "Non-verbal support", "Home programme included", "45-min focused sessions"],
    quote: "Communication is more than words — and we meet every child exactly where they are.",
  },
  {
    id: "occupational",
    icon: Hand,
    label: "Occupational Therapy",
    tagline: "Independence & Daily Living",
    heading: "Teaching children the skills that make daily life possible",
    intro:
      "Occupational therapy (OT) focuses on the functional skills a child needs to participate in daily life — at school, at home, and with friends. From holding a pencil to managing sensory input to getting dressed independently, OT addresses the invisible barriers that prevent children from fully participating in childhood.",
    whoFor: [
      "Children with Autism and sensory processing difficulties",
      "Children with poor fine motor skills — writing, cutting, fastening",
      "Children with ADHD struggling with organisation and self-regulation",
      "Children with Cerebral Palsy working toward independence in daily tasks",
      "Children with Down syndrome developing self-care skills",
      "Children with developmental coordination disorder",
    ],
    process: [
      { title: "Functional skills assessment", body: "We assess fine motor skills, sensory processing, visual perception, self-care, and school-readiness to identify specific goals." },
      { title: "Targeted OT sessions", body: "Sessions combine purposeful activities, therapeutic equipment, and structured challenges to build each specific skill systematically." },
      { title: "School & home integration", body: "We advise teachers on classroom adaptations and train parents on home strategies — making gains transferable to real environments immediately." },
    ],
    highlights: ["Fine motor skills", "Sensory integration", "School-readiness", "Daily-life independence"],
    quote: "Independence begins with the small things — and we celebrate every single one of them.",
  },
  {
    id: "physiotherapy",
    icon: Activity,
    label: "Physiotherapy",
    tagline: "Movement & Strength",
    heading: "Every milestone begins with a movement",
    intro:
      "Physiotherapy at Meditron works with the body to improve strength, flexibility, balance, coordination, and mobility. For children with movement difficulties — whether from Cerebral Palsy, Down syndrome, or developmental delay — physiotherapy is often the foundation on which all other progress is built.",
    whoFor: [
      "Children with Cerebral Palsy of all types and severities",
      "Children with Down syndrome and low muscle tone (hypotonia)",
      "Children with developmental motor delays — late sitting, standing, walking",
      "Children recovering from orthopaedic conditions or surgery",
      "Children with balance and coordination difficulties",
      "Children with Autism and motor planning challenges",
    ],
    process: [
      { title: "Comprehensive motor assessment", body: "We assess muscle tone, strength, range of motion, balance, gait, and gross motor milestones against age-appropriate developmental norms." },
      { title: "Active physiotherapy sessions", body: "2–3 sessions per week using therapeutic exercise, positioning, equipment, and hands-on techniques to achieve specific motor goals." },
      { title: "Progress reviews", body: "Formal reviews every 3 months with updated goals, parent reports, and coordination with the child's paediatrician and other therapists as needed." },
    ],
    highlights: ["Strength & balance", "Gait training", "2–3× weekly sessions", "3-month milestone reviews"],
    quote: "Every step forward — however small — is built on the one that came before it.",
  },
];

export default function TherapiesPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Therapy programmes"
        accent="built around your child."
        subtitle="Three core disciplines. One goal: giving every child the skills they need to participate fully in the life they deserve."
        breadcrumbs={[{ label: "Therapies", href: "#" }]}
      />

      {/* ── Therapy sections ─────────────────────────────────────────────── */}
      {therapies.map((therapy, i) => {
        const reverse = i % 2 !== 0;
        const Icon = therapy.icon;
        return (
          <section
            key={therapy.id}
            id={therapy.id}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${reverse ? "bg-cream" : "bg-clean-neutral"}`}
          >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Visual panel — replaces placeholder image */}
              <div className={reverse ? "md:order-2" : "md:order-1"}>
                <div className="rounded-3xl bg-primary-light/40 p-8 sm:p-10 h-full flex flex-col justify-between gap-8 min-h-[360px]">
                  {/* Top: number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className="text-primary/10 font-black select-none leading-none"
                      style={{ fontSize: "6rem", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {therapy.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full shadow-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary pl-5 font-serif text-primary-dark text-base sm:text-lg italic leading-relaxed">
                    &ldquo;{therapy.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Content */}
              <div className={reverse ? "md:order-1" : "md:order-2"}>
                <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">{therapy.tagline}</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-confident-navy mb-4 leading-tight">
                  {therapy.heading}
                </h2>
                <p className="text-muted-navy text-sm sm:text-base leading-relaxed mb-8">{therapy.intro}</p>

                {/* Who it's for */}
                <div className="mb-8">
                  <p className="text-confident-navy font-bold text-sm mb-3">Who benefits most:</p>
                  <ul className="space-y-2">
                    {therapy.whoFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-muted-navy text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="space-y-4">
                  {therapy.process.map((step, j) => (
                    <div key={step.title} className="flex gap-4">
                      <span className="text-accent font-black text-lg leading-none shrink-0 w-6">{j + 1}.</span>
                      <div>
                        <p className="font-bold text-confident-navy text-sm">{step.title}</p>
                        <p className="text-muted-navy text-sm mt-1 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-white/60 font-semibold text-xs uppercase tracking-widest">Ready to Begin?</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Not sure which therapy your child needs?
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            That&apos;s what our free assessment is for. We assess your child across all relevant areas and recommend a therapy plan that makes sense — with clear reasons for every decision.
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
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
