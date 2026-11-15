# Onyinye Philips | Text-only animated portfolio

Next.js (App Router) · TypeScript · Tailwind · GSAP + ScrollTrigger + SplitText · Lenis

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit
- All copy, projects, experience and contact details: `lib/data.ts`
- Add a project: push an object onto `projects` (leave `url` empty until verified; the row shows "Link coming soon")
- Candlewhip / Pertheon URLs: set `NEXT_PUBLIC_CANDLEWHIP_URL` / `NEXT_PUBLIC_PERTHEON_URL` (see `.env.example`)
- Email, LinkedIn, GitHub: fill `site.email`, `site.linkedin`, `site.github`; empty values are hidden
- Booking: `site.booking` (cal.com) opens in a dark modal embed
- Colours: `tailwind.config.ts`. Animation helpers: `lib/motion.ts`
