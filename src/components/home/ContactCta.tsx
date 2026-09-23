import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section id="contact" className="relative z-10 py-14 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Design What Comes Next.
          </h2>
          <p className="text-body mt-5">
            For architecture consulting, enterprise modernization, technical
            leadership or engineering engagements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent hover:text-white"
            >
              Book a Consultation
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-md border border-hairline-strong bg-surface px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
              <Download size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
