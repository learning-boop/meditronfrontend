import type { Metadata } from "next";
import Link from "next/link";
import { therapyPages } from "@/lib/therapy-pages";
import { conditionPages } from "@/lib/condition-pages";
import { locations } from "@/lib/locations";
import { NAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sitemap — All Treatments & Locations | Meditron Child Development Centre",
  description:
    "Complete directory of Meditron's child development services across Andhra Pradesh. Find Speech Therapy, ABA Therapy, Autism treatment, ADHD support, and more in Vijayawada, Guntur, Amaravati, and nearby cities.",
};

// ── Derive treatment list from Vijayawada base entries ────────────────────────
const TREATMENTS = Object.values(therapyPages)
  .filter((p) => p.slug.endsWith("-vijayawada"))
  .map((p) => ({
    name: p.name,
    baseSlug: p.slug.replace(/-vijayawada$/, ""),
    path: "therapies" as const,
  }));

const CONDITIONS = Object.values(conditionPages)
  .filter((p) => p.slug.endsWith("-vijayawada"))
  .map((p) => ({
    name: p.name,
    baseSlug: p.slug.replace(/-vijayawada$/, ""),
    path: "conditions" as const,
  }));

// ── Single treatment card ─────────────────────────────────────────────────────
function TreatmentCard({
  name,
  baseSlug,
  path,
}: {
  name: string;
  baseSlug: string;
  path: "therapies" | "conditions";
}) {
  return (
    <div className="bg-white rounded-2xl border border-primary-light/50 p-5 flex flex-col gap-3">
      {/* Treatment heading — links to the primary (Vijayawada) page */}
      <Link
        href={`/${path}/${baseSlug}-vijayawada`}
        className="text-sm font-extrabold text-confident-navy hover:text-primary transition-colors leading-snug"
      >
        {name}
      </Link>
      {/* One link per location */}
      <ul className="flex flex-col gap-1.5">
        {locations.map((loc) => (
          <li key={loc.slug}>
            <Link
              href={`/${path}/${baseSlug}-${loc.slug}`}
              className="text-xs text-muted-navy hover:text-primary hover:underline underline-offset-2 transition-colors"
            >
              {name} in {loc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SitemapPage() {
  const totalPages = (TREATMENTS.length + CONDITIONS.length) * locations.length;

  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Complete Service Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            All Treatments &amp; Locations
          </h1>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Meditron Child Development Centre provides expert therapy for children
            across Andhra Pradesh. Browse all{" "}
            <strong className="text-white">{totalPages} service pages</strong> below —
            organised by treatment and city.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* ── Conditions We Treat ── */}
        <section aria-labelledby="conditions-heading">
          <div className="mb-6">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Conditions We Treat
            </span>
            <h2
              id="conditions-heading"
              className="mt-1 text-xl sm:text-2xl font-extrabold text-confident-navy"
            >
              Condition Treatment Pages — All Cities
            </h2>
            <p className="mt-2 text-sm text-muted-navy max-w-2xl">
              Meditron is the leading child development centre in Vijayawada, providing
              expert assessment and multidisciplinary treatment for children with Autism,
              ADHD, Cerebral Palsy, and Down Syndrome. We also serve families across
              Andhra Pradesh through our outreach and teleconsultation services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONDITIONS.map((c) => (
              <TreatmentCard key={c.baseSlug} {...c} />
            ))}
          </div>
        </section>

        {/* ── Therapies ── */}
        <section aria-labelledby="therapies-heading">
          <div className="mb-6">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Therapy Programmes
            </span>
            <h2
              id="therapies-heading"
              className="mt-1 text-xl sm:text-2xl font-extrabold text-confident-navy"
            >
              Therapy Treatment Pages — All Cities
            </h2>
            <p className="mt-2 text-sm text-muted-navy max-w-2xl">
              Our certified therapists deliver evidence-based intervention across ten
              specialist disciplines. Meditron is the best child therapy centre in
              Vijayawada and provides these services to families across Andhra Pradesh
              seeking expert care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TREATMENTS.map((t) => (
              <TreatmentCard key={t.baseSlug} {...t} />
            ))}
          </div>
        </section>

        {/* ── Locations strip ── */}
        <section aria-labelledby="locations-heading">
          <div className="mb-6">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Where We Serve
            </span>
            <h2
              id="locations-heading"
              className="mt-1 text-xl sm:text-2xl font-extrabold text-confident-navy"
            >
              Cities Across Andhra Pradesh
            </h2>
            <p className="mt-2 text-sm text-muted-navy max-w-2xl">
              While Meditron Child Development Centre is based in Vijayawada, we provide
              assessments, consultations, and ongoing therapy support to families from
              across Andhra Pradesh. Click your city to browse all available services.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-white rounded-2xl border border-primary-light/50 p-4">
                <p className="font-extrabold text-confident-navy text-sm mb-3">
                  {loc.name}
                </p>
                <ul className="flex flex-col gap-1">
                  {[...CONDITIONS, ...TREATMENTS].slice(0, 5).map((item) => (
                    <li key={item.baseSlug}>
                      <Link
                        href={`/${item.path}/${item.baseSlug}-${loc.slug}`}
                        className="text-[11px] text-muted-navy hover:text-primary hover:underline underline-offset-2 transition-colors leading-snug line-clamp-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <span className="text-[11px] text-dusty-blue">
                      +{CONDITIONS.length + TREATMENTS.length - 5} more…
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick contact ── */}
        <section className="bg-primary-dark rounded-3xl py-12 px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
            Not sure which service is right for your child?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-7">
            Our specialist team in Vijayawada offers a free initial assessment for
            families across Andhra Pradesh. We will assess your child across all relevant
            areas and recommend the right therapy — with clear reasons for every decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-7 py-3.5 rounded-2xl transition-colors text-sm shadow-lg"
            >
              Book Free Assessment
            </Link>
            <a
              href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
                "Hi Meditron, I'd like to know which therapy is right for my child."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10783F] hover:bg-[#0d6635] text-white font-bold px-7 py-3.5 rounded-2xl transition-colors text-sm shadow-lg"
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
