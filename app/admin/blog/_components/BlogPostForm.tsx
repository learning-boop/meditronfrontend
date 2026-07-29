"use client";

import { useState, useRef } from "react";
import { uploadImage } from "@/lib/api";
import { API_URL } from "@/lib/api";
import { Loader2, ImagePlus, X } from "lucide-react";

const CATEGORIES = [
  "Autism",
  "ADHD",
  "Cerebral Palsy",
  "Down Syndrome",
  "Speech & Language",
  "Occupational Therapy",
  "Parent Guides",
  "Sensory Processing",
];

export type BlogPostFormValues = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  published: boolean;
};

export const EMPTY_FORM: BlogPostFormValues = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  category: "",
  readTime: "",
  metaTitle: "",
  metaDescription: "",
  canonicalUrl: "",
  published: false,
};

function toSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type Props = {
  token: string;
  initialValues?: Partial<BlogPostFormValues>;
  onSubmit: (values: BlogPostFormValues) => Promise<void>;
  isSubmitting: boolean;
  error: string | null;
  submitLabel: string;
};

export default function BlogPostForm({
  token,
  initialValues,
  onSubmit,
  isSubmitting,
  error,
  submitLabel,
}: Props) {
  const [form, setForm] = useState<BlogPostFormValues>({
    ...EMPTY_FORM,
    ...initialValues,
  });
  const [slugManual, setSlugManual] = useState(!!initialValues?.slug);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof BlogPostFormValues, value: string | boolean) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "title" && !slugManual) {
        next.slug = toSlug(value as string);
      }
      return next;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    const url = await uploadImage(token, file);
    setUploading(false);
    if (!url) {
      setUploadError("Upload failed. Make sure the file is JPEG, PNG or WebP under 5 MB.");
      return;
    }
    set("coverImage", url);
  };

  const imageDisplayUrl = form.coverImage
    ? form.coverImage.startsWith("/uploads/")
      ? `${API_URL}${form.coverImage}`
      : form.coverImage
    : null;

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const labelCls =
    "block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5";
  const sectionHeading =
    "text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 mt-2";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6"
    >
      {/* ── Core content ──────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
        <p className={sectionHeading}>Content</p>

        {/* Title */}
        <div>
          <label className={labelCls}>Title *</label>
          <input
            type="text"
            required
            placeholder="e.g. Early Signs of Autism in Toddlers"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className={inputCls}
          />
        </div>

        {/* Slug */}
        <div>
          <label className={labelCls}>Slug *</label>
          <input
            type="text"
            required
            placeholder="early-signs-of-autism"
            value={form.slug}
            onChange={(e) => {
              setSlugManual(true);
              set("slug", e.target.value);
            }}
            className={`${inputCls} font-mono`}
          />
          <p className="text-slate-400 text-xs mt-1">
            URL: /blog/{form.slug || "your-slug-here"}
          </p>
        </div>

        {/* Excerpt */}
        <div>
          <label className={labelCls}>Excerpt *</label>
          <textarea
            required
            rows={2}
            placeholder="A short summary shown on the blog list page (1–2 sentences)."
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Content */}
        <div>
          <label className={labelCls}>Content *</label>
          <textarea
            required
            rows={20}
            placeholder={`Write your article here. Markdown supported:\n\n## Section Heading\n\nParagraph text...\n\n- List item one\n- List item two\n\n**Bold text** for emphasis.`}
            value={form.content}
            onChange={(e) => set("content", e.target.value)}
            className={`${inputCls} resize-y font-mono text-xs leading-relaxed`}
          />
          <p className="text-slate-400 text-xs mt-1">
            Supports ## headings, **bold**, and - bullet lists.
          </p>
        </div>
      </div>

      {/* ── Cover image ───────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-4">
        <p className={sectionHeading}>Cover Image</p>

        {imageDisplayUrl ? (
          <div className="relative rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageDisplayUrl}
              alt="Cover preview"
              className="w-full h-48 object-cover"
            />
            <button
              type="button"
              onClick={() => set("coverImage", "")}
              className="absolute top-2 right-2 w-7 h-7 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full h-40 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <ImagePlus className="w-6 h-6" />
            )}
            <span className="text-xs font-semibold">
              {uploading ? "Uploading…" : "Click to upload image"}
            </span>
            <span className="text-xs text-slate-300">JPEG, PNG, WebP · max 5 MB</span>
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          className="hidden"
          onChange={handleImageUpload}
        />

        {/* Or paste a URL */}
        <div>
          <label className={labelCls}>Or paste an image URL</label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={form.coverImage.startsWith("/uploads/") ? "" : form.coverImage}
            onChange={(e) => set("coverImage", e.target.value)}
            className={inputCls}
          />
        </div>

        {uploadError && (
          <p className="text-red-500 text-xs">{uploadError}</p>
        )}
      </div>

      {/* ── Post details ──────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
        <p className={sectionHeading}>Post Details</p>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Category</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className={inputCls}
            >
              <option value="">None</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Read Time</label>
            <input
              type="text"
              placeholder="e.g. 5 min read"
              value={form.readTime}
              onChange={(e) => set("readTime", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        {/* Publish toggle */}
        <label className="flex items-center gap-3 cursor-pointer pt-1">
          <div className="relative shrink-0">
            <input
              type="checkbox"
              className="sr-only"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
            />
            <div
              className={`w-10 h-6 rounded-full transition-colors ${
                form.published ? "bg-primary" : "bg-slate-200"
              }`}
            />
            <div
              className={`w-4 h-4 bg-white rounded-full shadow absolute top-1 transition-transform ${
                form.published ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </div>
          <div>
            <span className="text-sm font-bold text-slate-700">
              {form.published ? "Published" : "Draft"}
            </span>
            <p className="text-slate-400 text-xs">
              {form.published
                ? "Visible to everyone on the blog"
                : "Only visible to admins"}
            </p>
          </div>
        </label>
      </div>

      {/* ── SEO ───────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
        <p className={sectionHeading}>SEO</p>

        <div>
          <label className={labelCls}>SEO Title</label>
          <input
            type="text"
            placeholder={form.title || "Defaults to post title if left blank"}
            value={form.metaTitle}
            onChange={(e) => set("metaTitle", e.target.value)}
            className={inputCls}
          />
          <p className="text-slate-400 text-xs mt-1">
            {form.metaTitle.length}/60 characters recommended
          </p>
        </div>

        <div>
          <label className={labelCls}>Meta Description</label>
          <textarea
            rows={2}
            placeholder={form.excerpt || "Defaults to excerpt if left blank"}
            value={form.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
            className={`${inputCls} resize-none`}
          />
          <p className="text-slate-400 text-xs mt-1">
            {form.metaDescription.length}/160 characters recommended
          </p>
        </div>

        <div>
          <label className={labelCls}>Canonical URL</label>
          <input
            type="url"
            placeholder="https://meditronvijayawada.com/blog/your-slug"
            value={form.canonicalUrl}
            onChange={(e) => set("canonicalUrl", e.target.value)}
            className={inputCls}
          />
          <p className="text-slate-400 text-xs mt-1">
            Only set if this content is syndicated from another URL.
          </p>
        </div>

        {/* SERP preview */}
        {(form.title || form.metaTitle) && (
          <div className="border border-slate-100 rounded-xl p-4 bg-slate-50">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide mb-3">
              Search Preview
            </p>
            <p className="text-[#1a0dab] text-base font-medium leading-snug hover:underline cursor-pointer">
              {form.metaTitle || form.title}
            </p>
            <p className="text-[#006621] text-xs mt-0.5">
              meditronvijayawada.com/blog/{form.slug}
            </p>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              {form.metaDescription || form.excerpt || "No description set."}
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm transition-colors"
      >
        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {isSubmitting ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
