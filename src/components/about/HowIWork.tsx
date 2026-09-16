import { howIWork } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function HowIWork() {
  return (
    <section id="how-i-work" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="How I Work" title="From requirements to production" />

        <StaggerGroup className="mt-12 grid gap-x-8 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.map((stage) => (
            <StaggerItem key={stage.index}>
              <span className="font-mono text-xs text-fg-faint">{stage.index}</span>
              <h3 className="mt-2 text-base font-semibold text-fg">{stage.title}</h3>
              <p className="text-body-sm mt-1.5">{stage.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
