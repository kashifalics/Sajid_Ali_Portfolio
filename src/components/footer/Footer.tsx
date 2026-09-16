import { Mail, MapPin } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { navLinks } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-hairline bg-raised">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
        <div className="max-w-xs">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong bg-surface text-sm font-semibold text-accent">
              SA
            </span>
            <span className="text-sm font-medium text-fg">{profile.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            {profile.role}.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <LinkedInIcon size={15} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Mail size={15} aria-hidden="true" />
            </a>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message ${profile.name} on WhatsApp`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <WhatsAppIcon size={15} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
            Navigate
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
            Get in Touch
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 text-sm text-fg-muted transition-colors hover:text-accent"
              >
                <Mail size={15} className="shrink-0" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-fg-muted">
              <MapPin size={15} className="shrink-0" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-hairline py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-fg-faint">{profile.role}</p>
      </Container>
    </footer>
  );
}
