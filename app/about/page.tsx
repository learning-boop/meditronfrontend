import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  MessageCircle,
  Heart,
  Users,
  BookOpen,
  ShieldCheck,
  DoorOpen,
  Stethoscope,
  Brain,
  Gamepad2,
  Scissors,
  MapPin,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meditron Child Development Centre — our story, our mission, and why hundreds of families in Vijayawada trust us with their children's futures.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to know more about your centre."
)}`;

const values = [
  {
    icon: Heart,
    title: "Family-First Always",
    body: "Therapy does not happen in a clinic in isolation. We involve parents in every session, every plan, and every decision. You are not a bystander — you are the most important part of your child's team.",
  },
  {
    icon: Users,
    title: "Every Child is an Individual",
    body: "We do not use templates. We read your child first — how they play, what frustrates them, what lights them up — then we build a plan around that specific child.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    body: "Every method we use is backed by clinical research. We keep learning — through continuing education, case reviews, and collaboration — so your child benefits from the best available knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, Transparent Communication",
    body: "We will tell you what we see, what we expect, and what is realistic. We celebrate real progress — and we are honest when a plan needs to change.",
  },
];

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "500+", label: "Children guided" },
  { value: "15+", label: "Certified specialists" },
  { value: "4", label: "Core therapy disciplines" },
];

const rooms = [
  {
    icon: DoorOpen,
    name: "Reception Area",
    desc: "A calm, welcoming space where families arrive feeling supported — not stressed.",
  },
  {
    icon: Stethoscope,
    name: "Therapy Rooms",
    desc: "Private, well-equipped rooms for focused 1-on-1 therapy sessions with certified specialists.",
  },
  {
    icon: Brain,
    name: "Sensory Room",
    desc: "A purpose-designed environment for sensory integration, regulation, and exploration.",
  },
  {
    icon: Gamepad2,
    name: "Play Area",
    desc: "A safe, stimulating space where children learn through guided, purposeful play.",
  },
  {
    icon: Scissors,
    name: "OT Room",
    desc: "Equipped with therapeutic tools for developing fine motor skills and daily independence.",
  },
  {
    icon: MapPin,
    name: "Consultation Room",
    desc: "Where therapists and families sit together to plan, review progress, and celebrate milestones.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Meditron"
        title="We exist because every child"
        accent="deserves a chance."
        subtitle="Eight years ago, a group of specialists in Vijayawada made a simple decision: to build the kind of centre they wished had existed for the families they'd seen struggle alone."
        breadcrumbs={[{ label: "About", href: "#" }]}
      />

      {/* ── Our Story ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual panel — replaces placeholder centre photo */}
          <div className="flex flex-col gap-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-primary-light/40">
                  <p className="text-3xl sm:text-4xl font-black text-primary tabular-nums">{s.value}</p>
                  <p className="text-muted-navy text-xs sm:text-sm mt-1.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            {/* Quote */}
            <blockquote className="bg-primary-light/40 rounded-2xl p-6 border-l-4 border-primary font-serif text-muted-navy text-base leading-relaxed italic">
              &ldquo;Started by specialists who saw the same family story repeat itself — and decided to write a different ending.&rdquo;
            </blockquote>
            {/* Location chip */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-primary-light/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-0.5">Based in</p>
                <p className="text-confident-navy font-extrabold text-base leading-tight">Vijayawada, Andhra Pradesh</p>
                <p className="text-muted-navy text-xs mt-0.5">Seetharamapuram · Est. 2018</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">Our Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-6">
              Started with a question no parent should have to ask alone
            </h2>
            <div className="space-y-5 text-muted-navy text-sm sm:text-base leading-[1.85]">
              <p>
                Every week, we would meet families who had spent months — sometimes years — trying to understand why their child wasn&apos;t talking, wasn&apos;t making eye contact, wasn&apos;t walking when others their age were. They had gone from doctor to doctor, collecting opinions but not answers. They were exhausted, scared, and alone.
              </p>
              <p>
                Meditron began as an answer to that. A place where a family could walk in with their questions and walk out with a plan. Not a referral. Not a waiting list. A real plan, built around their real child.
              </p>
              <p>
                We are based in Vijayawada, Andhra Pradesh — and we are proud of it. This is our community. These are our children. We speak your language — Telugu, Hindi, English — because communication between a therapist and a parent matters as much as the therapy itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">Our Mission</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-8">
            What we are here to do
          </h2>
          <blockquote className="text-muted-navy text-lg sm:text-xl leading-[1.8] italic border-l-4 border-primary pl-6 text-left max-w-3xl mx-auto">
            &ldquo;To give every child in Vijayawada access to world-class developmental therapy — delivered with the warmth of a family that truly cares.&rdquo;
          </blockquote>
          <p className="mt-8 text-muted-navy text-sm sm:text-base leading-relaxed">
            We achieve this through early identification, personalised therapy plans, consistent progress tracking, and a partnership with parents that extends well beyond the clinic walls.
          </p>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">How We Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy">Our four core values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-cream rounded-2xl p-7 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-extrabold text-confident-navy text-base">{v.title}</h3>
                  <p className="text-muted-navy text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-accent font-black text-4xl sm:text-5xl tabular-nums">{s.value}</p>
              <p className="text-white/70 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inside Meditron — room feature cards ───────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">Inside Meditron</span>
            <h2 className="mt-3 text-3xl font-extrabold text-confident-navy">A space built for children</h2>
            <p className="mt-4 text-muted-navy text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our therapy rooms are bright, safe, and designed to feel non-clinical — because children learn best when they feel at home.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {rooms.map((room) => {
              const Icon = room.icon;
              return (
                <div key={room.name} className="bg-clean-neutral rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-extrabold text-confident-navy text-base leading-snug">{room.name}</h3>
                  <p className="text-muted-navy text-sm leading-relaxed">{room.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Come and see us for yourself
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            The best way to understand Meditron is to walk through our doors. Book a free assessment — no paperwork, no waiting list, no obligation.
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
