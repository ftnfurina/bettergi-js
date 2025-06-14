import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const outDirs = ['dist/UseFunc']

export default defineConfig({
  input: 'src/index.ts',
  output: outDirs.map(dir => ({ dir, format: 'esm' })),
  plugins: [
    resolve(),
    typescript(),
    copy({ targets: [{ src: 'public/*', dest: outDirs }] }),
    { name: 'watch-public', buildStart() { this.addWatchFile('public') } },
    del({ targets: outDirs, force: true }),
  ],
})
