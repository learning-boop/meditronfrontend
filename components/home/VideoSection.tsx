"use client";

import { useState, useRef } from "react";
import { PlayCircle } from "lucide-react";

// Replace VIDEO_ID with the actual YouTube video ID when available
const VIDEO_ID = "dQw4w9WgXcQ";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-primary-dark"
      aria-labelledby="video-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">
          Inside Meditron
        </span>
        <h2
          id="video-heading"
          className="mt-3 text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          The moments that matter
        </h2>
        <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          The first word. The first step. The first time they look up and smile.
          This is what we work for — and what you came here hoping to see.
        </p>

        {/* Video player */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/40">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Meditron Child Development Centre — a day in our therapy sessions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail placeholder — replace with actual thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/90" />

              {/* Play button */}
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 group"
              >
                <span className="w-20 h-20 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 transition-all group-hover:scale-110">
                  <PlayCircle
                    className="w-10 h-10 text-white"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-white/80 text-sm font-medium">
                  Watch Our Story
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
