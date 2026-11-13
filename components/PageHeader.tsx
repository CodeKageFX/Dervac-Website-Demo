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
    <div className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#07132B] text-white border-b border-slate-800 overflow-hidden">
      {/* Background Tech Texture */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2563EB] rounded-full filter blur-[128px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mb-4">
          <span>{title}</span>{" "}
          {highlightedTitle && (
            <span className="text-blue-400 block sm:inline font-extrabold">{highlightedTitle}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}