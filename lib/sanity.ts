import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "e4n57h36",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource): string {
  if (!source) return "";
  return builder.image(source).auto("format").url();
}

// ── Types ────────────────────────────────────────────────────────────────────

// Minimal Sanity image reference
export type SanityImageSource = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
} | null | undefined;

export type SanityBlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category?: string;
  readTime?: string;
  coverImage?: SanityImageSource;
  coverImageAlt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
  publishedAt: string;
  published: boolean;
};

// ── Queries ──────────────────────────────────────────────────────────────────

const POSTS_QUERY = `*[_type == "post" && published == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  readTime,
  coverImage,
  coverImageAlt,
  publishedAt,
  published
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug && published == true][0] {
  _id,
  title,
  slug,
  excerpt,
  category,
  readTime,
  coverImage,
  coverImageAlt,
  body,
  publishedAt,
  published
}`;

const ALL_SLUGS_QUERY = `*[_type == "post" && published == true].slug.current`;

export async function getPublishedPosts(): Promise<SanityBlogPost[]> {
  try {
    return await sanityClient.fetch<SanityBlogPost[]>(POSTS_QUERY);
  } catch {
    return [];
  }
}

export async function getPostBySlug(
  slug: string
): Promise<SanityBlogPost | null> {
  try {
    return await sanityClient.fetch<SanityBlogPost | null>(POST_BY_SLUG_QUERY, {
      slug,
    });
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    return await sanityClient.fetch<string[]>(ALL_SLUGS_QUERY);
  } catch {
    return [];
  }
}
