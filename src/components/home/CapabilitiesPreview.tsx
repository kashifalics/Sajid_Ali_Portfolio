import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilityGroups } from "@/data/capabilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function CapabilitiesPreview() {
  return (
    <section id="capabilities" className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="A structured capability map"
          description="Architecture, engineering, platform and delivery capabilities built across sixteen years of enterprise work."
        />

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4">
          {capabilityGroups.map((group) => (
            <StaggerItem key={group.label}>
              <EditorialNumber value={group.index} className="text-xs" />
              <p className="mt-2 text-sm font-medium text-fg">{group.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Link
          href="/capabilities"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-fg"
        >
          View Full Capabilities
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
