import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { conditionDetails } from "@/lib/conditions-detail";
import { conditions } from "@/lib/data";
import { NAP } from "@/lib/data";
import ConditionPageContent from "@/components/condition/ConditionPageContent";

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = conditionDetails[slug];
  if (!detail) return {};
  return {
    title: `${detail.name} | Meditron Child Development Centre`,
    description: `Learn about ${detail.name} and how Meditron's specialists in Vijayawada help children through personalised therapy. Free assessment available.`,
    openGraph: {
      title: `${detail.name} | Meditron`,
      description: `Expert therapy for children with ${detail.name} in Vijayawada, Andhra Pradesh.`,
    },
  };
}

// ── Condition image map ───────────────────────────────────────────────────────
const IMAGES: Record<string, string> = {
  autism: "/images/Conditions/1.png",
  adhd: "/images/Conditions/2.png",
  "cerebral-palsy": "/images/Conditions/3.png",
  "down-syndrome": "/images/Conditions/4.png",
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = conditionDetails[slug];
  if (!detail) notFound();

  const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
    `Hi Meditron, I'd like to learn more about ${detail.name} therapy for my child.`
  )}`;

  const image = IMAGES[slug] ?? "";

  // JSON-LD FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ConditionPageContent detail={detail} image={image} waUrl={waUrl} />
    </>
  );
}
