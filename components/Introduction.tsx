import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon } from "lucide-react";

export function Introduction() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "20+ Years Proven Track Record",
      description:
        "Over two decades delivering mission-critical enterprise systems, networking, and technology projects across Nigeria and West Africa.",
    },
    {
      icon: Cpu,
      title: "Turnkey ICT Capabilities",
      description:
        "From low-voltage cabling and server clustering to bespoke web platforms, APIs, and nationwide computer-based test (CBT) centres.",
    },
    {
      icon: HeadphonesIcon,
      title: "Extreme Customer Service",
      description:
        "Dedicated engineering teams on standby with continuous monitoring, rapid incident escalation, and dependable follow-through.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-3">
            Company Overview
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight mb-4">
            Engineering dependable technology infrastructure and software for demanding institutions.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Dervac Global Services Ltd is an indigenous Nigerian ICT solutions provider operating from primary facilities in Palmgrove and Ikeja, Lagos. We provide objective, vendor-neutral technology strategy alongside end-to-end execution to ensure organizational resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-gray-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#224C75]/10 text-[#224C75] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs sm:text-sm text-gray-500">
            Headquartered in Lagos with dual operations across Palmgrove Hub & Opebi Corporate HQ.
          </p>
          <Link
            href="/profile"
            className="text-xs sm:text-sm font-medium text-[#224C75] hover:text-[#1a3a5a] inline-flex items-center gap-1.5"
          >
            <span>Read full corporate profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
