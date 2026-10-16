"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Shield, Server, Users, Award } from "lucide-react";
import { companyData } from "@/data/company";
import { ConsultationModal } from "./ConsultationModal";
import { HeroPreviewModal } from "./HeroPreviewModal";

export function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <section className="relative pt-24 sm:pt-30 pb-8 sm:pb-12 overflow-hidden bg-transparent">
        {/* Subtle Ambient Radial Glows */}
        <div className="ambient-glow-purple -top-40 left-1/2 -translate-x-1/2 opacity-50" />
        <div className="ambient-glow-blue top-60 -left-40 opacity-40" />

        {/* Fluid Vector Ribbons in Dervac Blue */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg
            className="absolute -top-20 -left-40 w-[800px] h-[800px]"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100,200 C300,100 500,600 900,400 C1100,300 1200,800 1200,800"
              stroke="#224c75"
              strokeWidth="2.5"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
            <path
              d="M-50,250 C320,160 520,620 920,430 C1120,330 1220,830 1220,830"
              stroke="#4a8ec9"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Right side sweeping ribbon */}
          <svg
            className="absolute -bottom-20 -right-40 w-[750px] h-[750px]"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1100,800 C800,900 600,400 200,600 C0,700 -100,200 -100,200"
              stroke="#224c75"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs sm:text-sm text-zinc-300 mb-4 transition-transform hover:scale-105">
            <span className="px-2 py-0.5 rounded-full bg-[#224c75]/30 text-[#4a8ec9] font-semibold text-[11px] uppercase tracking-wider border border-[#224c75]/50">
              NEXT-GEN ICT
            </span>
            <span className="text-zinc-400 font-medium">
              Enterprise Technology Solutions & Skills Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-3.5">
            Architecting ICT Systems.{" "}
            <span className="text-[#4a8ec9] block sm:inline">
              Powering Enterprise Scale.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-zinc-400 font-normal leading-relaxed mb-5">
            Dervac Global Services delivers robust server infrastructure, custom software engineering, cybersecurity, and digital skills incubation to power Africa's most demanding organizations.
          </p>

          {/* Credibility / Social Proof Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-blue-900 border-2 border-[#08090d] flex items-center justify-center text-xs font-bold text-white">
                <Server className="w-3 h-3 text-blue-300" />
              </div>
              <div className="w-7 h-7 rounded-full bg-indigo-900 border-2 border-[#08090d] flex items-center justify-center text-xs font-bold text-white">
                <Shield className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-900 border-2 border-[#08090d] flex items-center justify-center text-xs font-bold text-white">
                <Award className="w-3 h-3 text-purple-300" />
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-900 border-2 border-[#08090d] flex items-center justify-center text-xs font-bold text-white">
                <Users className="w-3 h-3 text-emerald-300" />
              </div>
            </div>
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">
              <strong className="text-zinc-200">20+ Years</strong> of Industry Excellence •{" "}
              <strong className="text-zinc-200">15,000+</strong> Alumni Trained
            </span>
          </div>

          {/* Dual CTAs (Matching Dribbble Reference) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8 sm:mb-10">
            <button
              onClick={() => setConsultationOpen(true)}
              className="hero-gradient-btn w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-white font-semibold text-sm cursor-pointer shadow-xl transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setPreviewOpen(true)}
              className="secondary-pill-btn w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-zinc-200 font-medium text-sm cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-zinc-300" />
              <span>See Our Architecture</span>
            </button>
          </div>

          {/* Floating Media Showcase Card (Matching Dribbble Reference Image 1 & 2) */}
          <div className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/[0.03] border border-white/15 shadow-2xl shadow-black/80">
            <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 group">
              <Image
                src="/images/hero_tech_setup.jpg"
                alt="Dervac Technology Workstation and Command Operations"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Central Pulse Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="relative group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-black shadow-2xl transition-transform hover:scale-110 active:scale-95"
                  aria-label="Open architecture overview"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/30" />
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-black" />
                </button>
              </div>

              {/* Floating badges on media card */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Dervac Enterprise Operations Center (Lagos, Nigeria)</span>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                    SLA: 99.9% Uptime Target
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-xs text-blue-300">
                    Active Deployments: 100+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <HeroPreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
      />
    </>
  );
}
