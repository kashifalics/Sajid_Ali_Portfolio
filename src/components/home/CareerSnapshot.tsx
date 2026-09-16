import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function CareerSnapshot() {
  const [current] = experience;

  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Sixteen years of increasing scope" />

        <Reveal className="mt-10">
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
              <span className="text-sm font-medium text-accent">{current.role}</span>
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
          </div>
        </Reveal>

        <Link
          href="/experience"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-fg"
        >
          View Full Experience
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
