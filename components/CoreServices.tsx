import React from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
};

export function CoreServices() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-3">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight">
              End-to-end ICT engineering and technology infrastructure.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
            From software architecture and systems integration to enterprise server infrastructure, CBT test centres, and professional digital talent development.
          </p>
        </div>

        {/* 3x2 Grid of Genuine Dervac Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-gray-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200/60">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <Check className="w-3.5 h-3.5 text-[#224C75] mt-0.5 flex-shrink-0 stroke-[2.5]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {service.badge}
                  </span>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs font-semibold text-[#224C75] hover:text-[#1a3a5a] inline-flex items-center gap-1"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Looking for a customized technology arrangement or enterprise service level agreement?
          </div>
          <Link
            href="/services"
            className="px-4 py-2 rounded-lg bg-white border border-gray-200/80 hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-900 transition-colors shadow-2xs whitespace-nowrap"
          >
            Explore all 6 service divisions
          </Link>
        </div>
      </div>
    </section>
  );
}
