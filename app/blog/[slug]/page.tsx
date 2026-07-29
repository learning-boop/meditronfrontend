import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarCheck } from "lucide-react";
import { getPostBySlug, getPublishedPosts, API_URL } from "@/lib/api";

function resolveImg(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("/uploads/")) return `${API_URL}${url}`;
  return url;
}
import type { BlogPost } from "@/lib/api";

export const revalidate = 60;

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    ...(post.canonicalUrl && { alternates: { canonical: post.canonicalUrl } }),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
    },
  };
}

// ── Simple markdown renderer ───────────────────────────────────────────────────
function renderInline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-slate-700 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-slate-800 font-extrabold text-xl mt-10 mb-2"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith("- ") || trimmed.includes("\n- ")) {
          const items = trimmed
            .split("\n")
            .filter((l) => l.trimStart().startsWith("- "));
          return (
            <ul key={i} className="list-disc list-inside space-y-2 ml-2">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="text-slate-500 text-sm sm:text-base leading-relaxed"
                >
                  {renderInline(item.replace(/^-\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-slate-500 text-sm sm:text-base leading-[1.9]"
          >
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getPublishedPosts(),
  ]);

  if (!post) notFound();

  const related = allPosts
    .filter((p: BlogPost) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* ── Article header ──────────────────────────────────────────────── */}
      <header className="bg-primary-dark px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-white/50 text-xs mb-5">
            <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
            {post.readTime && (
              <>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {post.readTime}
                </span>
              </>
            )}
            {post.category && (
              <>
                <span aria-hidden="true">·</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            {post.title}
          </h1>
          <p className="mt-4 text-white/65 text-base leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* ── Cover image ──────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {resolveImg(post.coverImage) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolveImg(post.coverImage)!}
            alt={post.title}
            className="rounded-2xl w-full h-64 object-cover"
          />
        ) : (
          <div className="bg-primary-light/40 rounded-2xl h-64 flex items-center justify-center">
            <span className="text-primary/30 text-xs tracking-widest uppercase">
              Article cover image
            </span>
          </div>
        )}
      </div>

      {/* ── Article body ────────────────────────────────────────────────── */}
      {post.content && (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <MarkdownContent content={post.content} />
        </article>
      )}

      {/* ── Related posts ────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-slate-800 font-extrabold text-xl mb-8">
              More from our blog
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p: BlogPost) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {p.category && (
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide mb-2 block">
                      {p.category}
                    </span>
                  )}
                  {p.readTime && (
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {p.readTime}
                    </div>
                  )}
                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-primary transition-colors mb-3">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                    <ArrowLeft className="w-3 h-3 rotate-180" aria-hidden="true" />
                    Read
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl mb-3">
            Have questions about your child?
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-7">
            Our specialists are here to help — in person, online, or on WhatsApp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg text-sm"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
