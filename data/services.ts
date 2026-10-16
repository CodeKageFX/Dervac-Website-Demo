export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Development" | "Infrastructure" | "Security" | "Training" | "Education" | "Coworking";
  badge: string;
  iconName: string;
  accentColor: string;
  capabilities: string[];
  deliverables: string[];
  targetSectors: string[];
  metrics: { label: string; value: string };
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-development",
    slug: "software-development-integration",
    title: "Software Development & Integration",
    shortDescription:
      "Custom enterprise applications, high-performance web systems, ERP deployment, and seamless API integrations engineered for scalability.",
    fullDescription:
      "Dervac is an experienced software engineering and systems integration firm. We architect, build, and deploy reliable web applications, bespoke business platforms, and enterprise ERP solutions that streamline internal operations and drive revenue.",
    category: "Development",
    badge: "Enterprise Engineering",
    iconName: "Code2",
    accentColor: "from-blue-600 to-indigo-600",
    capabilities: [
      "Full-cycle web application architecture and modern UI/UX engineering",
      "Enterprise Resource Planning (ERP) customization and integration",
      "Secure RESTful & GraphQL API integration with legacy databases",
      "Offshore software development and dedicated engineering squads",
      "Database design, migration, performance tuning, and optimization",
    ],
    deliverables: [
      "Custom Enterprise Portals & Dashboards",
      "Multi-tenant SaaS Platforms",
      "ERP / CRM Workflow Deployments",
      "Integration Middleware & API Connectors",
      "Comprehensive Code & Architecture Documentation",
    ],
    targetSectors: [
      "Banking & Financial Services",
      "Healthcare Organizations",
      "Large Commercial Enterprises",
      "Government Agencies",
    ],
    metrics: { label: "Deployment Success", value: "100%" },
  },
  {
    id: "infrastructure-support",
    slug: "infrastructure-support",
    title: "Infrastructure & Support Services",
    shortDescription:
      "Enterprise server deployments, structured cabling, systems integration, hardware lifecycle maintenance, and turnkey IT outsourcing.",
    fullDescription:
      "Our infrastructure specialists handle the full lifecycle of enterprise IT hardware, server environments, and network backbones. We eliminate downtime and safeguard mission-critical business continuity through proactive maintenance agreements.",
    category: "Infrastructure",
    badge: "Mission-Critical",
    iconName: "Server",
    accentColor: "from-cyan-600 to-blue-600",
    capabilities: [
      "Enterprise server sales, configuration, virtualization, and deployment",
      "Structured local area network (LAN/WAN) cabling and fiber termination",
      "Turnkey hardware maintenance, troubleshooting, and component servicing",
      "Proactive remote network monitoring and scheduled on-site audits",
      "Pre-implementation architectural review and post-implementation SLA support",
    ],
    deliverables: [
      "High-Availability Server Clusters",
      "Certified Structured Cabling Infrastructure",
      "24/7 Service Level Agreement (SLA) Coverage",
      "Disaster Recovery & Redundant Power Plans",
      "Comprehensive Network Topology Blueprints",
    ],
    targetSectors: [
      "Corporate Head Offices",
      "Financial Institutions",
      "Manufacturing & Logistics",
      "CBT Examination Venues",
    ],
    metrics: { label: "Uptime Target", value: "99.9%" },
  },
  {
    id: "security-cybersecurity",
    slug: "security-cybersecurity",
    title: "Security Systems & Cybersecurity",
    shortDescription:
      "Network perimeter hardening, digital landscape defense, IP CCTV surveillance, biometric access control, and data recovery.",
    fullDescription:
      "Dervac fortifies both digital ecosystems and physical corporate premises. We implement multi-layered cybersecurity defense protocols alongside cutting-edge biometric access and intelligent surveillance hardware to guarantee total facility safety.",
    category: "Security",
    badge: "Defense & Assurance",
    iconName: "ShieldAlert",
    accentColor: "from-rose-600 to-red-600",
    capabilities: [
      "Vulnerability assessment, threat mitigation, and network hardening",
      "Next-Gen firewall configuration and intrusion prevention systems (IPS)",
      "IP-based surveillance, NVR setups, and remote real-time monitoring",
      "Biometric access control, electronic turnstiles, and time-attendance units",
      "Critical data recovery, forensic extraction, and physical tape/drive archiving",
    ],
    deliverables: [
      "Cybersecurity Vulnerability Reports",
      "Turnkey CCTV & Security Operations Center (SOC) Setup",
      "Biometric Attendance & Access Management Systems",
      "Secure Automated Backup & Data Recovery Pipelines",
      "Staff Cybersecurity Awareness Programs",
    ],
    targetSectors: [
      "Financial Services & FinTechs",
      "Corporate Real Estate & Facilities",
      "Educational Institutions",
      "Public Sector Organizations",
    ],
    metrics: { label: "Threat Mitigation", value: "Proactive" },
  },
  {
    id: "ict-training-academy",
    slug: "ict-training-academy",
    title: "ICT Training & Talent Capacity",
    shortDescription:
      "Professional hands-on tech training, Dervac Academy fellowships, executive corporate programs, and practical digital literacy cohorts.",
    fullDescription:
      "Dervac is an acknowledged leader in technical education and talent incubation in Nigeria. Through Dervac Academy, we deliver intensive, hands-on curricula taught by veteran practitioners to bridge employability gaps and equip workforces for modern digital demands.",
    category: "Training",
    badge: "Talent Incubation",
    iconName: "GraduationCap",
    accentColor: "from-amber-600 to-orange-600",
    capabilities: [
      "Software engineering pathways: Frontend, Backend, and Full-Stack Web Development",
      "Data Analytics, PowerBI, Python, and business intelligence mastery",
      "Computer hardware engineering, network administration, and troubleshooting",
      "Custom corporate IT training tailored to organizational transformation",
      "Youth and school-age coding bootcamps (Gentle Coder, Kids Tech summer camps)",
    ],
    deliverables: [
      "Certified Professional Training Diplomas",
      "Hands-On Capstone Project Portfolios",
      "Corporate Staff Competency Assessments",
      "Internship & Talent Placement Pipelines",
      "Modern On-Premise Training Labs & Equipment",
    ],
    targetSectors: [
      "Corporate Enterprises Upskilling Staff",
      "Aspiring Software Engineers & Tech Career Switchers",
      "Government Youth Empowerment Initiatives",
      "Schools & Summer Learning Camps",
    ],
    metrics: { label: "Alumni Graduated", value: "15,000+" },
  },
  {
    id: "educational-technology",
    slug: "educational-technology",
    title: "Educational Technology & CBT Centres",
    shortDescription:
      "Nationwide Computer-Based Testing (CBT) center setup, e-examination administration, school management software, and academic lab modernization.",
    fullDescription:
      "Technology is transforming educational delivery. Dervac provides turnkey design, equipping, and continuous management of large-capacity Computer-Based Testing (CBT) centers for universities, regulatory bodies, and national examination councils.",
    category: "Education",
    badge: "EdTech Infrastructure",
    iconName: "BookOpenCheck",
    accentColor: "from-emerald-600 to-teal-600",
    capabilities: [
      "Turnkey CBT center design, procurement, power backup, and LAN networking",
      "E-examination server configuration, local caching, and anti-cheating controls",
      "Integrated school management systems (SMS), student portals, and fees automation",
      "Computer laboratory setup with centralized power distribution and thin clients",
      "On-site exam-day technical proctoring and rapid hardware turnaround",
    ],
    deliverables: [
      "JAMB / University Compliant CBT Centers (100–500+ seaters)",
      "Automated Student Information Portals",
      "High-Density Power Inverter & Solar Backup Infrastructure",
      "Biometric Candidate Verification Terminals",
      "Proctor & Administrator Training Guides",
    ],
    targetSectors: [
      "Universities, Polytechnics & Colleges",
      "National Examination Boards",
      "Secondary & High Schools",
      "Professional Certification Councils",
    ],
    metrics: { label: "Exam Seats Powered", value: "50,000+" },
  },
  {
    id: "coworking-hub",
    slug: "coworking-spaces-rentals",
    title: "Coworking Spaces & Online Rentals",
    shortDescription:
      "Collaborative workspace, high-speed fiber redundancy, meeting rooms, private executive desks, and technology event space in Palmgrove, Lagos.",
    fullDescription:
      "The Dervac ICT Hub located on Shipeolu Street, Palmgrove, provides a vibrant physical environment for tech startups, remote engineers, and creative teams. Equipped with uninterrupted power, high-speed fiber, meeting halls, and an active community.",
    category: "Coworking",
    badge: "Innovation Ecosystem",
    iconName: "Building2",
    accentColor: "from-purple-600 to-pink-600",
    capabilities: [
      "Flexible hot desking and dedicated personal workstations",
      "Private executive offices with lockable storage and climate control",
      "Dual-fiber high-speed redundant internet connectivity",
      "Uninterrupted power supply with automated generator and solar backup",
      "Audio-visual equipped training halls, conference rooms, and event venue rentals",
    ],
    deliverables: [
      "Daily, Weekly & Monthly Membership Plans",
      "Conference & Presentation Facilities with Smart Displays",
      "High-Speed Wi-Fi & Wired Gig-Ethernet Drops",
      "Kitchenette, Coffee Station & Community Lounge",
      "Postal Address & Mail Handling for Registered Hub Members",
    ],
    targetSectors: [
      "Remote Tech Workers & Software Developers",
      "Early-Stage Tech Startups & Founders",
      "Corporate Project Teams on Sprint Deployments",
      "Tech Community Organizers & Event Hosts",
    ],
    metrics: { label: "Power Redundancy", value: "24/7" },
  },
];
