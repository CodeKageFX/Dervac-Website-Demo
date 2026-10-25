import { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact Dervac — Technology Offices in Ikeja & Palmgrove, Lagos",
  description:
    "Get in touch with Dervac Global Services Ltd. Visit our technology hubs in Ikeja and Palmgrove, Lagos, or schedule an enterprise discovery meeting for software, infrastructure, and ICT training.",
  keywords: [
    "Contact Dervac",
    "Dervac Lagos Office",
    "ICT Solutions Nigeria Contact",
    "Software Development Lagos",
    "Palmgrove Coworking Hub",
    "Ikeja Corporate Office",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Dervac — Technology Offices in Ikeja & Palmgrove, Lagos",
    description:
      "Connect with Dervac solution architects for enterprise software, networking infrastructure, CBT centre deployments, and professional tech training.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dervac — Technology Offices in Ikeja & Palmgrove, Lagos",
    description:
      "Connect with Dervac solution architects for enterprise software, networking infrastructure, CBT centre deployments, and professional tech training.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
