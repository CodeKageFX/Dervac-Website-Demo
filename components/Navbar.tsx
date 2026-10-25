"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";

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
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/profile" },
    { label: "Support", href: "/support" },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center p-0.5">
              <Image
                src="/dervac_logo.png"
                alt="Dervac Global Services"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-bimini text-4xl font-extrabold tracking-tight text-[#224C75] leading-none lowercase transition-opacity group-hover:opacity-90">
              dervac
            </span>
          </Link>

          {/* Simple Navigation Links Across the Center */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-600">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-gray-900 ${
                    isActive ? "text-gray-950 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Contact Link + Demo Button (Matching Reference Right Side) */}
          <div className="hidden sm:flex items-center gap-5">
            <Link
              href="/contact"
              className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setConsultationOpen(true)}
              className="px-4 py-2 rounded-lg border border-[#224C75]/20 text-xs sm:text-[13px] font-semibold text-[#224C75] bg-white hover:bg-[#224C75]/5 transition-all shadow-xs cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-[#224C75] text-white text-xs font-medium"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Functional Dark Page Overlay (Rendered outside header to guarantee full-page fixed overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col pointer-events-auto">
          {/* Functional Dark Page Overlay - Clicking this dismisses the mobile nav */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          />

          {/* Floating Dropdown: position directly underneath the 64px header */}
          <div
            className="relative z-50 mt-16 bg-white border-b border-gray-200 shadow-2xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-950 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-gray-100 text-gray-950 font-semibold"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-[#224C75] hover:bg-[#1a3a5a] text-white text-center font-medium text-sm shadow-xs transition-colors cursor-pointer"
              >
                Request Enterprise Demo
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
