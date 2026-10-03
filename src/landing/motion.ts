import { useEffect, type RefObject } from 'react'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Adds `is-in` to every [data-reveal] element under `root` the first time it
 * scrolls into view. The hidden state only applies once `cq-js` is on <html>,
 * so content is never stuck invisible without JS or IntersectionObserver.
 */
export function useReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current
    if (!el || !('IntersectionObserver' in window)) return
    document.documentElement.classList.add('cq-js')

    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -12% 0px' })

    el.querySelectorAll('[data-reveal]').forEach(node => io.observe(node))
    return () => io.disconnect()
  }, [root])
}

/**
 * Writes --sy (scroll offset within the element, px) and --px / --py
 * (pointer position, -1…1) onto `target` for CSS-driven parallax.
 * Does nothing when the user prefers reduced motion.
 */
export function useParallax(target: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = target.current
    if (!el || reducedMotion()) return

    let frame = 0
    let pointer: { x: number; y: number } | null = null

    const paint = () => {
      frame = 0
      el.style.setProperty('--sy', String(Math.min(window.scrollY, el.offsetHeight)))
      if (pointer) {
        el.style.setProperty('--px', pointer.x.toFixed(3))
        el.style.setProperty('--py', pointer.y.toFixed(3))
      }
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint) }
    const onPointer = (e: PointerEvent) => {
      pointer = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 }
      schedule()
    }

    const finePointer = window.matchMedia('(pointer: fine)').matches
    window.addEventListener('scroll', schedule, { passive: true })
    if (finePointer) el.addEventListener('pointermove', onPointer, { passive: true })
    paint()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      el.removeEventListener('pointermove', onPointer)
    }
  }, [target])
}
