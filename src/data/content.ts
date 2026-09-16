export type WorkStage = {
  index: string;
  title: string;
  description: string;
};

export const howIWork: WorkStage[] = [
  {
    index: "01",
    title: "Understand",
    description: "Requirements, business processes and constraints.",
  },
  {
    index: "02",
    title: "Architect",
    description: "System boundaries, data, APIs, integrations and workflows.",
  },
  {
    index: "03",
    title: "Build",
    description: "Production-ready engineering across the full development lifecycle.",
  },
  {
    index: "04",
    title: "Deliver",
    description: "Testing, CI/CD, deployment, iteration and operational reliability.",
  },
];

export type Certification = {
  title: string;
};

export const certifications: Certification[] = [
  { title: "Learning Azure Kubernetes Service (AKS)" },
  { title: "Building AI Powered Chatbots Without Programming" },
  { title: "Generative AI for Executives and Business Leaders – Part 2" },
  { title: "Gen A.I Fluency Curriculum" },
  { title: "Claude 101" },
];

export const education = {
  degree: "B.S. Telecom Engineering",
  period: "2006 – 2010",
  institution: "National University of Computer & Emerging Sciences",
  location: "Islamabad, Pakistan",
  honor: "Merit Scholarship – OSP 2006, Ministry of IT Pakistan",
};

export const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Urdu", level: "Native / Bilingual" },
  { name: "Arabic", level: "Limited Working" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
