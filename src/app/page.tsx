import {
  projects,
  categoryMeta,
  type Project,
  type Category,
} from "@/lib/projects";

const accentClasses: Record<Project["accent"], string> = {
  amber: "from-amber-500/30 via-amber-500/10 to-transparent ring-amber-500/30",
  violet: "from-violet-500/30 via-violet-500/10 to-transparent ring-violet-500/30",
  emerald:
    "from-emerald-500/30 via-emerald-500/10 to-transparent ring-emerald-500/30",
  sky: "from-sky-500/30 via-sky-500/10 to-transparent ring-sky-500/30",
  rose: "from-rose-500/30 via-rose-500/10 to-transparent ring-rose-500/30",
  teal: "from-teal-500/30 via-teal-500/10 to-transparent ring-teal-500/30",
  indigo:
    "from-indigo-500/30 via-indigo-500/10 to-transparent ring-indigo-500/30",
};

const accentText: Record<Project["accent"], string> = {
  amber: "text-amber-300",
  violet: "text-violet-300",
  emerald: "text-emerald-300",
  sky: "text-sky-300",
  rose: "text-rose-300",
  teal: "text-teal-300",
  indigo: "text-indigo-300",
};

const accentGlow: Record<Project["accent"], string> = {
  amber: "bg-amber-500/20",
  violet: "bg-violet-500/20",
  emerald: "bg-emerald-500/20",
  sky: "bg-sky-500/20",
  rose: "bg-rose-500/20",
  teal: "bg-teal-500/20",
  indigo: "bg-indigo-500/20",
};

const statusClasses: Record<Project["status"], string> = {
  Shipped: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Beta: "bg-sky-500/15 text-sky-300 ring-sky-500/30",
  "In progress": "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Prototype: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
};

const categoryOrder: Category[] = ["detection", "entertainment", "trading"];

const categoryIcon: Record<Category, React.ReactNode> = {
  detection: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 2 4 6v6c0 5 3.5 9.4 8 10 4.5-.6 8-5 8-10V6l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  entertainment: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 2v6" />
      <path d="m4.93 10.93 4.24 4.24" />
      <path d="M2 18h6" />
      <path d="M16 18h6" />
      <path d="m14.83 15.17 4.24-4.24" />
      <path d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-8-8-8s-8 3.582-8 8a8 8 0 0 0 8 8Z" />
    </svg>
  ),
  trading: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-5" />
      <path d="M16 9h4v4" />
    </svg>
  ),
};

const stats: { value: string; label: string }[] = [
  { value: "96%", label: "False-negative rate cut on recent T&S engagement" },
  { value: "71%", label: "Abuse incidents cut at Twilio" },
  { value: "350h", label: "Per month of manual review automated away" },
  { value: "10+", label: "Years in Trust & Safety" },
];

export default function Home() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    meta: categoryMeta[cat],
    items: projects.filter((p) => p.category === cat),
  }));

  return (
    <main className="relative overflow-hidden">
      {/* Top nav — sticky, links to in-page sections plus live demos */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a
            href="#top"
            className="group flex items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-ink-900">
              JW
            </span>
            <span className="hidden sm:inline">jennawebb.co</span>
          </a>
          <div className="hidden items-center gap-1 text-sm text-white/70 md:flex">
            <a href="#projects" className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white">
              Projects
            </a>
            <a href="#experience" className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white">
              Experience
            </a>
            <span className="mx-1 h-4 w-px bg-white/10" />
            <a
              href="https://domain-infra-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white"
            >
              SDAT demo
            </a>
            <a
              href="https://momentum-screener-production-1255.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white"
            >
              V9 screener
            </a>
            <a
              href="https://gap-fade-screener-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white"
            >
              Gap+Fade v1
            </a>
            <a
              href="https://ml-screener-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1.5 hover:bg-white/5 hover:text-white"
            >
              ML screener
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Contact
          </a>
        </div>
      </nav>

      <div id="top" />

      {/* Hero */}
      <section className="relative">
        {/* Decorative gradient blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-accent/30 via-rose-500/10 to-transparent blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -left-32 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-violet-500/25 via-sky-500/10 to-transparent blur-3xl"
        />
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            Jenna Webb
          </h1>
          <p className="mt-3 max-w-3xl text-xl font-medium text-accent-soft sm:text-2xl">
            Trust &amp; Safety operator who ships products.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            10+ years building abuse-prevention systems across email, messaging,
            fintech, and SaaS &mdash; most recently Staff PM for Trusted
            Communications at Twilio, where my detection frameworks cut abuse
            incidents by <span className="text-accent">71%</span>. Off-hours,
            I build full products end to end across three lanes: detection,
            live entertainment, and quantitative trading.
          </p>

          {/* Stat row */}
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-ink-800/60 px-4 py-3 backdrop-blur"
              >
                <dt className="text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink-900 transition hover:bg-accent-soft"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                About
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Operator first,
                <br />
                builder always
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-white/75 leading-relaxed">
              <p>
                I spent the last decade-plus running Trust &amp; Safety and
                fraud programs at scale &mdash; Twilio (Staff PM, Trusted
                Communications), Alliance Data (Fair Billing), and most
                recently a consulting engagement designing onboarding-fraud
                detection for a major notification platform. I&rsquo;m fluent
                in the operational side: SQL, Snowflake, Looker, Splunk,
                behavioral analytics, root-cause investigation, KPI design,
                carrier and cross-functional escalation.
              </p>
              <p>
                What sets me apart is that I don&rsquo;t stop at the spec
                &mdash; I build the thing. The projects below are products I
                designed, built, and shipped end-to-end using modern AI tooling
                to move at solo-builder speed without losing the rigor I bring
                from the T&amp;S side.
              </p>
              <p>
                The combination is rare: an operator who can talk to legal,
                finance, and carriers, then go write the schema. That&rsquo;s
                the role I&rsquo;m looking for next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects — categorized */}
      <section id="projects" className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-white/40">
              Selected projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Three lanes, one builder
            </h2>
            <p className="mt-3 text-base text-white/65">
              Detection, entertainment, and trading &mdash; different domains,
              same end-to-end ownership. Each project below was designed,
              scoped, and shipped by me.
            </p>
          </div>

          <div className="space-y-16">
            {grouped.map(({ category, meta, items }) => (
              <div key={category}>
                {/* Category header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentGlow[meta.accent as Project["accent"]]} ${accentText[meta.accent as Project["accent"]]}`}
                    >
                      {categoryIcon[category]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {meta.label}
                      </h3>
                      <p
                        className="mt-1 text-sm text-white/55"
                        dangerouslySetInnerHTML={{ __html: meta.subtitle }}
                      />
                    </div>
                  </div>
                  <p
                    className="max-w-sm text-sm leading-relaxed text-white/55"
                    dangerouslySetInnerHTML={{ __html: meta.description }}
                  />
                </div>

                <ul className="mt-6 grid gap-5 md:grid-cols-2">
                  {items.map((p) => (
                    <li key={p.slug} className="group relative">
                      <article
                        className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${accentClasses[p.accent]} p-px transition`}
                      >
                        <div
                          aria-hidden
                          className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${accentGlow[p.accent]} blur-2xl transition group-hover:scale-125`}
                        />
                        <div className="relative h-full rounded-2xl bg-ink-800/85 p-6 backdrop-blur">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <h4 className="text-lg font-semibold text-white">
                              {p.name}
                            </h4>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[p.status]}`}
                            >
                              {p.status}
                            </span>
                          </div>

                          <p
                            className={`mt-2 text-xs font-medium uppercase tracking-wider ${accentText[p.accent]}`}
                          >
                            {p.tagline.split("—")[0]?.trim() || p.tagline}
                          </p>

                          <p className="mt-3 text-sm leading-relaxed text-white/70">
                            {p.description}
                          </p>

                          <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                            {p.highlights.slice(0, 3).map((h) => (
                              <li key={h} className="flex gap-2">
                                <span
                                  className={`mt-2 inline-block h-1 w-1 shrink-0 rounded-full ${accentGlow[p.accent].replace("/20", "/80")}`}
                                />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <ul className="flex flex-wrap gap-1.5">
                              {p.stack.slice(0, 4).map((s) => (
                                <li
                                  key={s}
                                  className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/65 ring-1 ring-inset ring-white/10"
                                >
                                  {s}
                                </li>
                              ))}
                              {p.stack.length > 4 && (
                                <li className="rounded-md px-1.5 py-0.5 text-xs text-white/40">
                                  +{p.stack.length - 4}
                                </li>
                              )}
                            </ul>
                            {p.link && (
                              <a
                                href={p.link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-xs font-medium ${accentText[p.accent]} underline-offset-4 hover:underline`}
                              >
                                {p.link.label} &rarr;
                              </a>
                            )}
                          </div>

                          {p.subLinks && p.subLinks.length > 0 && (
                            <div className="mt-3 border-t border-white/5 pt-3">
                              <p className="text-xs uppercase tracking-widest text-white/40">
                                {p.subLinksLabel ?? "Live demos"}
                              </p>
                              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                                {p.subLinks.map((s) => (
                                  <li key={s.href}>
                                    <a
                                      href={s.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={`inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs ring-1 ring-inset ring-white/10 transition hover:bg-white/10 ${accentText[p.accent]}`}
                                    >
                                      {s.label}
                                      <span className="text-white/40">&rarr;</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                Experience
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Career highlights</h2>
              <p className="mt-3 text-sm text-white/55">
                Full CV available on request.
              </p>
            </div>
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  role: "Independent Security & Risk Consultant",
                  org: "Notification-platform engagement",
                  dates: "Jan 2026 – Apr 2026",
                  bullets: [
                    "Cut ~350 hours/month of manual review effort by automating decisioning across device intelligence, document authenticity, network reputation, and behavioral signals.",
                    "Improved enablement time by 90%, with full automation set to bring it further.",
                    "Reduced false-negative rate by 96%, with a clear runway to continued gains as the automated pipeline matures.",
                    "Held fraud detection stable with consistently low false-positive rates — the signal-health metric I was optimizing for.",
                    "Closed gaps in third-party detection with supplemental controls targeting previously unmitigated abuse vectors.",
                  ],
                },
                {
                  role: "Staff Product Manager, Trusted Communications",
                  org: "Twilio Inc.",
                  dates: "Jun 2022 – Apr 2025",
                  bullets: [
                    "Led Trust & Safety strategy for email and messaging abuse prevention protecting millions of users globally.",
                    "Designed detection and enforcement frameworks that reduced abuse incidents by 71% while minimizing impact to legitimate senders.",
                    "Built monitoring dashboards and reporting workflows in SQL, Looker, Tableau, Splunk, and Snowflake for real-time visibility into enforcement and abuse trends.",
                    "Investigated phishing, spoofing, malicious-link propagation, account compromise, and large-scale spam campaigns.",
                  ],
                },
                {
                  role: "Staff Messaging Compliance Program Manager",
                  org: "Twilio Inc.",
                  dates: "Nov 2020 – Jun 2022",
                  bullets: [
                    "Led compliance and abuse-prevention strategy for A2P messaging (10DLC, Short Code, Toll-Free).",
                    "Built automated enforcement workflows and carrier policy controls that reduced messaging violation rates by 40%.",
                    "Improved compliance review throughput by 60% YoY; reduced average incident resolution time by 35%.",
                  ],
                },
                {
                  role: "Fair Billing Compliance Program Manager",
                  org: "Alliance Data",
                  dates: "Apr 2012 – Aug 2018",
                  bullets: [
                    "Founded and operationalized the Fair Billing compliance program: fraud identification, dispute resolution, ACH/Reg E.",
                    "Conducted risk assessments and root-cause analyses that reduced billing discrepancies and tightened operational controls.",
                    "Supported CFPB audits through reporting, operational analysis, and remediation planning.",
                  ],
                },
              ].map((job) => (
                <div
                  key={job.role}
                  className="rounded-xl bg-ink-800/50 p-5 ring-1 ring-white/5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="text-sm text-white/60">{job.org}</p>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      {job.dates}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/75">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="rounded-xl border border-dashed border-white/10 p-5 text-sm text-white/60">
                <p className="font-medium text-white/80">Also worth noting</p>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <span className="text-white/80">
                      Quantitative Trading (Apr 2025 &ndash; present):
                    </span>{" "}
                    Python data pipelines and algorithmic trading strategies
                    across equities, futures, and options &mdash; backtesting,
                    risk controls, and live execution.
                  </li>
                  <li>
                    <span className="text-white/80">Recognition:</span>{" "}
                    Superb Owl Award (Twilio, 10DLC carrier connections),
                    Magic Owl Award (Twilio, building the compliance
                    department), President&rsquo;s Circle nomination (Alliance
                    Data).
                  </li>
                  <li>
                    <span className="text-white/80">Core stack:</span> SQL,
                    Python, Snowflake, Looker, Tableau, Splunk, Jira, event
                    stream analysis, behavioral analytics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                How I work
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Operator&rsquo;s instincts, engineer&rsquo;s output
              </h2>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "End-to-end ownership",
                  body: "Schema, API, mobile, web, billing &mdash; I&rsquo;m comfortable owning the full stack and the product decisions that come with it.",
                  accent: "violet",
                },
                {
                  title: "Move fast, with rigor",
                  body: "AI-assisted development lets me ship at solo-builder speed without skipping the thinking &mdash; schemas, tests, and architecture still get the time they need.",
                  accent: "teal",
                },
                {
                  title: "Real problems",
                  body: "Every project here came from a real pain point &mdash; fraud teams drowning in signups, performers hunting gigs, venues looking for better bar nights.",
                  accent: "amber",
                },
                {
                  title: "Calm collaboration",
                  body: "I came up in operations. I can talk to legal, finance, and customers &mdash; not just engineers &mdash; and I write down decisions so the team can move on.",
                  accent: "rose",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`relative overflow-hidden rounded-xl bg-ink-800/60 p-5 ring-1 ring-white/5`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${accentGlow[card.accent as Project["accent"]]} blur-2xl`}
                  />
                  <h3
                    className={`relative text-base font-semibold ${accentText[card.accent as Project["accent"]]}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="relative mt-2 text-sm leading-relaxed text-white/70"
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Let&rsquo;s talk</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-white/80">
              <p>
                I&rsquo;m open to roles where I can keep building end-to-end and
                where my range &mdash; fraud, payments, marketplaces, live
                events &mdash; is an asset, not a curiosity. Happy to share
                deeper walkthroughs of any of the projects above.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:jwebb@naanyas.com"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink-900 transition hover:bg-accent-soft"
                >
                  jwebb@naanyas.com
                </a>
                <a
                  href="https://www.linkedin.com/in/jenna-webb-765443a/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/5"
                >
                  LinkedIn
                </a>
              </div>
              <p className="pt-2 text-sm text-white/50">
                Full resume available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Jenna Webb</p>
          <p>
            Built with Next.js &middot;{" "}
            <a href="https://jennawebb.co" className="hover:text-white">
              jennawebb.co
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
