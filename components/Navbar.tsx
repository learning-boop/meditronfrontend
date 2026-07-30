"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { IconInstagram, IconFacebook, IconYouTube } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

const links = [
  { label: "Home", href: "/" },
  { label: "Conditions", href: "/conditions" },
  { label: "Therapies", href: "/therapies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book an appointment for my child."
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/meditron-child-development-center-logo.png"
            alt="Meditron Child Development Centre"
            width={160}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-muted-navy hover:text-primary rounded-lg hover:bg-primary-light/50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
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
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden p-2 rounded-lg text-muted-navy hover:bg-primary-light transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden border-t border-primary-light bg-cream px-4 pb-6">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-semibold text-navy hover:text-primary hover:bg-primary-light/40 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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

          {/* Social icons — mobile drawer */}
          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-primary-light">
            <a href={NAP.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-primary-light hover:bg-accent hover:text-white flex items-center justify-center text-dusty-blue transition-colors">
              <IconInstagram className="w-4 h-4" />
            </a>
            <a href={NAP.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-primary-light hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-dusty-blue transition-colors">
              <IconFacebook className="w-4 h-4" />
            </a>
            <a href={NAP.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-primary-light hover:bg-[#FF0000] hover:text-white flex items-center justify-center text-dusty-blue transition-colors">
              <IconYouTube className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
