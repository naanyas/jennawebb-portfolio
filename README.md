# jennawebb.co

Personal portfolio for Jenna Webb. Next.js 15 + Tailwind 3, deployed on Vercel.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Edit project content

All project cards live in [`src/lib/projects.ts`](src/lib/projects.ts). Each entry:

```ts
{
  slug: "domain-infra",
  name: "domain-infra",
  tagline: "One-line hook…",
  description: "Two or three sentences…",
  role: "What you did",
  stack: ["Django 5", "Postgres", "…"],
  status: "In progress",       // Shipped | Beta | In progress | Prototype
  highlights: ["Bullet 1", "Bullet 2"],
  link: { label: "View", href: "https://…" },   // optional
  accent: "violet",             // amber | violet | emerald | sky | rose
}
```

Add, remove, or reorder entries — the homepage renders the array in order.

## Deploy to Vercel (one-time)

1. Create a GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create jennawebb-portfolio --private --source=. --push
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel auto-detects Next.js — defaults are fine.
3. After the first deploy, open the project → **Settings → Domains** → add `jennawebb.co` and `www.jennawebb.co`.
4. Vercel will give you DNS records. In your domain registrar (where you bought jennawebb.co), set:
   - `A` record on the apex `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
5. Wait for SSL to provision (usually under 5 minutes). Done.

Subsequent deploys are automatic on every push to `main`.

## Custom email (optional)

`hello@jennawebb.co` is referenced in the contact section. Set it up via your registrar's email forwarding (free on most), or use a real mailbox via Fastmail / Google Workspace.

## File map

- `src/app/page.tsx` — the whole homepage
- `src/app/layout.tsx` — site metadata (title, OG image, etc.)
- `src/app/globals.css` — global styles, Tailwind directives
- `src/lib/projects.ts` — project data
- `tailwind.config.ts` — design tokens (colors, fonts)
