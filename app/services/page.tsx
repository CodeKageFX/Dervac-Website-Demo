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
  CheckCircle2,
  ArrowRight,
  Layers,
  PhoneCall,
  Send,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { servicesData, ServiceItem } from "@/data/services";
import { ConsultationModal } from "@/components/ConsultationModal";
import { companyData } from "@/data/company";

export default function ServicesPage() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("General ICT Solution");

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Server,
    ShieldAlert,
    GraduationCap,
    BookOpenCheck,
    Building2,
  };

  const openConsultationFor = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    setConsultationModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090d]">
      <PageHeader
        badge="Services & Solutions"
        title="Enterprise ICT Suites."
        highlightedTitle="End-to-End Execution."
        description="From nationwide high-capacity CBT centers and data center deployments to custom software engineering and tech talent fellowships."
        breadcrumbs={[{ label: "Services & Solutions" }]}
      />

      {/* Quick Jump Navigation Pill Bar */}
      <section className="py-4 border-b border-white/[0.06] sticky top-[68px] z-30 bg-[#08090d]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider pr-2 flex-shrink-0">
              Jump To:
            </span>
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-zinc-300 hover:text-white whitespace-nowrap transition-colors flex-shrink-0"
              >
                {svc.title.split("&")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {servicesData.map((service, index) => {
          const IconComp = iconMap[service.iconName] || Code2;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 p-6 sm:p-8 rounded-2xl glow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Service Info (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/[0.05] border border-white/10 text-zinc-300">
                        {service.badge}
                      </span>
                      <span className="text-xs text-zinc-500 ml-3 font-mono">
                        Target Metric: {service.metrics.label} ({service.metrics.value})
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-3">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Core Engineering Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Sectors */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Applicable Sectors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetSectors.map((sec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] text-zinc-400"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverables Box & CTA (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a8ec9] mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4a8ec9]" />
                      Client Deliverables & Output
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4a8ec9] mt-1.5 flex-shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <button
                      onClick={() => openConsultationFor(service.title)}
                      className="hero-gradient-btn w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Scope Proposal for this Service</span>
                    </button>

                    <a
                      href={`tel:${companyData.contacts.generalPhone}`}
                      className="secondary-pill-btn w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-zinc-300 hover:text-white font-medium text-xs"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                      <span>Direct Hotline ({companyData.contacts.generalPhone})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Delivery Methodology (TPL 29 Source Content) */}
      <section className="py-10 sm:py-14 bg-[#06070a] border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              Implementation Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              The Dervac 5-Stage Delivery Process
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Our service delivery process is geared towards understanding your business requirements and providing specific solutions that address those needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Requirements Discovery",
                desc: "Discuss and obtain your comprehensive operational requirements and constraints.",
              },
              {
                step: "02",
                title: "Scope Definition",
                desc: "Define the detailed service scope, hardware BOM, and engineering deliverables.",
              },
              {
                step: "03",
                title: "Stakeholder Review",
                desc: "Management presentation to get your input and carry your leadership along the process.",
              },
              {
                step: "04",
                title: "Staged Implementation",
                desc: "Execute the deployment strictly following approved technical specifications and QA tests.",
              },
              {
                step: "05",
                title: "Standard SLA Support",
                desc: "Provide standard and premium technical support to guarantee maximum system uptime.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <span className="text-2xl font-mono font-extrabold text-blue-500">
                  {st.step}
                </span>
                <h3 className="text-sm font-bold text-white">{st.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultService={selectedServiceTitle}
      />
    </main>
  );
}
