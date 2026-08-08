"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { IconInstagram, IconFacebook, IconYouTube } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

// ─── Nav structure ────────────────────────────────────────────────────
type SimpleLink = { kind: "link"; label: string; href: string };
type DropdownLink = {
  kind: "dropdown";
  label: string;
  items: { label: string; href: string }[];
};
type NavItem = SimpleLink | DropdownLink;

const navItems: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "dropdown",
    label: "About",
    items: [
      { label: "Dr. Sirisha", href: "/about" },
    ],
  },
  {
    kind: "dropdown",
    label: "Services",
    items: [
      { label: "Autism Spectrum Disorder", href: "/conditions/autism-vijayawada" },
      { label: "ADHD", href: "/conditions/adhd-vijayawada" },
      { label: "Cerebral Palsy", href: "/conditions/cerebral-palsy-vijayawada" },
      { label: "Down Syndrome", href: "/conditions/down-syndrome-vijayawada" },
      { label: "Child Psychology", href: "/therapies/child-psychology-vijayawada" },
      { label: "Occupational Therapy", href: "/therapies/occupational-therapy-vijayawada" },
      { label: "Physiotherapy", href: "/therapies/physiotherapy-vijayawada" },
      { label: "Sensory Integration", href: "/therapies/sensory-integration-vijayawada" },
      { label: "Behaviour Therapy", href: "/therapies/behaviour-therapy-vijayawada" },
      { label: "Vision Therapy", href: "/therapies/vision-therapy-vijayawada" },
      { label: "Speech Therapy", href: "/therapies/speech-therapy-vijayawada" },
      { label: "Play Therapy", href: "/therapies/play-therapy-vijayawada" },
      { label: "ABA Therapy", href: "/therapies/aba-therapy-vijayawada" },
      { label: "Specific Learning", href: "/therapies/specific-learning-vijayawada" },
    ],
  },
  { kind: "link", label: "Testimonials", href: "/success-stories" },
  { kind: "link", label: "Blog", href: "/blog" },
  { kind: "link", label: "Gallery", href: "/gallery" },
  { kind: "link", label: "Contact Us", href: "/contact" },
];

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book an appointment for my child."
)}`;

// ─── Desktop dropdown item ─────────────────────────────────────────────
function DesktopDropdown({
  item,
  isActive,
  align = "left",
}: {
  item: DropdownLink;
  isActive: (href: string) => boolean;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  const parentActive = item.items.some((i) => isActive(i.href));

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
          parentActive
            ? "text-primary bg-primary-light/60"
            : "text-muted-navy hover:text-primary hover:bg-primary-light/50"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full mt-1 bg-white rounded-xl shadow-lg border border-primary-light/60 overflow-hidden transition-all duration-200 origin-top z-50 ${
          align === "right" ? "right-0" : "left-0"
        } ${
          item.items.length > 5 ? "w-[26rem]" : "w-52"
        } ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className={item.items.length > 5 ? "grid grid-cols-2" : "flex flex-col"}>
          {item.items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={`block px-4 py-3 text-sm font-semibold transition-colors border-b border-primary-light/40 ${
                isActive(sub.href)
                  ? "text-primary bg-primary-light/50"
                  : "text-muted-navy hover:text-primary hover:bg-primary-light/40"
              }`}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[4.5rem] md:h-24"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={closeMobile}
        >
          <Image
            src="/images/meditron-child-development-center-logo.png"
            alt="Meditron Child Development Centre"
            width={200}
            height={64}
            className="h-12 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            if (item.kind === "link") {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary-light/60"
                        : "text-muted-navy hover:text-primary hover:bg-primary-light/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <DesktopDropdown
                key={item.label}
                item={item}
                isActive={isActive}
                align={item.items.length > 5 ? "right" : "left"}
              />
            );
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          WhatsApp Us
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden p-2.5 rounded-lg text-muted-navy hover:bg-primary-light transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-light bg-cream px-4 pb-6">
          <ul className="flex flex-col gap-0.5 pt-3">
            {navItems.map((item) => {
              if (item.kind === "link") {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={`block px-3 py-3 text-sm font-semibold rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "text-primary bg-primary-light/60"
                          : "text-navy hover:text-primary hover:bg-primary-light/40"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              // Dropdown on mobile — accordion
              const expanded = mobileExpanded === item.label;
              const parentActive = item.items.some((i) => isActive(i.href));
              return (
                <li key={item.label}>
                  <button
                    onClick={() => toggleMobileExpand(item.label)}
                    className={`w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors ${
                      parentActive
                        ? "text-primary bg-primary-light/60"
                        : "text-navy hover:text-primary hover:bg-primary-light/40"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <ul className="ml-4 mt-0.5 border-l-2 border-primary-light pl-3 flex flex-col gap-0.5">
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={closeMobile}
                            className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                              isActive(sub.href)
                                ? "text-primary bg-primary-light/60"
                                : "text-navy hover:text-primary hover:bg-primary-light/40"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors w-full"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            WhatsApp Us
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-primary-light">
            <a
              href={NAP.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-primary-light hover:bg-accent hover:text-white flex items-center justify-center text-dusty-blue transition-colors"
            >
              <IconInstagram className="w-4 h-4" />
            </a>
            <a
              href={NAP.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-primary-light hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-dusty-blue transition-colors"
            >
              <IconFacebook className="w-4 h-4" />
            </a>
            <a
              href={NAP.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-lg bg-primary-light hover:bg-[#FF0000] hover:text-white flex items-center justify-center text-dusty-blue transition-colors"
            >
              <IconYouTube className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
