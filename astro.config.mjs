import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokepindojapan.pages.dev',
  output: 'hybrid',
  adapter: cloudflare(),
});