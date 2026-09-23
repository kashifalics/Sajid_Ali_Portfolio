import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const steps = ["Architecture", "Systems", "Delivery"];

export function TransitionStatement() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <StaggerGroup className="flex flex-col items-start gap-1">
          {steps.map((step, i) => (
            <StaggerItem key={step}>
              <div className="flex flex-col items-start">
                <span className="text-xs font-semibold tracking-[0.2em] text-fg-faint uppercase">
                  {step}
                </span>
                {i < steps.length - 1 ? (
                  <ChevronDown
                    size={14}
                    className="my-1 text-accent/50"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl">
            Architecture is where business requirements become systems built
            to scale, integrate and last.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
