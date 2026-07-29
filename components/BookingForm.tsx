"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { createAppointment } from "@/lib/api";

const CONDITIONS = [
  "Autism Spectrum Disorder",
  "ADHD",
  "Cerebral Palsy",
  "Down Syndrome",
  "Developmental Delay",
  "Speech & Language Delay",
  "Sensory Processing Issues",
  "Other / Not sure yet",
];

type Field = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  concern: string;
  message: string;
};

const EMPTY: Field = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  concern: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<Field>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    (key: keyof Field) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await createAppointment({
      parentName: form.parentName,
      email: form.email || undefined,
      phone: form.phone,
      childName: form.childName || undefined,
      childAge: form.childAge ? Number(form.childAge) : undefined,
      concern: form.concern || undefined,
      message: form.message || undefined,
    });

    setLoading(false);

    if (!result.ok) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="text-slate-800 font-extrabold text-xl">
            Request received!
          </p>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs">
            Our team will contact you within 24 hours to confirm your
            appointment.
          </p>
        </div>
        <button
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
          className="text-primary text-sm font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const labelCls =
    "block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="parentName" className={labelCls}>
            Your Name *
          </label>
          <input
            id="parentName"
            type="text"
            required
            placeholder="Amma / Nanna name"
            value={form.parentName}
            onChange={set("parentName")}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            WhatsApp / Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={set("phone")}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com (optional)"
          value={form.email}
          onChange={set("email")}
          className={inputCls}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="childName" className={labelCls}>
            Child&apos;s Name
          </label>
          <input
            id="childName"
            type="text"
            placeholder="Optional"
            value={form.childName}
            onChange={set("childName")}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="childAge" className={labelCls}>
            Child&apos;s Age (years)
          </label>
          <input
            id="childAge"
            type="number"
            min="0"
            max="18"
            placeholder="e.g. 4"
            value={form.childAge}
            onChange={set("childAge")}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="concern" className={labelCls}>
          Primary Concern
        </label>
        <select
          id="concern"
          value={form.concern}
          onChange={set("concern")}
          className={inputCls}
        >
          <option value="">Select a condition (optional)</option>
          {CONDITIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Anything else you&apos;d like us to know
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about the signs you've noticed, how long, school situation — anything helps."
          value={form.message}
          onChange={set("message")}
          className={`${inputCls} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm transition-colors shadow-md"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          <Send className="w-4 h-4 shrink-0" />
        )}
        {loading ? "Submitting…" : "Book Free Assessment"}
      </button>

      <p className="text-center text-slate-400 text-xs">
        Free assessment · No obligation · Your details are private
      </p>
    </form>
  );
}
