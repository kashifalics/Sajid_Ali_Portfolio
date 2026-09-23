import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sajid Ali for enterprise systems, architecture, technical leadership or complex software initiatives.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's Build Something Meaningful."
        description="Have an enterprise system to design, modernize or scale? Reach out directly, or send a message and I'll get back to you."
      />
      <Contact />
    </>
  );
}
