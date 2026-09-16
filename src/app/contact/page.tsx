import type { Metadata } from "next";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sajid Ali for enterprise systems, architecture, technical leadership or complex software initiatives.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Contact />
    </div>
  );
}
