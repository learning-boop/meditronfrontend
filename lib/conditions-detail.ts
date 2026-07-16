export type FAQ = { question: string; answer: string };

export type ConditionDetail = {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  intro: string;
  signs: string[];
  signsNote: string;
  therapies: { name: string; description: string }[];
  journey: { num: string; title: string; body: string }[];
  faqs: FAQ[];
  closing: string;
};

export const conditionDetails: Record<string, ConditionDetail> = {
  autism: {
    slug: "autism",
    name: "Autism Spectrum Disorder",
    tagline: "Communication & Connection",
    color: "text-teal-600",
    intro:
      "Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person communicates, relates to others, and experiences the world around them. It is called a 'spectrum' because every child with autism is uniquely different — some are non-verbal, others speak fluently; some are highly sensitive to sound, others barely notice it. What they all share is a different way of processing the world — not a lesser one.",
    signs: [
      "No pointing, waving, or showing objects by 12–14 months",
      "No single words by 16 months, no two-word phrases by 24 months",
      "Loss of previously acquired speech or social skills",
      "Limited or inconsistent eye contact",
      "Little interest in other children; prefers to play alone",
      "Repetitive movements — hand-flapping, rocking, lining up objects",
      "Strong insistence on routines; intense distress at small changes",
      "Unusual reactions to sensory input — very sensitive or seemingly unaware",
    ],
    signsNote:
      "You do not need to see all of these signs. Even two or three consistent patterns are worth discussing with a specialist. Early action always leads to better outcomes.",
    therapies: [
      {
        name: "Speech & Language Therapy",
        description:
          "We build communication — verbal and non-verbal. From first words to full conversations, our speech therapists work at every level of the spectrum.",
      },
      {
        name: "Occupational Therapy",
        description:
          "Sensory processing, fine motor skills, daily routines — OT helps children function more comfortably and independently in school and at home.",
      },
      {
        name: "Behaviour Support",
        description:
          "Using positive, evidence-based approaches, we reduce distress-driven behaviours and build coping and communication skills.",
      },
    ],
    journey: [
      {
        num: "01",
        title: "Free Assessment",
        body: "We spend 45 minutes with you and your child — talking, observing, and listening. No pressure. No clipboards. Just understanding.",
      },
      {
        num: "02",
        title: "Personalised Therapy Plan",
        body: "We create a goals-based plan specific to your child's strengths and challenges — and we explain every part of it to you clearly.",
      },
      {
        num: "03",
        title: "Ongoing Therapy & Family Support",
        body: "Sessions run weekly or as recommended. We train you alongside your child so progress continues at home every single day.",
      },
    ],
    faqs: [
      {
        question: "Is autism curable?",
        answer:
          "Autism is a lifelong neurological difference — not a disease to be cured. The goal of therapy is to help your child communicate, connect, and live as fully and independently as possible. With early, consistent therapy, many children make remarkable progress and lead fulfilling lives.",
      },
      {
        question: "My child is 2 years old. Is it too early to start therapy?",
        answer:
          "It is never too early. The brain is at its most adaptable in the first five years of life. Starting therapy at 2 or even younger produces dramatically better outcomes than waiting. If you've noticed something, act now — even if you're not yet sure.",
      },
      {
        question: "How long will therapy take before I see results?",
        answer:
          "Most families notice meaningful changes within 3–6 months of consistent therapy. The pace depends on the child's starting point, how early intervention began, and how consistently the home programme is followed. Progress is real, it just looks different for every child.",
      },
    ],
    closing:
      "Your child is not defined by a diagnosis. They are defined by who they are — and with the right support, who they can become.",
  },

  adhd: {
    slug: "adhd",
    name: "ADHD",
    tagline: "Focus & Self-Regulation",
    color: "text-orange-600",
    intro:
      "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterised by difficulty sustaining attention, impulsive behaviour, and in some children, hyperactivity. It is not naughtiness. It is not bad parenting. The ADHD brain is wired to seek stimulation and struggle with tasks that are repetitive or low-interest — but it is also capable of extraordinary focus, creativity, and energy when channelled correctly.",
    signs: [
      "Difficulty staying on task — starts many things, finishes few",
      "Easily distracted by background noise or unrelated thoughts",
      "Forgets instructions, loses homework, misplaces belongings regularly",
      "Interrupts conversations or can't wait their turn",
      "Fidgets constantly — can't stay seated even for a few minutes",
      "Acts before thinking — impulsive decisions, risky behaviour",
      "Daydreams frequently, seems 'not there' even when spoken to",
      "Emotional outbursts that seem out of proportion to the situation",
    ],
    signsNote:
      "ADHD often looks different in girls — more inattentive and inward than hyperactive. If your daughter is constantly daydreaming and underperforming at school, that is worth investigating too.",
    therapies: [
      {
        name: "Behaviour Therapy",
        description:
          "We teach children to recognize their impulses, regulate their responses, and build strategies that work inside and outside the classroom.",
      },
      {
        name: "Attention & Focus Training",
        description:
          "Structured, engaging sessions that gradually build the child's capacity for sustained attention — using methods that work with the ADHD brain, not against it.",
      },
      {
        name: "Parent & Teacher Coaching",
        description:
          "We equip the adults in your child's life with tools and language that reduce conflict, build confidence, and create consistent expectations.",
      },
    ],
    journey: [
      {
        num: "01",
        title: "Understanding Your Child",
        body: "We assess attention, impulsivity, and emotional regulation — and talk with you about school, home, and daily life in detail.",
      },
      {
        num: "02",
        title: "Targeted Therapy Plan",
        body: "A plan built around your child's specific ADHD profile — inattentive, hyperactive, or combined — with clear goals and milestones.",
      },
      {
        num: "03",
        title: "School & Home Integration",
        body: "We liaise with schools where needed and train parents in daily strategies so therapy gains transfer to real life immediately.",
      },
    ],
    faqs: [
      {
        question: "Is ADHD overdiagnosed? Could it just be normal child behaviour?",
        answer:
          "It is a fair question. All children are sometimes inattentive and energetic. ADHD is diagnosed when these behaviours are significantly more frequent and severe than peers, present across multiple settings (home AND school), and causing real impairment to learning or relationships. A proper clinical assessment rules out other causes before any diagnosis is made.",
      },
      {
        question: "Does my child need medication?",
        answer:
          "Medication is one option, not the only one. For mild to moderate ADHD, behaviour therapy, coaching, and environmental adjustments produce excellent results without medication. We work in parallel with your child's paediatrician if medication is part of the plan.",
      },
      {
        question: "Will my child outgrow ADHD?",
        answer:
          "Hyperactivity often decreases with age, but inattention and impulsivity frequently continue into adulthood. The good news: children who receive early therapy develop coping strategies that serve them for life — in school, work, and relationships.",
      },
    ],
    closing:
      "The child who can't sit still might become the most dynamic adult in the room. The right support makes all the difference.",
  },

  "cerebral-palsy": {
    slug: "cerebral-palsy",
    name: "Cerebral Palsy",
    tagline: "Movement & Independence",
    color: "text-blue-600",
    intro:
      "Cerebral Palsy (CP) is a group of conditions that affect movement, muscle tone, and posture. It is caused by damage to the developing brain — most often before or during birth. CP does not get worse over time, but it does affect every child differently: some have mild motor difficulties; others have significant physical, communication, or learning challenges. One thing is consistent across all children with CP — the potential for progress with the right therapy never stops.",
    signs: [
      "Delayed motor milestones — not sitting by 9 months, not walking by 18 months",
      "Stiff or rigid muscles (spasticity) — arms or legs that resist movement",
      "Floppy muscle tone — baby feels unusually limp when held",
      "Asymmetric movement — consistently favouring one side of the body",
      "Walking on tiptoes, with a scissor gait, or with an unusual posture",
      "Difficulty with fine motor tasks — holding a spoon, buttoning clothes",
      "Tremors or uncontrolled, writhing movements",
      "Difficulty swallowing, drooling, or problems with speech",
    ],
    signsNote:
      "Many families receive a CP diagnosis during infancy, but some mild cases are not identified until the child starts school. Whenever you notice it, starting therapy immediately is the most important step.",
    therapies: [
      {
        name: "Physiotherapy",
        description:
          "The core of CP management. We improve strength, range of motion, balance, and mobility — working towards every achievable physical milestone.",
      },
      {
        name: "Occupational Therapy",
        description:
          "From hand function to daily living skills — dressing, feeding, writing — OT builds the independence that transforms a child's confidence.",
      },
      {
        name: "Speech & Communication Therapy",
        description:
          "Many children with CP have difficulty with speech, eating, or swallowing. We address all three with targeted, compassionate intervention.",
      },
    ],
    journey: [
      {
        num: "01",
        title: "Comprehensive Assessment",
        body: "We assess motor function, muscle tone, communication, and daily living skills — and discuss your child's specific goals as a family.",
      },
      {
        num: "02",
        title: "Multi-Disciplinary Plan",
        body: "Physio, OT, and speech therapy are coordinated into a single plan so each session builds on the others — no wasted effort.",
      },
      {
        num: "03",
        title: "Consistent Progress Across Life",
        body: "CP therapy is a long-term commitment. We review progress every 3 months, update goals, and celebrate every milestone — however small.",
      },
    ],
    faqs: [
      {
        question: "Will my child ever walk?",
        answer:
          "It depends on the type and severity of CP. Children with mild CP often walk independently with therapy. Children with more significant CP may walk with assistive devices, or may develop wheelchair skills with complete independence in daily life. We set honest, achievable goals — and we work tirelessly toward them.",
      },
      {
        question: "How early should physiotherapy start?",
        answer:
          "As early as possible — ideally from the time of diagnosis, even in infancy. The nervous system is most responsive in the first three years of life. Early physiotherapy produces the most significant gains in mobility and function.",
      },
      {
        question: "What does a typical physiotherapy session look like?",
        answer:
          "Sessions are active, structured, and designed to be engaging for the child. Our physiotherapists use play-based exercises, equipment, positioning techniques, and hands-on work to achieve specific movement goals. Sessions are 45–60 minutes, usually 2–3 times per week.",
      },
    ],
    closing:
      "Every child with CP is teaching us something about resilience. We learn from them every day.",
  },

  "down-syndrome": {
    slug: "down-syndrome",
    name: "Down Syndrome",
    tagline: "Development & Potential",
    color: "text-purple-600",
    intro:
      "Down syndrome (Trisomy 21) occurs when a person has three copies of chromosome 21 instead of two. It results in characteristic physical features and varying degrees of intellectual disability — but also, almost universally, in warmth, sociability, and extraordinary determination. Children with Down syndrome learn everything — language, self-care, reading, social skills — they simply learn it on their own timeline. Our job is to walk that timeline with them, milestone by milestone.",
    signs: [
      "Characteristic facial features — almond-shaped eyes, small ears, flat nasal bridge",
      "Low muscle tone (hypotonia) — baby feels floppy when held",
      "Shorter height and smaller hands and feet",
      "Delayed developmental milestones across all areas",
      "Heart defects present at birth (in around 50% of cases)",
      "Slower processing and learning speed",
      "Strong visual learning skills and excellent memory for routines",
    ],
    signsNote:
      "Down syndrome is usually diagnosed at birth or even prenatally. The question after diagnosis is not 'what's wrong' — it's 'what do we do now.' The answer is: start early, and never stop.",
    therapies: [
      {
        name: "Speech & Language Therapy",
        description:
          "We build communication from the very first attempts — first words, then phrases, then full sentences. We also support feeding in infants with low oral muscle tone.",
      },
      {
        name: "Occupational Therapy",
        description:
          "Fine motor skills, self-care, school readiness — OT helps children with Down syndrome gain the independence to participate fully in daily life.",
      },
      {
        name: "Physiotherapy",
        description:
          "Hypotonia means that sitting, standing, and walking take longer to develop. Physiotherapy strengthens muscles and teaches the movement patterns needed for each milestone.",
      },
    ],
    journey: [
      {
        num: "01",
        title: "Early Start (Even in Infancy)",
        body: "The earlier we begin, the more the brain can absorb. We welcome families with infants as young as a few months old for feeding and motor support.",
      },
      {
        num: "02",
        title: "Developmental Goal-Setting",
        body: "We set goals in 3-month cycles — specific, achievable milestones that parents can see and celebrate as they happen.",
      },
      {
        num: "03",
        title: "School Readiness & Lifelong Skills",
        body: "As children grow, therapy evolves — from early milestones to school skills to independence in daily living. We're with them for every chapter.",
      },
    ],
    faqs: [
      {
        question: "Will my child be able to go to a regular school?",
        answer:
          "Many children with Down syndrome are successfully included in mainstream schools with support. Others thrive in special education settings. The right placement depends on the individual child's strengths and needs — and early therapy significantly improves the chances of successful mainstream inclusion.",
      },
      {
        question: "When should therapy start?",
        answer:
          "Ideally from birth. Early intervention programmes for infants with Down syndrome — even from the first few months — show clear benefits for feeding, motor development, communication, and cognitive skills. There is no 'too early.'",
      },
      {
        question: "My child is already 8 years old. Is it too late to start?",
        answer:
          "It is never too late. While the earliest years are the most impactful, the brain retains plasticity throughout childhood and adolescence. Children who start therapy at any age make real progress — and every skill gained adds to their independence and quality of life.",
      },
    ],
    closing:
      "Slower to learn, but faster to love. Every child with Down syndrome is proof that progress comes in its own perfect time.",
  },
};
