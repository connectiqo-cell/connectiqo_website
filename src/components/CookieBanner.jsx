import { useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cq_cookie_accepted'))

  function accept() {
    localStorage.setItem('cq_cookie_accepted', '1')
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
            <a href="#">Cookie Policy</a>.
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
