/* global process */
// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = env.PUBLIC_SITE_URL || 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});