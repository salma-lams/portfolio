"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { contactSchema, ContactFormData } from "../schema";
import { submitContactAction } from "@/app/actions/contact.action";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    company_hp: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const clientValidation = contactSchema.safeParse(formData);
    if (!clientValidation.success) {
      const firstIssue = clientValidation.error.issues[0];
      setStatus("error");
      setErrorMessage(
        firstIssue ? firstIssue.message : "Please fill in all required fields correctly."
      );
      return;
    }

    try {
      const result = await submitContactAction(formData);

      if (result.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", company_hp: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          result.error ??
            `Failed to send message. Please contact ${siteConfig.email} directly.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `Network error. Please email directly at ${siteConfig.email}.`
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 bg-[#0D0F12] border-t border-[#22262D]"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#14171C] border border-[#22262D] text-[#D9A62E]">
            CONTACT
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F1EA]"
          >
            Send Me a Message
          </h2>
          <div className="w-12 h-1 bg-[#D9A62E] mx-auto rounded-full mt-2" aria-hidden="true" />
          <p className="text-sm text-[#8A8F98] max-w-md mx-auto pt-1">
            Direct inbox notification. I will reply within 24 hours.
          </p>
        </div>

        {/* Validated Contact Form */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[#22262D] bg-[#14171C] space-y-6 shadow-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_hp">Company</label>
              <input
                id="company_hp"
                name="company_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company_hp}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#8A8F98] mb-2"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Smith"
                className="w-full px-4 py-3 rounded-xl border border-[#22262D] bg-[#0D0F12] text-[#F4F1EA] text-sm focus:outline-none focus:border-[#D9A62E] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#8A8F98] mb-2"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#22262D] bg-[#0D0F12] text-[#F4F1EA] text-sm focus:outline-none focus:border-[#D9A62E] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#8A8F98] mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Discuss an open role, project, or inquiry..."
                className="w-full px-4 py-3 rounded-xl border border-[#22262D] bg-[#0D0F12] text-[#F4F1EA] text-sm focus:outline-none focus:border-[#D9A62E] transition-colors resize-y"
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="p-4 rounded-xl bg-[#3FAE6A]/10 border border-[#3FAE6A]/30 text-[#3FAE6A] text-sm font-medium"
              >
                ✓ Your message has been sent successfully. Thank you!
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="p-4 rounded-xl bg-[#E05252]/10 border border-[#E05252]/30 text-[#E05252] text-sm font-medium"
              >
                ✕ {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D9A62E] text-[#0D0F12] hover:bg-[#E8B339] disabled:opacity-50 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_24px_rgba(217,166,46,0.35)]"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
