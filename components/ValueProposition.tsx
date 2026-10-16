"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Scale, Cpu, HeadphonesIcon } from "lucide-react";
import { companyData } from "@/data/company";

export function ValueProposition() {
  const valueItems = [
    {
      icon: Award,
      title: "High-Level Industry Experience",
      description:
        "Two decades pioneering ICT deployments across Nigeria and Africa, solving complex enterprise challenges with battle-tested engineering.",
    },
    {
      icon: Scale,
      title: "Independent & Vendor-Neutral",
      description:
        "Technology-rooted and objective. We provide strategic architectural advice tailored strictly to your operational goals, free from vendor lock-in.",
    },
    {
      icon: Cpu,
      title: "End-to-End Turnkey Delivery",
      description:
        "We handle complete system lifecycles: from procurement and structured cabling to custom software, server clustering, and cloud integration.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dervac 'Extreme Customer Service'",
      description:
        "Personalized attention, rapid response times, and definitive follow-through. We stand steadfast with your team pre- and post-launch.",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-1/3 -right-40 opacity-30" />
      <div className="ambient-glow-blue bottom-10 -left-40 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Intro Statement Section (Matching Dribbble Reference Image 2 & 3) */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">
            At Dervac, we don&apos;t just plan your company&apos;s IT solutions; we{" "}
            <span className="text-[#4a8ec9] font-extrabold">
              build them, maintain them, and help you grow your business
            </span>{" "}
            with unyielding reliability.
          </p>

          <Link
            href="/profile"
            className="hero-gradient-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            <span>Explore Corporate Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3D Iridescent Object & 2x2 Capabilities Matrix (Matching Dribbble Reference Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 3D Iridescent Sculpture (Image 3 Left) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden p-1 bg-[#16273c]/50 border border-[#224c75]/40 shadow-2xl shadow-[#224c75]/20 group">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black/90 flex items-center justify-center">
                <Image
                  src="/images/iridescent_core.jpg"
                  alt="Dervac 3D Architectural Core"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle rim light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-300">
                    Systemic Integrity // Systematic Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Value Matrix (Image 3 Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-yellow-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
