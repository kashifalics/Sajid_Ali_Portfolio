import { Hero } from "@/components/hero/Hero";
import { TransitionStatement } from "@/components/home/TransitionStatement";
import { WorkPreview } from "@/components/home/WorkPreview";
import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { ArchitecturePrinciples } from "@/components/architecture/ArchitecturePrinciples";
import { CareerSnapshot } from "@/components/home/CareerSnapshot";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { Services } from "@/components/home/Services";
import { HowIWork } from "@/components/about/HowIWork";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ContactCta } from "@/components/home/ContactCta";
import { HomeSectionNav } from "@/components/home/HomeSectionNav";

export default function Home() {
  return (
    <>
      <HomeSectionNav />
      <Hero />
      <TransitionStatement />
      <WorkPreview />
      <ArchitectureDiagram />
      <ArchitecturePrinciples />
      <CareerSnapshot />
      <CapabilitiesPreview />
      <Services />
      <HowIWork />
      <AboutSnapshot />
      <ContactCta />
    </>
  );
}
