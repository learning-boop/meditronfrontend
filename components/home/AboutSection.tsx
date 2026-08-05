import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const highlights = [
  { number: "8+", label: "Years of experience" },
  { number: "500+", label: "Children guided" },
  { number: "4", label: "Specialist therapies" },
];

export default function AboutSection() {
  return (
    <section className="bg-cream py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── Left: 3 images ── */}
          <div className="grid grid-cols-2 gap-3">
            {/* Large top image spanning both columns */}
            <div className="col-span-2 relative h-60 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/About/1.png"
                alt="Meditron therapist in a one-on-one session with a child in Vijayawada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Two smaller images below */}
            <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/About/2.png"
                alt="Family consultation at Meditron Child Development Centre, Vijayawada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/Mother obsvering/1.png"
                alt="Mother watching her child's therapy session at Meditron"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* ── Right: Text content ── */}
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              About Us
            </span>

            <h2
              id="about-heading"
              className="mt-3 text-confident-navy font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight"
            >
              Child Development
              <span className="text-primary block mt-1">
                Center in Vijayawada
              </span>
            </h2>

            <p className="mt-5 text-dusty-blue text-base leading-relaxed">
              Meditron is Vijayawada&apos;s dedicated child development centre,
              founded with one belief — every child deserves a path forward, no
              matter where they are starting from.
            </p>

            <p className="mt-4 text-dusty-blue text-base leading-relaxed">
              We work with children living with Autism, ADHD, Cerebral Palsy, and
              Down Syndrome, offering speech therapy, occupational therapy, and
              physiotherapy under one roof — by specialists who speak Telugu,
              Hindi, and English, and who sit with families the way family does.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-primary-light/60 rounded-2xl px-4 py-5 text-center"
                >
                  <p className="text-primary font-extrabold text-2xl sm:text-3xl leading-none">
                    {h.number}
                  </p>
                  <p className="text-muted-navy text-xs sm:text-sm font-semibold mt-1.5 leading-snug">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base hover:gap-3 transition-all duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors shrink-0">
                <ArrowRight
                  className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
              Learn more about us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
