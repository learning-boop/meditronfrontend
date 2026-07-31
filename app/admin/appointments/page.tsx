"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { API_URL, updateAppointmentStatus } from "@/lib/api";
import type { Appointment } from "@/lib/api";
import AdminNav from "@/app/admin/_components/AdminNav";
import { Loader2, RefreshCw, AlertCircle } from "lucide-react";

const STATUS_COLOURS: Record<Appointment["status"], string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-600",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AppointmentsPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<"auth" | "network" | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

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
    setError(null);

    try {
      const res = await fetch(`${API_URL}/appointments`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      if (res.status === 401 || res.status === 403) {
        setError("auth");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError("network");
        setLoading(false);
        return;
      }

      const data: Appointment[] = await res.json();
      setAppointments(data);
    } catch {
      setError("network");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  const changeStatus = async (id: string, status: Appointment["status"]) => {
    if (!token) return;
    setUpdating(id);
    await updateAppointmentStatus(token, id, status);
    await load();
    setUpdating(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-slate-800 font-extrabold text-2xl">Appointments</h1>
            {!loading && !error && (
              <p className="text-slate-400 text-sm mt-0.5">
                {appointments.length} total
              </p>
            )}
          </div>
          <button
            onClick={load}
            disabled={loading}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 disabled:opacity-40 text-sm font-semibold transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* States */}
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : error === "auth" ? (
          <div className="text-center py-24">
            <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold text-sm">Session expired</p>
            <p className="text-slate-400 text-xs mt-1 mb-4">Please sign in again.</p>
            <button
              onClick={handleLogout}
              className="bg-primary text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-primary-dark transition-colors"
            >
              Go to Login
            </button>
          </div>
        ) : error === "network" ? (
          <div className="text-center py-24">
            <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">Could not reach the server.</p>
            <button
              onClick={load}
              className="mt-4 text-primary font-semibold text-sm hover:underline"
            >
              Try again
            </button>
          </div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-24 text-slate-400 text-sm">
            No appointments submitted yet.
          </div>
        ) : (
          <div className="space-y-3">
            {appointments.map((a) => (
              <div
                key={a.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1.5">
                    <span className="font-extrabold text-slate-800 text-sm">
                      {a.parentName}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${STATUS_COLOURS[a.status]}`}
                    >
                      {a.status}
                    </span>
                    <span className="text-slate-300 text-xs ml-auto">
                      {formatDate(a.createdAt)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500 text-xs">
                    <span>📞 {a.phone}</span>
                    {a.email && <span>✉ {a.email}</span>}
                    {a.childName && (
                      <span>
                        Child: {a.childName}
                        {a.childAge ? ` (${a.childAge} yrs)` : ""}
                      </span>
                    )}
                    {a.concern && <span>Concern: {a.concern}</span>}
                  </div>

                  {a.message && (
                    <p className="mt-2 text-slate-400 text-xs leading-relaxed border-l-2 border-slate-100 pl-3">
                      {a.message}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 shrink-0 flex-wrap">
                  {updating === a.id ? (
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  ) : (
                    <>
                      {a.status !== "CONFIRMED" && (
                        <button
                          onClick={() => changeStatus(a.id, "CONFIRMED")}
                          className="px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 text-xs font-bold rounded-lg transition-colors"
                        >
                          Confirm
                        </button>
                      )}
                      {a.status !== "CANCELLED" && (
                        <button
                          onClick={() => changeStatus(a.id, "CANCELLED")}
                          className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                      {a.status !== "PENDING" && (
                        <button
                          onClick={() => changeStatus(a.id, "PENDING")}
                          className="px-3 py-1.5 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-xs font-bold rounded-lg transition-colors"
                        >
                          Pending
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
