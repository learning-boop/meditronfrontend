import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconInstagram, IconFacebook, IconYouTube, IconWhatsApp } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";
import { therapyPages } from "@/lib/therapy-pages";
import { conditionPages } from "@/lib/condition-pages";
import { locations } from "@/lib/locations";

const vjConditions = Object.values(conditionPages).filter((p) =>
  p.slug.endsWith("-vijayawada")
);
const vjTherapies = Object.values(therapyPages).filter((p) =>
  p.slug.endsWith("-vijayawada")
);

const conditionLinks = vjConditions.map((c) => ({
  label: c.name,
  href: `/conditions/${c.slug}`,
}));

// Top 5 treatments only — "More Treatments" column removed
const treatmentLinks = vjTherapies.slice(0, 5).map((t) => ({
  label: t.name,
  href: `/therapies/${t.slug}`,
}));

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Healing Stories", href: "/healing-stories" },
  { label: "For Parents", href: "/for-parents" },
  { label: "International Patients", href: "/international" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-confident-navy text-primary-light" aria-label="Site footer">
      {/* Teal accent stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-healing-green to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36 md:pb-10">

        {/* ── Location links — no title, at the top ──────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 pb-10 border-b border-white/8 mb-12">
          {locations.map((loc) => (
            <div key={loc.slug}>
              <p className="text-white font-semibold text-xs mb-3">{loc.name}</p>
              <ul className="space-y-1.5">
                {vjConditions.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/conditions/${c.slug.replace("vijayawada", loc.slug)}`}
                      className="text-[10px] text-sage/70 hover:text-white transition-colors leading-snug block"
                    >
                      {c.name} in {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Main grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Brand + NAP */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-5" aria-label="Meditron home">
              <Image
                src="/images/meditron-child-development-center-logo.png"
                alt="Meditron Child Development Centre"
                width={200}
                height={64}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-sm leading-relaxed mb-5 text-sage max-w-xs">
              Vijayawada&apos;s dedicated child development centre for Autism,
              ADHD, Cerebral Palsy, and Down Syndrome.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mb-6">
              {[
                { href: NAP.socials.instagram, label: "Instagram", icon: <IconInstagram className="w-4 h-4" />, hover: "hover:bg-[#E1306C]" },
                { href: NAP.socials.facebook,  label: "Facebook",  icon: <IconFacebook  className="w-4 h-4" />, hover: "hover:bg-[#1877F2]" },
                { href: NAP.socials.youtube,   label: "YouTube",   icon: <IconYouTube   className="w-4 h-4" />, hover: "hover:bg-[#FF0000]" },
                { href: `https://wa.me/${NAP.whatsapp}`, label: "WhatsApp", icon: <IconWhatsApp className="w-4 h-4" />, hover: "hover:bg-[#25D366]" },
              ].map(({ href, label, icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Meditron on ${label}`}
                  className={`w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-sage hover:text-white ${hover} transition-all duration-200`}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* NAP */}
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <a href={NAP.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-white transition-colors leading-snug">
                  {NAP.address}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href={`tel:${NAP.phone.replace(/\s/g, "")}`} className="text-sage hover:text-white transition-colors">
                  {NAP.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${NAP.email}`} className="text-sage hover:text-white transition-colors">
                  {NAP.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-sage">
                <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                {NAP.hours}
              </p>
            </address>

            {/* Mini map */}
            <a
              href={NAP.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Meditron location in Google Maps"
              className="block mt-5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6622.342390014608!2d80.63815296606113!3d16.517429554891226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5c10163d60f%3A0x2e710a52be245b99!2sMeditron%20Child%20Development%20Centre!5e1!3m2!1sen!2sin!4v1786032521574!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Meditron location map"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Conditions
            </h3>
            <ul className="space-y-3">
              {conditionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sage hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Treatments
            </h3>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sage hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sage hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-accent transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Book appointment CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Book Appointment
            </Link>
          </div>

        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dusty-blue">
          <p>
            &copy; {new Date().getFullYear()} {NAP.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; built by{" "}
            <span className="text-sage font-semibold">Creators Touch</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
