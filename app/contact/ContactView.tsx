"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export function ContactView() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Enterprise ICT Solutions");
  const [targetFacility, setTargetFacility] = useState("Dervac ICT Hub (Palmgrove)");
  const [message, setMessage] = useState("");

  // Honeypot & timing spam protection
  const [honeypot, setHoneypot] = useState("");
  const renderTimeRef = useRef<number>(0);

  useEffect(() => {
    renderTimeRef.current = Date.now();
  }, []);

  // Form submission states
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionReference, setSubmissionReference] = useState("");

  const resetForm = () => {
    setName("");
    setOrganization("");
    setEmail("");
    setPhone("");
    setInquiryType("Enterprise ICT Solutions");
    setTargetFacility("Dervac ICT Hub (Palmgrove)");
    setMessage("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
    setSubmissionReference("");
    renderTimeRef.current = Date.now();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic client validation
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid business or personal email address.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage("Please enter a valid contact phone number.");
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage("Please describe your project or inquiry requirements (minimum 10 characters).");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          organization: organization.trim(),
          email: email.trim(),
          phone: phone.trim(),
          inquiryType,
          targetFacility,
          message: message.trim(),
          hp_website: honeypot,
          formRenderTime: renderTimeRef.current,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit inquiry. Please try again.");
      }

      setSubmissionReference(data.reference || "DRV-CNT-RECORDED");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while transmitting your inquiry. Please call our hotline or try again."
      );
    }
  };

  // Pre-filled WhatsApp dispatch URL including reference if available
  const whatsappMsg = encodeURIComponent(
    `*DERVAC CLIENT INQUIRY* ${submissionReference ? `[Ref: ${submissionReference}]` : ""}\n` +
      `Name: ${name || "Visitor"}\n` +
      `Org: ${organization || "Individual"}\n` +
      `Category: ${inquiryType}\n` +
      `Facility: ${targetFacility}\n` +
      `Phone: ${phone || "Unspecified"}\n` +
      `Message: ${message || "I would like to speak with a solution architect."}`
  );
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMsg}`;

  // Pre-filled email dispatch URL
  const emailSubject = encodeURIComponent(
    `[Dervac Contact Inquiry] ${submissionReference ? `[${submissionReference}] ` : ""}${inquiryType} - ${organization || name || "New Enterprise Inquiry"}`
  );
  const emailBody = encodeURIComponent(
    `Dear Dervac Team,\n\n` +
      `I am reaching out regarding a technology engagement:\n\n` +
      (submissionReference ? `Reference ID: ${submissionReference}\n` : "") +
      `Name: ${name}\n` +
      `Organization: ${organization || "Individual / Startup"}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Inquiry Category: ${inquiryType}\n` +
      `Preferred Location / Facility: ${targetFacility}\n\n` +
      `Message:\n${message || "We would like to schedule an initial discovery discussion."}\n\n` +
      `Kind regards,\n${name}`
  );
  const mailtoUrl = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Corporate Contact"
        title="Connect With Dervac."
        highlightedTitle="Let's Build Together."
        description="Speak with our solution architects, visit our technology hub in Palmgrove, or schedule a formal discovery meeting at our corporate headquarters in Ikeja."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Physical Office Locations Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
              Physical Locations & Operating Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
              Visit Our Facilities in Lagos
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Dual operating centers supporting client discovery, technical training, and corporate management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.locations.map((loc) => (
              <div
                key={loc.title}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#0E2B61] bg-[#0E2B61]/10 px-3.5 py-1 rounded-full border border-[#0E2B61]/20">
                      {loc.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {loc.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-4">
                    {loc.title}
                  </h3>

                  <div className="space-y-4 text-sm text-slate-600 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4.5 h-4.5 text-[#0E2B61] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">{loc.address}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {loc.city}, {loc.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <Phone className="w-4.5 h-4.5 text-[#0E2B61] mt-0.5 flex-shrink-0" />
                      <div>
                        {loc.phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\s+/g, "")}`}
                            className="block font-bold text-slate-900 hover:text-[#0E2B61] transition-colors"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4.5 h-4.5 text-[#0E2B61] flex-shrink-0" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-slate-700 hover:text-[#0E2B61] font-semibold transition-colors"
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
                  </div>
                  <a
                    href={`tel:${loc.phones[0].replace(/\s+/g, "")}`}
                    className="font-bold text-[#0E2B61] hover:text-[#2563EB] inline-flex items-center gap-1.5"
                  >
                    <span>Call Facility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact & Inquiry Form */}
        <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Direct Inquiries & Scoping
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                  Start an Engagement
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Submit your project requirements below. Inquiries are securely logged to our enterprise records desk with an official reference number for tracking.
                </p>
              </div>

              {/* Verified Contact Details Box */}
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 text-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Contact Hotlines
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400 text-xs block font-medium">General Corporate Desk</span>
                    <a
                      href={`mailto:${companyData.contacts.generalEmail}`}
                      className="font-bold text-slate-900 hover:text-[#0E2B61] transition-colors"
                    >
                      {companyData.contacts.generalEmail}
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Palmgrove Hub & Coworking</span>
                    <a
                      href={`mailto:${companyData.contacts.hubEmail}`}
                      className="font-bold text-slate-900 hover:text-[#0E2B61] transition-colors"
                    >
                      {companyData.contacts.hubEmail}
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 text-xs block font-medium">Technical Support Hotline</span>
                    <a
                      href={`tel:${companyData.contacts.generalPhone.replace(/\s+/g, "")}`}
                      className="font-bold text-[#0E2B61] hover:text-[#2563EB] transition-colors"
                    >
                      {companyData.contacts.generalPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Note */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Immediate WhatsApp communication is monitored during active business hours for rapid technical consultation routing.
                </span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {status === "success" ? (
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-200 shadow-sm space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Inquiry Logged Successfully
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                      Thank You for Contacting Dervac
                    </h4>
                    <p className="text-base text-slate-600 mt-2 leading-relaxed">
                      Your inquiry has been stored securely in our enterprise CRM. A solution architect will review your requirements and follow up within one business day.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Tracking Reference:</span>
                      <span className="font-mono font-bold text-slate-900 text-base">
                        {submissionReference}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Category:</span>
                      <span className="font-semibold text-slate-800">{inquiryType}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Designated Office:</span>
                      <span className="font-semibold text-slate-800">{targetFacility}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp With Reference</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-500" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs"
                >
                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_website_contact">Leave blank</label>
                    <input
                      id="hp_website_contact"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === "submitting"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        disabled={status === "submitting"}
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex Health Clinic"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={status === "submitting"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adebayo@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={status === "submitting"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Inquiry Category
                      </label>
                      <select
                        disabled={status === "submitting"}
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
                      >
                        <option value="Enterprise ICT Solutions">Enterprise ICT Solutions</option>
                        <option value="Software Development & Integration">Software Development & Integration</option>
                        <option value="Medisure or Laboratory LIMS">Healthcare Tech (Medisure / LIMS)</option>
                        <option value="CBT Centre Architecture">CBT Centre Setup & EdTech</option>
                        <option value="ICT Training Academy">ICT Training Academy</option>
                        <option value="Coworking Space Rental">Palmgrove Coworking Rental</option>
                      </select>
                    </div>

                    {/* Facility */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Preferred Office
                      </label>
                      <select
                        disabled={status === "submitting"}
                        value={targetFacility}
                        onChange={(e) => setTargetFacility(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
                      >
                        <option value="Dervac ICT Hub (Palmgrove)">Dervac ICT Hub (Palmgrove)</option>
                        <option value="Corporate HQ (Ikeja)">Corporate HQ (Opebi, Ikeja)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Your Requirements / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={status === "submitting"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your project scope, timeline, or inquiries (min 10 characters)..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E2B61] disabled:bg-slate-100"
                    />
                  </div>

                  <p className="text-xs text-slate-500">
                    By submitting this form, you acknowledge that your information is processed in accordance with our{" "}
                    <a href="/privacy" className="underline text-[#0E2B61] hover:text-[#2563EB] font-semibold">
                      Privacy Policy
                    </a>{" "}
                    under the Nigeria Data Protection Act 2023.
                  </p>

                  {/* Transmission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="px-7 py-3.5 rounded-xl bg-[#0E2B61] hover:bg-[#07132B] text-white text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Corporate Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#0E2B61]" />
                      <span>Prepare Direct Email</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}