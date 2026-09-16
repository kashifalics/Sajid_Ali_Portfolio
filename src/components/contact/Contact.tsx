"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
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

const intentOptions = [
  { value: "role", label: "A role/opportunity" },
  { value: "project", label: "A project/consulting" },
  { value: "connect", label: "Just connecting" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative z-10 scroll-mt-28 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Talk Technology.
          </h2>
          <p className="text-body mt-5">
            For enterprise engineering, architecture, technical leadership or
            technology collaboration, get in touch.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-fg-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-lg border border-hairline bg-canvas px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-fg-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-lg border border-hairline bg-canvas px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="intent" className="text-xs font-medium text-fg-muted">
                I&apos;m reaching out about
              </label>
              <div className="relative">
                <select
                  id="intent"
                  name="intent"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-hairline bg-canvas px-3.5 py-2.5 pr-10 text-sm text-fg focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {intentOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-faint"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-fg-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-lg border border-hairline bg-canvas px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none"
                placeholder="Share timeline, scope, and how I can help..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} aria-hidden="true" />
                </>
              )}
            </button>

            {status === "success" ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-success">
                <CheckCircle2 size={16} aria-hidden="true" />
                Message sent — thanks for reaching out.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-fg-muted">
                <AlertCircle size={16} className="shrink-0 text-gold" aria-hidden="true" />
                {errorMessage}
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-xl">
          <div
            className={cn(
              "grid gap-4",
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
                  className="card-hover group flex flex-col items-center gap-3 rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-surface px-6 py-6 transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-3 text-accent transition-colors group-hover:bg-accent group-hover:text-fg">
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
