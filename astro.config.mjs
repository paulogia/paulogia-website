import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paulogia.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
