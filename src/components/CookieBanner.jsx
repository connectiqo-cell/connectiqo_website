import { useState } from 'react'
import { Link } from 'react-router-dom'
import { loadAnalytics } from '../lib/analytics'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cq_cookie_accepted'))

  function accept() {
    localStorage.setItem('cq_cookie_accepted', '1')
    loadAnalytics()
    setVisible(false)
  }

  function decline() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <p>
            We use cookies to improve your experience. By continuing you accept our{' '}
            <Link to="/cookies">Cookie Policy</Link>.
          </p>
          <div className="d-flex gap-2">
            <button className="btn-cookie decline" onClick={decline}>Decline</button>
            <button className="btn-cookie accept" onClick={accept}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}
