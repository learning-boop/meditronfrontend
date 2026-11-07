"use client";

import { useEffect, useRef, useState } from "react";

/** The page's single reveal: the growing-brain tree opens once when scrolled into view. */
export default function Bloom({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lp-bloom ${inView ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
