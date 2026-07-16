import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarCheck } from "lucide-react";
import { blogPosts } from "@/lib/data";

// ── Static params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// ── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// ── Dummy content per post (replaced by Sanity later) ─────────────────────
const CONTENT: Record<string, { intro: string; sections: { heading: string; body: string }[]; closing: string }> = {
  "early-signs-of-autism": {
    intro:
      "As a parent, you are your child's first observer. You notice the small things long before any professional does — the way your 18-month-old doesn't point at objects, the way they don't wave goodbye, the way they line up toys rather than playing with them. These observations matter. This article explains what to look for, when to be concerned, and what to do next.",
    sections: [
      {
        heading: "Understanding the Developmental Timeline",
        body: "Every child develops at their own pace — but developmental science gives us reliable windows. By 12 months, most children point, wave, and respond to their names. By 18 months, they use single words. By 24 months, they use two-word combinations. When these milestones are significantly delayed or absent, it is worth paying attention — not panicking, but acting.",
      },
      {
        heading: "The Red Flags at Different Ages",
        body: "At 6-12 months: limited smiling or social engagement, not babbling, not making eye contact with familiar people. At 12-18 months: no pointing, no waving, no response to name, loss of any skill previously acquired. At 18-24 months: no words, no two-word phrases, appearing to 'zone out', strong insistence on specific routines, unusual play patterns like lining objects up repeatedly.",
      },
      {
        heading: "What These Signs Mean — and What They Don't",
        body: "Seeing one or two of these signs does not mean your child has autism. Seeing several consistently, across multiple settings, and over time is when a proper evaluation becomes important. Remember: autism is a spectrum. Some children with autism speak early and fluently; others don't. The spectrum is wide, and every child on it is unique.",
      },
      {
        heading: "What to Do If You're Concerned",
        body: "Trust your instinct. You know your child better than anyone. If something doesn't feel right, seek an evaluation. Do not wait for a school teacher, a relative, or a paediatrician to confirm what you already sense. Early evaluation leads to early therapy, and early therapy makes the single biggest difference in outcomes for children with autism.",
      },
    ],
    closing:
      "The most important thing any parent can do is act early. A concern that turns out to be nothing costs you a conversation. A concern that turns out to be real — and is caught early — can change the entire trajectory of your child's life.",
  },

  "adhd-vs-normal-behaviour": {
    intro:
      "Every child is sometimes inattentive, sometimes impulsive, sometimes impossible to keep seated. So how do parents know when this is just childhood — and when it might be ADHD? The answer lies not in any single behaviour, but in the pattern, the frequency, the severity, and the impact across multiple areas of a child's life.",
    sections: [
      {
        heading: "What ADHD Actually Is",
        body: "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental condition — meaning it reflects a difference in how the brain is structured and functions, not a phase, not poor discipline, and not a reflection of parenting. The ADHD brain has difficulty regulating attention, impulse control, and in many children, activity level. It is present from early childhood and tends to persist into adulthood.",
      },
      {
        heading: "The Three Types — and Why They Look Different",
        body: "ADHD presents in three ways. Predominantly inattentive: difficulty focusing, easily distracted, forgetful — often called 'daydreamy.' Predominantly hyperactive-impulsive: can't sit still, acts before thinking, interrupts constantly. Combined: features of both. The inattentive type is most commonly missed in children — especially girls — because it looks like shyness or laziness rather than 'hyperactivity.'",
      },
      {
        heading: "When Is It a Problem?",
        body: "A key criterion for ADHD is impairment — the behaviours must be causing real difficulties in the child's functioning at school, at home, or in friendships. A child who fidgets but performs well, maintains friendships, and doesn't cause concern at school is probably not meeting the threshold for an ADHD diagnosis. A child whose impulsivity leads to social exclusion, whose inattention causes consistent academic underperformance, or whose hyperactivity makes family life very difficult — that child deserves an evaluation.",
      },
      {
        heading: "What a Proper Evaluation Looks Like",
        body: "A proper ADHD evaluation includes detailed developmental history, parent and teacher behavioural questionnaires, direct observation, and standardised assessment tools. It rules out other causes — hearing difficulties, anxiety, learning disabilities, sleep disorders — before reaching any conclusion. No single test 'diagnoses' ADHD. It is a clinical decision made by an experienced specialist who knows the child.",
      },
    ],
    closing:
      "ADHD is not an excuse. It is an explanation — and an explanation opens the door to the right support. If you've been wondering, stop wondering. Get an evaluation and get clarity.",
  },

  "speech-therapy-activities-at-home": {
    intro:
      "Speech therapy in a clinical setting is powerful — but children spend perhaps 2-3 hours a week in therapy and 100+ hours in their regular world. What happens in those 100 hours matters enormously. This article shares five simple, play-based activities that any parent can do at home to support their child's language development — no training required, just time and presence.",
    sections: [
      {
        heading: "1. Narrate Everything (Running Commentary)",
        body: "Describe what you are doing as you do it. 'I'm cutting the carrots. Chop chop chop. Now I'm putting them in the pot.' This exposes your child to vocabulary, sentence structure, and language in context — without requiring them to say anything. It feels odd at first, but the research is clear: parental narration in the early years is one of the strongest predictors of language development.",
      },
      {
        heading: "2. Parallel Talk — Follow Their Lead",
        body: "Watch what your child is doing and describe it. 'You're rolling the ball. It's going fast. You caught it!' This is different from narrating your own actions — you're narrating theirs. It validates what they're doing and connects language to their own experience. It's especially powerful for children who are still pre-verbal or minimally verbal.",
      },
      {
        heading: "3. Expand Their Utterances",
        body: "When your child says 'ball,' you say 'Yes, red ball' or 'You want the ball.' When they say 'doggy go,' you say 'Yes, the doggy is going away.' You're not correcting — you're modelling a slightly more complex version of what they just communicated. This technique, called expansion, gently pushes language development without any pressure.",
      },
      {
        heading: "4. Pause and Wait (The Power of Silence)",
        body: "Many parents fill every silence. Stop. After asking a question or making an offer, wait 10 full seconds before jumping in. This gives a child's brain time to process and respond. It is uncomfortable at first — resist the urge to prompt immediately. Children who learn that there is space for them to respond become more communicative over time.",
      },
      {
        heading: "5. Read Together — Interactively, Not Passively",
        body: "Don't just read the words on the page. Point to pictures: 'What's this? A dog! What sound does a dog make?' Ask questions. Relate the story to their life: 'The boy is eating soup. You eat soup too, remember?' Let them turn pages, point, hold the book. Make it a conversation, not a performance. Children who are read to interactively develop significantly richer vocabularies than those who are read to passively.",
      },
    ],
    closing:
      "You don't need to be a speech therapist to support your child's language. You need to be present, engaged, and willing to follow their lead. The five activities above can be woven into daily life with almost no extra effort — and over time, they make an extraordinary difference.",
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = CONTENT[slug];
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white">
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
          <div className="flex items-center gap-3 text-white/50 text-xs mb-5">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {post.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span>Dr. Sunitha Reddy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            {post.title}
          </h1>
          <p className="mt-4 text-white/65 text-base leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      {/* ── Featured image placeholder ───────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-primary-light/40 rounded-2xl h-64 flex items-center justify-center">
          <span className="text-primary/30 text-xs tracking-widest uppercase">Article cover image</span>
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────────────────── */}
      {content && (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Intro */}
          <p className="text-slate-600 text-base sm:text-lg leading-[1.9] mb-10 font-medium">
            {content.intro}
          </p>

          {/* Sections */}
          {content.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="text-slate-800 font-extrabold text-xl mb-4">{section.heading}</h2>
              <p className="text-slate-500 text-sm sm:text-base leading-[1.9]">{section.body}</p>
            </div>
          ))}

          {/* Closing */}
          <div className="border-l-4 border-accent pl-6 py-1 my-10">
            <p className="text-slate-700 font-medium text-base leading-relaxed italic">{content.closing}</p>
          </div>

          {/* Author bio */}
          <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
              <span className="text-primary font-black">S</span>
            </div>
            <div>
              <p className="font-extrabold text-slate-800 text-sm">Dr. Sunitha Reddy</p>
              <p className="text-slate-500 text-xs mt-0.5">M.D. · Paediatric Rehabilitation · Founder, Meditron CDC</p>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Dr. Sunitha has 8+ years of clinical experience working with children with Autism, ADHD, Cerebral Palsy, and Down Syndrome in Vijayawada, Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Sanity note */}
          <div className="mt-8 bg-primary-light/30 rounded-xl px-5 py-4 border border-primary/10 text-center">
            <p className="text-primary text-xs font-semibold">
              📌 This content is a placeholder. Once Sanity CMS is connected, this page will render live blog content.
            </p>
          </div>
        </article>
      )}

      {/* ── Related posts ────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-slate-800 font-extrabold text-xl mb-8">More from our blog</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {p.readTime}
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-primary transition-colors mb-3">
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                  <ArrowLeft className="w-3 h-3 rotate-180" aria-hidden="true" />
                  Read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl mb-3">
            Have questions about your child?
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-7">
            Our specialists are here to help — in person, online, or on WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-sm"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
