"use server";

import { headers } from "next/headers";
import { sendContactMessage } from "@/features/contact/use-cases/send-contact-message";
import { ResendOrWebhookEmailAdapter } from "@/features/contact/email.adapter";
import { env } from "@/lib/env";
import { isRateLimited } from "@/lib/rate-limit";

export interface ContactActionResult {
  ok: boolean;
  error?: string;
}

export async function submitContactAction(
  rawData: unknown
): Promise<ContactActionResult> {
  try {
    // 1. Rate limiting check per client IP
    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0]?.trim() : "127.0.0.1";
    const ipIdentifier = clientIp ?? "127.0.0.1";

    if (isRateLimited(`contact_${ipIdentifier}`, { intervalMs: 60 * 1000, maxRequests: 5 })) {
      return {
        ok: false,
        error: "Too many messages sent. Please wait a minute before submitting again.",
      };
    }

    // 2. Instantiate infrastructure adapter behind EmailService port
    const emailAdapter = new ResendOrWebhookEmailAdapter(
      env.RESEND_API_KEY,
      env.CONTACT_EMAIL_TO
    );

    // 3. Delegate to application use-case
    return await sendContactMessage(emailAdapter, rawData);
  } catch (error) {
    console.error("Contact action error:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please reach out via email directly.",
    };
  }
}
