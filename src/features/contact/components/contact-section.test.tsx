import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactSection } from "./contact-section";

// Mock the server action
vi.mock("@/app/actions/contact.action", () => ({
  submitContactAction: vi.fn().mockResolvedValue({ ok: true }),
}));

describe("ContactSection Component", () => {
  it("renders form fields, labels, and send button", () => {
    render(<ContactSection />);

    expect(screen.getByRole("heading", { name: /send me a message/i })).toBeDefined();
    expect(screen.getByLabelText(/your name/i)).toBeDefined();
    expect(screen.getByLabelText(/email address/i)).toBeDefined();
    expect(screen.getByLabelText(/^message$/i)).toBeDefined();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeDefined();
  });
});
