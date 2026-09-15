import { Mail } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-hairline">
      <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
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
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${profile.name}'s LinkedIn profile in a new tab`}
            className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <Mail size={15} aria-hidden="true" />
            {profile.email}
          </a>
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <WhatsAppIcon size={15} aria-hidden="true" />
              WhatsApp
            </a>
          ) : null}
        </div>
      </Container>

      <Container className="border-t border-hairline py-6">
        <p className="text-xs text-fg-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
