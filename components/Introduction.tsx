import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon, CheckCircle2 } from "lucide-react";

export function Introduction() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "20+ Years Proven Track Record",
      description:
        "Over two decades delivering mission-critical enterprise systems, networking, and technology projects across Nigeria and West Africa with dependable uptime.",
    },
    {
      icon: Cpu,
      title: "Turnkey ICT Capabilities",
      description:
        "From structured low-voltage cabling and high-density server clustering to bespoke web platforms, secure APIs, and nationwide CBT examination centres.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dervac Extreme Customer Service",
      description:
        "Dedicated engineering teams on standby with continuous proactive monitoring, rapid incident escalation, and definitive accountability.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-4">
              Enterprise Corporate Profile
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Architecting dependable ICT systems for organizations that cannot afford downtime.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dervac Global Services Ltd is an established indigenous ICT firm operating dual technical hubs across Palmgrove and Ikeja, Lagos.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We combine vendor-neutral strategic consultancy with rigorous engineering execution to solve enterprise technology challenges, nurture digital capacity, and secure mission-critical data.
            </p>
            <div className="pt-2">
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0E2B61] hover:text-[#2563EB] group transition-colors"
              >
                <span>Read our full corporate credentials and history</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid with Elevated Enterprise Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0E2B61] text-white flex items-center justify-center mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Operational Methodology</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}