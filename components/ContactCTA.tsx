"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { companyData } from "@/data/company";
import { ConsultationModal } from "./ConsultationModal";

export function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200/90 p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-xs font-semibold uppercase tracking-wider mb-4">
                  Direct Engineering Consultation
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight mb-4">
                  Ready to deploy dependable technology solutions for your organization?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-6">
                  Whether you need custom enterprise software, server cluster maintenance, CBT centre configuration, or professional ICT training, speak directly with our engineering team in Lagos.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white font-medium text-sm sm:text-[15px] shadow-sm hover:shadow transition-colors cursor-pointer"
                  >
                    Schedule a Consultation
                  </button>
                  <Link
                    href="/contact"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-800 font-medium text-sm sm:text-[15px] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Visit Our Offices</span>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Direct Contact & Office Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Direct Contact Lines
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                      <a
                        href={`tel:${companyData.contacts.generalPhone}`}
                        className="font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                      >
                        {companyData.contacts.generalPhone}
                      </a>
                      <span className="text-gray-300">/</span>
                      <a
                        href={`tel:${companyData.contacts.supportPhone}`}
                        className="font-medium text-gray-900 hover:text-[#224C75] transition-colors"
                      >
                        {companyData.contacts.supportPhone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                      <a
                        href={`mailto:${companyData.contacts.generalEmail}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {companyData.contacts.generalEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-2.5 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Palmgrove Hub:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Ikeja Corporate HQ:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Business Hours: Mon – Fri: 8:00 AM – 6:00 PM (Emergency NOC 24/7)</span>
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
