import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Healing Stories | Real Families, Real Progress | Meditron Vijayawada",
  description:
    "Read the real healing journeys of families at Meditron Child Development Centre, Vijayawada. Stories of children with Autism, ADHD, and Cerebral Palsy — and the parents who never gave up.",
  openGraph: {
    title: "Healing Stories | Real Families, Real Progress | Meditron Vijayawada",
    description:
      "Emotional stories of children and families who found hope, guidance, and progress at Meditron Child Development Centre, Vijayawada.",
  },
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I read the healing stories and would like to speak to someone about my child."
)}`;

// ─── Stories ──────────────────────────────────────────────────────────────────

const stories = [
  {
    id: "arjun",
    condition: "Autism Spectrum Disorder",
    conditionHref: "/conditions/autism-vijayawada",
    child: "Arjun",
    age: "3 years",
    parents: "Priya & Ramesh",
    location: "Vijayawada",
    quote: "The day he said 'Amma' for the first time, I sat down on the floor and just cried. I had waited two years for that word.",
    accent: "bg-primary-light/60 border-primary/20",
    labelColor: "text-primary",
    chapters: [
      {
        label: "What we were living with",
        body: `Arjun was our first child. We had waited for him for so long, and when he arrived, we were the happiest people in the world. But by the time he turned two, something felt different — quietly, stubbornly different.

He never pointed at things. When we called his name, he would not turn. He would spend an hour spinning a bottle cap on the floor, watching it with complete focus, as if the world around him did not exist. He did not speak — not a single word — while the children in our building were already stringing sentences together.

My mother-in-law said boys are always slow. Our neighbour said we were being anxious first-time parents. Ramesh told me I was overthinking it. I wanted to believe all of them. But I would lie awake at night, and the worry would not leave.`,
      },
      {
        label: "When we did not know where to turn",
        body: `We took him to our family doctor, who told us to wait until he was three. We waited. We took him to a paediatrician in Hyderabad who gave us a list of names and said "he might need therapy" — and then our appointment was over. We sat in the parking lot for twenty minutes, holding that list, not knowing what any of it meant.

Nobody sat with us. Nobody said: this is what is happening in your child's mind, and this is what you do next. We felt completely alone.

A mother in Arjun's playgroup — whose son had been going to Meditron — told us to just come in and talk to the doctor before deciding anything.`,
      },
      {
        label: "The first visit",
        body: `We came in not knowing what to expect. Dr. Sirisha did not put Arjun on a table or hand him tests. She sat on the floor with him and watched him play. She asked us questions — not to judge us, but because she genuinely wanted to understand our child.

At the end of the session, she explained that Arjun was on the autism spectrum. She did not say it like a verdict. She said it like a starting point. "Now we know what we are working with. Now we can build the right plan."

We started speech therapy and occupational therapy that same week.`,
      },
      {
        label: "The journey — month by month",
        body: `The first month was hard. Arjun would cry through some sessions. We were given home activities and we did them, even on the days we felt defeated.

By the second month, he started making eye contact with his therapist — just for a second at a time, but it was real. By month three, he was pointing at things he wanted. By month five, he said "Amma" while reaching for me.

That was the moment the two years of waiting collapsed into something that felt, for the first time, like hope. He is four and a half now. He has fifteen words. He sits with us at the dinner table. Last week, he laughed at something on television and looked over at us to share it.

That look — that shared moment — is everything.`,
      },
    ],
  },
  {
    id: "kavya",
    condition: "ADHD",
    conditionHref: "/conditions/adhd-vijayawada",
    child: "Kavya",
    age: "7 years",
    parents: "Sushma & Venkat",
    location: "Vijayawada",
    quote: "Her teacher once wrote 'disruptive and unmanageable' in her diary. Six months later, the same teacher told us Kavya was one of the most creative students in the class.",
    accent: "bg-[#fef6f0] border-accent/20",
    labelColor: "text-accent-dark",
    chapters: [
      {
        label: "What we were living with",
        body: `Kavya was seven years old and already exhausted by school — and school was already exhausted by her.

Not a week passed without a note in her diary. "Kavya cannot sit still." "Kavya was talking during class again." "Kavya did not finish her work." We would come home, and I would ask her to open her books, and she would sit down and be somewhere else entirely within two minutes. She was not lazy — she would try so hard, you could see it on her face. But something kept pulling her away.

At birthday parties, other parents would give us polite smiles. We started making excuses not to go. Venkat and I would argue at night — about whether we were being too strict, or not strict enough, about whether it was the school or us or Kavya herself. The truth is, we had no idea what was happening.`,
      },
      {
        label: "When we did not know where to turn",
        body: `We tried everything. A strict routine. No screen time. Rewards for sitting still. Extra tuitions. Nothing worked in any lasting way.

The school suggested she might need "extra support" but could not tell us what kind. A relative said she just needed more discipline. Another said she was gifted and simply bored. We took her to a general physician who said she would "grow out of it."

By the time Kavya was seven and a half, she had started telling us she was stupid. She would say it matter-of-factly, the way a child says something they have heard repeated too many times. That was the moment Venkat said: we are going to find someone who actually knows what to do.`,
      },
      {
        label: "The first visit",
        body: `At Meditron, we finally heard the word ADHD explained properly — not as bad behaviour, not as bad parenting, but as a brain that is wired to seek stimulation differently, that struggles to filter and sequence and sit with discomfort.

The relief in that room was physical. Venkat gripped my hand. We were not failing her. We had just been trying to solve the wrong problem.

Kavya was assessed carefully over two sessions. A behaviour therapy and parent coaching plan was built around her specific patterns — not a generic ADHD plan, but one designed for how Kavya's particular mind worked.`,
      },
      {
        label: "The journey — month by month",
        body: `In the first weeks, we changed how we spoke to Kavya at home — shorter instructions, one at a time, with breaks built in. It felt strange at first. But her frustration levels at homework time dropped noticeably within three weeks.

By month two at Meditron, Kavya's therapist was using structured games to build her ability to pause and redirect. She started having one or two good days at school per week. We wrote those down. We celebrated them loudly.

By month four, she was having more good days than bad. She started a drawing class — something she had always wanted but we had held back on, thinking she couldn't manage the structure. She flourished.

Her teacher's note this term read: "Kavya shows real leadership in group activities." We framed it. It is on our wall.`,
      },
    ],
  },
  {
    id: "rishi",
    condition: "Cerebral Palsy",
    conditionHref: "/conditions/cerebral-palsy-vijayawada",
    child: "Rishi",
    age: "2 years",
    parents: "Lakshmi & Suresh",
    location: "Vijayawada",
    quote: "They told us to wait and see. We waited for eighteen months. When Rishi finally took his first supported steps, I understood what it means to fight for a child.",
    accent: "bg-primary-light/40 border-primary/15",
    labelColor: "text-primary",
    chapters: [
      {
        label: "What we were living with",
        body: `Rishi was born after a difficult delivery, and from the first weeks, something was not right — though nobody said so clearly.

He was floppy in our arms in a way that felt wrong. By six months, he was not lifting his head the way babies do. By ten months, he could not sit unsupported. His arms would go stiff when he reached for something, and his legs had a tightness to them that made my stomach turn every time I noticed it.

I would search online at two in the morning, reading words I could not yet bring myself to say out loud. I would close the browser and go sit next to Rishi while he slept, and I would just hold his hand.`,
      },
      {
        label: "When we did not know where to turn",
        body: `Three different doctors told us to wait and see. "Some children are just slow." "Boys develop later." "Give it a few more months."

We gave it eighteen months. Rishi was a year and a half and still could not sit, could not stand, could not bear weight on his legs. A paediatric neurologist in Hyderabad finally told us what we had been circling around for a year and a half: cerebral palsy, spastic type, likely from oxygen loss at birth.

We drove home in silence. I could not eat. Suresh sat at the kitchen table for two hours without speaking. We did not know a single person who had been through this. We did not know where to begin.`,
      },
      {
        label: "The first visit",
        body: `A physiotherapist we met through a parent group online mentioned Meditron. We came in with Rishi and the full weight of eighteen months of not knowing.

The team at Meditron assessed Rishi's muscle tone, his reflexes, his range of movement — thoroughly, carefully, and without rushing us. They explained exactly what was happening in his body and, crucially, what was possible. Not in vague reassurances, but in specific, realistic goals.

"He can build strength. Movement can improve. The brain can compensate in ways we help it learn to." Those words gave us something to hold onto.

We started physiotherapy twice a week and were given a home exercise routine for every morning.`,
      },
      {
        label: "The journey — month by month",
        body: `The first two months, the exercises were hard. Rishi did not like them. Some mornings, we both cried through it. But we did it anyway — every morning, as the team had taught us, because consistency was everything.

By month three, Rishi's muscle tone was visibly changing. He could sit with support more steadily than before. His physiotherapist celebrated with us every time his range of movement improved even slightly.

By month six, he was pulling himself up against the sofa. His whole face changed when he did it — pure surprise, then pure joy. He looked at us as if to say: look what I can do.

He is three now. He walks with a support frame. His physiotherapist believes he may walk independently within a year. Every session, he walks a little further than the last time. Every session, we watch him and remember the parents who sat in that car outside the neurologist's office, not knowing where to begin.

We know exactly where to begin. We began at Meditron.`,
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HealingStoriesPage() {
  return (
    <>
      <PageHero
        label="Healing Stories"
        title="Real families. Real struggle."
        accent="Real progress."
        subtitle="These are not success stories in the easy sense. They are honest accounts of parents who were lost, found their way, and kept walking. If you see your family in any of these, you are not alone."
        breadcrumbs={[{ label: "Healing Stories", href: "#" }]}
      />

      {/* ── Intro note ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-navy text-sm sm:text-base leading-[1.9] italic">
            The stories on this page are shared with the spirit of every family that has walked through our doors and said,{" "}
            <span className="text-confident-navy font-semibold not-italic">
              &ldquo;I wish I had known sooner.&rdquo;
            </span>{" "}
            They are shared so that the next family knows sooner.
          </p>
        </div>
      </section>

      {/* ── Stories ───────────────────────────────────────────────────────── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto space-y-24 pt-4">
          {stories.map((story, si) => (
            <article key={story.id} aria-labelledby={`story-${story.id}-heading`}>

              {/* Story header */}
              <div className={`rounded-2xl border px-7 py-6 mb-10 ${story.accent}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <Link
                      href={story.conditionHref}
                      className={`text-xs font-bold uppercase tracking-widest hover:underline underline-offset-2 ${story.labelColor}`}
                    >
                      {story.condition}
                    </Link>
                    <h2
                      id={`story-${story.id}-heading`}
                      className="mt-1 text-2xl sm:text-3xl font-extrabold text-confident-navy leading-tight"
                    >
                      {story.child}&apos;s Story
                    </h2>
                    <p className="text-muted-navy text-sm mt-1">
                      {story.age} · Parents: {story.parents} · {story.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-[3rem] leading-none text-primary/10 font-black select-none">
                    {String(si + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Pull quote */}
                <blockquote className="mt-5 pt-5 border-t border-primary/15 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary/40 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-confident-navy font-serif text-base sm:text-lg leading-relaxed italic">
                    {story.quote}
                  </p>
                </blockquote>
              </div>

              {/* Chapters */}
              <div className="space-y-10">
                {story.chapters.map((chapter, ci) => (
                  <div key={ci} className="border-l-4 border-primary/20 pl-6">
                    <h3 className="font-extrabold text-confident-navy text-base sm:text-lg mb-3 leading-snug">
                      {chapter.label}
                    </h3>
                    <div className="space-y-4">
                      {chapter.body.trim().split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-muted-navy text-sm sm:text-base leading-[1.9]">
                          {para.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider (except last) */}
              {si < stories.length - 1 && (
                <div className="mt-20 flex items-center gap-4" aria-hidden="true">
                  <div className="flex-1 h-px bg-primary-light" />
                  <div className="w-2 h-2 rounded-full bg-primary/30" />
                  <div className="flex-1 h-px bg-primary-light" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Conditions quick links ─────────────────────────────────────────── */}
      <section className="py-14 bg-primary-light/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-6">
            Learn more about these conditions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Autism in Vijayawada", href: "/conditions/autism-vijayawada" },
              { label: "ADHD in Vijayawada", href: "/conditions/adhd-vijayawada" },
              { label: "Cerebral Palsy in Vijayawada", href: "/conditions/cerebral-palsy-vijayawada" },
              { label: "Down Syndrome in Vijayawada", href: "/conditions/down-syndrome-vijayawada" },
              { label: "For Parents", href: "/for-parents" },
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Is this your family&apos;s story — still in the beginning?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            Every one of these families started exactly where you are right now — with worry, confusion, and no clear next step. The next step is a conversation. That is all. Come in and talk to us.
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
