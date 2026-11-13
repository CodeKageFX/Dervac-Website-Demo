"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Clock, Headphones } from "lucide-react";
import { companyData } from "@/data/company";
import { ConsultationModal } from "./ConsultationModal";

export function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const primaryPhone = companyData.contacts.generalPhone;
  const supportPhone = companyData.contacts.supportPhone;

  return (
    <>
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#07132B] text-white p-8 sm:p-14 relative overflow-hidden shadow-xl">
            {/* Background Tech Texture */}
            <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2563EB] rounded-full filter blur-[140px] opacity-25 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
                  Direct Engineering Engagement
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-5">
                  Ready to Deploy Dependable Technology Solutions?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
                  Whether you require turnkey enterprise software, high-availability server clustering, a 300-seat CBT examination centre, or professional ICT training, consult directly with our engineering architects in Lagos.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/30 transition-all cursor-pointer text-center"
                  >
                    Schedule an Architecture Scoping Call
                  </button>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Visit Our Lagos Facilities</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Direct Contact & Office Details */}
              <div className="lg:col-span-5 space-y-4">
                {/* Hotlines Card */}
                <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center justify-between">
                    <span>Direct Telephone Hotlines</span>
                    <span className="text-[10px] text-emerald-400 font-mono">LIVE DESK</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.08] flex items-center justify-center text-blue-300 flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Palmgrove Hub & General Enquiries</div>
                        <a
                          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                          className="text-base font-bold text-white hover:text-blue-300 transition-colors"
                        >
                          {primaryPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.08] flex items-center justify-center text-blue-300 flex-shrink-0">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">Enterprise Support & Technical NOC</div>
                        <a
                          href={`tel:${supportPhone.replace(/\s+/g, "")}`}
                          className="text-base font-bold text-white hover:text-blue-300 transition-colors"
                        >
                          {supportPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                      <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                      <a
                        href={`mailto:${companyData.contacts.generalEmail}`}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {companyData.contacts.generalEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Locations Summary */}
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Palmgrove Hub:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Ikeja Corporate HQ:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 border-t border-white/5">
                    <Clock className="w-3.5 h-3.5 text-blue-300" />
                    <span>Business Hours: Mon–Fri 8:00 AM – 6:00 PM (Emergency NOC 24/7)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}