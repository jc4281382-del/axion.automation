import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://axion-automation.pages.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
