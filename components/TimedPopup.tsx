"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, CalendarCheck, MessageCircle, HeartHandshake } from "lucide-react";
import { NAP } from "@/lib/data";

const DELAY_MS = 60_000; // 1 minute of active time on site
const SESSION_KEY = "meditron-popup-seen";

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I've been reading about your centre and would love to speak with someone about my child."
)}`;

export default function TimedPopup() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Don't show again if already seen this session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    timerRef.current = setTimeout(() => setVisible(true), DELAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (!visible) return null;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-popup-in"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-heading"
    >
      {/* ── Card — clicks don't close ── */}
      <div
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="px-7 pt-7 pb-8 sm:px-8 sm:pt-8">
          {/* Dismiss */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-5 right-5 text-slate-300 hover:text-slate-500 transition-colors p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <HeartHandshake className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="popup-heading"
            className="text-slate-800 font-extrabold text-xl sm:text-2xl leading-tight mb-3"
          >
            Still reading? That tells us something.
          </h2>

          {/* Body */}
          <p className="text-slate-500 text-sm sm:text-[0.95rem] leading-[1.8] mb-6">
            Parents who take this much time to look around are parents who truly
            care. You don&apos;t have to figure this out alone — let&apos;s have
            a real conversation about your child. No paperwork, no pressure.
            Just warm, honest guidance from our specialists.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust note */}
          <p className="text-center text-slate-400 text-[0.7rem] mt-5 tracking-wide">
            Free &middot; No commitment &middot; {NAP.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
