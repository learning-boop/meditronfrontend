"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import TimedPopup from "@/components/TimedPopup";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <AnnouncementBar />}
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <TimedPopup />}
    </>
  );
}
