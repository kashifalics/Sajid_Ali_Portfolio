import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

export function Services() {
  return (
    <section className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="Architecture leadership and hands-on engineering across the full lifecycle of an enterprise system."
        />

        <div className="mt-10 border-t border-hairline">
          {services.map((service) => (
            <Reveal key={service.index}>
              <div className="flex flex-col gap-3 border-b border-hairline py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <EditorialNumber value={service.index} className="text-sm shrink-0 sm:w-8" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-fg sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-body-sm mt-1.5 max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
