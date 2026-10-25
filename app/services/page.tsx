import { Metadata } from "next";
import { ServicesView } from "./ServicesView";

export const metadata: Metadata = {
  title: "ICT Services & Enterprise Solutions — Dervac Global Services Ltd",
  description:
    "Enterprise software development, structured cabling & infrastructure, cybersecurity, CBT exam centre architecture, ICT training academy, and facility rentals in Lagos, Nigeria.",
  keywords: [
    "Enterprise ICT Services Lagos",
    "Software Development Nigeria",
    "Structured Cabling Lagos",
    "CBT Centre Setup Nigeria",
    "Dervac Academy Tech Training",
    "Palmgrove Coworking Space",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "ICT Services & Enterprise Solutions — Dervac Global Services Ltd",
    description:
      "Enterprise software development, structured cabling & infrastructure, cybersecurity, CBT exam centre architecture, ICT training academy, and facility rentals in Lagos, Nigeria.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICT Services & Enterprise Solutions — Dervac Global Services Ltd",
    description:
      "Enterprise software development, structured cabling & infrastructure, cybersecurity, CBT exam centre architecture, ICT training academy, and facility rentals in Lagos, Nigeria.",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
