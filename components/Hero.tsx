"use client";

import React, { useState } from "react";
import { Check, Clock } from "lucide-react";
import { ConsultationModal } from "./ConsultationModal";
import Image from "next/image";

export function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
        {/* Main Hero Card Frame with Subtle Outline and Rounded Corners (Matching ChronoTask Screenshot) */}
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] border border-gray-200/90 hero-dot-pattern pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-8 flex flex-col items-center justify-center min-h-[560px] sm:min-h-[620px] overflow-hidden">
          
          {/* ========================================================= */}
          {/* CORNER DECORATIVE ELEMENT 1: UPPER-LEFT (Sticky Note + Check Tile) */}
          {/* ========================================================= */}
          <div className="absolute top-6 sm:top-8 left-6 sm:left-10 hidden lg:block select-none pointer-events-none">
            <div className="relative">
              {/* Layered white card behind */}
              <div className="w-36 h-28 bg-white/95 rounded-xl border border-gray-200/70 shadow-xs rotate-[7deg] absolute -bottom-3 -right-3" />

              {/* Yellow Post-it Note */}
              <div className="w-48 p-4 bg-[#FEF08A] rounded-xs shadow-[2px_10px_24px_rgba(0,0,0,0.07)] border border-yellow-200/70 rotate-[-4deg] relative">
                {/* Red 3D Pushpin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600 shadow-[0_2px_4px_rgba(0,0,0,0.25)] ring-2 ring-rose-300" />
                  <div className="w-0.5 h-1 bg-gray-400 -mt-0.5" />
                </div>

                <p className="text-[11.5px] font-sans font-medium text-amber-950/85 leading-snug tracking-tight pt-1">
                  Take notes to keep track of crucial details, and accomplish more tasks with ease.
                </p>
              </div>

              {/* Floating Squircle Tile with Blue Checkbox */}
              <div className="absolute -bottom-5 -left-3 w-13 h-13 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.09)] border border-gray-150 flex items-center justify-center rotate-[-2deg]">
                <div className="w-7 h-7 rounded-lg bg-[#224C75] flex items-center justify-center text-white shadow-xs">
                  <Check className="w-4.5 h-4.5 stroke-[2.75]" />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CORNER DECORATIVE ELEMENT 2: UPPER-RIGHT (Reminders Card + Stopwatch) */}
          {/* ========================================================= */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-10 hidden lg:block select-none pointer-events-none">
            <div className="relative">
              {/* Folder Tab */}
              <div className="inline-block px-3 py-1 bg-white rounded-t-lg border-t border-x border-gray-200/80 text-[11px] font-semibold text-gray-700 shadow-2xs">
                Reminders
              </div>
              {/* Card Body */}
              <div className="w-52 bg-white rounded-b-xl rounded-tr-xl p-3.5 border border-gray-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
                <div className="text-xs font-semibold text-gray-900">Today&apos;s Meeting</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Call with marketing team</div>
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#224C75]/10 border border-[#224C75]/20 text-[#224C75] text-[10px] font-medium">
                  <Clock className="w-3 h-3 text-[#224C75]" />
                  <span>Time 13:00 - 13:45</span>
                </div>
              </div>

              {/* Floating Analog Stopwatch Tile */}
              <div className="absolute -top-3 -left-5 w-13 h-13 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-150 flex items-center justify-center rotate-[-4deg]">
                <svg
                  className="w-7 h-7 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2.5 1.5" />
                  <path d="M12 2v3" />
                  <path d="M10 2h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CORNER DECORATIVE ELEMENT 3: LOWER-LEFT (Today's Tasks Card) */}
          {/* ========================================================= */}
          <div className="absolute -bottom-8 left-6 sm:left-10 hidden lg:block select-none pointer-events-none">
            <div className="relative">
              {/* Folder Tab */}
              <div className="inline-block px-3.5 py-1 bg-white rounded-t-lg border-t border-x border-gray-200/80 text-[11px] font-semibold text-gray-700 shadow-2xs">
                Today&apos;s tasks
              </div>
              {/* Card Body extending down */}
              <div className="w-64 bg-white rounded-b-2xl rounded-tr-2xl p-4 border border-gray-200/80 shadow-[0_12px_28px_rgba(0,0,0,0.07)] space-y-3">
                {/* Task Item 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                        8
                      </span>
                      <span className="text-xs font-semibold text-gray-800">New ideas for campaign</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[8px] font-bold flex items-center justify-center border border-white shadow-2xs">
                      JD
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span>Sep 10</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#224C75] rounded-full w-[60%]" />
                    </div>
                    <span className="font-medium text-gray-600">60%</span>
                  </div>
                </div>

                {/* Task Item 2 */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">
                        3
                      </span>
                      <span className="text-xs font-semibold text-gray-800">Design PPT #4</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-[#224C75]/10 text-[#224C75] text-[8px] font-bold flex items-center justify-center border border-white shadow-2xs">
                      AO
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span>Sep 18</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#224C75] rounded-full w-[100%]" />
                    </div>
                    <span className="font-medium text-gray-600">112%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CORNER DECORATIVE ELEMENT 4: LOWER-RIGHT (100+ Integrations + App Tiles) */}
          {/* ========================================================= */}
          <div className="absolute -bottom-8 right-6 sm:right-10 hidden lg:block select-none pointer-events-none">
            <div className="relative">
              {/* Folder Tab */}
              <div className="inline-block px-3.5 py-1 bg-white rounded-t-lg border-t border-x border-gray-200/80 text-[11px] font-semibold text-gray-700 shadow-2xs">
                100+ Integrations
              </div>
              {/* Card Body */}
              <div className="w-64 bg-white rounded-b-2xl rounded-tr-2xl p-4 border border-gray-200/80 shadow-[0_12px_28px_rgba(0,0,0,0.07)]">
                <div className="flex items-center justify-center -space-x-3 py-1">
                  {/* Gmail Tile */}
                  <div className="w-13 h-13 rounded-2xl bg-white shadow-[0_8px_18px_rgba(0,0,0,0.08)] border border-gray-150 flex items-center justify-center z-10">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M20 18h-2V9.5L12 14 6 9.5V18H4V6h1.5L12 11l6.5-5H20v12z" />
                      <path fill="#EA4335" d="M4 6l8 6 8-6v-.5c0-.83-.67-1.5-1.5-1.5H5.5C4.67 4 4 4.67 4 5.5V6z" />
                    </svg>
                  </div>

                  {/* Slack Tile (Lifted in center) */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] border border-gray-150 flex items-center justify-center z-20 -translate-y-2">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#E01E5A" d="M6 15a2 2 0 1 0-2-2v2h2zm1 0a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                      <path fill="#36C5F0" d="M9 6a2 2 0 1 0-2-2h2v2zm0 1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      <path fill="#2EB67D" d="M18 9a2 2 0 1 0 2 2v-2h-2zm-1 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
                      <path fill="#ECB22E" d="M15 18a2 2 0 1 0 2 2h-2v-2zm0-1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                    </svg>
                  </div>

                  {/* Calendar 31 Tile */}
                  <div className="w-13 h-13 rounded-2xl bg-white shadow-[0_8px_18px_rgba(0,0,0,0.08)] border border-gray-150 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-2 bg-[#224C75] rounded-t-sm" />
                      <div className="w-7 h-5 bg-[#224C75]/10 border border-[#224C75]/20 rounded-b-sm flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[#224C75] font-mono">31</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTRAL HERO CONTENT (Exact Match of ChronoTask Hierarchy) */}
          {/* ========================================================= */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center px-4">
            {/* Small Brand Mark Tile with Soft 3D Shadow Above Heading */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-150 flex items-center justify-center mb-6 sm:mb-8">
              {/* 2x2 dot brand mark matching the screenshot */}
              {/* <div className="grid grid-cols-2 gap-1.5 p-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0EA5E9]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#1F2937]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#1F2937]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#1F2937]" />
              </div> */}
               <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center p-0.5">
                 <Image
                   src="/dervac_logo.png"
                   alt="Dervac Global Services"
                   width={40}
                   height={40}
                   className="w-full h-full object-contain"
                   priority
                 />
               </div>
            </div>

            {/* Main Headline (2 Lines: Black first line, soft muted gray second line) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] leading-[1.14] text-center max-w-2xl mx-auto">
              <span className="text-[#111827] block font-medium">Technology solutions that move</span>
              <span className="text-[#9CA3AF] block mt-1 font-normal">your business forward.</span>
            </h1>

            {/* Short Supporting Description */}
            <p className="mt-4 sm:mt-5 max-w-lg mx-auto text-sm sm:text-base text-gray-500 font-normal leading-relaxed text-center">
              From software development and systems integration to ICT training and infrastructure support, we help organizations put technology to work.
            </p>

            {/* Prominent Blue Call-to-Action Button */}
            <div className="mt-6 sm:mt-7 flex items-center justify-center">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-2.5 sm:py-3 rounded-xl bg-[#224C75] hover:bg-[#1a3a5a] text-white font-medium text-sm sm:text-[15px] shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
}
