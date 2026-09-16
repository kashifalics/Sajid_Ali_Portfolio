import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Experience() {
  const [current, ...rest] = experience;

  return (
    <section id="experience" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Sixteen years of increasing scope and responsibility"
        />

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-hairline-strong bg-accent-3 p-7 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold text-fg sm:text-2xl">
                {current.company}
              </h3>
              <span className="text-xs font-medium tracking-wide text-fg-faint uppercase">
                {current.period}
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-sm font-medium text-accent">
                {current.role}
              </span>
              {current.location ? (
                <span className="flex items-center gap-1 text-xs text-fg-faint">
                  <MapPin size={12} aria-hidden="true" />
                  {current.location}
                </span>
              ) : null}
              <span className="rounded-full border border-accent/30 bg-canvas px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                Current
              </span>
            </div>

            <p className="text-body mt-4 max-w-2xl">{current.description}</p>

            {current.highlights ? (
              <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
                {current.highlights.map((h) => (
                  <li key={h} className="text-body flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>

        <StaggerGroup className="mt-6 grid gap-4">
          {rest.map((role) => (
            <StaggerItem key={`${role.company}-${role.period}`}>
              <div className="card-hover rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface p-6 transition-colors hover:border-accent/25 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-fg sm:text-lg">
                    {role.company}
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-fg-faint uppercase">
                    <Calendar size={12} aria-hidden="true" />
                    {role.period}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-medium text-accent">
                    {role.role}
                  </span>
                  {role.location ? (
                    <span className="flex items-center gap-1 text-xs text-fg-faint">
                      <MapPin size={12} aria-hidden="true" />
                      {role.location}
                    </span>
                  ) : null}
                </div>

                <p className="text-body-sm mt-3 max-w-2xl">{role.description}</p>

                {role.highlights ? (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="text-body-sm flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
