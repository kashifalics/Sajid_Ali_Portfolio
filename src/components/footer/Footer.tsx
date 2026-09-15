import { Mail, MapPin } from "lucide-react";
import { profile, whatsappHref } from "@/data/profile";
import { navLinks } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#0b1220] text-slate-300">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-8">
        <div className="max-w-xs">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-blue-400">
              SA
            </span>
            <span className="text-sm font-medium text-white">
              {profile.name}
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {profile.role}.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-blue-400/60 hover:text-blue-400"
            >
              <LinkedInIcon size={15} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-blue-400/60 hover:text-blue-400"
            >
              <Mail size={15} aria-hidden="true" />
            </a>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message ${profile.name} on WhatsApp`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-blue-400/60 hover:text-blue-400"
              >
                <WhatsAppIcon size={15} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Navigate
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Get in Touch
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                <Mail size={15} className="shrink-0" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-slate-400">
              <MapPin size={15} className="shrink-0" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">{profile.role}</p>
      </Container>
    </footer>
  );
}
