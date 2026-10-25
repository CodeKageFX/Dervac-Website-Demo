import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidPhone,
  generateReference,
  maskIp,
  saveSupportTicket,
} from "@/lib/storage";

const VALID_PRIORITIES = [
  "Priority 1 (Critical)",
  "Priority 2 (High)",
  "Priority 3 (Standard)",
];

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // 1. Rate limit check
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many support tickets submitted from this connection. Please contact our emergency hotline directly.",
          retryAfterSeconds: rateCheck.retryAfterSeconds,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON request body." }, { status: 400 });
    }

    // 2. Honeypot check
    if (body.hp_website || body.honeypot || body.hp_field) {
      return NextResponse.json({
        success: true,
        ticketNumber: generateReference("SUP"),
        priority: "Priority 2 (High)",
        status: "Logged",
        message: "Support request logged.",
      });
    }

    // 3. Timing check
    const formRenderTime = Number(body.formRenderTime);
    if (formRenderTime && Date.now() - formRenderTime < 1000) {
      return NextResponse.json({
        success: true,
        ticketNumber: generateReference("SUP"),
        priority: "Priority 2 (High)",
        status: "Logged",
        message: "Support request logged.",
      });
    }

    // 4. Sanitize and validate
    const organization = sanitizeText(body.organization, 120);
    const contactName = sanitizeText(body.contactName, 100);
    const email = sanitizeText(body.email, 150);
    const phone = sanitizeText(body.phone, 30);
    const priority = sanitizeText(body.priority, 50) || "Priority 2 (High)";
    const orgSize = sanitizeText(body.orgSize, 80) || "Medium Enterprise";
    const ticketSubject = sanitizeText(body.ticketSubject, 200);
    const issueDetails = sanitizeText(body.issueDetails, 4000);

    if (!organization || organization.length < 2) {
      return NextResponse.json({ error: "Please provide your organization name (minimum 2 characters)." }, { status: 422 });
    }

    if (!contactName || contactName.length < 2) {
      return NextResponse.json({ error: "Please provide a contact person name and title." }, { status: 422 });
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json({ error: "Please provide a valid contact phone number." }, { status: 422 });
    }

    if (!VALID_PRIORITIES.some((p) => priority.includes(p.slice(0, 10)))) {
      return NextResponse.json({ error: "Please select a valid support priority level." }, { status: 422 });
    }

    if (!ticketSubject || ticketSubject.length < 5) {
      return NextResponse.json({ error: "Please provide an incident summary subject (minimum 5 characters)." }, { status: 422 });
    }

    // 5. Generate official ticket reference and persist
    const ticketNumber = generateReference("SUP");
    const record = await saveSupportTicket({
      ticketNumber,
      organization,
      contactName,
      email: email || undefined,
      phone: phone || undefined,
      priority,
      orgSize,
      ticketSubject,
      issueDetails: issueDetails || "No additional notes provided.",
      ipMasked: maskIp(clientIp),
    });

    return NextResponse.json(
      {
        success: true,
        ticketNumber: record.ticketNumber,
        priority: record.priority,
        status: record.status,
        createdAt: record.createdAt,
        message: `Support incident successfully logged with Ticket ID: ${record.ticketNumber}. Our duty engineers have been notified.`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API_SUPPORT_ERROR] Error saving support ticket:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json(
      { error: "An unexpected error occurred while registering the support ticket. Please call our engineering hotline." },
      { status: 500 }
    );
  }
}
