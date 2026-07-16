@AGENTS.md
# Meditron — Child Development Center Website

## Project Context
Frontend for Meditron, a child development center in Vijayawada, India, treating
Autism, ADHD, Cerebral Palsy, and Down Syndrome. Built by Creators Touch agency.
Site will expand later into multiple medical departments — keep conditions/services
DATA-DRIVEN, never hardcoded into page components.

## Stack
- Next.js 14+ (App Router, TypeScript, src/ directory) + Tailwind CSS + Framer Motion
- Icons: lucide-react
- Backend (separate repo meditron-api): NestJS + Prisma + PostgreSQL at
  NEXT_PUBLIC_API_URL (http://localhost:3001 in dev)
- Deploy target: Vercel

## Design Direction
- Overall layout inspired by corticacare.com: calm, clean, generous whitespace,
  soft rounded cards, real photography, condition-wise sections
- Homepage HERO inspired by hopebridge.com: bright, joyful, playful energy
- All imagery: Indian children, families, therapists (assets in /public/images,
  named hero-main.webp, condition-autism.webp, condition-adhd.webp,
  condition-cerebral-palsy.webp, condition-down-syndrome.webp,
  therapy-speech.webp, therapy-ot.webp, therapy-physio.webp, why-meditron.webp)
- Palette: soft teal primary, warm cream background, one bright playful accent
  (coral/orange); rounded-2xl cards; friendly rounded sans headings
- Mobile-first: most visitors are Indian parents on phones

## Homepage Sections (in order)
1. Hero — headline + subline + 2 CTAs (WhatsApp deep link + Book Appointment)
2. Trust bar — stats strip (children helped, years, therapists)
3. Conditions We Treat — 4 cards linking to /conditions/[slug]
4. Our Therapies — 3-image strip (speech, occupational, physiotherapy)
5. Why Meditron — approach + consultation photo
6. Video section — embedded training video (lazy-loaded)
7. Success Stories — parent testimonials carousel
8. Blog preview — latest 3 posts
9. Final CTA + footer (NAP: name, address, phone — consistent everywhere)

## Sitemap (12 pages)
/, /about, /conditions, /conditions/autism, /conditions/adhd,
/conditions/cerebral-palsy, /conditions/down-syndrome, /therapies,
/team, /success-stories, /blog, /contact

## SEO — Non-negotiable
- SSR/SSG on every page; unique metadata (title, description, OG) per page via
  Next.js Metadata API
- JSON-LD: MedicalClinic + LocalBusiness (Vijayawada geo) sitewide;
  FAQPage on condition pages
- next-sitemap for sitemap.xml + robots.txt; canonical URLs
- next/image everywhere, WebP, descriptive alt text; hero priority-loaded
- Target Core Web Vitals: LCP < 2.5s, total homepage images < 1.5MB

## Code Standards
- TypeScript strict; no `any`
- Server Components by default; "use client" only where interaction needed
- Reusable components in src/components; section components in
  src/components/home
- Condition/therapy content from a typed data layer (src/lib/data or API) —
  pages render from data, enabling future expansion
- No localStorage for critical state

## Commands
- npm run dev — dev server (port 3000)
- npm run build && npm run start — production check before pushing
- npm run lint — must pass before 