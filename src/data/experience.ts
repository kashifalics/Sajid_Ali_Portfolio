export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Central Bank of the UAE",
    role: "Senior Analyst – Design & Development",
    period: "December 2019 – Present",
    location: "Abu Dhabi, UAE",
    description:
      "Working on mission-critical internal enterprise systems, contributing to the architecture, design, development and enhancement of enterprise applications and integrations with other government entities.",
    highlights: [
      "Technical team leadership, including day-to-day coordination of a 14-member team",
      "Daily DevOps deployments and release management",
      "Integration with government entities and internal enterprise platforms",
    ],
  },
  {
    company: "Abu Dhabi Insurance Authority",
    role: "Senior Software Developer / Team Lead",
    period: "June 2017 – November 2019",
    location: "Abu Dhabi, UAE",
    description:
      "Served as Scrum Master and Team Lead, developing fully role-based, dynamic-workflow, multilingual internal systems alongside mobile application APIs and integrations with other government entities.",
    highlights: [
      "Scrum Master and Team Lead",
      "Role-based enterprise systems with dynamic workflows",
      "Multilingual applications and mobile application APIs",
      "Government system integrations",
    ],
  },
  {
    company: "Evento Solutions LLC",
    role: "Senior ASP.NET Developer / Technical Team Lead",
    period: "March 2016 – June 2017",
    location: "UAE",
    description:
      "Delivered enterprise and government systems, including CMS-based internal systems and responsive public-facing platforms for major UAE government entities.",
    highlights: [
      "UAE Space Agency – internal systems",
      "Sheikh Zayed Housing Program – internal systems",
      "Sharjah Chamber of Commerce – internal systems",
      "Dubai Health Authority – responsive website & mobile application APIs",
      "Institute of Training and Judicial Studies – responsive website",
      "Responsive, role-based gym management system with PayPal integration",
    ],
  },
  {
    company: "Sefam Pvt Ltd",
    role: "Senior Software Engineer",
    period: "August 2015 – March 2016",
    location: "Retail Industry",
    description:
      "Built role-based purchase, financial and supply chain management systems, and an ERP covering the full retail supply chain from purchase to sale.",
    highlights: [
      "Purchase, financial and supply chain management systems",
      "ERP with payroll and inventory management",
      "Retail Pro integration",
    ],
  },
  {
    company: "RAL International",
    role: "Computer Programmer",
    period: "October 2014 – July 2015",
    location: "Saudi Arabia",
    description:
      "Developed a multi-language ERP system and inventory management system using ASP.NET, C#, Entity Framework and SQL Server.",
    highlights: [
      "Multi-language ERP system",
      "Inventory management system",
      "Web services integration",
    ],
  },
  {
    company: "DPL",
    role: "Software Engineer",
    period: "July 2013 – August 2014",
    location: undefined,
    description:
      "Led a team of six delivering and maintaining projects under Scrum methodologies, working to demanding deadlines while improving compatibility across mobile and tablet environments.",
    highlights: [
      "Led a team of six engineers",
      "Scrum-based delivery under tight deadlines",
      "Mobile and tablet compatibility improvements",
    ],
  },
  {
    company: "Nimble Geeks",
    role: "Software Engineer",
    period: "June 2010 – June 2013",
    location: undefined,
    description:
      "Software engineering role early in career, building on the ASP.NET / C# / SQL Server foundation carried through later enterprise roles.",
  },
  {
    company: "IBM",
    role: "Intern",
    period: "May 2009 – January 2010",
    location: undefined,
    description:
      "Internship marking the start of a software engineering career.",
  },
];
