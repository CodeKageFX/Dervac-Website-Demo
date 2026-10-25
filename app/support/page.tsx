import { Metadata } from "next";
import { SupportView } from "./SupportView";

export const metadata: Metadata = {
  title: "Enterprise Technical Support & Incident Escalation — Dervac",
  description:
    "Log enterprise IT support tickets, server incidents, and network maintenance requests with Dervac Global Services. Rapid triage across Lagos and Nigeria under structured maintenance contracts.",
  keywords: [
    "Dervac Support",
    "IT Maintenance Lagos",
    "Enterprise Network Support Nigeria",
    "Server Incident Response",
    "CBT Centre Technical Support",
    "Annual Maintenance Contract IT",
  ],
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Enterprise Technical Support & Incident Escalation — Dervac",
    description:
      "Structured priority incident resolution and IT maintenance contracts for servers, corporate networks, and software systems.",
    url: "/support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Technical Support & Incident Escalation — Dervac",
    description:
      "Structured priority incident resolution and IT maintenance contracts for servers, corporate networks, and software systems.",
  },
};

export default function SupportPage() {
  return <SupportView />;
}
