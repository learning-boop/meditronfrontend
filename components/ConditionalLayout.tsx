"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/*
 * Every page follows the calm home-page design: the navbar and footer only.
 * The old scrolling announcement bar, timed popup and side social tabs
 * (AnnouncementBar, TimedPopup, SocialPeekTabs) are no longer shown anywhere;
 * their files are kept in components/ in case they are wanted again.
 */
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
