import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarCheck, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Early Signs of Autism: What Indian Parents Should Know",
  description:
    "Learn the key developmental milestones and early warning signs that may indicate autism spectrum disorder in children under 3 — and the right steps to take next.",
  openGraph: {
    title: "Early Signs of Autism: What Indian Parents Should Know",
    description:
      "Learn the key developmental milestones and early warning signs that may indicate autism spectrum disorder in children under 3 — and the right steps to take next.",
    type: "article",
    publishedTime: "2026-07-01T00:00:00.000Z",
  },
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I read your article on autism signs and I have a question about my child."
)}`;

const sections = [
  {
    heading: "What is Autism Spectrum Disorder?",
    body: `Autism Spectrum Disorder (ASD) is a developmental condition that affects how a person communicates, interacts socially, and processes sensory information. The word "spectrum" means that autism looks different in every child — some children are highly verbal but struggle socially; others are non-verbal but show advanced abilities in certain areas.

In India, autism is still widely misunderstood. Many families are told their child is "just naughty," "late to speak," or "shy." These dismissals delay identification and — critically — delay access to the early intervention that makes the most difference.`,
  },
  {
    heading: "Why early identification matters",
    body: `The brain is most adaptable — or "plastic" — in the first three years of life. Research consistently shows that children who begin therapy before the age of 3 make significantly greater progress than those who start later. This does not mean a child who is diagnosed at 5 or 7 cannot make progress; it means that every month gained in the early years is valuable.

If you have noticed something that concerns you, trust that instinct. Early identification does not label a child — it opens doors.`,
  },
  {
    heading: "Developmental milestones to watch",
    body: `Paediatricians use developmental milestones as reference points. The following signs — especially if multiple are present — are worth discussing with a specialist:

**By 6 months:** No warm, joyful smiles or expressions directed at people; limited or no eye contact during feeding or play.

**By 9 months:** No back-and-forth sharing of sounds, smiles, or facial expressions.

**By 12 months:** No babbling; not responding to their name when called; no gestures such as pointing or waving.

**By 16 months:** No single words. Many children with autism begin speaking, then stop — any regression in language or social skills at any age should be taken seriously.

**By 24 months:** No meaningful two-word phrases (not including "Amma, no" or repeating the same phrase). Very limited pretend play or imitation.`,
  },
  {
    heading: "Signs that are commonly missed in Indian families",
    body: `Some early signs of autism are dismissed for cultural reasons in India. Here are the most frequently overlooked:

- **"He's just quiet" / "She's a serious child."** A child who rarely makes eye contact, rarely smiles responsively, and does not seek connection with family members is showing a social communication difference — not a personality type.

- **Repeating lines from TV or YouTube.** Called echolalia, this is where a child repeats phrases from media instead of using language functionally. It is very common in autism and is often mistaken for advanced vocabulary.

- **Intense interest in spinning objects, arranging things in lines, or fixating on specific parts of toys** (like wheels rather than the whole car). These patterns of play are different from typical exploratory play.

- **Seeming to hear perfectly in some situations but not responding to their name.** A child with autism may react to a favourite sound from another room but show no response when called directly. This is not hearing loss — it is selective attention to sound.

- **"He was fine and then stopped talking."** Regression — losing words or skills that were previously present — is a significant red flag and always warrants assessment.`,
  },
  {
    heading: "What to do if you are concerned",
    body: `The most important thing is: act quickly and do not wait for certainty. You do not need a confirmed diagnosis before seeking assessment. A developmental paediatrician or a child development centre like Meditron can assess your child's communication, social, and motor skills and give you a clear picture of where they are.

Here is a practical first step: bring a short video of your child playing at home to your first appointment. Clinicians often see behaviours in home videos that children don't show in unfamiliar clinical settings.

Do not be afraid that assessment will result in a label that follows your child forever. A professional assessment gives you information — and information gives you the ability to act.`,
  },
  {
    heading: "What happens after identification at Meditron?",
    body: `At Meditron, every family goes through a comprehensive assessment session before any therapy begins. We look at your child's communication, social interaction, sensory responses, and motor skills. We also speak with you in depth — in Telugu, Hindi, or English — to understand your family's concerns, your child's daily routines, and what matters most to you.

From there, we develop a personalised therapy plan. For most children with autism, this includes a combination of speech therapy and occupational therapy. We set measurable goals, review progress regularly, and train parents in the strategies that can be used between sessions — because change happens at home, not just in the clinic.`,
  },
];

export default function EarlySignsOfAutismPage() {
  return (
    <div className="bg-clean-neutral">
      {/* ── Article header ──────────────────────────────────────────────── */}
      <header className="bg-primary-dark px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-white/50 text-xs mb-5">
            <time dateTime="2026-07-01">1 July 2026</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              5 min read
            </span>
            <span aria-hidden="true">·</span>
            <span className="bg-white/10 px-2 py-0.5 rounded-full">Autism</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            Early Signs of Autism: What Indian Parents Should Know
          </h1>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            Learn the key developmental milestones and early warning signs that may indicate autism spectrum disorder in children under 3 — and the right steps to take next.
          </p>
        </div>
      </header>

      {/* ── Cover panel ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-gradient-to-br from-primary-light to-cream rounded-2xl h-56 sm:h-72 flex items-center justify-center">
          <div className="text-center">
            <p className="text-primary/40 font-black text-xs uppercase tracking-widest mb-2">Meditron CDC</p>
            <p
              className="text-primary/15 font-black select-none leading-none"
              style={{ fontSize: "4rem" }}
              aria-hidden="true"
            >
              Autism
            </p>
            <p className="text-primary font-semibold text-sm mt-2">Early Signs Guide</p>
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro callout */}
        <div className="bg-primary-light/40 border-l-4 border-primary rounded-r-2xl px-6 py-5 mb-10">
          <p className="text-muted-navy text-sm sm:text-base leading-relaxed">
            <strong className="text-confident-navy">A note before you read:</strong> If something about your child&apos;s development has made you pause — trust that feeling. Parents often notice the earliest signs before any professional does. This article will help you understand what you might be seeing and what to do next.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-confident-navy font-extrabold text-xl sm:text-2xl mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.split(/\n{2,}/).map((para, i) => {
                  const trimmed = para.trim();
                  if (!trimmed) return null;

                  // Render bullet-like lines
                  if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
                    const lines = trimmed.split("\n");
                    return (
                      <ul key={i} className="space-y-3 ml-2">
                        {lines.map((line, j) => {
                          const clean = line.replace(/^-\s+/, "");
                          return (
                            <li key={j} className="flex items-start gap-2.5 text-muted-navy text-sm sm:text-base leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span dangerouslySetInnerHTML={{
                                __html: clean.replace(/\*\*(.+?)\*\*/g, '<strong class="text-confident-navy">$1</strong>')
                              }} />
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }

                  return (
                    <p key={i} className="text-muted-navy text-sm sm:text-base leading-[1.9]"
                      dangerouslySetInnerHTML={{
                        __html: trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="text-confident-navy">$1</strong>')
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Key takeaways */}
        <div className="mt-12 bg-cream rounded-2xl p-7 border border-primary-light">
          <h3 className="text-confident-navy font-extrabold text-lg mb-5">Key takeaways</h3>
          <ul className="space-y-3">
            {[
              "Early intervention — ideally before age 3 — makes the greatest difference in outcomes.",
              "Trust your instinct if something concerns you. You know your child best.",
              "Language regression at any age (losing words previously spoken) always warrants assessment.",
              "Repeating TV or YouTube phrases, not responding to your name, and limited eye contact are commonly missed signs.",
              "Autism assessment does not label your child — it gives you the information to help them.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-navy text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl mb-3">
            Have questions about your child?
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-7">
            Our specialists are here to help — in person, online, or on WhatsApp. The first step is always a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
