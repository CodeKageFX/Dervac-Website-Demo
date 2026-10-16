"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative bg-[#06070a] border-t border-white/[0.08] pt-10 pb-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="ambient-glow-purple -top-48 left-1/4 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Operational Status Banner */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-white">
              Dervac Engineering Operations & Enterprise NOC
            </span>
            <span className="hidden md:inline-block text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              100% Operational
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>24/7 Support Hotline:</span>
            <a
              href={`tel:${companyData.contacts.generalPhone}`}
              className="font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              {companyData.contacts.generalPhone}
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-8 border-b border-white/[0.08]">
          {/* Brand Info (2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-[#0e2b61] p-0.5 shadow-md">
                <Image
                  src="/dervac_logo.png"
                  alt="Dervac Global Services"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  DERVAC
                </span>
                <span className="text-[10px] tracking-wider text-zinc-400 uppercase font-medium">
                  Global Services Ltd
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              {companyData.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-zinc-200">Palmgrove Hub:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-zinc-200">Ikeja HQ:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos.
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyData.contacts.generalEmail}`} className="hover:text-white transition-colors">
                  {companyData.contacts.generalEmail}
                </a>
                <span className="text-zinc-600">|</span>
                <a href={`mailto:${companyData.contacts.hubEmail}`} className="hover:text-white transition-colors">
                  {companyData.contacts.hubEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Solutions
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proprietary Products Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Proprietary Systems
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Contact
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
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
                  className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium"
                >
                  WhatsApp Direct Desk
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.contacts.careersEmail}`}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
                >
                  Careers & Fellowships
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Dervac Global Services Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>CAC / RC Verified Corporate Entity</span>
            <Link href="/profile#mission" className="hover:text-zinc-400">
              Corporate Governance
            </Link>
            <Link href="/support" className="hover:text-zinc-400">
              SLA Policies
            </Link>
            <Link href="/contact" className="hover:text-zinc-400">
              Palmgrove & Ikeja Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
