"use client";

import { Phone } from "lucide-react";
import { useConcerns } from "./ConcernsContext";
import { PHONE_DISPLAY, PHONE_TEL } from "./content";

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.41-9.4 9.41m8-17.41A11.25 11.25 0 0 0 12.05.75C5.82.75.75 5.82.75 12.05c0 1.99.52 3.94 1.51 5.65L.65 23.25l5.68-1.49a11.3 11.3 0 0 0 5.71 1.46h.01c6.23 0 11.3-5.07 11.3-11.3 0-3.02-1.18-5.86-3.31-7.99" />
    </svg>
  );
}

/**
 * Primary action. Same name everywhere on the page: "Talk to the doctor on WhatsApp".
 * `tone="light"` is for the cream sections, `tone="dark"` for the night section.
 */
export function WhatsAppButton({
  tone = "light",
  label = "Talk to the doctor on WhatsApp",
  intent = "talk",
  size = "md",
  className = "",
}: {
  tone?: "light" | "dark";
  label?: string;
  intent?: "talk" | "online";
  size?: "md" | "sm";
  className?: string;
}) {
  const { waUrl } = useConcerns();
  const styles =
    tone === "light"
      ? "bg-[var(--lp-teal)] text-white hover:bg-[var(--lp-teal-deep)]"
      : "bg-[var(--lp-wa)] text-[var(--lp-night-ink)] hover:bg-[#3ee07d]";
  return (
    <a
      href={waUrl(intent)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-full pl-2 font-bold transition-colors ${
        size === "sm" ? "min-h-[48px] gap-2.5 pr-5 text-[0.9375rem]" : "min-h-[52px] gap-3 pr-6 text-[1.0625rem]"
      } ${styles} ${className}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${size === "sm" ? "h-8 w-8" : "h-9 w-9"} ${
          tone === "light" ? "bg-[var(--lp-wa)] text-white" : "bg-[var(--lp-night-ink)] text-[var(--lp-wa)]"
        }`}
      >
        <WhatsAppGlyph className="h-5 w-5" />
      </span>
      {label}
    </a>
  );
}

export function CallLink({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex min-h-[48px] items-center gap-2 rounded-full px-2 text-[1.0625rem] font-semibold underline decoration-1 underline-offset-[6px] transition-colors ${
        tone === "light"
          ? "text-[var(--lp-teal)] decoration-[var(--lp-teal)]/30 hover:decoration-[var(--lp-teal)]"
          : "text-[var(--lp-cream)] decoration-[var(--lp-cream)]/40 hover:decoration-[var(--lp-cream)]"
      } ${className}`}
    >
      <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

/** The mother's own question that opens each section. */
export function Voice({ children, tone = "light", id }: { children: React.ReactNode; tone?: "light" | "dark"; id?: string }) {
  return (
    <p
      id={id}
      className={`lp-voice mb-4 text-[1.1875rem] leading-snug md:text-[1.375rem] ${
        tone === "light" ? "text-[var(--lp-clay)]" : "text-[var(--lp-clay-light)]"
      }`}
    >
      <span aria-hidden="true">“</span>
      {children}
      <span aria-hidden="true">”</span>
    </p>
  );
}

export function Telugu({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p lang="te" className={`font-telugu text-[1.125rem] leading-[1.7] ${className}`}>
      {children}
    </p>
  );
}
