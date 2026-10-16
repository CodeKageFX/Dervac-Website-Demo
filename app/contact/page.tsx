"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Enterprise ICT Solutions");
  const [targetFacility, setTargetFacility] = useState("Dervac ICT Hub (Palmgrove)");
  const [message, setMessage] = useState("");

  const emailSubject = encodeURIComponent(`[Contact Inquiry] ${inquiryType} - ${organization || name || "New Lead"}`);
  const emailBody = encodeURIComponent(
    `Dear Dervac Team,\n\n` +
      `I am reaching out via the Dervac corporate contact portal:\n\n` +
      `Name: ${name}\n` +
      `Organization: ${organization}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Inquiry Category: ${inquiryType}\n` +
      `Target Facility: ${targetFacility}\n\n` +
      `Message:\n${message || "We would like to discuss our requirements with your solutions team."}\n\n` +
      `Kind regards,\n${name}`
  );

  const mailtoUrl = `mailto:${companyData.contacts.generalEmail}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMsg = encodeURIComponent(
    `Hello Dervac Team,\nMy name is ${name} from ${organization || "Individual"}.\nInquiry: ${inquiryType} (${targetFacility})\nPhone: ${phone}\nMessage: ${message || "I would like to schedule a discussion."}`
  );
  const whatsappUrl = `https://wa.me/${companyData.contacts.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMsg}`;

  return (
    <main className="min-h-screen bg-[#08090d]">
      <PageHeader
        badge="Contact & Physical Locations"
        title="Engage With Dervac."
        highlightedTitle="Let's Build Together."
        description="Connect with our solution architects, visit our technology hub in Palmgrove, or schedule a formal discovery meeting at our corporate headquarters in Ikeja."
        breadcrumbs={[{ label: "Contact & Locations" }]}
      />

      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 sm:mb-12">
          {companyData.locations.map((loc) => (
            <div
              key={loc.title}
              className="glow-card rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {loc.badge}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {loc.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{loc.title}</h3>

                <div className="space-y-2.5 text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{loc.address}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {loc.city}, {loc.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      {loc.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="block hover:text-white font-mono text-xs"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <a
                      href={`mailto:${loc.email}`}
                      className="hover:text-white font-mono text-xs"
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  Mon – Fri: 8:00 AM – 6:00 PM
                </span>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.address}, ${loc.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & RFP Dispatch Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              Departmental Desks
            </span>

            <h3 className="text-2xl font-bold text-white">
              Direct Contact Lines
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Reach specific operational divisions directly for accelerated enquiry routing:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>General & Corporate Advisory</span>
                  <span className="text-[10px] text-zinc-500">Ikeja HQ</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  info@dervac.com • {companyData.contacts.generalPhone}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Dervac Hub, Coworking & Academy</span>
                  <span className="text-[10px] text-zinc-500">Palmgrove Hub</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  hub@dervac.com • {companyData.contacts.hubPhone}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Careers, Internships & Fellowships</span>
                  <span className="text-[10px] text-zinc-500">Talent Desk</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  careers@dervac.com
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                <div className="text-xs font-bold text-emerald-300 flex items-center justify-between">
                  <span>WhatsApp Direct Instant Messaging</span>
                  <span className="text-[10px] text-emerald-400">Live Desk</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {companyData.contacts.whatsapp}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Dispatcher (7 Cols) */}
          <div className="lg:col-span-7 glow-card rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Official Enquiry Dispatch
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                Initiate a Formal Technology Enquiry
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Prepares a verified, structured message directly to Dervac management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kareem Abdulateef"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Organization / Company *
                </label>
                <input
                  type="text"
                  placeholder="e.g. First Horizon Ltd"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="kareem@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Inquiry Category
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="Enterprise Infrastructure & Cabling">Enterprise Infrastructure & Cabling</option>
                  <option value="Software Development & Integration">Software Development & Integration</option>
                  <option value="Security Systems & CCTV">Security Systems & CCTV</option>
                  <option value="ICT Training & Dervac Academy">ICT Training & Dervac Academy</option>
                  <option value="CBT Center Setup & EdTech">CBT Center Setup & EdTech</option>
                  <option value="Medisure / Smart Lab LIMS Demo">Medisure / Smart Lab LIMS Demo</option>
                  <option value="Coworking Space & Hall Rentals">Coworking Space & Hall Rentals</option>
                  <option value="General Information / Partnership">General Information / Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Preferred Facility
                </label>
                <select
                  value={targetFacility}
                  onChange={(e) => setTargetFacility(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141620] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="Dervac ICT Hub (Palmgrove, Lagos)">Dervac ICT Hub (Palmgrove, Lagos)</option>
                  <option value="Corporate HQ (Opebi, Ikeja, Lagos)">Corporate HQ (Opebi, Ikeja, Lagos)</option>
                  <option value="Remote / Virtual Discovery Meeting">Remote / Virtual Discovery Meeting</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Message / Scope Outline
              </label>
              <textarea
                rows={3}
                placeholder="Let us know what you need or request a callback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={mailtoUrl}
                className="hero-gradient-btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via Email Client</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 font-medium text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Transmit on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
