"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { companyData } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "General ICT Solution",
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [projectBrief, setProjectBrief] = useState("");
  const [companySize, setCompanySize] = useState("10-49");

  // Anti-spam honeypot
  const [honeypot, setHoneypot] = useState("");

  // Submission state
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reference, setReference] = useState("");
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setService(defaultService);
  }

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setReference("");
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid corporate or personal email address.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          organization: organization.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service,
          companySize,
          projectBrief: projectBrief.trim(),
          hp_website: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to save consultation request. Please try again.");
      }

      setReference(data.reference || "DRV-CNS-RECORDED");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while saving your request."
      );
    }
  };

  // Build WhatsApp link with pre-filled reference
  const whatsappText = encodeURIComponent(
    `*DERVAC ARCHITECT CONSULTATION* ${reference ? `[Ref: ${reference}]` : ""}\n` +
      `Name: ${fullName || "Visitor"}\n` +
      `Organization: ${organization || "Unspecified"}\n` +
      `Service: ${service}\n` +
      `Scale: ${companySize} users\n` +
      `Details: ${projectBrief || "Interested in enterprise discovery discussion."}`
  );
  const whatsappHref = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Window: Light corporate aesthetic matching approved redesign */}
      <div className="relative w-full max-w-2xl bg-white border border-gray-200/90 rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 max-h-[92dvh] sm:max-h-[88vh] flex flex-col overflow-hidden my-0 sm:my-4">
        {/* Sticky Header with Always-Visible Close Button */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-gray-200/80 bg-[#F9FAFB] shrink-0 gap-3">
          <div className="min-w-0 pr-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[11px] sm:text-xs font-semibold text-[#224C75] mb-1.5 sm:mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#224C75] animate-pulse" />
              Direct Engineering Consultation
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
              Connect With Dervac Architects
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-1 sm:line-clamp-none">
              Discuss enterprise infrastructure, custom software, CBT centres, or tech training.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2.5 sm:p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-center shrink-0 min-w-[40px] min-h-[40px] border border-gray-200 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Form */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-4 overscroll-contain">
          {status === "success" ? (
            <div className="py-4 space-y-5">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Request Saved & Assigned
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Discovery Session Requested
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Your consultation request has been stored in our architectural review pipeline. A senior technical architect will evaluate your requirements and reach out via phone or email.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1.5">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Tracking Reference ID:</span>
                  <span className="font-mono font-bold text-gray-900 text-sm">{reference}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Primary Solution:</span>
                  <span className="font-medium text-gray-800">{service}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Contact:</span>
                  <span className="font-medium text-gray-800">{fullName} ({email})</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Follow Up on WhatsApp With Reference</span>
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot hidden input */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_website_modal">Leave blank</label>
                <input
                  id="hp_website_modal"
                  type="text"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Error:</strong> {errorMessage}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    placeholder="e.g. Adebayo Ogunlesi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    disabled={status === "submitting"}
                    placeholder="e.g. Apex Financial Corp"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === "submitting"}
                    placeholder="adebayo@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    disabled={status === "submitting"}
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    disabled={status === "submitting"}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors"
                  >
                    <option value="Software Development & Integration">Software Development & Integration</option>
                    <option value="Enterprise Infrastructure & Cabling">Enterprise Infrastructure & Cabling</option>
                    <option value="Security Systems & Cybersecurity">Security Systems & Cybersecurity</option>
                    <option value="ICT Training & Dervac Academy">ICT Training & Dervac Academy</option>
                    <option value="CBT Centre Setup & EdTech">CBT Centre Setup & EdTech</option>
                    <option value="Coworking Space & Hall Rentals">Coworking Space & Hall Rentals</option>
                    <option value="Medisure Diagnostic System">Medisure Diagnostic System</option>
                    <option value="Smart Laboratory System (LIMS)">Smart Laboratory System (LIMS)</option>
                    <option value="Sure URL Shortener">Sure URL Shortener</option>
                    <option value="General ICT Consultation">General ICT Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Organization Size
                  </label>
                  <select
                    disabled={status === "submitting"}
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors"
                  >
                    <option value="1-9 (Startup / SME)">1-9 (Startup / SME)</option>
                    <option value="10-49 (Mid-sized)">10-49 (Mid-sized)</option>
                    <option value="50-249 (Enterprise)">50-249 (Enterprise)</option>
                    <option value="250+ (Large Enterprise / Public)">250+ (Large Enterprise / Public)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Project Brief or Inquiry Details
                </label>
                <textarea
                  rows={3}
                  disabled={status === "submitting"}
                  placeholder="Outline your requirements, expected timeline, or technical challenges..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#224C75] transition-colors resize-none disabled:bg-gray-100"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <p className="text-[11px] text-gray-500 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#224C75] flex-shrink-0" />
                  Direct submission to Dervac solution architects under NDPA 2023 data principles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white font-semibold text-sm transition-all text-center cursor-pointer disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Request Architecture Consultation</span>
                      </>
                    )}
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm transition-all text-center"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-gray-200/60 pb-1">
                <p className="text-xs text-gray-500">
                  Need immediate phone assistance? Call our direct line:{" "}
                  <a
                    href={`tel:${companyData.contacts.generalPhone}`}
                    className="text-gray-900 hover:text-[#224C75] font-medium underline inline-flex items-center gap-1"
                  >
                    <PhoneCall className="w-3 h-3 text-[#224C75]" />
                    {companyData.contacts.generalPhone}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
