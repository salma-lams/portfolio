import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL_TO: z.string().email().optional(),
});

function validateEnv() {
  const result = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
  });

  if (!result.success) {
    console.error("Invalid environment configuration:", result.error.format());
    throw new Error("Invalid environment variables.");
  }

  return result.data;
}

export const env = validateEnv();
