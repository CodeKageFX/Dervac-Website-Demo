import React from "react";
import { Landmark, HeartPulse, GraduationCap, Building2, ShieldCheck, FileCheck2 } from "lucide-react";

export function PartnersEcosystem() {
  const sectors = [
    {
      icon: Landmark,
      title: "Banking & Financial Services",
      description:
        "High-availability server infrastructure, structured low-latency cabling, CCTV security, and redundant power for financial institutions.",
    },
    {
      icon: HeartPulse,
      title: "Diagnostic Healthcare & Clinics",
      description:
        "Deployment of Medisure diagnostic platforms, automated lab analyzer interfacing, and confidential clinical patient record protection aligned with Nigeria Data Protection Act (NDPA 2023) standards.",
    },
    {
      icon: GraduationCap,
      title: "Higher Education & Examination Bodies",
      description:
        "Nationwide JAMB/CBT centre architecture, 250+ terminal local caching networks, power inverters, and proctored testing facilities.",
    },
    {
      icon: Building2,
      title: "Commercial Enterprises & Startups",
      description:
        "Bespoke software development, cloud migrations, tech talent incubation, and co-working facilities in Palmgrove, Lagos.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-3">
            Sectors & Deployments
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight mb-4">
            Proven delivery across critical Nigerian enterprise sectors.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Over two decades, Dervac has engineered infrastructure and software systems for organizations with zero tolerance for downtime or operational compromise.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80"
              >
                <div className="w-9 h-9 rounded-lg bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                  {sector.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clearly Identified Partner & Verification Placeholder (As specified in redesign guidelines) */}
        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-dashed border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <FileCheck2 className="w-5 h-5 text-[#224C75]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-gray-900">
                  Verified Enterprise Deployments & OEM Integrations
                </h4>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#224C75]/10 text-[#224C75]">
                  Documentation On File
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 max-w-2xl leading-relaxed">
                Client case studies, OEM certification documents, and institutional references are provided upon request during enterprise procurement. Public partner badges and client brand assets will be published following official verification review in Phase 2.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>NDPA 2023 Principles Aligned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
