"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import {
  getPublishedPosts,
  urlFor,
  type SanityBlogPost,
} from "@/lib/sanity";

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

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function coverSrc(post: SanityBlogPost): string | null {
  if (post.coverImage?.asset) return urlFor(post.coverImage);
  return null;
}

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    getPublishedPosts()
      .then(setAllPosts)
      .finally(() => setLoading(false));
  }, []);

  const posts =
    selected === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === selected);

  const countFor = (cat: string) =>
    cat === "All"
      ? allPosts.length
      : allPosts.filter((p) => p.category === cat).length;

  return (
    <>
      <PageHero
        label="Resources & Guidance"
        title="From Our Blog"
        subtitle="Written by our clinical team — practical insights to help you understand your child and support them between sessions."
        breadcrumbs={[{ label: "Blog", href: "#" }]}
      />

      {/* Category filter */}
      <section className="bg-clean-neutral border-b border-primary-light px-4 sm:px-6 lg:px-8 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const active = cat === selected;
              const empty = countFor(cat) === 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 px-4 py-2.5 min-h-[44px] flex items-center rounded-full text-xs font-bold transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : empty
                        ? "bg-primary-light/50 text-primary/40 hover:bg-primary-light"
                        : "bg-primary-light text-primary hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-clean-neutral to-transparent"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-dusty-blue text-sm">Loading articles...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-confident-navy font-bold text-lg">
                {allPosts.length === 0
                  ? "No posts published yet."
                  : `No posts in ${selected} yet.`}
              </p>
              <p className="text-dusty-blue text-sm mt-2">
                {allPosts.length === 0
                  ? "Our team is working on articles — please check back soon."
                  : "We are still writing for this category — please check back soon."}
              </p>
              {selected !== "All" && (
                <button
                  onClick={() => setSelected("All")}
                  className="inline-block mt-6 bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  View all articles
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Featured post */}
              <Link
                href={`/blog/${posts[0].slug.current}`}
                className="group mb-12 flex flex-col lg:flex-row bg-clean-neutral rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
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
                  {coverSrc(posts[0]) && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={coverSrc(posts[0])!}
                      alt={posts[0].coverImageAlt || posts[0].title}
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
                    <time dateTime={posts[0].publishedAt}>
                      {formatDate(posts[0].publishedAt)}
                    </time>
                    {posts[0].readTime && (
                      <>
                        <span aria-hidden="true">&middot;</span>
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
                      key={post._id}
                      href={`/blog/${post.slug.current}`}
                      className="group bg-clean-neutral rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="h-48 bg-gradient-to-br from-primary-light/60 to-cream flex items-center justify-center relative">
                        {post.category && !coverSrc(post) && (
                          <span className="bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                            {post.category}
                          </span>
                        )}
                        {coverSrc(post) && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={coverSrc(post)!}
                            alt={post.coverImageAlt || post.title}
                            className="absolute inset-0 h-48 w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-sage text-xs mb-3">
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                          {post.readTime && (
                            <>
                              <span aria-hidden="true">&middot;</span>
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
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
