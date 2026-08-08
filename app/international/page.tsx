import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  MessageCircle,
  Video,
  Globe,
  Languages,
  Clock,
  PhoneCall,
  FileText,
  ClipboardList,
  HeartHandshake,
  BookOpenCheck,
  UserCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Online Consultations for International & NRI Families | Meditron Vijayawada",
  description:
    "Meditron Child Development Centre supports international and NRI families worldwide with flexible online consultations — no time zone is a barrier. Expert care for Autism, ADHD, Cerebral Palsy, and Down Syndrome, available on your schedule.",
  openGraph: {
    title: "Online Consultations for International & NRI Families | Meditron Vijayawada",
    description:
      "No matter where you are in the world, Meditron will find a time that works for you. Expert child development support online.",
  },
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I am reaching out from outside India and would like to schedule an online consultation for my child."
)}`;

const howWeSupport = [
  {
    icon: FileText,
    title: "Review everything before the call",
    body: "Share any existing reports, assessments, school notes, or videos of your child's behaviour before your session. We study them carefully so the consultation itself is focused and useful — not spent on background.",
  },
  {
    icon: Video,
    title: "A real consultation, not a general chat",
    body: "Our video sessions are the same depth as an in-person first visit. Our specialist will observe your child live on screen, ask the right questions, and give you a clear picture of what is happening and why — not a vague \"let's wait and see.\"",
  },
  {
    icon: ClipboardList,
    title: "A written plan you leave with",
    body: "Within 48 hours of your session, we will send you a written therapy plan — specific goals for your child, a set of home activities to begin immediately, and guidance on what to look for in the weeks ahead.",
  },
  {
    icon: BookOpenCheck,
    title: "Parent coaching every step of the way",
    body: "For international families, the parent is the primary therapist between sessions. We will train you — clearly, practically, in plain language — so you are not just watching your child but actively contributing to their progress every single day.",
  },
  {
    icon: HeartHandshake,
    title: "Regular follow-up sessions",
    body: "We schedule follow-up calls to review your child's progress, update the plan, and answer the questions that have come up since the last session. Your child's plan evolves as they do.",
  },
  {
    icon: UserCheck,
    title: "One consistent specialist",
    body: "You will not be passed between different doctors. Your family is assigned one specialist who learns your child over time, builds a relationship with you, and provides continuity across every session.",
  },
];

const conditions = [
  { label: "Autism Spectrum Disorder", href: "/conditions/autism-vijayawada" },
  { label: "ADHD", href: "/conditions/adhd-vijayawada" },
  { label: "Cerebral Palsy", href: "/conditions/cerebral-palsy-vijayawada" },
  { label: "Down Syndrome", href: "/conditions/down-syndrome-vijayawada" },
];

const therapies = [
  { label: "Speech Therapy", href: "/therapies/speech-therapy-vijayawada" },
  { label: "Occupational Therapy", href: "/therapies/occupational-therapy-vijayawada" },
  { label: "Physiotherapy", href: "/therapies/physiotherapy-vijayawada" },
  { label: "ABA Therapy", href: "/therapies/aba-therapy-vijayawada" },
  { label: "Behaviour Therapy", href: "/therapies/behaviour-therapy-vijayawada" },
  { label: "Sensory Integration", href: "/therapies/sensory-integration-vijayawada" },
  { label: "Play Therapy", href: "/therapies/play-therapy-vijayawada" },
];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        label="International & NRI Families"
        title="Your timezone. Your schedule."
        accent="Your child's progress."
        subtitle="We support families across the world with online consultations. No matter where you are — UK, USA, UAE, Australia, or anywhere else — we will find a time that works for both of us."
        breadcrumbs={[{ label: "International Patients", href: "#" }]}
      />

      {/* ── The core reassurance ──────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8" aria-labelledby="reassurance-heading">
        <div className="max-w-3xl mx-auto">
          <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">No barriers</span>
          <h2
            id="reassurance-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-8 leading-tight"
          >
            Time zones will never stand between your child and the right care.
          </h2>

          <div className="space-y-6 text-muted-navy text-sm sm:text-base leading-[1.85]">
            <p>
              We know what it feels like to be thousands of miles from home, watching your child struggle, and not knowing where to turn. You are trying to find a specialist who understands your language, your culture, and your child — not just a generic overseas clinic that has never heard of Vijayawada.
            </p>
            <p>
              We have been supporting NRI and international families for years. Families in the UK, USA, UAE, Australia, Singapore, and beyond have worked with our specialists — and the sessions happen completely on <strong className="text-confident-navy">their schedule</strong>, not ours.
            </p>
            <p>
              If you are in a time zone where our mornings are your evenings — that is fine. If the only slot that works for you is a weekend — that is fine too. We will not ask you to rearrange your life around clinic hours. <strong className="text-confident-navy">You call us, or you schedule a meeting, and we will find the best time for both of us.</strong> It is that simple.
            </p>
            <p>
              Geography does not limit what we can do for your child. A child assessed and supported online with proper structure and consistent follow-up makes the same meaningful progress as a child seen in our clinic. The method is different. The outcome is the same.
            </p>
          </div>

          {/* Contact prompt */}
          <div className="mt-10 bg-primary-light/60 border border-primary/15 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-extrabold text-confident-navy text-base mb-1">
                Ready to find a time that works for you?
              </p>
              <p className="text-muted-navy text-sm leading-relaxed">
                Message us on WhatsApp with your time zone and a few slots that work for you. We will get back to you within 24 hours to confirm.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── How we support your child ─────────────────────────────────────── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="support-heading">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">How we work with you</span>
          <h2
            id="support-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-4 leading-tight"
          >
            Exactly how we will support and guide your child
          </h2>
          <p className="text-muted-navy text-base leading-relaxed mb-12">
            Online is not a lesser version of care. It is a different structure — and when done properly, it is just as effective. Here is how our international support works, step by step.
          </p>

          <div className="space-y-8">
            {howWeSupport.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-5 border-l-4 border-primary/25 pl-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-confident-navy text-base sm:text-lg mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-navy text-sm sm:text-base leading-[1.85]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What we treat ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary-dark px-4 sm:px-6 lg:px-8" aria-labelledby="conditions-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent/80 font-bold text-xs uppercase tracking-widest block mb-3">What we treat</span>
            <h2 id="conditions-heading" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Conditions we support online
            </h2>
            <p className="mt-4 text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our online service covers everything our in-clinic specialists handle. If your child has one of these conditions — or you suspect they might — we are the right people to speak to.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                condition: "Autism Spectrum Disorder",
                href: "/conditions/autism-vijayawada",
                note: "Early identification, speech and communication development, sensory support, and structured parent coaching.",
              },
              {
                condition: "ADHD",
                href: "/conditions/adhd-vijayawada",
                note: "Behaviour management strategies, focus techniques, school support guidance, and family coaching.",
              },
              {
                condition: "Cerebral Palsy",
                href: "/conditions/cerebral-palsy-vijayawada",
                note: "Physiotherapy guidance, home exercise plans, positioning advice, and milestone tracking.",
              },
              {
                condition: "Down Syndrome",
                href: "/conditions/down-syndrome-vijayawada",
                note: "Speech and language development, occupational skill building, social integration support, and parent training.",
              },
            ].map((item) => (
              <div key={item.condition} className="bg-primary-dark/70 border border-white/10 rounded-2xl p-7">
                <Link
                  href={item.href}
                  className="text-accent font-extrabold text-base sm:text-lg hover:underline underline-offset-4 mb-3 block"
                >
                  {item.condition} →
                </Link>
                <p className="text-white/55 text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages & cultural context ──────────────────────────────────── */}
      <section className="py-16 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 bg-primary-light/50 border border-primary/15 rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Languages className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-extrabold text-confident-navy text-base sm:text-lg mb-2">
                We speak your language — and we understand your family.
              </h3>
              <p className="text-muted-navy text-sm sm:text-base leading-[1.85]">
                All sessions are available in <strong className="text-confident-navy">Telugu, Hindi, and English</strong>. For NRI families, this matters more than any credential. A therapist who understands your cultural values, your family dynamics, and the way you communicate with your child is not just a convenience — it is a clinical advantage. You will not need to explain context that a Western clinic would simply not understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions & therapies internal links ─────────────────────────── */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-5">
                Conditions We Treat in Vijayawada
              </h3>
              <ul className="space-y-3">
                {conditions.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="flex items-center gap-2 text-sm text-muted-navy hover:text-primary font-medium transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0" />
                      {c.label} in Vijayawada
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-5">
                Therapies Available Online
              </h3>
              <ul className="space-y-3">
                {therapies.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className="flex items-center gap-2 text-sm text-muted-navy hover:text-primary font-medium transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0" />
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Globe className="w-10 h-10 text-white/40 mx-auto mb-5" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Wherever you are, we are here.
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            Message us with your time zone and availability. We will respond within 24 hours and confirm a session time that works for your family — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Schedule a Call
            </Link>
            <a
              href={`tel:${NAP.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
