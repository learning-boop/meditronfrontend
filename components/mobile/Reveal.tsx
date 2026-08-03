"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper for the mobile (Muggu) sections.
 * Desktop never mounts these sections, so desktop motion is unaffected.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 0.68, 0.28, 1] }}
    >
      {children}
    </motion.div>
  );
}
