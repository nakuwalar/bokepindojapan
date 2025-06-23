import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bokepindojapan.pages.dev',
  output: 'server',
  adapter: cloudflare(),
  integrations: 
  
  [sitemap({
    changefreq: 'daily',
    priority: 1,
    }), react()],
});