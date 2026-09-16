import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Work } from "@/components/work/Work";

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
      <div className="pb-20 md:pb-28">
        <Container>
          <Work />
        </Container>
      </div>
    </>
  );
}
