"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Server,
    ShieldAlert,
    GraduationCap,
    BookOpenCheck,
    Building2,
  };

  const categories = ["All", "Development", "Infrastructure", "Security", "Training", "Education", "Coworking"];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section className="relative py-10 sm:py-14 bg-transparent border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="ambient-glow-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header (Matching Dribbble Reference Image 4) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
            Our Services & Solutions
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2.5">
            Smart Solutions for{" "}
            <span className="text-[#4a8ec9]">Enterprises & Institutions</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Code, hardware, infrastructure, and human capacity in perfect sync.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6-Card Grid (Matching Dribbble Reference Image 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const isFeatured = index === 2; // Matching the 3rd highlighted card with purple accent border in Image 4

            return (
              <div
                key={service.id}
                className={`group rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured ? "glow-card glow-card-active" : "glow-card"
                }`}
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-yellow-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/[0.04] border border-white/10 text-zinc-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500">{service.metrics.label}:</span>{" "}
                    <strong className="text-white">{service.metrics.value}</strong>
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Footer Link */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="secondary-pill-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-zinc-200 text-sm font-medium hover:text-white"
          >
            <span>View Complete Services Matrix & Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
