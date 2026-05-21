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
  accent: "amber" | "violet" | "emerald" | "sky" | "rose" | "teal" | "indigo";
};

export const projects: Project[] = [
  {
    slug: "domain-risk-api",
    name: "Domain Risk API (SDAT v2)",
    tagline:
      "Commercial fraud-detection API — POST a signup submission (domain, email, phone, IP, device fingerprint), get a scored risk decision with explainable signals.",
    description:
      "The successor to the Config-checker prototype. Multi-tenant SaaS modeled on industry leaders like eHawk: an API-first product where customers automate fraud decisions instead of running them through a human-review console. The moat is a cross-customer fingerprint reputation network plus a community feedback loop that improves accuracy over time.",
    role: "Solo founder & engineer — architecture, API, scoring engine, schema design",
    stack: ["Django 5", "Postgres", "Python", "REST API", "Multi-tenant"],
    status: "In progress",
    highlights: [
      "Wraps the proven Config-checker analyzer instead of rewriting it",
      "API-first: sync POST /submissions today, async-compatible response shape for tomorrow",
      "Multi-tenant org isolation with API-key auth from day one",
      "Cross-org entity linking and fingerprint reputation as a sellable network signal",
    ],
    accent: "violet",
  },
  {
    slug: "config-checker",
    name: "Config Checker (SDAT v1)",
    tagline:
      "Streamlit prototype that scores domains for fraud risk — DMARC, RDAP, lookalike detection, threat intel, plus a human-readable risk summary.",
    description:
      "The original Streamlit-based domain-risk analyzer (~400KB Python). Accepts a domain, returns a structured DomainApprovalResult with risk score, recommendation, and an investigator-friendly summary. Still in active use; the engine that the v2 API now wraps. Lives at naanyas/Config-checker on GitHub.",
    role: "Solo engineer — analyzer, scoring logic, Streamlit UI",
    stack: ["Python", "Streamlit", "RDAP", "DMARC", "VirusTotal"],
    status: "Shipped",
    highlights: [
      "Single-domain risk scoring with a structured, queryable result object",
      "Pulls DMARC, RDAP, and threat-intel signals into one report",
      "Investigator-friendly summary explaining the score",
      "Direct predecessor to the v2 commercial API",
    ],
    accent: "sky",
  },
  {
    slug: "social-media-verify",
    name: "Social Media Verify",
    tagline:
      "Python OSINT and domain-verification toolkit — lookalike detection, contact OSINT, threat intel, and remediation workflows.",
    description:
      "A 45KB analyzer that classifies a domain across category, contact OSINT, and threat-intel signals. Detects lookalike domains used for phishing infrastructure, integrates VirusTotal, and surfaces a remediation workflow. A second analyzer in the trust-and-safety toolkit.",
    role: "Solo engineer — analyzer, classification logic, tests",
    stack: ["Python", "Flask", "RDAP", "DMARC", "VirusTotal"],
    status: "Shipped",
    highlights: [
      "Domain category classification with contact OSINT pivots",
      "Lookalike-domain detection for phishing infrastructure",
      "Threat-intel integration: VirusTotal, hacklink scanning",
      "Production-ready with test coverage",
    ],
    accent: "emerald",
  },
  {
    slug: "momentum-screeners",
    name: "Momentum Screeners & Trading Pipeline",
    tagline:
      "Python data pipelines and algorithmic trading strategies across equities, futures, and options — pattern screeners, backtesting, risk controls, live execution.",
    description:
      "An ongoing personal project applying the same signal-mining discipline I used in trust & safety to financial markets. Scans 1,500+ tickers daily for high-conviction setups (Gap Up + Fade, momentum reversal, etc.), backtests strategies against historical data, and runs risk-controlled execution. Built from a hypothesis-test-iterate loop rather than a black box.",
    role: "Solo engineer — strategy design, pipeline, backtest harness, execution",
    stack: ["Python", "yfinance", "pandas", "backtesting", "options/futures"],
    status: "In progress",
    highlights: [
      "Pattern screener scanning 1,500+ tickers daily for setups like Gap Up + Fade",
      "Backtesting harness for validating strategies against historical data",
      "Risk controls built in: position sizing, stop logic, daily loss caps",
      "Live execution layer for hands-off trade entry once a setup triggers",
    ],
    accent: "teal",
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
    accent: "indigo",
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
];
