"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Headphones,
  PhoneCall,
  Clock,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Send,
  MessageSquare,
  FileCheck,
  Server,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export default function SupportPage() {
  const [ticketSubject, setTicketSubject] = useState("");
  const [organization, setOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [priority, setPriority] = useState("Priority 2 (High)");
  const [issueDetails, setIssueDetails] = useState("");

  const emailSubject = encodeURIComponent(`[Dervac Enterprise Support - ${priority}] ${ticketSubject || "Technical Escalation"}`);
  const emailBody = encodeURIComponent(
    `Dear Dervac Support & NOC Team,\n\n` +
      `We require technical assistance regarding the following system issue:\n\n` +
      `Organization: ${organization}\n` +
      `Contact Name: ${contactName}\n` +
      `Priority Level: ${priority}\n` +
      `Incident Summary: ${ticketSubject}\n\n` +
      `Technical Details & Symptoms:\n${issueDetails || "Please contact our system administrator urgently."}\n\n` +
      `Transmitted via Dervac Online Enterprise Support Portal.`
  );

  const mailtoSupportUrl = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappEscalationMsg = encodeURIComponent(
    `*DERVAC EMERGENCY ESCALATION*\nPriority: ${priority}\nOrg: ${organization}\nName: ${contactName}\nIssue: ${ticketSubject}\nDetails: ${issueDetails}`
  );
  const whatsappEscalationUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappEscalationMsg}`;

  const slaTiers = [
    {
      level: "Priority 1 (Critical)",
      description: "Complete system down, core network outage, exam center interruption.",
      response: "< 1 Hour",
      resolutionTarget: "Under 4 Hours / Immediate On-site Dispatch",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      level: "Priority 2 (High)",
      description: "Degraded performance, secondary server node failure, non-critical database error.",
      response: "< 4 Hours",
      resolutionTarget: "Same Business Day",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      level: "Priority 3 (Standard)",
      description: "Routine user account updates, minor configuration changes, general inquiries.",
      response: "Within 24 Hours",
      resolutionTarget: "Next Business Day",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
  ];

  return (
    <main className="min-h-screen bg-[#08090d]">
      <PageHeader
        badge="Enterprise Support & SLAs"
        title="Mission-Critical Care."
        highlightedTitle="Extreme Customer Service."
        description="Stop worrying about IT issues. Dervac provides round-the-clock infrastructure monitoring, pre- and post-implementation care, hardware swaps, and rapid emergency escalation."
        breadcrumbs={[{ label: "Support & SLAs" }]}
      />

      {/* Emergency Hotline Bar */}
      <section className="py-6 bg-[#16273c]/60 border-b border-[#224c75]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#224c75]/30 flex items-center justify-center text-[#4a8ec9] flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Direct Technical Assistance Hotlines
              </div>
              <div className="text-xs text-zinc-400">
                Lagos Engineering Desk & Field Dispatch
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={`tel:${companyData.contacts.generalPhone}`}
              className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 font-mono font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              {companyData.contacts.generalPhone}
            </a>
            <a
              href={`tel:${companyData.contacts.supportPhone}`}
              className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 font-mono font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              {companyData.contacts.supportPhone}
            </a>
            <a
              href={`tel:${companyData.contacts.tollFreePhone}`}
              className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 font-mono font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              Free: {companyData.contacts.tollFreePhone}
            </a>
          </div>
        </div>
      </section>

      {/* SLA Tiers Section */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
            Structured Commitments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Enterprise Service Level Agreements (SLAs)
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Clear contractual response and resolution windows tailored to keep your enterprise operations uninterrupted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slaTiers.map((tier) => (
            <div key={tier.level} className="glow-card rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border mb-3 ${tier.badgeColor}`}>
                  {tier.level}
                </span>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-white/5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-medium">Initial Response:</span>
                  <strong className="text-white font-mono">{tier.response}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-medium">Resolution Target:</span>
                  <strong className="text-emerald-400 font-mono text-right">{tier.resolutionTarget}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Principles & Dispatch Form */}
      <section className="py-10 sm:py-14 bg-[#06070a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Support Pillars (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                The Dervac Support Philosophy
              </span>

              <h3 className="text-2xl font-bold text-white">
                Pre- and Post-Implementation Care
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                When you partner with Dervac, our engagement does not terminate at project handover. We establish proactive maintenance schedules, conduct quarterly hardware stress-tests, provide system component updates, and train your internal technicians to resolve day-to-day tier-1 inquiries.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <Server className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-white">Hardware Spawns & Turnaround</h5>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Rapid on-site replacement of damaged switches, power inverters, or network cards to prevent workflow shutdowns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <Clock className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-white">24/7 Automated Health Checks</h5>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Proactive ping and telemetry alerts that notify our Network Operations Center before end-users experience disruption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Support Dispatcher (7 Cols) */}
            <div className="lg:col-span-7 glow-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Incident Escalation Dispatcher
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Log an Operational Support Request
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Dispatches directly to Dervac support engineers via verified secure mail or WhatsApp channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Organization / Client Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Bank / Grace Academy"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Incident Title / Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Server cluster node 2 degraded"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Priority Classification
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Priority 1 (Critical / Outage)">Priority 1 (Critical / Outage)</option>
                    <option value="Priority 2 (High / Degraded)">Priority 2 (High / Degraded)</option>
                    <option value="Priority 3 (Standard / Routine)">Priority 3 (Standard / Routine)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Detailed Issue Description & Affected Systems
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe error codes, affected server IP addresses, or physical hardware symptoms..."
                  value={issueDetails}
                  onChange={(e) => setIssueDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={mailtoSupportUrl}
                  className="hero-gradient-btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Ticket to NOC (info@dervac.com)</span>
                </a>

                <a
                  href={whatsappEscalationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 font-medium text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Escalate to Duty Lead via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
