/* global process */
// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const site = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || 'https://example.com';
const rawBase = process.env.BASE_PATH || env.BASE_PATH || '/';
const normalizedBase = rawBase.startsWith('/') ? rawBase : `/${rawBase}`;
const base = normalizedBase === '/' ? '/' : `${normalizedBase.replace(/\/+$/, '')}/`;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});