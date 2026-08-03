import { IconInstagram } from "@/components/SocialIcons";
import { NAP } from "@/lib/data";

// ─── Types ───────────────────────────────────────────────────────────────────

type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

// ─── Fallback grid ───────────────────────────────────────────────────────────
// Shown when INSTAGRAM_ACCESS_TOKEN is not yet configured.
// Uses existing Meditron poster images from /public/images.

const FALLBACK = [
  {
    src: "/images/what-is-autism-parent-awareness-poster.jpg",
    alt: "Autism awareness — Meditron",
  },
  {
    src: "/images/early-intervention-child-therapy-poster.jpg",
    alt: "Early intervention therapy — Meditron",
  },
  {
    src: "/images/child-communication-therapy-parents-poster.jpg",
    alt: "Child communication therapy — Meditron",
  },
  {
    src: "/images/child-speech-eye-contact-behavior-help.jpg",
    alt: "Speech and eye contact therapy — Meditron",
  },
  {
    src: "/images/understanding-autism-support-poster.jpg",
    alt: "Understanding autism support — Meditron",
  },
  {
    src: "/images/autism-care-therapy-meditron-vijayawada.jpg",
    alt: "Autism care at Meditron Vijayawada",
  },
  {
    src: "/images/meditron-child-development-support-poster.jpg",
    alt: "Child development support — Meditron",
  },
  {
    src: "/images/meditron-online-therapy-consultation.jpg",
    alt: "Online therapy consultation — Meditron",
  },
  {
    src: "/images/meditron-child-therapy-center-services-vijayawada.jpg",
    alt: "Meditron therapy services Vijayawada",
  },
];

// ─── Data fetch ───────────────────────────────────────────────────────────────

async function fetchInstagramPosts(): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media` +
        `?fields=id,media_type,media_url,thumbnail_url,permalink,caption` +
        `&limit=9` +
        `&access_token=${token}`,
      { next: { revalidate: 3600 } } // refresh once per hour
    );
    if (!res.ok) return null;
    const json = await res.json();
    return (json.data as InstagramPost[]) ?? null;
  } catch {
    return null;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default async function InstagramFeed() {
  const posts = await fetchInstagramPosts();
  const PROFILE = NAP.socials.instagram;

  return (
    <section
      className="hidden md:block bg-confident-navy pt-16 pb-0"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            {/* Platform label */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center">
                <IconInstagram className="w-4 h-4 text-white" />
              </div>
              <span className="text-dusty-blue text-xs font-bold uppercase tracking-[0.2em]">
                Instagram
              </span>
            </div>

            {/* Headline */}
            <h2
              id="instagram-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            >
              You can see we are
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                {" "}active on Instagram.
              </span>
            </h2>

            <p className="text-dusty-blue text-sm mt-3 leading-relaxed">
              Real moments. Real families. Real progress — posted every day.
            </p>
          </div>

          {/* Follow button */}
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start sm:self-auto
              bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
              hover:opacity-90 transition-opacity
              text-white font-bold text-sm
              px-5 py-3 rounded-xl shadow-lg shrink-0"
          >
            <IconInstagram className="w-4 h-4 shrink-0" />
            Follow @meditroncdc
          </a>
        </div>

        {/* ── Posts grid ── */}
        {posts ? (
          /* Live Instagram posts */
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {posts.slice(0, 9).map((post) => {
              const src =
                post.media_type === "VIDEO"
                  ? (post.thumbnail_url ?? "")
                  : post.media_url;

              if (!src) return null;

              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    post.caption
                      ? post.caption.slice(0, 80)
                      : "View on Instagram"
                  }
                  className="group relative aspect-square overflow-hidden bg-navy block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={post.caption ? post.caption.slice(0, 100) : "Meditron Instagram post"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <IconInstagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          /* Static fallback — local poster images */
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {FALLBACK.map((img) => (
              <a
                key={img.src}
                href={PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Meditron on Instagram"
                className="group relative aspect-square overflow-hidden bg-navy block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <IconInstagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ── Bottom strip — see all on Instagram ── */}
        <a
          href={PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5
            py-5 mt-2 sm:mt-3
            text-sage hover:text-white
            text-sm font-semibold
            border-t border-navy hover:border-dusty-blue
            transition-colors duration-200 group"
        >
          <IconInstagram className="w-4 h-4 group-hover:text-[#ee2a7b] transition-colors" />
          See all posts on Instagram
        </a>

      </div>
    </section>
  );
}
