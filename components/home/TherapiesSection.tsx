"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Using 3 Vimeo videos — lazy-loaded only when the strip enters the viewport
const videos = [
  { id: "1210464722", label: "Occupational Therapy", poster: "/images/Theorapies/2.png" },
  { id: "1210464721", label: "Speech Therapy", poster: "/images/Theorapies/1.png" },
  { id: "1210464720", label: "Physiotherapy", poster: "/images/Theorapies/3.png" },
];

// Two identical copies so translateX(-50%) loops perfectly with no gap or jump
const STRIP = [...videos, ...videos];

const therapyCards = [
  {
    label: "Speech Therapy",
    image: "/images/Theorapies/1.png",
    alt: "Speech and language therapy session at Meditron — child learning to communicate with therapist",
  },
  {
    label: "Occupational Therapy",
    image: "/images/Theorapies/2.png",
    alt: "Occupational therapy session at Meditron — child building independence and daily living skills",
  },
  {
    label: "Physiotherapy",
    image: "/images/Theorapies/3.png",
    alt: "Physiotherapy session at Meditron — child building movement, strength and balance",
  },
];

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
              /* Vimeo background player — only loaded when strip is in viewport */
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                title={`Meditron ${video.label} session`}
              />
            ) : (
              /* Poster image shown while Vimeo is not yet loaded */
              <Image
                src={video.poster}
                alt={`${video.label} session at Meditron`}
                fill
                className="object-cover opacity-80"
                sizes="440px"
              />
            )}
            {/* Label overlay on poster */}
            {!iframesActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-sm font-semibold">{video.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Static therapy cards — branded imagery for each programme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {therapyCards.map((card) => (
            <div
              key={card.label}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
