/// <reference types="vitest" />
/// <reference types="node" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: false,
    environment: 'jsdom',
    silent: false,
    setupFiles: ['./bootstrap.tsx'],
    coverage: {
      all: true,
      include: [
        'src/**/*.tsx',
        '!src/**/*.stories.tsx',
        '!src/pages', // Pages should be tested in e2e
        '!!src/pages/**/components/**/*.tsx',
        '!src/**/index.ts', // useless to test re-exporters
        '!src/{App,main}.tsx', // Tested in e2e
      ],
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
