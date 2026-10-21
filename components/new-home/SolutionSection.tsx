import Image from "next/image";
import Link from "next/link";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const WA_URL =
  "https://wa.me/919558234569?text=Hi%20Meditron%2C%20I%27d%20like%20to%20book%20a%20free%20assessment%20for%20my%20child.";

export default function SolutionSection() {
  return (
    <section
      aria-labelledby="solution-heading"
      className="relative overflow-hidden"
    >
      {/* Desktop background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={`${IMG_DIR}/19-Solution-One-Room-Desktop.jpg`}
          alt="Meditron therapy centre interior — one room, one plan"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Cream gradient overlay — left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nh-cream)] via-[var(--color-nh-cream)]/90 to-transparent" />
      </div>

      {/* Mobile background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={`${IMG_DIR}/20-Solution-One-Room-Mobile.jpg`}
          alt="Meditron therapy centre interior — one room, one plan"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Cream gradient overlay — top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-nh-cream)] via-[var(--color-nh-cream)]/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-8 py-20 md:py-32">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-nh-sage)] font-[var(--font-nh-sans)] font-semibold mb-4">
            One place. One plan.
          </p>
          <h2
            id="solution-heading"
            className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2]"
          >
            Speech, occupational, physio and sensory therapy &mdash; under one roof, in Telugu, with the same specialist every time.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-nh-terracotta)] hover:bg-[#c4674d] text-white font-semibold font-[var(--font-nh-sans)] px-8 py-4 rounded-2xl transition-colors shadow-lg text-base"
            >
              Book a free assessment
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[var(--color-nh-teal)] text-[var(--color-nh-teal)] hover:bg-[var(--color-nh-teal)] hover:text-white font-semibold font-[var(--font-nh-sans)] px-8 py-4 rounded-2xl transition-colors text-base"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
