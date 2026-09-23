import {
  Activity,
  BarChart3,
  BrainCircuit,
  Building2,
  Boxes,
  Gavel,
  GitBranch,
  Network,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SiDocker, SiDotnet, SiKubernetes, SiSharp } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import type { IconType } from "react-icons";

export type MarqueeSkill = {
  label: string;
  icon: LucideIcon | IconType;
};

// Real brand marks where one genuinely exists (Azure, .NET, C#, Docker,
// Kubernetes, SQL Server). The rest — AI/GenAI, Microservices, RegTech,
// SupTech, RAG, Enterprise Architecture, Digital Transformation — are
// disciplines/techniques, not vendor products, so there is no logo to use;
// a well-chosen representative icon is the honest option, not a stand-in
// brand mark that would misidentify the skill as a specific product.

// Row 1 — scrolls right to left.
export const marqueeSkillsRow1: MarqueeSkill[] = [
  { label: "Azure", icon: TbBrandAzure },
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
  { label: "SQL Server", icon: DiMsqlServer },
  { label: "Power BI", icon: BarChart3 },
  { label: "RAG", icon: Search },
  { label: "Azure DevOps", icon: GitBranch },
  { label: "Enterprise Architecture", icon: Building2 },
  { label: "Digital Transformation", icon: Workflow },
];
