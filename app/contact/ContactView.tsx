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

      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Physical Office Locations Grid */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
              Physical Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
              Visit Our Facilities in Lagos
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Dual operating centers supporting client discovery, technical training, and corporate management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.locations.map((loc) => (
              <div
                key={loc.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#224C75] bg-[#224C75]/10 px-2.5 py-1 rounded-full border border-[#224C75]/20">
                      {loc.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      {loc.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {loc.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-600 mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{loc.address}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {loc.city}, {loc.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <Phone className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                      <div>
                        {loc.phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p}`}
                            className="block font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-gray-700 hover:text-[#224C75] transition-colors"
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Mon – Fri: 8:00 AM – 6:00 PM</span>
                  </div>
                  <a
                    href={`tel:${loc.phones[0]}`}
                    className="font-semibold text-[#224C75] hover:text-[#1a3a5a] inline-flex items-center gap-1"
                  >
                    <span>Call desk</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact & Inquiry Form */}
        <div className="rounded-3xl border border-gray-200/90 bg-[#F9FAFB] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Direct Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">
                  Start an Engagement
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Submit your project requirements below. Inquiries are securely logged to our enterprise records desk with an official reference number for tracking.
                </p>
              </div>

              {/* Verified Contact Details Box */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 space-y-3 text-xs sm:text-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Verified Inboxes & Lines
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-gray-500 text-xs block">General Corporate Desk</span>
                    <a
                      href={`mailto:${companyData.contacts.generalEmail}`}
                      className="font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                    >
                      {companyData.contacts.generalEmail}
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-500 text-xs block">Palmgrove Hub & Coworking</span>
                    <a
                      href={`mailto:${companyData.contacts.hubEmail}`}
                      className="font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                    >
                      {companyData.contacts.hubEmail}
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-500 text-xs block">Technical Assistance Hotline</span>
                    <a
                      href={`tel:${companyData.contacts.generalPhone}`}
                      className="font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                    >
                      {companyData.contacts.generalPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Note */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/70 text-xs text-emerald-800 flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Immediate WhatsApp communication is monitored during active business hours for rapid consultation routing.
                </span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {status === "success" ? (
                <div className="bg-white p-7 sm:p-9 rounded-2xl border border-emerald-200 shadow-sm space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      Inquiry Logged Successfully
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                      Thank You for Contacting Dervac
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Your inquiry has been stored securely in our enterprise CRM. A solution architect will review your requirements and follow up within one business day.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1.5">
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Tracking Reference:</span>
                      <span className="font-mono font-bold text-gray-900 text-sm">
                        {submissionReference}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Category:</span>
                      <span className="font-medium text-gray-800">{inquiryType}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Designated Office:</span>
                      <span className="font-medium text-gray-800">{targetFacility}</span>
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
                      <span>Chat on WhatsApp With Reference</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-gray-500" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80"
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
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold">Submission Error:</strong>{" "}
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === "submitting"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        disabled={status === "submitting"}
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex Health Clinic"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={status === "submitting"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adebayo@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={status === "submitting"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        disabled={status === "submitting"}
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
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
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Office
                      </label>
                      <select
                        disabled={status === "submitting"}
                        value={targetFacility}
                        onChange={(e) => setTargetFacility(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75]"
                      >
                        <option value="Dervac ICT Hub (Palmgrove)">Dervac ICT Hub (Palmgrove)</option>
                        <option value="Corporate HQ (Ikeja)">Corporate HQ (Opebi, Ikeja)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Requirements / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={status === "submitting"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your project scope, timeline, or inquiries (min 10 characters)..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#224C75] disabled:bg-gray-100"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500">
                    By submitting this form, you acknowledge that your information is processed in accordance with our{" "}
                    <a href="/privacy" className="underline text-[#224C75] hover:text-[#1a3a5a]">
                      Privacy Policy
                    </a>{" "}
                    under the Nigeria Data Protection Act 2023.
                  </p>

                  {/* Transmission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="px-6 py-2.5 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
                      className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#224C75]" />
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
