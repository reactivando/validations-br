import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/__tests__/**/*.ts'],
  outDir: 'lib',
  format: ['esm', 'cjs'],
  dts: true,
  unbundle: true,
});
