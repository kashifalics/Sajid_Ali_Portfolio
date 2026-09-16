import {
  Users,
  AppWindow,
  Boxes,
  Network,
  Database,
  ChevronDown,
  Fingerprint,
  Shield,
  Cloud,
  GitBranch,
  Activity,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const layers: { label: string; icon: LucideIcon }[] = [
  { label: "User / Business", icon: Users },
  { label: "Application", icon: AppWindow },
  { label: "Services / Microservices", icon: Boxes },
  { label: "API / Integration", icon: Network },
  { label: "Data", icon: Database },
];

const surroundingConcepts: { label: string; icon: LucideIcon }[] = [
  { label: "Identity", icon: Fingerprint },
  { label: "Security", icon: Shield },
  { label: "Cloud", icon: Cloud },
  { label: "DevOps", icon: GitBranch },
  { label: "Monitoring", icon: Activity },
  { label: "External Systems", icon: Landmark },
];

export function ArchitectureDiagram() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="Architecture at a Glance"
          description="A simplified view of how enterprise systems are typically structured — from the business layer down to data, with cloud, identity, integration and operational concerns running alongside."
        />

        <Reveal
          delay={0.1}
          className="mt-12 rounded-3xl border border-hairline bg-raised px-6 py-10 sm:px-10 sm:py-12 md:py-14"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <StaggerGroup className="mx-auto flex w-full max-w-sm flex-col items-stretch">
              {layers.map((layer, i) => (
                <StaggerItem key={layer.label}>
                  <div className="flex items-center gap-3 rounded-lg border border-hairline bg-surface px-5 py-3.5">
                    <layer.icon
                      size={17}
                      className="shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-fg">
                      {layer.label}
                    </span>
                  </div>
                  {i < layers.length - 1 ? (
                    <div className="flex justify-center py-1.5">
                      <ChevronDown
                        size={16}
                        className="text-fg-faint"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Secondary Systems
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {surroundingConcepts.map((concept) => (
                  <li
                    key={concept.label}
                    className="flex items-center gap-2 rounded-full border border-hairline bg-surface px-3.5 py-2 text-sm text-fg-muted"
                  >
                    <concept.icon
                      size={14}
                      className="shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {concept.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
