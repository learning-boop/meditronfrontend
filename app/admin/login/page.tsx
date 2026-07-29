"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/api";
import { Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin_token")) {
      router.replace("/admin/appointments");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn(email, password);
    setLoading(false);

    if (!result) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("admin_token", result.token);
    localStorage.setItem("admin_name", result.user.name);
    router.push("/admin/appointments");
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-white font-black text-xl mb-4">
            M
          </div>
          <h1 className="text-slate-800 font-extrabold text-2xl">
            Meditron Admin
          </h1>
          <p className="text-slate-400 text-sm mt-1">Sign in to continue</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-8 space-y-4"
        >
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputCls}
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
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm transition-colors"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
