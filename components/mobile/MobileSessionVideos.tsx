"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/mobile/Reveal";

const clips = [
  {
    src: "/videos/therapy-ball-exercise-child-development.mp4",
    label: "Therapy ball · balance",
    big: true,
  },
  {
    src: "/videos/visual-tracking-exercise-meditron.mp4",
    label: "Visual tracking",
    big: false,
  },
  {
    src: "/videos/pre-writing-skills-occupational-therapy.mp4",
    label: "Pre-writing",
    big: false,
  },
];

function Clip({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  // Play only while on screen — keeps mobile data and battery honest.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-[1.15rem] ${className}`}>
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <span className="absolute bottom-2 left-2.5 font-heading text-[0.62rem] font-extrabold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
        {label}
      </span>
    </div>
  );
}

/** Mobile-only strip of real therapy footage. */
export default function MobileSessionVideos() {
  return (
    <section className="md:hidden bg-[#eaf5f4] px-5 py-9" aria-label="Inside our therapy rooms">
      <Reveal>
        <span className="font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-primary">
          Inside our rooms
        </span>
        <h2 className="mt-2 mb-3.5 font-heading text-[1.6rem] font-extrabold leading-tight text-confident-navy">
          Real sessions. Real children.
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid grid-cols-2 gap-2.5">
          <Clip {...clips[0]} className="row-span-2 h-[190px]" />
          <Clip {...clips[1]} className="h-[90px]" />
          <Clip {...clips[2]} className="h-[90px]" />
        </div>
      </Reveal>
    </section>
  );
}
