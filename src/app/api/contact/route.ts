import { Resend } from "resend";

// OPEN QUESTION (see project checklist): sending requires RESEND_API_KEY to be
// set in the environment. Without it, this route responds with a clear 503
// rather than silently failing. CONTACT_FROM_EMAIL should be a sender on a
// domain verified in the Resend account; until one is configured, it falls
// back to Resend's shared sandbox sender, which only works for testing.
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL ?? "Sajid Ali Portfolio <onboarding@resend.dev>";
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? "sajid_ch1@yahoo.com";

const INTENT_TAGS: Record<string, string> = {
  role: "ROLE",
  project: "PROJECT",
  connect: "CONNECT",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  intent?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const intent = typeof body.intent === "string" ? body.intent : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message || !INTENT_TAGS[intent]) {
    return Response.json(
      { error: "Please fill in every field, including your reason for reaching out." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form email was not sent.");
    return Response.json(
      {
        error:
          "Email delivery isn't configured yet. Please use the email or LinkedIn link below instead.",
      },
      { status: 503 }
    );
  }

  const tag = INTENT_TAGS[intent];
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `[${tag}] New contact from ${name}`,
      text: `From: ${name} <${email}>\nReason: ${intent}\n\n${message}`,
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return Response.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return Response.json(
      { error: "Failed to send your message. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
