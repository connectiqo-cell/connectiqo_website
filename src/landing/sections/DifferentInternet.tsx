import Photo from '../Photo'

const NOTES = [
  ['less noise.', 'more nuance.'],
  ['less scrolling.', 'more listening.'],
  ['fewer feeds.', 'more faces.'],
  ['less performing.', 'more being heard.'],
]

export default function DifferentInternet() {
  return (
    <section id="about" className="cq-diff" aria-labelledby="diff-title">
      <div className="cq-diff__media" data-reveal="image">
        <Photo id="internet" mobileId="internet-mobile" sizes="100vw" label={false} />
      </div>
      {NOTES.map(([a, b], i) => (
        <p key={a} className={`cq-hand cq-diff__note cq-diff__note--${i + 1}`} aria-hidden="true">{a}<br />{b}</p>
      ))}
      <div className="cq-wrap cq-diff__inner">
        <h2 id="diff-title" className="cq-diff__title" data-reveal>
          Same people.<br />
          <span className="cq-serif">A different internet.</span>
        </h2>
        <p className="cq-diff__copy" data-reveal>
          The internet doesn’t have to be louder.<br />
          It can be more human.
        </p>
      </div>
    </section>
  )
}
