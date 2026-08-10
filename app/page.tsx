import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutSection from "@/components/home/AboutSection";
import DoctorInterview from "@/components/home/DoctorInterview";
import ConditionsSection from "@/components/home/ConditionsSection";
import TherapiesSection from "@/components/home/TherapiesSection";
import WhyMeditron from "@/components/home/WhyMeditron";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ResourceHub from "@/components/home/ResourceHub";
import FinalCTA from "@/components/home/FinalCTA";
import InstagramFeed from "@/components/home/InstagramFeed";
/* ── Muggu: mobile-only sections (all md:hidden) ── */
import MobileReassurance from "@/components/mobile/MobileReassurance";
import MobileDelayChecker from "@/components/mobile/MobileDelayChecker";
import MobileReviews from "@/components/mobile/MobileReviews";
import MobileCentreTour from "@/components/mobile/MobileCentreTour";
import MobileParentCircle from "@/components/mobile/MobileParentCircle";
import MobileStickyCTA from "@/components/mobile/MobileStickyCTA";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Child Development Centre in Vijayawada | Meditron CDC",
  description:
    "Meditron CDC is Vijayawada's best child development centre — speech therapy, physiotherapy, occupational therapy and sensory integration for Autism, ADHD, Cerebral Palsy, and Down Syndrome. Free first assessment.",
  alternates: {
    canonical: "https://meditroncdc.com",
  },
  openGraph: {
    title: "Best Child Development Centre in Vijayawada | Meditron CDC",
    description:
      "Speech therapy, physiotherapy and sensory integration for Autism, ADHD, Cerebral Palsy and Down Syndrome — Vijayawada, Andhra Pradesh. Free first assessment.",
    url: "https://meditroncdc.com",
    images: [
      {
        url: "/images/og-meditron.jpg",
        width: 1200,
        height: 630,
        alt: "Meditron Child Development Centre — Best therapy centre in Vijayawada",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* 1. Hero — Muggu on mobile, banner slideshow from md up */}
        <Hero />
        {/* 1b. Muggu reassurance + stats (mobile only) */}
        <MobileReassurance />
        {/* 2. Trust bar — unchanged */}
        <TrustBar />
        {/* 2b. About Us — new section after slider */}
        <AboutSection />
        {/* 2c. Doctor media interview — placed right after About */}
        {/* <DoctorInterview /> */}
        {/* 3. Conditions We Treat — unchanged */}
        <ConditionsSection />
        {/* 3b. Is it just a delay? (mobile only) */}
        <MobileDelayChecker />
        {/* 4. Our Therapies — unchanged */}
        <TherapiesSection />
        {/* 5. Why Meditron — unchanged */}
        <WhyMeditron />
        {/* 6. Success Stories / Testimonials — unchanged */}
        <Testimonials />
        {/* 6b. Google reviews (mobile only) */}
        <MobileReviews />
        {/* 6c. Centre tour (mobile only) */}
        <MobileCentreTour />
        {/* 7. Blog preview — unchanged */}
        <BlogPreview />
        {/* 7b. Amma's circle (mobile only) */}
        <MobileParentCircle />
        {/* 7c. Resource hub — Healing Stories, For Parents, International */}
        <ResourceHub />
        {/* 8. Final CTA — unchanged */}
        <FinalCTA />
        {/* 9. Instagram feed — unchanged */}
        <InstagramFeed />
      </main>
      {/* Mobile-only sticky action bar */}
      <MobileStickyCTA />
    </>
  );
}
