"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Headphones,
  PhoneCall,
  Send,
  MessageSquare,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Mail,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export function SupportView() {
  const [priority, setPriority] = useState("Priority 2 (High)");
  const [organization, setOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orgSize, setOrgSize] = useState("26–100 Workstations / Users");
  const [ticketSubject, setTicketSubject] = useState("");
  const [issueDetails, setIssueDetails] = useState("");

  // Honeypot & timing spam protection
  const [honeypot, setHoneypot] = useState("");
  const renderTimeRef = useRef<number>(0);

  useEffect(() => {
    renderTimeRef.current = Date.now();
  }, []);

  // Form submission states
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");

  const resetForm = () => {
    setPriority("Priority 2 (High)");
    setOrganization("");
    setContactName("");
    setEmail("");
    setPhone("");
    setOrgSize("26–100 Workstations / Users");
    setTicketSubject("");
    setIssueDetails("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
    setTicketNumber("");
    renderTimeRef.current = Date.now();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!organization.trim() || organization.trim().length < 2) {
      setErrorMessage("Please enter your organization or client name (minimum 2 characters).");
      return;
    }
    if (!contactName.trim() || contactName.trim().length < 2) {
      setErrorMessage("Please enter a contact person name and title.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid contact email address.");
      return;
    }
    if (!ticketSubject.trim() || ticketSubject.trim().length < 5) {
      setErrorMessage("Please provide an incident summary subject (minimum 5 characters).");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organization: organization.trim(),
          contactName: contactName.trim(),
          email: email.trim() || undefined,
          phone: phone.trim() || undefined,
          priority,
          orgSize,
          ticketSubject: ticketSubject.trim(),
          issueDetails: issueDetails.trim(),
          hp_website: honeypot,
          formRenderTime: renderTimeRef.current,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to register support ticket. Please call our hotline.");
      }

      setTicketNumber(data.ticketNumber || "DRV-SUP-RECORDED");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while logging the support ticket. Please contact our engineering hotline directly."
      );
    }
  };

  // WhatsApp Pre-filled escalation link with ticket reference
  const whatsappEscalationMsg = encodeURIComponent(
    `*DERVAC ENTERPRISE SUPPORT ESCALATION* ${ticketNumber ? `[Ticket: ${ticketNumber}]` : ""}\n` +
      `Priority: ${priority}\n` +
      `Organization: ${organization || "Unspecified"}\n` +
      `Contact Name: ${contactName || "Unspecified"}\n` +
      `Environment Size: ${orgSize}\n` +
      `Incident Summary: ${ticketSubject || "Technical Escalation"}\n` +
      `Details: ${issueDetails || "Please contact our engineering desk."}`
  );
  const whatsappEscalationUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappEscalationMsg}`;

  // Email Pre-filled mailto link
  const emailSubject = encodeURIComponent(
    `[Dervac Support Request - ${priority}] ${ticketNumber ? `[${ticketNumber}] ` : ""}${ticketSubject || "Technical Escalation"}`
  );
  const emailBody = encodeURIComponent(
    `Dear Dervac Engineering & NOC Support,\n\n` +
      `We are requesting technical support for the following incident:\n\n` +
      (ticketNumber ? `Official Ticket Number: ${ticketNumber}\n` : "") +
      `Organization: ${organization}\n` +
      `Contact Name: ${contactName}\n` +
      `Email: ${email || "Not provided"}\n` +
      `Phone: ${phone || "Not provided"}\n` +
      `Organization Size: ${orgSize}\n` +
      `Support Priority: ${priority}\n` +
      `Incident Summary: ${ticketSubject}\n\n` +
      `Detailed Symptoms:\n${issueDetails || "Please contact us to assist with this issue."}\n\n` +
      `Submitted via Dervac Online Enterprise Support Request.`
  );
  const mailtoSupportUrl = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  const priorityDefinitions = [
    {
      level: "Priority 1 (Critical)",
      title: "Complete System Outage",
      badge: "Critical Incident",
      badgeClass: "bg-red-50 text-red-700 border-red-200",
      description:
        "Total server shutdown, primary database unreachable, mission-critical network down, or active CBT examination centre interruption.",
      criteria: "Operations completely halted with no immediate workaround.",
    },
    {
      level: "Priority 2 (High)",
      title: "Degraded Operational Performance",
      badge: "High Severity",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      description:
        "Secondary server failover issue, non-critical database latency, intermittent connectivity, or degraded user throughput.",
      criteria: "Core business continues but team operates with significant impediment.",
    },
    {
      level: "Priority 3 (Standard)",
      title: "Configuration & Routine Inquiries",
      badge: "Standard Maintenance",
      badgeClass: "bg-[#224C75]/10 text-[#224C75] border-[#224C75]/20",
      description:
        "Routine software configuration adjustments, user account provisioning, minor non-blocking bug reports, or scheduled equipment servicing.",
      criteria: "General maintenance with zero disruption to active business transactions.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Enterprise Support"
        title="Technical Support & Maintenance."
        highlightedTitle="Priority-Based Assistance."
        description="Dervac provides structured maintenance contracts and rapid incident resolution for enterprise servers, networks, CBT centres, and software deployments across Lagos and Nigeria."
        breadcrumbs={[{ label: "Support & Priorities" }]}
      />

      {/* Direct Phone Assistance Bar */}
      <section className="bg-[#F9FAFB] border-b border-gray-200/80 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-900 block">
                Direct Engineering Support Hotlines
              </span>
              <span className="text-[11px] text-gray-500">
                Lagos NOC & Field Engineering Dispatch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${companyData.contacts.generalPhone}`}
              className="text-gray-700 hover:text-[#224C75] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#224C75]" />
              <span>{companyData.contacts.generalPhone}</span>
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`tel:${companyData.contacts.supportPhone}`}
              className="text-gray-700 hover:text-[#224C75] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#224C75]" />
              <span>{companyData.contacts.supportPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who the Support Offering is For & Paid Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                Service Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                Dependable IT Care for Demanding Organizations
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Dervac&apos;s support services are designed for commercial enterprises, healthcare centers, educational institutions, and financial facilities that rely on uninterrupted server uptime, secure local networks, and dependable software availability.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rather than treating IT maintenance as an afterthought, our certified field engineers and systems integrators operate structured service level agreements to preempt hardware failure, conduct regular health checks, and maintain emergency spares.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200/90 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  <FileCheck className="w-4 h-4 text-[#224C75]" />
                  <span>Paid Enterprise Service Notice</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Support and field technician dispatches are provided as a paid professional service under structured annual maintenance contracts (AMCs) or retainer agreements. Uncontracted emergency dispatches are subject to technical triage and initial assessment fees.
                </p>
                <div className="pt-2 text-[11px] text-gray-500 border-t border-gray-200/60">
                  Custom SLA parameters and dedicated on-site technician options are finalized during contract engagement.
                </div>
              </div>
            </div>
          </div>

          {/* Priority Levels Explanation */}
          <div className="mb-14">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                Triage Hierarchy
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">
                Support Priority Definitions
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                When logging an issue, select the priority level that accurately reflects your business operational impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {priorityDefinitions.map((item) => (
                <div
                  key={item.level}
                  className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {item.level}
                    </h4>
                    <p className="text-xs font-medium text-gray-500 mb-3">
                      {item.title}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/60 text-[11px] text-gray-500">
                    <strong className="text-gray-700">Criteria:</strong> {item.criteria}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Support Request Flow */}
          <div className="rounded-3xl border border-gray-200/90 bg-[#F9FAFB] p-6 sm:p-10 shadow-2xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                Incident Dispatch Flow
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">
                Log an Enterprise Support Ticket
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Provide your incident details below. Submissions are registered to our engineering triage queue with an official ticket number for duty manager dispatch.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-white p-7 sm:p-9 rounded-2xl border border-emerald-200 shadow-sm space-y-5">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Support Incident Registered
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    Ticket Logged Successfully
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Your support request has been registered in the Dervac engineering queue. For high-priority and critical incidents, our duty technicians also monitor WhatsApp for direct coordination.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-2">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Ticket Number:</span>
                    <span className="font-mono font-bold text-gray-900 text-base">
                      {ticketNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Organization:</span>
                    <span className="font-medium text-gray-800">{organization}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Severity Level:</span>
                    <span className="font-semibold text-[#224C75]">{priority}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Incident Subject:</span>
                    <span className="font-medium text-gray-800">{ticketSubject}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={whatsappEscalationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Escalate on WhatsApp With Ticket ID</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-gray-500" />
                    <span>Log Another Incident</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot hidden input */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_website_support">Leave blank</label>
                  <input
                    id="hp_website_support"
                    type="text"
                    name="hp_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Error Notification */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Submission Error:</strong>{" "}
                      {errorMessage}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Organization / Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "submitting"}
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex Health Clinic / Horizon College"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                    />
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Contact Person & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "submitting"}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Engr. Babatunde / IT Manager"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Contact Email Address
                    </label>
                    <input
                      type="email"
                      disabled={status === "submitting"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="babatunde@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Direct Callback Phone Number
                    </label>
                    <input
                      type="tel"
                      disabled={status === "submitting"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                    />
                  </div>

                  {/* Support Priority */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Incident Priority Level *
                    </label>
                    <select
                      disabled={status === "submitting"}
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    >
                      <option value="Priority 1 (Critical)">Priority 1 (Critical) — Complete Outage / Exam Halt</option>
                      <option value="Priority 2 (High)">Priority 2 (High) — Degraded Server / Intermittent Error</option>
                      <option value="Priority 3 (Standard)">Priority 3 (Standard) — Routine Configuration / Inquiry</option>
                    </select>
                  </div>

                  {/* Organization Size */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Environment / Infrastructure Scale
                    </label>
                    <select
                      disabled={status === "submitting"}
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                    >
                      <option value="1–25 Workstations / Users">Small (1–25 Workstations / Devices)</option>
                      <option value="26–100 Workstations / Users">Medium (26–100 Workstations / Devices)</option>
                      <option value="100+ Enterprise Terminals">Large (100+ Enterprise Terminals / CBT Center)</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Incident Summary / Subject *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Core switch offline in Server Room B / Medisure report sync error"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Detailed Symptoms & System Notes
                  </label>
                  <textarea
                    rows={4}
                    disabled={status === "submitting"}
                    value={issueDetails}
                    onChange={(e) => setIssueDetails(e.target.value)}
                    placeholder="Describe when the incident began, affected IP addresses or modules, and any troubleshooting already performed..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                  />
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-6 py-3 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Logging Ticket...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Log Support Ticket</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoSupportUrl}
                    className="px-5 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#224C75]" />
                    <span>Dispatch via Email</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
