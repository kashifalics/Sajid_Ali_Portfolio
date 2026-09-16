import { Layers, AlertTriangle } from "lucide-react";
import { systems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectFlow } from "@/components/work/ProjectFlow";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="relative z-10 scroll-mt-28 py-20 md:py-28">
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
                <article className="rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent/25 sm:p-8 lg:p-10">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div
                      className={cn(
                        "flex flex-col",
                        reversed && "lg:order-2"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-3 text-accent">
                          <Layers size={18} aria-hidden="true" />
                        </span>
                        <span className="font-mono text-sm text-fg-faint">
                          {project.index}
                        </span>
                      </div>
                      <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-fg sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-accent">
                        {project.role}
                      </p>

                      <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
                        {project.description}
                      </p>

                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {project.capabilities.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-sm text-fg-muted"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {c}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-hairline bg-canvas px-2.5 py-1 text-xs font-medium text-fg-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-start gap-2 rounded-lg border border-dashed border-hairline bg-canvas px-3.5 py-3">
                        <AlertTriangle
                          size={14}
                          className="mt-0.5 shrink-0 text-amber-500"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-fg-faint italic">
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
