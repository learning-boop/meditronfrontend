"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { NAP } from "@/lib/data";

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
  phone: string;
  childName: string;
  childAge: string;
  concern: string;
  message: string;
};

const EMPTY: Field = {
  parentName: "",
  phone: "",
  childName: "",
  childAge: "",
  concern: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<Field>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi Meditron! I'd like to book a free assessment.`,
      ``,
      `Parent: ${form.parentName}`,
      `Phone: ${form.phone}`,
      form.childName ? `Child's name: ${form.childName}` : "",
      form.childAge ? `Child's age: ${form.childAge} years` : "",
      form.concern ? `Primary concern: ${form.concern}` : "",
      form.message ? `\nMessage: ${form.message}` : "",
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="text-slate-800 font-extrabold text-xl">WhatsApp is opening!</p>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs">
            Your details have been pre-filled. Just hit send and our team will reply within the hour.
          </p>
        </div>
        <button
          onClick={() => { setForm(EMPTY); setSubmitted(false); }}
          className="text-primary text-sm font-semibold hover:underline"
        >
          Fill the form again
        </button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const labelCls = "block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="parentName" className={labelCls}>Your Name *</label>
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
          <label htmlFor="phone" className={labelCls}>WhatsApp / Phone *</label>
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

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="childName" className={labelCls}>Child&apos;s Name</label>
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
          <label htmlFor="childAge" className={labelCls}>Child&apos;s Age (years)</label>
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
        <label htmlFor="concern" className={labelCls}>Primary Concern</label>
        <select
          id="concern"
          value={form.concern}
          onChange={set("concern")}
          className={inputCls}
        >
          <option value="">Select a condition (optional)</option>
          {CONDITIONS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Anything else you&apos;d like us to know</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about the signs you've noticed, how long, school situation — anything helps."
          value={form.message}
          onChange={set("message")}
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-sm transition-colors shadow-md"
      >
        <Send className="w-4 h-4 shrink-0" />
        Send via WhatsApp &amp; Book Assessment
      </button>

      <p className="text-center text-slate-400 text-xs">
        Free assessment · No obligation · Your details are private
      </p>
    </form>
  );
}
