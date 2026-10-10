import type { CSSProperties } from 'react'
import Photo from '../Photo'
import { VOICES } from '../content'

export default function Voices() {
  const featured = VOICES.slice(0, 2)

  return (
    <section className="cq-voices" aria-labelledby="voices-title">
      <div className="cq-wrap">
        <h2 className="cq-eyebrow" id="voices-title">Heard after the call</h2>

        <div className="cq-voices__featured">
          {featured.map((v, i) => (
            <figure key={v.name} className="cq-voice cq-voice--feature" data-reveal style={{ '--d': i } as CSSProperties}>
              <div className="cq-voice__photo">
                <Photo id={v.photo} sizes="(max-width: 767px) 100vw, 45vw" position="50% 30%" />
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
      </div>
    </section>
  )
}
