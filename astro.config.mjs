import { defineConfig } from 'astro/config';

// Update SITE_URL in src/config.ts (or set PUBLIC_SITE_URL env var) when deploying to your custom domain.
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://laidoffbench.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  compressHTML: true,
});
