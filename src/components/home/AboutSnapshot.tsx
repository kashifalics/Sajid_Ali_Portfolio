import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSnapshot() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="section-label">About</span>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Engineering with an architecture mindset.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body">
              Sajid Ali is a Solutions Architect with 16+ years of experience
              designing and delivering enterprise-grade systems across
              regulated environments — including FinTech, insurance and
              government. His work spans the full software development
              lifecycle: architecture, hands-on engineering, integration,
              cloud and DevOps.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-fg"
            >
              Read More About Sajid
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
