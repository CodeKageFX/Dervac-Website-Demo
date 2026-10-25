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
    <section className="py-16 sm:py-20 bg-white border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-3">
              Proprietary Solutions
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight">
              Software platforms engineered for clinical, enterprise, and educational workflows.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
            In addition to custom client projects, Dervac builds and operates domain-specific platforms trusted by clinical diagnostic centers, marketing departments, and technology teams.
          </p>
        </div>

        {/* 2x2 Grid of Genuine Dervac Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {productsData.map((product) => {
            const Icon = iconMap[product.iconName] || Stethoscope;
            return (
              <div
                key={product.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-gray-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-[#224C75] bg-[#224C75]/10 px-2.5 py-1 rounded-full border border-[#224C75]/20">
                      {product.status}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {product.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Specifications & Action */}
                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-[11px] text-gray-500">
                    <span className="font-medium text-gray-700">
                      {product.specifications[0]?.label}:
                    </span>{" "}
                    {product.specifications[0]?.value}
                  </div>
                  <Link
                    href={`/products#${product.id}`}
                    className="text-xs font-semibold text-[#224C75] hover:text-[#1a3a5a] inline-flex items-center gap-1"
                  >
                    <span>Product specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#224C75] hover:text-[#1a3a5a]"
          >
            <span>View full product specifications and deployment architectures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
