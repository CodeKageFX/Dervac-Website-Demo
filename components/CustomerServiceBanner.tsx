"use client";

import React from "react";
import Link from "next/link";
import { Headphones, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export function CustomerServiceBanner() {
  return (
    <section className="relative py-8 sm:py-12 bg-transparent border-t border-white/[0.06] overflow-hidden">
      <div className="ambient-glow-blue -top-20 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#16273c]/70 border border-[#224c75]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#224c75]/30 text-[#4a8ec9] border border-[#224c75]/50 text-[11px] font-semibold uppercase tracking-wider">
              <Headphones className="w-3.5 h-3.5" />
              The Dervac Commitment
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              &quot;Extreme Customer Service&quot;
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Stop worrying about recurring technology bottlenecks. Focus on your core business while our licensed network and software engineers provide continuous monitoring, immediate escalation, and definitive follow-through.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Personalized Attention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Continuous Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Definitive Follow-Through</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${companyData.contacts.generalPhone}`}
              className="hero-gradient-btn flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm shadow-xl hover:scale-105 transition-all text-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Direct: {companyData.contacts.generalPhone}</span>
            </a>

            <Link
              href="/support"
              className="secondary-pill-btn flex items-center justify-center gap-2 px-6 py-3 rounded-full text-zinc-200 text-sm font-medium hover:text-white text-center"
            >
              <span>Explore Enterprise SLAs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
