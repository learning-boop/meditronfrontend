import type { MetadataRoute } from "next";
import { conditionPages } from "@/lib/condition-pages";
import { therapyPages } from "@/lib/therapy-pages";
import { locations } from "@/lib/locations";
import { blogPosts } from "@/lib/data";

const BASE_URL = "https://meditroncdc.com";
const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/conditions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/therapies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/success-stories`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/for-parents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/healing-stories`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/international`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // ── Condition pages — base × location ───────────────────────────────────────
  const conditionRoutes: MetadataRoute.Sitemap = Object.keys(
    conditionPages
  ).flatMap((baseSlug) =>
    locations.map((loc) => ({
      url: `${BASE_URL}/conditions/${baseSlug.replace("vijayawada", loc.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: loc.slug === "vijayawada" ? 0.9 : 0.65,
    }))
  );

  // ── Therapy pages — base × location ─────────────────────────────────────────
  const therapyRoutes: MetadataRoute.Sitemap = Object.keys(
    therapyPages
  ).flatMap((baseSlug) =>
    locations.map((loc) => ({
      url: `${BASE_URL}/therapies/${baseSlug.replace("vijayawada", loc.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: loc.slug === "vijayawada" ? 0.85 : 0.65,
    }))
  );

  // ── Blog posts ───────────────────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...conditionRoutes, ...therapyRoutes, ...blogRoutes];
}
