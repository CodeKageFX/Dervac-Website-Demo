import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Use | Dervac Global Services Ltd",
  description:
    "Terms of use and conditions governing the access, evaluation, and engagement with Dervac Global Services Ltd digital platforms and enterprise solutions.",
  alternates: {
    canonical: "https://dervac.com/terms",
  },
  openGraph: {
    title: "Terms of Use | Dervac Global Services Ltd",
    description: "Terms and conditions for accessing and engaging with Dervac technology services and software platforms.",
    url: "https://dervac.com/terms",
    siteName: "Dervac Global Services Ltd",
    type: "website",
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Legal & Terms"
        title="Terms of Use."
        highlightedTitle="Service Conditions."
        description="Conditions governing access to our website, indicative solution estimates, software evaluation, and formal enterprise client engagement."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          
          <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/90 text-xs sm:text-sm text-gray-600">
            <strong>Effective Date:</strong> October 2026. Please read these Terms of Use carefully before accessing or using the digital services operated by {companyData.legalName}.
          </div>

          {/* Section 1: Acceptance */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the web portals, tools, scope planners, and content provided by Dervac Global Services Ltd (&quot;Dervac&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our <Link href="/privacy" className="text-[#224C75] hover:text-[#1a3a5a] underline">Privacy Policy</Link>. If you do not agree to these terms, you should discontinue using our website immediately.
            </p>
          </div>

          {/* Section 2: Informational & Indicative Nature */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              2. Informational Scope & Indicative Estimations
            </h2>
            <p>
              All descriptions of services, software products (including Medisure Diagnostic System, Smart Laboratory LIMS, and Sure URL Shortener), and scope planner outputs published on this website are provided strictly for general informational and preliminary evaluation purposes.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Indicative project timelines, deliverable breakdowns, and technical specifications generated via our online forms do not constitute a binding commercial quote or contractual commitment. Formal commercial engagements are governed exclusively by executed Service Level Agreements (SLAs), Statements of Work (SOWs), or signed enterprise contracts.
            </p>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              3. Intellectual Property Rights
            </h2>
            <p>
              All intellectual property rights in and to this website, including but not limited to the Dervac wordmark, official logos, proprietary software architectures, UI designs, codebases, text, graphics, and documentation, are the exclusive property of Dervac Global Services Ltd or its licensors.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              You may not reproduce, modify, distribute, reverse-engineer, decompile, or exploit any part of our digital assets without prior explicit written permission from Dervac executive management.
            </p>
          </div>

          {/* Section 4: Enterprise Support & Priorities */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              4. Technical Support Services & Maintenance Contracts
            </h2>
            <p>
              Technical assistance, emergency NOC dispatches, and priority incident triage submitted through our support desk are professional, paid services provided under active Annual Maintenance Contracts (AMCs) or retainer agreements.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Priority levels (Priority 1, 2, and 3) classify internal engineering queue handling and do not represent a guaranteed contractual remedy unless specified within your active client SLA. Submitting a ticket does not guarantee an immediate on-site dispatch for uncontracted systems.
            </p>
          </div>

          {/* Section 5: Permissible Use */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              5. Acceptable Use Policy
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Submit fraudulent, false, abusive, or automated spam inquiries through our forms.</li>
              <li>Attempt to compromise, probe, or breach the security of our network or servers.</li>
              <li>Transmit any malicious scripts, trojans, denial-of-service payloads, or harmful payloads.</li>
              <li>Impersonate any person, business entity, or institution when submitting information.</li>
            </ul>
          </div>

          {/* Section 6: Limitation of Liability */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under applicable Nigerian law, Dervac Global Services Ltd and its officers, engineers, and partners shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your access to or inability to access this website, or reliance upon any content herein.
            </p>
          </div>

          {/* Section 7: Governing Law & Jurisdiction */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              7. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts of Lagos State, Nigeria.
            </p>
          </div>

          {/* Section 8: Inquiries & Contact */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              8. Contact & Legal Inquiries
            </h2>
            <p>
              For legal inquiries, contract clarifications, or intellectual property notices, please contact:
            </p>
            <div className="p-4 rounded-xl border border-gray-200/80 bg-gray-50 text-xs sm:text-sm space-y-1">
              <p><strong>Corporate Legal Desk:</strong> Dervac Global Services Ltd</p>
              <p><strong>Email:</strong> <a href={`mailto:${companyData.contacts.generalEmail}`} className="text-[#224C75] hover:text-[#1a3a5a] underline">{companyData.contacts.generalEmail}</a></p>
              <p><strong>Telephone:</strong> {companyData.contacts.generalPhone}</p>
              <p><strong>Offices:</strong> Ikeja HQ (Opebi) & Palmgrove Hub (Shipeolu St), Lagos, Nigeria.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
