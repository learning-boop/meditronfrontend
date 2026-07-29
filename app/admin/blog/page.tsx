"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAllPostsAdmin, deletePost } from "@/lib/api";
import type { BlogPost } from "@/lib/api";
import AdminNav from "@/app/admin/_components/AdminNav";
import { Loader2, Plus, Trash2, Eye, EyeOff, Pencil } from "lucide-react";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminBlogPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) {
      router.replace("/admin/login");
      return;
    }
    setToken(t);
  }, [router]);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    const data = await getAllPostsAdmin(token);
    setPosts(data);
    setLoading(false);
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string, title: string) => {
    if (!token) return;
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    await deletePost(token, id);
    await load();
    setDeleting(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-slate-800 font-extrabold text-2xl">Blog Posts</h1>
            <p className="text-slate-400 text-sm mt-0.5">
              {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </div>

        {/* Posts list */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-sm">
            No posts yet.{" "}
            <Link href="/admin/blog/new" className="text-primary font-semibold hover:underline">
              Create the first one.
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-800 text-sm truncate">
                      {post.title}
                    </span>
                    {post.published ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <Eye className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        <EyeOff className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-slate-400 text-xs flex-wrap">
                    <span className="font-mono text-slate-300">/blog/{post.slug}</span>
                    {post.category && <span>{post.category}</span>}
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/admin/blog/edit/${post.slug}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-lg transition-colors"
                  >
                    <Pencil className="w-3 h-3" />
                    Edit
                  </Link>
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-lg transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    disabled={deleting === post.id}
                    className="p-1.5 text-slate-300 hover:text-red-500 transition-colors disabled:opacity-50"
                  >
                    {deleting === post.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
