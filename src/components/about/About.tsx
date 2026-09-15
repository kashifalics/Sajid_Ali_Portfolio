import { GraduationCap, BadgeCheck } from "lucide-react";
import { howIWork, certifications, education, languages } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        {/* bio */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="section-label">About</span>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Engineering with an architecture mindset.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
              Sajid Ali is a Solutions Architect and Senior Full-Stack
              Developer with 16+ years of experience across enterprise
              architecture and full-stack engineering. His work spans
              cloud-native systems, microservices and enterprise integration,
              delivered inside regulated FinTech, insurance and government
              environments. He currently contributes to mission-critical
              internal systems at the Central Bank of the UAE, and continues
              to build on that experience through ongoing technical learning.
            </p>
          </Reveal>
        </div>

        {/* how I work */}
        <div className="mt-16 border-t border-hairline pt-12 md:mt-20 md:pt-16">
          <Reveal>
            <span className="section-label">How I Work</span>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((stage) => (
              <StaggerItem key={stage.index}>
                <div className="border-t-2 border-hairline pt-4">
                  <span className="font-mono text-xs text-fg-faint">
                    {stage.index}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-fg">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {stage.items.join(" · ")}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* education, certifications, languages */}
        <div className="mt-16 grid gap-12 border-t border-hairline pt-12 sm:grid-cols-2 md:mt-20 md:pt-16 lg:grid-cols-3">
          <Reveal>
            <span className="section-label">Education</span>
            <div className="mt-5 flex gap-3">
              <GraduationCap
                size={20}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-semibold text-fg">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">
                  {education.institution}
                </p>
                <p className="text-sm text-fg-faint">{education.location}</p>
                <p className="mt-2 text-xs text-fg-faint">
                  {education.period} · {education.honor}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="section-label">Certifications</span>
            <ul className="mt-5 space-y-2.5">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-start gap-2.5 text-sm text-fg-muted"
                >
                  <BadgeCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {cert.title}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="section-label">Languages</span>
            <ul className="mt-5 space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-fg">{lang.name}</span>
                  <span className="text-fg-faint">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
