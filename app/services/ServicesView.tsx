"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  PhoneCall,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { servicesData, ServiceItem } from "@/data/services";
import { ConsultationModal } from "@/components/ConsultationModal";
import { InteractiveEstimator } from "@/components/InteractiveEstimator";
import { companyData } from "@/data/company";

const serviceImageMap: Record<string, string> = {
  "software-development": "/images/infrastructure/engineer_hands_hardware.jpg",
  "infrastructure-support": "/images/infrastructure/server_hardware.jpg",
  "security-cybersecurity": "/images/infrastructure/cyber_soc.jpg",
  "ict-training-academy": "/images/genuine/coder-74954f98.jpg",
  "educational-technology": "/images/infrastructure/cbt_lab.jpg",
  "coworking-hub": "/images/coworking_hub.jpg",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
};

export function ServicesView() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = servicesData.find(
          (s) => s.id === hash || s.slug === hash
        );
        if (found) return found.id;
      }
    }
    return servicesData[0].id;
  });
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Subscribe to external hash changes for deep links (e.g. /services#infrastructure-support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = servicesData.find(
          (s) => s.id === hash || s.slug === hash
        );
        if (found) {
          setSelectedServiceId(found.id);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeService: ServiceItem =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const IconComp = iconMap[activeService.iconName] || Code2;
  const currentImage = serviceImageMap[activeService.id] || "/images/infrastructure/server_hardware.jpg";

  return (
    <>
      <main className="min-h-screen bg-white">
        <PageHeader
          badge="Enterprise Services"
          title="Enterprise ICT Engineering."
          highlightedTitle="Dependable Delivery."
          description="From turnkey software platforms and high-availability server clusters to nationwide CBT test centers and IT workforce development."
          breadcrumbs={[{ label: "Services & Solutions" }]}
        />

        {/* Section Navigation Bar */}
        <section className="sticky top-18 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Dropdown */}
            <div className="lg:hidden">
              <label htmlFor="service-select" className="sr-only">
                Select an ICT Service
              </label>
              <select
                id="service-select"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              {servicesData.map((svc) => {
                const isActive = svc.id === selectedServiceId;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#0E2B61] text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                    }`}
                  >
                    {svc.title}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dedicated Service View: ONLY the selected service is displayed */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-6 sm:p-12 shadow-sm overflow-hidden">
              {/* Header Image Feature */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 bg-slate-950">
                <Image
                  src={currentImage}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0E2B61] text-xs font-bold shadow-xs">
                    {activeService.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                    {activeService.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <div className="text-xs font-semibold text-slate-300">
                    Deployment Standard: {activeService.metrics.label} — {activeService.metrics.value}
                  </div>
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="border-b border-slate-200 pb-8 mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-2xs text-[#0E2B61] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                      {activeService.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scope & Full Description */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E2B61] mb-3">
                  Scope & Architectural Overview
                </h3>
                <div className="text-base sm:text-lg text-slate-700 leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs">
                  {activeService.fullDescription}
                </div>
              </div>

              {/* Capabilities & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Core Capabilities */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#0E2B61]" />
                    <span>Technical Capabilities</span>
                  </h3>
                  <ul className="space-y-3 pt-1">
                    {activeService.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0E2B61] mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concrete Deliverables */}
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Standard Project Deliverables</span>
                  </h3>
                  <ul className="space-y-3 pt-1">
                    {activeService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Sectors */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 mb-10 shadow-2xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Applicable Sectors & Enterprise Environments
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {activeService.targetSectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Box: Direct Next Step */}
              <div className="p-8 rounded-3xl bg-[#0E2B61] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">
                    Need Consultation on {activeService.title}?
                  </h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-xl">
                    Speak directly with our solution architects at our Palmgrove Hub or Ikeja HQ.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setConsultationModalOpen(true)}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Schedule Consultation
                  </button>
                  <a
                    href={`tel:${companyData.contacts.generalPhone.replace(/\s+/g, "")}`}
                    className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors inline-flex items-center gap-2 border border-white/15"
                    title="Call Engineering Desk"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Hotline</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick link to proprietary software products */}
            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                Looking for Dervac proprietary software systems like Medisure or LIMS?{" "}
                <Link
                  href="/products"
                  className="font-bold text-[#0E2B61] hover:text-[#2563EB] underline underline-offset-2"
                >
                  View our Proprietary Software Systems
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Scope Planner */}
        <InteractiveEstimator />
      </main>

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultService={activeService.title}
      />
    </>
  );
}