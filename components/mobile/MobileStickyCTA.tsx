"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { IconWhatsApp } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book a free assessment for my child."
)}`;

/**
 * Mobile-only sticky action bar. Appears after the hero so it never
 * competes with the hero CTAs. Hidden from md upward.
 */
export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-[1.25rem] border border-primary/10 bg-white/90 p-2 shadow-[0_14px_30px_-14px_rgba(42,58,87,0.5)] backdrop-blur-md transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] font-heading text-[0.82rem] font-extrabold text-white"
      >
        <IconWhatsApp className="h-4 w-4 shrink-0" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary font-heading text-[0.82rem] font-extrabold text-white"
      >
        <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        Book free visit
      </Link>
    </div>
  );
}
