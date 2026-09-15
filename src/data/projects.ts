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
      "System automating and transforming onsite insurance inspection processes, from planning through execution and feedback.",
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
    tags: ["Dynamic Workflows", "Enterprise Integration", "ASP.NET"],
  },
  {
    index: "02",
    title: "E-Complaint System",
    category: "Insurance Authority · Consumer Platform",
    role,
    description:
      "Enterprise complaint and inquiry management platform replacing a legacy system, connecting insurance consumers with authority and insurer resolution workflows.",
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
    tags: ["Dynamic Workflows", "KPI Reporting", "ASP.NET", "SQL Server"],
  },
  {
    index: "03",
    title: "Meeting Management System",
    category: "Insurance Authority · Governance Platform",
    role,
    description:
      "Automated meeting lifecycle management covering the Board of Directors and internal organizational units, from scheduling through post-meeting follow-up.",
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
    tags: ["Workflow Automation", "Governance", "ASP.NET"],
  },
  {
    index: "04",
    title: "Follow-Up & Enforcement System",
    category: "Insurance Authority · Enterprise Workflow Platform",
    role,
    description:
      "Enterprise system supporting the Follow-up and Enforcement department, built around a dynamic workflow architecture spanning multiple regulatory processes.",
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
    tags: ["Dynamic Workflows", "Enterprise Integration", "ASP.NET", "SQL Server"],
  },
  {
    index: "05",
    title: "License & Registration System",
    category: "Insurance Authority · Enterprise Platform",
    role,
    description:
      "Enterprise insurance platform handling company licensing, renewals and modification requests through configurable, dynamic workflows.",
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
    tags: ["Dynamic Workflows", "ASP.NET", "SQL Server", "Payments"],
  },
];
