import { Metadata } from "next";
import { ProductsView } from "./ProductsView";

export const metadata: Metadata = {
  title: "Proprietary Software Systems & Platforms — Dervac Global Services Ltd",
  description:
    "Explore proprietary software platforms developed by Dervac: Medisure Diagnostic System, Smart Laboratory LIMS, and Sure URL Shortener. Designed for healthcare, clinical diagnostics, and enterprise telemetry.",
  keywords: [
    "Medisure Diagnostic System",
    "Smart Laboratory LIMS Nigeria",
    "Sure URL Shortener",
    "Healthcare Software Nigeria",
    "Clinical Diagnostics Software Lagos",
    "Proprietary Enterprise Software Dervac",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Proprietary Software Systems & Platforms — Dervac Global Services Ltd",
    description:
      "Explore proprietary software platforms developed by Dervac: Medisure Diagnostic System, Smart Laboratory LIMS, and Sure URL Shortener.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proprietary Software Systems & Platforms — Dervac Global Services Ltd",
    description:
      "Explore proprietary software platforms developed by Dervac: Medisure Diagnostic System, Smart Laboratory LIMS, and Sure URL Shortener.",
  },
};

export default function ProductsPage() {
  return <ProductsView />;
}
