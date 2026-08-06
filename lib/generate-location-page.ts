import type { TherapyPageData } from "@/lib/therapy-pages";
import { BASE_LOCATION, type Location } from "@/lib/locations";

/**
 * Takes a Vijayawada-based TherapyPageData and swaps every reference
 * to "Vijayawada" / "vijayawada" for the target location name / slug.
 *
 * The Vijayawada entry in therapy-pages.ts / condition-pages.ts is the
 * single source of truth — all other city pages derive from it.
 */
export function generateLocationPage(
  baseData: TherapyPageData,
  location: Location
): TherapyPageData {
  if (location.slug === BASE_LOCATION.slug) return baseData;

  let json = JSON.stringify(baseData);
  // 1. Replace capitalised display name ("Vijayawada") → target city name
  json = json.replace(new RegExp(BASE_LOCATION.name, "g"), location.name);
  // 2. Replace lowercase slug ("vijayawada") → target city slug in URLs / slugs
  json = json.replace(new RegExp(BASE_LOCATION.slug, "g"), location.slug);

  return JSON.parse(json) as TherapyPageData;
}

/**
 * Given a slug like "speech-therapy-guntur", return the Vijayawada base slug
 * "speech-therapy-vijayawada" so we can look it up in therapyPages.
 */
export function toBaseSlug(slug: string, locationSlug: string): string {
  return slug.replace(
    new RegExp(`-${locationSlug}$`),
    `-${BASE_LOCATION.slug}`
  );
}
