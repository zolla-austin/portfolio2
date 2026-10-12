import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as simpleIcons from 'simple-icons'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const toolsPath = join(root, 'netlify', 'functions', 'data', 'tools.json')
const outDir = join(root, 'public', 'logos')

const slugAliases = {
  html: ['html5'],
  css: ['css', 'css3'],
  javascript: ['javascript'],
  typescript: ['typescript'],
  react: ['react'],
  'react-native': ['reactnative', 'react'],
  nextjs: ['nextdotjs'],
  tailwindcss: ['tailwindcss'],
  nodejs: ['nodedotjs'],
  express: ['express'],
  laravel: ['laravel'],
  postgresql: ['postgresql'],
  git: ['git'],
  github: ['github'],
}

const iconsBySlug = new Map(
  Object.values(simpleIcons)
    .filter((icon) => icon && typeof icon.slug === 'string')
    .map((icon) => [icon.slug, icon]),
)

function placeholder(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${name}"><rect width="24" height="24" rx="4" fill="#6c63ff"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#ffffff" font-family="sans-serif">${name.slice(0, 1)}</text></svg>`
}

function withVisibleFill(svg, hex) {
  const normalized = hex.toLowerCase()
  const tooDark = normalized === '000000' || normalized === '181717' || normalized === '000'
  const fill = tooDark ? '#f0f0f8' : `#${hex}`
  if (/fill="/i.test(svg)) {
    return svg.replace(/fill="[^"]*"/gi, `fill="${fill}"`)
  }
  return svg.replace('<svg', `<svg fill="${fill}"`)
}

const tools = JSON.parse(await readFile(toolsPath, 'utf8'))
await mkdir(outDir, { recursive: true })

const missing = []

for (const tool of tools) {
  const candidates = slugAliases[tool.id] || [tool.id]
  const icon = candidates.map((slug) => iconsBySlug.get(slug)).find(Boolean)
  const filePath = join(outDir, `${tool.id}.svg`)

  if (!icon) {
    missing.push(tool.name)
    await writeFile(filePath, placeholder(tool.name))
    continue
  }

  await writeFile(filePath, withVisibleFill(icon.svg, icon.hex))
}

if (missing.length) {
  console.log(`Placeholder logos: ${missing.join(', ')}`)
} else {
  console.log(`Wrote ${tools.length} logos to public/logos`)
}
