import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import VideoGallery from "@/components/home/VideoGallery";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Success Stories | Meditron Child Development Centre Vijayawada",
  description:
    "Watch real therapy sessions and child development videos from Meditron in Vijayawada — covering Autism, ADHD, Sensory Integration, Speech Therapy, and more.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book an assessment for my child."
)}`;

export default function SuccessStoriesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-healing-green py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Meditron Vijayawada
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            See What Happens Inside<br />
            <span className="text-accent">Our Therapy Sessions</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Watch our therapists in action — real techniques, real children, real progress.
            Every video is a window into what we do at Meditron every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Video gallery ── */}
      <VideoGallery />

      {/* ── CTA ── */}
      <section className="bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-white/60 font-semibold text-xs uppercase tracking-widest">
            Ready to Begin?
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Your child&apos;s journey starts here.
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            Everything you see in these videos happens at our centre in Vijayawada.
            Book a free assessment and meet the team behind the results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              WhatsApp Meditron
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
