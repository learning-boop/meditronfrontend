import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice, clinical insights, and guidance for parents of children with Autism, ADHD, Cerebral Palsy, and Down Syndrome — from the Meditron team.",
};

const categories = ["All", "Autism", "ADHD", "Cerebral Palsy", "Down Syndrome", "Speech", "Parenting Tips"];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="h-48 bg-primary-light/50 flex items-center justify-center w-full">
      <span className="text-primary/30 text-xs tracking-widest uppercase">{label}</span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Resources & Guidance"
        title="From Our Blog"
        subtitle="Written by our clinical team — practical insights to help you understand your child and support them between sessions."
        breadcrumbs={[{ label: "Blog", href: "#" }]}
      />

      {/* ── Category filter (visual only — backend later) ──────────────── */}
      <section className="bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                i === 0
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Posts grid ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured post (first one) */}
          {blogPosts[0] && (
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group mb-12 flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                <ImgPlaceholder label="Featured article cover" />
              </div>
              <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Featured</span>
                <h2 className="text-slate-800 font-extrabold text-xl sm:text-2xl leading-snug mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-6">
                  <time dateTime={blogPosts[0].date}>{formatDate(blogPosts[0].date)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                  Read article
                </span>
              </div>
            </Link>
          )}

          {/* Remaining posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <ImgPlaceholder label="Article cover" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base leading-snug mb-2 group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                    Read article
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Sanity placeholder note */}
          <div className="mt-16 bg-primary-light/40 rounded-2xl px-6 py-5 text-center border border-primary/10">
            <p className="text-primary text-sm font-semibold">
              More articles coming soon — this blog will be powered by Sanity CMS.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Real content will load dynamically once Sanity is connected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
