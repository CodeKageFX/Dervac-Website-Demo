export interface CompanyDetails {
  name: string;
  legalName: string;
  acronym: string;
  tagline: string;
  headline: string;
  description: string;
  vision: string;
  mission: string;
  promise: string;
  yearsOfExcellence: number;
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  locations: Array<{
    title: string;
    type: "Hub & Training Academy" | "Corporate Office";
    address: string;
    city: string;
    country: string;
    phones: string[];
    email: string;
    badge: string;
  }>;
  contacts: {
    generalPhone: string;
    hubPhone: string;
    supportPhone: string;
    tollFreePhone: string;
    whatsapp: string;
    generalEmail: string;
    hubEmail: string;
    careersEmail: string;
  };
  socialLinks: {
    facebook: string;
    linkedin: string;
    whatsapp: string;
  };
  values: Array<{
    title: string;
    summary: string;
    icon: string;
  }>;
  pillars: Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;
  sectors: string[];
}

export const companyData: CompanyDetails = {
  name: "Dervac",
  legalName: "Dervac Global Services Ltd",
  acronym: "DGSL",
  tagline: "Delivering cutting-edge solutions through technological innovations",
  headline: "Architecting ICT Systems. Powering Enterprise Scale.",
  description:
    "Dervac is an end-to-end ICT and technology solutions firm operating across Nigeria and Africa. We architect enterprise infrastructure, engineer bespoke software, fortify cybersecurity, build nationwide CBT centers, and nurture high-impact digital talent.",
  vision:
    "To become one of the world's leading providers of innovative, systematic, and goal-oriented quality services and solutions with an effective presence in Nigeria and Africa as a backbone.",
  mission:
    "To provide our clients with healthy, efficient, cost-effective, and quality ICT-based services and solutions which are uncompromisingly based on the exact needs of our clients.",
  promise:
    "At Dervac, we don't just plan your company's IT solutions; we build them, maintain them, and help you grow your business.",
  yearsOfExcellence: 20,
  stats: [
    {
      value: "20+",
      label: "Years in Industry",
      description: "Two decades of reliable ICT delivery across Nigeria & Africa",
    },
    {
      value: "100+",
      label: "Enterprise Deployments",
      description: "Complex software, server infrastructure, and network rollouts",
    },
    {
      value: "15,000+",
      label: "Trained Professionals",
      description: "Graduates empowered through Dervac Academy & tech fellowships",
    },
    {
      value: "99.9%",
      label: "Reliability Focus",
      description: "Mission-critical uptime support and structured SLA compliance",
    },
  ],
  locations: [
    {
      title: "Dervac ICT Hub & Academy",
      type: "Hub & Training Academy",
      address: "65 & 76 Shipeolu Street, Palmgrove",
      city: "Somolu / Lagos",
      country: "Nigeria",
      phones: ["+234 816 022 5365", "+234 811 386 9322"],
      email: "hub@dervac.com",
      badge: "Primary Technology Hub",
    },
    {
      title: "Corporate Headquarters",
      type: "Corporate Office",
      address: "9, Tunde Oshilaja Street, Opebi",
      city: "Ikeja, Lagos",
      country: "Nigeria",
      phones: ["+234 909 379 0787", "+234 816 022 5365"],
      email: "info@dervac.com",
      badge: "Enterprise & Executive Office",
    },
  ],
  contacts: {
    generalPhone: "+234 816 022 5365",
    hubPhone: "+234 811 386 9322",
    supportPhone: "+234 909 379 0787",
    tollFreePhone: "09016461891",
    whatsapp: "+2348026944449",
    generalEmail: "info@dervac.com",
    hubEmail: "hub@dervac.com",
    careersEmail: "careers@dervac.com",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/dervac",
    linkedin: "https://www.linkedin.com/company/dervac-global/",
    whatsapp: "https://wa.me/+2348026944449",
  },
  values: [
    {
      title: "Customer Satisfaction",
      summary:
        "We put our clients' needs first and continually strive to exceed expectations through extreme responsiveness and definitive follow-through.",
      icon: "HeartHandshake",
    },
    {
      title: "Commitment to Quality",
      summary:
        "We are unyielding in our dedication to product quality and process excellence, adhering to rigorous engineering standards on every deployment.",
      icon: "ShieldCheck",
    },
    {
      title: "Teamwork & Synergy",
      summary:
        "Motivated by the collective accomplishments of our multi-disciplinary specialists, collaborating seamlessly to drive client business velocity.",
      icon: "Users2",
    },
    {
      title: "Integrity & Vendor Neutrality",
      summary:
        "We believe in honest, ethical practices. We promise only what we can deliver, then deliver more than we promise—remaining objective and vendor-neutral.",
      icon: "Scale",
    },
  ],
  pillars: [
    {
      title: "Unmatched Customer Service",
      subtitle: "Dervac 'Extreme Customer Service'",
      description:
        "Personalized attention, continuous transparent communication, rapid response times, and definitive follow-through. We listen intently and execute faithfully.",
    },
    {
      title: "Exceptional Engineering Quality",
      subtitle: "Precision-Crafted ICT Deployments",
      description:
        "Every solution is tailored to meet precise business outcomes, tested thoroughly, delivered on schedule, and backed by comprehensive technical documentation.",
    },
    {
      title: "Technology & Best Practices",
      subtitle: "Continual Innovation",
      description:
        "We continuously identify, evaluate, stress-test, and deploy modern architectural frameworks to ensure our clients maintain an enduring competitive edge.",
    },
    {
      title: "Independent & Objective Advice",
      subtitle: "Technology-Rooted, Vendor-Neutral",
      description:
        "We are not locked to proprietary hardware or closed ecosystems. Our licensed solution architects provide unbiased strategic guidance focused solely on your ROI.",
    },
  ],
  sectors: [
    "Banking & Financial Services",
    "Educational Institutions & Exam Bodies",
    "Government & e-Governance",
    "Healthcare & Clinical Diagnostics",
    "Telecommunications & Enterprise IT",
    "SMEs & Fast-Growing Ventures",
  ],
};
