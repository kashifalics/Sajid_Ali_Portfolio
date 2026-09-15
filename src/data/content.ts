export type WorkStage = {
  index: string;
  title: string;
  items: string[];
};

export const howIWork: WorkStage[] = [
  {
    index: "01",
    title: "Understand",
    items: ["Requirements", "Business context", "Constraints"],
  },
  {
    index: "02",
    title: "Architect",
    items: ["System design", "Domain modelling", "Integration", "Security"],
  },
  {
    index: "03",
    title: "Build",
    items: ["Engineering", "APIs", "Applications", "Data"],
  },
  {
    index: "04",
    title: "Deliver",
    items: ["CI/CD", "Testing", "Deployment", "Continuous improvement"],
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
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
