// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages公開のため
  site: 'https://negi524.github.io',
  base: '/portfolio',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
