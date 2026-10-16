"use client";

import React from "react";
import {
  Laptop,
  Users,
  Code2,
  Server,
  Terminal,
  GraduationCap,
  Shield,
  Network,
  Cpu,
  Database,
} from "lucide-react";

interface FloatingItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  top: string;
  left?: string;
  right?: string;
  animation: string;
  hiddenOnMobile?: boolean;
}

export function FloatingBackgroundIcons() {
  const floatingItems: FloatingItem[] = [
    {
      icon: Laptop,
      label: "Hardware & IT",
      top: "3%",
      left: "3%",
      animation: "animate-float-slow",
    },
    {
      icon: Code2,
      label: "Software Eng",
      top: "6%",
      right: "3%",
      animation: "animate-float-reverse",
    },
    {
      icon: Server,
      label: "Data Center",
      top: "14%",
      left: "4%",
      animation: "animate-float-drift",
      hiddenOnMobile: true,
    },
    {
      icon: Shield,
      label: "Cyber Defense",
      top: "22%",
      right: "4%",
      animation: "animate-float-slow",
    },
    {
      icon: Terminal,
      label: "DevOps & Cloud",
      top: "32%",
      left: "3%",
      animation: "animate-float-reverse",
      hiddenOnMobile: true,
    },
    {
      icon: Network,
      label: "Enterprise Mesh",
      top: "43%",
      right: "3%",
      animation: "animate-float-drift",
    },
    {
      icon: Users,
      label: "Dervac Academy",
      top: "54%",
      left: "4%",
      animation: "animate-float-slow",
    },
    {
      icon: GraduationCap,
      label: "CBT & EdTech",
      top: "66%",
      right: "4%",
      animation: "animate-float-reverse",
      hiddenOnMobile: true,
    },
    {
      icon: Database,
      label: "Enterprise Data",
      top: "78%",
      left: "3%",
      animation: "animate-float-drift",
    },
    {
      icon: Cpu,
      label: "Hardware & IoT",
      top: "89%",
      right: "3%",
      animation: "animate-float-slow",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none">
      {floatingItems.map((item, index) => {
        const IconComponent = item.icon;
        const positionStyle: React.CSSProperties = {
          top: item.top,
          ...(item.left ? { left: item.left } : {}),
          ...(item.right ? { right: item.right } : {}),
        };

        return (
          <div
            key={index}
            style={positionStyle}
            className={`absolute ${item.animation} ${
              item.hiddenOnMobile ? "hidden sm:flex" : "flex"
            } flex-col items-center opacity-65 sm:opacity-85 hover:opacity-100 transition-all duration-700`}
          >
            {/* Ambient halo in Dervac blue */}
            <div className="absolute -inset-2 rounded-3xl bg-[#224c75]/25 blur-xl opacity-60 pointer-events-none" />

            {/* Glowing Icon Card in Dervac blue */}
            <div className="relative p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#224c75]/50 bg-[#16273c]/60 backdrop-blur-md shadow-xl shadow-[#224c75]/20">
              <IconComponent className="w-8 h-8 sm:w-11 sm:h-11 text-[#4a8ec9] stroke-[1.8]" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#4a8ec9] shadow-sm shadow-white/50 animate-pulse" />
            </div>

            {/* Micro telemetry label badge */}
            <div className="relative mt-2 px-2.5 py-0.5 rounded-full bg-[#0a0d16]/90 border border-[#224c75]/40 backdrop-blur-md shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a8ec9]" />
              <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
