import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Attempt Formspree forward if endpoint configured, or handle gracefully
    try {
      await fetch("https://formspree.io/f/mzdznylv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
    } catch (forwardErr) {
      console.warn("Contact forward notification failed:", forwardErr);
      // We still acknowledge the user so their message is not lost in UX
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully. I will get back to you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please email directly at salmalamsaaf26@gmail.com." },
      { status: 500 }
    );
  }
}
