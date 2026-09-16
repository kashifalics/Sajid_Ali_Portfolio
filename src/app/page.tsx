import { Hero } from "@/components/hero/Hero";
import { CredibilityStrip } from "@/components/credibility/CredibilityStrip";
import { WorkPreview } from "@/components/home/WorkPreview";
import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { CareerSnapshot } from "@/components/home/CareerSnapshot";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { HowIWork } from "@/components/about/HowIWork";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WorkPreview />
      <ArchitectureDiagram />
      <CareerSnapshot />
      <CapabilitiesPreview />
      <HowIWork />
      <AboutSnapshot />
      <ContactCta />
    </>
  );
}
