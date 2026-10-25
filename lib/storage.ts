import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const STORAGE_DIR = path.join(process.cwd(), "data", "storage");

// In-memory sliding-window rate limiter per IP
// Maximum 5 submissions per 10 minutes per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestHistory = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const timestamps = (ipRequestHistory.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestTimestamp = timestamps[0];
    const retryAfterSeconds = Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  timestamps.push(now);
  ipRequestHistory.set(ip, timestamps);
  return { allowed: true };
}

// Input Sanitization
export function sanitizeText(text: unknown, maxLength = 2000): string {
  if (typeof text !== "string") return "";
  return text
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ""); // Strip potential HTML tags
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // RFC 5322 compliant simplified regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  // Allows international format (+234...), digits, spaces, hyphens, min 7, max 20
  const clean = phone.replace(/[\s\-()]/g, "");
  return /^\+?[0-9]{7,18}$/.test(clean);
}

// Generates unique reference code: DRV-[PREFIX]-YYYYMMDD-XXXX
export function generateReference(prefix: string): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomSuffix = crypto.randomBytes(2).toString("hex").toUpperCase();
  return `DRV-${prefix.toUpperCase()}-${dateStr}-${randomSuffix}`;
}

// Mask IP for NDPA 2023 compliance (e.g. 192.168.1.1 -> 192.168.***.***)
export function maskIp(ip: string): string {
  if (!ip) return "unknown";
  if (ip.includes(":")) {
    // IPv6
    const parts = ip.split(":");
    return parts.slice(0, 3).join(":") + "::****";
  }
  // IPv4
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.***.***`;
  }
  return "masked";
}

// Generic file-based persistent store
async function appendRecord<T>(filename: string, record: T): Promise<void> {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
  const filePath = path.join(STORAGE_DIR, filename);

  let existing: T[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
}

// Domain record interfaces
export interface ContactSubmission {
  reference: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  targetFacility: string;
  message: string;
  ipMasked: string;
}

export interface SupportTicket {
  ticketNumber: string;
  createdAt: string;
  organization: string;
  contactName: string;
  email?: string;
  phone?: string;
  priority: "Priority 1 (Critical)" | "Priority 2 (High)" | "Priority 3 (Standard)" | string;
  orgSize: string;
  ticketSubject: string;
  issueDetails: string;
  status: "Logged" | "In Triage" | "Resolved";
  ipMasked: string;
}

export interface ConsultationLead {
  reference: string;
  createdAt: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  companySize: string;
  projectBrief: string;
  ipMasked: string;
}

export interface ScopeBriefRequest {
  reference: string;
  createdAt: string;
  solution: string;
  timeline: string;
  scale: string;
  deliverables: string[];
  customNotes: string;
  contactName: string;
  email: string;
  phone: string;
  organization: string;
  ipMasked: string;
}

export async function saveContactSubmission(data: Omit<ContactSubmission, "createdAt">): Promise<ContactSubmission> {
  const full: ContactSubmission = {
    ...data,
    createdAt: new Date().toISOString(),
  };
  await appendRecord("contacts.json", full);
  return full;
}

export async function saveSupportTicket(data: Omit<SupportTicket, "createdAt" | "status">): Promise<SupportTicket> {
  const full: SupportTicket = {
    ...data,
    createdAt: new Date().toISOString(),
    status: "Logged",
  };
  await appendRecord("support_tickets.json", full);
  return full;
}

export async function saveConsultationLead(data: Omit<ConsultationLead, "createdAt">): Promise<ConsultationLead> {
  const full: ConsultationLead = {
    ...data,
    createdAt: new Date().toISOString(),
  };
  await appendRecord("consultations.json", full);
  return full;
}

export async function saveScopeBriefRequest(data: Omit<ScopeBriefRequest, "createdAt">): Promise<ScopeBriefRequest> {
  const full: ScopeBriefRequest = {
    ...data,
    createdAt: new Date().toISOString(),
  };
  await appendRecord("scope_briefs.json", full);
  return full;
}
