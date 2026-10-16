export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: Array<{
    label: string;
    href: string;
    description: string;
    badge?: string;
  }>;
}

export const navigationLinks: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Profile",
    href: "/profile",
    children: [
      {
        label: "Company Overview",
        href: "/profile",
        description: "Two decades of ICT engineering, values, and African presence.",
      },
      {
        label: "Mission, Vision & Values",
        href: "/profile#mission",
        description: "Our guiding principles, client promise, and quality standard.",
      },
      {
        label: "How We Stand Out",
        href: "/profile#stand-out",
        description: "Extreme Customer Service and vendor-neutral strategic advice.",
      },
      {
        label: "Management & Culture",
        href: "/profile#culture",
        description: "Continuous learning, multidisciplinary teams, and integrity.",
      },
    ],
  },
  {
    label: "Services & Solutions",
    href: "/services",
    children: [
      {
        label: "Software Development & Integration",
        href: "/services#software-development",
        description: "Custom web applications, enterprise ERPs, and database systems.",
      },
      {
        label: "Infrastructure & Support",
        href: "/services#infrastructure-support",
        description: "Server configuration, structured cabling, and hardware maintenance.",
      },
      {
        label: "Security Systems & Cybersecurity",
        href: "/services#security-cybersecurity",
        description: "Network hardening, perimeter defense, CCTV, and biometric access.",
      },
      {
        label: "ICT Training & Talent Capacity",
        href: "/services#ict-training-academy",
        description: "Dervac Academy professional fellowships and corporate training.",
      },
      {
        label: "Educational Technology & CBT",
        href: "/services#educational-technology",
        description: "Computer-Based Testing center setups, portals, and exam networks.",
      },
      {
        label: "Coworking Spaces & Rentals",
        href: "/services#coworking-hub",
        description: "Palmgrove workspace, dedicated desks, and event hall rentals.",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    badge: "Proprietary",
    children: [
      {
        label: "Medisure Diagnostic System",
        href: "/products#medisure",
        description: "Clinical workflow, imaging report, and patient result delivery.",
      },
      {
        label: "Smart Laboratory System (LIMS)",
        href: "/products#smart-lab",
        description: "Automated specimen lifecycle and medical analyzer interfacing.",
      },
      {
        label: "Sure URL Shortener",
        href: "/products#sure-url",
        description: "Enterprise link management, click telemetry, and branded domains.",
      },
      {
        label: "Dervac Coworking Hub",
        href: "/products#dervac-hub-coworking",
        description: "Uninterrupted power & dual-fiber workspace in Palmgrove, Lagos.",
      },
    ],
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerLinks = {
  solutions: [
    { label: "Software Development", href: "/services#software-development" },
    { label: "Infrastructure & Networking", href: "/services#infrastructure-support" },
    { label: "Security & Cybersecurity", href: "/services#security-cybersecurity" },
    { label: "ICT Training Academy", href: "/services#ict-training-academy" },
    { label: "CBT Centres & EdTech", href: "/services#educational-technology" },
    { label: "Coworking Spaces", href: "/services#coworking-hub" },
  ],
  products: [
    { label: "Medisure Diagnostic System", href: "/products#medisure" },
    { label: "Smart Laboratory System", href: "/products#smart-lab" },
    { label: "Sure URL Shortener", href: "/products#sure-url" },
    { label: "Dervac Palmgrove Hub", href: "/products#dervac-hub-coworking" },
  ],
  company: [
    { label: "Corporate Profile", href: "/profile" },
    { label: "Our Mission & Values", href: "/profile#mission" },
    { label: "The Dervac Way", href: "/profile#stand-out" },
    { label: "Support & Enterprise SLA", href: "/support" },
    { label: "Contact & Locations", href: "/contact" },
  ],
};
