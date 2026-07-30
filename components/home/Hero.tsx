import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ClipboardList } from "lucide-react";
import { NAP } from "@/lib/data";

export default function Hero() {
  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    "Hi Meditron, I'd like to book a free assessment for my child."
  )}`;

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >

      {/* ── Banner ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/dummybanner.png"
          alt="Meditron Child Development Centre — caring therapists with children in Vijayawada"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Gradient overlay — stronger on left so text pops ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"
      />

      {/* ── Left-aligned content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12 sm:py-24">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
            The care you give at home,
            <br />
            <span className="text-accent">we continue here.</span>
          </h1>

          {/* Subline */}
          <p className="text-sm sm:text-xl text-white/85 leading-relaxed mb-8 sm:mb-10">
            Expert therapy for Autism, ADHD, Cerebral Palsy &amp; Down Syndrome
            — with a mother&apos;s patience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-colors shadow-xl text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl transition-colors shadow-xl text-sm sm:text-base"
            >
              <ClipboardList className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
