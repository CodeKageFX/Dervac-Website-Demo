"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { ConsultationModal } from "./ConsultationModal";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 ${
          scrolled ? "backdrop-blur-xl bg-[#08090d]/85 shadow-2xl shadow-black/60 border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-[#0e2b61] p-0.5 shadow-md shadow-blue-900/30 group-hover:scale-105 transition-transform">
              <Image
                src="/dervac_logo.png"
                alt="Dervac Global Services"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                DERVAC
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              </span>
              <span className="text-[10px] tracking-wider text-zinc-400 uppercase font-medium">
                Global Services Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Floating Pill Navbar (Matching Dribbble Reference) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/30">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasDropdown = Boolean(item.children && item.children.length > 0);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && item.children && (
                    <div className="absolute top-full left-0 pt-2 w-72 z-50">
                      <div className="bg-[#0f1119]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/80 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                          >
                            <div className="text-sm font-medium text-white group-hover/item:text-blue-400 transition-colors flex items-center justify-between">
                              {child.label}
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-400" />
                            </div>
                            <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                              {child.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Header Action: Get Started / Consultation */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setConsultationOpen(true)}
              className="hero-gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold cursor-pointer shadow-lg transition-transform active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="hero-gradient-btn px-3 py-1.5 rounded-full text-white text-xs font-semibold"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-6 px-4 bg-[#0d0f17] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl max-h-[80vh] overflow-y-auto space-y-3">
            {navigationLinks.map((item) => (
              <div key={item.label} className="border-b border-white/5 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-semibold text-white"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/20 text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="pl-3 space-y-1.5 mt-1 border-l border-white/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-zinc-400 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full hero-gradient-btn py-3 rounded-xl text-center text-white font-medium text-sm flex items-center justify-center gap-2"
              >
                Request Enterprise Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
