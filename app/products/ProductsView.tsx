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
        <section className="sticky top-18 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <label htmlFor="product-select" className="sr-only">
                Select a Product
              </label>
              <select
                id="product-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
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
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#0E2B61] text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
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
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-6 sm:p-12 shadow-sm">
              {/* Product Header */}
              <div className="border-b border-slate-200 pb-8 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61] bg-[#0E2B61]/10 px-3.5 py-1.5 rounded-full border border-[#0E2B61]/20">
                      {activeProduct.category}
                    </span>
                    <span className="text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                      {activeProduct.badge}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Status: {activeProduct.status}
                  </span>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-2xs text-[#0E2B61] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                      {activeProduct.name}
                    </h2>
                    <p className="text-base sm:text-lg font-semibold text-[#0E2B61] mt-1">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-600 mt-5 leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs">
                  {activeProduct.summary}
                </p>
              </div>

              {/* Functional Capabilities & Business Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Core Features */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#0E2B61]" />
                    <span>Key Features & Capabilities</span>
                  </h3>
                  <ul className="space-y-3 pt-1">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0E2B61] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Benefits */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Operational Outcomes</span>
                  </h3>
                  <ul className="space-y-3 pt-1">
                    {activeProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Concrete Technical Specifications */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200/90 mb-10 shadow-2xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
                  Deployment & Architectural Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {activeProduct.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
                    >
                      <span className="text-slate-500 text-xs font-medium">{spec.label}</span>
                      <span className="font-bold text-slate-900 mt-1">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="p-8 rounded-3xl bg-[#0E2B61] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">
                    Deploy {activeProduct.name} in Your Organization
                  </h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">
                    Request an executive demonstration or customized on-premise installation plan.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Demo / Walkthrough
                  </button>
                  <Link
                    href="/contact"
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors inline-flex items-center gap-1.5 border border-white/15"
                  >
                    <span>Contact Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom contextual guidance */}
            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                Looking for customized engineering or server support contracts?{" "}
                <Link
                  href="/services"
                  className="font-bold text-[#0E2B61] hover:text-[#2563EB] underline underline-offset-2"
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