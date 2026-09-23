import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";

const contactInfo = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  ...(profile.phone
    ? [
        {
          label: "Phone",
          value: profile.phone,
          href: `tel:${profile.phone}`,
          icon: Phone,
          external: false,
        },
      ]
    : []),
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: MapPin,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section className="relative z-10 py-8 md:py-12">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-hairline bg-raised">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-2 lg:divide-x lg:divide-hairline">
            {/* Contact information */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Contact Information
              </p>

              <div className="mt-8 flex flex-col gap-7">
                {contactInfo.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-3 text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                            className="mt-1 block text-base font-medium text-fg transition-colors hover:text-accent"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-base font-medium text-fg">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact form */}
            <div className="border-t border-hairline p-8 sm:p-10 lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Send a Message
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
