import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arrow-si.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
});
