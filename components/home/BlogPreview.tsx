import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getPublishedPosts, API_URL } from "@/lib/api";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const FALLBACK_COVERS = [
  "/images/Blogs/Blog_1.png",
  "/images/Blogs/Blog_2.png",
  "/images/Blogs/Blog_3.png",
];

function resolveImg(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("/uploads/")) return `${API_URL}${url}`;
  return url;
}

export default async function BlogPreview() {
  const posts = await getPublishedPosts();
  const preview = posts.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <section className="py-12 bg-cream" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Learn With Us
            </span>
            <h2
              id="blog-heading"
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-confident-navy"
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
          {preview.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-clean-neutral rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary-light"
            >
              {/* Cover image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolveImg(post.coverImage) ?? FALLBACK_COVERS[i % 3]}
                alt={post.coverImageAlt || post.title}
                className="h-44 w-full object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {post.category && (
                  <span className="text-primary text-xs font-semibold uppercase tracking-wide mb-2">
                    {post.category}
                  </span>
                )}
                <div className="flex items-center gap-3 text-sage text-xs mb-3">
                  <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                  {post.readTime && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="font-extrabold text-confident-navy text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-dusty-blue text-sm leading-relaxed flex-1">
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
