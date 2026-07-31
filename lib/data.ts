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
};

export const therapies: Therapy[] = [
  {
    slug: "speech",
    name: "Speech Therapy",
    description:
      "Structured, engaging sessions that build language, articulation, and communication skills from the ground up.",
    image: "/images/Theorapies/1.png",
  },
  {
    slug: "occupational",
    name: "Occupational Therapy",
    description:
      "Developing fine motor skills, sensory processing, and daily-living abilities to increase independence.",
    image: "/images/Theorapies/2.png",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Movement-based therapy to strengthen gross motor skills, balance, coordination, and physical confidence.",
    image: "/images/Theorapies/3.png",
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
  address: "Plot 12, MG Road, Governorpet, Vijayawada, Andhra Pradesh 520002",
  phone: "+91 95582 34569",
  whatsapp: "919558234569",
  email: "hello@meditronvijayawada.com",
  mapUrl: "https://www.google.com/maps?q=Vijayawada+Andhra+Pradesh+India",
  hours: "Mon–Sat: 9 am – 6 pm",
  socials: {
    instagram: "https://www.instagram.com/meditroncdc/",
    facebook: "https://www.facebook.com/profile.php?id=61591380460262",
    youtube: "https://www.youtube.com/channel/UCjywEo5ZZMmwJVTbcK6JFCQ",
  },
};
