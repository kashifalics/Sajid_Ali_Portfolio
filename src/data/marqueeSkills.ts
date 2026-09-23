import {
  Activity,
  BarChart3,
  BrainCircuit,
  Building2,
  Cloud,
  Boxes,
  Database,
  Gavel,
  GitBranch,
  Network,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SiDocker, SiDotnet, SiKubernetes, SiSharp } from "react-icons/si";
import type { IconType } from "react-icons";

export type MarqueeSkill = {
  label: string;
  icon: LucideIcon | IconType;
};

// Row 1 — scrolls right to left.
export const marqueeSkillsRow1: MarqueeSkill[] = [
  { label: "Azure", icon: Cloud },
  { label: "AI / GenAI", icon: BrainCircuit },
  { label: "Microservices", icon: Boxes },
  { label: ".NET", icon: SiDotnet },
  { label: "C#", icon: SiSharp },
  { label: "Docker", icon: SiDocker },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "REST APIs", icon: Network },
];

// Row 2 — scrolls left to right.
export const marqueeSkillsRow2: MarqueeSkill[] = [
  { label: "RegTech", icon: Gavel },
  { label: "SupTech", icon: Activity },
  { label: "SQL Server", icon: Database },
  { label: "Power BI", icon: BarChart3 },
  { label: "RAG", icon: Search },
  { label: "Azure DevOps", icon: GitBranch },
  { label: "Enterprise Architecture", icon: Building2 },
  { label: "Digital Transformation", icon: Workflow },
];
