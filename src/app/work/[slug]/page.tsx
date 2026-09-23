import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { systems, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";
import { ProjectDiagram } from "@/components/work/ProjectDiagram";

export async function generateStaticParams() {
  return systems.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);
  const relatedExperience = experience.find((entry) =>
    project.role.includes(entry.company)
  );

  return (
    <>
      <section className="pt-24 pb-10 md:pt-28 md:pb-12">
        <Container>
          <Reveal className="max-w-3xl">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-faint transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All Work
            </Link>

            <div className="mt-6 flex items-baseline gap-5">
              <EditorialNumber value={project.index} className="text-4xl sm:text-5xl" />
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                {project.category}
              </p>
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>

            <p className="text-body mt-5 max-w-2xl">{project.description}</p>

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
          </Reveal>
        </Container>
      </section>

      <section className="py-12 md:py-14">
        <Container>
          <div className="grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <Reveal>
              <span className="section-label">The Context</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body max-w-2xl">{project.context}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-raised py-14 md:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="section-label">System Flow</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              How the system moves
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl">
            <ProjectDiagram steps={project.flow} shape={project.flowShape} />
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <div className="grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <Reveal>
              <span className="section-label">Key Workflows</span>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-3.5 sm:grid-cols-2">
                {project.capabilities.map((c) => (
                  <li key={c} className="text-body flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <div className="grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <Reveal>
              <span className="section-label">Role &amp; Contribution</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body max-w-2xl">{project.role}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <div className="grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <Reveal>
              <span className="section-label">Architecture &amp; Platform</span>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid gap-3">
                {project.architectureNotes.map((note) => (
                  <li key={note} className="text-body-sm flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedExperience ? (
        <section className="py-14 md:py-16">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-hairline bg-surface-2 p-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                  Related Experience
                </p>
                <p className="mt-2 text-base font-semibold text-fg">
                  {relatedExperience.company} — {relatedExperience.role}
                </p>
              </div>
              <Link
                href="/experience"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-fg"
              >
                View Full Experience
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-hairline py-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href={`/work/${previous.slug}`}
              className="group rounded-xl border border-hairline p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Previous
              </p>
              <p className="mt-2 flex items-center gap-2 text-base font-semibold text-fg">
                <ArrowLeft
                  size={16}
                  className="shrink-0 text-accent transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                {previous.title}
              </p>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group rounded-xl border border-hairline p-6 text-right transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Next
              </p>
              <p className="mt-2 flex items-center justify-end gap-2 text-base font-semibold text-fg">
                {next.title}
                <ArrowRight
                  size={16}
                  className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
