import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { systems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function WorkPreview() {
  return (
    <section id="work" className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected Enterprise Work"
          description="Enterprise systems, workflows and platforms developed across regulated and institutional environments."
        />

        <div className="mt-10 border-t border-hairline">
          {systems.map((project) => (
            <Reveal key={project.slug}>
              <div className="group border-b border-hairline">
                <Link
                  href={`/work/${project.slug}`}
                  className="flex items-center justify-between gap-6 py-6 transition-colors group-hover:bg-surface-2"
                >
                  <div className="flex items-baseline gap-5">
                    <EditorialNumber
                      value={project.index}
                      className="text-sm transition-colors group-hover:text-accent"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-fg sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-xs tracking-wide text-fg-faint uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-fg-faint transition-all group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </Link>

                {/* hover-reveal system flow preview — CSS-only height reveal,
                    no layout shift for viewers who never hover it. */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 pb-6 pl-0 sm:pl-[3.25rem]">
                      {project.flow.map((step, i) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-[11px] font-medium text-fg-muted">
                            {step}
                          </span>
                          {i < project.flow.length - 1 ? (
                            <ArrowRight
                              size={11}
                              className="shrink-0 text-fg-faint"
                              aria-hidden="true"
                            />
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
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
