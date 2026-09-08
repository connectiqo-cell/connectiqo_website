import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container text-center">
        <p className="nf-code">404</p>
        <h1 className="nf-title">Page not found</h1>
        <p className="nf-subtext">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-contact">Back to Home</Link>
      </div>
    </section>
  )
}
