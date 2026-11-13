"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function TrustProofStrip() {
  const oemPartners = [
    { name: "Cisco", logo: "/images/partners/cisco-1d8dcafd.png" },
    { name: "Dell Technologies", logo: "/images/partners/dell-3cf09f5b.png" },
    { name: "Hewlett Packard Enterprise", logo: "/images/partners/hpe_logo-f5308bf7.png" },
    { name: "Fortinet", logo: "/images/partners/fortinet-068f28d0.png" },
    { name: "Lenovo", logo: "/images/partners/lenovo-86909247.png" },
    { name: "Microsoft", logo: "/images/partners/microsoft-fbdb5f49.png" },
    { name: "VMware", logo: "/images/partners/vmware-64397e08.png" },
    { name: "Veeam", logo: "/images/partners/veeam-4d7ec896.png" },
    { name: "Aruba Networks", logo: "/images/partners/aruba-55549bf4.png" },
    { name: "IBM", logo: "/images/partners/ibm-13d1351b.png" },
    { name: "TP-Link", logo: "/images/partners/tp-link-f72f62a3.png" },
    { name: "Microsoft Azure", logo: "/images/partners/azure-e46e0733.png" },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200/90 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E2B61]" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Technology Ecosystem & Systems Integration
              </h2>
            </div>
            <p className="text-base sm:text-lg font-semibold text-slate-900 mt-1">
              Architecture deployed with leading global hardware & software OEMs
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NDPA 2023 Principles Aligned</span>
            </span>
            <Link
              href="/profile#strategy"
              className="text-xs font-semibold text-[#0E2B61] hover:text-[#2563EB] inline-flex items-center gap-1 transition-colors"
            >
              <span>Our Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* OEM Partner Logos Grid */}
        <div className="pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {oemPartners.map((partner) => (
              <div
                key={partner.name}
                className="h-16 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 group"
                title={`${partner.name} Integration Partner`}
              >
                <div className="relative w-full h-8 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={110}
                    height={36}
                    className="max-h-7 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            All brand trademarks are property of their respective OEMs. Dervac deploys vendor-neutral architectures optimized for client ROI and operational durability.
          </p>
        </div>
      </div>
    </section>
  );
}