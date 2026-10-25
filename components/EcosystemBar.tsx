"use client";

import React from "react";
import { Landmark, Radio, HeartPulse, GraduationCap, Building, ShieldCheck } from "lucide-react";

export function EcosystemBar() {
  const ecosystemSectors = [
    { name: "Banking & Financial Services", icon: Landmark, tag: "FinTech & Banking" },
    { name: "Telecommunications & ISP", icon: Radio, tag: "Fiber & Core Networks" },
    { name: "Healthcare & Diagnostics", icon: HeartPulse, tag: "LIMS & Clinical" },
    { name: "Universities & CBT Centers", icon: GraduationCap, tag: "E-Examination Hubs" },
    { name: "e-Government & Public Sector", icon: Building, tag: "Digital Portals" },
    { name: "Enterprise Commercial", icon: ShieldCheck, tag: "Turnkey Infrastructure" },
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-transparent border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <p className="text-center text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-4">
          Powering mission-critical ICT infrastructure across key African sectors
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {ecosystemSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-[#224C75] transition-colors mb-2" />
                <span className="text-xs font-semibold text-zinc-300 text-center leading-tight">
                  {sector.name}
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">
                  {sector.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
