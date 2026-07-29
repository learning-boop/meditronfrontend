"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createPost } from "@/lib/api";
import AdminNav from "@/app/admin/_components/AdminNav";
import BlogPostForm, { type BlogPostFormValues } from "@/app/admin/blog/_components/BlogPostForm";
import { ArrowLeft } from "lucide-react";

export default function NewPostPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.replace("/admin/login"); return; }
    setToken(t);
  }, [router]);

  const handleSubmit = async (values: BlogPostFormValues) => {
    if (!token) return;
    setIsSubmitting(true);
    setError(null);

    const result = await createPost(token, values);
    setIsSubmitting(false);

    if ("error" in result) {
      setError(Array.isArray(result.error) ? result.error.join(", ") : result.error);
      return;
    }

    router.push("/admin/blog");
  };

  if (!token) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/blog" className="text-slate-400 hover:text-slate-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-slate-800 font-extrabold text-2xl">New Post</h1>
        </div>

        <BlogPostForm
          token={token}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={error}
          submitLabel="Publish Post"
        />
      </main>
    </div>
  );
}
