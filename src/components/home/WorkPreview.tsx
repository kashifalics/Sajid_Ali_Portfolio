import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { systems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function WorkPreview() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected Enterprise Work"
          description="Enterprise systems, workflows and platforms developed across regulated and institutional environments."
        />

        <div className="mt-10 border-t border-hairline">
          {systems.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-hairline py-6 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-baseline gap-5">
                  <EditorialNumber value={project.index} className="text-sm" />
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
