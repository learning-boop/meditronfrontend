import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPreview() {
  return (
    <section className="py-20 bg-cream" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Learn With Us
            </span>
            <h2
              id="blog-heading"
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-800"
            >
              To Understand Your Child Better
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline shrink-0"
          >
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Post cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-primary-light/60 flex items-center justify-center">
                <p className="text-primary/30 text-xs tracking-widest uppercase">
                  blog-cover.webp
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-800 text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 mt-5 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
