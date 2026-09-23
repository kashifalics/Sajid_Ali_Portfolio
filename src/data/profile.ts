export const profile = {
  name: "Sajid Ali",
  firstName: "Sajid",
  role: "Solutions Architect & Senior Full-Stack Engineer",
  eyebrow: "SOLUTIONS ARCHITECT · ENTERPRISE TECHNOLOGY",
  summary:
    "16+ years designing and delivering enterprise-grade systems across financial, insurance, government and other mission-critical environments.",
  yearsExperience: "16+",
  location: "Abu Dhabi, UAE",
  email: "sajid_ch1@yahoo.com",
  // OPEN QUESTION (see project checklist): multiple LinkedIn slug variants
  // exist across source materials. Pulled into an env var so there's one
  // place to fix once the correct slug is confirmed with Sajid — the value
  // below is only a fallback default, not a verified answer.
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/sajid-ali-0740aa28",
  linkedinLabel: "linkedin.com/in/sajid-ali-0740aa28",
  // No verified WhatsApp number was provided in the source profile/resume.
  // Leave empty rather than fabricating one — every WhatsApp CTA in the UI
  // checks this and renders nothing when it's blank. Fill in the digits
  // (country code, no "+", no spaces, e.g. "9715XXXXXXXX") to enable it.
  whatsapp: "",
} as const;

export const whatsappHref = profile.whatsapp
  ? `https://wa.me/${profile.whatsapp}`
  : null;
