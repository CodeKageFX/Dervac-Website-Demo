import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Server,
  ShieldAlert,
  GraduationCap,
  BookOpenCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/services";

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

export function CoreServices() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-4">
              Core Service Divisions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise ICT Engineering & Infrastructure Solutions.
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-slate-600 leading-relaxed">
            Dervac designs, builds, and maintains the technology backbones of commercial enterprises, academic institutions, and healthcare providers across Nigeria.
          </p>
        </div>

        {/* 3x2 Grid of Genuine Dervac Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            const cardImg = serviceImageMap[service.id] || "/images/infrastructure/server_hardware.jpg";

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={cardImg}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badge and Icon Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E2B61] text-xs font-bold shadow-xs">
                        {service.category}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#0E2B61] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs font-semibold text-slate-200">
                      {service.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#0E2B61] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-slate-100 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Capabilities
                      </div>
                      {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/services#${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#0E2B61] hover:text-white text-slate-900 border border-slate-200/80 font-semibold text-xs sm:text-sm transition-all flex items-center justify-between group/link"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-4 h-4 text-[#0E2B61] group-hover/link:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0E2B61] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Require a Custom Enterprise SLA or Turnkey Project Scope?
            </h4>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Our solution architects conduct comprehensive site audits and architecture scoping before recommending any procurement.
            </p>
          </div>
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#0E2B61] font-bold text-sm transition-colors whitespace-nowrap shadow-sm"
          >
            Explore Services Directory
          </Link>
        </div>
      </div>
    </section>
  );
}