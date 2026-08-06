import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconInstagram, IconFacebook, IconYouTube, IconWhatsApp } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";
import { therapyPages } from "@/lib/therapy-pages";
import { conditionPages } from "@/lib/condition-pages";
import { locations } from "@/lib/locations";

// All Vijayawada-base entries only
const vjConditions = Object.values(conditionPages).filter((p) =>
  p.slug.endsWith("-vijayawada")
);
const vjTherapies = Object.values(therapyPages).filter((p) =>
  p.slug.endsWith("-vijayawada")
);

const nav = {
  Conditions: vjConditions.map((c) => ({
    label: c.name,
    href: `/conditions/${c.slug}`,
  })),
  // Split 10 treatments into two columns of 5
  Treatments: vjTherapies.slice(0, 5).map((t) => ({
    label: t.name,
    href: `/therapies/${t.slug}`,
  })),
  "More Treatments": vjTherapies.slice(5).map((t) => ({
    label: t.name,
    href: `/therapies/${t.slug}`,
  })),
  Centre: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-confident-navy text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 mb-14">
          {/* Brand + NAP */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Meditron
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-sage">
              A specialised child development centre in Vijayawada, helping
              children with Autism, ADHD, Cerebral Palsy, and Down Syndrome
              reach their full potential.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={NAP.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meditron on Instagram"
                className="w-9 h-9 rounded-lg bg-navy/60 hover:bg-accent flex items-center justify-center text-sage hover:text-white transition-colors"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={NAP.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meditron on Facebook"
                className="w-9 h-9 rounded-lg bg-navy/60 hover:bg-[#1877F2] flex items-center justify-center text-sage hover:text-white transition-colors"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a
                href={NAP.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meditron on YouTube"
                className="w-9 h-9 rounded-lg bg-navy/60 hover:bg-[#FF0000] flex items-center justify-center text-sage hover:text-white transition-colors"
              >
                <IconYouTube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${NAP.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Meditron on WhatsApp"
                className="w-9 h-9 rounded-lg bg-navy/60 hover:bg-[#25D366] flex items-center justify-center text-sage hover:text-white transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
              </a>
            </div>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={NAP.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {NAP.address}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${NAP.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {NAP.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${NAP.email}`}
                  className="hover:text-white transition-colors"
                >
                  {NAP.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                {NAP.hours}
              </p>
            </address>

            {/* ── Mini map ── */}
            <a
              href={NAP.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Meditron location in Google Maps"
              className="block mt-5 rounded-xl overflow-hidden border border-white/10 hover:border-primary/60 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6622.342390014608!2d80.63815296606113!3d16.517429554891226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5c10163d60f%3A0x2e710a52be245b99!2sMeditron%20Child%20Development%20Centre!5e1!3m2!1sen!2sin!4v1786032521574!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Meditron Child Development Centre location map"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sage hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Services by location ───────────────────────────────────────── */}
        <div className="border-t border-primary-light/10 pt-10 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-dusty-blue mb-6">
            Our Services Across Andhra Pradesh
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {locations.map((loc) => (
              <div key={loc.slug}>
                <p className="text-white font-bold text-xs mb-3">{loc.name}</p>
                <ul className="space-y-1.5">
                  {/* 4 conditions */}
                  {vjConditions.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug.replace("vijayawada", loc.slug)}`}
                        className="text-[11px] text-sage hover:text-white transition-colors leading-snug block"
                      >
                        {c.name} in {loc.name}
                      </Link>
                    </li>
                  ))}
                  {/* first 3 therapies */}
                  {vjTherapies.slice(0, 3).map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/therapies/${t.slug.replace("vijayawada", loc.slug)}`}
                        className="text-[11px] text-sage hover:text-white transition-colors leading-snug block"
                      >
                        {t.name} in {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-light/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dusty-blue">
          <p>
            &copy; {new Date().getFullYear()} {NAP.name}. All rights reserved.
          </p>
          <p>
            Built with care by{" "}
            <span className="text-sage font-medium">Creators Touch</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
