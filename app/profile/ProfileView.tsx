"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Users2,
  Scale,
  Award,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

type ProfileSection = "overview" | "mission-vision" | "values" | "strategy" | "facilities";

interface SectionTab {
  id: ProfileSection;
  label: string;
}

const SECTIONS: SectionTab[] = [
  { id: "overview", label: "Company Overview" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "values", label: "Core Values" },
  { id: "strategy", label: "Corporate Strategy" },
  { id: "facilities", label: "Operating Facilities" },
];

export function ProfileView() {
  const [activeSection, setActiveSection] = useState<ProfileSection>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "mission" || hash === "vision" || hash === "mission-vision") {
        return "mission-vision";
      }
      if (hash === "values") {
        return "values";
      }
      if (hash === "strategy" || hash === "approach" || hash === "stand-out") {
        return "strategy";
      }
      if (hash === "facilities" || hash === "locations") {
        return "facilities";
      }
    }
    return "overview";
  });

  // Subscribe to external hashchange events for browser back/forward and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "mission" || hash === "vision" || hash === "mission-vision") {
        setActiveSection("mission-vision");
      } else if (hash === "values") {
        setActiveSection("values");
      } else if (hash === "strategy" || hash === "approach" || hash === "stand-out") {
        setActiveSection("strategy");
      } else if (hash === "facilities" || hash === "locations") {
        setActiveSection("facilities");
      } else if (hash === "overview") {
        setActiveSection("overview");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Corporate Profile"
        title="Engineering African Innovation."
        highlightedTitle="Two Decades of Impact."
        description="Dervac Global Services Ltd is an established indigenous Nigerian ICT firm dedicated to enterprise infrastructure, custom software engineering, CBT testing networks, and tech talent incubation."
        breadcrumbs={[{ label: "Corporate Profile" }]}
      />

      {/* Section Navigation Tabs (Desktop pills, mobile select dropdown) */}
      <section className="sticky top-18 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Select Dropdown */}
          <div className="sm:hidden">
            <label htmlFor="profile-section-select" className="sr-only">
              Select Profile Section
            </label>
            <select
              id="profile-section-select"
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value as ProfileSection)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#0E2B61]"
            >
              {SECTIONS.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop & Tablet Segmented Pill Tabs */}
          <div className="hidden sm:flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {SECTIONS.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0E2B61] text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dedicated Content View: ONLY the selected section is displayed */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OPTION 1: COMPANY OVERVIEW */}
          {activeSection === "overview" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Section 1 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                  Company Overview & Background
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl">
                  Founded with a clear vision to bridge technology execution gaps in Nigeria and Africa, Dervac Global Services Ltd delivers enterprise-grade infrastructure, bespoke software engineering, and institutional testing solutions.
                </p>
              </div>

              {/* Genuine Dervac Team Feature */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 h-72 sm:h-96">
                <Image
                  src="/images/genuine/team-e1fe3be6.jpg"
                  alt="Dervac Technical Team & Fellows"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-300">
                      Genuine Dervac Operations
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      Licensed Engineers & Technical Practitioners • Lagos, Nigeria
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Dervac Global Services Ltd is an established indigenous Nigerian ICT entity with an unblemished track record spanning two decades. Operating from primary facilities in Opebi, Ikeja, and the Dervac ICT Hub on Shipeolu Street, Palmgrove, we specialize in delivering turnkey enterprise technology, infrastructure deployments, custom software development, and tech talent incubation.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base">
                    We believe that technology alone does not create sustainable competitive advantage—rather, it is the deliberate union of robust architecture, continuous human support, and objective vendor-neutral strategy that ensures organizations flourish.
                  </p>

                  <div className="pt-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-3">
                      Core Institutional Challenges We Resolve:
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Eliminating System Downtime:</strong> Proactive server health monitoring, power redundancy, and structured maintenance agreements.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Modernizing Healthcare Delivery:</strong> Removing paper-bound delays in clinics through our proprietary Medisure and Smart Lab LIMS platforms.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Securing National Examinations:</strong> Engineering robust CBT centres (100–500+ seaters) equipped with local exam caching and automated power failover.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                      Institutional At-A-Glance
                    </h4>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Legal Name</span>
                        <span className="font-bold text-slate-900">Dervac Global Services Ltd</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Experience</span>
                        <span className="font-bold text-slate-900">20+ Years in Nigeria</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Primary Hub</span>
                        <span className="font-bold text-slate-900">Shipeolu St, Palmgrove</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-500">Corporate HQ</span>
                        <span className="font-bold text-slate-900">Opebi, Ikeja, Lagos</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Entity Status</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-xs">
                          Registered (CAC)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      The Dervac Promise
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      &quot;{companyData.promise}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OPTION 2: MISSION & VISION */}
          {activeSection === "mission-vision" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Section 2 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                  Our Mission & Vision
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl">
                  Uncompromising institutional purpose guiding every engineering deployment, system integration, and client partnership across West Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0E2B61] text-white flex items-center justify-center mb-6 shadow-xs">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                      Long-Term Horizon
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 mt-1 mb-4">
                      Corporate Vision
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {companyData.vision}
                    </p>
                  </div>
                  <div className="pt-6 mt-8 border-t border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Global Engineering Standards • African Backbone
                  </div>
                </div>

                {/* Mission Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0E2B61] text-white flex items-center justify-center mb-6 shadow-xs">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                      Operating Mandate
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 mt-1 mb-4">
                      Corporate Mission
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {companyData.mission}
                    </p>
                  </div>
                  <div className="pt-6 mt-8 border-t border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Healthy • Cost-Effective • Client-Centric
                  </div>
                </div>
              </div>

              {/* Dedication Banner */}
              <div className="p-8 rounded-3xl bg-[#0E2B61] text-white shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-blue-300 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Our Executive Commitment
                    </h4>
                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                      &quot;{companyData.promise}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OPTION 3: CORE VALUES */}
          {activeSection === "values" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Section 3 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                  Our Core Operating Values
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl">
                  Guiding principles that govern how Dervac engineers communicate, build, deploy, and maintain systems for our enterprise clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {companyData.values.map((val) => (
                  <div
                    key={val.title}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0E2B61]/10 text-[#0E2B61] flex items-center justify-center mb-5">
                      {val.icon === "HeartHandshake" && <HeartHandshake className="w-6 h-6" />}
                      {val.icon === "ShieldCheck" && <ShieldCheck className="w-6 h-6" />}
                      {val.icon === "Scale" && <Scale className="w-6 h-6" />}
                      {val.icon === "Users2" && <Users2 className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {val.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OPTION 4: CORPORATE STRATEGY & APPROACH */}
          {activeSection === "strategy" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Section 4 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                  Corporate Strategy & Methodology
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl">
                  Our structured approach to architecting, deploying, and supporting enterprise technology solutions for demanding institutions.
                </p>
              </div>

              {/* Genuine Dervac Way Image Feature */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 h-64 sm:h-80">
                <Image
                  src="/images/genuine/dervac-way-69ab55a4.jpg"
                  alt="The Dervac Way Delivery Strategy"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
                    The Dervac Way
                  </span>
                  <div className="text-lg sm:text-xl font-bold">
                    Systematic, Step-by-Step Milestone Implementation
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {companyData.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-start gap-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0E2B61] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0E2B61] uppercase tracking-wider">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 mt-1 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OPTION 5: OPERATING FACILITIES */}
          {activeSection === "facilities" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="border-b border-slate-200 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E2B61]">
                  Section 5 of 5
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                  Operating Facilities in Lagos
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl">
                  Dual operational centers supporting software engineering, infrastructure support desks, and technical fellowship training.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {companyData.locations.map((loc) => (
                  <div
                    key={loc.title}
                    className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#0E2B61] bg-[#0E2B61]/10 px-3 py-1.5 rounded-full border border-[#0E2B61]/20">
                          {loc.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {loc.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-950 mb-3">
                        {loc.title}
                      </h3>

                      <div className="space-y-3.5 text-sm text-slate-600 mb-8">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[#0E2B61] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900">{loc.address}</p>
                            <p className="text-xs text-slate-500">{loc.city}, {loc.country}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                          <Phone className="w-4 h-4 text-[#0E2B61] flex-shrink-0" />
                          <div className="flex flex-wrap gap-2">
                            {loc.phones.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone.replace(/\s+/g, "")}`}
                                className="font-semibold text-slate-900 hover:text-[#0E2B61]"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-[#0E2B61] flex-shrink-0" />
                          <a
                            href={`mailto:${loc.email}`}
                            className="hover:text-[#0E2B61] text-slate-700 font-medium"
                          >
                            {loc.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <Link
                        href="/contact"
                        className="text-xs sm:text-sm font-bold text-[#0E2B61] hover:text-[#2563EB] inline-flex items-center gap-1.5"
                      >
                        <span>Schedule a facility inspection</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}