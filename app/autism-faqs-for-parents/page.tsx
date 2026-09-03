import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import { NAP } from "@/lib/data";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Autism FAQs for Parents in Vijayawada | Meditron CDC",
  description:
    "Get clear answers about autism signs, speech delay, behaviour, sensory needs, occupational therapy, school and child development support in Vijayawada.",
  alternates: {
    canonical: "https://meditroncdc.com/autism-faqs-for-parents",
  },
  openGraph: {
    title: "Autism FAQs for Parents in Vijayawada | Meditron CDC",
    description:
      "Get clear answers about autism signs, speech delay, behaviour, sensory needs, occupational therapy, school and child development support in Vijayawada.",
    url: "https://meditroncdc.com/autism-faqs-for-parents",
    type: "article",
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type FaqItem = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

type FaqSection = {
  id: string;
  heading: string;
  items: FaqItem[];
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqSections: FaqSection[] = [
  {
    id: "autism-assessment",
    heading: "Autism Assessment and Development",
    items: [
      {
        q: "Is my child autistic?",
        a: "Autism cannot be confirmed from one behaviour, an online checklist or a short conversation. Possible signs may include differences in social communication, limited response to name, delayed or unusual language, repetitive behaviour, strong interests, difficulty with change, or unusual sensory responses. Some of these signs can also occur for other reasons. A proper autism assessment should consider your child's developmental history, strengths, behaviour and communication across settings. Screening is not the same as diagnosis. If you are concerned, speak with a paediatrician or appropriately qualified developmental professional rather than waiting.",
        link: { href: "/conditions/autism-vijayawada", label: "Autism assessment and support in Vijayawada" },
      },
      {
        q: "Is autism curable?",
        a: "Autism is a lifelong neurodevelopmental difference, not an infection or illness that can be cured. However, this does not mean that a child cannot learn, grow or become more independent. The World Health Organization reports that timely, evidence-based support can improve communication, social skills, well-being and quality of life. Be cautious of anyone promising a guaranteed cure, complete recovery, or a quick result through medicines, supplements, diets or unproven treatments.",
      },
      {
        q: "Will my child improve with therapy?",
        a: "Many children make meaningful progress with timely, appropriate and consistent support, but the type and rate of progress are different for every child. Improvement may appear as better communication, fewer distress behaviours, greater independence, improved play, easier transitions or participation at school and home. An individual plan may include speech therapy, occupational therapy or other appropriate support. Therapy should use clear functional goals, involve parents and be reviewed regularly. No ethical professional can guarantee a particular outcome or timeline.",
        link: { href: "/therapies/speech-therapy-vijayawada", label: "Speech therapy for children" },
      },
      {
        q: "How severe is my child's autism?",
        a: "It is more helpful to understand your child's current support needs than to use labels such as mild or severe. The current diagnostic framework describes three support levels for social communication and restricted or repetitive behaviour. A child's needs may differ across language, learning, sensory regulation and daily living, and may change over time. Support level should be determined through a comprehensive professional assessment, not an online score alone.",
        link: { href: "/conditions/autism-vijayawada", label: "Autism support at Meditron Vijayawada" },
      },
      {
        q: "Will my child be able to study in a regular school?",
        a: "Many autistic children attend mainstream schools successfully when they receive suitable support. Others may benefit from a special-school setting or a combination of supports. The best decision depends on the child's communication, learning profile, sensory needs, safety, independence and the support available at the school — not only the diagnosis. Classroom accommodations may include visual routines, shorter instructions, a quiet space, movement breaks, extra processing time, communication support and specific learning support when appropriate.",
        link: { href: "/therapies/specific-learning-vijayawada", label: "Specific learning support" },
      },
    ],
  },
  {
    id: "speech-communication",
    heading: "Speech and Communication",
    items: [
      {
        q: "Why is my child not speaking?",
        a: "Delayed speech can have several possible causes, including hearing difficulty, a speech or language disorder, motor-speech difficulty, autism, broader developmental delay or another medical or developmental condition. It is not possible to identify the reason from age alone. A useful evaluation may include a hearing test, speech and language assessment, developmental review and observation of how the child communicates through sounds, gestures, pointing, play or pictures. The NIDCD recommends including hearing evaluation when speech or language is delayed.",
        link: { href: "/therapies/speech-therapy-vijayawada", label: "Speech therapy for children in Vijayawada" },
      },
      {
        q: "When will my child start talking?",
        a: "No professional can accurately promise the age or date when a child will begin speaking. Some children develop spoken words gradually, some progress after targeted support, and some communicate more effectively using signs, gestures, pictures or an augmentative and alternative communication (AAC) system. The priority is to give the child a reliable way to communicate now while continuing to support speech and language development. ASHA states that AAC can support early language and does not prevent speech development. Early assessment is better than simply waiting and watching when concerns are present.",
        link: { href: "/therapies/speech-therapy-vijayawada", label: "Speech therapy at Meditron" },
      },
      {
        q: "How can I improve communication at home?",
        a: "Follow your child's interests and create short, enjoyable opportunities to communicate during play, meals and daily routines. Use simple words, gestures and pictures; offer two clear choices; pause long enough for a response; and respond to every meaningful attempt, including looking, reaching, pointing, sounds or words. Comment more and test less — constant questions can create pressure. A speech-language professional can show your family strategies suited to your child's current communication level.",
        link: { href: "/for-parents", label: "Practical guidance for parents" },
      },
      {
        q: "My child understands but does not speak — why?",
        a: "Understanding language and expressing language are different abilities. A child may know what is being said but have difficulty finding words, planning speech movements, imitating sounds, using language socially, or managing the sensory and motor demands of speaking. Some children also understand familiar routines better than new instructions. A speech and language assessment can compare receptive language, expressive language, speech sounds, oral-motor skills and social communication, while a hearing test helps rule out hearing difficulty.",
        link: { href: "/therapies/speech-therapy-vijayawada", label: "Speech and language assessment" },
      },
    ],
  },
  {
    id: "behaviour-regulation",
    heading: "Behaviour and Emotional Regulation",
    items: [
      {
        q: "Why does my child have tantrums?",
        a: "Crying, screaming or dropping to the floor may happen when a child cannot communicate a need, is asked to stop a preferred activity, faces an unexpected change, feels tired or hungry, experiences pain, or becomes overwhelmed by sensory input. The first step is to identify what happens before, during and after each episode. Teaching a safer way to request help, break, more or finished, along with predictable routines and calm support, is often more useful than punishment. Behaviour therapy may help when these episodes are frequent, intense or unsafe.",
        link: { href: "/therapies/behaviour-therapy-vijayawada", label: "Behaviour therapy for children" },
      },
      {
        q: "Why does my child hit, bite or scream?",
        a: "These behaviours are not automatically signs of bad parenting or deliberate misbehaviour. They may communicate pain, fear, frustration, sensory overload, a need to escape, difficulty waiting, or lack of a safer communication method. Keep everyone safe, remain calm, reduce immediate demands and record possible triggers. A professional assessment should consider communication, sleep, pain, constipation, hearing, sensory needs and the purpose the behaviour serves. Seek urgent help when there is serious injury or immediate danger.",
        link: { href: "/therapies/behaviour-therapy-vijayawada", label: "Behaviour therapy at Meditron" },
      },
      {
        q: "Why does my child repeat the same activity?",
        a: "Repetition may be enjoyable, calming, predictable or connected to a strong interest. It can also help a child practise a skill or manage uncertainty. Repetitive play does not always need to be stopped. Join the activity respectfully, then introduce one small variation — such as a new action, word, colour or turn — to expand play without causing unnecessary distress. Ask for professional help if repetition prevents essential activities or becomes unsafe.",
      },
      {
        q: "How can I reduce stimming?",
        a: "Stimming includes repetitive movements or sounds such as rocking, hand movements, humming or spinning objects. Harmless stimming may help a child regulate emotion, attention or sensory input, so the goal should not be to make the child look normal. First reduce stress and understand the purpose of the behaviour. Intervention is appropriate when stimming causes injury, is unsafe or severely limits participation; in those situations, teach a safer alternative that meets the same need.",
      },
      {
        q: "Why doesn't my child respond when we call their name?",
        a: "A child may not respond because they are deeply focused, need more time to process language, do not yet understand that their name signals attention, have sensory or social-communication differences, or have hearing difficulty. This sign alone does not confirm autism. Avoid calling the name repeatedly from a distance. Move closer, reduce distractions, pair the name with something meaningful and praise any response. Arrange hearing and developmental checks if the concern continues.",
        link: { href: "/conditions/autism-vijayawada", label: "Autism assessment in Vijayawada" },
      },
    ],
  },
  {
    id: "sensory-ot",
    heading: "Sensory Needs and Occupational Therapy",
    items: [
      {
        q: "Why does my child avoid certain sounds or textures?",
        a: "Some children process sensory information differently and may experience ordinary sounds, clothing, food textures, touch, lights or smells as intense or uncomfortable. The reaction is real and should not be treated as stubbornness. Notice triggers, offer reasonable adjustments and introduce new sensations gradually without forcing the child. An occupational therapist can assess how sensory differences affect participation and whether sensory integration support is appropriate. Feeding, hearing, dental or medical concerns should be evaluated by the relevant professional.",
        link: { href: "/therapies/sensory-integration-vijayawada", label: "Sensory integration support" },
      },
      {
        q: "Why does my child seek jumping, spinning or crashing activities?",
        a: "Movement and deep-pressure activities provide vestibular and proprioceptive input, which some children seek to feel organised, alert or calm. The behaviour may also reflect enjoyment, a need for movement or difficulty regulating arousal. Provide safe, supervised movement opportunities and clear boundaries rather than stopping all activity. An occupational therapist can observe the pattern and recommend practical strategies based on the child's needs; a generic sensory diet should not be copied from another child.",
        link: { href: "/therapies/occupational-therapy-vijayawada", label: "Occupational therapy for children" },
      },
      {
        q: "How can occupational therapy help my child?",
        a: "Occupational therapy for children focuses on participation in everyday life. Depending on assessment findings, an occupational therapist may work on dressing, feeding, toileting, handwriting, fine-motor skills, play, classroom participation, motor planning, routines and ways to manage sensory demands. Goals should be functional, measurable and connected to what matters to the child and family. OT does not cure autism; it helps build skills and adapt tasks or environments so daily activities become safer and more manageable.",
        link: { href: "/therapies/occupational-therapy-vijayawada", label: "Occupational therapy at Meditron Vijayawada" },
      },
      {
        q: "How can I improve dressing, feeding and toileting?",
        a: "Teach one small step at a time, use the same routine, show each step with pictures or modelling, and practise when the child is calm. Offer enough time and praise effort rather than demanding perfection. Adaptive clothing, utensils, seating or bathroom supports may help when recommended for the individual child. Consult a professional if your child coughs or chokes while eating, has poor growth, eats a very restricted range, appears to be in pain, or has constipation or toileting regression.",
        link: { href: "/therapies/occupational-therapy-vijayawada", label: "Occupational therapy support" },
      },
      {
        q: "Why is my child so restless?",
        a: "Restlessness may be related to age, limited opportunities for movement, sensory seeking, communication frustration, anxiety, sleep problems, pain, attention difficulty, ADHD or another health or developmental factor. It should not automatically be assumed to be autism or naughty behaviour. Track when it occurs, build in safe movement breaks and use short, clear activities. Discuss persistent restlessness with your child's paediatrician and therapy team; a child psychology assessment may also be considered when emotional, attention or behavioural concerns affect daily life.",
        link: { href: "/therapies/child-psychology-vijayawada", label: "Child psychology assessment" },
      },
    ],
  },
  {
    id: "choosing-therapy",
    heading: "Choosing and Reviewing Therapy",
    items: [
      {
        q: "Which therapies does my child need?",
        a: "Therapy should be selected from the child's assessed needs, not from the diagnosis alone. A child may benefit from speech and language therapy for communication, occupational therapy for daily activities and participation, behavioural support for learning and regulation, physiotherapy for movement difficulties, or psychological, medical and school support when appropriate. Not every child needs every therapy. A coordinated plan with a few meaningful priorities is usually clearer than several disconnected programmes.",
        link: { href: "/therapies", label: "All therapies at Meditron" },
      },
      {
        q: "How many sessions per week are required?",
        a: "There is no single number that is right for every child. Frequency depends on the child's goals, age, needs, tolerance, therapy approach, family capacity and opportunities to practise skills in daily life. More sessions are not automatically better. The team should explain why a particular frequency is recommended, what will happen during sessions, what parents can practise at home, and when the plan will be reviewed. The schedule should be adjusted using progress data and the child's well-being.",
      },
      {
        q: "How long will therapy take?",
        a: "Therapy length depends on the skill being addressed and how the child responds. Some focused goals may be achieved within a defined block, while support for communication, independence or school participation may change across developmental stages. Therapy is not a race and should not continue indefinitely without review. The team should set a baseline, agree on specific goals, monitor progress and discuss whether to continue, modify, pause or complete a programme.",
      },
      {
        q: "How do I know whether therapy is working?",
        a: "Progress should be visible in measurable skills that matter outside the therapy room. Examples include independently requesting help, tolerating a routine, using a new communication method, completing part of dressing, playing for longer, or recovering from transitions with less support. Ask for the starting baseline, written goals, regular progress data and parent feedback. A child performing a task only with heavy prompting during a session is not the same as using the skill independently at home or school.",
      },
      {
        q: "What can we do at home between sessions?",
        a: "Ask the therapist for one or two simple strategies that fit naturally into routines such as meals, dressing, bath time, play and outings. Short, frequent practice is often easier than recreating a clinic session at home. Model the skill, pause, give the child time, help only as much as needed and celebrate attempts. Keep brief notes or videos when appropriate so the therapist can see what works. Home should still feel like home, with time for rest, play and connection.",
        link: { href: "/for-parents", label: "Home care guidance for parents" },
      },
      {
        q: "When should we change or stop therapy?",
        a: "Review the plan when goals are achieved, needs change, the child is persistently distressed, progress is not measurable despite consistent participation, or strategies do not carry over to daily life. First check whether the goal, method, frequency, therapist-child fit, medical factors or home support needs adjustment. A pause or discharge can be appropriate when a therapy is no longer needed. Decisions should be planned with the family and qualified team, with clear next steps rather than stopping suddenly without review.",
      },
    ],
  },
  {
    id: "independence-school",
    heading: "Future, Independence and School",
    items: [
      {
        q: "Will my child become independent?",
        a: "It is not possible to predict a young child's adult independence with certainty. Autistic people have widely different abilities and support needs, and development continues over time. The most useful approach is to build functional communication, safety, self-care, decision-making, learning and community skills step by step. Independence can also mean supported independence — knowing how to ask for help, use accommodations and participate meaningfully — not doing everything without assistance.",
      },
      {
        q: "Can my child make friends?",
        a: "Yes, autistic children can form meaningful friendships, although they may communicate, play or show connection differently. Some prefer one close friend, structured activities or friendships based on shared interests. Support can include teaching turn-taking, recognising boundaries, repairing misunderstandings and finding welcoming peer groups. Avoid forcing eye contact or a particular social style. The goal is safe, enjoyable connection and mutual acceptance, not making the child copy every behaviour of other children.",
      },
      {
        q: "What skills should we focus on first?",
        a: "Start with skills that improve safety, communication and everyday participation. Priorities may include a reliable way to request help, food, a break or the toilet; responding to safety instructions; managing basic routines; and participating in play or learning. Choose a small number of goals based on the child's current strengths and the family's most important needs. Foundational communication and regulation often make it easier to teach later academic and self-care skills.",
        link: { href: "/for-parents", label: "Practical guidance for parents" },
      },
      {
        q: "How can we prepare for school?",
        a: "School readiness includes more than letters and numbers. Help the child practise communicating needs, following simple routines, transitioning between activities, waiting briefly, managing belongings, eating and toileting as independently as possible, and asking for help or a break. Use photos or a visual story, visit the school in advance when possible, and share a short profile describing strengths, triggers, communication methods and helpful supports. A plan that combines learning support with collaboration between parents, teachers and therapists can improve consistency.",
        link: { href: "/therapies/specific-learning-vijayawada", label: "Specific learning support" },
      },
    ],
  },
];

// ─── All Q&A flat list for JSON-LD ───────────────────────────────────────────

const allFaqs = faqSections.flatMap((s) => s.items);

// ─── WhatsApp URL ─────────────────────────────────────────────────────────────

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I have a question about my child's development."
)}`;

// ─── Related Services ─────────────────────────────────────────────────────────

const relatedServices = [
  { label: "Autism Assessment", href: "/conditions/autism-vijayawada" },
  { label: "Speech Therapy", href: "/therapies/speech-therapy-vijayawada" },
  { label: "Occupational Therapy", href: "/therapies/occupational-therapy-vijayawada" },
  { label: "Sensory Integration", href: "/therapies/sensory-integration-vijayawada" },
  { label: "Behaviour Therapy", href: "/therapies/behaviour-therapy-vijayawada" },
  { label: "Child Psychology", href: "/therapies/child-psychology-vijayawada" },
  { label: "For Parents", href: "/for-parents" },
];

// ─── External References ──────────────────────────────────────────────────────

const references = [
  { label: "World Health Organization: Autism", href: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
  { label: "CDC: Screening for Autism Spectrum Disorder", href: "https://www.cdc.gov/autism/diagnosis/index.html" },
  { label: "CDC: Clinical Testing and Diagnosis for Autism", href: "https://www.cdc.gov/autism/hcp/diagnosis/index.html" },
  { label: "CDC: Treatment and Intervention for Autism", href: "https://www.cdc.gov/autism/treatment/index.html" },
  { label: "NHS: Signs of autism in children", href: "https://www.nhs.uk/conditions/autism/signs-in-children/" },
  { label: "NHS: Supporting an autistic child", href: "https://www.nhs.uk/conditions/autism/supporting-a-child/" },
  { label: "NIDCD: Speech and Language Developmental Milestones", href: "https://www.nidcd.nih.gov/health/speech-and-language" },
  { label: "ASHA: Augmentative and Alternative Communication in Early Intervention", href: "https://www.asha.org/practice/early-intervention-provider-support/augmentative-and-alternative-communication-in-early-intervention/" },
  { label: "Government of India DEPwD: Disability Assessment Guidelines", href: "https://depwd.gov.in/en/guidelines/" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AutismFaqsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meditroncdc.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Autism FAQs for Parents",
        item: "https://meditroncdc.com/autism-faqs-for-parents",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Autism FAQs for Parents in Vijayawada | Meditron CDC",
    description:
      "Get clear answers about autism signs, speech delay, behaviour, sensory needs, occupational therapy, school and child development support in Vijayawada.",
    url: "https://meditroncdc.com/autism-faqs-for-parents",
    inLanguage: "en-IN",
    publisher: {
      "@type": "MedicalClinic",
      name: "Meditron Child Development Centre",
      url: "https://meditroncdc.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        postalCode: "520002",
        addressCountry: "IN",
      },
      telephone: NAP.phone,
    },
  };

  return (
    <>
      {/* ── Structured Data ──────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <PageHero
        label="Parent Resources"
        title="Autism FAQs for Parents"
        accent="in Vijayawada"
        subtitle="Clear answers about autism signs, speech delay, behaviour, sensory needs, therapy and child development — from the Meditron CDC clinical team."
        breadcrumbs={[{ label: "Autism FAQs for Parents", href: "#" }]}
      />

      {/* ── Intro + Medical Disclaimer ────────────────────────────────────────── */}
      <section className="py-14 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="faq-intro-heading">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-navy text-base leading-[1.9] mb-5">
            At Meditron Child Development Centre in Vijayawada, we understand that concerns about
            autism signs, speech delay, behaviour, sensory needs, learning or development can feel
            overwhelming. These answers address the questions parents ask most often. Every child has
            a different combination of strengths and support needs, so an individual developmental
            assessment is more useful than comparing one child with another.
          </p>
          <div className="bg-primary-light border border-primary/20 rounded-2xl p-5 sm:p-6">
            <p className="text-sm text-confident-navy leading-relaxed font-medium">
              <strong>Important:</strong> This page provides general information and does not
              diagnose autism or replace advice from your child&apos;s paediatrician or qualified
              developmental professional. Seek prompt medical advice if your child loses previously
              acquired skills, has seizures, is hurting themselves or others, has feeding or
              swallowing difficulty, or if you have any urgent concern.
            </p>
          </div>
        </div>
      </section>

      {/* ── Related Services Strip ───────────────────────────────────────────── */}
      <section className="py-10 bg-cream px-4 sm:px-6 lg:px-8" aria-label="Related Meditron services">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-5 text-center">
            Related Meditron Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((item) => (
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

      {/* ── On-page Jump Nav ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-white px-4 sm:px-6 lg:px-8" aria-label="Jump to section">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-4">Jump to section</p>
          <div className="flex flex-wrap gap-2">
            {faqSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-semibold text-primary border border-primary/20 bg-cream px-4 py-1.5 rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                {section.heading}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Sections ─────────────────────────────────────────────────────── */}
      {faqSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${sectionIndex % 2 === 0 ? "bg-cream" : "bg-white"}`}
          aria-labelledby={`heading-${section.id}`}
        >
          <div className="max-w-3xl mx-auto">
            <span className="text-accent-dark font-bold text-xs uppercase tracking-widest">
              {`0${sectionIndex + 1}`.slice(-2)}
            </span>
            <h2
              id={`heading-${section.id}`}
              className="mt-2 text-2xl sm:text-3xl font-extrabold text-confident-navy mb-8 leading-tight"
            >
              {section.heading}
            </h2>

            <div className="divide-y divide-primary/10 border border-primary/10 rounded-2xl overflow-hidden bg-white">
              {section.items.map((item, itemIndex) => (
                <details
                  key={itemIndex}
                  className="group"
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-5 text-left hover:bg-primary-light/40 transition-colors [&::-webkit-details-marker]:hidden list-none">
                    <span className="font-bold text-confident-navy text-sm sm:text-base leading-snug pt-0.5">
                      {item.q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 shrink-0 text-primary mt-0.5 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-6 pt-1">
                    <p className="text-muted-navy text-sm sm:text-base leading-[1.85] mb-4">
                      {item.a}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 group/link"
                      >
                        {item.link.label}
                        <span className="text-accent group-hover/link:translate-x-0.5 transition-transform inline-block">
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── When to Seek Assessment ───────────────────────────────────────────── */}
      <section className="py-16 bg-primary-light px-4 sm:px-6 lg:px-8" aria-labelledby="seek-assessment-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="seek-assessment-heading"
            className="text-2xl sm:text-3xl font-extrabold text-confident-navy mb-5 leading-tight"
          >
            When to seek an assessment
          </h2>
          <p className="text-muted-navy text-sm sm:text-base leading-[1.85] mb-5">
            If you are concerned about your child&apos;s speech, response to name, behaviour, play,
            sensory responses, learning or daily skills, you do not need to wait for the concern to
            become severe. A developmental evaluation can identify strengths, support needs and
            appropriate next steps.
          </p>
          <p className="text-muted-navy text-sm sm:text-base leading-[1.85]">
            A screening result can indicate that further assessment is needed, but it does not
            provide a diagnosis by itself. You can{" "}
            <Link
              href="/conditions/autism-vijayawada"
              className="text-primary font-semibold hover:underline underline-offset-2"
            >
              review our autism support information
            </Link>{" "}
            or discuss your concerns with an appropriately qualified professional.
          </p>
        </div>
      </section>

      {/* ── Author / Clinical Review Note ────────────────────────────────────── */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border border-primary/15 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
              <span className="text-primary font-extrabold text-sm" aria-hidden="true">CDC</span>
            </div>
            <div>
              <p className="text-sm font-bold text-confident-navy mb-1">
                Written by the Meditron CDC clinical team
              </p>
              <p className="text-xs text-muted-navy leading-relaxed">
                This page provides general educational information for parents and carers. It does
                not constitute a diagnosis, clinical assessment or individual treatment plan. Always
                consult a qualified professional for advice specific to your child.{" "}
                <Link href="/team" className="text-primary hover:underline underline-offset-2 font-medium">
                  Meet our team →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── References ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-cream px-4 sm:px-6 lg:px-8" aria-labelledby="references-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="references-heading"
            className="text-base font-extrabold text-confident-navy uppercase tracking-wide mb-5"
          >
            Evidence and Further Reading
          </h2>
          <ul className="space-y-2.5">
            {references.map((ref) => (
              <li key={ref.href} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline underline-offset-2 leading-relaxed"
                >
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Concerned about your child&apos;s development?
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            Schedule an individual child development assessment at Meditron Child Development Centre
            in Vijayawada. Our team can listen to your concerns, observe your child&apos;s current
            skills and explain suitable next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book an Assessment
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
