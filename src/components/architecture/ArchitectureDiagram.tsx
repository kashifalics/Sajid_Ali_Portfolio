import {
  Users,
  AppWindow,
  Network,
  Boxes,
  Database,
  ChevronDown,
  Cloud,
  Fingerprint,
  Landmark,
  Layers,
  GitBranch,
  Activity,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const layers: { label: string; icon: LucideIcon }[] = [
  { label: "User / Business Layer", icon: Users },
  { label: "Application Layer", icon: AppWindow },
  { label: "API / Integration Layer", icon: Network },
  { label: "Services / Microservices", icon: Boxes },
  { label: "Data Layer", icon: Database },
];

const surroundingConcepts: { label: string; icon: LucideIcon }[] = [
  { label: "Cloud", icon: Cloud },
  { label: "Identity", icon: Fingerprint },
  { label: "External Government Systems", icon: Landmark },
  { label: "Enterprise Applications", icon: Layers },
  { label: "CI/CD", icon: GitBranch },
  { label: "Monitoring", icon: Activity },
  { label: "Security", icon: Shield },
];

export function ArchitectureDiagram() {
  return (
    <section
      id="architecture"
      className="relative z-10 scroll-mt-28 bg-navy py-20 md:py-28"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[rgba(148,163,184,0.25)] bg-[rgba(148,163,184,0.08)] px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-navy-fg-muted uppercase">
            Architecture
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-navy-fg sm:text-4xl">
            Architecture at a Glance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-fg-muted">
            A simplified view of how enterprise systems are typically
            structured — from the business layer down to data, with cloud,
            identity, integration and operational concerns running alongside.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <StaggerGroup className="mx-auto flex w-full max-w-sm flex-col items-stretch">
            {layers.map((layer, i) => (
              <StaggerItem key={layer.label}>
                <div className="flex items-center gap-3 rounded-lg border border-[rgba(148,163,184,0.18)] bg-navy-surface px-5 py-3.5">
                  <layer.icon
                    size={17}
                    className="shrink-0 text-accent-2"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-navy-fg">
                    {layer.label}
                  </span>
                </div>
                {i < layers.length - 1 ? (
                  <div className="flex justify-center py-1.5">
                    <ChevronDown
                      size={16}
                      className="text-navy-fg-muted"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.14em] text-navy-fg-muted uppercase">
              Surrounding Capabilities
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {surroundingConcepts.map((concept) => (
                <li
                  key={concept.label}
                  className="flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] px-3.5 py-2 text-sm text-navy-fg-muted"
                >
                  <concept.icon
                    size={14}
                    className="shrink-0 text-accent-2"
                    aria-hidden="true"
                  />
                  {concept.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
