# Wellora — Mental Health Support Community

A fullstack, animated marketing site for a (fictional) mental health support
community, built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 +
Framer Motion + Lenis** smooth scroll.

## Highlights

- **Animated hero** — the forest reference image with a slow Ken-Burns drift,
  drifting fog layers, a pulsing stump glow, scroll-linked parallax, and a
  line-by-line headline reveal.
- **Scroll-driven sections** — staggered reveal-on-scroll animations
  (Framer Motion), a marquee testimonial wall, and buttery smooth scrolling
  (Lenis). Honors `prefers-reduced-motion`.
- **Fullstack backend** (Next.js API routes, file-backed store):
  - `POST /api/join` — waitlist signup (dedupes, validates)
  - `POST /api/contact` — contact form messages
  - `POST /api/newsletter` — newsletter subscribe
  - `GET /api/resources` — articles feed (optional `?category=`)

## Sections

Hero · How we help · Community (testimonials) · Resources (from the API) ·
Newsletter · Contact · Footer.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
# or
npm run build && npm run start
```

Form submissions are stored as JSON under `data/` (gitignored). Swap
`app/lib/store.ts` for a real database when you're ready.
