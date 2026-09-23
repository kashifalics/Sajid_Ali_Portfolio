import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { profile } from "@/data/profile";
import { SiteBackground } from "@/components/background/SiteBackground";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { themeInitScript } from "@/lib/theme";

const siteUrl = "https://sajidali.dev";
const title = "Sajid Ali — Solutions Architect & Enterprise Full-Stack Engineer";
const description =
  "Solutions Architect with 16+ years of experience designing and delivering enterprise-grade systems across financial, insurance, government and mission-critical environments.";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
    { media: "(prefers-color-scheme: light)", color: "#070b14" },
  ],
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
      className={`${GeistSans.variable} h-full overflow-x-hidden`}
      // The blocking theme script below sets data-theme on this element
      // before hydration for returning light-mode visitors — React's
      // sanctioned escape hatch for exactly this "external script sets an
      // attribute on <html> before hydration" pattern.
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-canvas text-fg antialiased selection:bg-accent/20">
        {/* Blocking (no defer/async) and placed first so it runs before
            paint — sets data-theme="light" immediately for returning
            visitors who chose light mode, avoiding a flash of dark theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteBackground />
        <Navigation />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
