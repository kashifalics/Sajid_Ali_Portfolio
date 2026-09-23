import { architecturePrinciples } from "@/data/principles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function ArchitecturePrinciples() {
  return (
    <section className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="Principles" title="Architecture Principles" />

        <StaggerGroup className="mt-12 grid gap-x-10 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {architecturePrinciples.map((principle) => (
            <StaggerItem key={principle.index}>
              <EditorialNumber value={principle.index} className="text-xs" />
              <h3 className="mt-3 text-base font-semibold text-fg">
                {principle.title}
              </h3>
              <p className="text-body-sm mt-2 max-w-xs">
                {principle.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
