import { defineConfig } from 'tsdown';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'lib',
  format: ['esm', 'cjs'],
  dts: true,
  plugins: [
    visualizer({
      filename: 'stats.html',
      open: false,
    }),
  ],
});
