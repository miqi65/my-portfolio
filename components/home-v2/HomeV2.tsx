'use client'

import { useEffect } from 'react'
import CoreCasesSection from './CoreCasesSection'
import HeroV2 from './HeroV2'
import AboutMkSection from './AboutMkSection'
import ContactCTA from './ContactCTA'
import { MethodSection } from './MethodSection'
import ProblemSolvingSection from './ProblemSolvingSection'
import MoreWorkSection from './MoreWorkSection'
import { GlobalFlowBackdrop } from './SectionGradientBackdrop'
import { V2_MIXED_TEXT_STACK } from './fontStacks'

export default function HomeV2() {
  useEffect(() => {
    const globalNavbar = document.querySelector('body > header') as HTMLElement | null
    const previousDisplay = globalNavbar?.style.display

    document.body.classList.add('miki-v2-preview')
    document.documentElement.classList.add('miki-v2-preview-html')

    if (globalNavbar) {
      globalNavbar.style.display = 'none'
    }

    const syncNavCurrent = () => {
      const hash = window.location.hash
      const activeHash = ['#cases', '#method', '#about', '#contact'].includes(hash) ? hash : '#intro'

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
      document.documentElement.classList.remove('miki-v2-preview-html')
      window.clearTimeout(navSyncTimeout)
      window.removeEventListener('hashchange', syncNavCurrent)

      if (globalNavbar) {
        globalNavbar.style.display = previousDisplay ?? ''
      }
    }
  }, [])

  return (
    <main
      data-miki-v2
      className="relative min-h-screen overflow-x-hidden bg-[#F8F7F3] text-[#111111]"
      style={{ fontFamily: V2_MIXED_TEXT_STACK }}
    >
      <style jsx global>{`
        html.miki-v2-preview-html,
        html.miki-v2-preview-html body,
        body.miki-v2-preview {
          scrollbar-width: none !important;
          scrollbar-color: transparent transparent !important;
          -ms-overflow-style: none;
        }
        html.miki-v2-preview-html::-webkit-scrollbar,
        html.miki-v2-preview-html body::-webkit-scrollbar,
        body.miki-v2-preview::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }
        html.miki-v2-preview-html::-webkit-scrollbar-thumb,
        html.miki-v2-preview-html body::-webkit-scrollbar-thumb,
        body.miki-v2-preview::-webkit-scrollbar-thumb {
          background: transparent !important;
        }
        body.miki-v2-preview > header {
          display: none !important;
        }
        @media (pointer: fine) {
          body.miki-v2-preview,
          body.miki-v2-preview *,
          body.miki-v2-preview *::before,
          body.miki-v2-preview *::after {
            cursor: auto !important;
          }
          body.miki-v2-preview a,
          body.miki-v2-preview button,
          body.miki-v2-preview select {
            cursor: pointer !important;
          }
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href],
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href],
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href],
        body:has(#contact:target) nav[aria-label='主导航'] a[data-miki-nav-href] {
          color: #a7aea1 !important;
          font-weight: 400 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after,
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after,
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after,
        body:has(#contact:target) nav[aria-label='主导航'] a[data-miki-nav-href]::after {
          opacity: 0 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href='#cases'],
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href='#method'],
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href='#about'],
        body:has(#contact:target) nav[aria-label='主导航'] a[data-miki-nav-href='#contact'] {
          color: #f2f5ef !important;
          font-weight: 500 !important;
        }
        body:has(#cases:target) nav[aria-label='主导航'] a[data-miki-nav-href='#cases']::after,
        body:has(#method:target) nav[aria-label='主导航'] a[data-miki-nav-href='#method']::after,
        body:has(#about:target) nav[aria-label='主导航'] a[data-miki-nav-href='#about']::after,
        body:has(#contact:target) nav[aria-label='主导航'] a[data-miki-nav-href='#contact']::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          border-radius: 2px;
          background: #1ed760;
          opacity: 1 !important;
        }
        body:has(#cases:target) nav[aria-label='移动端导航'] a[data-miki-nav-href],
        body:has(#method:target) nav[aria-label='移动端导航'] a[data-miki-nav-href],
        body:has(#about:target) nav[aria-label='移动端导航'] a[data-miki-nav-href],
        body:has(#contact:target) nav[aria-label='移动端导航'] a[data-miki-nav-href] {
          background: transparent !important;
          color: #a7aea1 !important;
          font-weight: 400 !important;
        }
        body:has(#cases:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#cases'],
        body:has(#method:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#method'],
        body:has(#about:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#about'],
        body:has(#contact:target) nav[aria-label='移动端导航'] a[data-miki-nav-href='#contact'] {
          background: rgba(30, 215, 96, 0.12) !important;
          color: #1ed760 !important;
          font-weight: 500 !important;
        }
      `}</style>
      <GlobalFlowBackdrop />
      <div className="relative z-10">
        <HeroV2 />
        <CoreCasesSection />
        <ProblemSolvingSection />
        <MoreWorkSection />
        <MethodSection />
        <AboutMkSection />
        <ContactCTA />
      </div>
    </main>
  )
}
