"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  PhoneCall,
  Clock,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { servicesData, ServiceItem } from "@/data/services";
import { ConsultationModal } from "@/components/ConsultationModal";
import { InteractiveEstimator } from "@/components/InteractiveEstimator";
import { companyData } from "@/data/company";

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
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Dropdown */}
            <div className="lg:hidden">
              <label htmlFor="service-select" className="sr-only">
                Select an ICT Service
              </label>
              <select
                id="service-select"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#224C75]"
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
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-[#224C75] text-white shadow-xs font-semibold"
                        : "bg-[#F9FAFB] text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/70"
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
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200/90 bg-[#F9FAFB] p-6 sm:p-10 shadow-2xs">
              {/* Header: Category Badge, Icon, Title */}
              <div className="border-b border-gray-200/70 pb-6 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75] bg-[#224C75]/10 px-3 py-1 rounded-full border border-[#224C75]/20">
                      {activeService.category}
                    </span>
                    <span className="text-xs text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                      {activeService.badge}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#224C75]" />
                    <span>Focus: {activeService.metrics.label} ({activeService.metrics.value})</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-2xs text-[#224C75] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                      {activeService.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Description & Context */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Scope & Architectural Overview
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-white p-5 rounded-2xl border border-gray-200/80">
                  {activeService.fullDescription}
                </p>
              </div>

              {/* Capabilities & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Core Capabilities */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#224C75]" />
                    <span>Technical Capabilities</span>
                  </h3>
                  <ul className="space-y-2.5 pt-1">
                    {activeService.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concrete Deliverables */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Standard Project Deliverables</span>
                  </h3>
                  <ul className="space-y-2.5 pt-1">
                    {activeService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Sectors */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Applicable Sectors & Client Environments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.targetSectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Box: Direct Next Step */}
              <div className="p-6 rounded-2xl bg-[#224C75]/5 border border-[#224C75]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Need consultation on {activeService.title}?
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Speak directly with our solution architects at our Palmgrove Hub or Ikeja HQ.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setConsultationModalOpen(true)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white text-xs sm:text-sm font-medium shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Schedule Consultation
                  </button>
                  <a
                    href={`tel:${companyData.contacts.generalPhone}`}
                    className="px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
                    title="Call Engineering Desk"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#224C75]" />
                    <span className="hidden md:inline">Call Hotline</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick link to proprietary software products */}
            <div className="mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                Looking for Dervac proprietary software systems like Medisure or LIMS?{" "}
                <Link
                  href="/products"
                  className="font-medium text-[#224C75] hover:text-[#1a3a5a] underline"
                >
                  View our Software Products & Platforms
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
