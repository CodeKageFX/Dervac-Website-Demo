import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { CoreServices } from "@/components/CoreServices";
import { ProductsSolutions } from "@/components/ProductsSolutions";
import { PartnersEcosystem } from "@/components/PartnersEcosystem";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Dervac Global Services Ltd | Enterprise ICT Solutions, Software & Infrastructure",
  description:
    "Leading indigenous ICT firm in Lagos, Nigeria. Turnkey enterprise infrastructure, custom software engineering, CBT examination centres, and tech skills incubation across West Africa.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Introduction />
      <CoreServices />
      <ProductsSolutions />
      <PartnersEcosystem />
      <ContactCTA />
    </main>
  );
}
