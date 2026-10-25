"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Stethoscope, Microscope, Link2, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { productsData } from "@/data/products";

export function ProductsShowcase() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const activeProduct = productsData[selectedProductIndex];

  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Microscope,
    Link2,
    Building,
  };

  const IconComponent = iconMap[activeProduct.iconName] || Building;

  return (
    <section className="relative py-10 sm:py-14 bg-transparent border-t border-white/[0.06] overflow-hidden">
      <div className="ambient-glow-purple -top-40 right-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#224C75]/20 border border-[#224C75]/40 text-[11px] font-semibold text-[#6ba4d9] uppercase tracking-wider mb-2.5">
              Proprietary Solutions & Spaces
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Purpose-Built <span className="text-[#4a8ec9]">Products & Spaces</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Software platforms and collaborative tech facilities developed by Dervac for specialized industry requirements.
            </p>
          </div>

          <Link
            href="/products"
            className="secondary-pill-btn inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white hover:text-[#6ba4d9] self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
          {productsData.map((prod, idx) => {
            const TabIcon = iconMap[prod.iconName] || Building;
            const isSelected = selectedProductIndex === idx;

            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProductIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-white/10 border-[#224C75] shadow-lg shadow-[#224C75]/25"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"
                }`}
              >
                <TabIcon
                  className={`w-5 h-5 mb-2 ${isSelected ? "text-[#6ba4d9]" : "text-zinc-500"}`}
                />
                <div className={`text-sm font-bold truncate ${isSelected ? "text-white" : "text-zinc-300"}`}>
                  {prod.name}
                </div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">
                  {prod.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card */}
        <div className="glow-card rounded-2xl p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#224C75]/30 text-[#6ba4d9] border border-[#224C75]/50 text-xs font-semibold">
                  {activeProduct.badge}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Status: {activeProduct.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {activeProduct.name}
                </h3>
                <p className="text-base text-zinc-300 font-medium">
                  {activeProduct.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {activeProduct.summary}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                {activeProduct.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/products#${activeProduct.id}`}
                  className="hero-gradient-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold shadow-md"
                >
                  <span>Explore Product Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="secondary-pill-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-zinc-300 text-xs sm:text-sm font-medium hover:text-white"
                >
                  <span>Request Live Demonstration</span>
                </Link>
              </div>
            </div>

            {/* Specifications Box */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/5 pb-2">
                Technical Specifications
              </h4>

              <div className="space-y-3">
                {activeProduct.specifications.map((spec) => (
                  <div key={spec.label} className="flex flex-col text-xs">
                    <span className="text-zinc-500 font-medium">{spec.label}</span>
                    <span className="text-zinc-200 font-semibold mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
