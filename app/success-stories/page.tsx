import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import { testimonials } from "@/lib/data";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from Meditron families in Vijayawada. Children with Autism, ADHD, Cerebral Palsy, and Down Syndrome — and the milestones that changed everything.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to share my child's success story."
)}`;

// Extended stories for the featured section
const stories = [
  {
    childName: "Arjun",
    age: 6,
    condition: "Autism Spectrum Disorder",
    headline: "\"He called me Amma for the first time at age 5. I cried for an hour.\"",
    body: "Arjun came to us at age 3 with no words and very limited eye contact. His mother, Priya, was told by well-meaning relatives to 'wait and see.' She trusted her instincts instead and brought him to Meditron. Over 18 months of intensive speech therapy and OT, Arjun went from no communication to full sentences. He now attends a mainstream school and is thriving. His mother says the first time he called her 'Amma,' she knew they had made the right decision.",
    parent: "Priya Sharma",
    parentRole: "Mother of Arjun, Age 6",
    therapies: ["Speech Therapy", "Occupational Therapy"],
    duration: "18 months",
  },
  {
    childName: "Ananya",
    age: 4,
    condition: "Developmental Delay",
    headline: "\"The team didn't just help Ananya — they helped our whole family breathe again.\"",
    body: "When Ananya was 2, her parents noticed she wasn't meeting milestones her peers were. Multiple hospital visits produced little clarity. At Meditron, within the first assessment, Ravi and his wife felt something different: they were listened to. A clear plan was laid out, milestones were set, and within 6 months, Ananya was walking independently and beginning to communicate. \"We had stopped believing it could get better,\" Ravi told us. \"Meditron gave us our belief back.\"",
    parent: "Ravi Kumar",
    parentRole: "Father of Ananya, Age 4",
    therapies: ["Physiotherapy", "Speech Therapy"],
    duration: "6 months",
  },
  {
    childName: "Vikram",
    age: 7,
    condition: "Cerebral Palsy (Spastic Diplegia)",
    headline: "\"His teacher called us last month to say he was the most determined child in the class.\"",
    body: "Vikram was born with spastic diplegia affecting both his legs. At age 4, he was told he might not walk without a walker. His mother Sunita refused to accept that as the final word. Three years of consistent physiotherapy at Meditron — twice weekly, every week — produced something remarkable: Vikram now walks independently across short distances, climbs stairs with support, and writes his name with a pencil. He started mainstream school this year. Sunita says she used to cry on the way home from sessions. Now she cries because of how proud she is.",
    parent: "Sunita Reddy",
    parentRole: "Mother of Vikram, Age 7",
    therapies: ["Physiotherapy", "Occupational Therapy"],
    duration: "3 years (ongoing)",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        label="Real Families. Real Progress."
        title="Stories that remind us"
        accent="why we do this."
        subtitle="Every child at Meditron has a story. These are a few we're honoured to share — with the full permission of the families involved."
        breadcrumbs={[{ label: "Success Stories", href: "#" }]}
      />

      {/* ── Featured stories ─────────────────────────────────────────────── */}
      <section className="py-20 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {stories.map((story, i) => (
            <article key={story.childName} className="relative">
              {/* Number */}
              <span className="absolute -left-4 sm:-left-10 top-0 text-primary/10 font-black select-none" style={{ fontSize: "8rem", lineHeight: 1 }} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Condition chip */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{story.condition}</span>
                  <span className="text-sage text-xs">{story.duration} · {story.therapies.join(", ")}</span>
                </div>

                {/* Pull quote */}
                <blockquote className="text-confident-navy font-extrabold text-xl sm:text-2xl leading-snug mb-6 border-l-4 border-accent pl-5">
                  {story.headline}
                </blockquote>

                {/* Body */}
                <p className="text-dusty-blue text-sm sm:text-base leading-[1.9] mb-6 max-w-[65ch]">{story.body}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <span className="text-primary font-black text-sm">{story.parent.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-confident-navy text-sm">{story.parent}</p>
                    <p className="text-sage text-xs mt-0.5">{story.parentRole}</p>
                  </div>
                  <div className="ml-auto">
                    <Stars />
                  </div>
                </div>

                {i < stories.length - 1 && (
                  <div className="mt-16 h-px bg-primary-light" />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Short testimonials ───────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">More Voices</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy">
              In their own words
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-clean-neutral rounded-2xl p-7 flex flex-col gap-4 shadow-sm">
                <Quote className="w-7 h-7 text-primary/20" aria-hidden="true" />
                <p className="text-muted-navy text-sm leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <span className="text-primary font-black text-xs">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-confident-navy text-xs">{t.name}</p>
                    <p className="text-sage text-[0.65rem] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Share your story + CTA ───────────────────────────────────────── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Your Story Matters</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Has Meditron made a difference for your family?
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your story might be the thing that gives another family the courage to take the first step. Share it with us — we&apos;ll handle it with the care it deserves.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              Share Your Story
            </a>
          </div>
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Ready to Start?</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Your child&apos;s story starts with one appointment.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Every story on this page started with a family walking through our doors. Free. No obligation. Just a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-clean-neutral text-primary hover:bg-cream font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              <CalendarCheck className="w-4 h-4 shrink-0" />
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
