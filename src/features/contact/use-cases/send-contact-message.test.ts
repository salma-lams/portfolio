import { describe, it, expect, vi } from "vitest";
import { sendContactMessage } from "./send-contact-message";
import { EmailService } from "../ports";

describe("sendContactMessage Use-Case", () => {
  it("successfully passes validated data to the EmailService port", async () => {
    const mockEmailService: EmailService = {
      send: vi.fn().mockResolvedValue({ ok: true }),
    };

    const payload = {
      name: "Alex Smith",
      email: "alex@example.com",
      message: "Looking forward to speaking about the developer role.",
    };

    const result = await sendContactMessage(mockEmailService, payload);

    expect(result.ok).toBe(true);
    expect(mockEmailService.send).toHaveBeenCalledWith({
      name: "Alex Smith",
      email: "alex@example.com",
      message: "Looking forward to speaking about the developer role.",
    });
  });

  it("returns error without calling EmailService if data is invalid", async () => {
    const mockEmailService: EmailService = {
      send: vi.fn(),
    };

    const invalidPayload = {
      name: "",
      email: "invalid-email",
      message: "too short",
    };

    const result = await sendContactMessage(mockEmailService, invalidPayload);

    expect(result.ok).toBe(false);
    expect(mockEmailService.send).not.toHaveBeenCalled();
  });
});
