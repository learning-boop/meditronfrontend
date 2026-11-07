import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { conditionPages } from "@/lib/condition-pages";
import { locations } from "@/lib/locations";
import { generateLocationPage, toBaseSlug } from "@/lib/generate-location-page";
import { NAP } from "@/lib/data";
import TherapyPageContent from "@/components/therapy/TherapyPageContent";

// ── Static params: every condition × every location ───────────────────────────
export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  Object.keys(conditionPages).forEach((baseSlug) => {
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
  const baseData = conditionPages[baseSlug];
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
    alternates: {
      canonical: `https://meditroncdc.com/conditions/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://meditroncdc.com/conditions/${slug}`,
      type: "article",
      images: [{ url: data.image, alt: data.name }],
    },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveData(slug);
  if (!resolved) notFound();

  const { data, location } = resolved;

  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    `Hi Meditron, I'd like to book an assessment for ${data.name} treatment in ${location.name}.`
  )}`;

  // Build FAQ entries from the "signs" and "how it works" steps
  const faqEntries = [
    ...data.whyChild.signs.slice(0, 5).map((sign, i) => ({
      "@type": "Question" as const,
      name: i === 0
        ? `What are the early signs of ${data.name} in children?`
        : `Is "${sign.toLowerCase()}" a sign of ${data.name}?`,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: i === 0
          ? `Key early signs include: ${data.whyChild.signs.join("; ")}. If you notice any of these, seek an assessment at Meditron Child Development Centre in ${location.name}.`
          : `Yes — "${sign.toLowerCase()}" can be an indicator of ${data.name}. Early assessment and intervention at Meditron ${location.name} leads to better outcomes.`,
      },
    })),
    {
      "@type": "Question" as const,
      name: `Where can I get ${data.name} treatment in ${location.name}?`,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: `Meditron Child Development Centre in ${location.name} offers evidence-based ${data.name} treatment including ${data.relatedTreatments.map(t => t.name).join(", ")}. Call ${NAP.phone} to book a free assessment.`,
      },
    },
    {
      "@type": "Question" as const,
      name: `How does ${data.name} treatment work at Meditron?`,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: data.howItWorks.steps.map(s => `${s.title}: ${s.body}`).join(" "),
      },
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: data.metaTitle,
      description: data.metaDescription,
      url: `https://meditroncdc.com/conditions/${slug}`,
      mainEntity: {
        "@type": "MedicalCondition",
        name: data.name,
        associatedAnatomy: { "@type": "AnatomicalStructure", name: "Brain" },
      },
      provider: {
        "@type": "MedicalClinic",
        name: "Meditron Child Development Centre",
        telephone: NAP.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sri Nilayam, 2nd Floor, Dr No 30-20-31A, Nehru Street, Seetharamapuram",
          addressLocality: "Vijayawada",
          addressRegion: "Andhra Pradesh",
          postalCode: "520002",
          addressCountry: "IN",
        },
        areaServed: location.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntries,
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <TherapyPageContent data={data} waUrl={waUrl} />
    </>
  );
}
