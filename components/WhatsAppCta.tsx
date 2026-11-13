import type { ReactNode } from "react";

/** The WhatsApp mark (same artwork as the landing page). */
export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.41-9.4 9.41m8-17.41A11.25 11.25 0 0 0 12.05.75C5.82.75.75 5.82.75 12.05c0 1.99.52 3.94 1.51 5.65L.65 23.25l5.68-1.49a11.3 11.3 0 0 0 5.71 1.46h.01c6.23 0 11.3-5.07 11.3-11.3 0-3.02-1.18-5.86-3.31-7.99" />
    </svg>
  );
}

type Props = {
  href: string;
  /** "light" on cream/white sections (teal pill), "dark" on teal sections (WhatsApp-green pill). */
  tone?: "light" | "dark";
  size?: "md" | "sm";
  className?: string;
  children: ReactNode;
};

/**
 * The site's one WhatsApp button, matching the landing page:
 * a rounded pill with the WhatsApp mark in a circle on the left.
 */
export default function WhatsAppCta({ href, tone = "light", size = "md", className = "", children }: Props) {
  const pill =
    tone === "light"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "bg-[#25D366] text-[#0f2a30] hover:bg-[#3ee07d]";
  const mark = tone === "light" ? "bg-[#25D366] text-white" : "bg-[#0f2a30] text-[#25D366]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full pl-2 font-bold transition-colors ${
        size === "sm" ? "min-h-[44px] gap-2.5 pr-5 text-sm" : "min-h-[52px] gap-3 pr-6 text-[0.9375rem]"
      } ${pill} ${className}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${size === "sm" ? "h-8 w-8" : "h-9 w-9"} ${mark}`}
      >
        <WhatsAppGlyph className="h-5 w-5" />
      </span>
      {children}
    </a>
  );
}
