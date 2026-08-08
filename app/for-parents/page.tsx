import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Parents | Care Guide & Tips | Meditron Vijayawada",
  description:
    "Practical care instructions and guidance for parents of children with Autism, ADHD, Cerebral Palsy, and Down Syndrome — curated by the specialists at Meditron Child Development Centre, Vijayawada.",
  openGraph: {
    title: "For Parents | Care Guide & Tips | Meditron Vijayawada",
    description:
      "Practical care instructions for parents of children with developmental conditions — from the specialists at Meditron, Vijayawada.",
  },
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I have a question about caring for my child at home."
)}`;

// ─── Content ──────────────────────────────────────────────────────────────────

const generalTips = [
  {
    title: "Study your child — not just their condition.",
    body: "Every child with Autism, ADHD, Cerebral Palsy, or Down Syndrome is different. Before you read another article about the diagnosis, spend time watching your child. What calms them down? What triggers a meltdown? What time of day are they most focused? The answers are in your child, not in a textbook. Your observations are the most valuable data your therapist will ever receive.",
  },
  {
    title: "Do not be too hard on them — or on yourself.",
    body: "These children are not being difficult on purpose. A child with ADHD who cannot sit still is not choosing to disobey — their brain is wired differently. A child with Autism who avoids eye contact is not being rude. When you stop seeing behaviour as defiance and start seeing it as communication, everything changes. And when you have a bad day as a parent — that is allowed too. You are human.",
  },
  {
    title: "Routine is the greatest gift you can give.",
    body: "Children with developmental conditions thrive on predictability. A consistent daily schedule — same wake time, same meal times, same wind-down routine at night — reduces anxiety, improves behaviour, and makes therapy far more effective. You do not need a perfect schedule. You need a consistent one.",
  },
  {
    title: "Celebrate every small win, loudly.",
    body: "A new word. A moment of eye contact. Finishing a meal independently. Sitting through a story for the first time. These are not small things — they are enormous. Celebrate them with the same energy you would give a school prize. Your child feels your joy, and that joy becomes motivation.",
  },
  {
    title: "Carry the therapy home.",
    body: "One or two sessions a week at the clinic is not enough on its own. The real progress happens in the hours between sessions — at home, during meals, during play, during bath time. Your therapist will give you specific activities to repeat at home. Do them consistently. Ten minutes a day, every day, is worth more than an extra clinic session once a week.",
  },
  {
    title: "Speak to your child — not about them.",
    body: "It is easy to fall into the habit of discussing your child's limitations in front of them, or speaking over them as if they cannot hear. Children understand far more than we give them credit for — including tone, expression, and the feeling that they are a problem to be solved. Always speak to your child with dignity. Include them in conversations about their progress. Let them feel like a person, not a patient.",
  },
  {
    title: "Your mental health matters too.",
    body: "Raising a child with a developmental condition is one of the most demanding things a parent can do. It is normal to feel exhausted, scared, guilty, and alone — sometimes all in the same afternoon. Find someone to talk to. Connect with other parents in similar situations. A parent who is supported gives a child who is supported.",
  },
  {
    title: "Ask questions at every appointment.",
    body: "You are not expected to understand everything the therapist or doctor explains on the first hearing. Write your questions down before each visit. Ask what the goal of the current therapy phase is. Ask what you should be watching for at home. Ask when you should expect to see a change. A good therapist will never make you feel like your questions are too many.",
  },
];

const conditionTips: {
  condition: string;
  href: string;
  tips: string[];
}[] = [
  {
    condition: "Autism Spectrum Disorder",
    href: "/conditions/autism-vijayawada",
    tips: [
      "Use simple, clear language. Short sentences work better than long explanations.",
      "Prepare your child before transitions — moving from one activity to another is harder for them than it looks.",
      "Sensory sensitivities are real. If certain sounds, textures, or lights cause distress, take them seriously and work with your therapist to manage them.",
      "Visual schedules — pictures or icons showing the day's routine — can reduce anxiety significantly.",
      "Do not force eye contact. Connection will come on the child's own terms.",
    ],
  },
  {
    condition: "ADHD",
    href: "/conditions/adhd-vijayawada",
    tips: [
      "Break tasks into very small steps and give one instruction at a time.",
      "Use a timer to make tasks feel finite — 'just five more minutes' is more manageable than an open-ended request.",
      "Physical activity before homework or focused tasks can help the brain settle.",
      "Reward effort and completion, not just results.",
      "Remove distractions from the study environment — this is not optional for a child with ADHD.",
    ],
  },
  {
    condition: "Cerebral Palsy",
    href: "/conditions/cerebral-palsy-vijayawada",
    tips: [
      "Maintain all prescribed physiotherapy exercises at home, even on days when it feels unnecessary.",
      "Encourage independence in daily tasks — dressing, eating, moving — even when it takes longer. Dependence grows faster than it shrinks.",
      "Positioning matters throughout the day. Your physiotherapist will advise on correct seating, sleeping, and standing positions.",
      "Watch for signs of pain or discomfort that the child cannot always communicate verbally.",
      "Communicate regularly with the school to ensure assistive accommodations are in place.",
    ],
  },
  {
    condition: "Down Syndrome",
    href: "/conditions/down-syndrome-vijayawada",
    tips: [
      "Expect development on a different timeline — not a lesser one. Every milestone will come.",
      "Read aloud every day. Language exposure is one of the most powerful tools for speech development.",
      "Include your child in family routines and social situations. Participation builds confidence and ability.",
      "Work on self-care skills patiently — dressing, eating, and hygiene independently are achievable goals.",
      "Regular health check-ups are important alongside developmental therapy, as some associated conditions need monitoring.",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForParentsPage() {
  return (
    <>
      <PageHero
        label="For Parents"
        title="A guide to caring for your child"
        accent="at home and beyond."
        subtitle="Practical, honest guidance from our specialists — for the hours between sessions when you are on your own."
        breadcrumbs={[{ label: "For Parents", href: "#" }]}
      />

      {/* ── General care tips ─────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8" aria-labelledby="general-tips-heading">
        <div className="max-w-3xl mx-auto">
          <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">Common Instructions</span>
          <h2
            id="general-tips-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-4 leading-tight"
          >
            What every parent should know
          </h2>
          <p className="text-muted-navy text-base leading-relaxed mb-12">
            These principles apply regardless of your child&apos;s specific condition. They are not medical advice — they are the things our specialists wish every parent already knew before walking through our doors.
          </p>

          <div className="space-y-8">
            {generalTips.map((tip, i) => (
              <div key={i} className="border-l-4 border-primary/30 pl-6">
                <h3 className="font-extrabold text-confident-navy text-base sm:text-lg mb-2 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-muted-navy text-sm sm:text-base leading-[1.85]">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Condition-specific tips ───────────────────────────────────────── */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="condition-tips-heading">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">By Condition</span>
          <h2
            id="condition-tips-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy mb-4 leading-tight"
          >
            Tips specific to your child&apos;s condition
          </h2>
          <p className="text-muted-navy text-base leading-relaxed mb-12">
            Below are focused home-care tips for each condition we treat at Meditron. Click any condition name to read more about how we approach it clinically.
          </p>

          <div className="space-y-10">
            {conditionTips.map((block) => (
              <div key={block.condition} className="bg-cream rounded-2xl p-7 sm:p-9">
                <Link
                  href={block.href}
                  className="inline-flex items-center gap-2 text-primary font-extrabold text-lg sm:text-xl mb-5 hover:underline underline-offset-4 group"
                >
                  {block.condition}
                  <span className="text-accent text-sm font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <ul className="space-y-3">
                  {block.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-navy leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" aria-hidden="true" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Therapies quick links ─────────────────────────────────────────── */}
      <section className="py-14 bg-primary-light/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-6 text-center">
            Therapies available at Meditron, Vijayawada
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Speech Therapy", href: "/therapies/speech-therapy-vijayawada" },
              { label: "Occupational Therapy", href: "/therapies/occupational-therapy-vijayawada" },
              { label: "Physiotherapy", href: "/therapies/physiotherapy-vijayawada" },
              { label: "ABA Therapy", href: "/therapies/aba-therapy-vijayawada" },
              { label: "Behaviour Therapy", href: "/therapies/behaviour-therapy-vijayawada" },
              { label: "Sensory Integration", href: "/therapies/sensory-integration-vijayawada" },
              { label: "Play Therapy", href: "/therapies/play-therapy-vijayawada" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-xl border border-primary/15 hover:bg-primary hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical Disclaimer ────────────────────────────────────────────── */}
      <section className="py-14 bg-cream px-4 sm:px-6 lg:px-8" aria-labelledby="disclaimer-heading">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-primary/15 rounded-2xl p-7 sm:p-9">
            <h2
              id="disclaimer-heading"
              className="text-base font-extrabold text-confident-navy uppercase tracking-wide mb-4"
            >
              Medical Disclaimer
            </h2>
            <p className="text-muted-navy text-sm leading-relaxed mb-4">
              The information on this page is provided for general educational purposes only. It has been prepared under the clinical guidance of the specialist doctors and therapists at Meditron Child Development Centre, Vijayawada, and reflects evidence-based practices in paediatric developmental therapy.
            </p>
            <p className="text-muted-navy text-sm leading-relaxed mb-4">
              This content does not constitute medical advice, diagnosis, or a treatment plan for any individual child. Every child&apos;s condition and needs are unique. The tips and guidance shared here are intended to support — not replace — the personalised advice given to you by your treating specialist.
            </p>
            <p className="text-muted-navy text-sm leading-relaxed">
              If you have concerns about your child&apos;s development, behaviour, or health, please consult a qualified medical professional. You are always welcome to{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline underline-offset-2">
                book a consultation at Meditron
              </Link>{" "}
              or{" "}
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-2">
                speak to us directly on WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            Our team is available on WhatsApp and responds within a few hours. Or book a free assessment and ask everything in person.
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
