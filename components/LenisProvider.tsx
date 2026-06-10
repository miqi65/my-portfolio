'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const TOP_SNAP_THRESHOLD = 200

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const onScroll = (state: Lenis & { direction: number; scroll: number }) => {
      // Lenis can settle a few pixels short of the top after a long upward wheel.
      // Snap to the exact top while the user is actively scrolling upward near 0.
      if (state.direction < 0 && state.scroll > 0 && state.scroll < TOP_SNAP_THRESHOLD) {
        state.scrollTo(0, { immediate: true })
      }
    }

    requestAnimationFrame(raf)
    const unsubscribe = lenis.on('scroll', onScroll)

    return () => {
      unsubscribe()
      lenis.destroy()
    }
  }, [])

  return null
}
