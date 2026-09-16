import { Mail } from "lucide-react";
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
    <section className="relative z-10 overflow-hidden py-20 md:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 select-none text-center font-bold whitespace-nowrap text-fg opacity-[0.035]"
        style={{ fontSize: "clamp(6rem, 22vw, 16rem)", lineHeight: 1 }}
      >
        SAJID
      </span>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Talk Technology.
          </h2>
          <p className="text-body mt-5">
            For enterprise systems, architecture, technical leadership or
            complex software initiatives, get in touch.
          </p>

          <div
            className={cn(
              "mt-12 grid gap-4",
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
                  className="card-hover group flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface px-6 py-6 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
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
