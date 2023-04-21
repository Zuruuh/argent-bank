/// <reference types="node" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  test: {
    globals: false,
    environment: 'jsdom',
    silent: false,
    setupFiles: ['./bootstrap.tsx'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      provider: 'c8',
      reporter: 'html',
      reportsDirectory: 'coverage',
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
});
