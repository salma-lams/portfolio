import { EmailService, SendEmailPayload, EmailServiceResult } from "./ports";
import { siteConfig } from "@/config/site";

export class ResendOrWebhookEmailAdapter implements EmailService {
  private apiKey?: string;
  private toEmail: string;

  constructor(apiKey?: string, toEmail: string = siteConfig.email) {
    this.apiKey = apiKey;
    this.toEmail = toEmail;
  }

  async send(payload: SendEmailPayload): Promise<EmailServiceResult> {
    try {
      if (this.apiKey) {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: this.toEmail,
            reply_to: payload.email,
            subject: `New Portfolio Message from ${payload.name}`,
            text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Resend API failed:", errText);
          return { ok: false, error: "Email delivery failed via provider." };
        }

        return { ok: true };
      }

      // Default notification forwarder / graceful fallback
      const forwardRes = await fetch("https://formspree.io/f/mzdznylv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
        }),
      });

      if (!forwardRes.ok) {
        console.warn("Fallback forwarder responded with non-200");
      }

      return { ok: true };
    } catch (error) {
      console.error("Email adapter error:", error);
      return {
        ok: false,
        error: `Could not send message. Please contact ${siteConfig.email} directly.`,
      };
    }
  }
}
