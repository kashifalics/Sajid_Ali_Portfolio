"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

const fieldClass =
  "mt-2 w-full rounded-md border border-hairline bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent focus:outline-none";
const labelClass =
  "text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // No backend/email service is wired up in this project — submitting
  // opens the visitor's own email client with the message pre-filled,
  // addressed to Sajid, rather than silently pretending to send it
  // somewhere.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = `${message}\n\n— ${name} (${email})`;
    const mailSubject = subject.trim() || `Message from ${name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the system, problem or opportunity."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 self-start rounded-md bg-cta px-6 py-3.5 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent hover:text-white"
      >
        Send Message
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>

      <p className="text-xs text-fg-faint">
        Opens your email client with this message pre-filled, addressed to{" "}
        {profile.email}.
      </p>
    </form>
  );
}
