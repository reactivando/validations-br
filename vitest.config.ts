import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/validations/**/*.ts'],
      exclude: [
        'src/**/__tests__',
        'src/validations/ie/states/index.ts',
        'src/validations/ie/index.ts',
        'src/index.ts',
      ],
      // Floor to keep CI from silently regressing; raise as gaps close.
      thresholds: {
        statements: 97,
        branches: 90,
        functions: 100,
        lines: 97,
      },
    },
  },
});
