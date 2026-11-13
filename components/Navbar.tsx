"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";
import { companyData } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Close mobile menu when pathname changes
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Services & Solutions", href: "/services" },
    { label: "Proprietary Systems", href: "/products" },
    { label: "Corporate Profile", href: "/profile" },
    { label: "Enterprise Support", href: "/support" },
  ];

  const primaryPhone = companyData.contacts.generalPhone;
  const telHref = `tel:${primaryPhone.replace(/\s+/g, "")}`;

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center p-0.5 bg-white border border-slate-200/80 shadow-2xs group-hover:border-[#224C75]/40 transition-colors">
              <Image
                src="/dervac_logo.png"
                alt="Dervac Global Services"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bimini text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2B61] leading-none lowercase transition-opacity group-hover:opacity-90">
                dervac
              </span>
              <span className="text-[9.5px] uppercase tracking-wider font-semibold text-slate-500 leading-none mt-0.5">
                Global Services Ltd
              </span>
            </div>
          </Link>

          {/* Navigation Links Across Center */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-slate-600">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 relative hover:text-[#0E2B61] ${
                    isActive ? "text-[#0E2B61] font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E2B61] rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`transition-colors py-1 hover:text-[#0E2B61] ${
                pathname === "/contact" ? "text-[#0E2B61] font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions: Clickable Phone + Contact CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Direct Telephone Link with Clickable tel: URL */}
            <a
              href={telHref}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs lg:text-[13px] font-semibold text-slate-700 hover:text-[#0E2B61] hover:bg-slate-100/70 border border-transparent hover:border-slate-200 transition-all"
              title="Call Dervac Direct Desk"
            >
              <span className="w-7 h-7 rounded-full bg-[#0E2B61]/10 text-[#0E2B61] flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="whitespace-nowrap">{primaryPhone}</span>
            </a>

            <button
              onClick={() => setConsultationOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#0E2B61] hover:bg-[#07132B] text-white text-xs sm:text-[13px] font-semibold shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              Talk to an Engineer
            </button>
          </div>

          {/* Mobile Right Bar: Quick Call Button + Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={telHref}
              className="p-2 rounded-lg bg-[#0E2B61]/10 text-[#0E2B61] border border-[#0E2B61]/20 flex items-center justify-center"
              aria-label={`Call ${primaryPhone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setConsultationOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-[#0E2B61] text-white text-xs font-medium"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Functional Dark Page Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col pointer-events-auto">
          {/* Functional Dark Page Overlay - Clicking this dismisses mobile nav */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          />

          {/* Floating Mobile Dropdown underneath 72px header */}
          <div
            className="relative z-50 mt-18 bg-white border-b border-slate-200 shadow-2xl px-5 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Click-to-call Phone Banner for Mobile */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-3 flex items-center justify-between">
              <div className="text-xs text-slate-500 font-medium">Direct Telephone Desk</div>
              <a
                href={telHref}
                className="text-xs font-bold text-[#0E2B61] flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{primaryPhone}</span>
              </a>
            </div>

            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#0E2B61]/10 text-[#0E2B61] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-[#0E2B61]/10 text-[#0E2B61] font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Contact Offices & Engineers
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#0E2B61] hover:bg-[#07132B] text-white text-center font-semibold text-sm shadow-xs transition-colors cursor-pointer"
              >
                Talk to an Engineer
              </button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
