"use client";

import React, { useState } from "react";
import { X, Server, Shield, Cpu, Activity, CheckCircle, Database, Network } from "lucide-react";
import Image from "next/image";

interface HeroPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HeroPreviewModal({ isOpen, onClose }: HeroPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"infrastructure" | "software" | "cbt">("infrastructure");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0c0e14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-xs text-zinc-400 font-mono pl-2 border-l border-white/10">
              dervac-systems-console // v4.2.0-live
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
            aria-label="Close interactive console"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/10 bg-black/40 px-6 gap-2">
          <button
            onClick={() => setActiveTab("infrastructure")}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === "infrastructure"
                ? "border-blue-500 text-white bg-white/[0.04]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Server className="w-3.5 h-3.5 text-blue-400" />
            Enterprise Infrastructure & Servers
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === "software"
                ? "border-indigo-500 text-white bg-white/[0.04]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Custom Software & Integration Stack
          </button>
          <button
            onClick={() => setActiveTab("cbt")}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === "cbt"
                ? "border-emerald-500 text-white bg-white/[0.04]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Network className="w-3.5 h-3.5 text-emerald-400" />
            Nationwide CBT Center Architecture
          </button>
        </div>

        {/* Content View */}
        <div className="p-6 sm:p-8 space-y-6">
          {activeTab === "infrastructure" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs text-zinc-400 mb-1 flex items-center justify-between">
                    <span>Power Redundancy</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-white">Dual Solar + Gen</div>
                  <div className="text-xs text-zinc-500 mt-1">Automatic ATS failover in &lt;50ms</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs text-zinc-400 mb-1 flex items-center justify-between">
                    <span>Server Virtualization</span>
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="text-xl font-bold text-white">VMware / Proxmox</div>
                  <div className="text-xs text-zinc-500 mt-1">Zero-downtime live workload migration</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs text-zinc-400 mb-1 flex items-center justify-between">
                    <span>Network Backbone</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <div className="text-xl font-bold text-white">10GbE Fiber Ring</div>
                  <div className="text-xs text-zinc-500 mt-1">Certified Cat6A & Single-mode Fiber</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-500/20 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    End-to-End Enterprise SLA Assurance
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Dervac provides 24/7 on-call hardware swaps, regular firmware patch management, and automated remote system health heartbeat checks for all deployed server environments.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "software" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                    <Database className="w-4 h-4" />
                    <span>Data & API Middleware</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Enterprise Integrations</h4>
                  <p className="text-xs text-zinc-400">
                    Synchronizing legacy SQL / Oracle databases with modern event-driven web applications, microservices, and mobile interfaces.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                    <Activity className="w-4 h-4" />
                    <span>Real-time Portals</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Automated ERP Systems</h4>
                  <p className="text-xs text-zinc-400">
                    End-to-end organizational workflows covering human resources, payroll computation, inventory warehousing, and financial reporting.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-mono text-zinc-400 mb-2">Core Engineering Disciplines</div>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Next.js", "Python", "Go", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Kafka", "Linux Hardening"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs text-zinc-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "cbt" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Turnkey High-Capacity Examination Centers
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dervac designs, wires, equips, and operates CBT examination halls ranging from 100 to 500+ seaters. Equipped with low-power client terminals, isolated exam local area subnets, local caching servers to mitigate internet drops, and biometric check-in cubicles.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-lg font-bold text-white">500+</div>
                  <div className="text-[10px] text-zinc-400">Seats per Venue</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-lg font-bold text-white">0%</div>
                  <div className="text-[10px] text-zinc-400">Packet Drop Rate</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-lg font-bold text-white">Biometric</div>
                  <div className="text-[10px] text-zinc-400">Candidate Auth</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-lg font-bold text-white">JAMB</div>
                  <div className="text-[10px] text-zinc-400">Compliant Specs</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
