import { projects, type Project } from "@/lib/projects";

const accentClasses: Record<Project["accent"], string> = {
  amber: "from-amber-500/20 to-amber-500/0 ring-amber-500/30 text-amber-300",
  violet:
    "from-violet-500/20 to-violet-500/0 ring-violet-500/30 text-violet-300",
  emerald:
    "from-emerald-500/20 to-emerald-500/0 ring-emerald-500/30 text-emerald-300",
  sky: "from-sky-500/20 to-sky-500/0 ring-sky-500/30 text-sky-300",
  rose: "from-rose-500/20 to-rose-500/0 ring-rose-500/30 text-rose-300",
  teal: "from-teal-500/20 to-teal-500/0 ring-teal-500/30 text-teal-300",
  indigo:
    "from-indigo-500/20 to-indigo-500/0 ring-indigo-500/30 text-indigo-300",
};

const statusClasses: Record<Project["status"], string> = {
  Shipped: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Beta: "bg-sky-500/15 text-sky-300 ring-sky-500/30",
  "In progress": "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Prototype: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
};

export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
            Open to opportunities
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Jenna Webb
          </h1>
          <p className="mt-2 text-lg text-accent-soft sm:text-xl">
            Trust &amp; Safety and Fraud Leader
          </p>
          <p className="mt-4 max-w-2xl text-lg text-white/70 sm:text-xl">
            10+ years building abuse-prevention systems, detection frameworks,
            and risk operations across email, messaging, fintech, and SaaS.
            Most recently Staff PM for Trusted Communications at Twilio, where
            I cut abuse incidents by 71%. Off-hours, I ship full products end
            to end &mdash; the work below is a sample.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                About
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Operator first, builder always
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-white/75 leading-relaxed">
              <p>
                I spent the last decade-plus running Trust &amp; Safety and
                fraud programs at scale &mdash; Twilio (Staff PM, Trusted
                Communications), Alliance Data (Fair Billing), and most
                recently a consulting engagement with OneSignal designing
                onboarding-fraud detection. I&rsquo;m fluent in the operational
                side of the work: SQL, Snowflake, Looker, Splunk, behavioral
                analytics, root-cause investigation, KPI design, carrier and
                cross-functional escalation.
              </p>
              <p>
                What sets me apart is that I don&rsquo;t stop at the
                spec. I build the thing. The projects below are products I
                designed, built, and shipped end-to-end &mdash; database
                schema, API, mobile UI, billing &mdash; using modern AI tooling
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

      {/* Experience */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                Experience
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Career highlights</h2>
              <a
                href="/Jenna_Webb_Resume.pdf"
                className="mt-4 inline-block text-sm text-accent hover:text-accent-soft"
              >
                Download full resume &rarr;
              </a>
            </div>
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  role: "Independent Security & Risk Consultant",
                  org: "OneSignal (Contract)",
                  dates: "Jan 2026 – Apr 2026",
                  bullets: [
                    "Designed behavioral risk scoring and identity-verification frameworks for onboarding-fraud detection.",
                    "Built automated decisioning combining device intelligence, document authenticity, network reputation, and behavioral signals.",
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
                    <span className="text-white/80">
                      Recognition:
                    </span>{" "}
                    Superb Owl Award (Twilio, 10DLC carrier connections),
                    Magic Owl Award (Twilio, building the compliance
                    department), President&rsquo;s Circle nomination (Alliance
                    Data, creating the debt settlement function).
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

      {/* Projects */}
      <section id="projects" className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                Selected projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Built end-to-end
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/60">
                Each of these is a product I designed, scoped, and shipped
                myself &mdash; schema, API, UI, billing, and everything in
                between. They&rsquo;re evidence of the builder side of the
                operator profile above.
              </p>
            </div>
            <p className="hidden text-sm text-white/50 sm:block">
              {projects.length} projects shown
            </p>
          </div>

          <ul className="mt-10 space-y-6">
            {projects.map((p) => (
              <li key={p.slug}>
                <article
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${accentClasses[p.accent]} bg-ink-800/40 p-px transition hover:bg-ink-800/60`}
                >
                  <div className="rounded-2xl bg-ink-800/80 p-6 backdrop-blur sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">
                          {p.name}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[p.status]}`}
                        >
                          {p.status}
                        </span>
                      </div>
                      {p.link && (
                        <a
                          href={p.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                        >
                          {p.link.label} &rarr;
                        </a>
                      )}
                    </div>

                    <p className="mt-3 text-base text-white/80">{p.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      {p.description}
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Role
                        </p>
                        <p className="mt-1 text-sm text-white/80">{p.role}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Stack
                        </p>
                        <ul className="mt-1 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/75 ring-1 ring-inset ring-white/10"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-1.5 text-sm text-white/75">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How I work */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                How I work
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Operator&rsquo;s instincts, engineer&rsquo;s output
              </h2>
            </div>
            <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "End-to-end ownership",
                  body: "Schema, API, mobile, web, billing — I&rsquo;m comfortable owning the full stack and the product decisions that come with it.",
                },
                {
                  title: "Move fast, with rigor",
                  body: "AI-assisted development lets me ship at solo-builder speed without skipping the thinking — schemas, tests, and architecture still get the time they need.",
                },
                {
                  title: "Real problems",
                  body: "Every project here came from a real pain point — fraud teams drowning in signups, performers hunting gigs, venues looking for better bar nights.",
                },
                {
                  title: "Calm collaboration",
                  body: "I came up in operations. I can talk to legal, finance, and customers — not just engineers — and I write down decisions so the team can move on.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl bg-ink-800/60 p-5 ring-1 ring-white/5"
                >
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-white/70"
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/40">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Let&rsquo;s talk</h2>
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
                <a
                  href="/Jenna_Webb_Resume.pdf"
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/5"
                >
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-white/50">
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
