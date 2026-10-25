"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { companyData } from "@/data/company";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200/80 pt-12 pb-10 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Operational Status Banner */}
        <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs mb-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#224C75]" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-900">
              Dervac Engineering Operations & Client Support Desk
            </span>
            <span className="hidden md:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-[#224C75]/10 text-[#224C75] border border-[#224C75]/20 font-medium">
              Active (Mon–Fri 8:00 AM – 6:00 PM)
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Engineering Support Line:</span>
            <a
              href={`tel:${companyData.contacts.generalPhone.replace(/\s+/g, "")}`}
              className="font-semibold text-gray-900 hover:text-[#224C75] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#224C75]" />
              {companyData.contacts.generalPhone}
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-200/80">
          {/* Brand Info (2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200/70 bg-white p-0.5 shadow-2xs">
                <Image
                  src="/dervac_logo.png"
                  alt="Dervac Global Services"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bimini text-4xl font-extrabold tracking-tight text-[#224C75] leading-none lowercase">
                  dervac
                </span>
                <span className="text-[10px] tracking-wider text-gray-500 uppercase font-medium mt-1">
                  Global Services Ltd
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Palmgrove Hub:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Ikeja HQ:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos.
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                <a href={`mailto:${companyData.contacts.generalEmail}`} className="hover:text-[#224C75] transition-colors">
                  {companyData.contacts.generalEmail}
                </a>
                <span className="text-gray-300">|</span>
                <a href={`mailto:${companyData.contacts.hubEmail}`} className="hover:text-[#224C75] transition-colors">
                  {companyData.contacts.hubEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Core Solutions
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-600 hover:text-[#224C75] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proprietary Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Proprietary Systems
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-600 hover:text-[#224C75] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Company & Contact
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-600 hover:text-[#224C75] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={companyData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 font-medium"
                >
                  WhatsApp Direct Desk
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.contacts.careersEmail}`}
                  className="text-xs text-[#224C75] hover:text-[#1a3a5a] transition-colors flex items-center gap-1 font-medium"
                >
                  Careers & Fellowships
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Dervac Global Services Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <span>Registered in Nigeria (CAC)</span>
            <Link href="/privacy" className="hover:text-gray-900 underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 underline-offset-2 hover:underline">
              Terms of Use
            </Link>
            <Link href="/profile#strategy" className="hover:text-gray-900">
              Corporate Governance
            </Link>
            <Link href="/support" className="hover:text-gray-900">
              Support Priorities
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Palmgrove & Ikeja Facilities
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
