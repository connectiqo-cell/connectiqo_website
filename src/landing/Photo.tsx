import type { CSSProperties } from 'react'
import { preload } from 'react-dom'
import { PHOTOS, type PhotoId } from './photos'
import generated from './photos.generated.json'

type Generated = { width: number; height: number; widths: number[]; color: string; lqip: string }

const GENERATED = generated as Record<string, Generated | undefined>
const BASE = '/img/p/'
const MOBILE_MEDIA = '(max-width: 767px)'

const srcSet = (id: string, widths: number[], ext: 'avif' | 'webp') =>
  widths.map(w => `${BASE}${id}-${w}.${ext} ${w}w`).join(', ')

if (import.meta.env.DEV) {
  for (const [id, gen] of Object.entries(GENERATED)) {
    const spec = PHOTOS[id as PhotoId]
    if (!spec) console.warn(`[photos] "${id}" has no entry in photos.ts`)
    else if (gen && gen.width < spec.minWidth) {
      console.warn(`[photos] "${id}" is ${gen.width}px wide; it needs at least ${spec.minWidth}px to stay sharp.`)
    }
  }
}

type PhotoProps = {
  id: PhotoId
  /** Rendered width, e.g. "(max-width: 767px) 100vw, 40vw". Keep it honest. */
  sizes: string
  /** Separate crop served below 768px. */
  mobileId?: PhotoId
  /** Above-the-fold: eager load, high fetch priority, preloaded. */
  priority?: boolean
  /** Hide from assistive tech (the surrounding element already describes it). */
  decorative?: boolean
  /** CSS object-position for the crop. */
  position?: string
  /** Show the brief on the placeholder. Off for small tiles. */
  label?: boolean
  className?: string
}

function Placeholder({ id, decorative, label, className }: Pick<PhotoProps, 'id' | 'decorative' | 'label' | 'className'>) {
  const spec = PHOTOS[id]
  const style = { '--ph-a': spec.tone[0], '--ph-b': spec.tone[1] } as CSSProperties
  return (
    <div
      className={`cq-ph ${className ?? ''}`}
      style={style}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : spec.alt}
      aria-hidden={decorative || undefined}
      data-photo={id}
    >
      {label && (
        <span className="cq-ph__label" aria-hidden="true">
          <span className="cq-ph__tag">Photo · {id}</span>
          <span className="cq-ph__brief">{spec.brief}</span>
          <span className="cq-ph__size">≥ {spec.minWidth}px wide</span>
        </span>
      )}
    </div>
  )
}

export default function Photo({ id, sizes, mobileId, priority, decorative, position, label = true, className }: PhotoProps) {
  const gen = GENERATED[id]
  const mobile = mobileId ? GENERATED[mobileId] : undefined

  if (!gen) {
    if (!mobileId) return <Placeholder id={id} decorative={decorative} label={label} className={className} />
    return (
      <>
        <Placeholder id={id} decorative={decorative} label={label} className={`cq-ph--desk ${className ?? ''}`} />
        <Placeholder id={mobileId} decorative={decorative} label={label} className={`cq-ph--mob ${className ?? ''}`} />
      </>
    )
  }

  if (priority) {
    if (mobile && mobileId) {
      preload(`${BASE}${mobileId}-${mobile.widths[0]}.avif`, {
        as: 'image', type: 'image/avif', fetchPriority: 'high', media: MOBILE_MEDIA,
        imageSrcSet: srcSet(mobileId, mobile.widths, 'avif'), imageSizes: '100vw',
      })
    }
    preload(`${BASE}${id}-${gen.widths[0]}.avif`, {
      as: 'image', type: 'image/avif', fetchPriority: 'high',
      media: mobile ? '(min-width: 768px)' : undefined,
      imageSrcSet: srcSet(id, gen.widths, 'avif'), imageSizes: sizes,
    })
  }

  const fallbackWidth = gen.widths.find(w => w >= 1440) ?? gen.widths.at(-1)!
  const spec = PHOTOS[id]

  return (
    <picture
      className={`cq-photo ${className ?? ''}`}
      style={{ backgroundColor: gen.color, backgroundImage: `url(${gen.lqip})` }}
    >
      {mobile && mobileId && (
        <>
          <source media={MOBILE_MEDIA} type="image/avif" srcSet={srcSet(mobileId, mobile.widths, 'avif')} sizes="100vw" />
          <source media={MOBILE_MEDIA} type="image/webp" srcSet={srcSet(mobileId, mobile.widths, 'webp')} sizes="100vw" />
        </>
      )}
      <source type="image/avif" srcSet={srcSet(id, gen.widths, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(id, gen.widths, 'webp')} sizes={sizes} />
      <img
        src={`${BASE}${id}-${fallbackWidth}.webp`}
        alt={decorative ? '' : spec.alt}
        width={gen.width}
        height={gen.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        style={position ? { objectPosition: position } : undefined}
      />
    </picture>
  )
}
