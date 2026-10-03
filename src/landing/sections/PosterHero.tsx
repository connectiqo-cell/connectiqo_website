import type { CSSProperties } from 'react'
import Photo from '../Photo'
import type { PhotoId } from '../photos'
import { SIGNUP_URL } from '../content'

// A hero that is one finished artwork: headline, notes and button are part of
// the image. The real <h1> is kept for screen readers and search engines, and
// an invisible link sits exactly over the painted "Get Started" button.
export type Poster = {
  photo: PhotoId
  /** width / height of the artwork */
  ratio: number
  /** The painted button, in % of the artwork: left, top, width, height. */
  cta: [number, number, number, number]
}

export const POSTERS: Poster[] = [
  { photo: 'hero-poster-1', ratio: 1600 / 595, cta: [4.7, 68.6, 10.8, 9] },
  { photo: 'hero-poster-2', ratio: 1600 / 657, cta: [4.4, 70.9, 10.4, 8.2] },
]

export default function PosterHero({ poster }: { poster: Poster }) {
  const [left, top, width, height] = poster.cta
  return (
    <section className="cq-poster" aria-labelledby="hero-title">
      <h1 id="hero-title" className="cq-sr">Ask. Learn. Collaborate. Grow. One conversation can open a new world.</h1>
      <div className="cq-poster__art" style={{ aspectRatio: poster.ratio } as CSSProperties}>
        <Photo id={poster.photo} priority decorative sizes="100vw" />
        <a
          href={SIGNUP_URL}
          className="cq-poster__cta"
          style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
        >
          <span className="cq-sr">Get started</span>
        </a>
      </div>
    </section>
  )
}
