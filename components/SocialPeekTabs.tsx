"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconInstagram, IconYouTube } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

// How many px remain visible in the resting (peeking) state.
// Sized to always show the full icon + its left padding.
const PEEK = 48;

const tabs = [
  {
    label: "Instagram",
    Icon: IconInstagram,
    href: NAP.socials.instagram,
    color: "#d67861", // brand accent (coral)
    delay: 0,
  },
  {
    label: "YouTube",
    Icon: IconYouTube,
    href: NAP.socials.youtube,
    color: "#2a8e8b", // brand primary (teal)
    delay: 0.11,
  },
];

export default function SocialPeekTabs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
     * Container sits at the right edge.
     * Mobile: just above the sticky CTA bar (~88px from bottom).
     * Desktop: vertically centred in viewport.
     */
    <div
      className="hidden md:flex fixed right-0 z-40 flex-col gap-3
                 md:top-1/2 md:-translate-y-1/2"
      aria-label="Follow us on social media"
    >
      <AnimatePresence>
        {visible &&
          tabs.map(({ label, Icon, href, color, delay }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Meditron on ${label}`}
              /*
               * Entrance: slides in from the right (x: 100% → peek position).
               * Resting: calc(100% - PEEK px) keeps exactly PEEK px visible.
               * Hover:   x: 0 — fully slides into view.
               * Exit:    retreats back off-screen.
               */
              initial={{ x: "100%" }}
              animate={{ x: `calc(100% - ${PEEK}px)` }}
              exit={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 28,
                delay,
              }}
              style={{ backgroundColor: color }}
              className="flex items-center gap-2.5 text-white
                         pl-2.5 pr-5 py-2.5
                         rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.18)]
                         font-heading font-bold text-sm whitespace-nowrap
                         select-none cursor-pointer"
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span>{label}</span>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
