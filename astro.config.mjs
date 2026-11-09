// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const configuredSiteUrl = process.env.SITE_URL?.trim();
const parsedSiteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (
  parsedSiteUrl &&
  (!['http:', 'https:'].includes(parsedSiteUrl.protocol) ||
    parsedSiteUrl.pathname !== '/' ||
    parsedSiteUrl.search ||
    parsedSiteUrl.hash)
) {
  throw new Error('SITE_URL must be an absolute HTTP(S) origin without a path.');
}

export default defineConfig({
  output: 'static',
  ...(parsedSiteUrl ? { site: parsedSiteUrl.origin } : {}),
  integrations: parsedSiteUrl ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
