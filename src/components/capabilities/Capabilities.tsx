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

// Muted, enterprise-appropriate hues for the skill-matrix left borders.
// Distinct from the gold accent, which is reserved for sparing highlight use.
const categoryColors: Record<string, string> = {
  Architecture: "#3E6B9C",
  Backend: "#5580AC",
  Frontend: "#7C8CA6",
  Data: "#4A9B7F",
  "Cloud & DevOps": "#6B6F9C",
  "Application & Integration": "#A67C6D",
  "Engineering Practices": "#7A9B7F",
};

function ChipRow({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          style={{ borderLeftColor: color }}
          className="rounded-md border-l-2 bg-canvas px-2.5 py-1 text-xs text-fg-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

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
                <div className="card-hover h-full rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface p-6 transition-colors hover:border-accent/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-3 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-wide text-fg">
                    {group.label}
                  </h3>

                  {group.subgroups ? (
                    <div className="mt-4 flex flex-col gap-4">
                      {group.subgroups.map((sub) => (
                        <div key={sub.label}>
                          <p className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-fg-faint uppercase">
                            {sub.label}
                          </p>
                          <ChipRow
                            items={sub.items}
                            color={categoryColors[sub.label] ?? categoryColors[group.label]}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4">
                      <ChipRow
                        items={group.items ?? []}
                        color={categoryColors[group.label] ?? "#3E6B9C"}
                      />
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
