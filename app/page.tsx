import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ConditionsSection from "@/components/home/ConditionsSection";
import TherapiesSection from "@/components/home/TherapiesSection";
import WhyMeditron from "@/components/home/WhyMeditron";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";
import InstagramFeed from "@/components/home/InstagramFeed";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meditron Child Development Centre | Vijayawada",
  description:
    "Meditron is Vijayawada's trusted child development centre, offering expert speech, occupational, and physiotherapy for Autism, ADHD, Cerebral Palsy, and Down Syndrome.",
  openGraph: {
    title: "Meditron Child Development Centre | Vijayawada",
    description:
      "Expert therapy for children with Autism, ADHD, Cerebral Palsy, and Down Syndrome in Vijayawada, Andhra Pradesh.",
    url: "https://meditronvijayawada.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://meditronvijayawada.com/#clinic",
      name: NAP.name,
      url: "https://meditronvijayawada.com",
      telephone: NAP.phone,
      email: NAP.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 12, MG Road, Governorpet",
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
      ],
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
        {/* 1. Hero */}
        <Hero />
        {/* 2. Trust bar — stats strip */}
        <TrustBar />
        {/* 3. Conditions We Treat */}
        <ConditionsSection />
        {/* 4. Our Therapies */}
        <TherapiesSection />
        {/* 5. Why Meditron */}
        <WhyMeditron />
        {/* 6. Video section */}
        {/* <VideoSection /> */}
        {/* 7. Success Stories / Testimonials */}
        <Testimonials />
        {/* 8. Blog preview */}
        <BlogPreview />
        {/* 9. Final CTA */}
        <FinalCTA />
        {/* 10. Instagram feed */}
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
