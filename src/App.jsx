import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Categories from './components/Categories'
import ForMentors from './components/ForMentors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'
import RouteTracker from './components/RouteTracker'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => clearTimeout(id)
  }, [location.hash])

  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <AboutUs />
      <ForMentors />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <RouteTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
