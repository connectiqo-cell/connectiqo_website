import { Link, useLocation } from 'react-router-dom'

// Renders a plain in-page anchor when already on the homepage (so native
// smooth-scroll handles it), or a router Link to "/#hash" from any other
// route (Home then scrolls to it on mount — see the effect in App.jsx).
export default function HashLink({ hash, children, ...props }) {
  const location = useLocation()
  if (location.pathname === '/') {
    return <a href={hash} {...props}>{children}</a>
  }
  return <Link to={`/${hash}`} {...props}>{children}</Link>
}
