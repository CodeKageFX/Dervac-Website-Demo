export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  iconName: string;
  badge: string;
  features: string[];
  benefits: string[];
  specifications: Array<{ label: string; value: string }>;
  status: "Active Deployment" | "Enterprise Ready" | "Available Now";
}

export const productsData: ProductItem[] = [
  {
    id: "medisure",
    name: "Medisure Diagnostic System",
    category: "HealthTech / Diagnostic Clinic",
    tagline: "End-to-end clinical workflow automation and medical record precision.",
    summary:
      "Medisure Diagnostic System is an integrated clinic and radiology management platform designed for Nigerian healthcare centers, ultrasound units, and diagnostic laboratories. It synchronizes patient registration, billing, imaging report generation, and confidential result delivery.",
    iconName: "Stethoscope",
    badge: "Clinical HealthTech",
    features: [
      "Digital patient registry with biometric and national identification linkage",
      "Standardized diagnostic reporting templates for ultrasound, ECG, and pathology",
      "Role-based access control protecting confidential patient health data",
      "Automated SMS/Email notification when medical test results are signed off",
      "Integrated POS billing, invoice reconciliation, and insurance HMO claims tracking",
    ],
    benefits: [
      "Eliminates handwritten diagnostic report errors and transcription delays",
      "Accelerates patient turnaround time by up to 60%",
      "Provides clinic management with real-time financial and operational audits",
      "Allows referring physicians to securely preview test results online",
    ],
    specifications: [
      { label: "Deployment", value: "Cloud-hosted or On-premise Local Server" },
      { label: "Compliance", value: "HIPAA-aligned & NDPR Compliant" },
      { label: "Interface", value: "Responsive Web / Tablet-optimized" },
      { label: "Data Backups", value: "Automated Encrypted Daily Snapshots" },
    ],
    status: "Active Deployment",
  },
  {
    id: "smart-lab",
    name: "Smart Laboratory System (LIMS)",
    category: "Laboratory Information Management",
    tagline: "Automated specimen lifecycle, analyzer interfacing, and clinical precision.",
    summary:
      "A Laboratory Information Management System (LIMS) engineered for pathology clinics, diagnostic labs, and research institutions. From barcode specimen accessioning to direct medical analyzer interfacing and rapid digital result validation.",
    iconName: "Microscope",
    badge: "Precision LIMS",
    features: [
      "Barcode sample accessioning and specimen custody tracking",
      "Direct bidirectional interfacing with automated hematology and chemistry analyzers",
      "Quality control (QC) tracking with automated Levey-Jennings anomaly flagging",
      "Cryptographically signed PDF test result certificates with scannable QR verification",
      "Self-service patient result download portal with one-time verification tokens",
    ],
    benefits: [
      "Mitigates manual data transcription error in critical blood and chemistry analyses",
      "Guarantees forensic chain of custody for all clinical samples",
      "Zero-wait digital result dispatch directly to patients' smartphones",
      "Full audit trail for accreditation inspections and regulatory checks",
    ],
    specifications: [
      { label: "Analyzer Protocols", value: "ASTM E1381/E1394 & HL7 Compatible" },
      { label: "Security", value: "256-bit AES Encryption at Rest and in Transit" },
      { label: "Multi-branch", value: "Centralized HQ with Distributed Collection Centers" },
      { label: "Reporting", value: "Customizable Branded Header & Pathologist Signatures" },
    ],
    status: "Enterprise Ready",
  },
  {
    id: "sure-url",
    name: "Sure URL Shortener",
    category: "Enterprise Marketing & Infrastructure",
    tagline: "Enterprise link management, telemetry tracking, and brand routing.",
    summary:
      "Sure URL Shortener is a link optimization, security routing, and click analytics utility built for enterprise communication, marketing campaigns, and organizational SMS broadcasts with branded domains.",
    iconName: "Link2",
    badge: "Enterprise Utility",
    features: [
      "Custom brand domain routing (e.g. dvrc.ng / brand.link)",
      "Real-time geographic, device, and referrer click analytics",
      "UTM campaign tag generator and automated parameter preservation",
      "Dynamic link retargeting and conditional destination routing",
      "Malicious URL filtering and enterprise access logging",
    ],
    benefits: [
      "Maintains brand trust by eliminating anonymous generic short links",
      "Saves character space in expensive corporate SMS broadcasts",
      "Provides actionable customer journey analytics across digital touchpoints",
      "Instant target redirect modifications without altering distributed marketing materials",
    ],
    specifications: [
      { label: "Throughput", value: "Sub-15ms Redirection Latency" },
      { label: "API", value: "RESTful JSON API with Webhook Event Triggers" },
      { label: "Custom Domains", value: "Unlimited SSL-secured Corporate Domains" },
      { label: "Analytics", value: "GDPR/NDPR compliant non-invasive telemetry" },
    ],
    status: "Active Deployment",
  },
  {
    id: "dervac-hub-coworking",
    name: "Dervac Coworking Hub & Space Rentals",
    category: "Physical Infrastructure & Community",
    tagline: "Tech-enabled workspaces and event venues on Shipeolu Street, Palmgrove.",
    summary:
      "A modern collaborative workspace facility situated in the tech heartland of Lagos. Purpose-built for tech startups, remote software engineers, and organizations seeking professional meeting halls and event spaces with rock-solid utility reliability.",
    iconName: "Building",
    badge: "Physical Ecosystem",
    features: [
      "Dedicated workstations with ergonomic seating and secure storage lockers",
      "High-speed fiber connectivity with automatic failover between two ISP providers",
      "24/7 power backup powered by heavy-duty generator and solar inverter bank",
      "Equipped audiovisual conference room with 4K display and teleconferencing gear",
      "Air-conditioned training lab / event hall accommodating up to 50 participants",
    ],
    benefits: [
      "Zero disruption from public power outages or fluctuating internet connections",
      "Convenient central Lagos location accessible from Ikeja, Yaba, and the Island",
      "Vibrant networking community of developers, designers, and innovators",
      "Flexible hourly, daily, weekly, and monthly workspace packages",
    ],
    specifications: [
      { label: "Location", value: "65 & 76 Shipeolu Street, Palmgrove, Lagos" },
      { label: "Power", value: "Guaranteed 100% Redundant Generator + Inverter" },
      { label: "Internet", value: "Dual Dedicated Fiber-to-the-Premises (FTTP)" },
      { label: "Access", value: "Biometric Card Entry & CCTV Surveillance" },
    ],
    status: "Available Now",
  },
];
