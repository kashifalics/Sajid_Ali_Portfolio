import type { IconType } from "react-icons";
import { SiDotnet, SiDocker, SiKubernetes, SiAppian } from "react-icons/si";
import { TbBrandCSharp, TbBrandAzure } from "react-icons/tb";
import {
  Database,
  Boxes,
  Webhook,
  GitMerge,
  Workflow,
  RefreshCw,
  Layers,
  type LucideIcon,
} from "lucide-react";

type StackItem = {
  label: string;
  Icon: LucideIcon | IconType;
  color?: string;
};

const stack: StackItem[] = [
  { label: "Solutions Architecture", Icon: Layers },
  { label: ".NET / .NET Core", Icon: SiDotnet, color: "#512BD4" },
  { label: "C#", Icon: TbBrandCSharp },
  { label: "SQL Server", Icon: Database },
  { label: "Azure", Icon: TbBrandAzure, color: "#0089D6" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { label: "Microservices", Icon: Boxes },
  { label: "API-First Design", Icon: Webhook },
  // OPEN QUESTION (see project checklist): Appian has no supporting case
  // study or experience bullet on the site yet — kept rather than silently
  // dropped, but flag for Sajid to confirm a project to cite or remove it.
  { label: "Appian", Icon: SiAppian },
  { label: "Enterprise Integration", Icon: GitMerge },
  { label: "CI/CD", Icon: Workflow },
  { label: "Agile & Scrum", Icon: RefreshCw },
];

function StackPill({ label, Icon, color }: StackItem) {
  return (
    <li className="flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-fg-muted">
      <Icon size={16} className="shrink-0" style={color ? { color } : undefined} aria-hidden="true" />
      {label}
    </li>
  );
}

export function TechMarquee() {
  return (
    <div
      className="relative z-10 border-y border-hairline bg-raised/60 py-6"
      aria-label="Technology stack"
    >
      <div className="mask-fade-x overflow-hidden">
        <ul className="marquee-track flex items-center gap-3">
          {[...stack, ...stack].map((item, i) => (
            <StackPill key={`${item.label}-${i}`} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
