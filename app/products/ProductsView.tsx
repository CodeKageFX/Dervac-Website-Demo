"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  Link2,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Laptop,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { productsData, ProductItem } from "@/data/products";
import { ConsultationModal } from "@/components/ConsultationModal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Microscope,
  Link2,
  Building,
};

export function ProductsView() {
  const [selectedProductId, setSelectedProductId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = productsData.find((p) => p.id === hash);
        if (found) return found.id;
      }
    }
    return productsData[0].id;
  });
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Subscribe to external hash changes for deep links (e.g. /products#medisure)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = productsData.find((p) => p.id === hash);
        if (found) {
          setSelectedProductId(found.id);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeProduct: ProductItem =
    productsData.find((p) => p.id === selectedProductId) || productsData[0];

  const IconComp = iconMap[activeProduct.iconName] || Laptop;

  return (
    <>
      <main className="min-h-screen bg-white">
        <PageHeader
          badge="Proprietary Platforms"
          title="Proprietary Software Systems."
          highlightedTitle="Engineered by Dervac."
          description="Purpose-built platforms developed and deployed by Dervac for clinical workflow automation, laboratory information management, enterprise link telemetry, and tech community hubs."
          breadcrumbs={[{ label: "Products & Solutions" }]}
        />

        {/* Product Selector Navigation Bar */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <label htmlFor="product-select" className="sr-only">
                Select a Product
              </label>
              <select
                id="product-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#224C75]"
              >
                {productsData.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Segmented Pill Tabs */}
            <div className="hidden sm:flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              {productsData.map((prod) => {
                const isActive = prod.id === selectedProductId;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductId(prod.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#224C75] text-white shadow-xs font-semibold"
                        : "bg-[#F9FAFB] text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/70"
                    }`}
                  >
                    {prod.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dedicated Single Product View: ONLY the selected product is displayed */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200/90 bg-[#F9FAFB] p-6 sm:p-10 shadow-2xs">
              {/* Product Header */}
              <div className="border-b border-gray-200/70 pb-6 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75] bg-[#224C75]/10 px-3 py-1 rounded-full border border-[#224C75]/20">
                      {activeProduct.category}
                    </span>
                    <span className="text-xs text-gray-600 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                      {activeProduct.badge}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Status: {activeProduct.status}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-2xs text-[#224C75] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                      {activeProduct.name}
                    </h2>
                    <p className="text-sm sm:text-base font-medium text-[#224C75] mt-1">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                  {activeProduct.summary}
                </p>
              </div>

              {/* Functional Capabilities & Business Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Core Features */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#224C75]" />
                    <span>Key Features & Capabilities</span>
                  </h3>
                  <ul className="space-y-2.5 pt-1">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Benefits */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Operational Benefits</span>
                  </h3>
                  <ul className="space-y-2.5 pt-1">
                    {activeProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Concrete Technical Specifications */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Deployment & Architectural Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {activeProduct.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F9FAFB] border border-gray-200/60 flex flex-col justify-between"
                    >
                      <span className="text-gray-500 text-xs">{spec.label}</span>
                      <span className="font-semibold text-gray-900 mt-1">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="p-6 rounded-2xl bg-[#224C75]/5 border border-[#224C75]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Interested in {activeProduct.name}?
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Request a live product walkthrough or customized on-premise installation plan.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white text-xs sm:text-sm font-medium shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Demo / Walkthrough
                  </button>
                  <Link
                    href="/contact"
                    className="px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom contextual guidance */}
            <div className="mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                Looking for customized engineering or server support contracts?{" "}
                <Link
                  href="/services"
                  className="font-medium text-[#224C75] hover:text-[#1a3a5a] underline"
                >
                  Explore our Turnkey ICT Services
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={activeProduct.name}
      />
    </>
  );
}
