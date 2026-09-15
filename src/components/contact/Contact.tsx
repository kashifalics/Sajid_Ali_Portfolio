import { Mail, ArrowUpRight } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const methods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  ...(whatsappHref
    ? [
        {
          label: "WhatsApp",
          value: "WhatsApp",
          href: whatsappHref,
          icon: WhatsAppIcon,
          external: true,
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Talk Technology.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            For enterprise engineering, architecture, technical leadership or
            technology collaboration, get in touch.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-canvas transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div
            className={cn(
              "mt-12 grid gap-4 border-t border-hairline pt-10",
              methods.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            )}
          >
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface px-6 py-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_32px_-16px_rgba(17,17,17,0.12)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-3 text-accent transition-colors group-hover:bg-accent group-hover:text-canvas">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-fg">
                    {method.label}
                  </span>
                  <span className="text-xs text-fg-faint">{method.value}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
