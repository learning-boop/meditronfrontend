import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
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

/*
 * New emotional landing page (review build).
 * Kept out of search until the client approves it to replace the homepage —
 * at that point remove the `robots` block and move this page to `/`.
 */
export const metadata: Metadata = {
  title: "Worried about your child? Talk to our doctor | Meditron CDC",
  description:
    "Not talking yet, not looking at you, can't sit still? It has a reason, and it can be helped. Talk to Dr. Sirisha at Meditron Child Development Centre, Vijayawada. First visit free.",
  alternates: { canonical: "https://meditroncdc.com/landing" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "You've noticed something. Let's understand it, together.",
    description: "Talk to Dr. Sirisha at Meditron, Vijayawada. The first visit is free.",
    url: "https://meditroncdc.com/landing",
    images: [{ url: "/images/home-v2/hero-desktop-1200.webp", width: 1200, height: 675, alt: "A mother watching her son play with wooden blocks" }],
  },
};

export default function LandingPage() {
  return (
    <ConcernsProvider>
      <IntroSplash />
      <LandingHeader />
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
