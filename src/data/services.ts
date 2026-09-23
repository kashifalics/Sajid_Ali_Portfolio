export type Service = {
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Architecture & System Design",
    description: "Defining system boundaries, data ownership and integration points before implementation begins.",
  },
  {
    index: "02",
    title: "Enterprise Application Modernization",
    description: "Evolving legacy systems into maintainable, scalable platforms without disrupting production.",
  },
  {
    index: "03",
    title: "Cloud & DevOps Architecture",
    description: "Cloud-native infrastructure, containerization and CI/CD pipelines built for reliable delivery.",
  },
  {
    index: "04",
    title: "API & Integration Architecture",
    description: "API-first design and enterprise integration across internal systems and external entities.",
  },
  {
    index: "05",
    title: "Full-Stack Engineering",
    description: "Hands-on delivery across the full stack — from data layer to user-facing application.",
  },
  {
    index: "06",
    title: "Technical Leadership",
    description: "Team leadership, requirements engineering and architecture governance across the SDLC.",
  },
  {
    index: "07",
    title: "AI / Intelligent Automation Integration",
    description: "Incorporating AI-assisted capabilities into enterprise workflows as a supporting, not central, capability.",
  },
];
