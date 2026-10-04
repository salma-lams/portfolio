import { describe, it, expect } from "vitest";
import { contactSchema } from "./schema";

describe("Contact Schema Validation", () => {
  it("passes for valid contact data", () => {
    const validData = {
      name: "Alex Doe",
      email: "alex@example.com",
      message: "Hello Salma, I would love to connect about an engineering role.",
    };
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails when email is invalid", () => {
    const invalidData = {
      name: "Alex Doe",
      email: "not-an-email",
      message: "Hello Salma, let's connect.",
    };
    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("fails when message is shorter than 10 characters", () => {
    const shortData = {
      name: "Alex Doe",
      email: "alex@example.com",
      message: "Hi",
    };
    const result = contactSchema.safeParse(shortData);
    expect(result.success).toBe(false);
  });

  it("rejects submission when honeypot field is filled (bot detection)", () => {
    const botData = {
      name: "Spam Bot",
      email: "bot@spam.com",
      message: "Buy cheap crypto ranking backlink services now!",
      company_hp: "Bot Corp",
    };
    const result = contactSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });
});
