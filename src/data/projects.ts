export type FlowShape = "linear" | "converging" | "branching";

export type SystemProject = {
  slug: string;
  index: string;
  title: string;
  category: string;
  role: string;
  description: string;
  context: string;
  capabilities: string[];
  flow: string[];
  flowShape: FlowShape;
  tags: string[];
  architectureNotes: string[];
};

const role = "Development & Team Leadership — Abu Dhabi Insurance Authority";

// Every project below was delivered as part of the same Abu Dhabi Insurance
// Authority role (see src/data/experience.ts), described there as
// "developing fully role-based, dynamic-workflow, multilingual internal
// systems". Architecture notes are restatements of that same, already-
// sourced description plus each project's own documented capabilities —
// nothing project-specific is claimed beyond what's in that data.
const baseArchitectureNotes = [
  "ASP.NET / C# enterprise application",
  "SQL Server data layer",
  "Role-based, dynamic-workflow architecture",
];

export const systems: SystemProject[] = [
  {
    slug: "e-inspection",
    index: "01",
    title: "E-Inspection System",
    category: "Insurance Authority · Field Operations Platform",
    role,
    description:
      "Automation and transformation of onsite insurance inspection processes, including inspection planning, execution plans, recommendations and feedback workflows.",
    context:
      "Insurance field operations depend on inspections that were previously coordinated manually across planning, scheduling and reporting. This system brought the full inspection lifecycle onto one platform for the Insurance Authority's field operations function.",
    capabilities: [
      "Yearly, quarterly and monthly inspection planning",
      "Predefined inspection criteria",
      "Execution plans & recommendation letters",
      "Post-inspection feedback",
    ],
    flow: [
      "Inspection Planning",
      "Scheduling",
      "Onsite Execution",
      "Findings & Recommendations",
      "Reporting",
    ],
    flowShape: "linear",
    tags: ["Insurance", "Workflow", "Enterprise System"],
    architectureNotes: [...baseArchitectureNotes, "Predefined inspection criteria engine"],
  },
  {
    slug: "e-complaint",
    index: "02",
    title: "E-Complaint System",
    category: "Insurance Authority · Consumer Platform",
    role,
    description:
      "Enterprise complaint and inquiry management system supporting resolution, escalation, workflow processing and KPI/statistical reporting.",
    context:
      "Replacing a legacy system, this platform connects insurance consumers with authority and insurer resolution workflows — routing complaints and inquiries through triage, resolution and, where needed, committee escalation.",
    capabilities: [
      "Complaint submission & inquiry handling",
      "Resolution workflows",
      "Escalation to committees",
      "Auto-calculated KPI & statistics reporting",
    ],
    flow: [
      "Complaint Submission",
      "Triage & Assignment",
      "Resolution Workflow",
      "Committee Escalation",
      "KPI Reporting",
    ],
    flowShape: "linear",
    tags: ["Insurance", "Workflow", "KPI"],
    architectureNotes: [...baseArchitectureNotes, "Auto-calculated KPI & statistics reporting"],
  },
  {
    slug: "meeting-management",
    index: "03",
    title: "Meeting Management System",
    category: "Insurance Authority · Governance Platform",
    role,
    description:
      "End-to-end meeting lifecycle covering board and organizational meetings, agendas, invitations, pre-meeting preparation, minutes, recommendations and action plans.",
    context:
      "Board and organizational meetings require coordinating members, locations and agendas before a meeting can even happen, then tracking minutes and decisions through to follow-up. This system automates that full lifecycle.",
    capabilities: [
      "Board member, location & attendee management",
      "Meeting requests, agendas & invitations",
      "Pre-meeting preparation & notes",
      "MOM generation, decisions & action plan follow-up",
    ],
    flow: [
      "Members",
      "Rooms",
      "Agenda",
      "Meeting",
      "Minutes",
      "Recommendations",
      "Action Follow-Up",
    ],
    flowShape: "converging",
    tags: ["Enterprise", "Workflow", "Governance"],
    architectureNotes: [...baseArchitectureNotes, "Board and organizational governance workflows"],
  },
  {
    slug: "follow-up-enforcement",
    index: "04",
    title: "Follow-up & Enforcement System",
    category: "Insurance Authority · Enterprise Workflow Platform",
    role,
    description:
      "Processes supporting court decisions, penalties, company cancellation requests and appeal request management.",
    context:
      "The Follow-up and Enforcement department handles several distinct regulatory case types that all move through intake, review and a final outcome. This system was built around a dynamic workflow architecture spanning those processes.",
    capabilities: [
      "Court decision execution",
      "Insurance company penalties",
      "Company cancellation requests",
      "Appeal request management",
    ],
    flow: ["Court Decision", "Penalty", "Cancellation Request", "Appeal Request"],
    flowShape: "branching",
    tags: ["Regulatory", "Workflow", "Enterprise"],
    architectureNotes: [...baseArchitectureNotes, "Spans multiple regulatory case types"],
  },
  {
    slug: "license-registration",
    index: "05",
    title: "License & Registration System",
    category: "Insurance Authority · Enterprise Platform",
    role,
    description:
      "Insurance company licensing, renewals, modification requests, service payments and penalty calculations.",
    context:
      "Insurance companies operating under the Authority need a configurable way to apply for licenses, renew them, request modifications and settle payments or penalties — all through one enterprise platform.",
    capabilities: [
      "New insurance company licensing",
      "License renewals",
      "Modification requests",
      "Service payments & penalty calculations",
    ],
    flow: [
      "Application Submission",
      "Review & Validation",
      "Approval Workflow",
      "Payment & Issuance",
      "Renewal Tracking",
    ],
    flowShape: "linear",
    tags: ["Insurance", "Regulatory", "Enterprise"],
    architectureNotes: [...baseArchitectureNotes, "Payment and penalty calculation"],
  },
];

export function getProjectBySlug(slug: string): SystemProject | undefined {
  return systems.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = systems.findIndex((project) => project.slug === slug);
  const previous = i > 0 ? systems[i - 1] : systems[systems.length - 1];
  const next = i < systems.length - 1 ? systems[i + 1] : systems[0];
  return { previous, next };
}
