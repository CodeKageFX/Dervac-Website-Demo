"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  Link2,
  Building,
  CheckCircle2,
  ArrowRight,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { productsData, ProductItem } from "@/data/products";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function ProductsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Medisure Diagnostic System");

  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Microscope,
    Link2,
    Building,
  };

  const handleRequestDemo = (productName: string) => {
    setSelectedProduct(productName);
    setConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090d]">
      <PageHeader
        badge="Proprietary Products & Facilities"
        title="Purpose-Built Systems."
        highlightedTitle="Designed For Impact."
        description="Software platforms and collaborative tech facilities developed by Dervac for specialized healthcare workflows, enterprise link telemetry, and physical innovation hubs."
        breadcrumbs={[{ label: "Products & Solutions" }]}
      />

      {/* Products Matrix */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {productsData.map((prod, index) => {
          const IconComp = iconMap[prod.iconName] || Building;
          const isCoworking = prod.id === "dervac-hub-coworking";

          return (
            <div
              key={prod.id}
              id={prod.id}
              className="scroll-mt-28 p-6 sm:p-8 rounded-2xl glow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-yellow-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {prod.badge}
                      </span>
                      <span className="text-xs text-zinc-500 ml-3 font-mono">
                        Status: {prod.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {prod.name}
                    </h2>
                    <p className="text-base text-zinc-300 font-medium mt-1">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {prod.summary}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Core Functional Capabilities:
                    </h4>
                    <div className="space-y-2">
                      {prod.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Benefits */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">
                      Operational Benefits:
                    </h4>
                    <div className="space-y-1.5">
                      {prod.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Zap className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Specification Box & Image */}
                <div className="lg:col-span-5 space-y-6">
                  {isCoworking && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                      <Image
                        src="/images/coworking_hub.jpg"
                        alt="Dervac Hub Coworking Facilities in Palmgrove"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/5 pb-2">
                      Architecture & Deployment Specifications
                    </h4>
                    <div className="space-y-3">
                      {prod.specifications.map((spec) => (
                        <div key={spec.label} className="text-xs">
                          <span className="text-zinc-500 font-medium block">
                            {spec.label}
                          </span>
                          <span className="text-zinc-200 font-semibold block mt-0.5">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={() => handleRequestDemo(prod.name)}
                        className="hero-gradient-btn w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-md"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Demonstration / Quotation</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={selectedProduct}
      />
    </main>
  );
}
