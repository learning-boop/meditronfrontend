"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import TimedPopup from "@/components/TimedPopup";
import Footer from "@/components/Footer";
import SocialPeekTabs from "@/components/SocialPeekTabs";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  // The /landing page has its own calm header and sticky bar: no marquee,
  // popup or side tabs interrupting a worried parent.
  const isLanding = pathname?.startsWith("/landing");
  const showChrome = !isAdmin && !isLanding;

  return (
    <>
      {showChrome && <AnnouncementBar />}
      {showChrome && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
      {showChrome && <TimedPopup />}
      {showChrome && <SocialPeekTabs />}
    </>
  );
}
