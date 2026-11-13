"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck2, Headphones } from "lucide-react";

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Understand & Discover",
      subtitle: "Requirements Extraction",
      description:
        "We begin with a thorough technical discovery session. Our engineers inspect existing infrastructure, audit bottlenecks, and map operational goals directly to business outcomes before proposing any hardware or software.",
      deliverables: [
        "Infrastructure site survey & pain-point audit",
        "Stakeholder requirement matrix",
        "Initial feasibility & budget alignment",
      ],
      duration: "Week 1",
    },
    {
      num: "02",
      title: "Plan & Architecture Scope",
      subtitle: "Vendor-Neutral Blueprints",
      description:
        "Our solution architects draft comprehensive network topologies, software system architecture, and detailed Bill of Materials (BOM). We remain vendor-neutral, selecting the optimal OEMs based strictly on performance and client ROI.",
      deliverables: [
        "Network topology & server architecture blueprints",
        "OEM hardware procurement specification",
        "Implementation milestone roadmap & SLA definition",
      ],
      duration: "Weeks 1–2",
    },
    {
      num: "03",
      title: "Build & Configure",
      subtitle: "Precision Engineering",
      description:
        "Certified engineers handle the physical installation, structured cabling termination, server virtualization, or bespoke software engineering. Staging occurs under controlled environments with rigorous quality checks.",
      deliverables: [
        "Bare-metal staging & virtualization setup",
        "Structured Cat6A/fiber optic cable termination",
        "Software sprint delivery & secure API integration",
      ],
      duration: "Weeks 3–6",
    },
    {
      num: "04",
      title: "Deploy & Sign-Off",
      subtitle: "Stress Testing & Commissioning",
      description:
        "Before go-live, systems undergo load stress-testing, failover simulations, and user acceptance testing (UAT). We conduct thorough administrator training and deliver complete technical documentation for executive sign-off.",
      deliverables: [
        "Peak-load simulation & disaster failover test",
        "User Acceptance Testing (UAT) sign-off",
        "Complete technical handover documentation & staff training",
      ],
      duration: "Week 7",
    },
    {
      num: "05",
      title: "Support & Proactive SLA",
      subtitle: "Dervac Extreme Customer Service",
      description:
        "Post-implementation, Dervac provides proactive infrastructure monitoring, scheduled maintenance visits, and emergency SLA dispatch from our Palmgrove and Ikeja operational hubs.",
      deliverables: [
        "Guaranteed incident response times (P1/P2/P3)",
        "Scheduled preventive hardware & network maintenance",
        "Continuous security patching & firmware updates",
      ],
      duration: "Continuous",
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Tech Texture */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E2B61] rounded-full filter blur-[128px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
            Delivery Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How We Work: Predictable Delivery, Zero Bottlenecks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our 5-stage engineering pipeline ensures transparency, fixed milestone sign-offs, and dependable execution on every corporate engagement.
          </p>
        </div>

        {/* Process Timeline Bar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2563EB] border-[#2563EB] text-white shadow-lg shadow-blue-900/40 translate-y-[-2px]"
                    : "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-white" : "text-blue-400"}`}>
                    {step.num}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-slate-200">
                    {step.duration}
                  </span>
                </div>
                <div className="text-sm font-bold truncate">{step.title}</div>
                <div className={`text-xs mt-1 truncate ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Number & Description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#2563EB]">
                  {current.num}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Stage {current.num} • {current.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4 mb-6">
                {current.description}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Milestones & Deliverables
                </div>
                {current.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Commitments & SLA highlights */}
            <div className="lg:col-span-5 bg-white/[0.04] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                The Dervac Promise
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Zero Vendor Lock-In:</strong> Open architecture using international RFC and ISO standards.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Milestone Sign-Offs:</strong> Payment gates linked directly to verified completion benchmarks.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Headphones className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Dedicated Account Engineer:</strong> Single direct escalation point on call 24/7.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Next milestone: Stage {steps[(activeStep + 1) % steps.length].num}</span>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Advance stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}