import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidPhone,
  generateReference,
  maskIp,
  saveScopeBriefRequest,
} from "@/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests submitted. Please try again later.",
          retryAfterSeconds: rateCheck.retryAfterSeconds,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON request body." }, { status: 400 });
    }

    // Honeypot
    if (body.hp_website || body.honeypot || body.hp_field) {
      return NextResponse.json({
        success: true,
        reference: generateReference("SCP"),
        message: "Project scope brief saved.",
      });
    }

    const solution = sanitizeText(body.solution, 120);
    const timeline = sanitizeText(body.timeline, 80);
    const scale = sanitizeText(body.scale, 80);
    const customNotes = sanitizeText(body.customNotes, 3000);
    const contactName = sanitizeText(body.contactName, 100);
    const email = sanitizeText(body.email, 150);
    const phone = sanitizeText(body.phone, 30);
    const organization = sanitizeText(body.organization, 120);

    const deliverables: string[] = Array.isArray(body.deliverables)
      ? body.deliverables.map((d: unknown) => sanitizeText(d, 100)).filter(Boolean)
      : [];

    if (!contactName || contactName.length < 2) {
      return NextResponse.json({ error: "Please provide a contact name." }, { status: 422 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Please provide a valid phone number." }, { status: 422 });
    }

    const reference = generateReference("SCP");
    const record = await saveScopeBriefRequest({
      reference,
      solution: solution || "General Enterprise ICT",
      timeline: timeline || "Standard (30 - 60 Days)",
      scale: scale || "Medium Enterprise",
      deliverables,
      customNotes: customNotes || "Configured via Interactive Scope Planner.",
      contactName,
      email,
      phone,
      organization: organization || "Unspecified",
      ipMasked: maskIp(clientIp),
    });

    return NextResponse.json(
      {
        success: true,
        reference: record.reference,
        createdAt: record.createdAt,
        message: `Scope brief saved under Reference ID: ${record.reference}.`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API_SCOPE_PLANNER_ERROR] Error saving scope brief:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json(
      { error: "An unexpected error occurred while saving the scope brief." },
      { status: 500 }
    );
  }
}
