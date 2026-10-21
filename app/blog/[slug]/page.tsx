import { getAllSlugs } from "@/lib/sanity";
import BlogPostContent from "./BlogPostContent";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  // Also include the hardcoded blog post slug so it keeps working
  const allSlugs = new Set([...slugs, "early-signs-of-autism"]);
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
