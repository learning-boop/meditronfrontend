import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "@/lib/api";
import type { BlogPost } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice, clinical insights, and guidance for parents of children with Autism, ADHD, Cerebral Palsy, and Down Syndrome — from the Meditron team.",
};

export const revalidate = 60;

const categories = [
  "All",
  "Autism",
  "ADHD",
  "Cerebral Palsy",
  "Down Syndrome",
  "Speech & Language",
  "Occupational Therapy",
  "Parent Guides",
];

// Shown when the API has no published posts yet
const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "static-early-signs-autism",
    slug: "early-signs-of-autism",
    title: "Early Signs of Autism: What Indian Parents Should Know",
    excerpt:
      "Learn the key developmental milestones and early warning signs that may indicate autism spectrum disorder in children under 3 — and the right steps to take next.",
    category: "Autism",
    readTime: "5 min read",
    published: true,
    authorId: "meditron-team",
    createdAt: "2026-07-01T00:00:00.000Z",
    updatedAt: "2026-07-01T00:00:00.000Z",
    coverImage: null,
    content: undefined,
    metaTitle: null,
    metaDescription: null,
    canonicalUrl: null,
  },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const apiPosts = await getPublishedPosts();
  const posts: BlogPost[] = apiPosts.length > 0 ? apiPosts : FALLBACK_POSTS;

  return (
    <>
      <PageHero
        label="Resources & Guidance"
        title="From Our Blog"
        subtitle="Written by our clinical team — practical insights to help you understand your child and support them between sessions."
        breadcrumbs={[{ label: "Blog", href: "#" }]}
      />

      {/* ── Category filter ───────────────────────────────────────────────── */}
      <section className="bg-clean-neutral border-b border-primary-light px-4 sm:px-6 lg:px-8 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-bold transition-colors ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-primary-light text-primary hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Fade cue — signals more chips off-screen to the right */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-clean-neutral to-transparent"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Posts grid ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured post (first one) */}
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group mb-12 flex flex-col lg:flex-row bg-clean-neutral rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Cover — gradient panel when no image */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-primary-light to-cream flex items-center justify-center p-10">
              <div className="text-center">
                {posts[0].category && (
                  <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                    {posts[0].category}
                  </span>
                )}
                <div
                  className="text-primary/10 font-black select-none leading-none"
                  style={{ fontSize: "5rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  01
                </div>
              </div>
              {posts[0].coverImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0].coverImage}
                  alt={posts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>

            <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-accent-dark text-xs font-bold uppercase tracking-widest mb-3">
                Featured Article
              </span>
              {posts[0].category && (
                <span className="text-primary text-xs font-semibold uppercase tracking-wide mb-1">
                  {posts[0].category}
                </span>
              )}
              <h2 className="text-confident-navy font-extrabold text-xl sm:text-2xl leading-snug mb-3 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-muted-navy text-sm leading-relaxed mb-6 line-clamp-3">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sage text-xs mb-6">
                <time dateTime={posts[0].createdAt}>
                  {formatDate(posts[0].createdAt)}
                </time>
                {posts[0].readTime && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {posts[0].readTime}
                    </span>
                  </>
                )}
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                Read article
              </span>
            </div>
          </Link>

          {/* Remaining posts */}
          {posts.length > 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {posts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-clean-neutral rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-light/60 to-cream flex items-center justify-center">
                    {post.category && (
                      <span className="bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.coverImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-sage text-xs mb-3">
                      <time dateTime={post.createdAt}>
                        {formatDate(post.createdAt)}
                      </time>
                      {post.readTime && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {post.readTime}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-extrabold text-confident-navy text-base leading-snug mb-2 group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-muted-navy text-sm leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                      Read article
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
