import React from "react";
import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Dervac Global Services Ltd",
  description:
    "Data privacy and protection policy for Dervac Global Services Ltd, aligned with the Nigeria Data Protection Act 2023 (NDPA).",
  alternates: {
    canonical: "https://dervac.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Dervac Global Services Ltd",
    description: "Learn how Dervac protects client and visitor personal data under the Nigeria Data Protection Act 2023 (NDPA).",
    url: "https://dervac.com/privacy",
    siteName: "Dervac Global Services Ltd",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        badge="Legal & Compliance"
        title="Privacy Policy & Data Protection."
        highlightedTitle="NDPA 2023 Commitment."
        description="How Dervac Global Services Ltd collects, processes, protects, and handles personal and institutional information across our digital platforms and services."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          
          {/* Statutory Notice Card */}
          <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200/90 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#224C75]">
              <ShieldCheck className="w-4 h-4 text-[#224C75]" />
              <span>Statutory Compliance Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              This Privacy Policy is governed by the laws of the Federal Republic of Nigeria, specifically the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and regulatory directives issued by the Nigeria Data Protection Commission (NDPC). Effective Date: October 2026.
            </p>
          </div>

          {/* Section 1: Data Controller */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              1. The Data Controller
            </h2>
            <p>
              The data controller responsible for the processing of personal data collected through this website is:
            </p>
            <div className="p-4 rounded-xl border border-gray-200/80 bg-gray-50 text-xs sm:text-sm space-y-1.5">
              <p><strong>Entity Name:</strong> {companyData.legalName}</p>
              <p><strong>Principal Address:</strong> 9, Tunde Oshilaja Street, Opebi, Ikeja, Lagos, Nigeria.</p>
              <p><strong>ICT Hub & Facility:</strong> 65 & 76 Shipeolu Street, Palmgrove, Somolu, Lagos, Nigeria.</p>
              <p><strong>Data Protection Desk:</strong> <a href={`mailto:${companyData.contacts.privacyEmail}`} className="text-[#224C75] hover:text-[#1a3a5a] underline">{companyData.contacts.privacyEmail}</a></p>
            </div>
          </div>

          {/* Section 2: Data We Collect */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              2. Personal Data We Collect
            </h2>
            <p>
              We collect information that you voluntarily transmit to us when inquiring about enterprise services, submitting project scopes, or logging support incidents:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Contact & Commercial Inquiries:</strong> Full name, professional email address, telephone number, organization name, inquiry category, and requirements notes.</li>
              <li><strong>Support Incident Requests:</strong> Contact name, business email, telephone, organization scale, priority tier selection, and technical symptoms.</li>
              <li><strong>Project Scope Planner:</strong> Indicative requirements, timeline, scale, selected deliverables, and architectural specifications.</li>
              <li><strong>Technical Metadata:</strong> Masked IP address (anonymized for privacy), browser user-agent, and submission timestamp captured strictly for rate-limiting, honeypot spam defense, and security integrity.</li>
            </ul>
          </div>

          {/* Section 3: Lawful Basis for Processing */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              3. Lawful Basis for Processing (NDPA 2023)
            </h2>
            <p>
              Under Section 25 of the Nigeria Data Protection Act 2023, we process personal data exclusively under the following lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Consent:</strong> When you voluntarily submit forms, request consultations, or opt in to communicate via email or WhatsApp.</li>
              <li><strong>Contractual Necessity:</strong> Where processing is necessary to execute an annual maintenance contract (AMC), software license, or enterprise service agreement.</li>
              <li><strong>Legitimate Interests:</strong> To maintain network security, prevent automated spam submissions, and preserve audit trails for technical support requests.</li>
              <li><strong>Legal Obligation:</strong> Where required by applicable Nigerian commercial, tax, or regulatory statutes.</li>
            </ul>
          </div>

          {/* Section 4: Data Storage, Retention & Security */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              4. Storage, Security Safeguards & Retention
            </h2>
            <p>
              We implement industry-standard physical, organizational, and technical safeguards to prevent unauthorized access, loss, or disclosure:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>In-Transit Encryption:</strong> All web traffic is strictly encrypted using Transport Layer Security (TLS 1.3 / HTTPS).</li>
              <li><strong>Data at Rest:</strong> Persistent database and file stores reside on secured infrastructure with restricted access permissions.</li>
              <li><strong>Retention Practice:</strong> Commercial lead records are retained for up to 24 months for relationship continuity. Technical support ticket records are retained for 36 months to maintain SLA and maintenance histories. Inquiries that do not materialize may be purged upon written request.</li>
            </ul>
          </div>

          {/* Section 5: Third-Party Disclosures & Cloud Processors */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              5. Third-Party Service Providers
            </h2>
            <p>
              Dervac does not sell, rent, or trade your personal data. We disclose data strictly to vetted service processors essential to delivering our services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Cloud hosting and infrastructure providers supporting server operations.</li>
              <li>Communications carriers and messaging infrastructure (e.g. WhatsApp for pre-filled chat routing, SMTP email gateways).</li>
              <li>Regulatory or law enforcement authorities only when compelled by valid court subpoena or Nigerian legal statute.</li>
            </ul>
          </div>

          {/* Section 6: Healthcare Software & Data Standards */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              6. Clinical & Healthcare Information Systems (Medisure & LIMS)
            </h2>
            <p>
              Where Dervac deploys proprietary healthcare platforms such as Medisure Diagnostic System or Smart Laboratory LIMS, Dervac acts as a software provider or data processor on behalf of the healthcare institution (the data controller). Architectural safeguards include role-based access control, cryptographic result signing, and encrypted database partitions aligned with international health confidentiality benchmarks and the NDPA 2023.
            </p>
          </div>

          {/* Section 7: Cookies and Local Storage */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              7. Cookies and Local Storage Technologies
            </h2>
            <p>
              Our website uses strictly necessary technical cookies and local session storage:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Strictly Necessary:</strong> Session markers, user interface state (e.g. dark/light theme preferences), and anti-tamper security tokens.</li>
              <li><strong>No Non-Consensual Advertising Trackers:</strong> We do not deploy third-party advertising cookies, retargeting pixels, or behavioral profile aggregators.</li>
            </ul>
          </div>

          {/* Section 8: Data Subject Rights */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              8. Your Rights Under the NDPA 2023
            </h2>
            <p>
              As a data subject in Nigeria, you have enforceable legal rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Right of Access:</strong> You may request confirmation of whether we process your data and obtain a copy.</li>
              <li><strong>Right to Rectification:</strong> You may request prompt correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request deletion of your data when retention is no longer necessary.</li>
              <li><strong>Right to Object:</strong> You may object to data processing grounded on legitimate interests or direct communications.</li>
              <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a grievance with the Nigeria Data Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#224C75] hover:text-[#1a3a5a] underline">ndpc.gov.ng</a>.</li>
            </ul>
            <p className="pt-2">
              To exercise any of these rights, send an inquiry to <a href={`mailto:${companyData.contacts.privacyEmail}`} className="text-[#224C75] hover:text-[#1a3a5a] underline font-medium">{companyData.contacts.privacyEmail}</a>. Requests are responded to within the statutory 30-day timeline.
            </p>
          </div>

          {/* Section 9: DPO & Verification Notice */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
            <p className="font-semibold">Verification & Legal Advisory Note:</p>
            <p>
              This policy represents Dervac Global Services Ltd&apos;s baseline operational disclosures. Formal registration of a Data Protection Officer (DPO) and annual NDPA compliance audit filings with the NDPC are conducted by our designated external compliance counsel.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
