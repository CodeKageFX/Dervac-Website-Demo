"use client";

import React, { useState } from "react";
import { X, Send, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService = "General ICT Solution" }: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [projectBrief, setProjectBrief] = useState("");
  const [companySize, setCompanySize] = useState("10-49");

  if (!isOpen) return null;

  // Build real mailto link with pre-filled content
  const emailSubject = encodeURIComponent(`[Enterprise Consultation] ${service} - ${organization || fullName || "Enquiry"}`);
  const emailBody = encodeURIComponent(
    `Dear Dervac Global Services Team,\n\nI would like to request an enterprise consultation for our organization.\n\n` +
      `Contact Name: ${fullName}\n` +
      `Organization: ${organization}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Company Size: ${companySize}\n` +
      `Service Requested: ${service}\n\n` +
      `Project Brief:\n${projectBrief || "We would like to discuss our requirements with your technical team."}\n\n` +
      `Please let us know your availability for an initial discovery session.\n\nWarm regards,\n${fullName}`
  );

  const mailtoHref = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  // Build real WhatsApp link with pre-filled message
  const whatsappText = encodeURIComponent(
    `Hello Dervac Team, I would like to enquire about ${service}.\n\nName: ${fullName}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone}\nDetails: ${projectBrief || "Interested in consultation"}`
  );
  const whatsappHref = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window: Constrained to screen height on mobile and desktop */}
      <div className="relative w-full max-w-2xl bg-[#0f1118] border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 max-h-[92dvh] sm:max-h-[88vh] flex flex-col overflow-hidden my-0 sm:my-4">
        {/* Sticky Header with Always-Visible Close Button */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0f1118] shrink-0 gap-3">
          <div className="min-w-0 pr-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#224c75]/25 border border-[#224c75]/40 text-[11px] sm:text-xs font-medium text-[#4a8ec9] mb-1.5 sm:mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a8ec9] animate-pulse" />
              Direct Engineering Consultation
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">
              Connect With Dervac Architects
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 line-clamp-1 sm:line-clamp-none">
              Discuss enterprise infrastructure, custom software, CBT centres, or tech training.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 sm:p-2 rounded-xl bg-white/[0.08] hover:bg-white/15 text-zinc-200 hover:text-white transition-colors flex items-center justify-center shrink-0 min-w-[40px] min-h-[40px] border border-white/10 shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Form */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-4 overscroll-contain">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Adebayo Ogunlesi"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Organization / Company
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Financial Corp"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Corporate Email Address *
              </label>
              <input
                type="email"
                placeholder="adebayo@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Service of Interest
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
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
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Organization Size
              </label>
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="1-9 (Startup / SME)">1-9 (Startup / SME)</option>
                <option value="10-49 (Mid-sized)">10-49 (Mid-sized)</option>
                <option value="50-249 (Enterprise)">50-249 (Enterprise)</option>
                <option value="250+ (Large Enterprise / Public)">250+ (Large Enterprise / Public)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Project Brief or Inquiry Details
            </label>
            <textarea
              rows={3}
              placeholder="Outline your requirements, expected timeline, or technical challenges..."
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          {/* Genuine Action Buttons */}
          <div className="pt-2">
            <p className="text-xs text-zinc-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              Direct dispatch to verified Dervac technical leads (No simulated forms).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={mailtoHref}
                className="btn-dervac-primary hero-gradient-btn flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-white font-medium text-sm transition-all text-center"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Send via Official Email</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 font-medium text-sm transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2 border-t border-white/5 pb-2">
            <p className="text-xs text-zinc-500">
              Need immediate phone assistance? Call our direct line:{" "}
              <a
                href={`tel:${companyData.contacts.generalPhone}`}
                className="text-zinc-300 hover:text-white font-medium underline inline-flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3 text-[#4a8ec9]" />
                {companyData.contacts.generalPhone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
