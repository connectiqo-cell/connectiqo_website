import type { CSSProperties } from 'react'
import Photo from '../Photo'
import { VOICES } from '../content'

export default function Voices() {
  const featured = VOICES.slice(0, 2)
  const rest = VOICES.slice(2)

  return (
    <section className="cq-voices" aria-labelledby="voices-title">
      <div className="cq-wrap">
        <h2 className="cq-eyebrow" id="voices-title">Heard after the call</h2>

        <div className="cq-voices__featured">
          {featured.map((v, i) => (
            <figure key={v.name} className="cq-voice cq-voice--feature" data-reveal style={{ '--d': i } as CSSProperties}>
              <div className="cq-voice__photo">
                <Photo id={v.photo} sizes="(max-width: 767px) 100vw, 45vw" />
              </div>
              <blockquote><p>{v.quote}</p></blockquote>
              <figcaption>
                <span>
                  <span className="cq-voice__name">{v.name}</span>
                  <span className="cq-voice__role">{v.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="cq-voices__rest">
          {rest.map((v, i) => (
            <figure key={v.name} className="cq-voice" data-reveal style={{ '--d': i + 2 } as CSSProperties}>
              <blockquote><p>{v.quote}</p></blockquote>
              <figcaption>
                <div className="cq-avatar cq-avatar--sm">
                  <Photo id={v.photo} decorative label={false} sizes="48px" />
                </div>
                <span>
                  <span className="cq-voice__name">{v.name}</span>
                  <span className="cq-voice__role">{v.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
