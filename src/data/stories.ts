/**
 * ============================================================================
 * IMPORTANT — DEMO PLACEHOLDER DATA ONLY (NOT REAL USER SUBMISSIONS)
 * ============================================================================
 * The entries below are illustrative placeholder cards created strictly for
 * the MVP design and demand-validation layout.
 *
 * DO NOT remove the `isDemoPlaceholder` marker or present these cards as
 * genuine user-submitted stories. Replace them only when verified, consented
 * reader submissions have been collected.
 * ============================================================================
 */

export interface StoryCardItem {
  id: string;
  /** Explicit flag indicating this entry is a fictional demo placeholder */
  isDemoPlaceholder: true;
  badgeLabel: 'DEMO STORY — PLACEHOLDER';
  role: string;
  industry: string;
  country: string;
  shortStory: string;
  whatImDoingNow: string;
}

export const DEMO_PLACEHOLDER_STORIES: readonly StoryCardItem[] = [
  {
    id: 'demo-placeholder-1',
    isDemoPlaceholder: true,
    badgeLabel: 'DEMO STORY — PLACEHOLDER',
    role: 'Senior Marketing Copywriter',
    industry: 'B2B SaaS',
    country: 'United States',
    shortStory:
      'Example placeholder: Our six-person content team was reduced to one editor overseeing automated drafts. After eight years of writing product narratives and customer case studies, my position was eliminated during a Q2 restructuring.',
    whatImDoingNow:
      'Taking a few weeks to decompress, freelancing on brand strategy projects, and learning how editorial teams audit and guide AI-assisted workflows.',
  },
  {
    id: 'demo-placeholder-2',
    isDemoPlaceholder: true,
    badgeLabel: 'DEMO STORY — PLACEHOLDER',
    role: 'Localization & Translation Coordinator',
    industry: 'E-Commerce & Retail',
    country: 'United Kingdom',
    shortStory:
      'Example placeholder: Our regional catalog localization moved to an automated neural translation pipeline with contractor spot-checks. My full-time coordination role was phased out alongside three language specialists.',
    whatImDoingNow:
      'Transitioning toward international product operations and user research for cross-border launches.',
  },
  {
    id: 'demo-placeholder-3',
    isDemoPlaceholder: true,
    badgeLabel: 'DEMO STORY — PLACEHOLDER',
    role: 'Tier-2 Technical Support Specialist',
    industry: 'Financial Technology',
    country: 'Canada',
    shortStory:
      'Example placeholder: After helping train our internal support assistant on two years of resolved tickets, ticket deflection rose enough that management consolidated two support shifts into one.',
    whatImDoingNow:
      'Studying for cloud administration certifications and applying to implementation specialist roles that work directly with enterprise clients.',
  },
  {
    id: 'demo-placeholder-4',
    isDemoPlaceholder: true,
    badgeLabel: 'DEMO STORY — PLACEHOLDER',
    role: 'Production Illustrator & Asset Designer',
    industry: 'Independent Publishing & Media',
    country: 'Germany',
    shortStory:
      'Example placeholder: Retainer contracts for spot illustrations and concept storyboards dried up over six months as agencies began generating initial visual concepts in-house.',
    whatImDoingNow:
      'Focusing on art direction, physical print design, and teaching workshops for local design students.',
  },
];
