import Image from "next/image";

// Using 3 of the 4 provided Vimeo videos
// ?background=1 = silent autoplay loop, no controls — plays exactly like a video element
const videos = [
  { id: "1210464722", label: "Occupational Therapy" },
  { id: "1210464721", label: "Speech Therapy" },
  { id: "1210464720", label: "Physiotherapy" },
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
  return (
    <section className="py-20 bg-clean-neutral overflow-hidden" aria-labelledby="therapies-heading">
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

      {/* Infinite sliding strip — desktop only */}
      <div
        className="hidden md:flex animate-marquee-videos"
        style={{ width: "max-content" }}
        aria-hidden="true"
      >
        {STRIP.map((video, i) => (
          <div
            key={`${video.id}-${i}`}
            // Same proportions as the original TherapiesSection cards
            className="shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] mr-4 sm:mr-5 rounded-[2.5rem] overflow-hidden relative"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Vimeo background player — silent, autoplay, looping, no controls */}
            <iframe
              src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0`}
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              allow="autoplay; fullscreen; picture-in-picture"
              title={`Meditron ${video.label} session`}
            />
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
