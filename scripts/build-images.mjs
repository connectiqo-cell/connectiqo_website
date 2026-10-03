// Turns high-res originals in photos/originals/ into responsive AVIF + WebP
// variants in public/img/p/, and writes src/landing/photos.generated.json,
// which <Photo> reads to switch a placeholder over to the real image.
//
//   photos/originals/hero.jpg  ->  public/img/p/hero-{480..3840}.{avif,webp}
//
// The file name (minus extension) must match a key in src/landing/photos.ts.
// Images are never upscaled: the largest variant is the original's own width.
//
// Run: npm run images

import sharp from 'sharp'
import { readdir, mkdir, writeFile, rm } from 'node:fs/promises'
import path from 'node:path'

const SRC_DIR = 'photos/originals'
const OUT_DIR = 'public/img/p'
const MANIFEST = 'src/landing/photos.generated.json'
const WIDTHS = [480, 768, 1080, 1440, 1920, 2560, 3200, 3840, 4800]
const MAX_WIDTH = WIDTHS.at(-1)

const files = (await readdir(SRC_DIR).catch(() => []))
  .filter(f => /\.(jpe?g|png|tiff?|webp|avif)$/i.test(f))
  .sort()

await rm(OUT_DIR, { recursive: true, force: true })
await mkdir(OUT_DIR, { recursive: true })

const manifest = {}

for (const file of files) {
  const id = path.parse(file).name
  const input = path.join(SRC_DIR, file)
  const meta = await sharp(input).metadata()
  // EXIF orientations 5–8 are rotated 90°, so the displayed size is swapped.
  const [width, height] = (meta.orientation ?? 1) >= 5
    ? [meta.height, meta.width]
    : [meta.width, meta.height]

  const widths = WIDTHS.filter(w => w < width)
  if (width <= MAX_WIDTH) widths.push(width)

  for (const w of widths) {
    const base = sharp(input).rotate().resize({ width: w })
    await base.clone().avif({ quality: 55, effort: 5 }).toFile(`${OUT_DIR}/${id}-${w}.avif`)
    await base.clone().webp({ quality: 80 }).toFile(`${OUT_DIR}/${id}-${w}.webp`)
  }

  const { dominant } = await sharp(input).stats()
  const lqip = await sharp(input).rotate().resize({ width: 24 }).blur(1.5).webp({ quality: 40 }).toBuffer()

  manifest[id] = {
    width,
    height,
    widths,
    color: `rgb(${dominant.r} ${dominant.g} ${dominant.b})`,
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
  }
  console.log(`✓ ${id}  ${width}×${height}  →  ${widths.join(', ')}`)
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
console.log(`\n${files.length} photo(s) processed → ${MANIFEST}`)
