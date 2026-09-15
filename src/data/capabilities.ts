export type CapabilityGroup = {
  label: string;
  items: string[];
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
    items: [
      ".NET / .NET Core",
      "ASP.NET",
      "C#",
      "Web API",
      "Full-Stack Development",
      "REST / SOAP",
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
    items: ["API Gateways", "Appian", "Enterprise Workflows", "Third-Party Integrations"],
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
