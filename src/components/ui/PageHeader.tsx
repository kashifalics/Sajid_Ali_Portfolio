import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-16">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="section-label">{eyebrow}</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? <p className="text-body mt-5 max-w-xl">{description}</p> : null}
        </Reveal>
      </Container>
    </div>
  );
}
