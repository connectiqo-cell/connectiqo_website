import { Routes, Route } from 'react-router-dom'
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
import AboutUs from './components/AboutUs'

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <ForMentors />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App
