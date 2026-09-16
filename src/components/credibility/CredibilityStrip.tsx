import { credibility } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CredibilityStrip() {
  return (
    <section
      aria-label="Credibility highlights"
      className="relative z-10 border-y border-hairline bg-raised"
    >
      <Container>
        <Reveal>
          <div className="flex snap-x gap-8 overflow-x-auto py-6 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible">
            {credibility.map((item, i) => (
              <div
                key={item.label}
                className="flex min-w-[180px] shrink-0 snap-start flex-col gap-1 border-l border-hairline pl-4 first:border-l-0 first:pl-0 md:min-w-0 md:border-l md:first:border-l-0"
                style={i === 0 ? { borderLeftWidth: 0 } : undefined}
              >
                <span className="text-sm font-semibold text-fg sm:text-base">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-fg-faint">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
