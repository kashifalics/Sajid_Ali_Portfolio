import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { systems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";
import { ProjectDiagram } from "@/components/work/ProjectDiagram";
import { cn } from "@/lib/utils";

const featured = systems.slice(0, 3);

export function WorkPreview() {
  return (
    <section id="work" className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected Enterprise Systems"
          description="Enterprise systems, workflows and platforms developed across regulated and institutional environments."
        />

        <div className="mt-10 border-t border-hairline">
          {featured.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={project.slug}>
                <article className="group grid gap-10 border-b border-hairline py-14 lg:grid-cols-2 lg:gap-16">
                  <div className={cn("flex flex-col justify-center", reversed && "lg:order-2")}>
                    <EditorialNumber value={project.index} className="text-3xl sm:text-4xl" />
                    <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-fg sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="text-body mt-5 max-w-xl">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-hairline px-2.5 py-1 text-xs text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-fg"
                    >
                      View Case
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <div className={cn("flex items-center", reversed && "lg:order-1")}>
                    <ProjectDiagram steps={project.flow} shape={project.flowShape} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/work"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-fg"
        >
          View All Enterprise Work
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
