import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import RouteTracker from './components/RouteTracker'
import RouteMeta from './components/RouteMeta'
import Landing from './landing/Landing'

// Everything except the homepage is split out so the landing page ships only
// its own code.
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./components/TermsOfService'))
const CookiePolicy = lazy(() => import('./components/CookiePolicy'))
const BlogIndex = lazy(() => import('./components/BlogIndex'))
const BlogArticle = lazy(() => import('./components/blog/BlogArticle'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {
  return (
    <>
      <RouteTracker />
      <RouteMeta />
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
