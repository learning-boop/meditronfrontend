import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/mobile/Reveal";
import { NAP } from "@/lib/data";

const shots = [
  {
    src: "/images/meditron-child-therapy-center-services-vijayawada.jpg",
    alt: "Therapy rooms at Meditron Child Development Centre, Vijayawada",
    className: "row-span-2",
  },
  {
    src: "/images/meditron-online-therapy-consultation.jpg",
    alt: "Consultation room at Meditron, Vijayawada",
    className: "",
  },
  {
    src: "/images/autism-care-therapy-meditron-vijayawada.jpg",
    alt: "Sensory play area at Meditron, Vijayawada",
    className: "",
  },
];

/** Mobile-only centre tour. */
export default function MobileCentreTour() {
  return (
    <section className="md:hidden bg-primary-light px-5 py-9" aria-label="Centre tour">
      <Reveal>
        <span className="font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-primary">
          Centre tour
        </span>
        <h2 className="mt-2 font-heading text-[1.55rem] font-extrabold leading-tight text-confident-navy">
          See the place before you come
        </h2>
        <p className="mt-1.5 font-[family-name:var(--font-telugu)] text-[0.9rem] text-[#46706d]">
          MG రోడ్, గవర్నర్‌పేట — ఒక్కసారి చూసి వెళ్ళండి.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-4">
        <div className="grid grid-cols-[2fr_1fr] grid-rows-[100px_100px] gap-2">
          {shots.map((s) => (
            <div
              key={s.src}
              className={`relative overflow-hidden rounded-[1.15rem] ${s.className}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.14} className="mt-3.5">
        <a
          href={NAP.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2.5 rounded-[1.15rem] bg-white px-4 py-3.5"
        >
          <span className="block">
            <span className="block font-heading text-[0.8rem] font-extrabold text-confident-navy">
              Plot 12, MG Road, Governorpet
            </span>
            <span className="mt-0.5 block text-[0.72rem] text-dusty-blue">
              Vijayawada 520002 · {NAP.hours}
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border-[1.5px] border-primary/30 px-2.5 py-2 font-heading text-[0.72rem] font-extrabold text-primary">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Map
          </span>
        </a>
      </Reveal>
    </section>
  );
}
