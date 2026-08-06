import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { therapyPages } from "@/lib/therapy-pages";
import { locations, findLocation } from "@/lib/locations";
import { generateLocationPage, toBaseSlug } from "@/lib/generate-location-page";
import { NAP } from "@/lib/data";
import TherapyPageContent from "@/components/therapy/TherapyPageContent";

// ── Static params: every therapy × every location ─────────────────────────────
export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  Object.keys(therapyPages).forEach((baseSlug) => {
    locations.forEach((loc) => {
      slugs.push({
        slug: baseSlug.replace(`-vijayawada`, `-${loc.slug}`),
      });
    });
  });
  return slugs;
}

// ── Resolve slug → data ───────────────────────────────────────────────────────
function resolveData(slug: string) {
  const location = locations.find((l) => slug.endsWith(`-${l.slug}`));
  if (!location) return null;
  const baseSlug = toBaseSlug(slug, location.slug);
  const baseData = therapyPages[baseSlug];
  if (!baseData) return null;
  return { data: generateLocationPage(baseData, location), location };
}

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveData(slug);
  if (!resolved) return {};
  const { data } = resolved;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: { title: data.metaTitle, description: data.metaDescription },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function TherapyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveData(slug);
  if (!resolved) notFound();

  const { data, location } = resolved;

  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    `Hi Meditron, I'd like to book an assessment for ${data.name} in ${location.name}.`
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Meditron Child Development Centre",
    description: data.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      postalCode: "520002",
      addressCountry: "IN",
    },
    telephone: NAP.phone,
    url: "/",
    medicalSpecialty: data.name,
    areaServed: location.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TherapyPageContent data={data} waUrl={waUrl} />
    </>
  );
}
