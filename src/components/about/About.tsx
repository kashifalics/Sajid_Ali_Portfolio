import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="section-label">About</span>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Engineering with an architecture mindset.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5">
            <p className="text-body">
              Sajid Ali is a Solutions Architect with 16+ years of experience
              designing and delivering enterprise-grade systems across
              regulated environments — including FinTech, insurance and
              government. His work spans the full software development
              lifecycle: architecture, hands-on engineering, integration,
              cloud and DevOps.
            </p>
            <p className="text-body">
              He currently works on mission-critical internal enterprise
              systems at the Central Bank of the UAE, contributing to the
              architecture, design, development and enhancement of
              enterprise applications and integrations with other government
              entities.
            </p>
            <p className="text-body">
              Earlier in his career, he served as a senior developer and
              technical team lead across insurance, government and retail
              sector systems, working with ASP.NET, C# and SQL Server to
              build role-based, dynamic-workflow enterprise applications.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
