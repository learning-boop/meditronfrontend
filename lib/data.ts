export type Condition = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const conditions: Condition[] = [
  {
    slug: "autism",
    name: "Autism Spectrum Disorder",
    tagline: "Communication & Connection",
    description:
      "Early, play-based intervention that builds communication, social skills, and daily routines for children on the spectrum.",
    image: "/images/Conditions/1.png",
  },
  {
    slug: "adhd",
    name: "ADHD",
    tagline: "Focus & Self-Regulation",
    description:
      "Evidence-based strategies to develop attention, impulse control, and learning skills so children can succeed at school and at home.",
    image: "/images/Conditions/2.png",
  },
  {
    slug: "cerebral-palsy",
    name: "Cerebral Palsy",
    tagline: "Movement & Independence",
    description:
      "Multidisciplinary therapy to improve mobility, posture, speech, and everyday independence for children with CP.",
    image: "/images/Conditions/3.png",
  },
  {
    slug: "down-syndrome",
    name: "Down Syndrome",
    tagline: "Development & Potential",
    description:
      "Compassionate, goal-oriented programs supporting cognitive, language, and social growth at every stage of development.",
    image: "/images/Conditions/4.png",
  },
];

export type Therapy = {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
};

export const therapies: Therapy[] = [
  {
    slug: "speech",
    name: "Speech Therapy",
    description:
      "Structured, engaging sessions that build language, articulation, and communication skills from the ground up.",
    image: "/images/Theorapies/1.png",
    icon: "MessageCircle",
  },
  {
    slug: "occupational",
    name: "Occupational Therapy",
    description:
      "Developing fine motor skills, sensory processing, and daily-living abilities to increase independence.",
    image: "/images/Theorapies/2.png",
    icon: "Hand",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Movement-based therapy to strengthen gross motor skills, balance, coordination, and physical confidence.",
    image: "/images/Theorapies/3.png",
    icon: "Activity",
  },
  {
    slug: "child-psychology",
    name: "Child Psychology",
    description:
      "Compassionate psychological assessment and counselling to support emotional well-being, behaviour, and mental health.",
    image: "/images/Theorapies/1.png",
    icon: "Brain",
  },
  {
    slug: "sensory-integration",
    name: "Sensory Integration",
    description:
      "Specialised therapy that helps children process and respond to sensory information from their environment.",
    image: "/images/Theorapies/2.png",
    icon: "Sparkles",
  },
  {
    slug: "behaviour-therapy",
    name: "Behaviour Therapy",
    description:
      "Positive, evidence-based techniques to reduce challenging behaviours and build adaptive skills for everyday life.",
    image: "/images/Theorapies/3.png",
    icon: "Heart",
  },
  {
    slug: "vision-therapy",
    name: "Vision Therapy",
    description:
      "Targeted eye exercises and visual training to improve tracking, focusing, and visual-motor integration.",
    image: "/images/Theorapies/1.png",
    icon: "Eye",
  },
  {
    slug: "play-therapy",
    name: "Play Therapy",
    description:
      "Child-led play sessions that allow children to express emotions, develop social skills, and heal through the natural language of play.",
    image: "/images/Theorapies/2.png",
    icon: "Smile",
  },
  {
    slug: "aba-therapy",
    name: "ABA Therapy",
    description:
      "Applied Behaviour Analysis programmes using data-driven strategies to teach communication, social, and self-care skills.",
    image: "/images/Theorapies/3.png",
    icon: "BookOpen",
  },
  {
    slug: "specific-learning",
    name: "Specific Learning",
    description:
      "Targeted support for dyslexia, dyscalculia, and other learning differences to help children achieve their academic potential.",
    image: "/images/Theorapies/1.png",
    icon: "GraduationCap",
  },
];

export const stats = [
  { value: "500+", label: "Children Helped" },
  { value: "8+", label: "Years of Experience" },
  { value: "15+", label: "Expert Therapists" },
];

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mother of Arjun, 6",
    quote:
      "Meditron transformed our son's life. Within six months of speech therapy he started speaking full sentences. The therapists here are incredibly patient and skilled.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Father of Ananya, 4",
    quote:
      "We were worried about our daughter's development delays. The team at Meditron gave us a clear plan and supported our whole family throughout the journey.",
  },
  {
    id: 3,
    name: "Sunita Reddy",
    role: "Mother of Vikram, 7",
    quote:
      "The occupational therapy here has been life-changing. Vikram can now write, dress himself, and join his classmates in school activities with confidence.",
  },
  {
    id: 4,
    name: "Lakshmi Patel",
    role: "Mother of Sai, 5",
    quote:
      "The behaviour therapy sessions at Meditron have been incredible. Sai's meltdowns have reduced dramatically and he now communicates his needs so much better.",
  },
  {
    id: 5,
    name: "Venkat Rao",
    role: "Father of Diya, 8",
    quote:
      "After two years of ABA therapy at Meditron, Diya is now attending mainstream school. The team's dedication to our daughter goes far beyond the therapy room.",
  },
  {
    id: 6,
    name: "Kavitha Nair",
    role: "Mother of Rohan, 3",
    quote:
      "We came to Meditron when Rohan was barely making eye contact. The early intervention programme gave him the start he needed. He surprises us every single day.",
  },
];

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "early-signs-of-autism",
    title: "Early Signs of Autism: What Indian Parents Should Know",
    excerpt:
      "Learn the key developmental milestones and early warning signs that may indicate autism spectrum disorder in children under 3.",
    date: "2026-07-01",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "adhd-vs-normal-behaviour",
    title: "ADHD or Just Energetic? Understanding the Difference",
    excerpt:
      "Many parents wonder if their active child has ADHD. We explain the difference and when to seek a professional evaluation.",
    date: "2026-06-20",
    readTime: "4 min read",
  },
  {
    id: 3,
    slug: "speech-therapy-activities-at-home",
    title: "5 Speech Therapy Activities You Can Do at Home",
    excerpt:
      "Our speech therapists share simple, playful activities that reinforce language development between clinic sessions.",
    date: "2026-06-10",
    readTime: "6 min read",
  },
];

export const NAP = {
  name: "Meditron Child Development Centre",
  address: "Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram, Vijayawada, Andhra Pradesh 520002",
  phone: "+91 95582 34569",
  whatsapp: "919558234569",
  email: "hello@meditronvijayawada.com",
  mapUrl: "https://www.google.com/maps/place/Meditron+Child+Development+Centre/@16.5174296,80.6381530,17z",
  hours: "Mon–Sat: 9 am – 6 pm",
  socials: {
    instagram: "https://www.instagram.com/meditroncdc/",
    facebook: "https://www.facebook.com/profile.php?id=61591380460262",
    youtube: "https://www.youtube.com/channel/UCjywEo5ZZMmwJVTbcK6JFCQ",
  },
};
