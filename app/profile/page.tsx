import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Users2,
  Scale,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Corporate Profile & Governance",
  description:
    "Discover Dervac Global Services Ltd: our two-decade history, vision, mission, core values, leadership philosophy, and why leading organizations trust us.",
};

export default function ProfilePage() {
  const valuesMap: Record<string, React.ElementType> = {
    HeartHandshake,
    ShieldCheck,
    Users2,
    Scale,
  };

  return (
    <main className="min-h-screen bg-[#08090d]">
      <PageHeader
        badge="Company Profile"
        title="Engineering African Innovation."
        highlightedTitle="Two Decades of Impact."
        description="Dervac Global Services Ltd (DGSL) is a premier technology and ICT engineering firm dedicated to bridging infrastructure, enterprise software, and tech talent capabilities across Nigeria and Africa."
        breadcrumbs={[{ label: "Corporate Profile" }]}
      />

      {/* Corporate Overview Section */}
      <section className="py-10 sm:py-14 border-b border-white/[0.06] relative overflow-hidden">
        <div className="ambient-glow-blue -top-20 -left-20 opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-semibold uppercase tracking-wider">
                Who We Are
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Pioneering Innovative ICT Solutions Through{" "}
                <span className="text-[#4a8ec9]">Strategic Engineering</span>
              </h2>

              <p className="text-zinc-300 leading-relaxed text-sm">
                Dervac Global Services Ltd is an indigenous Nigerian ICT entity with an established track record spanning over two decades. Operating from primary corporate facilities in Opebi, Ikeja, and the Dervac ICT Hub on Shipeolu Street, Palmgrove, we specialize in delivering turnkey enterprise technology, infrastructure deployments, custom software development, and tech talent incubation.
              </p>

              <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                We believe that technology alone does not create sustainable competitive advantage—rather, it is the deliberate union of robust architecture, continuous human support, and objective vendor-neutral strategy that ensures organizations flourish.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/5">
                {companyData.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-white">{s.value}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 group">
                <Image
                  src="/images/coworking_hub.jpg"
                  alt="Dervac Innovation Hub & Workspaces in Lagos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                  <span className="font-semibold text-white block">Dervac Hub // Palmgrove</span>
                  Collaborative tech ecosystem & software development labs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Promise (TPL 10 Source Content) */}
      <section id="mission" className="py-10 sm:py-14 bg-[#06070a] border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Mission, Vision & Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="glow-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {companyData.vision}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 text-xs text-blue-400 font-mono">
                // Global Standard • African Backbone
              </div>
            </div>

            {/* Mission */}
            <div className="glow-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 text-xs text-indigo-400 font-mono">
                // Efficient • Cost-Effective • Client-Centric
              </div>
            </div>

            {/* The Promise */}
            <div className="glow-card rounded-2xl p-8 flex flex-col justify-between border-blue-500/30">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Dedication</h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                  &quot;{companyData.promise}&quot;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 text-xs text-purple-400 font-mono">
                // Build It • Maintain It • Scale It
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 sm:py-14 border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-400">
              Corporate Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our Core Operating Values
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Guiding principles ensuring we deliver uncompromising quality on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyData.values.map((val) => {
              const IconComp = valuesMap[val.icon] || ShieldCheck;
              return (
                <div
                  key={val.title}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-yellow-300 mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{val.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{val.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Stand Out (The Dervac Way from TPL 30) */}
      <section id="stand-out" className="py-10 sm:py-14 bg-[#06070a] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              Strategic Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              We Stand Out From The Crowd
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              There are many IT companies in Nigeria. Here is why discerning institutions select Dervac.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {companyData.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glow-card rounded-2xl p-6 sm:p-7 space-y-3"
              >
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-semibold text-zinc-300">
                  {pillar.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management & Multidisciplinary Summit of Skills (TPL 28) */}
      <section id="culture" className="py-10 sm:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                Multidisciplinary Summit of Skills
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Licensed Practitioners Dedicated to Technical Mastery
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Dervac comprises certified system integrators, network architects, web developers, database administrators, security professionals, and corporate trainers. Our technical teams undergo continuous professional training to stay ahead of modern cloud and enterprise standards.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "System Integrators",
                  "Network Architects",
                  "Full-Stack Developers",
                  "CBT Field Technicians",
                  "LIMS Specialists",
                  "Information Security Engineers",
                ].map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-zinc-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="hero-gradient-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm shadow-xl"
              >
                <span>Partner With Dervac</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
