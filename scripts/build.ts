/**
 * Build script: validates all src/*.json agent definitions
 * and writes a combined dist/agents.json manifest.
 *
 * Run: bun scripts/build.ts
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const srcDir = join(import.meta.dir, '..', 'src')
const outDir = join(import.meta.dir, '..', 'dist')

mkdirSync(outDir, { recursive: true })

const agents = readdirSync(srcDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => {
    const raw = readFileSync(join(srcDir, f), 'utf8')
    const agent = JSON.parse(raw)
    // Basic validation
    if (!agent.identifier) throw new Error(`${f}: missing "identifier"`)
    if (!agent.meta?.title) throw new Error(`${f}: missing "meta.title"`)
    return agent
  })
  .sort((a, b) => (a.identifier as string).localeCompare(b.identifier as string))

const outFile = join(outDir, 'agents.json')
writeFileSync(outFile, JSON.stringify({ agents }, null, 2) + '\n')

console.log(`✓ Built dist/agents.json with ${agents.length} agent(s):`)
agents.forEach((a) => console.log(`  · ${a.identifier}`))
