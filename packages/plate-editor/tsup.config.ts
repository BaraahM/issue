import { defineConfig } from 'tsup';
import { copyFileSync } from 'fs';
import { join } from 'path';

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
  async onSuccess() {
    // Copy the globals.css file to dist directory
    try {
      copyFileSync(
        join(__dirname, 'src/app/globals.css'),
        join(__dirname, 'dist/globals.css')
      );
      console.log('✅ Copied globals.css to dist/');
    } catch (error) {
      console.error('❌ Failed to copy globals.css:', error);
    }
  },
}); 