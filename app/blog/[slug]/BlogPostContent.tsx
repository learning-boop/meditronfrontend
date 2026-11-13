"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarCheck, Loader2 } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/data";
import {
  getPostBySlug,
  urlFor,
  type SanityBlogPost,
  type SanityImageSource,
} from "@/lib/sanity";

import WhatsAppCta from "@/components/WhatsAppCta";
const waUrl = `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(
  "Hi Meditron, I read your blog article and I have a question about my child."
)}`;

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(value as unknown as SanityImageSource)}
          alt={value.alt || ""}
          className="w-full rounded-2xl"
        />
        {value.caption && (
          <figcaption className="text-sage text-xs text-center mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-confident-navy font-extrabold text-xl sm:text-2xl mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-confident-navy font-bold text-lg mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted-navy text-sm sm:text-base leading-[1.9] mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="bg-primary-light/40 border-l-4 border-primary rounded-r-2xl px-6 py-5 my-6">
        <p className="text-muted-navy text-sm sm:text-base leading-relaxed italic">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-confident-navy font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-semibold hover:underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="space-y-3 ml-2 my-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="space-y-3 ml-6 my-4 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2.5 text-muted-navy text-sm sm:text-base leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-muted-navy text-sm sm:text-base leading-relaxed">
        {children}
      </li>
    ),
  },
};

export default function BlogPostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<SanityBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(slug)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-clean-neutral flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="text-dusty-blue text-sm">Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-clean-neutral flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-confident-navy font-extrabold text-2xl">
          Article not found
        </h1>
        <p className="text-dusty-blue text-sm text-center max-w-sm">
          This article may have been removed or the URL might be incorrect.
        </p>
        <Link
          href="/blog"
          className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const cover = post.coverImage?.asset ? urlFor(post.coverImage) : null;

  return (
    <div className="bg-clean-neutral">
      {/* Article header */}
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
            {post.category && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            {post.title}
          </h1>
          <p className="mt-4 text-white/70 text-base leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={post.coverImageAlt || post.title}
            className="w-full rounded-2xl h-56 sm:h-72 object-cover"
          />
        ) : (
          <div className="bg-gradient-to-br from-primary-light to-cream rounded-2xl h-56 sm:h-72 flex items-center justify-center">
            <div className="text-center">
              <p className="text-primary/40 font-black text-xs uppercase tracking-widest mb-2">
                Meditron CDC
              </p>
              <p
                className="text-primary/15 font-black select-none leading-none"
                style={{ fontSize: "4rem" }}
                aria-hidden="true"
              >
                {post.category || "Blog"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {post.body && post.body.length > 0 ? (
          <PortableText
            value={post.body}
            components={portableTextComponents}
          />
        ) : (
          <p className="text-muted-navy text-sm leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </article>

      {/* CTA */}
      <section className="bg-primary py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl mb-3">
            Have questions about your child?
          </h2>
          <p className="text-white/75 text-sm leading-relaxed mb-7">
            Our specialists are here to help — in person, online, or on
            WhatsApp. The first step is always a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-full transition-colors shadow-lg text-sm"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              Book Free Assessment
            </Link>
            <WhatsAppCta href={waUrl} tone="dark">
              Ask on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
