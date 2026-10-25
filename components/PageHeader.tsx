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
    <div className="relative pt-10 sm:pt-14 pb-10 sm:pb-12 bg-[#F9FAFB] border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-4 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gray-900 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-3">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-normal tracking-[-0.02em] leading-tight text-gray-900 max-w-3xl mb-3">
          <span className="font-medium">{title}</span>{" "}
          {highlightedTitle && (
            <span className="text-gray-500 font-normal">{highlightedTitle}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
