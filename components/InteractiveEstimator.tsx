"use client";

import React, { useState } from "react";
import { Calculator, Send, MessageSquare, CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";
import { companyData } from "@/data/company";

export function InteractiveEstimator() {
  const [selectedSolution, setSelectedSolution] = useState("Enterprise Infrastructure & Cabling");
  const [selectedTimeline, setSelectedTimeline] = useState("Standard (30 - 60 Days)");
  const [selectedScale, setSelectedScale] = useState("Medium Enterprise (50 - 250 Users)");
  const [customNotes, setCustomNotes] = useState("");

  const solutions = [
    { name: "Enterprise Infrastructure & Cabling", deliverables: ["Server Racks", "Fiber Backbone", "ATS Power Inverter"] },
    { name: "Custom Web Application & ERP", deliverables: ["Architecture Blueprint", "PostgreSQL Backend", "Role-based Portals"] },
    { name: "CBT Examination Centre Setup", deliverables: ["Client PC Terminals", "Isolated Subnet LAN", "Anti-Cheating Firewall"] },
    { name: "Cybersecurity & Surveillance Defense", deliverables: ["Perimeter Hardening", "IP CCTV System", "Biometric Access Control"] },
    { name: "Corporate ICT Training Cohort", deliverables: ["Hands-On Lab Curriculum", "Staff Assessment", "Certification Diplomas"] },
  ];

  const currentSolution = solutions.find((s) => s.name === selectedSolution) || solutions[0];

  const emailSubject = encodeURIComponent(`[Project Scope Brief] ${selectedSolution} - Indicative Request`);
  const emailBody = encodeURIComponent(
    `Dear Dervac Global Services Solutions Team,\n\n` +
      `We have configured an indicative project scope via the Dervac online platform:\n\n` +
      `Primary Solution: ${selectedSolution}\n` +
      `Target Timeline: ${selectedTimeline}\n` +
      `Estimated Organizational Scale: ${selectedScale}\n\n` +
      `Key Expected Deliverables:\n${currentSolution.deliverables.map((d) => `• ${d}`).join("\n")}\n\n` +
      `Additional Scope Notes:\n${customNotes || "Please contact our office for complete architectural review and scheduling."}\n\n` +
      `Kindly assign a senior solution architect to review our requirements.\n\nThank you.`
  );

  const mailtoUrl = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMsg = encodeURIComponent(
    `Hello Dervac Team, I have prepared a project scope for *${selectedSolution}* (${selectedScale}, ${selectedTimeline}). Notes: ${customNotes || "Interested in consultation"}`
  );
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMsg}`;

  return (
    <section className="relative py-10 sm:py-14 bg-transparent border-t border-white/[0.06] overflow-hidden">
      <div className="ambient-glow-purple -top-40 right-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            Interactive Scope Planner
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2.5">
            Configure Your <span className="text-[#4a8ec9]">Project Scope</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Select your technical requirements to generate an instant, formatted enterprise brief for Dervac solution architects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 glow-card rounded-2xl p-5 sm:p-7 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                1. Select Primary Solution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {solutions.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedSolution(s.name)}
                    className={`p-3.5 rounded-xl text-left border text-xs font-medium transition-all ${
                      selectedSolution === s.name
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                2. Target Implementation Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "Fast-Track (< 30 Days)",
                  "Standard (30 - 60 Days)",
                  "Multi-Phase (90+ Days)",
                ].map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeline(time)}
                    className={`p-3 rounded-xl text-center border text-xs font-medium transition-all ${
                      selectedTimeline === time
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                3. Estimated Deployment Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "Small Office (1 - 49 Users)",
                  "Medium Enterprise (50 - 250 Users)",
                  "Large / Campus (250+ Users)",
                ].map((scale) => (
                  <button
                    key={scale}
                    onClick={() => setSelectedScale(scale)}
                    className={`p-3 rounded-xl text-center border text-xs font-medium transition-all ${
                      selectedScale === scale
                        ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]"
                    }`}
                  >
                    {scale}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                4. Optional Specific Notes / Locations
              </label>
              <input
                type="text"
                placeholder="e.g., Office branch in Victoria Island, requirement for 100 kVA inverter"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Generated Scope Summary Card (5 Cols) */}
          <div className="lg:col-span-5 glow-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                Generated Project Scope
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-zinc-400 font-mono">
                Ready to Dispatch
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-zinc-500 block">Selected Domain:</span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {selectedSolution}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                <div>
                  <span className="text-zinc-500 block">Timeline:</span>
                  <span className="font-semibold text-zinc-200 mt-0.5 block">{selectedTimeline}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Scale:</span>
                  <span className="font-semibold text-zinc-200 mt-0.5 block">{selectedScale}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-zinc-500 block mb-2 font-medium">Standard Dervac Deliverables:</span>
                <div className="space-y-1.5">
                  {currentSolution.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Dervac 5-Stage Implementation Oversight</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Dispatch Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-[11px] text-zinc-400">
                Click below to dispatch this structured brief directly to our technical desk:
              </p>

              <a
                href={mailtoUrl}
                className="hero-gradient-btn w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Brief via Email (info@dervac.com)</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 font-medium text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Instant Review on WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
