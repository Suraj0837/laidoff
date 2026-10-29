/**
 * Central configuration for Laid Off Bench.
 *
 * MANUAL CONFIGURATION BEFORE LAUNCH:
 * 1. Replace `SHARE_STORY_FORM_URL` below with your real form link
 *    (e.g., Tally, Google Forms, Typeform, or Airtable form).
 * 2. Update `SITE_URL` and `CONTACT_EMAIL` to match your production domain.
 */

export const SHARE_STORY_FORM_URL =
  'https://example.com/replace-with-your-story-submission-form';

export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL || 'https://laidoffbench.com';

export const CONTACT_EMAIL = 'hello@laidoffbench.com';

export const SITE_METADATA = {
  name: 'Laid Off Bench',
  tagline: 'Built for people navigating the AI transition.',
  title: 'Laid Off Bench — Laid Off Because of AI? Take a Seat.',
  description:
    'A human space for people who have been laid off, displaced, or had their roles transformed by AI. Read real experiences, share your story anonymously, and figure out what comes next.',
  ogImage: '/og-card.svg',
  ogImageAlt:
    'Laid Off Bench — Laid off because of AI? Take a seat. Stories and resources for people navigating AI job displacement.',
} as const;
