import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs'],
  outDir: 'dist',
  publicDir: 'public',
  outExtension: () => ({ js: '.js' }),
})
