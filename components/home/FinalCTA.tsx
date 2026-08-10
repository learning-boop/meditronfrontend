import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { NAP } from "@/lib/data";

export default function FinalCTA() {
  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    "Hi Meditron, I'd like to book a free consultation for my child."
  )}`;

  return (
    <section className="py-12 bg-primary" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          You&apos;ve waited long enough.
          <span className="block text-accent mt-1">Let&apos;s begin.</span>
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10">
          The first call is the hardest one. After that, you&apos;ll wonder why
          you waited. Book a free assessment — no pressure, no jargon, no
          judgement. Just a conversation about your child.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-base"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            WhatsApp Us Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-base"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Book Appointment
          </Link>
        </div>
        <p className="text-white/50 text-sm mt-8">
          {NAP.hours} &nbsp;·&nbsp; {NAP.phone}
        </p>
      </div>
    </section>
  );
}
