export type Principle = {
  index: string;
  title: string;
  description: string;
};

export const architecturePrinciples: Principle[] = [
  {
    index: "01",
    title: "Design for Scale",
    description: "Systems are structured so growth in load or scope doesn't force a rebuild.",
  },
  {
    index: "02",
    title: "Build for Resilience",
    description: "Failure is expected and planned for, not treated as an edge case.",
  },
  {
    index: "03",
    title: "Integrate with Intent",
    description: "Every integration point is a deliberate boundary, not an afterthought.",
  },
  {
    index: "04",
    title: "Modernize Without Disruption",
    description: "Legacy systems evolve in place — production keeps running while the architecture changes underneath it.",
  },
  {
    index: "05",
    title: "Security by Design",
    description: "Access, identity and data protection are architectural decisions, not a layer added at the end.",
  },
  {
    index: "06",
    title: "Align Systems with Business",
    description: "Technical structure follows from what the business actually needs to do.",
  },
];
