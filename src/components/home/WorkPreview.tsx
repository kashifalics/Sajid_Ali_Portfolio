import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/work/ProjectShowcase";

export function WorkPreview() {
  return (
    <section id="work" className="relative z-10 pt-14 md:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected Enterprise Systems"
          description="Enterprise systems, workflows and platforms developed across regulated and institutional environments."
        />
      </Container>

      <ProjectShowcase />
    </section>
  );
}
