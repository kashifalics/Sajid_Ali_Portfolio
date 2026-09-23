import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectShowcase } from "@/components/work/ProjectShowcase";

export const metadata: Metadata = {
  title: "Enterprise Systems",
  description:
    "Enterprise systems, workflows and platforms developed across regulated, government and insurance environments.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected Enterprise Systems"
        description="Systems and platforms developed across regulated, government and insurance environments — spanning field operations, consumer complaint handling, governance and regulatory workflows."
      />
      <ProjectShowcase />
    </>
  );
}
