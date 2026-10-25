import { Metadata } from "next";
import { ProfileView } from "./ProfileView";

export const metadata: Metadata = {
  title: "Corporate Profile & Institutional Overview — Dervac Global Services Ltd",
  description:
    "Learn about Dervac Global Services Ltd: 20+ years of indigenous Nigerian ICT engineering, enterprise infrastructure, healthcare software systems, and nationwide CBT test centres.",
  keywords: [
    "Dervac Corporate Profile",
    "About Dervac Nigeria",
    "ICT Company Lagos",
    "Indigenous Tech Firm Nigeria",
    "Dervac Mission and Vision",
    "Palmgrove Hub Lagos",
  ],
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "Corporate Profile & Institutional Overview — Dervac Global Services Ltd",
    description:
      "Learn about Dervac Global Services Ltd: 20+ years of indigenous Nigerian ICT engineering, enterprise infrastructure, healthcare software systems, and nationwide CBT test centres.",
    url: "/profile",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Profile & Institutional Overview — Dervac Global Services Ltd",
    description:
      "Learn about Dervac Global Services Ltd: 20+ years of indigenous Nigerian ICT engineering, enterprise infrastructure, healthcare software systems, and nationwide CBT test centres.",
  },
};

export default function ProfilePage() {
  return <ProfileView />;
}
