import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  esbuild: {
    jsx: 'automatic'
  },
  server: {
    port: 5173
  },
  preview: {
    port: 4173
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
