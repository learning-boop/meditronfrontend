import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, GraduationCap, Award, Users } from "lucide-react";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Expert Team | Meditron Child Development Centre Vijayawada",
  description:
    "Meet the certified specialists at Meditron Child Development Centre, Vijayawada — psychologists, speech therapists, occupational therapists, physiotherapists, ABA analysts, and behaviour therapists dedicated to your child's development.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to know more about your team and book an assessment for my child."
)}`;

// ── Team member data ──────────────────────────────────────────────────────────
const team = [
  {
    name: "Dr. Meditron Specialist",
    role: "Lead Child Developmental Paediatrician",
    qualifications: ["MBBS", "MD (Paediatrics)", "Fellowship in Developmental Paediatrics"],
    experience: "12+ years",
    bio: "Leads the diagnostic and assessment team at Meditron Vijayawada. Specialises in early identification of Autism Spectrum Disorder, ADHD, Cerebral Palsy, and neurodevelopmental conditions. Conducts comprehensive developmental assessments and coordinates multidisciplinary therapy plans for every child registered at Meditron.",
    specialities: ["Autism Diagnosis", "ADHD Assessment", "Developmental Screening", "Cerebral Palsy", "Down Syndrome"],
    color: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
  },
  {
    name: "Speech-Language Pathologist",
    role: "Senior Speech & Language Therapist",
    qualifications: ["B.Sc. (Speech-Language Pathology)", "M.Sc. (Speech-Language Pathology)", "RCI Licensed"],
    experience: "8+ years",
    bio: "Delivers evidence-based speech and language therapy at Meditron Vijayawada for children with communication disorders across the full spectrum — from pre-verbal toddlers to school-aged children with social communication difficulties. Trained in AAC (Augmentative and Alternative Communication) and PECS.",
    specialities: ["Language Delays", "Articulation Disorders", "Autism Communication", "AAC Devices", "Feeding Therapy"],
    color: "bg-accent/10 border-accent/20",
    iconColor: "text-accent",
  },
  {
    name: "Occupational Therapist",
    role: "Paediatric Occupational Therapist",
    qualifications: ["B.Sc. (Occupational Therapy)", "M.Sc. (Paediatric OT)", "Sensory Integration Certified (CLASI)"],
    experience: "7+ years",
    bio: "Specialises in paediatric occupational therapy and Sensory Integration at Meditron Vijayawada. Works with children to build fine motor skills, sensory processing, self-care independence, and school readiness. Certified in Ayres Sensory Integration and experienced in assistive technology prescription.",
    specialities: ["Sensory Integration", "Fine Motor Skills", "School Readiness", "Self-Care", "Handwriting Intervention"],
    color: "bg-healing-green/15 border-healing-green/20",
    iconColor: "text-healing-green",
  },
  {
    name: "Physiotherapist",
    role: "Paediatric Physiotherapist",
    qualifications: ["B.Sc. (Physiotherapy)", "M.Sc. (Paediatric Physiotherapy)", "NDT/Bobath Certified"],
    experience: "9+ years",
    bio: "Leads the physiotherapy programme at Meditron Vijayawada, delivering intensive motor rehabilitation for children with Cerebral Palsy, Down syndrome, and developmental motor delays. Certified in Neurodevelopmental Treatment (NDT) and Bobath technique. Experienced in orthotic prescription and assistive equipment.",
    specialities: ["Cerebral Palsy Rehab", "Gross Motor Development", "NDT/Bobath", "Gait Training", "Hypotonia"],
    color: "bg-gold/15 border-gold/20",
    iconColor: "text-gold",
  },
  {
    name: "Child Psychologist",
    role: "Clinical Child Psychologist",
    qualifications: ["M.A. (Psychology)", "M.Phil. (Clinical Psychology)", "RCI Licensed Clinical Psychologist"],
    experience: "10+ years",
    bio: "Provides comprehensive psychological assessment, diagnosis, and evidence-based therapy at Meditron Vijayawada. Experienced in CBT, ACT, and child-adapted psychotherapy for anxiety, trauma, ADHD, and emotional difficulties. Conducts psycho-educational assessments for specific learning disabilities and provides parent training programmes.",
    specialities: ["Psychological Assessment", "CBT & ACT", "ADHD Diagnosis", "Anxiety & Trauma", "Specific Learning Disabilities"],
    color: "bg-dusty-blue/15 border-dusty-blue/20",
    iconColor: "text-dusty-blue",
  },
  {
    name: "Behaviour Therapist",
    role: "Positive Behaviour Support Specialist",
    qualifications: ["M.Sc. (Applied Behaviour Analysis)", "BCBA (Board Certified Behaviour Analyst)", "PBS Certified"],
    experience: "6+ years",
    bio: "Designs and delivers Positive Behaviour Support programmes and ABA therapy at Meditron Vijayawada. Specialises in Functional Behaviour Assessment (FBA), behaviour intervention planning, and parent training. Works with children with ASD, ADHD, and intellectual disabilities to reduce challenging behaviours and build adaptive skills.",
    specialities: ["ABA Therapy", "Functional Behaviour Assessment", "Positive Behaviour Support", "Parent Training", "Challenging Behaviour"],
    color: "bg-terracotta/10 border-terracotta/20",
    iconColor: "text-terracotta",
  },
  {
    name: "Special Educator",
    role: "Special Education & Learning Disabilities Specialist",
    qualifications: ["B.Ed. (Special Education)", "M.Ed. (Learning Disabilities)", "RCI Licensed Special Educator"],
    experience: "8+ years",
    bio: "Delivers specialised remedial education and IEP-based learning support at Meditron Vijayawada for children with dyslexia, dyscalculia, dysgraphia, and other specific learning disabilities. Uses multi-sensory teaching approaches including Orton-Gillingham for reading, Maths Recovery for numeracy, and structured handwriting intervention.",
    specialities: ["Dyslexia Remediation", "Dyscalculia", "IEP Development", "Orton-Gillingham", "School Liaison"],
    color: "bg-sage/20 border-sage/30",
    iconColor: "text-confident-navy",
  },
  {
    name: "Early Intervention Specialist",
    role: "Early Childhood Intervention Therapist",
    qualifications: ["B.Sc. (Child Development)", "M.Sc. (Early Intervention)", "ESDM Certified"],
    experience: "5+ years",
    bio: "Specialises in early intervention programmes at Meditron Vijayawada for children aged 0–6 years, with a focus on Down syndrome, ASD early signs, and global developmental delays. Certified in the Early Start Denver Model (ESDM) and delivers parent-mediated early intervention programmes.",
    specialities: ["0–6 Early Intervention", "ESDM", "Down Syndrome", "Parent-Mediated Therapy", "Developmental Delays"],
    color: "bg-primary-light/60 border-primary/20",
    iconColor: "text-primary-dark",
  },
];

// ── Credentials strip ─────────────────────────────────────────────────────────
const credentials = [
  { icon: GraduationCap, label: "RCI Licensed", sub: "All clinical staff registered with the Rehabilitation Council of India" },
  { icon: Award, label: "Certified Specialists", sub: "International certifications including BCBA, NDT, CLASI, and ESDM" },
  { icon: Users, label: "Multidisciplinary Team", sub: "8 specialist disciplines working from a single coordinated therapy plan" },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-healing-green py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Meditron Vijayawada
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Every child at Meditron Vijayawada is supported by a certified, experienced
            multidisciplinary team — working from a single coordinated plan built
            entirely around your child's individual needs.
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

      {/* ── Credentials strip ── */}
      <section className="bg-cream py-10 px-4 sm:px-6 lg:px-8 border-b border-primary-light/40">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-confident-navy text-sm">{c.label}</p>
                  <p className="text-muted-navy text-xs leading-relaxed mt-0.5">{c.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Team cards ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Our Specialists
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy">
              Qualified. Certified. Experienced.
            </h2>
            <p className="mt-4 text-muted-navy text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Every member of the Meditron Vijayawada team holds recognised qualifications,
              is registered with the relevant professional body, and brings years of
              hands-on clinical experience with children.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.role}
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${member.color}`}
              >
                {/* Header */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-navy mb-1">
                    {member.experience} experience
                  </p>
                  <h3 className="text-lg font-extrabold text-confident-navy leading-tight">
                    {member.role}
                  </h3>
                </div>

                {/* Qualifications */}
                <div>
                  <p className="text-xs font-bold text-muted-navy uppercase tracking-wide mb-2">
                    Qualifications
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {member.qualifications.map((q) => (
                      <li
                        key={q}
                        className="bg-white/80 text-confident-navy text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/60"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bio */}
                <p className="text-muted-navy text-sm leading-relaxed">{member.bio}</p>

                {/* Specialities */}
                <div>
                  <p className="text-xs font-bold text-muted-navy uppercase tracking-wide mb-2">
                    Specialist Areas
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {member.specialities.map((s) => (
                      <li
                        key={s}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/60 ${member.iconColor}`}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work together ── */}
      <section className="py-16 sm:py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy">
              One Team. One Plan. One Goal.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Coordinated Assessment",
                body: "Every new child at Meditron Vijayawada receives a multidisciplinary assessment — not a single-discipline opinion. Our paediatrician, psychologist, and relevant therapists assess together and share findings before any therapy plan is written.",
              },
              {
                num: "02",
                title: "Unified Therapy Plan",
                body: "Our team writes a single, coordinated Individual Therapy Plan — not separate plans from each discipline. Goals are aligned, sequenced, and owned by the whole team. This prevents duplication and ensures every session builds on the last.",
              },
              {
                num: "03",
                title: "Regular Case Reviews",
                body: "The Meditron Vijayawada team meets formally every 12 weeks to review every child's progress against their goals. Parents are invited to every review. Therapy plans are updated, goals are advanced, and families are kept fully informed.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-primary-light/40">
                <span
                  className="text-primary/10 font-black select-none leading-none block mb-3"
                  style={{ fontSize: "3.5rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3 className="font-extrabold text-confident-navy text-base mb-2">{step.title}</h3>
                <p className="text-muted-navy text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-white/60 font-semibold text-xs uppercase tracking-widest">
            Ready to Meet the Team?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Book a Free Assessment in Vijayawada
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            Your first appointment at Meditron Vijayawada gives you direct access to our
            specialist team — no gatekeepers, no waiting lists. We assess your child,
            answer every question, and give you a clear, honest plan.
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
