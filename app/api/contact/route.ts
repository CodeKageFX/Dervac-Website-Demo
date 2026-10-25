import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidPhone,
  generateReference,
  maskIp,
  saveContactSubmission,
} from "@/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // 1. Rate limiting check
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many inquiries submitted from this connection. Please try again later.",
          retryAfterSeconds: rateCheck.retryAfterSeconds,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON request body." }, { status: 400 });
    }

    // 2. Honeypot check (hidden field bots fill)
    if (body.hp_website || body.honeypot || body.hp_field) {
      // Silently accept to mislead bots
      return NextResponse.json({
        success: true,
        reference: generateReference("CNT"),
        message: "Your inquiry has been received.",
      });
    }

    // 3. Timing check: bots submit in < 1000ms
    const formRenderTime = Number(body.formRenderTime);
    if (formRenderTime && Date.now() - formRenderTime < 1000) {
      return NextResponse.json({
        success: true,
        reference: generateReference("CNT"),
        message: "Your inquiry has been received.",
      });
    }

    // 4. Sanitize and validate fields
    const name = sanitizeText(body.name, 100);
    const email = sanitizeText(body.email, 150);
    const phone = sanitizeText(body.phone, 30);
    const organization = sanitizeText(body.organization, 120);
    const inquiryType = sanitizeText(body.inquiryType, 100) || "Enterprise ICT Solutions";
    const targetFacility = sanitizeText(body.targetFacility, 100) || "Dervac ICT Hub (Palmgrove)";
    const message = sanitizeText(body.message, 3000);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name (minimum 2 characters)." }, { status: 422 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid business or personal email address." }, { status: 422 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Please provide a valid phone number with dial code (e.g. +234...)." }, { status: 422 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Please provide a message describing your requirements (minimum 10 characters)." }, { status: 422 });
    }

    // 5. Generate unique reference and persist
    const reference = generateReference("CNT");
    const record = await saveContactSubmission({
      reference,
      name,
      email,
      phone,
      organization,
      inquiryType,
      targetFacility,
      message,
      ipMasked: maskIp(clientIp),
    });

    return NextResponse.json(
      {
        success: true,
        reference: record.reference,
        createdAt: record.createdAt,
        message: "Your inquiry has been securely received by our client services desk.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API_CONTACT_ERROR] Error saving contact enquiry:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or contact us via phone." },
      { status: 500 }
    );
  }
}
