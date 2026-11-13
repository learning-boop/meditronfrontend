/**
 * All copy and data for the home page (/) lives here, so wording changes
 * never require touching layout code.
 *
 * TO CONFIRM WITH CLIENT before going live:
 *  - FACTS.years / FACTS.families (taken from the current live site)
 *  - Every Telugu line (marked `te`) — reviewed by someone at the clinic
 *  - CENTRE_PHOTOS are frames from the centre's own therapy videos; swap in
 *    room photos (entrance, waiting area) if the client sends them
 */
import { NAP } from "@/lib/data";

export const IMG = "/images/home-v2";

export const FACTS = {
  years: "8+",
  families: "500+",
  visitMinutes: 45,
  languages: "Telugu, Hindi and English",
  hours: "Mon–Sat, 9 am to 6 pm",
};

export const PHONE_DISPLAY = "95582 34569";
export const PHONE_TEL = "tel:+919558234569";
export const MAP_URL = NAP.mapUrl;
export const ADDRESS_SHORT = "Sri Nilayam, 2nd floor, Nehru Street, Seetharamapuram, Vijayawada";

/* ── The worries a parent can tap (hero chips + signs cards share these) ── */
export type Concern = {
  id: string;
  /** Short chip label, in a parent's words */
  chip: string;
  /** How it is phrased inside the WhatsApp message */
  message: string;
  image?: { src: string; alt: string };
  /** Plain-words explanation shown after tapping */
  why?: string;
  /** What can be behind it — kept small and non-diagnostic */
  seenIn?: string;
  helps?: string;
};

export const CONCERNS: Concern[] = [
  {
    id: "talking",
    chip: "Not talking yet",
    message: "not talking yet",
    image: { src: `${IMG}/sign-no-words-600.webp`, alt: "A toddler looking at a picture book without speaking" },
    why: "Many children understand far more than they can say. Speaking needs hearing, mouth muscles and the wish to connect to work together. When one of these is slower, words come late.",
    seenIn: "Speech delay, hearing difficulty, sometimes autism",
    helps: "Speech therapy built on play, with you in the room.",
  },
  {
    id: "name",
    chip: "Doesn't turn when I call",
    message: "doesn't turn when I call his/her name",
    image: { src: `${IMG}/sign-name-600.webp`, alt: "A mother's hand on her toddler's hair as the child looks away" },
    why: "First we check hearing. If hearing is fine, your child may be so absorbed in their own world that your voice doesn't reach them yet.",
    seenIn: "Attention differences, hearing difficulty, sometimes autism",
    helps: "Play that builds shared attention, so your child starts to look up when you call.",
  },
  {
    id: "eyes",
    chip: "Doesn't look into my eyes",
    message: "doesn't look into my eyes",
    image: { src: `${IMG}/sign-eye-contact-600.webp`, alt: "A boy focused on a wooden block, eyes turned down" },
    why: "For some children eye contact feels too intense. It isn't rudeness, and it isn't a lack of love. It's how their brain handles the world.",
    seenIn: "Sensory sensitivity, sometimes autism",
    helps: "Therapy that lets connection grow at your child's own pace.",
  },
  {
    id: "lines",
    chip: "Lines up toys, same play again and again",
    message: "lines up toys and repeats the same play",
    image: { src: `${IMG}/sign-lines-up-600.webp`, alt: "A boy lining up toy cars in a neat row" },
    why: "Repeating the same play can be how a child feels safe and in control. It's a clue to how they make sense of things.",
    seenIn: "Sensory needs, sometimes autism",
    helps: "Play therapy that gently widens what your child enjoys.",
  },
  {
    id: "walking",
    chip: "Not walking yet",
    message: "not walking yet",
    image: { src: `${IMG}/sign-walking-600.webp`, alt: "A toddler sitting on a rug, reaching toward a toy" },
    why: "Walking needs strength, balance and the right muscle tone. Some children need more help building these.",
    seenIn: "Low muscle tone, developmental delay, cerebral palsy",
    helps: "Physiotherapy that builds strength and balance through play.",
  },
  {
    id: "pencil",
    chip: "Can't hold a pencil",
    message: "finds it hard to hold a pencil",
    image: { src: `${IMG}/sign-pencil-600.webp`, alt: "A young girl gripping a crayon in her fist" },
    why: "Holding a pencil needs strong small hand muscles, and eyes and hands working together.",
    seenIn: "Fine motor delay, learning difficulties",
    helps: "Occupational therapy for hand strength and control.",
  },
  {
    id: "restless",
    chip: "Can't sit still, school complains",
    message: "can't sit still and the school complains",
    image: { src: `${IMG}/sign-restless-600.webp`, alt: "A child's swinging legs under a classroom desk" },
    why: "Some brains find it harder to slow down and focus. It isn't naughtiness, and it isn't your parenting.",
    seenIn: "ADHD, sensory needs",
    helps: "Behaviour therapy and focus training, with simple routines for home.",
  },
  {
    id: "other",
    chip: "Something else",
    message: "something else I'd like to discuss",
  },
];

/* ── WhatsApp message built from what the parent tapped ── */
export function buildWhatsAppUrl(selectedIds: string[], intent: "talk" | "online" = "talk") {
  const picked = CONCERNS.filter((c) => selectedIds.includes(c.id)).map((c) => c.message);
  let text =
    intent === "online"
      ? "Hi Meditron, I'd like an online consultation with the doctor for my child."
      : "Hi Meditron, I'd like to talk to the doctor about my child.";
  if (picked.length) text += ` I've noticed: ${picked.join("; ")}.`;
  return `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* ── Section 3: milestones ── */
export const MILESTONES = [
  { src: `${IMG}/milestone-amma`, alt: "A little boy running to his mother at the gate, arms wide open", caption: "The day he ran to her and called “Amma”" },
  { src: `${IMG}/milestone-steps`, alt: "A father holding his baby's hands as she takes her first steps", caption: "First steps across the living room" },
  { src: `${IMG}/milestone-school`, alt: "Two boys in school uniform walking in through the school gate", caption: "Walking into school with a friend" },
];

/* ── Section 4: doctor ── */
export const DOCTOR = {
  name: "Dr. Venkata Sirisha Matla",
  role: "Founder, Meditron Child Development Centre",
  credentials: [
    "Bachelor of Physiotherapy (BPT)",
    "Certified Speech-Language Pathologist",
    "Certified Sensory Integration Therapist",
    "Certified in Intensive Care for Autism",
    "Certified Brain Gym Practitioner",
  ],
};
/** Real 4:5 photo, saved as `doctor-portrait-520.webp` and `doctor-portrait-800.webp`. Set to null to show the placeholder. */
export const DOCTOR_PHOTO: string | null = `${IMG}/doctor-portrait`;

/* ── Section 5: method ── */
export const STEPS = [
  {
    title: "We listen to you first",
    body: "Tell us everything you've noticed, in your own words. No question is too small, and nothing you say is judged.",
    yourPart: "You talk, we listen.",
    img: `${IMG}/method-1-listen`,
    alt: "A therapist listening closely to a mother while her son plays nearby",
  },
  {
    title: "We understand your whole child",
    body: "A play-based assessment of how your child moves, talks, plays and connects. We look at the whole child, not just a label.",
    yourPart: "You stay in the room the whole time.",
    img: `${IMG}/method-2-understand`,
    alt: "A therapist playing with a boy while his mother watches and smiles",
  },
  {
    title: "Therapy made for your child",
    body: "Speech, occupational, physio, sensory and behaviour therapy, in the mix your child needs. One plan, one team.",
    yourPart: "You watch, and learn the activities.",
    img: `${IMG}/method-3-therapy`,
    alt: "A speech therapy session with a mirror, the mother sitting close by",
  },
  {
    title: "You carry it home",
    body: "We show you simple activities to practise at home, and we review your child's progress with you together.",
    yourPart: "A few minutes of play, every day.",
    img: `${IMG}/method-4-home`,
    alt: "A mother at home holding up a picture card while her son points at it, smiling",
  },
];

/* ── Section 6: first visit ── */
export const VISIT_STEPS = [
  { title: "You send a message", body: `We call you back in ${FACTS.languages}, and fix a time that suits you.` },
  { title: "Your child plays, we observe", body: "Toys, games and gentle activities while we watch how your child moves, talks and connects. You stay with your child throughout." },
  { title: "You get clear answers", body: "Dr. Sirisha explains what she sees in plain words and what you can do next. There's no pressure to start therapy." },
];

/** Real photos (4:3), taken from the centre's own therapy videos. */
export const CENTRE_PHOTOS: { src: string | null; label: string; alt: string }[] = [
  {
    src: "/images/therapies/physio-therapy-ball-480.webp",
    label: "Therapy ball for balance",
    alt: "A child sitting on a large therapy ball on colourful play mats, a therapist steadying them",
  },
  {
    src: "/images/therapies/ot-pencil-grip-480.webp",
    label: "Pencil-grip practice",
    alt: "A child tracing lines and shapes on a pre-writing worksheet",
  },
  {
    src: "/images/therapies/fine-motor-peg-board-480.webp",
    label: "Peg board for hand–eye skills",
    alt: "A child placing coloured pegs into a peg board on the play mat",
  },
  {
    src: "/images/therapies/shape-colour-matching-480.webp",
    label: "Shape and colour matching",
    alt: "Wooden shape blocks and a peg stand laid out on an orange play mat",
  },
];

/* ── Telugu lines (te) — client to review ── */
export const TE = {
  hero: "ఆందోళన వద్దు అమ్మా. మేము ఉన్నాం.",
  signs: "మీ బిడ్డలో ఇవి కనిపిస్తున్నాయా?",
  flower: "ప్రతి బిడ్డ ఒక్కో పువ్వు — కొన్ని పువ్వులు కాస్త ఆలస్యంగా వికసిస్తాయి, అంతే.",
  doctor: "మీ బిడ్డను అమ్మలా చూసుకుంటాం — ప్రతి చిన్న అడుగూ మాకు పండుగే.",
  final: "ఒక్క మెసేజ్ చాలు. మిగతాది మేము చూసుకుంటాం.",
};
