import Image from "next/image";
import Reveal from "@/components/mobile/Reveal";
import { IconWhatsApp } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

const faces = [
  { src: "/images/About/1.png", alt: "Parent in the Meditron circle" },
  { src: "/images/About/2.png", alt: "Parent in the Meditron circle" },
  { src: "/images/Mother obsvering/2.png", alt: "Parent in the Meditron circle" },
];

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to join the parents' circle."
)}`;

/** Mobile-only parent community section. */
export default function MobileParentCircle() {
  return (
    <section className="md:hidden bg-[#fef6f0] px-5 py-9" aria-label="Parents' circle">
      <Reveal className="text-center">
        <span className="font-heading text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-accent">
          Amma&apos;s circle
        </span>
        <h2 className="mt-2 font-heading text-[1.55rem] font-extrabold leading-tight text-confident-navy">
          You are not the only mother asking this
        </h2>
        <p className="mt-2.5 font-serif text-[0.9rem] leading-[1.7] text-[#8a7a72]">
          A private WhatsApp circle of 400+ parents in Andhra — questions
          answered by our therapists every Sunday evening.
        </p>

        <div className="mt-4 flex justify-center">
          <div className="flex">
            {faces.map((f, i) => (
              <span
                key={f.src}
                className={`relative block h-10 w-10 overflow-hidden rounded-full border-[2.5px] border-[#fef6f0] ${
                  i > 0 ? "-ml-3" : ""
                }`}
              >
                <Image src={f.src} alt={f.alt} fill sizes="40px" className="object-cover" />
              </span>
            ))}
            <span className="-ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full border-[2.5px] border-[#fef6f0] bg-primary font-heading text-[0.72rem] font-extrabold text-white">
              +400
            </span>
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 font-heading text-[0.9rem] font-extrabold text-white"
        >
          <IconWhatsApp className="h-[18px] w-[18px] shrink-0" />
          Join the parents&apos; circle
        </a>
      </Reveal>
    </section>
  );
}
