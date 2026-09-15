import { Building2, Code2, Database, Cloud, Workflow, Users, type LucideIcon } from "lucide-react";
import { capabilityGroups } from "@/data/capabilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const groupIcons: Record<string, LucideIcon> = {
  Architecture: Building2,
  Engineering: Code2,
  Data: Database,
  "Cloud & DevOps": Cloud,
  "Application & Integration": Workflow,
  "Engineering Practices": Users,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology in service of the system, not the story"
          description="Architecture, engineering, data and delivery capabilities built across sixteen years of enterprise work."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group) => {
            const Icon = groupIcons[group.label] ?? Code2;
            return (
              <StaggerItem key={group.label}>
                <div className="h-full rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-3 text-accent">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-wide text-fg">
                    {group.label}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-hairline bg-canvas px-2.5 py-1 text-xs text-fg-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
