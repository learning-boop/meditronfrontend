import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { IconInstagram, IconFacebook, IconYouTube, IconWhatsApp } from "@/components/SocialIcons";
import { NAP, conditions, therapies } from "@/lib/data";

const nav = {
  Conditions: conditions.map((c) => ({
    label: c.name,
    href: `/conditions/${c.slug}`,
  })),
  Therapies: therapies.map((t) => ({
    label: t.name,
    href: `/therapies#${t.slug}`,
  })),
  Centre: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-confident-navy text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-14">
          {/* Brand + NAP */}
          <div className="col-span-2 sm:col-span-1">
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
