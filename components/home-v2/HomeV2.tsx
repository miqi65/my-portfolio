'use client'

import { useEffect } from 'react'
import BackToTop from '../BackToTop'
import AboutSection from './AboutSection'
import ContactCTA from './ContactCTA'
import CoreCasesSection from './CoreCasesSection'
import DemoSection from './DemoSection'
import FrameworkSection from './FrameworkSection'
import HeroV2 from './HeroV2'
import MethodSection from './MethodSection'
import MoreWorkSection from './MoreWorkSection'
import ProblemsSection from './ProblemsSection'

export default function HomeV2() {
  useEffect(() => {
    const globalNavbar = document.querySelector('body > header') as HTMLElement | null
    const previousDisplay = globalNavbar?.style.display

    document.body.classList.add('miki-v2-preview')

    if (globalNavbar) {
      globalNavbar.style.display = 'none'
    }

    return () => {
      document.body.classList.remove('miki-v2-preview')

      if (globalNavbar) {
        globalNavbar.style.display = previousDisplay ?? ''
      }
    }
  }, [])

  return (
    <main data-miki-v2 className="min-h-screen overflow-x-hidden bg-[#F8F7F3] text-[#111111]">
      <style jsx global>{`
        body:has(main[data-miki-v2]) > header {
          display: none !important;
        }
        @media (pointer: fine) {
          body:has(main[data-miki-v2]),
          body:has(main[data-miki-v2]) *,
          body:has(main[data-miki-v2]) *::before,
          body:has(main[data-miki-v2]) *::after {
            cursor: auto !important;
          }
          body:has(main[data-miki-v2]) a,
          body:has(main[data-miki-v2]) button,
          body:has(main[data-miki-v2]) select {
            cursor: pointer !important;
          }
        }
      `}</style>

      <HeroV2 />
      <ProblemsSection />
      <CoreCasesSection />
      <DemoSection />
      <FrameworkSection />
      <MoreWorkSection />
      <MethodSection />
      <AboutSection />
      <ContactCTA />

      <BackToTop />
    </main>
  )
}
