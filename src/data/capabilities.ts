export type CapabilitySubgroup = {
  label: string;
  items: string[];
};

export type CapabilityGroup = {
  label: string;
  items?: string[];
  subgroups?: CapabilitySubgroup[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Architecture",
    items: [
      "Solutions Architecture",
      "Cloud-Native Architecture",
      "Microservices",
      "API-First Design",
      "Enterprise Integration",
    ],
  },
  {
    label: "Engineering",
    // Split Backend/Frontend so the hero's "Full-Stack Developer" claim is
    // visually backed by evidence rather than only listing backend tech.
    subgroups: [
      {
        label: "Backend",
        items: [".NET / .NET Core", "ASP.NET", "C#", "Web API", "REST / SOAP"],
      },
      {
        label: "Frontend",
        items: ["JavaScript", "jQuery", "Vue.js", "Bootstrap", "Blazor"],
      },
    ],
  },
  {
    label: "Data",
    items: ["SQL Server", "Entity Framework", "Database Design", "Data Integration"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure", "Docker", "Kubernetes", "CI/CD", "DevOps"],
  },
  {
    label: "Application & Integration",
    items: [
      "API Gateways",
      // OPEN QUESTION (see project checklist): Appian appears in source
      // skills/tags but has no supporting case study or experience bullet
      // anywhere on the site. Kept rather than silently dropped, but flag
      // for Sajid to either confirm a project to cite or remove it.
      "Appian",
      "Enterprise Workflows",
      "Third-Party Integrations",
    ],
  },
  {
    label: "Engineering Practices",
    items: [
      "Agile",
      "Scrum",
      "Domain-Driven Design",
      "Requirements Engineering",
      "SDLC",
    ],
  },
];
