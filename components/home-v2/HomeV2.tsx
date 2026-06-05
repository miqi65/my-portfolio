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

    const syncNavCurrent = () => {
      const hash = window.location.hash
      const activeHash = ['#cases', '#method', '#about'].includes(hash) ? hash : '#intro'

      document.querySelectorAll<HTMLAnchorElement>('[data-miki-nav-href]').forEach((link) => {
        if (link.dataset.mikiNavHref === activeHash) {
          link.setAttribute('aria-current', 'page')
        } else {
          link.removeAttribute('aria-current')
        }
      })
    }

    syncNavCurrent()
    const navSyncTimeout = window.setTimeout(syncNavCurrent, 250)
    window.addEventListener('hashchange', syncNavCurrent)

    return () => {
      document.body.classList.remove('miki-v2-preview')
      window.clearTimeout(navSyncTimeout)
      window.removeEventListener('hashchange', syncNavCurrent)

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
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href],
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href],
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href] {
          color: #a7aea1 !important;
          font-weight: 400 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after,
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after,
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after {
          opacity: 0 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href='#cases'],
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href='#method'],
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href='#about'] {
          color: #f2f5ef !important;
          font-weight: 500 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href='#cases']::after,
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href='#method']::after,
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href='#about']::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          border-radius: 2px;
          background: #a6e22e;
          opacity: 1 !important;
        }
        body:has(#cases:target) nav[aria-label='移动端导航'] a[data-miki-nav-href],
        body:has(#method:target) nav[aria-label='移动端导航'] a[data-miki-nav-href],
        body:has(#about:target) nav[aria-label='移动端导航'] a[data-miki-nav-href] {
          background: transparent !important;
          color: #a7aea1 !important;
          font-weight: 400 !important;
        }
        body:has(#cases:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#cases'],
        body:has(#method:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#method'],
        body:has(#about:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#about'] {
          background: rgba(166, 226, 46, 0.12) !important;
          color: #a6e22e !important;
          font-weight: 500 !important;
        }
      `}</style>

      <HeroV2 />
      <CoreCasesSection />
      <ProblemsSection />
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
