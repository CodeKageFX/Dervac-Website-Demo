import { Hero } from "@/components/Hero";
import { EcosystemBar } from "@/components/EcosystemBar";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyDervacBento } from "@/components/WhyDervacBento";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { CustomerServiceBanner } from "@/components/CustomerServiceBanner";
import { InteractiveEstimator } from "@/components/InteractiveEstimator";
import { FloatingBackgroundIcons } from "@/components/FloatingBackgroundIcons";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#08090d] relative overflow-hidden">
      <FloatingBackgroundIcons />
      <Hero />
      <EcosystemBar />
      <ValueProposition />
      <ServicesGrid />
      <WhyDervacBento />
      <ProductsShowcase />
      <CustomerServiceBanner />
      <InteractiveEstimator />
    </main>
  );
}
