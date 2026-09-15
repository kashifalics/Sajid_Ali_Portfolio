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
                <span className="text-xs text-fg-faint">
                  {current.location}
                </span>
              ) : null}
              <span className="rounded-full border border-accent/30 bg-canvas px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                Current
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {current.description}
            </p>

            {current.highlights ? (
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {current.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-fg-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>

        <StaggerGroup className="mt-3 border-t border-hairline">
          {rest.map((role) => (
            <StaggerItem key={`${role.company}-${role.period}`}>
              <div className="flex flex-col gap-1 border-b border-hairline py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="sm:w-1/3">
                  <span className="text-sm font-semibold text-fg">
                    {role.company}
                  </span>
                  <span className="block text-xs text-fg-faint sm:hidden">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm text-fg-muted sm:w-1/3">{role.role}</p>
                <span className="hidden text-xs text-fg-faint sm:block sm:w-1/6 sm:text-right">
                  {role.period}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
