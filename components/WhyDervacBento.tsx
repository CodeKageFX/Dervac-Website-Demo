"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Activity } from "lucide-react";
import { companyData } from "@/data/company";

export function WhyDervacBento() {
  const [activeStep, setActiveStep] = useState(0);

  const deliverySteps = [
    {
      num: "01",
      title: "Discuss & Discover",
      desc: "Deep-dive session to extract exact functional and operational needs.",
    },
    {
      num: "02",
      title: "Scope Architecture",
      desc: "Detailed blueprint, hardware BOM, and vendor-neutral recommendations.",
    },
    {
      num: "03",
      title: "Executive Review",
      desc: "Interactive demonstration to align all stakeholders and verify milestones.",
    },
    {
      num: "04",
      title: "Build & Sign-off",
      desc: "Rigorous staging, deployment, and stress-testing under peak loads.",
    },
    {
      num: "05",
      title: "24/7 SLA Support",
      desc: "Dedicated account management, rapid response, and proactive upkeep.",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 bg-transparent overflow-hidden">
      <div className="ambient-glow-purple -top-40 -left-40 opacity-30" />
      <div className="ambient-glow-blue -bottom-40 -right-40 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header (Matching Dribbble Reference Image 5) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
            Why Choose Dervac
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2.5">
            Technical Rigor + Extreme Support ={" "}
            <span className="text-[#4a8ec9] block sm:inline">
              Your Competitive Edge
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Proven engineering methods that mitigate risk, preserve capital, and elevate operational productivity.
          </p>
        </div>

        {/* Bento Grid (Matching Dribbble Reference Image 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Expert + Human Insight (Top-Left: 5 cols) */}
          <div className="lg:col-span-5 glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 bg-black/60 border border-white/10 group">
              <Image
                src="/images/team_portrait.jpg"
                alt="Dervac Licensed Tech Engineers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-zinc-300 font-medium">
                Licensed Engineers • Lagos, Nigeria
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium mb-2">
                Certified Practitioners
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Expert + Human Insight
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Dervac comprises seasoned solution architects and certified engineers dedicated to surpassing client expectations through continuous technical upskilling and honest delivery.
              </p>
            </div>
          </div>

          {/* Card 2: 5-Stage Implementation Delivery (Top-Right: 7 cols) */}
          <div className="lg:col-span-7 glow-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-yellow-400">
                  The Dervac Way
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Methodology // 5-Step Pipeline
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Structured 5-Stage Service Delivery
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Predictable budgets, zero surprise bottlenecks, and client involvement at every milestone.
              </p>

              {/* Interactive Step Switcher */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {deliverySteps.map((step, idx) => (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      activeStep === idx
                        ? "bg-white/15 border-blue-500 text-white shadow-md shadow-blue-500/20"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">{step.num}</div>
                    <div className="text-[10px] hidden sm:block truncate font-medium mt-1">
                      {step.title.split(" ")[0]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Step Details */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono">
                    Step {deliverySteps[activeStep].num}
                  </span>
                  <span>{deliverySteps[activeStep].title}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {deliverySteps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Vendor Lock-in
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Fixed Milestone Sign-offs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Documented Handover
              </span>
            </div>
          </div>

          {/* Card 3: Scalable Architecture (Bottom-Left: 7 cols) */}
          <div className="lg:col-span-7 glow-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium mb-3">
                <Activity className="w-3.5 h-3.5" />
                Engineered for High-Load Scalability
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Scalable & Resilient Architecture
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                From high-density university CBT networks to multi-branch financial institutions, we architect systems designed to absorb sudden transaction spikes with zero operational degradation.
              </p>

              {/* High-Tech Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-extrabold text-white">99.9%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">SLA Target</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-extrabold text-white">&lt;15ms</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Core Latency</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-extrabold text-white">24/7</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Active NOC</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-extrabold text-white">100%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Power ATS</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-mono">STATUS: OPTIMAL RUNTIME</span>
              <span className="text-emerald-400 font-semibold">Palmgrove & Opebi Nodes Active</span>
            </div>
          </div>

          {/* Card 4: Verified Track Record (Bottom-Right: 5 cols, 2x2 stats matrix) */}
          <div className="lg:col-span-5 glow-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                Empirical Track Record
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Proven Regional Impact
              </h3>

              {/* 2x2 Stats (Matching Dribbble Reference Image 5 Bottom-Right) */}
              <div className="grid grid-cols-2 gap-4">
                {companyData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-zinc-300">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1 leading-tight">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 pt-4 mt-4 border-t border-white/5">
              *Verified empirical records from two decades of commercial operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
