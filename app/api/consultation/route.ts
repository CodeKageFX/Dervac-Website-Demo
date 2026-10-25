import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  sanitizeText,
  isValidEmail,
  isValidPhone,
  generateReference,
  maskIp,
  saveConsultationLead,
} from "@/lib/storage";

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests submitted. Please try again later or reach out via phone.",
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
        reference: generateReference("CNS"),
        message: "Consultation request recorded.",
      });
    }

    const fullName = sanitizeText(body.fullName, 100);
    const organization = sanitizeText(body.organization, 120);
    const email = sanitizeText(body.email, 150);
    const phone = sanitizeText(body.phone, 30);
    const service = sanitizeText(body.service, 120) || "General ICT Solution";
    const companySize = sanitizeText(body.companySize, 50) || "10-49";
    const projectBrief = sanitizeText(body.projectBrief, 3000);

    if (!fullName || fullName.length < 2) {
      return NextResponse.json({ error: "Please provide your full name (minimum 2 characters)." }, { status: 422 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Please provide a valid phone number." }, { status: 422 });
    }

    const reference = generateReference("CNS");
    const record = await saveConsultationLead({
      reference,
      fullName,
      organization,
      email,
      phone,
      service,
      companySize,
      projectBrief: projectBrief || "Interested in enterprise consultation.",
      ipMasked: maskIp(clientIp),
    });

    return NextResponse.json(
      {
        success: true,
        reference: record.reference,
        createdAt: record.createdAt,
        message: `Consultation request recorded under Reference ID: ${record.reference}. Our architects will be in touch shortly.`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API_CONSULTATION_ERROR] Error saving consultation lead:", error instanceof Error ? error.message : "Unknown");
    return NextResponse.json(
      { error: "An unexpected error occurred while saving your consultation request. Please try again." },
      { status: 500 }
    );
  }
}
