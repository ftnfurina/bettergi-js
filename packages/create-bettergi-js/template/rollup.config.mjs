import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const outDirs = ['dist']

export default defineConfig({
  input: 'src/index.ts',
  output: outDirs.map(dir => ({ dir, format: 'esm' })),
  plugins: [
    typescript(),
    copy({ targets: [{ src: 'public/*', dest: outDirs }] }),
    { name: 'watch-public', buildStart() { this.addWatchFile('public') } },
    del({ targets: outDirs, force: true }),
  ],
})
