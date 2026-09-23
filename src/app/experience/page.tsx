import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Experience } from "@/components/experience/Experience";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Sixteen years of increasing scope and responsibility across the Central Bank of the UAE, Abu Dhabi Insurance Authority and enterprise software teams.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Sixteen Years of Increasing Scope"
        description="From software engineer to solutions architect — building enterprise systems across financial, insurance and government institutions."
      />
      <div className="pb-14 md:pb-20">
        <Container>
          <Experience />
        </Container>
      </div>
    </>
  );
}
