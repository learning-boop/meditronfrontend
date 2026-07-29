"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, LogOut } from "lucide-react";

const links = [
  { href: "/admin/appointments", label: "Appointments", icon: LayoutDashboard },
  { href: "/admin/blog", label: "Blog", icon: FileText },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const name =
    typeof window !== "undefined"
      ? localStorage.getItem("admin_name") ?? "Admin"
      : "Admin";

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    router.push("/admin/login");
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/admin/appointments" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary text-white font-black text-sm flex items-center justify-center">
            M
          </div>
          <span className="font-extrabold text-slate-800 text-sm hidden sm:block">
            Meditron Admin
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-slate-400 text-xs hidden sm:block">{name}</span>
        <button
          onClick={logout}
          className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 text-xs font-semibold transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
}
