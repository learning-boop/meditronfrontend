import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href: string };

type Props = {
  label?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({ label, title, accent, subtitle, breadcrumbs }: Props) {
  return (
    <section
      className="bg-primary-dark relative overflow-hidden pt-14 pb-20 px-4 sm:px-6 lg:px-8 text-center"
      aria-label="Page header"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/8 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 mb-6 flex-wrap">
            <Link href="/" className="text-white/40 hover:text-white/70 text-xs transition-colors">Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.href} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-white/25" aria-hidden="true" />
                {b.href === "#" ? (
                  <span className="text-white/70 text-xs">{b.label}</span>
                ) : (
                  <Link href={b.href} className="text-white/40 hover:text-white/70 text-xs transition-colors">{b.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Label */}
        {label && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-px bg-accent/50" />
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.22em]">{label}</span>
            <span className="w-6 h-px bg-accent/50" />
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-5">
          {title}
          {accent && <span className="text-accent"> {accent}</span>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
