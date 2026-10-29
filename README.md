# Laid Off Bench

**Laid Off Bench** is a minimal, static Astro website for people who have been laid off, displaced, or had their roles significantly affected by the rapid adoption of AI.

## Quick Start

Requires **Node.js 20+**.

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:4321)
npm run dev

# Run TypeScript / Astro checks
npm run check

# Build static production site into ./dist
npm run build

# Preview production build locally
npm run preview
```

## Manual Configuration Before Launch

1. **Story Submission Form URL**: Open `src/config.ts` and replace `SHARE_STORY_FORM_URL` with your real form URL (e.g., Tally, Google Forms, Typeform).
2. **Production Domain & Contact Email**: Update `SITE_URL` and `CONTACT_EMAIL` in `src/config.ts` (and the sitemap URL in `public/robots.txt`) to match your domain.
3. **Demo Story Placeholders**: The cards in `src/data/stories.ts` (`DEMO_PLACEHOLDER_STORIES`) are explicitly marked as fictional demo placeholders for MVP validation. Replace them only when real, consented submissions are collected.
4. **Cloudflare Web Analytics**: Enable Web Analytics directly in the Cloudflare Pages dashboard (no tracking cookies required).
