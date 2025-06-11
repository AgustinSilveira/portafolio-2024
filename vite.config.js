import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteAliases } from 'vite-aliases';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    ViteAliases({
      'src': '/src',
    }),
    WindiCSS(),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
