"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Server, Terminal, Network } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";

export function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#07132B] text-white overflow-hidden">
        {/* Full-Width Real-World Infrastructure Background Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/infrastructure/hero_datacenter.jpg"
            alt="Enterprise Datacenter and Network Infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          />
          {/* Sophisticated Deep Navy Enterprise Gradient Overlays for Guaranteed Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#07132B]/90 to-[#0E2B61]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-[#07132B]/60" />
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 flex flex-col justify-between min-h-[580px] lg:min-h-[660px]">
          {/* Top Verification & Accreditation Pill */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs sm:text-[13px] font-medium text-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white tracking-wide">
                Dervac Global Services Ltd
              </span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">
                Enterprise ICT Firm • Lagos, Nigeria
              </span>
            </div>
          </div>

          {/* Main Headline & Supporting Text Area */}
          <div className="max-w-3xl">
            {/* Headline: Strictly <= 8 Words (6 Words) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Engineering Technology That Moves Business Forward.
            </h1>

            {/* Concise Supporting Sentence */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              From enterprise software to network infrastructure, we deliver mission-critical technology solutions built around your business.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-900/30 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA: Talk to an Engineer */}
              <button
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Talk to an Engineer</span>
              </button>
            </div>
          </div>

          {/* Bottom Subtle Technical Verification Ribbon */}
          <div className="mt-14 sm:mt-18 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">20+ Years</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Enterprise Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Network className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Turnkey Networks</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Cabling & Fiber Rollouts</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Server className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">High Availability</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Server Deployments & SLA</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Terminal className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Palmgrove & Ikeja</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Hub & HQ Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}