import { Quote, AlertTriangle } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 scroll-mt-28 bg-canvas-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What colleagues and clients say"
        />

        <div className="mt-6 flex items-start gap-2.5 rounded-lg border-l-4 border-gold bg-gold/8 px-4 py-3">
          <AlertTriangle
            size={18}
            className="mt-0.5 shrink-0 text-gold"
            aria-hidden="true"
          />
          <p className="text-xs leading-relaxed text-fg-muted italic">
            Placeholder section — replace every quote below with real,
            attributable testimonials before this site goes live.
          </p>
        </div>

        <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface p-6">
                <Quote
                  size={20}
                  className="shrink-0 text-accent/50"
                  aria-hidden="true"
                />
                <p className="text-body mt-4 flex-1 italic">{t.quote}</p>
                <div className="mt-5 border-t border-hairline pt-4">
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="text-xs text-fg-faint">{t.title}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
