import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TransitionStatement() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl">
            Architecture is where business requirements become systems built
            to scale, integrate and last.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
