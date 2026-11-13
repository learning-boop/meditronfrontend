import type { Metadata } from "next";
import { ConcernsProvider } from "@/components/landing/ConcernsContext";
import HeroSection from "@/components/landing/HeroSection";
import SignsSection from "@/components/landing/SignsSection";
import HopeSection from "@/components/landing/HopeSection";
import DoctorSection from "@/components/landing/DoctorSection";
import MethodSection from "@/components/landing/MethodSection";
import FirstVisitSection from "@/components/landing/FirstVisitSection";
import FinalSection from "@/components/landing/FinalSection";
import StickyBar from "@/components/landing/StickyBar";
import IntroSplash from "@/components/landing/IntroSplash";
import { NAP } from "@/lib/data";

/*
 * Home page (/). The emotional landing page that replaced the old home page on
 * 13 Nov 2026 (the old one is kept in ../_old-home-backup, outside the site).
 * The title, canonical URL and clinic schema are carried over from the old home
 * page so search rankings and the Google business details stay the same.
 */
export const metadata: Metadata = {
  title: { absolute: "Best Child Development Centre in Vijayawada | Meditron CDC" },
  description:
    "Worried your child isn't talking, looking at you or sitting still? It has a reason, and it can be helped. Meditron CDC, Vijayawada: speech therapy, occupational therapy and physiotherapy for Autism, ADHD, Cerebral Palsy and Down Syndrome. First visit free.",
  alternates: { canonical: "https://meditroncdc.com" },
  openGraph: {
    title: "You've noticed something. Let's understand it, together.",
    description: "Talk to Dr. Sirisha at Meditron Child Development Centre, Vijayawada. The first visit is free.",
    url: "https://meditroncdc.com",
    images: [
      {
        url: "/images/home-v2/og-home-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "A mother watching her son play with wooden blocks at Meditron, Vijayawada",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://meditroncdc.com/#clinic",
      name: NAP.name,
      url: "https://meditroncdc.com",
      telephone: NAP.phone,
      email: NAP.email,
      sameAs: [
        NAP.socials.instagram,
        NAP.socials.facebook,
        NAP.socials.youtube,
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram",
        addressLocality: "Vijayawada",
        addressRegion: "Andhra Pradesh",
        postalCode: "520002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 16.5062,
        longitude: 80.648,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      medicalSpecialty: [
        "Pediatric Therapy",
        "Speech Therapy",
        "Occupational Therapy",
        "Physiotherapy",
        "Sensory Integration Therapy",
        "ABA Therapy",
        "Behaviour Therapy",
      ],
      founder: {
        "@type": "Person",
        "@id": "https://meditroncdc.com/#founder",
        name: "Venkata Sirisha Matla",
        jobTitle: "Founder & Lead Therapist",
        worksFor: { "@id": "https://meditroncdc.com/#clinic" },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Bachelor of Physiotherapy (BPT)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Certified in Intensive Care for Autism",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Certified Sensory Integration Therapist",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Certified Speech-Language Pathologist (Techniques)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Certified Brain Gym Practitioner (26 Movements)",
          },
        ],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <ConcernsProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntroSplash />
      <main>
        <HeroSection />
        <SignsSection />
        <HopeSection />
        <DoctorSection />
        <MethodSection />
        <FirstVisitSection />
        <FinalSection />
      </main>
      <StickyBar />
    </ConcernsProvider>
  );
}
