"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
        description="Dervac Global Services Ltd is an indigenous Nigerian ICT firm dedicated to enterprise infrastructure, custom software engineering, CBT testing networks, and tech talent incubation."
        breadcrumbs={[{ label: "Corporate Profile" }]}
      />

      {/* Section Navigation Tabs (Desktop pills, mobile dropdown/scroll) */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Select Dropdown */}
          <div className="sm:hidden">
            <label htmlFor="profile-section-select" className="sr-only">
              Select Profile Section
            </label>
            <select
              id="profile-section-select"
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value as ProfileSection)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#224C75]"
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
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#224C75] text-white shadow-xs font-semibold"
                      : "bg-[#F9FAFB] text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/70"
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
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OPTION 1: COMPANY OVERVIEW */}
          {activeSection === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-gray-150 pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Section 1 of 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                  Company Overview & Background
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Founded with a clear vision to bridge technology execution gaps in Nigeria and Africa, Dervac Global Services Ltd provides enterprise-grade infrastructure and bespoke software engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p>
                    Dervac Global Services Ltd is an indigenous Nigerian ICT entity with an established track record spanning over two decades. Operating from primary facilities in Opebi, Ikeja, and the Dervac ICT Hub on Shipeolu Street, Palmgrove, we specialize in delivering turnkey enterprise technology, infrastructure deployments, custom software development, and tech talent incubation.
                  </p>
                  <p className="text-sm text-gray-600">
                    We believe that technology alone does not create sustainable competitive advantage—rather, it is the deliberate union of robust architecture, continuous human support, and objective vendor-neutral strategy that ensures organizations flourish.
                  </p>
                  
                  <div className="pt-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Core Problems We Address:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>Preventing costly system downtime through proactive enterprise server and network maintenance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>Eliminating paper-bound delays in diagnostic healthcare through tailored clinical software (Medisure & LIMS).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                        <span>Building robust nationwide examination centers (CBT) equipped with redundant power and local LAN caching.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Institutional At-A-Glance
                    </h4>
                    <div className="space-y-2.5 text-xs text-gray-700">
                      <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                        <span className="text-gray-500">Legal Name</span>
                        <span className="font-semibold text-gray-900">Dervac Global Services Ltd</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                        <span className="text-gray-500">Industry Experience</span>
                        <span className="font-semibold text-gray-900">20+ Years in West Africa</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                        <span className="text-gray-500">Primary Hub</span>
                        <span className="font-semibold text-gray-900">Shipeolu St, Palmgrove</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                        <span className="text-gray-500">Executive HQ</span>
                        <span className="font-semibold text-gray-900">Opebi, Ikeja, Lagos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Corporate Entity</span>
                        <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                          Registered (CAC)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200/80 bg-white">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      &quot;{companyData.promise}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OPTION 2: MISSION & VISION */}
          {activeSection === "mission-vision" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-gray-150 pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Section 2 of 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                  Our Mission & Vision
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Clear, uncompromising institutional purpose guiding every engineering deployment and client relationship.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vision Card */}
                <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center mb-5">
                      <Eye className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                      Our Long-Term Horizon
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-3">
                      Corporate Vision
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {companyData.vision}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200/70 text-xs font-medium text-gray-500">
                    Global Standards • African Backbone
                  </div>
                </div>

                {/* Mission Card */}
                <div className="p-7 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center mb-5">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                      Our Operating Mandate
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-3">
                      Corporate Mission
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {companyData.mission}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200/70 text-xs font-medium text-gray-500">
                    Efficient • Cost-Effective • Client-Centric
                  </div>
                </div>
              </div>

              {/* Dedication Banner */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      Our Corporate Promise
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      &quot;{companyData.promise}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OPTION 3: CORE VALUES */}
          {activeSection === "values" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-gray-150 pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Section 3 of 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                  Our Core Operating Values
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Guiding principles that govern how Dervac engineers communicate, build, deploy, and maintain systems for our clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {companyData.values.map((val) => (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 hover:border-gray-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] flex items-center justify-center mb-4">
                      {val.icon === "HeartHandshake" && <HeartHandshake className="w-5 h-5" />}
                      {val.icon === "ShieldCheck" && <ShieldCheck className="w-5 h-5" />}
                      {val.icon === "Scale" && <Scale className="w-5 h-5" />}
                      {val.icon === "Users2" && <Users2 className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OPTION 4: CORPORATE STRATEGY & APPROACH */}
          {activeSection === "strategy" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-gray-150 pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Section 4 of 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                  Corporate Strategy & Methodology
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Our systematic approach to planning, building, maintaining, and supporting technology solutions for demanding institutions.
                </p>
              </div>

              <div className="space-y-5">
                {companyData.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#224C75] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-[#224C75] uppercase tracking-wider">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-0.5 mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-gray-150 pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#224C75]">
                  Section 5 of 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                  Dervac Physical Facilities in Lagos
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  Dual operational centers supporting software engineering, infrastructure support desks, and technical training.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companyData.locations.map((loc) => (
                  <div
                    key={loc.title}
                    className="p-6 sm:p-7 rounded-2xl bg-[#F9FAFB] border border-gray-200/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#224C75] bg-[#224C75]/10 px-2.5 py-1 rounded-full border border-[#224C75]/20">
                          {loc.badge}
                        </span>
                        <span className="text-xs text-gray-500">
                          {loc.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {loc.title}
                      </h3>

                      <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-6">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#224C75] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">{loc.address}</p>
                            <p className="text-xs text-gray-500">{loc.city}, {loc.country}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 pt-1">
                          <Phone className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                          <div className="flex flex-wrap gap-2">
                            {loc.phones.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone}`}
                                className="font-medium text-gray-900 hover:text-[#224C75]"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Mail className="w-4 h-4 text-[#224C75] flex-shrink-0" />
                          <a
                            href={`mailto:${loc.email}`}
                            className="hover:text-[#224C75] text-gray-700"
                          >
                            {loc.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200/60">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-[#224C75] hover:text-[#1a3a5a] inline-flex items-center gap-1"
                      >
                        <span>Schedule a facility visit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
