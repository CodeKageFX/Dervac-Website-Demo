"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  Server,
  BookOpenCheck,
  GraduationCap,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function RealWorldCapabilities() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "networking",
      icon: Network,
      title: "Structured Cabling & Fiber Backbones",
      tagline: "High-density enterprise connectivity with certified testing",
      image: "/images/infrastructure/network_cabling.jpg",
      description:
        "We engineer end-to-end structured cabling architectures that support intensive data traffic across multi-story office buildings, manufacturing hubs, and university campuses. From Cat6A copper termination to high-capacity optical fiber splicing, every drop is rigorously certified.",
      deliverables: [
        "Certified structured cabling & patch bay routing",
        "Single-mode and multi-mode optical fiber splicing",
        "Redundant WAN failover with dual ISP load balancing",
        "Enterprise wireless access points & captive portals",
      ],
      badge: "Physical Infrastructure",
    },
    {
      id: "servers",
      icon: Server,
      title: "Server Deployment & Clustering",
      tagline: "High-availability compute, storage SANs, and virtualization",
      image: "/images/infrastructure/server_hardware.jpg",
      description:
        "Dervac procures, configures, and maintains enterprise-tier server hardware from leading OEMs including Cisco, Dell, and HPE. We build fault-tolerant virtualized server clusters running mission-critical enterprise workloads with automated failover and zero data loss.",
      deliverables: [
        "Rackmount server configuration and bare-metal staging",
        "VMware and Hyper-V virtualization clustering",
        "Automated encrypted daily snapshot backups & disaster recovery",
        "24/7 proactive hardware health telemetry & rapid dispatch",
      ],
      badge: "Mission-Critical Systems",
    },
    {
      id: "cbt",
      icon: BookOpenCheck,
      title: "CBT Examination Centre Engineering",
      tagline: "Turnkey 100–500+ seat computer-based testing environments",
      image: "/images/infrastructure/cbt_lab.jpg",
      description:
        "Dervac is an experienced architect of large-scale Computer-Based Testing (CBT) centres for universities, professional bodies, and national examination councils in Nigeria. We deliver the complete physical and technical ecosystem required for cheat-proof, uninterrupted exam delivery.",
      deliverables: [
        "High-density local LAN with low-latency exam caching servers",
        "Solar inverter banks and automatic transfer switches for 100% uptime",
        "Biometric candidate authentication & electronic turnstiles",
        "Exam-day technical proctoring and standby engineering support",
      ],
      badge: "EdTech Infrastructure",
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "ICT Talent & Fellowship Academy",
      tagline: "Practical developer fellowships & corporate IT capacity building",
      image: "/images/genuine/team-e1fe3be6.jpg",
      description:
        "Through the Dervac ICT Hub and Dervac Academy at Palmgrove, Lagos, we train, mentor, and incubate technical talent. Our curriculum bridges the gap between academic theory and real-world software engineering, systems administration, and data analytics.",
      deliverables: [
        "Professional Software Engineering Fellowships (Full-Stack)",
        "Corporate workforce digital literacy & upskilling programs",
        "Hardware engineering, maintenance, and network configuration labs",
        "Direct talent placement pipeline into Nigerian enterprises",
      ],
      badge: "Genuine Dervac Hub",
    },
    {
      id: "cybersecurity",
      icon: ShieldAlert,
      title: "Cyber Defense & Premise Security",
      tagline: "Multi-layered network hardening and biometric access control",
      image: "/images/infrastructure/cyber_soc.jpg",
      description:
        "Securing enterprise assets demands both digital perimeter defense and physical access security. Dervac implements advanced Next-Gen firewalls, IP CCTV surveillance matrices, and biometric access control systems engineered to comply with Nigerian and international data regulations.",
      deliverables: [
        "Next-Generation Firewall (NGFW) & intrusion prevention setup",
        "High-definition IP surveillance with remote NVR monitoring",
        "Biometric access control terminals and electronic time & attendance",
        "Data protection alignment under the Nigeria Data Protection Act (NDPA)",
      ],
      badge: "Enterprise Security",
    },
  ];

  const current = capabilities[activeTab];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-4">
            Practical Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Real-World Infrastructure Deployed with Engineering Precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t just consult on blueprints. Dervac engineers install, configure, terminate, test, and maintain physical and digital systems on site across Nigeria.
          </p>
        </div>

        {/* Tab Buttons (Horizontal scrollable on mobile, pills on desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-[#0E2B61] text-white border-[#0E2B61] shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-300" : "text-slate-500"}`} />
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Display Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Image */}
            <div className="relative lg:col-span-6 h-72 sm:h-96 lg:h-auto min-h-[340px] bg-slate-950">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0E2B61] text-xs font-bold shadow-xs">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Right: Technical Narrative & Deliverables */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E2B61] mb-2">
                  {current.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {current.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Engineered Deliverables & SLAs
                  </div>
                  {current.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Deployed by licensed Dervac engineers in Lagos
                </span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0E2B61] hover:text-[#2563EB] transition-colors"
                >
                  <span>Explore full scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
