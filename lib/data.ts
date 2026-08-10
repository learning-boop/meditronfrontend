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
    name: "Kavitha Nair",
    role: "Mother of Rohan, 3",
    quote:
      "We came when Rohan was barely making eye contact. I used to call his name twenty times and he wouldn't turn. Eight months later he ran to the gate when I came to pick him up and called out 'Amma.' I sat in the car and cried for ten minutes.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Mother of Arjun, 6",
    quote:
      "For three years I waited for Arjun to say a complete sentence. Six months of speech therapy here and he said 'Amma, I want rice and dal.' I know how small that sounds. I know how enormous it is. The therapists are patient in a way I didn't know professionals could be.",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Father of Ananya, 4",
    quote:
      "మా పాప ఇప్పుడు తనే బట్టలు వేసుకుంటుంది. ఇది చిన్న విషయంలా అనిపిస్తుంది — కానీ మనకు అది పండగ. డాక్టర్ గారు మా భయాన్ని ముందే తీసేశారు. అప్పుడే మేము నిజంగా మొదలు పెట్టాం.",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    role: "Mother of Vikram, 7",
    quote:
      "Vikram couldn't hold a pencil when we started. His teacher had given up. Now he writes, dresses himself, and last month he brought home a drawing he'd made at school. He put it in my hands and said 'For you, Amma.' Therapy didn't just change his skills. It changed who he believes he can be.",
  },
  {
    id: 5,
    name: "Lakshmi Patel",
    role: "Mother of Sai, 5",
    quote:
      "The meltdowns were destroying our family. We were afraid to go anywhere. Six months of behaviour therapy and last week Sai sat through his cousin's birthday party — start to finish. He even said thank you when we left. I cried in the auto on the way home.",
  },
  {
    id: 6,
    name: "Venkat Rao",
    role: "Father of Diya, 8",
    quote:
      "When the diagnosis came we thought that was it — a ceiling on what she could become. Two years later Diya is in mainstream school, making friends, and telling me about her day every evening. They believe in her like family.",
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
  email: "meditronhealthcare@gmail.com",
  mapUrl: "https://www.google.com/maps/place/Meditron+Child+Development+Centre/@16.5174296,80.6381530,17z",
  hours: "Mon–Sat: 9 am – 6 pm",
  socials: {
    instagram: "https://www.instagram.com/meditroncdc/",
    facebook: "https://www.facebook.com/profile.php?id=61591380460262",
    youtube: "https://www.youtube.com/channel/UCjywEo5ZZMmwJVTbcK6JFCQ",
  },
};
