import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Meditron Child Development Centre, Vijayawada",
  description:
    "See inside Meditron — therapy sessions, our centre, and the children and families we work with every day in Vijayawada.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book a free assessment for my child."
)}`;

const photos = [
  {
    src: "/images/About/1.png",
    alt: "Mother and child in consultation with a Meditron therapist",
    span: "col-span-2",
  },
  {
    src: "/images/About/2.png",
    alt: "Family meeting with a Meditron specialist for child assessment",
    span: "",
  },
  {
    src: "/images/Mother obsvering/1.png",
    alt: "Mother watching her child's physiotherapy session at Meditron",
    span: "",
  },
  {
    src: "/images/Mother obsvering/2.png",
    alt: "Parents observing their child's therapy progress at Meditron",
    span: "",
  },
  {
    src: "/images/Conditions/1.png",
    alt: "Child receiving autism therapy at Meditron, Vijayawada",
    span: "",
  },
  {
    src: "/images/Conditions/2.png",
    alt: "ADHD therapy session for a child at Meditron Centre",
    span: "",
  },
  {
    src: "/images/Conditions/3.png",
    alt: "Physiotherapy for a child with cerebral palsy at Meditron",
    span: "",
  },
  {
    src: "/images/Conditions/4.png",
    alt: "Down syndrome therapy and support at Meditron, Vijayawada",
    span: "",
  },
  {
    src: "/images/Theorapies/1.png",
    alt: "Speech therapy session at Meditron Child Development Centre",
    span: "",
  },
  {
    src: "/images/Theorapies/2.png",
    alt: "Occupational therapy session at Meditron",
    span: "",
  },
  {
    src: "/images/Theorapies/3.png",
    alt: "Physiotherapy session at Meditron, Vijayawada",
    span: "col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* ── Page header ── */}
      <div className="bg-primary-dark px-4 sm:px-6 lg:px-8 py-14 text-center">
        <span className="text-accent/80 text-xs font-bold uppercase tracking-[0.2em]">
          Our Centre
        </span>
        <h1 className="mt-3 text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Gallery
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto text-base leading-relaxed">
          A glimpse into the sessions, spaces, and moments that happen at
          Meditron every day.
        </p>
      </div>

      {/* ── Photo grid ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative rounded-2xl overflow-hidden ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-primary-light px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-confident-navy font-extrabold text-2xl sm:text-3xl mb-3">
          Would you like to visit us?
        </h2>
        <p className="text-dusty-blue max-w-lg mx-auto mb-8">
          We&apos;d love to show you around. Book a free assessment and see the
          centre for yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-md"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Book Free Assessment
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-md"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  );
}
