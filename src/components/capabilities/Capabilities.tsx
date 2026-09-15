import { capabilityGroups } from "@/data/capabilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology in service of the system, not the story"
          description="Architecture, engineering, data and delivery capabilities built across sixteen years of enterprise work."
        />

        <StaggerGroup className="mt-14 grid gap-x-12 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <StaggerItem key={group.label}>
              <h3 className="text-sm font-semibold tracking-wide text-fg">
                {group.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {group.items.join(" · ")}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
