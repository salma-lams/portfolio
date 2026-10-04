import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(100, "Name must not exceed 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please provide a valid email address.")
    .max(150, "Email must not exceed 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long.")
    .max(3000, "Message must not exceed 3000 characters."),
  // Honeypot field for bot spam detection; must remain empty
  company_hp: z.string().max(0, "Bot detected.").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
