import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../content/blogs'

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="blog-index-page">
      <div className="container">
        <p className="section-label blog-index-label">Connectiqo Blog</p>
        <h1 className="blog-index-title">Guides to Earn, Connect and Grow</h1>
        <p className="blog-index-subtext">
          Practical guides on earning online, collaborating, building your personal brand and mentoring — from the Connectiqo team.
        </p>

        <div className="row g-4">
          {BLOG_POSTS.map(({ meta }) => (
            <div key={meta.slug} className="col-md-6 col-lg-4">
              <Link to={`/blog/${meta.slug}`} className="blog-card">
                <div className="blog-card-cover">
                  <img src={meta.coverImage} alt={meta.coverImageAlt} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-keyword">{meta.keyword}</span>
                  <h2 className="blog-card-title">{meta.title}</h2>
                  <p className="blog-card-excerpt">{meta.excerpt}</p>
                  <span className="blog-card-meta">{meta.readTime} &middot; Read article &rarr;</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
