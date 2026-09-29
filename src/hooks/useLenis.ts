import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { applyShellScroller } from '@/lib/scrolltrigger'
import type Lenis from 'lenis'

export const SCROLLER_ID = 'main-content'

export function getScroller(): HTMLElement | null {
  return document.getElementById(SCROLLER_ID)
}

export function useLenis() {
  const { pathname } = useLocation()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const isMobile = window.matchMedia('(pointer: coarse) and (hover: none)').matches
    const isNarrow = window.innerWidth < 900
    if (isMobile || isNarrow) return

    let cancelled = false
    let cleanup = () => {}

    void (async () => {
      const [{ default: LenisClass }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      applyShellScroller(ScrollTrigger)

      const panel = getScroller()
      const usesPanel = !!panel && window.innerWidth >= 1100
      const content = document.getElementById('scroller-content') || (panel?.firstElementChild as HTMLElement | undefined)

      const lenis = new LenisClass({
        ...(usesPanel && content ? { wrapper: panel, content } : usesPanel ? { wrapper: panel } : {}),
        duration: 0.75,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.15,
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      // Hand every Lenis scroll update to ScrollTrigger.
      lenis.on('scroll', ScrollTrigger.update)

      // Drive Lenis from GSAP's ticker so RAF stays unified.
      const tick = (time: number) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      // Dynamic resize observer on the content container
      let ro: ResizeObserver | null = null
      if (content && typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(() => {
          lenis.resize()
        })
        ro.observe(content)
      }

      const onResize = () => {
        lenis.resize()
      }
      window.addEventListener('resize', onResize)

      // Intercept in-page anchor clicks (#about, #works, #contact, etc.)
      const NAV_OFFSET = -88
      const onAnchorClick = (e: MouseEvent) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        const link = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]')
        if (!link) return
        const href = link.getAttribute('href')
        if (!href || href === '#') return
        if (href === `#${SCROLLER_ID}`) return

        if (href === '#top') {
          e.preventDefault()
          lenis.scrollTo(0, { duration: 0.8 })
          history.replaceState(null, '', ' ')
          return
        }
        const target = document.querySelector(href) as HTMLElement | null
        if (!target) return
        e.preventDefault()
        lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 0.8 })
        history.replaceState(null, '', href)
      }
      document.addEventListener('click', onAnchorClick)

      cleanup = () => {
        ro?.disconnect()
        window.removeEventListener('resize', onResize)
        document.removeEventListener('click', onAnchorClick)
        gsap.ticker.remove(tick)
        lenis.destroy()
        lenisRef.current = null
      }
    })()

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  // On route change, reset scroll to top and trigger Lenis resize
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
      requestAnimationFrame(() => {
        lenisRef.current?.resize()
      })
      setTimeout(() => {
        lenisRef.current?.resize()
      }, 80)
    }
  }, [pathname])
}
