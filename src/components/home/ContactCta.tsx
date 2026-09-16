import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Talk Technology
          </h2>
          <p className="text-body mt-5">
            For enterprise systems, architecture, technical leadership or
            complex software initiatives, get in touch.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.35)]"
          >
            Get in Touch
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
