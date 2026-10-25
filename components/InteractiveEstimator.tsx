"use client";

import React, { useState } from "react";
import {
  Calculator,
  Send,
  MessageSquare,
  CheckCircle2,
  FileText,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { companyData } from "@/data/company";

export function InteractiveEstimator() {
  const [selectedSolution, setSelectedSolution] = useState("Enterprise Infrastructure & Cabling");
  const [selectedTimeline, setSelectedTimeline] = useState("Standard (30 - 60 Days)");
  const [selectedScale, setSelectedScale] = useState("Medium Enterprise (50 - 250 Users)");
  const [customNotes, setCustomNotes] = useState("");

  // Contact details
  const [contactName, setContactName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  // Submission state
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reference, setReference] = useState("");

  const solutions = [
    {
      name: "Enterprise Infrastructure & Cabling",
      deliverables: ["Server Racks & Structured Cabling", "Fiber Backbone & Core Switching", "ATS Power Inverter Integration"],
    },
    {
      name: "Custom Web Application & ERP",
      deliverables: ["Architecture Blueprint", "PostgreSQL / Enterprise Backend", "Role-Based Administrative Portals"],
    },
    {
      name: "CBT Examination Centre Setup",
      deliverables: ["Client PC Workstations", "Isolated Subnet LAN Routing", "Secure Anti-Cheating Environment"],
    },
    {
      name: "Cybersecurity & Surveillance Defense",
      deliverables: ["Perimeter Network Hardening", "IP CCTV Surveillance System", "Biometric Access Control"],
    },
    {
      name: "Corporate ICT Training Cohort",
      deliverables: ["Hands-On Lab Curriculum", "Staff Assessment & Progress Tracking", "Professional Certifications"],
    },
  ];

  const currentSolution = solutions.find((s) => s.name === selectedSolution) || solutions[0];

  const resetPlanner = () => {
    setSelectedSolution("Enterprise Infrastructure & Cabling");
    setSelectedTimeline("Standard (30 - 60 Days)");
    setSelectedScale("Medium Enterprise (50 - 250 Users)");
    setCustomNotes("");
    setContactName("");
    setOrganization("");
    setEmail("");
    setPhone("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
    setReference("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!contactName.trim() || contactName.trim().length < 2) {
      setErrorMessage("Please provide a contact person name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage("Please provide a valid contact phone number.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/scope-planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          solution: selectedSolution,
          timeline: selectedTimeline,
          scale: selectedScale,
          deliverables: currentSolution.deliverables,
          customNotes: customNotes.trim(),
          contactName: contactName.trim(),
          organization: organization.trim(),
          email: email.trim(),
          phone: phone.trim(),
          hp_website: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to save scope brief. Please try again.");
      }

      setReference(data.reference || "DRV-SCP-RECORDED");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred while saving the scope brief."
      );
    }
  };

  const whatsappMsg = encodeURIComponent(
    `*DERVAC PROJECT SCOPE BRIEF* ${reference ? `[Ref: ${reference}]` : ""}\n` +
      `Solution: ${selectedSolution}\n` +
      `Scale: ${selectedScale}\n` +
      `Timeline: ${selectedTimeline}\n` +
      `Client: ${contactName} (${organization || "Individual"})\n` +
      `Phone: ${phone}\n` +
      `Notes: ${customNotes || "Prepared via Scope Planner"}`
  );
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMsg}`;

  return (
    <section className="py-12 sm:py-16 bg-[#F9FAFB] border-t border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-xs font-semibold text-[#224C75] uppercase tracking-wider mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-[#224C75]" />
            Interactive Scope Planner
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight leading-tight mb-2">
            Configure Your Project Scope
          </h2>

          <p className="text-xs sm:text-sm text-gray-600">
            Select your technical requirements to generate a structured enterprise brief for Dervac solution architects. Indicative only; final scopes are formalized after technical discovery.
          </p>
        </div>

        {status === "success" ? (
          <div className="max-w-2xl mx-auto bg-white p-7 sm:p-10 rounded-3xl border border-emerald-200 shadow-sm space-y-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Brief Registered Successfully
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Project Scope Saved
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Your scope brief has been saved under an official reference number. Our solutions engineering team will review the deliverables and contact you with preliminary architectural feedback.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200 text-xs space-y-2.5">
              <div className="flex justify-between items-center text-gray-600">
                <span>Reference ID:</span>
                <span className="font-mono font-bold text-gray-900 text-base">{reference}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Solution Domain:</span>
                <span className="font-medium text-gray-800">{selectedSolution}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Target Timeline:</span>
                <span className="font-medium text-gray-800">{selectedTimeline}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Deployment Scale:</span>
                <span className="font-medium text-gray-800">{selectedScale}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Contact:</span>
                <span className="font-medium text-gray-800">{contactName} ({email})</span>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <span className="text-gray-500 font-semibold block mb-1.5">Standard Deliverables Included:</span>
                <ul className="space-y-1 text-gray-700">
                  {currentSolution.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#224C75] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Scope on WhatsApp With Reference</span>
              </a>

              <button
                type="button"
                onClick={resetPlanner}
                className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-gray-500" />
                <span>Configure Another Brief</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_website_planner">Leave blank</label>
              <input
                id="hp_website_planner"
                type="text"
                name="hp_website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Configuration Controls (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-7 space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Error:</strong> {errorMessage}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2.5">
                  1. Select Primary Solution
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {solutions.map((s) => (
                    <button
                      type="button"
                      key={s.name}
                      onClick={() => setSelectedSolution(s.name)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                        selectedSolution === s.name
                          ? "bg-[#224C75]/10 border-[#224C75] text-[#224C75] font-semibold"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2.5">
                  2. Target Implementation Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    "Fast-Track (< 30 Days)",
                    "Standard (30 - 60 Days)",
                    "Multi-Phase (90+ Days)",
                  ].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTimeline(time)}
                      className={`p-2.5 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                        selectedTimeline === time
                          ? "bg-[#224C75]/10 border-[#224C75] text-[#224C75] font-semibold"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2.5">
                  3. Estimated Deployment Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    "Small Office (1 - 49 Users)",
                    "Medium Enterprise (50 - 250 Users)",
                    "Large / Campus (250+ Users)",
                  ].map((scale) => (
                    <button
                      type="button"
                      key={scale}
                      onClick={() => setSelectedScale(scale)}
                      className={`p-2.5 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                        selectedScale === scale
                          ? "bg-[#224C75]/10 border-[#224C75] text-[#224C75] font-semibold"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                  4. Scope Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Branch location in Ikeja, requirement for ATS inverter backup..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                />
              </div>

              <div className="pt-2 border-t border-gray-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2.5">
                  5. Contact Information (For Architect Review)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Babatunde Lawal"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Zenith Tech Ltd"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="babatunde@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Scope Summary Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 space-y-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#224C75]" />
                  Scope Summary
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#224C75]/10 text-[#224C75] font-semibold border border-[#224C75]/20">
                  Ready to Transmit
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-500 block">Selected Domain:</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5 block">
                    {selectedSolution}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-gray-500 block">Timeline:</span>
                    <span className="font-medium text-gray-800 mt-0.5 block">{selectedTimeline}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Scale:</span>
                    <span className="font-medium text-gray-800 mt-0.5 block">{selectedScale}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="text-gray-500 block mb-2 font-semibold">Standard Deliverables:</span>
                  <div className="space-y-1.5">
                    {currentSolution.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#224C75] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Dervac 5-Stage Implementation Oversight</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 space-y-3">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving Brief to Architecture Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Scope Brief & Generate Reference</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-500 text-center leading-normal">
                  Indicative estimation only. Transmitting creates a recorded brief in our solution architecture queue.
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
