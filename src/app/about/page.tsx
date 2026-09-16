import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/about/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sajid Ali is a Solutions Architect with 16+ years of experience designing and delivering enterprise-grade systems across regulated environments.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="About Sajid" />
      <About />
    </>
  );
}
