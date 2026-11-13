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
  const primaryPhone = companyData.contacts.generalPhone;
  const supportPhone = companyData.contacts.supportPhone;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Hotline Strip */}
        <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div className="text-sm font-semibold text-white">
              Dervac Engineering Operations Desk & Client NOC
            </div>
            <span className="hidden sm:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.08] text-slate-300 border border-white/10 font-mono">
              Mon–Fri 8:00 AM – 6:00 PM (24/7 SLA Standby)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="text-slate-400 hidden sm:inline">Direct Desks:</span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{primaryPhone}</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href={`tel:${supportPhone.replace(/\s+/g, "")}`}
              className="font-bold text-slate-300 hover:text-white transition-colors"
            >
              <span>{supportPhone}</span>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/15 bg-white p-1 shadow-xs">
                <Image
                  src="/dervac_logo.png"
                  alt="Dervac Global Services"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bimini text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none lowercase">
                  dervac
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-1">
                  Global Services Ltd
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An indigenous Nigerian ICT firm architecting enterprise server infrastructure, custom software engineering, CBT examination networks, and digital skills fellowships across West Africa.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-200">Palmgrove Hub:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-200">Ikeja Corporate HQ:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos.
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyData.contacts.generalEmail}`} className="hover:text-white transition-colors">
                  {companyData.contacts.generalEmail}
                </a>
                <span className="text-slate-600">|</span>
                <a href={`mailto:${companyData.contacts.hubEmail}`} className="hover:text-white transition-colors">
                  {companyData.contacts.hubEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proprietary Systems Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Proprietary Systems
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Contact
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
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
                  className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
                >
                  WhatsApp Direct Desk
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.contacts.careersEmail}`}
                  className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-semibold"
                >
                  Careers & Fellowships
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Governance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Dervac Global Services Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <span>Registered in Nigeria (CAC)</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline">
              Terms of Use
            </Link>
            <Link href="/profile#strategy" className="hover:text-slate-300 transition-colors">
              Corporate Governance
            </Link>
            <Link href="/support" className="hover:text-slate-300 transition-colors">
              Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}