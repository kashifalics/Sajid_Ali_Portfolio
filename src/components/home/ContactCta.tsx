import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section id="contact" className="relative z-10 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Have an Enterprise System to Solve?
          </h2>
          <p className="text-body mt-5">
            For architecture leadership, enterprise modernization, system
            design or technical consulting conversations.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent hover:text-white"
          >
            Book a Consultation
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
