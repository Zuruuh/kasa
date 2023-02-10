/// <reference types="vitest" />
/// <reference types="node" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: false,
    environment: 'jsdom',
    silent: false,
    setupFiles: ['./bootstrap.tsx'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
