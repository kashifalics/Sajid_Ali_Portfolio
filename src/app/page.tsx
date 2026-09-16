import { SiteBackground } from "@/components/background/SiteBackground";
import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { CredibilityStrip } from "@/components/credibility/CredibilityStrip";
import { TechMarquee } from "@/components/credibility/TechMarquee";
import { Work } from "@/components/work/Work";
import { Experience } from "@/components/experience/Experience";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { About } from "@/components/about/About";
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
        <TechMarquee />
        <Work />
        <Experience />
        <Testimonials />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
