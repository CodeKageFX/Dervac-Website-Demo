"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

function getSnapshot(): boolean {
  try {
    return localStorage.getItem("dervac_privacy_notice_acknowledged") === "true";
  } catch {
    return true;
  }
}

function getServerSnapshot(): boolean {
  return true;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function CookieNotice() {
  const isAcknowledged = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localDismissed, setLocalDismissed] = useState(false);

  const handleAcknowledge = () => {
    try {
      localStorage.setItem("dervac_privacy_notice_acknowledged", "true");
    } catch {
      // Ignored if storage access restricted
    }
    setLocalDismissed(true);
  };

  if (isAcknowledged || localDismissed) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie & Privacy Notice"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-40 bg-white/98 backdrop-blur-md border border-gray-200/90 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 sm:p-5 transition-all text-gray-800 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#0E2B61]/10 border border-[#0E2B61]/20 text-[#0E2B61] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="text-xs font-bold text-slate-950 mb-1">
            Privacy & Necessary Cookies Disclosure
          </h4>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
            We use strictly necessary session storage for security, honeypot spam protection, and interface state. We do not use third-party advertising or cross-site tracking cookies. Read our{" "}
            <Link href="/privacy" className="text-[#0E2B61] hover:text-[#2563EB] underline font-bold">
              Privacy Policy
            </Link>{" "}
            under the NDPA 2023.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={handleAcknowledge}
              className="px-3.5 py-1.5 rounded-lg bg-[#0E2B61] hover:bg-[#07132B] text-white text-xs font-bold transition-colors shadow-2xs cursor-pointer"
            >
              Acknowledge & Close
            </button>
            <Link
              href="/privacy"
              className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <button
          onClick={handleAcknowledge}
          className="text-gray-400 hover:text-gray-600 p-1 -mr-1 -mt-1 rounded-lg cursor-pointer"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
