"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, updatePost } from "@/lib/api";
import type { BlogPost } from "@/lib/api";
import AdminNav from "@/app/admin/_components/AdminNav";
import BlogPostForm, { type BlogPostFormValues } from "@/app/admin/blog/_components/BlogPostForm";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function EditPostPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [token, setToken] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.replace("/admin/login"); return; }
    setToken(t);
  }, [router]);

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug).then((p) => {
      if (!p) { setLoadError(true); return; }
      setPost(p);
    });
  }, [slug]);

  const handleSubmit = async (values: BlogPostFormValues) => {
    if (!token || !post) return;
    setIsSubmitting(true);
    setError(null);

    const result = await updatePost(token, post.id, values);
    setIsSubmitting(false);

    if (!result) {
      setError("Failed to update post. The slug may already be taken.");
      return;
    }

    router.push("/admin/blog");
  };

  if (!token) return null;

  if (loadError) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AdminNav />
        <div className="flex flex-col items-center justify-center py-24 text-slate-400 text-sm">
          <p>Post not found.</p>
          <Link href="/admin/blog" className="text-primary font-semibold mt-3 hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AdminNav />
        <div className="flex justify-center py-24">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/blog" className="text-slate-400 hover:text-slate-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-slate-800 font-extrabold text-2xl">Edit Post</h1>
        </div>

        <BlogPostForm
          token={token}
          initialValues={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content ?? "",
            coverImage: post.coverImage ?? "",
            coverImageAlt: post.coverImageAlt ?? "",
            category: post.category ?? "",
            readTime: post.readTime ?? "",
            metaTitle: post.metaTitle ?? "",
            metaDescription: post.metaDescription ?? "",
            canonicalUrl: post.canonicalUrl ?? "",
            published: post.published,
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={error}
          submitLabel="Save Changes"
        />
      </main>
    </div>
  );
}
