export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  status: "Shipped" | "Beta" | "In progress" | "Prototype";
  highlights: string[];
  link?: { label: string; href: string };
  accent: "amber" | "violet" | "emerald" | "sky" | "rose";
};

export const projects: Project[] = [
  {
    slug: "domain-infra",
    name: "domain-infra",
    tagline:
      "Multi-tenant fraud-detection SaaS evaluating signup submissions across domain, contact, and infrastructure signals.",
    description:
      "A commercial fraud-detection platform modeled on industry leaders like eHawk. Customers POST a submission (domain, contact email, phone, IP, device fingerprint) and the API returns a risk decision with an explainable signal breakdown. The moat is a cross-customer fingerprint reputation network plus a community feedback loop that improves accuracy over time.",
    role: "Solo founder & engineer — architecture, API, scoring engine, schema design",
    stack: ["Django 5", "Postgres", "Python", "REST API", "Multi-tenant"],
    status: "In progress",
    highlights: [
      "Wraps a proven Python analyzer instead of rewriting it — kept the engine, built a SaaS around it",
      "API-first design (sync POST /submissions today, async-compatible response shape for tomorrow)",
      "Multi-tenant org isolation with API-key auth from day one",
      "Cross-org entity linking and fingerprint reputation as a sellable network signal",
    ],
    accent: "violet",
  },
  {
    slug: "tangled-webb-platform",
    name: "Tangled Webb Bar Platform",
    tagline:
      "Live bar entertainment platform — trivia, bingo, open mic, Triple Down, and Shut Up & Roll, all running off one host console.",
    description:
      "A full multi-game platform for venues. Players join by scanning a QR code, hosts run live rounds from a unified console, and admins manage venues, question banks, promotions, performer profiles, and booking flows. Anti-cheat detects when players leave the app mid-question. Built for Tangled Webb Entertainment.",
    role: "Solo founder & engineer — product, UX, full-stack build",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Turso (libsql)",
      "Tailwind",
      "JWT auth",
    ],
    status: "Beta",
    highlights: [
      "Five live game modes share one player join flow and host console",
      "Player, host, admin, and performer roles each get a tailored interface",
      "QR-driven team join, per-venue leaderboards, drink-special promotions",
      "Booking and performer-profile system links the platform to GigHive",
    ],
    accent: "amber",
  },
  {
    slug: "gighive",
    name: "GigHive",
    tagline:
      "Mobile-first booking marketplace where bars and venues book live entertainment — musicians, comedians, DJs, karaoke hosts.",
    description:
      "Two-sided marketplace for live entertainment. Performers publish availability and get booked; bars find acts (especially last-minute) by act type, radius, and region. Includes urgent bookings, fill-in subs, an equipment marketplace, classifieds, and a free public events feed with a follow system.",
    role: "Solo founder & engineer — product, mobile, backend, payments",
    stack: ["Expo (React Native)", "Supabase", "Stripe", "TypeScript"],
    status: "Beta",
    highlights: [
      "10 act types, location matching by radius and region",
      "$5/month subscription with beta-tester bypass; Stripe handles billing",
      "Urgent / fill-in board for last-minute coverage",
      "Public events feed with follow system, free to consumers",
    ],
    accent: "emerald",
  },
  {
    slug: "two-drink-memories",
    name: "2 Drink Memories",
    tagline:
      "Bar-friendly photo-hunt game — find the differences between two AI-generated images before the timer runs out.",
    description:
      "First title from Fly Trapp Games (a sub-label of Tangled Webb Entertainment). Token-based plays via in-app purchase, image pairs generated through Gemini 2.5 Flash, hotspot hit-detection on tap. Designed for the bar context — short rounds, easy to pick up, hard to put down after two drinks.",
    role: "Solo founder & engineer — game design, mobile build, content pipeline",
    stack: ["Expo SDK 54", "TypeScript", "Gemini 2.5 Flash", "Supabase (planned)"],
    status: "Prototype",
    highlights: [
      "AI-generated image-pair pipeline with hotspot coordinates",
      "Token wallet (10/$1.99, 30/$4.99, 100/$12.99) wired for IAP",
      "Tappable hotspot detection with miss-marker feedback",
      "Dark, branded UI tuned for low-light bar environments",
    ],
    accent: "rose",
  },
  {
    slug: "social-media-verify",
    name: "Social Media Verify",
    tagline:
      "Python OSINT and domain-verification toolkit — DMARC, RDAP, lookalike detection, threat intel, and remediation workflows.",
    description:
      "A 45KB analyzer that classifies a domain across category, contact OSINT, and threat-intel signals. Pulls DMARC and RDAP records, detects lookalike domains, checks against VirusTotal, and surfaces a remediation workflow. The engine that seeded domain-infra.",
    role: "Solo engineer — analyzer, classification logic, tests",
    stack: ["Python", "Flask", "RDAP", "DMARC", "VirusTotal"],
    status: "Shipped",
    highlights: [
      "Domain category classification with contact OSINT pivots",
      "Lookalike-domain detection for phishing infrastructure",
      "Threat-intel integration: VirusTotal, hacklink scanning",
      "Direct ancestor of the domain-infra commercial product",
    ],
    accent: "sky",
  },
];
