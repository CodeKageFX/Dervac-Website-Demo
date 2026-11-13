import React from "react";
import Link from "next/link";
import { Landmark, HeartPulse, GraduationCap, Building2, ShieldCheck, FileCheck2 } from "lucide-react";

export function PartnersEcosystem() {
  const sectors = [
    {
      icon: Landmark,
      title: "Banking & Financial Services",
      description:
        "High-availability server infrastructure, structured low-latency cabling, biometric access security, and redundant power architecture for financial institutions.",
      tag: "FinTech & Banking",
    },
    {
      icon: HeartPulse,
      title: "Diagnostic Healthcare & Clinics",
      description:
        "Deployment of Medisure diagnostic platforms, automated lab analyzer interfacing, and confidential patient electronic records aligned with NDPA 2023 principles.",
      tag: "HealthTech & Diagnostics",
    },
    {
      icon: GraduationCap,
      title: "Higher Education & Exam Bodies",
      description:
        "Nationwide Computer-Based Testing (CBT) centre setups, 250+ terminal local caching networks, solar inverter banks, and proctored testing facilities.",
      tag: "EdTech & Examination",
    },
    {
      icon: Building2,
      title: "Commercial Enterprises & Startups",
      description:
        "Bespoke software development, cloud infrastructure migrations, tech talent incubation, and co-working facilities at Shipeolu, Palmgrove.",
      tag: "Enterprise & Scale-Ups",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-4">
            Institutional Sectors Served
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Proven Delivery Across Critical Nigerian Enterprise Sectors.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Over two decades, Dervac has engineered infrastructure and software systems for organizations with zero tolerance for downtime, data loss, or regulatory non-compliance.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0E2B61]/10 text-[#0E2B61] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E2B61] block mb-1">
                    {sector.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance and Procurement Verification Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#0E2B61] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="text-lg font-bold text-slate-950">
                  Institutional Procurement & Technical References
                </h4>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Documentation on File
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                OEM partner certifications, engineering bill of materials, and audited client references are provided upon request during corporate RFP and procurement processes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch lg:self-auto justify-end flex-wrap">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>NDPA 2023 Principles Aligned</span>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#0E2B61] hover:bg-[#07132B] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
            >
              Request References
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}