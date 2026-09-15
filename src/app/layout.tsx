import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = "https://sajidali.dev";
const title = "Sajid Ali | Solutions Architect & Senior Full-Stack Developer";
const description =
  "Sajid Ali is a Solutions Architect and Senior Full-Stack Developer with 16+ years of experience designing scalable enterprise systems, cloud solutions, APIs, microservices and mission-critical applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sajid Ali",
  },
  description,
  keywords: [
    "Sajid Ali",
    "Solutions Architect",
    "Enterprise Architect",
    "Full-Stack Engineer",
    "Cloud Architecture",
    "Microservices",
    "Enterprise Integration",
    "FinTech Systems",
    "Insurance Platforms",
    "Government Systems",
    ".NET Architect",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
    images: [
      {
        url: "/images/sajid-ali-portrait.jpg",
        width: 800,
        height: 800,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/sajid-ali-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin],
  knowsAbout: [
    "Solutions Architecture",
    "Enterprise Software Engineering",
    "Cloud Architecture",
    "Microservices",
    "API Architecture",
    "Enterprise Integration",
    "FinTech Systems",
    "Insurance Platforms",
    "Government Systems",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full overflow-x-hidden`}
    >
      <body className="min-h-full overflow-x-hidden bg-canvas text-fg antialiased selection:bg-accent/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
