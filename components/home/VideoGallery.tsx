"use client";

import { useState } from "react";

const videos = [
  { id: "2rT9HxDzpHs", title: "Shape and Colour Matching Activity for Kids" },
  { id: "I-r--1TTvHY", title: "Proprioceptive Activities for Kids" },
  { id: "LWv9ineHP9Q", title: "Fine Motor Skills Activity for Kids" },
  { id: "VmMG0D_MrE0", title: "Proprioceptive Integration for Children" },
  { id: "WLYKcrbdDNg", title: "Vestibular Integration" },
  { id: "AZ3zGA7bNQQ", title: "Gustatory Integration" },
  { id: "2QVpNk6KqII", title: "Auditory Integration" },
  { id: "xdoRlyKHIG8", title: "Olfactory Integration" },
  { id: "Q3HxvYgxIC0", title: "Visual Integration" },
  { id: "mxrSsfTzfi4", title: "Interception Integration" },
  { id: "LqaxEk7BZQU", title: "Tactile Integration" },
  { id: "sjCK_dCFmSM", title: "What Are Sensory Integrations?" },
  { id: "oVn4A0PfXOA", title: "What Is Autism? – Video 1" },
  { id: "Csipg8oqd5k", title: "What Is Autism? – Video 2" },
  { id: "-XaPOHU8hNQ", title: "Visual Tracking, Focus, Attention and Eye Contact" },
  { id: "kDFf9qAAhRI", title: "Early Support for Child Development" },
  { id: "6N6HXhiq-0g", title: "Therapy Ball Activities" },
  { id: "EIIsg35936k", title: "Book Ordering Video" },
  { id: "_dthpta6X6g", title: "Online Therapy Anytime and Anywhere" },
  { id: "V2hyG_w2fPo", title: "Vibration Plate for Children" },
  { id: "PbsG-Xwhwas", title: "Little Steps, Big Progress" },
  { id: "Tt-ZaAynfuw", title: "Inside the Occupational Therapy Room" },
  { id: "G7sxNOARDoo", title: "Pre-Writing and Finger-Grip Skills" },
  { id: "ZGOjPPxNn5M", title: "Every Child Has a Superpower" },
  { id: "3qWnF4Tm1EY", title: "Child Therapy Centre" },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-black">
      {/* 16:9 container */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full text-left"
            aria-label={`Play: ${title}`}
          >
            {/* Thumbnail — scales on hover */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Bottom gradient overlay with title */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-14 pb-4">
              <p className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow">
                {title}
              </p>
            </div>

            {/* Subtle top vignette */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/30 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-2xl ring-4 ring-white/20 group-hover:ring-white/40">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-white ml-1"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <section
      className="bg-confident-navy py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="videos-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-[0.22em]">
            <span className="block w-8 h-px bg-accent/50" />
            Watch &amp; Learn
            <span className="block w-8 h-px bg-accent/50" />
          </span>
          <h2
            id="videos-heading"
            className="mt-4 text-2xl sm:text-3xl font-extrabold text-white"
          >
            Therapy Insights from Our Team
          </h2>
          <p className="mt-3 text-primary-light/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Short, practical videos from the Meditron team in Vijayawada — covering
            therapy techniques, child development, and what happens inside our sessions.
          </p>
        </div>

        {/* Video grid — 1 col mobile, 2 sm, 3 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v) => (
            <VideoCard key={v.id} id={v.id} title={v.title} />
          ))}
        </div>

        {/* YouTube channel link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/channel/UCjywEo5ZZMmwJVTbcK6JFCQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold px-7 py-3.5 rounded-2xl text-sm transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            See All Videos on YouTube
          </a>
        </div>

      </div>
    </section>
  );
}
