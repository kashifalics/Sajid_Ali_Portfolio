import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

const principles = [
  {
    index: "01",
    title: "Clarity before complexity",
    description:
      "A system should be as simple as the problem allows — complexity is added only where the requirements demand it.",
  },
  {
    index: "02",
    title: "Architecture before implementation",
    description:
      "Boundaries, data ownership and integration points get decided before the first line of feature code is written.",
  },
  {
    index: "03",
    title: "Reliable systems over fashionable technology",
    description:
      "Technology choices are judged by how they hold up in production over years, not by how new they are.",
  },
  {
    index: "04",
    title: "Business requirements drive technical decisions",
    description:
      "The technical design follows from what the business and its users actually need — not the other way around.",
  },
];

export function About() {
  return (
    <>
      <section className="relative z-10 py-4 md:py-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Engineering with an architecture mindset.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5">
              <p className="text-body">
                Sajid Ali is a Solutions Architect with 16+ years of
                experience designing and delivering enterprise-grade systems
                across regulated environments — including FinTech, insurance
                and government. His work spans the full software development
                lifecycle: architecture, hands-on engineering, integration,
                cloud and DevOps.
              </p>
              <p className="text-body">
                He currently works on mission-critical internal enterprise
                systems at the Central Bank of the UAE, contributing to the
                architecture, design, development and enhancement of
                enterprise applications and integrations with other
                government entities.
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

      <section className="relative z-10 py-20 md:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="section-label">How I Think</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Principles that guide the work
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-x-10 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2">
            {principles.map((principle) => (
              <StaggerItem key={principle.index}>
                <EditorialNumber value={principle.index} className="text-xs" />
                <h3 className="mt-3 text-base font-semibold text-fg">
                  {principle.title}
                </h3>
                <p className="text-body-sm mt-2 max-w-md">
                  {principle.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 border-t border-hairline pt-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="section-label">Education</span>
              <div className="mt-6 flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-3 text-accent">
                  <GraduationCap size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-fg sm:text-lg">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {education.institution}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-fg-faint uppercase">
                    {education.location} &middot; {education.period}
                  </p>
                  <p className="text-body-sm mt-3 max-w-sm">{education.honor}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="section-label">Certifications</span>
              <ul className="mt-6 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.title} className="flex items-start gap-3">
                    <Award
                      size={15}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-body-sm">{cert.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
