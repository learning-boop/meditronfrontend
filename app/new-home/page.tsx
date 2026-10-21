import type { Metadata } from "next";
import { NAP } from "@/lib/data";
import HeroSection from "@/components/new-home/HeroSection";
import ChecklistSection from "@/components/new-home/ChecklistSection";
import ConditionsSection from "@/components/new-home/ConditionsSection";
import SolutionSection from "@/components/new-home/SolutionSection";
import MethodSection from "@/components/new-home/MethodSection";
import ProofSection from "@/components/new-home/ProofSection";
import FinalCTASection from "@/components/new-home/FinalCTASection";
import NewHomeMobileStickyCTA from "@/components/new-home/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Best Child Development Centre in Vijayawada | Meditron CDC",
  description:
    "Meditron CDC is Vijayawada\u2019s best child development centre \u2014 speech therapy, physiotherapy, occupational therapy and sensory integration for Autism, ADHD, Cerebral Palsy, and Down Syndrome. Free first assessment.",
  alternates: {
    canonical: "https://meditroncdc.com",
  },
  openGraph: {
    title: "Best Child Development Centre in Vijayawada | Meditron CDC",
    description:
      "Speech therapy, physiotherapy and sensory integration for Autism, ADHD, Cerebral Palsy and Down Syndrome \u2014 Vijayawada, Andhra Pradesh. Free first assessment.",
    url: "https://meditroncdc.com",
    images: [
      {
        url: "/images/Meditron-CDC-27-Images/27-Social-Share.jpg",
        width: 1200,
        height: 630,
        alt: "Meditron Child Development Centre \u2014 Best therapy centre in Vijayawada",
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
      },
    },
  ],
};

export default function NewHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[var(--color-nh-cream)]">
        {/* 1. Hero — The Question */}
        <HeroSection />
        {/* 2. Checklist — The Question, made specific */}
        <ChecklistSection />
        {/* 3. Conditions — The Explanation */}
        <ConditionsSection />
        {/* 4. Solution — One place, one plan */}
        <SolutionSection />
        {/* 5. Method — Step by step + Doctor's letter */}
        <MethodSection />
        {/* 6. Proof — Testimonials + YouTube */}
        <ProofSection />
        {/* 7. Final CTA */}
        <FinalCTASection />
      </main>
      {/* Sticky mobile bar */}
      <NewHomeMobileStickyCTA />
    </>
  );
}
