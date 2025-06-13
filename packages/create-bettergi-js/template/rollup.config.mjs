import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

export default defineConfig({
  plugins: [
    typescript(),
    copy({ targets: [{ src: 'public/*', dest: 'dist' }] }),
    { name: 'watch-public', buildStart() { this.addWatchFile('public') } },
    del({ targets: ['dist'] }),
  ],
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
})
