import { GraduationCap, BadgeCheck } from "lucide-react";
import { certifications, education } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EducationCertifications() {
  return (
    <section id="education" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Education & Certifications" title="Foundation and continued learning" />

        <div className="mt-12 grid gap-12 border-t border-hairline pt-10 sm:grid-cols-2">
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
                <li key={cert.title} className="text-body-sm flex items-start gap-2.5">
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
        </div>
      </Container>
    </section>
  );
}
