import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import '@fontsource-variable/geist'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource-variable/caveat'
import './landing.css'
import { useReveal } from './motion'
import Hero from './sections/Hero'
import Connection from './sections/Connection'
import Talk from './sections/Talk'
import Discovery from './sections/Discovery'
import Questions from './sections/Questions'
import Conversation from './sections/Conversation'
import DifferentInternet from './sections/DifferentInternet'
import Creators from './sections/Creators'
import Brands from './sections/Brands'
import Voices from './sections/Voices'
import Interests from './sections/Interests'
import Why from './sections/Why'
import FinalCta from './sections/FinalCta'

export default function Landing() {
  const root = useRef<HTMLDivElement>(null)
  const { hash } = useLocation()
  useReveal(root)

  // Arriving from another route via "/#section" (see HashLink).
  useEffect(() => {
    if (!hash) return
    const id = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    return () => clearTimeout(id)
  }, [hash])

  return (
    <div ref={root} className="cq">
      <Hero />
      <Connection />
      <Talk />
      <Discovery />
      <Questions />
      <Conversation />
      <DifferentInternet />
      <Creators />
      <Brands />
      <Voices />
      <Interests />
      <Why />
      <FinalCta />
    </div>
  )
}
