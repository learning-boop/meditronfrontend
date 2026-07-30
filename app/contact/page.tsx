import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Free Assessment",
  description:
    "Book a free child development assessment at Meditron, Vijayawada. Talk to our specialists about Autism, ADHD, Cerebral Palsy, and Down Syndrome therapy for your child.",
};

const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I'd like to book a free assessment for my child."
)}`;

const contactItems = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: NAP.address,
    href: NAP.mapUrl,
    linkLabel: "Get directions",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: NAP.phone,
    href: `tel:${NAP.phone.replace(/\s/g, "")}`,
    linkLabel: "Call now",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: NAP.email,
    href: `mailto:${NAP.email}`,
    linkLabel: "Send email",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: NAP.hours,
    href: null,
    linkLabel: null,
  },
];

const faqs = [
  {
    q: "Is the initial assessment really free?",
    a: "Yes — completely. There is no consultation fee for the first assessment. We sit with you, observe your child, and give you our honest assessment of what we see and what we recommend.",
  },
  {
    q: "How long does the assessment take?",
    a: "Approximately 45 minutes. We spend time with both you and your child — separately and together. You'll leave with a clear understanding of the next steps.",
  },
  {
    q: "Do I need a referral from a doctor?",
    a: "No. You can contact us directly. You do not need any prior diagnosis, referral letter, or paperwork. Just bring your child.",
  },
  {
    q: "Can we do an online consultation?",
    a: "Yes. We offer secure one-on-one video consultations for families who cannot visit in person. Contact us on WhatsApp and we'll set it up for you.",
  },
];

// ─── Google Maps embed ────────────────────────────────────────────────────────
// Using the standard no-API-key iframe embed pointed at the clinic address.
// Once your Google Business Profile is verified, replace the `src` with the
// "Embed a map" link from your Google Maps listing for a pinned result.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=MG+Road+Governorpet+Vijayawada+Andhra+Pradesh+520002&output=embed&z=16&hl=en";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Book Your Visit"
        title="Let's meet your child"
        accent="and take it from there."
        subtitle="Free assessment. No paperwork. No waiting list. Just a real conversation about your child with a specialist who is genuinely listening."
        breadcrumbs={[{ label: "Contact", href: "#" }]}
      />

      {/* ── Form + Contact info ───────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — booking form */}
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Book via WhatsApp</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-confident-navy mb-2">
              Book Your Free Assessment
            </h2>
            <p className="text-dusty-blue text-sm leading-relaxed mb-8">
              Fill in the form and we&apos;ll open WhatsApp with everything pre-filled. Our team confirms your slot within the hour during working hours.
            </p>
            <div className="bg-clean-neutral rounded-2xl shadow-sm p-6 sm:p-8">
              <BookingForm />
            </div>
          </div>

          {/* Right — WhatsApp CTA + contact details */}
          <div className="flex flex-col gap-8">
            {/* WhatsApp direct */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl px-6 py-5 transition-colors shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-clean-neutral/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-extrabold text-base">WhatsApp Us Directly</p>
                <p className="text-white/80 text-xs mt-0.5">Fastest way to reach us · Replies within 30 min</p>
              </div>
            </a>

            {/* Contact details card */}
            <div className="bg-clean-neutral rounded-2xl shadow-sm p-6 sm:p-8 flex-1">
              <h3 className="font-extrabold text-confident-navy text-base mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-navy text-sm font-medium leading-snug">{item.value}</p>
                        {item.href && item.linkLabel && (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-primary text-xs font-semibold hover:underline mt-1 inline-block"
                          >
                            {item.linkLabel} →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps embed ─────────────────────────────────────────────── */}
      <section aria-label="Our location on the map">
        {/* Section header */}
        <div className="bg-clean-neutral px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-t border-primary-light">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">How to Find Us</span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-confident-navy">
                We&apos;re in Governorpet, Vijayawada
              </h2>
              <p className="text-dusty-blue text-sm mt-1">{NAP.address}</p>
            </div>
            <a
              href={NAP.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm shrink-0 self-start sm:self-auto"
            >
              <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Full-width map iframe */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full">
          <iframe
            src={MAP_EMBED_SRC}
            title="Meditron Child Development Centre — MG Road, Governorpet, Vijayawada"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address footer bar below the map */}
        <div className="bg-primary-dark px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {NAP.address}
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {NAP.hours}
            </div>
            <a
              href={`tel:${NAP.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {NAP.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-clean-neutral px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Before You Visit</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-confident-navy">Common questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-cream rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-bold text-confident-navy text-sm">{faq.q}</span>
                  <span className="text-primary text-xl font-black shrink-0 group-open:rotate-45 transition-transform leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-dusty-blue text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
