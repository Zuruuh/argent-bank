/// <reference types="node" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import glob from 'fast-glob';

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
      reporter: process.env.CI === 'true' ? 'lcov' : 'html',
      reportsDirectory: 'coverage',
      all: true,
      include: glob
        .sync('src/**/*.{tsx,ts}')
        .filter(
          (file) =>
            !file.match(/index\.ts$/gi) &&
            !file.match(/src\/(App|main)\.tsx?$/gi) &&
            !file.match(/^.*\.stories\.tsx?$/gi) &&
            !file.match(/^.*\.spec\.tsx?$/gi) &&
            !file.match(/^src\/pages\/[^/.]+\/[^/.]+\.(config\.)?tsx?$/gi) &&
            !file.match(/^src\/shared\/ladle/gi)
        ),
    },
  },
});
