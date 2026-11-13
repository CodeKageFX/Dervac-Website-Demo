"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Headphones,
  Send,
  MessageSquare,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Mail,
  Phone,
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
      badgeClass: "bg-[#0E2B61]/10 text-[#0E2B61] border-[#0E2B61]/20",
      description:
        "Routine software configuration adjustments, user account provisioning, minor non-blocking bug reports, or scheduled equipment servicing.",
      criteria: "General maintenance with zero disruption to active business transactions.",
    },
  ];

  const primaryPhone = companyData.contacts.generalPhone;
  const supportPhone = companyData.contacts.supportPhone;

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Enterprise Support"
        title="Technical Support & Maintenance."
        highlightedTitle="Priority-Based Assistance."
        description="Dervac provides structured maintenance contracts and rapid incident resolution for enterprise servers, networks, CBT centres, and software deployments across Lagos and Nigeria."
        breadcrumbs={[{ label: "Support & Priorities" }]}
      />

      {/* Prominent Direct Phone Assistance Bar */}
      <section className="bg-slate-50 border-b border-slate-200/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0E2B61] text-white flex items-center justify-center shadow-xs">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-950 block">
                Direct Engineering Support Hotlines
              </span>
              <span className="text-xs text-slate-500">
                Lagos NOC & Field Engineering Dispatch • Active 24/7 for SLAs
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-bold flex-wrap justify-center">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="text-slate-800 hover:text-[#0E2B61] flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0E2B61]" />
              <span>{primaryPhone}</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a
              href={`tel:${supportPhone.replace(/\s+/g, "")}`}
              className="text-slate-800 hover:text-[#0E2B61] flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0E2B61]" />
              <span>{supportPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who the Support Offering is For & Paid Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider">
                Support Framework
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                Dependable IT Care for Demanding Organizations
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Dervac&apos;s support services are designed for commercial enterprises, healthcare centers, educational institutions, and financial facilities that rely on uninterrupted server uptime, secure local networks, and dependable software availability.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Rather than treating IT maintenance as an afterthought, our certified field engineers and systems integrators operate structured service level agreements to preempt hardware failure, conduct regular health checks, and maintain emergency spares.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <FileCheck className="w-4 h-4 text-[#0E2B61]" />
                  <span>Enterprise SLA Engagement Notice</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Support and field technician dispatches are provided as a professional service under structured annual maintenance contracts (AMCs) or retainer agreements. Uncontracted emergency dispatches are subject to technical triage and initial assessment fees.
                </p>
                <div className="pt-3 text-xs text-slate-500 border-t border-slate-200">
                  Custom SLA parameters and dedicated on-site technician options are finalized during contract engagement.
                </div>
              </div>
            </div>
          </div>

          {/* Priority Levels Explanation */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] text-xs font-bold uppercase tracking-wider mb-2">
                Triage Hierarchy
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Support Priority Definitions
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                When logging an issue, select the priority level that accurately reflects your business operational impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {priorityDefinitions.map((item) => (
                <div
                  key={item.level}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-950 mb-1">
                      {item.level}
                    </h4>
                    <p className="text-xs font-semibold text-[#0E2B61] mb-3">
                      {item.title}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                    <strong className="text-slate-800">Criteria:</strong> {item.criteria}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Support Request Flow */}
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-8 sm:p-12 shadow-sm">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                Incident Dispatch Flow
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Log an Enterprise Support Ticket
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Provide your incident details below. Submissions are registered to our engineering triage queue with an official ticket number for duty manager dispatch.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Support Incident Registered
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                    Ticket Logged Successfully
                  </h4>
                  <p className="text-base text-slate-600 mt-2 leading-relaxed">
                    Your support request has been registered in the Dervac engineering queue. For high-priority and critical incidents, our duty technicians also monitor WhatsApp for direct coordination.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-3">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Ticket Number:</span>
                    <span className="font-mono font-bold text-slate-900 text-lg">
                      {ticketNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Organization:</span>
                    <span className="font-semibold text-slate-900">{organization}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Severity Level:</span>
                    <span className="font-bold text-[#0E2B61]">{priority}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Incident Subject:</span>
                    <span className="font-semibold text-slate-900">{ticketSubject}</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={whatsappEscalationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Escalate on WhatsApp With Ticket ID</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-500" />
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
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Submission Error:</strong>{" "}
                      {errorMessage}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Organization / Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "submitting"}
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex Health Clinic / Horizon College"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                    />
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Contact Person & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "submitting"}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Engr. Babatunde / IT Manager"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Contact Email Address
                    </label>
                    <input
                      type="email"
                      disabled={status === "submitting"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="babatunde@organization.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Direct Callback Phone Number
                    </label>
                    <input
                      type="tel"
                      disabled={status === "submitting"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                    />
                  </div>

                  {/* Support Priority */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Incident Priority Level *
                    </label>
                    <select
                      disabled={status === "submitting"}
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
                    >
                      <option value="Priority 1 (Critical)">Priority 1 (Critical) — Complete Outage / Exam Halt</option>
                      <option value="Priority 2 (High)">Priority 2 (High) — Degraded Server / Intermittent Error</option>
                      <option value="Priority 3 (Standard)">Priority 3 (Standard) — Routine Configuration / Inquiry</option>
                    </select>
                  </div>

                  {/* Organization Size */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Infrastructure Scale
                    </label>
                    <select
                      disabled={status === "submitting"}
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
                    >
                      <option value="1–25 Workstations / Users">Small (1–25 Workstations / Devices)</option>
                      <option value="26–100 Workstations / Users">Medium (26–100 Workstations / Devices)</option>
                      <option value="100+ Enterprise Terminals">Large (100+ Enterprise Terminals / CBT Center)</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Incident Summary / Subject *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Core switch offline in Server Room B / Medisure report sync error"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Detailed Symptoms & System Notes
                  </label>
                  <textarea
                    rows={4}
                    disabled={status === "submitting"}
                    value={issueDetails}
                    onChange={(e) => setIssueDetails(e.target.value)}
                    placeholder="Describe when the incident began, affected IP addresses or modules, and any troubleshooting already performed..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                  />
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-7 py-3.5 rounded-xl bg-[#0E2B61] hover:bg-[#07132B] text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
                    className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#0E2B61]" />
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