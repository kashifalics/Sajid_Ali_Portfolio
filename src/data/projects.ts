export type SystemProject = {
  index: string;
  title: string;
  category: string;
  role: string;
  description: string;
  capabilities: string[];
  flow: string[];
  tags: string[];
};

const role = "Development & Team Leadership — Abu Dhabi Insurance Authority";

export const systems: SystemProject[] = [
  {
    index: "01",
    title: "E-Inspection System",
    category: "Insurance Authority · Field Operations Platform",
    role,
    description:
      "Automation and transformation of onsite insurance inspection processes, including inspection planning, execution plans, recommendations and feedback workflows.",
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
    tags: ["Insurance", "Workflow", "Enterprise System"],
  },
  {
    index: "02",
    title: "E-Complaint System",
    category: "Insurance Authority · Consumer Platform",
    role,
    description:
      "Enterprise complaint and inquiry management system supporting resolution, escalation, workflow processing and KPI/statistical reporting.",
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
    tags: ["Insurance", "Workflow", "KPI"],
  },
  {
    index: "03",
    title: "Meeting Management System",
    category: "Insurance Authority · Governance Platform",
    role,
    description:
      "End-to-end meeting lifecycle covering board and organizational meetings, agendas, invitations, pre-meeting preparation, minutes, recommendations, decisions and action plans.",
    capabilities: [
      "Board member, location & attendee management",
      "Meeting requests, agendas & invitations",
      "Pre-meeting preparation & notes",
      "MOM generation, decisions & action plan follow-up",
    ],
    flow: [
      "Meeting Request",
      "Agenda & Invitations",
      "Board Session",
      "Decisions & MOM",
      "Action Follow-Up",
    ],
    tags: ["Enterprise", "Workflow", "Governance"],
  },
  {
    index: "04",
    title: "Follow-up & Enforcement System",
    category: "Insurance Authority · Enterprise Workflow Platform",
    role,
    description:
      "Processes supporting court decisions, penalties, company cancellation requests and appeal request management.",
    capabilities: [
      "Court decision execution",
      "Insurance company penalties",
      "Company cancellation requests",
      "Appeal request management",
    ],
    flow: [
      "Case Intake",
      "Workflow Routing",
      "Decision / Penalty",
      "Appeal Review",
      "Enforcement Outcome",
    ],
    tags: ["Regulatory", "Workflow", "Enterprise"],
  },
  {
    index: "05",
    title: "License & Registration System",
    category: "Insurance Authority · Enterprise Platform",
    role,
    description:
      "Insurance company licensing, renewals, modification requests, service payments and penalty calculations.",
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
    tags: ["Insurance", "Regulatory", "Enterprise"],
  },
];
