import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Capabilities } from "@/components/capabilities/Capabilities";

export const metadata: Metadata = {
  title: "Technical Capabilities",
  description:
    "A structured capability map spanning solutions architecture, enterprise engineering, full-stack development, cloud, data and delivery.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="A Structured Capability Map"
        description="Architecture, engineering, platform and delivery capabilities built across sixteen years of enterprise work."
      />
      <div className="pb-20 md:pb-28">
        <Container>
          <Capabilities />
        </Container>
      </div>
    </>
  );
}
