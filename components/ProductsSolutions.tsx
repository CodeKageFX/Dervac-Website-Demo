import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  Link2,
  Building,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { productsData } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Microscope,
  Link2,
  Building,
};

export function ProductsSolutions() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-4">
              Proprietary Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Systems Engineered for Clinical, Enterprise, & Lab Precision.
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-slate-600 leading-relaxed">
            In addition to custom client projects, Dervac develops domain-specific platforms trusted by clinical diagnostic centers, pathology labs, and technology teams.
          </p>
        </div>

        {/* 2x2 Grid of Genuine Dervac Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productsData.map((product) => {
            const Icon = iconMap[product.iconName] || Stethoscope;
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0E2B61] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#0E2B61] bg-[#0E2B61]/10 px-3 py-1.5 rounded-full border border-[#0E2B61]/20">
                      {product.status}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-950 mt-1 mb-3 group-hover:text-[#0E2B61] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {product.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Platform Capabilities
                    </div>
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Specifications & Action */}
                <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">
                      {product.specifications[0]?.label}:
                    </span>{" "}
                    {product.specifications[0]?.value}
                  </div>
                  <Link
                    href={`/products#${product.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0E2B61] hover:text-[#2563EB] transition-colors"
                  >
                    <span>View Architecture Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0E2B61] hover:text-[#2563EB] transition-colors"
          >
            <span>Explore all proprietary systems and deployment specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}