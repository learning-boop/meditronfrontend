"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const IMG_DIR = "/images/Meditron-CDC-27-Images";

const WA_BASE =
  "https://wa.me/919558234569?text=";

const tiles = [
  { img: `${IMG_DIR}/05-Spot-No-Words-by-Age-2.jpg`, label: "No words by age 2", alt: "Toddler trying to speak but struggling with words" },
  { img: `${IMG_DIR}/06-Spot-Doesnt-Respond-to-Name.jpg`, label: "Doesn\u2019t respond to name", alt: "Child not turning when their name is called" },
  { img: `${IMG_DIR}/07-Spot-Avoids-Eye-Contact.jpg`, label: "Avoids eye contact", alt: "Child looking away, avoiding eye contact with parent" },
  { img: `${IMG_DIR}/08-Spot-Not-Walking-by-18-Months.jpg`, label: "Not walking by 18 months", alt: "Toddler not walking, being supported by parent" },
  { img: `${IMG_DIR}/09-Spot-Cant-Hold-Pencil.jpg`, label: "Can\u2019t hold a pencil", alt: "Child struggling to grip a pencil properly" },
  { img: `${IMG_DIR}/10-Spot-Restless-at-School.jpg`, label: "Very restless at school", alt: "Restless child unable to focus in classroom" },
];

export default function ChecklistSection() {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(tiles.length).fill(false)
  );

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const count = checked.filter(Boolean).length;

  const waMessage = () => {
    const items = tiles
      .filter((_, i) => checked[i])
      .map((t) => `\u2022 ${t.label}`)
      .join("\n");
    return encodeURIComponent(
      `Hi Meditron, I\u2019d like to book a free assessment for my child.\n\nSigns I\u2019ve noticed:\n${items}`
    );
  };

  return (
    <section
      id="checklist"
      aria-labelledby="checklist-heading"
      className="bg-[var(--color-nh-cream)] py-16 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="checklist-heading"
          className="font-[var(--font-nh-serif)] text-[var(--color-nh-teal)] text-2xl md:text-4xl font-bold text-center leading-tight"
        >
          Your child can&apos;t explain this to you.
          <br className="hidden md:block" />{" "}
          That&apos;s why you&apos;re here.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 md:mt-14">
          {tiles.map((tile, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`relative group rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                checked[i]
                  ? "border-[var(--color-nh-sage)] shadow-md"
                  : "border-transparent shadow-sm hover:shadow-md"
              }`}
              aria-pressed={checked[i]}
            >
              {/* Image */}
              <div className="relative w-full">
                <Image
                  src={tile.img}
                  alt={tile.alt}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 45vw, 280px"
                />
                {/* Checkmark overlay */}
                {checked[i] && (
                  <div className="absolute inset-0 bg-[var(--color-nh-sage)]/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-nh-sage)] flex items-center justify-center">
                      <Check className="w-7 h-7 text-white" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </div>
              {/* Label */}
              <p className="p-3 text-sm md:text-base font-[var(--font-nh-sans)] text-[var(--color-nh-teal)] font-medium text-center">
                {tile.label}
              </p>
            </button>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-[var(--color-nh-ink)] text-xs font-[var(--font-nh-sans)] opacity-50 mt-6">
          Nothing here is a diagnosis &mdash; it only helps us understand your child before you arrive.
        </p>
      </div>

      {/* Sticky bottom counter (mobile) / inline (desktop) */}
      {count > 0 && (
        <div className="fixed md:static bottom-0 left-0 right-0 z-40 bg-white md:bg-transparent border-t md:border-t-0 border-[var(--color-nh-sage)]/20 px-5 py-4 md:py-0 md:mt-8 md:text-center shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:shadow-none">
          <div className="flex md:inline-flex items-center justify-between md:justify-center gap-4">
            <span className="text-[var(--color-nh-teal)] font-[var(--font-nh-sans)] font-bold text-sm">
              {count} sign{count !== 1 ? "s" : ""} noticed
            </span>
            <a
              href={`${WA_BASE}${waMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-nh-terracotta)] hover:bg-[#c4674d] text-white font-semibold font-[var(--font-nh-sans)] px-6 py-3 rounded-2xl transition-colors text-sm"
            >
              Send this to a therapist
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
