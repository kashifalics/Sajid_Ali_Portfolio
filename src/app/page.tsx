import { SiteBackground } from "@/components/background/SiteBackground";
import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { CredibilityStrip } from "@/components/credibility/CredibilityStrip";
import { Work } from "@/components/work/Work";
import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { Experience } from "@/components/experience/Experience";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { HowIWork } from "@/components/about/HowIWork";
import { About } from "@/components/about/About";
import { EducationCertifications } from "@/components/about/EducationCertifications";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <CredibilityStrip />
        <Work />
        <ArchitectureDiagram />
        <Experience />
        <Capabilities />
        <HowIWork />
        <About />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
