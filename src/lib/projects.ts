export type Category =
  | "detection"
  | "entertainment"
  | "operations"
  | "trading";

export type Project = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  status: "Shipped" | "Beta" | "In progress" | "Prototype";
  highlights: string[];
  link?: { label: string; href: string };
  // Optional secondary links rendered as a small row of chips.
  subLinks?: { label: string; href: string }[];
  // Section label for the subLinks chips. Defaults to "Live demos" — set
  // explicitly when the secondary links are info/marketing pages rather
  // than actual playable demos.
  subLinksLabel?: string;
  accent: "amber" | "violet" | "emerald" | "sky" | "rose" | "teal" | "indigo";
};

export const categoryMeta: Record<
  Category,
  { label: string; subtitle: string; description: string; accent: string }
> = {
  detection: {
    label: "Detection & Verification",
    subtitle: "Trust &amp; Safety tooling",
    description:
      "Fraud-detection APIs, domain risk scoring, OSINT verification, and GRC tooling &mdash; shaped by ten years of frontline T&amp;S work.",
    accent: "violet",
  },
  entertainment: {
    label: "Live Entertainment",
    subtitle: "Platforms for venues, performers, and patrons",
    description:
      "Bar-game platforms, booking marketplaces, and mobile games built for real venues under Tangled Webb Entertainment.",
    accent: "amber",
  },
  operations: {
    label: "Process Improvement",
    subtitle: "Operational tooling for real businesses",
    description:
      "Workflow and customer-facing apps for working venues &mdash; replacing phone calls, paper, and interruptions with queues, alerts, and self-service the staff run themselves.",
    accent: "emerald",
  },
  trading: {
    label: "Algorithmic Trading",
    subtitle: "Signal-mining for markets",
    description:
      "Same hypothesis-test-iterate discipline I bring to abuse detection, applied to equities momentum and volatility setups.",
    accent: "teal",
  },
};

export const projects: Project[] = [
  {
    slug: "domain-risk-api",
    name: "Domain Risk API (SDAT v2)",
    category: "detection",
    tagline:
      "Commercial fraud-detection API — POST a signup submission (domain, email, phone, IP, device fingerprint), get a scored risk decision with explainable signals.",
    description:
      "The successor to the Config-checker prototype. Multi-tenant SaaS modeled on industry leaders like eHawk: an API-first product where customers automate fraud decisions instead of running them through a human-review console. The initial version of this engine was installed into a prominent email provider’s infrastructure during a fraud-detection consulting engagement, validating the scoring model on real submission traffic. v2 wraps that proven analyzer in a multi-tenant API with a cross-customer fingerprint reputation network and community feedback loop.",
    role: "Solo founder & engineer — architecture, API, scoring engine, schema design",
    stack: ["Django 5", "Postgres", "Python", "REST API", "Multi-tenant"],
    status: "Shipped",
    link: {
      label: "Try the live demo",
      href: "https://domain-infra-production.up.railway.app/",
    },
    highlights: [
      "Initial version installed into a prominent email provider’s infrastructure for live fraud detection",
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
    category: "detection",
    tagline:
      "Streamlit prototype that scores domains for fraud risk — DMARC, RDAP, lookalike detection, threat intel, plus a human-readable risk summary.",
    description:
      "The original Streamlit-based domain-risk analyzer (~400KB Python). Accepts a domain, returns a structured DomainApprovalResult with risk score, recommendation, and an investigator-friendly summary. Still in active use; the engine that the v2 API now wraps.",
    role: "Solo engineer — analyzer, scoring logic, Streamlit UI",
    stack: ["Python", "Streamlit", "RDAP", "DMARC", "VirusTotal"],
    status: "Shipped",
    link: {
      label: "Try the live demo",
      href: "https://sdat-v1-demo-production.up.railway.app/",
    },
    highlights: [
      "Single-domain risk scoring with a structured, queryable result object",
      "Pulls DMARC, RDAP, and threat-intel signals into one report",
      "Investigator-friendly summary explaining the score",
      "Direct predecessor to the v2 commercial API",
    ],
    accent: "sky",
  },
  {
    slug: "domain-risk-checker",
    name: "Domain Risk Checker",
    category: "detection",
    tagline:
      "Domain & URL fraud analyzer that scores the registrable root AND the exact destination separately — unwrapping short links, rendering client-side content, and flagging made-for-advertising and consumer-harm patterns that domain-only checks miss.",
    description:
      "The evolved Config-checker engine, built on one principle: platform trust shouldn't launder a risky page. Every submission is scored twice — the registrable root and the exact submitted URL/path — so a bad tenant on a trusted host (a scam payhip.com/b/<id>, or an Amazon listing hidden behind an a.co short link) can't hide behind a clean root. It resolves URL shorteners and social/search link-wrappers (a.co, bit.ly, l.facebook.com, google.com/url) to analyze where a link actually goes, optionally renders pages in a headless browser to catch client-side-injected ads, and runs a consumer-harm pipeline that detects made-for-advertising ad-stuffing, pop/push-ad networks, fake-virus scareware, browser-lock traps, and crawler cloaking — with a plain-English summary and analyst-only evidence.",
    role: "Solo engineer — analyzer, dual-scoring model, consumer-harm + ad-density pipeline, headless render, link resolution, Streamlit UI",
    stack: ["Python", "Streamlit", "Playwright", "Docker", "RDAP", "Threat Intel"],
    status: "Shipped",
    link: {
      label: "Try the live demo",
      href: "https://domain-risk-checker-production.up.railway.app/",
    },
    highlights: [
      "Dual scoring: independent verdicts for the registrable root and the exact submitted URL/path, so a trusted host can't whitewash a risky tenant",
      "Unwraps URL shorteners + social/search link-wrappers (a.co, bit.ly, l.facebook.com, google.com/url) to analyze the real destination",
      "Made-for-advertising / ad-density detection, with headless rendering to surface client-side-injected ads",
      "Consumer-harm pipeline: pop/push-ad networks, scareware, browser-lock, and crawler cloaking — plain-English summary + analyst evidence",
    ],
    accent: "teal",
  },
  {
    slug: "social-media-verify",
    name: "Social Media Verify",
    category: "detection",
    tagline:
      "Streamlit OSINT toolkit — discovers and verifies social-media profiles from a company domain, plus review-site coverage and risk scoring.",
    description:
      "Enter a domain or email address. The tool auto-discovers social media profiles from the company's own site, verifies each one resolves and references the domain, scans reviews across Google/BBB/Trustpilot/Glassdoor/G2/Yelp/Capterra, detects developer signals (GitHub, npm, Product Hunt, app stores), and computes a 0-100 risk score with Low/Medium/High/Critical tier.",
    role: "Solo engineer — analyzer, scoring logic, Streamlit UI",
    stack: ["Python", "Streamlit", "BeautifulSoup", "WHOIS", "OSINT"],
    status: "Shipped",
    link: {
      label: "Try the live demo",
      href: "https://social-media-verify-production.up.railway.app/",
    },
    highlights: [
      "Social-profile auto-discovery from a company's own website first",
      "Review-site coverage across 7 major platforms (Google, BBB, Trustpilot, etc.)",
      "Developer/startup signal detection (GitHub, npm, Product Hunt, Crunchbase)",
      "Domain intelligence: WHOIS age, DNS history, website analysis",
    ],
    accent: "emerald",
  },
  {
    slug: "risk-graph",
    name: "Risk Graph",
    category: "detection",
    tagline:
      "Risk as a linked graph, not a spreadsheet — a GRC platform that prices every gap in dollars, including the customers you would lose.",
    description:
      "A working prototype for a governance, risk, and compliance system built around ten linked objects — Risk, Control, Metric/KRI, Incident, Action, Policy, Vendor/Asset, Assessment — rather than the disconnected register-plus-spreadsheet setup most teams actually live in. The engine derives residual risk from the inherent score and measured control effectiveness, halved when a control has not been tested in 180 days, then scores every risk across four impact lenses: direct monetary, regulatory, reputational, and customer churn. The churn lens is the part most GRC tools do not have — affected customers × churn probability × lifetime value, with the churn coefficient learned from incident actuals rather than guessed. Compliance and bad-actor risk share one graph: a threat-framework library (MITRE ATT&CK, fraud kill chain, messaging-abuse patterns), attack-vector objects, and detections as a control subtype carrying TPR, FPR, and MTTD — so a vectors × detections coverage matrix becomes the fraud-side gap analysis. A gap engine makes absence first-class, and reporting comes out as three audience packs — regulator, board, and customer trust — frozen as immutable snapshots for defensibility.",
    role: "Solo — product concept, risk model, scoring engine, prototype build",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "SQLite (better-sqlite3)",
      "Tailwind",
    ],
    status: "In progress",
    highlights: [
      "Ten linked core objects — every template is a view over the graph, never a separate table",
      "Residual scoring from measured control effectiveness, with a staleness penalty for untested controls",
      "Dollarized churn lens: affected customers × churn probability × LTV, calibrated on real incident outcomes",
      "Compliance and fraud in one graph — attack vectors × detections coverage matrix as the gap analysis",
      "Gap engine treats absence as a finding: unmeasured risks, stale metrics, unwatched vectors, broken report lineage",
      "Dig-deeper queue ranks investigations by exposure × blindness × velocity",
    ],
    accent: "sky",
  },
  {
    slug: "smartstart",
    name: "SmartStart",
    category: "detection",
    tagline:
      "A 90-day trust framework for new senders: accounts earn their sending limits through evidence instead of getting them on day one.",
    description:
      "New accounts are where an email platform knows the least and fraud moves the fastest: a bad actor can sign up, upgrade, blast phishing at full capacity, and abandon the account before traditional detection responds. SmartStart replaces that all-or-nothing access with a lifecycle. Signup signals produce a risk score that sets a starting tier — Restricted, Limited, Developing, or Established — and each tier carries its own daily sending limit. From there, trust is earned, not aged into: an account moves up only after enough clean sending days and enough mail actually delivered, so a dormant account never coasts to full access. High bounces step an account down, severe bounces, complaints, or spam-trap hits restrict it on the spot regardless of tier, and a sudden volume spike pauses promotion. At Day 90 the account leaves the framework but keeps its controls. I wrote the product requirements and then built the simulator to pressure-test the policy: seven scenarios, from a healthy startup to a bust-out that builds trust for a month before turning, play out day by day with every decision explained.",
    role: "Solo — framework design, product requirements, policy logic, simulator build",
    stack: ["JavaScript", "HTML", "CSS", "SVG"],
    status: "Prototype",
    link: {
      label: "Try the live demo",
      href: "/smartstart",
    },
    highlights: [
      "Signup risk score sets the starting tier and daily sending limit",
      "Promotion needs clean sending days and delivered volume — inactivity never counts as trust",
      "Step-downs for soft signals, immediate restriction for severe ones, at any tier",
      "Shadow mode logs every decision without enforcing it, for a safe rollout",
      "Every threshold is editable live, and the summary weighs risky mail held against legitimate mail held",
      "Fraud ops overrides require a reason and land in an audit log",
    ],
    accent: "rose",
  },
  {
    slug: "gap-fade-screener",
    name: "Gap Up + Fade Screener (v1)",
    category: "trading",
    tagline:
      "Pattern-mining predecessor to V9 — scans a small-cap universe for premarket gap-ups that fade intraday, a high-conviction reversal signal on low-float names.",
    description:
      "The first algorithmic screener I shipped. Configurable thresholds for the premarket gap (>2%) and intraday fade (<-1%), a parallel ThreadPoolExecutor scanning ~90 tickers, and a sortable result table with CSV export. The work that taught me how this signal actually behaves at scale — and what V9 needed to do better.",
    role: "Solo engineer — pattern definition, scanner, Streamlit UI",
    stack: ["Python", "Streamlit", "yfinance", "pandas", "concurrent.futures"],
    status: "Shipped",
    link: {
      label: "Try the live screener",
      href: "https://gap-fade-screener-production.up.railway.app/",
    },
    highlights: [
      "Configurable premarket-gap and intraday-fade thresholds",
      "Parallel scan over ~90-ticker small-cap universe; custom watchlist supported",
      "Sortable hit table with CSV export",
      "Predecessor to the V9 multi-signal model",
    ],
    accent: "indigo",
  },
  {
    slug: "ml-screener",
    name: "ML Momentum Screener",
    category: "trading",
    tagline:
      "Most advanced of the three screeners — fuses real-time Finviz news, multi-timeframe momentum, RVOL, VWAP, and order-flow into a single composite ML-style score with breaking-news flags.",
    description:
      "The current production model. Scrapes today's Finviz news per ticker (with a sub-20-minute 'breaking' flag), layers in pre-market and intraday flow signals, and ranks the universe by a composite score. ~1,700 lines of orchestrated screening logic — the iteration on V9 that added external catalyst awareness to the technical signals.",
    role: "Solo engineer — model design, news scraping, scoring composition, UI",
    stack: [
      "Python",
      "Streamlit",
      "yfinance",
      "BeautifulSoup",
      "pandas",
      "Plotly",
    ],
    status: "Shipped",
    link: {
      label: "Try the live screener",
      href: "https://ml-screener-production.up.railway.app/",
    },
    highlights: [
      "Live Finviz news scrape with 'breaking' flag for <20-minute headlines",
      "Multi-timeframe momentum (premarket, intraday, 3D, 10D)",
      "Composite scoring blending technicals with news catalysts",
      "Three universe modes including live volume-ranked construction",
    ],
    accent: "rose",
  },
  {
    slug: "momentum-screener",
    name: "V9 Momentum Breakout Screener",
    category: "trading",
    tagline:
      "Real-time multi-signal momentum scanner — EMA10, RSI(7), 3D/10D momentum, 10D RVOL, VWAP and order-flow analysis across the full sub-$5 small-cap universe.",
    description:
      "An algorithmic equities screener I built to apply the same signal-mining discipline I used in trust & safety to financial markets. The V9 model fuses six independent technical signals into a single conviction score, ranks the universe live (alphabetical, randomized, or live-volume-ranked), and auto-refreshes every 60 seconds with audio alerts on watchlist hits. Powers the manual side of an end-to-end trading pipeline that includes backtesting, risk controls, and live execution.",
    role: "Solo engineer — model design, signal engineering, screener UI, infra",
    stack: [
      "Python",
      "Streamlit",
      "yfinance",
      "pandas",
      "Plotly",
      "concurrent.futures",
    ],
    status: "Shipped",
    link: {
      label: "Try the live screener",
      href: "https://momentum-screener-production-1255.up.railway.app/",
    },
    highlights: [
      "Six-signal model: EMA10, RSI(7), 3D & 10D momentum, 10D relative volume, VWAP + order flow",
      "Scans up to 2,000 tickers with a thread pool; 60-second auto-refresh",
      "Three universe modes including live volume-ranked construction",
      "Watchlist mode with audio alerts on signal crosses",
    ],
    accent: "teal",
  },
  {
    slug: "tangled-webb-platform",
    name: "Tangled Webb Bar Platform",
    category: "entertainment",
    tagline:
      "Live bar entertainment platform plus a public marketing site — trivia, bingo, open mic, Triple Down, Shut Up & Roll, and Tab Out, all running off one host console.",
    description:
      "A full multi-game platform for venues, running live bar nights every week and still in active beta testing at the venue — real crowds are the test harness. Players join by scanning a QR code, hosts run rounds from a unified console, and admins manage venues, question banks, promotions, performer profiles, and booking flows. Anti-cheat detects when players leave the app mid-question. A shared prize wheel runs across the games with per-prize stock that pulls a prize once it hits zero, a physical-deck mode for hosts who would rather deal real cards, and landing math centralized behind regression tests after it drifted between the wedge and the prize text. Bar Bingo was rebuilt phone-first this summer: server-side auto-call (the old client-side timer died whenever the host backgrounded the tab), themed square rounds, generated trash talk, and proper handling for two people calling bingo at once. For Veterans Day it gained a third look alongside Classic and Halloween: five new winning shapes (chevron, dog tag, poppy, service star, flag), two 75-square lists, and two ceremonies that take over the TV and every phone — a branch roll call in order of precedence with cues for the host, and a sixty-second moment of remembrance that ends itself on a server-issued clock, because the one person who would remember to end it is holding a microphone. Venues that run their own phone games can also license Tab Out, Triple Down, and the verified trivia bank through service routes that deal a round on the real engine, instead of keeping a copy of the rules that drifts. Tab Out gained sabotage cards and rotating banter. The TV displays now survive a crash and hold their screen when the event stream drops. The same Next.js app serves tanglewebb.com — the public marketing site with about, services, schedule, venues, gallery, blog, and testimonials.",
    role: "Solo founder & engineer — product, UX, full-stack build, marketing site",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Turso (libsql)",
      "Tailwind",
      "JWT auth",
    ],
    status: "Shipped",
    link: {
      label: "Try the live Open Mic demo",
      href: "https://tanglewebb.com/demo/openmic",
    },
    subLinksLabel: "Game pages on tanglewebb.com",
    subLinks: [
      { label: "Trivia", href: "https://tanglewebb.com/services/trivia" },
      { label: "Open Mic", href: "https://tanglewebb.com/services/openmic" },
      { label: "Bar Bingo", href: "https://tanglewebb.com/services/bingo" },
      { label: "Triple Down", href: "https://tanglewebb.com/services/triple-down" },
      { label: "Shut Up & Roll", href: "https://tanglewebb.com/services/shutuproll" },
      { label: "Tab Out", href: "https://tanglewebb.com/services/tabout" },
      { label: "Main site", href: "https://tanglewebb.com" },
    ],
    highlights: [
      "Seven game modes share one player join flow and host console, including a Queen of Hearts raffle tracker",
      "Player, host, admin, and performer roles each get a tailored interface",
      "Shared prize wheel: per-prize stock with auto-removal at zero, physical-deck mode, landing math under regression test",
      "Bingo rebuilt phone-first — server-side auto-call that survives a backgrounded tab, themed rounds, co-winner handling",
      "Veterans Day Bingo: new shapes and lists, plus roll-call and remembrance ceremonies that end on a server clock, not a host tap",
      "Licensed game service routes: other venues rent Tab Out, Triple Down, and verified trivia from the real engine",
      "Turso resilience work: self-healing connections, graceful degradation, and paged reads after a week of production outages",
      "TV displays recover from a crash and hold their screen when the event stream drops",
      "Same codebase serves the public marketing site at tanglewebb.com",
    ],
    accent: "amber",
  },
  {
    slug: "louies-games",
    name: "Louie’s Phone Games",
    category: "entertainment",
    tagline:
      "An eight-game arcade on customers’ own phones — play solo or challenge someone across the bar, playable only when you are actually in the building, with leaderboards anyone can see.",
    description:
      "A games arcade for Louie’s Corner House running off the Tangled Webb platform: trivia, Shut Up & Roll, Tab Out, Triple Down, a flick-to-throw Beer Pong, and three newer skill games — Perfect Pour (hold the tap, let go on the line), Last Call (a reaction test), and Dead Ringer (rings at a swinging hook in a crosswind). Every game plays against the house or head-to-head against another customer through a challenge flow. The index is an arcade: each game gets a lit cabinet screen playing its own mechanic on a loop in inline SVG, so a name like “Dead Ringer” explains itself before anyone taps it. Play is gated behind proof you are in the bar — the ordering app’s geofence, or a code read out by the bartender that is derived rather than stored, changes daily, rolls at 4am because the bar is open past midnight, and skips characters like O/0 and S/5 that get misheard across a loud room. Leaderboards sit deliberately outside that gate, with a chase line (“141 more takes 4th”) because a gap is a target and a rank is just a fact. Every skill game is scored on the server, never the handset: a score computed on a phone is a claim, not an observation, so the client reports events, the server scores and clamps the impossible cases, and those games rank on the leaderboard but can never earn a spin of the prize wheel. Confetti fires only for something actually won — never for simply finishing.",
    role: "Solo engineer — game design, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Turso (libsql)",
      "Tailwind",
    ],
    status: "Shipped",
    link: {
      label: "See the live leaderboards",
      href: "https://trivia-app-orcin.vercel.app/games/leaderboards",
    },
    subLinksLabel: "Also public",
    subLinks: [
      {
        label: "Games home (play is gated to the bar)",
        href: "https://trivia-app-orcin.vercel.app/games",
      },
    ],
    highlights: [
      "Eight games, solo or head-to-head: trivia, Shut Up & Roll, Tab Out, Triple Down, Beer Pong Solo, Perfect Pour, Last Call, Dead Ringer",
      "Arcade index with a live animated cabinet per game — the rules explain themselves before anyone taps",
      "At-bar gate: geofence, or a daily bartender code derived from the date (no scheduler, rolls at 4am, DST-tested)",
      "Leaderboards outside the gate with a chase line — and deliberately no movement arrows, since no rank history exists to back them",
      "Skill games scored server-side and clamped (tests cover a phone claiming 500 catches) — leaderboard-only, never a prize",
      "Louie’s card sign-in carries across domains via a stateless five-minute HMAC handoff token",
    ],
    accent: "violet",
  },
  {
    slug: "louies-game-nights",
    name: "Louie’s Game Nights",
    category: "entertainment",
    tagline:
      "Four hosted game-night formats built for the bar — Hangman, a survey-show face-off called The Corner House Crew, UNO with real decks, and Euchre — each run from a host console with phones and the bar TV in sync.",
    description:
      "Live, hosted games for Louie’s weekly game nights, built on the Tangled Webb platform’s host-console-plus-phones-plus-TV pattern. Hangman gives every player their own gallows against the same phrase; the TV never shows the word, the letters called, or a letter feed — only a small hangman per player with a name and points — because anything on the bar TV can be read off it. Puzzles come in rounds, and the prize wheel goes to the top scorer across the round rather than each puzzle’s solver. Phrases live in an editable database word bank, and a played phrase rests for 60 days across every game at the venue. The Corner House Crew is a king-of-the-hill survey-show tournament: two teams, a server-enforced buzzer race (the first guarded database update wins, so two simultaneous taps can’t both buzz in), face-off and answer turns that rotate through each team’s roster automatically, and a host who judges spoken answers with a tap so nobody types on a phone. Its boards come from a starter bank, a host editor, and real patron surveys collected through a public form. UNO runs on real decks across up to four tables: the host seats players from their phones, each table plays its own rounds without waiting on the others, the winner spins the prize wheel on their own phone, and the TV queues full-screen spin pop-ups and a leaderboard per table. Euchre comes two ways. Real-deck tables draw partners blind and swap them after every game to five, with waiting players rotating in at the swap so nobody sits out a whole night. The automated version is played entirely on phones and the TV, with bots filling empty seats and the house rules people actually play — going alone and stick the dealer. All four share breaks, announcements, promo cards in the lobby, and an animated how-to-play loop on the TV.",
    role: "Solo engineer — game design, host tooling, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Turso (libsql)",
      "Tailwind",
    ],
    status: "Shipped",
    link: {
      label: "Take a Corner House Crew survey",
      href: "https://trivia-app-orcin.vercel.app/survey",
    },
    highlights: [
      "Hangman: per-player gallows against one shared phrase; the TV deliberately shows nothing a player could cheat from",
      "Rounds with a wheel for the round’s top scorer, host-only puzzle advance, kick/restore, and send-a-spin to any player",
      "Database word bank with a 60-day rest per phrase across every game at the venue",
      "The Corner House Crew: king-of-the-hill teams, race-safe server buzzers, auto-rotating turns, host-judged answers",
      "Boards built from real patron surveys (“We surveyed N patrons”) alongside a 40-board starter bank",
      "UNO with physical decks: 1–4 independent tables, winner spins on their phone, TV pop-ups and per-table standings",
      "Euchre: real-deck tables with blind-draw partners that swap each game, or a fully automated phone-and-TV game with bots, going alone, and stick the dealer",
    ],
    accent: "amber",
  },
  {
    slug: "louies-orders",
    name: "Louie’s Patio & Bar Orders",
    category: "operations",
    tagline:
      "QR-code ordering for a real working bar — patio customers scan their table's code, the bartender works a live queue, and phones ding when the order's ready.",
    description:
      "Built for Louie’s Corner House (Buckeye Lake, OH) to replace the patio-to-bar-phone workflow that kept pulling bartenders off service. Each table's QR code bakes the seat into the link, so nobody types a table number and nobody gets it wrong. Customers browse a real menu — 300+ items with priced variants, mixers, flavours and bartender-only recipes — order in a tap, edit while they're still in line, message the bar, and get a chime-and-vibrate alert with their total. Behind it: a specials engine that runs happy hour and one-off bartender specials on a schedule and recalculates every price server-side at submit; running tabs; and a bartender queue where one tap finishes an order. The admin console runs the rest — role-based staff PINs, GPS geofencing with a gentle fallback for phones that won't share location, three service modes from open through pickup-only to closed, attributed customer blocking, a loyalty card, and an impact dashboard. The card rewards ten different days rather than ten visits or ten dollars — ordering a drink or playing a game both count, two devices on one night still count once, and it cannot be farmed by buying four rounds in a single sitting. A full card is redeemed by the customer spinning the prize wheel themselves, with no staff involved. In production at the bar today, switched on for the shifts it's being tested on.",
    role: "Solo engineer — product, UX, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (Postgres)",
      "Tailwind",
      "Web Push",
    ],
    status: "Shipped",
    link: {
      label: "Play with the working demo",
      href: "https://louies-orders.vercel.app/demo",
    },
    highlights: [
      "Full menu with priced variants, option groups and server-authoritative pricing — the phone never decides what anything costs",
      "Scheduled specials engine: happy hour by day and hour, one-off bartender specials, scoped to sections or hand-picked products",
      "Live queue with per-table QR codes, two-way messaging, running tabs, and web-push lock-screen alerts for the bar device",
      "GPS geofencing that flags rather than blocks, three service modes, and attributed customer blocking",
      "Loyalty card rewards ten different days, not visits or spend — un-farmable by design, keyed to an anonymous device cookie with no account to create",
      "A full card is redeemed by the customer spinning the prize wheel themselves — no staff in the loop",
      "Impact dashboard: orders per day, busiest hours, time-to-delivery, repeat customers, captured revenue",
    ],
    accent: "emerald",
  },
  {
    slug: "louies-bar-tools",
    name: "Louie’s Bar Screen & Back Office",
    category: "operations",
    tagline:
      "The staff side of the ordering app — taking orders at the table, running tabs, counting the drawer, scheduling the staff, and selling out of a cooler at events.",
    description:
      "What started as a queue for patio orders became the tool the bar staff run their shift from. Bartenders take orders at a table on their own phone — set the table once, add each person, and everyone gets their own order and their own tab. Tabs can be split by order (never by dividing a total, because half of a round somebody bought isn’t anybody’s half) or combined; “their usual” turns “another Coors” into one tap; family pricing is applied by the person ringing it rather than as a special anyone standing there would get; and tips written on the slip after a card runs go into a pile to fill in later instead of holding a screen open per slip. A card surcharge was replaced with a cash discount after working through the rules — a surcharge is capped, can’t touch debit, and needs registration, while a discount has none of those problems and reads as a favour rather than a penalty. The night ends at 5am, not midnight, so a 1:30am tab lands on the right day; the drawer is counted against what was rung up as cash, and paid-outs are logged as they happen and voided rather than deleted. Scheduling treats publishing as a step so a late week is visible, totals everyone’s hours in the open, and records every change made after publishing. A time clock and an hours report put scheduled and worked side by side. For outdoor events, a cooler bar sells in one tap with no tab or customer, copies the price onto each sale, and settles owner-stocked gear separately from the bar’s takings.",
    role: "Solo engineer — product, UX, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (Postgres)",
      "Tailwind",
      "PWA",
    ],
    status: "Shipped",
    highlights: [
      "Staff ordering at the table: one person per order, one tab per person, matched on name and table",
      "Split by order and combine tabs, one-tap “their usual”, family pricing, and a tips-to-add pile for card slips",
      "Cash discount instead of a card surcharge — same recovery, no cap, no debit restriction, no registration",
      "Money operations fail closed: the audit row is written first, and the change is refused if it can’t be",
      "5am business day, drawer count vs rung-up cash, paid-outs logged and voided rather than deleted",
      "Scheduling where publishing is a visible step, hours are totalled openly, and post-publish changes are recorded",
      "Time clock and hours reporting: scheduled vs worked over any period",
      "One-tap event cooler bar with price snapshots, voids instead of deletes, and separate settlement for gear",
    ],
    accent: "teal",
  },
  {
    slug: "louies-50th",
    name: "Louie’s 50th Memory Wall",
    category: "operations",
    tagline:
      "Community memory wall for a bar’s 50th anniversary — patrons upload photos, videos, and handwritten stories; 800+ memories and counting, playing on the TV at the bar every night.",
    description:
      "Built for Louie’s Corner House (Buckeye Lake, OH, est. 1976) to collect fifty years of customer history before it disappeared into shoeboxes. Patrons upload photos and videos, tag who is in them, add the year and the occasion, and leave comments; stories can be typed or photographed straight off the handwritten wall inside the bar. The wall groups itself by year and event, and a perceptual-hash duplicate detector catches the same photo arriving from four different phones. The team runs it from a dashboard — a review queue that clears in one tap, bulk edit and filtering, name-tag approvals, per-photo comment locks with IP and device capture plus a block list, and a visitor-analytics snapshot. A /tv mode casts the whole thing to the screens at the bar: polaroid frames with Sharpie captions, four-up montages, typed stories as story cards, event flyers and the Queen of Hearts board woven into the rotation, and a rotating ad every ninth set. In production with real patron data since June, and the bar has been playing it nightly ever since.",
    role: "Solo engineer — product, UX, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (Postgres + Storage)",
      "Tailwind",
    ],
    status: "Shipped",
    link: {
      label: "Visit the memory wall",
      href: "https://louies50.vercel.app/",
    },
    subLinksLabel: "Also on the site",
    subLinks: [
      { label: "TV slideshow mode", href: "https://louies50.vercel.app/tv" },
      { label: "Submit a memory", href: "https://louies50.vercel.app/submit" },
    ],
    highlights: [
      "800+ real patron memories — photo and video uploads, external video embeds, and handwritten stories",
      "Perceptual-hash duplicate detection groups the same photo arriving from four different phones",
      "Name tagging with approval, year and event grouping, search across names, events, years, and text",
      "Moderation with per-photo comment locks, IP and device capture, and a block list",
      "/tv casting mode: polaroid frames, montages, flyers, and ads on a timed rotation that self-heals every four hours",
      "Built-in visitor analytics so the team can see the wall actually being used",
    ],
    accent: "rose",
  },
  {
    slug: "cornerhouse",
    name: "CornerHouse",
    category: "operations",
    tagline:
      "The bar’s front door — a database-driven website where the team adds events, menu options, and entire new apps without anyone touching code.",
    description:
      "The main site for Louie’s Corner House and the hub that ties the other apps together. Everything on it is data, not code: the top nav and the homepage app tiles are driven by rows in a site_links table, so when the next app ships the team adds it themselves and it appears with no deploy. Events carry uploaded flyers, the homepage headlines the current Queen of Hearts jackpot, and a password-gated admin console runs all four surfaces — events, Queen of Hearts, menu options, and site info. The raffle section is the substantial one: a 54-envelope board, live 1-in-N odds, a jackpot trend chart, per-draw history, and admin-editable rules. Logging a draw rolls the jackpot, recomputes the odds, rejects a duplicate envelope, and records the winner automatically when the Queen turns up. Customers reserve raffle tickets online and the bar prints them from its own screen; the default is “I’ll pick numbers at the bar”, because a reservation without card numbers becomes one sticker image with copies set to N on the bar’s handheld label printer instead of one import per number. Pricing lives in one function so the customer’s quote, the admin preview, and the bar screen can never disagree, and the public lookup by reservation code never returns a name or phone. The bar can block a phone number from reserving online, with a plain-spoken message rather than a vague error that would read as a broken app. Sharing the raffle page produces a live Open Graph card with the current jackpot and cards left. Custom pages carry generic signup sheets — named slots with optional limits — so one primitive covers a 50th-anniversary potluck, a Friendsgiving main-dish sign-up, a chili cook-off entry list (with a QR-coded flyer), a volunteer list, and local businesses offering game-night prizes. Repeating events can have one themed date with its own flyer. The front page shows the games as a physics-driven attract screen (bouncing dice with restitution, a real pendulum, a beer-pong arc solved for its target cup) on a single canvas that stops when scrolled out of view. A first-party analytics tracker shared by all four Louie’s apps feeds a dashboard tab with no IP, name, or phone stored. Admin passwords are self-service from the dashboard — a hash in the database overrides the environment variable and signs every other device out.",
    role: "Solo engineer — product, UX, full-stack build, deployment",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (Postgres)",
      "Tailwind",
    ],
    status: "Shipped",
    link: {
      label: "Visit cornerhouse.vercel.app",
      href: "https://cornerhouse.vercel.app/",
    },
    subLinksLabel: "Pages",
    subLinks: [
      {
        label: "Queen of Hearts board",
        href: "https://cornerhouse.vercel.app/queen-of-hearts",
      },
      { label: "Events", href: "https://cornerhouse.vercel.app/events" },
    ],
    highlights: [
      "Nav and homepage tiles are database rows — the team adds new apps without a deploy",
      "Queen of Hearts: envelope board, live 1-in-N odds, jackpot trend chart, auto-recorded winner",
      "Online raffle reservations printed at the bar — designed around a handheld label printer that takes one image at a time",
      "Phone-number blocklist that fails open: a database error never locks out a real customer",
      "Live Open Graph share card with the current jackpot, rendered per request so the pot never freezes",
      "Custom pages with generic signup sheets — potlucks, Friendsgiving, a chili cook-off, volunteers, and business sponsors on one primitive",
      "Physics attract screen for the games on one canvas — no keyframes, pauses offscreen, respects reduced motion",
      "First-party, privacy-light analytics across all four Louie’s apps",
      "Self-service admin password — hashed in the DB, overrides the env var, signs out other devices",
      "Shares one Postgres project with the ordering app and memory wall; reads degrade gracefully when a table is missing",
    ],
    accent: "sky",
  },
  {
    slug: "gighive",
    name: "GigHive",
    category: "entertainment",
    tagline:
      "Mobile-first booking marketplace where bars and venues book live entertainment — musicians, comedians, DJs, karaoke hosts.",
    description:
      "Two-sided marketplace for live entertainment. Performers publish availability and get booked; bars find acts (especially last-minute) by act type, radius, and region. Includes urgent bookings, fill-in subs, an equipment marketplace, classifieds, and a free public events feed with a follow system.",
    role: "Solo founder & engineer — product, mobile, backend, payments",
    stack: ["Expo (React Native)", "Supabase", "Stripe", "TypeScript"],
    status: "Beta",
    link: {
      label: "View the pitch deck",
      href: "https://pitch-site-nine.vercel.app/",
    },
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
    category: "entertainment",
    tagline:
      "Bar-friendly photo-hunt game — find the differences between two AI-generated images before the timer runs out.",
    description:
      "First title from Fly Trapp Games (a sub-label of Tangled Webb Entertainment). Token-based plays via in-app purchase, image pairs generated through Gemini 2.5 Flash, hotspot hit-detection on tap. Designed for the bar context — short rounds, easy to pick up, hard to put down after two drinks.",
    role: "Solo founder & engineer — game design, mobile build, content pipeline",
    stack: ["Expo SDK 54", "TypeScript", "Gemini 2.5 Flash", "Supabase (planned)"],
    status: "Prototype",
    link: {
      label: "Play the web build",
      href: "https://two-drink-memories.vercel.app/",
    },
    highlights: [
      "AI-generated image-pair pipeline with hotspot coordinates",
      "Token wallet (10/$1.99, 30/$4.99, 100/$12.99) wired for IAP",
      "Tappable hotspot detection with miss-marker feedback",
      "Web build uses placeholder images while real Gemini-generated puzzles are pending",
    ],
    accent: "rose",
  },
];
