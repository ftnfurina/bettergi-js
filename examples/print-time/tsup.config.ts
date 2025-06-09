import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs'],
  outDir: 'dist/PrintTime',
  publicDir: 'public',
  banner: () => ({ js: '// This is a banner' }),
  outExtension: () => ({ js: '.js' }),
})
