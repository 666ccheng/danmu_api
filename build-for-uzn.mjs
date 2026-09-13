import { build } from 'esbuild'

await build({
  entryPoints: ['./danmu_api/index.js'],
  outfile: 'danmu_api_server.cjs',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  minify: true
})
