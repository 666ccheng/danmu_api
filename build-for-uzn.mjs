// build-for-uzn.mjs
import { mkdirSync, writeFileSync, readFileSync } from 'fs'
import { build } from 'esbuild'
import crypto from 'crypto'

mkdirSync('./dist', { recursive: true })

await build({
  // ✅ 入口已经写死 danmu_api/server.js
  entryPoints: ['./danmu_api/server.js'],
  outfile: './dist/danmu_api_server.cjs',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  external: [],
})

const buf = readFileSync('./dist/danmu_api_server.cjs')
const md5 = crypto.createHash('md5').update(buf).digest('hex')
writeFileSync('./dist/danmu_api_server.cjs.md5', md5)
console.log('✅打包完成，md5:', md5)
