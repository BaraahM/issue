import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: false,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom', 'next'],
  format: ['esm', 'cjs'],
  minify: false,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  tsconfig: 'tsconfig.build.json',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  target: 'es2022',
}); 