import { Layers, AlertTriangle } from "lucide-react";
import { systems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectFlow } from "@/components/work/ProjectFlow";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section
      id="work"
      className="relative z-10 scroll-mt-28 bg-canvas-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Enterprise Work"
          title="Systems built for regulated, mission-critical environments"
          description="Selected systems and platforms developed across regulated, government, insurance and enterprise environments."
        />

        <div className="mt-14 grid gap-8">
          {systems.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={project.title}>
                <article className="card-hover relative overflow-hidden rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface p-6 transition-colors hover:border-accent/25 sm:p-8 lg:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-2 right-4 font-serif text-[7rem] leading-none font-bold text-gold/10 select-none sm:text-[9rem]"
                  >
                    {project.index}
                  </span>

                  <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div
                      className={cn(
                        "flex flex-col",
                        reversed && "lg:order-2"
                      )}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-3 text-accent">
                        <Layers size={18} aria-hidden="true" />
                      </span>
                      <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-fg sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-accent">
                        {project.role}
                      </p>

                      <p className="text-body mt-5 max-w-xl">
                        {project.description}
                      </p>

                      <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                        {project.capabilities.map((c) => (
                          <li key={c} className="text-body flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {c}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-accent/40 bg-accent/12 px-2.5 py-1 text-xs font-medium text-[#A8C4E0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-start gap-2.5 rounded-lg border-l-4 border-gold bg-gold/8 px-4 py-3">
                        <AlertTriangle
                          size={18}
                          className="mt-0.5 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-fg-muted italic">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex items-center",
                        reversed && "lg:order-1"
                      )}
                    >
                      <ProjectFlow steps={project.flow} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
