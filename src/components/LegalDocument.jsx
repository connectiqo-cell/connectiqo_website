import { useEffect } from 'react'

function Block({ block, i }) {
  if (block.h3) return <h3 key={i} className="legal-h3">{block.h3}</h3>
  if (block.ul) {
    return (
      <ul key={i} className="legal-ul">
        {block.ul.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    )
  }
  return <p key={i} className="legal-p">{block.p}</p>
}

export default function LegalDocument({ meta, sections }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="legal-page">
      <div className="container">
        <h1 className="legal-title">{meta.documentName}</h1>
        <p className="legal-meta">
          Version {meta.version} &middot; {meta.status}<br />
          Effective Date: {meta.effectiveDate} &middot; Last Updated: {meta.lastUpdated}
        </p>

        <nav className="legal-toc" aria-label="Table of contents">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`}>{s.title}</a>
          ))}
        </nav>

        <div className="legal-body">
          {sections.map(section => (
            <div key={section.id} id={section.id} className="legal-section">
              <h2>{section.title}</h2>
              {section.body.map((block, i) => <Block key={i} block={block} i={i} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
