import { EmailService, EmailServiceResult } from "../ports";
import { contactSchema, ContactFormData } from "../schema";

export async function sendContactMessage(
  emailService: EmailService,
  rawData: unknown
): Promise<EmailServiceResult> {
  const parseResult = contactSchema.safeParse(rawData);

  if (!parseResult.success) {
    const firstIssue = parseResult.error.issues[0];
    return {
      ok: false,
      error: firstIssue ? firstIssue.message : "Invalid form submission data.",
    };
  }

  const validData: ContactFormData = parseResult.data;

  // Bot detection: honeypot field must be empty
  if (validData.company_hp && validData.company_hp.length > 0) {
    return { ok: false, error: "Spam submission rejected." };
  }

  return emailService.send({
    name: validData.name,
    email: validData.email,
    message: validData.message,
  });
}
