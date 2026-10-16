import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dervac.com"),
  title: {
    default: "Dervac Global Services Ltd | Enterprise ICT & Technology Solutions",
    template: "%s | Dervac Global Services Ltd",
  },
  description:
    "End-to-end ICT and technology solutions firm in Nigeria and Africa. Enterprise infrastructure, custom software engineering, cybersecurity, nationwide CBT centers, and tech skills training.",
  keywords: [
    "Dervac",
    "Dervac Global Services",
    "ICT Solutions Nigeria",
    "Enterprise Infrastructure Lagos",
    "Software Development Lagos",
    "CBT Centre Setup Nigeria",
    "Dervac Academy",
    "Palmgrove Coworking Hub",
    "IT Support Nigeria",
  ],
  authors: [{ name: "Dervac Global Services Ltd", url: "https://dervac.com" }],
  icons: {
    icon: "/dervac_logo.png",
    apple: "/dervac_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dervac.com",
    siteName: "Dervac Global Services Ltd",
    title: "Dervac Global Services Ltd | Enterprise ICT Solutions",
    description:
      "Enterprise infrastructure, custom software, cybersecurity, and tech skills platform headquartered in Lagos, Nigeria.",
    images: [
      {
        url: "/images/hero_tech_setup.jpg",
        width: 1200,
        height: 630,
        alt: "Dervac Technology Solutions & Infrastructure",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-[#f8fafc] font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
