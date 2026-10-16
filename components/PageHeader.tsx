import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export function PageHeader({
  badge,
  title,
  highlightedTitle,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative pt-24 sm:pt-28 pb-8 sm:pb-10 bg-[#08090d] border-b border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="ambient-glow-purple -top-40 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-400 mb-3 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-zinc-200">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-2.5">
          {title}{" "}
          {highlightedTitle && (
            <span className="text-[#4a8ec9]">{highlightedTitle}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
