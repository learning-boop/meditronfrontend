"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Hand,
  Activity,
  Brain,
  Sparkles,
  Heart,
  Eye,
  Smile,
  BookOpen,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { therapies } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Hand,
  Activity,
  Brain,
  Sparkles,
  Heart,
  Eye,
  Smile,
  BookOpen,
  GraduationCap,
};

// Card accent colours cycling through the brand palette
const cardAccents = [
  { bg: "bg-primary/10", icon: "text-primary", border: "border-primary/20" },
  { bg: "bg-accent/10", icon: "text-accent", border: "border-accent/20" },
  { bg: "bg-healing-green/15", icon: "text-healing-green", border: "border-healing-green/20" },
  { bg: "bg-gold/15", icon: "text-gold", border: "border-gold/20" },
  { bg: "bg-dusty-blue/15", icon: "text-dusty-blue", border: "border-dusty-blue/20" },
];

// Using 3 Vimeo videos — lazy-loaded only when the strip enters the viewport
const videos = [
  { id: "1210464722", label: "Occupational Therapy", poster: "/images/Theorapies/2.png" },
  { id: "1210464721", label: "Speech Therapy", poster: "/images/Theorapies/1.png" },
  { id: "1210464720", label: "Physiotherapy", poster: "/images/Theorapies/3.png" },
];

// Two identical copies so translateX(-50%) loops perfectly with no gap or jump
const STRIP = [...videos, ...videos];

export default function TherapiesSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [iframesActive, setIframesActive] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframesActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-clean-neutral overflow-hidden" aria-labelledby="therapies-heading">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">
          Our Services
        </span>
        <h2
          id="therapies-heading"
          className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy"
        >
          Therapy Programmes We Offer
        </h2>
        <p className="mt-4 text-dusty-blue max-w-xl mx-auto leading-relaxed">
          Each programme is tailored to the individual child and led by
          certified specialists with years of clinical experience.
        </p>
      </div>

      {/* Infinite sliding strip — desktop only, iframes lazy-loaded */}
      <div
        ref={stripRef}
        className="hidden md:flex animate-marquee-videos"
        style={{ width: "max-content" }}
        aria-hidden="true"
      >
        {STRIP.map((video, i) => (
          <div
            key={`${video.id}-${i}`}
            className="shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] mr-4 sm:mr-5 rounded-[2.5rem] overflow-hidden relative bg-primary-dark"
            style={{ aspectRatio: "9/16" }}
          >
            {iframesActive ? (
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                title={`Meditron ${video.label} session`}
              />
            ) : (
              <Image
                src={video.poster}
                alt={`${video.label} session at Meditron`}
                fill
                className="object-cover opacity-80"
                sizes="440px"
              />
            )}
            {!iframesActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-semibold">{video.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* All 10 therapy cards — icon grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {therapies.map((therapy, i) => {
            const Icon = iconMap[therapy.icon];
            const accent = cardAccents[i % cardAccents.length];
            return (
              <div
                key={therapy.slug}
                className={`flex flex-col items-center text-center gap-3 p-5 rounded-2xl border ${accent.border} ${accent.bg} hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`p-3 rounded-xl bg-white/70 shadow-sm`}>
                  {Icon && <Icon className={`w-6 h-6 ${accent.icon}`} strokeWidth={1.8} />}
                </div>
                <span className="text-sm font-semibold text-confident-navy leading-snug">
                  {therapy.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
