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
      className={`md:hidden fixed inset-x-4 bottom-4 z-50 flex gap-2 rounded-2xl border border-primary/10 bg-white/95 p-1.5 shadow-[0_8px_24px_-10px_rgba(42,58,87,0.45)] backdrop-blur-md transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] font-heading text-[0.75rem] font-extrabold text-white"
      >
        <IconWhatsApp className="h-3.5 w-3.5 shrink-0" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary font-heading text-[0.75rem] font-extrabold text-white"
      >
        <CalendarCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Book Free Visit
      </Link>
    </div>
  );
}
