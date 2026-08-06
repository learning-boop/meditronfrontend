export type Location = {
  slug: string;          // used in URLs — e.g. "guntur"
  name: string;          // display name — e.g. "Guntur"
  state: string;         // "Andhra Pradesh"
  descriptor: string;    // used in copy — e.g. "a major city in Andhra Pradesh"
};

// ── Add or remove cities here to scale up/down the total page count ──────────
// Current count: 7 cities × 14 treatments = 98 pages
export const locations: Location[] = [
  {
    slug: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    descriptor: "the commercial capital of Andhra Pradesh",
  },
  {
    slug: "guntur",
    name: "Guntur",
    state: "Andhra Pradesh",
    descriptor: "one of Andhra Pradesh's fastest-growing cities",
  },
  {
    slug: "amaravati",
    name: "Amaravati",
    state: "Andhra Pradesh",
    descriptor: "the new capital region of Andhra Pradesh",
  },
  {
    slug: "tenali",
    name: "Tenali",
    state: "Andhra Pradesh",
    descriptor: "a key town in Guntur district, Andhra Pradesh",
  },
  {
    slug: "machilipatnam",
    name: "Machilipatnam",
    state: "Andhra Pradesh",
    descriptor: "the historic district headquarters of Krishna district",
  },
  {
    slug: "eluru",
    name: "Eluru",
    state: "Andhra Pradesh",
    descriptor: "the headquarters of West Godavari district, Andhra Pradesh",
  },
  {
    slug: "nellore",
    name: "Nellore",
    state: "Andhra Pradesh",
    descriptor: "a major city in southern Andhra Pradesh",
  },
];

export const BASE_LOCATION: Location = locations[0]; // Vijayawada = source of truth

export function findLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
