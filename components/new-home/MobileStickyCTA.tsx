"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";

const WA_URL =
  "https://wa.me/919558234569?text=Hi%20Meditron%2C%20I%27d%20like%20to%20book%20a%20free%20assessment%20for%20my%20child.";

export default function NewHomeMobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[var(--color-nh-sage)]/20 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3 px-4 py-3">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold font-[var(--font-nh-sans)] py-3 rounded-xl text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-nh-terracotta)] text-white font-semibold font-[var(--font-nh-sans)] py-3 rounded-xl text-sm"
        >
          <CalendarCheck className="w-4 h-4" />
          Book free visit
        </Link>
      </div>
    </div>
  );
}
