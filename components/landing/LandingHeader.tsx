import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./content";

export default function LandingHeader() {
  return (
    <header className="relative z-20 bg-[var(--lp-cream)] px-5 md:px-8">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between py-3 md:py-4">
        <Link href="/" aria-label="Meditron Child Development Centre, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-v2/meditron-logo-440.webp"
            alt="Meditron Child Development Centre"
            width={440}
            height={139}
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <a
          href={PHONE_TEL}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 text-[0.9375rem] font-semibold text-[var(--lp-teal)] hover:bg-[var(--lp-sand)]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only md:not-sr-only">{PHONE_DISPLAY}</span>
          <span className="md:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
