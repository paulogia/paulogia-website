import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://paulogia.com',
  output: 'static',
  adapter: netlify(),
  build: {
    assets: 'assets'
  }
});
