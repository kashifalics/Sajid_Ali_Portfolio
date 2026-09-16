export type CapabilityGroup = {
  index: string;
  label: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    index: "01",
    label: "Solutions Architecture",
    items: ["Solutions Architecture", "Enterprise Architecture", "Domain-Driven Design", "API-First Design"],
  },
  {
    index: "02",
    label: "Enterprise Engineering",
    items: ["C#", "VB.NET", ".NET Core", "ASP.NET", "MVC"],
  },
  {
    index: "03",
    label: "Full-Stack Development",
    items: ["JavaScript", "HTML / CSS", "Razor", "Vue.js", "Blazor"],
  },
  {
    index: "04",
    label: "Microservices & APIs",
    items: ["Microservices", "Web API", "REST", "SOAP", "Swagger"],
  },
  {
    index: "05",
    label: "Cloud & DevOps",
    items: ["Azure", "Docker", "Kubernetes", "DevOps", "CI/CD"],
  },
  {
    index: "06",
    label: "Database & Data Systems",
    items: ["SQL Server", "Entity Framework", "Database Design", "Reporting"],
  },
  {
    index: "07",
    label: "Enterprise Integration",
    items: ["Enterprise Integration", "API Integrations", "Government Integrations", "Third-Party Integrations"],
  },
  {
    index: "08",
    label: "Agile / Delivery",
    items: ["Agile", "Scrum", "Requirements Engineering", "Team Leadership", "SDLC"],
  },
];
