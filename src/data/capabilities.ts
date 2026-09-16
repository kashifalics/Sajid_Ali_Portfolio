export type CapabilityGroup = {
  label: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Architecture",
    items: [
      "Solution Architecture",
      "Enterprise Architecture",
      "Application Architecture",
      "Domain-Driven Design",
      "Microservices",
    ],
  },
  {
    label: "Engineering",
    items: ["C#", ".NET / .NET Core", "ASP.NET", "Web API", "REST", "JavaScript", "SQL"],
  },
  {
    label: "Integration",
    items: [
      "API Gateways",
      "Enterprise Integration",
      "REST / SOAP",
      "Government Integrations",
      "Mobile APIs",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure", "Kubernetes", "Docker", "CI/CD", "DevOps"],
  },
  {
    label: "Data",
    items: ["SQL Server", "Entity Framework", "Database Architecture", "Reporting / Analytics"],
  },
  {
    label: "Delivery",
    items: ["Agile", "Scrum", "Team Leadership", "Requirements Engineering", "SDLC"],
  },
];
