import Image from "next/image";
import Link from "next/link";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const WA_URL =
  "https://wa.me/919558234569?text=Hi%20Meditron%2C%20I%27d%20like%20to%20book%20a%20free%20assessment%20for%20my%20child.";

const MAP_URL =
  "https://www.google.com/maps/place/Meditron+Child+Development+Centre/@16.5174296,80.6381530,17z";

export default function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden min-h-[70vh] flex items-center"
    >
      {/* Desktop background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={`${IMG_DIR}/25-Final-CTA-Desktop.jpg`}
          alt="Meditron centre — warm therapy environment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nh-teal)]/90 via-[var(--color-nh-teal)]/70 to-transparent" />
      </div>

      {/* Mobile background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={`${IMG_DIR}/26-Final-CTA-Mobile.jpg`}
          alt="Meditron centre — warm therapy environment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-nh-teal)]/85 via-[var(--color-nh-teal)]/70 to-[var(--color-nh-teal)]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-8 py-20 md:py-28 max-w-2xl">
        <h2
          id="final-cta-heading"
          className="font-[var(--font-nh-serif)] text-white text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2]"
        >
          You asked why.
          <br />
          Now let&apos;s answer it together.
        </h2>
        <p className="mt-4 text-white/80 text-base md:text-lg font-[var(--font-nh-sans)] leading-relaxed">
          Free first visit. No pressure, no jargon, no judgement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--color-nh-terracotta)] hover:bg-[#c4674d] text-white font-semibold font-[var(--font-nh-sans)] px-8 py-4 rounded-2xl transition-colors shadow-lg text-base"
          >
            WhatsApp us now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-[var(--color-nh-cream)] text-[var(--color-nh-cream)] hover:bg-[var(--color-nh-cream)] hover:text-[var(--color-nh-teal)] font-semibold font-[var(--font-nh-sans)] px-8 py-4 rounded-2xl transition-colors text-base"
          >
            Book appointment
          </Link>
        </div>

        <p className="mt-8 text-white/60 text-xs font-[var(--font-nh-sans)] leading-relaxed">
          Mon&ndash;Sat 9 am &ndash; 6 pm &middot;{" "}
          <a href="tel:+919558234569" className="underline hover:text-white/80">
            +91 95582 34569
          </a>
          <br />
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">
            Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram, Vijayawada 520002
          </a>
        </p>
      </div>
    </section>
  );
}
