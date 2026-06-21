'use client'

import { useEffect } from 'react'
import HeroV3 from './HeroV3'
import ProductValidationPathV3 from './ProductValidationPathV3'
import CoreCasesV3 from './CoreCasesV3'
import ProblemSolvingV3 from './ProblemSolvingV3'
import MoreWorkV3 from './MoreWorkV3'
import MethodV3 from './MethodV3'
import AboutV3 from './AboutV3'
import ContactV3 from './ContactV3'
import { GlobalFlowBackdropV3 } from './SectionBackdropV3'

export default function HomeV3() {
  useEffect(() => {
    const globalHeader = document.querySelector('body > header') as HTMLElement
    const prevDisplay = globalHeader?.style.display

    document.body.classList.add('miki-v3-preview')
    document.documentElement.classList.add('miki-v3-preview-html')
    if (globalHeader) globalHeader.style.display = 'none'

    const syncNav = () => {
      const hash = window.location.hash || '#intro'
      document.querySelectorAll<HTMLAnchorElement>('[data-miki-nav-href]').forEach(el => {
        if (el.dataset.mikiNavHref === hash) el.style.color = '#B8E351'
        else el.style.color = '#A7AEA1'
      })
    }
    syncNav()
    window.addEventListener('hashchange', syncNav)

    return () => {
      document.body.classList.remove('miki-v3-preview')
      document.documentElement.classList.remove('miki-v3-preview-html')
      if (globalHeader) globalHeader.style.display = prevDisplay ?? ''
      window.removeEventListener('hashchange', syncNav)
    }
  }, [])

  return (
    <main data-miki-v3 className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-[#F2F5EF] selection:bg-[#B8E351] selection:text-[#0A0A0A]">
      <style jsx global>{`
        html.miki-v3-preview-html, body.miki-v3-preview {
          background: #0A0A0A !important;
          scrollbar-width: none !important;
          scroll-behavior: smooth;
        }
        body.miki-v3-preview::-webkit-scrollbar { display: none !important; }
      `}</style>
      
      <GlobalFlowBackdropV3 />
      
      <div className="relative z-10 font-sans antialiased">
        <HeroV3 />
        <ProductValidationPathV3 />
        <CoreCasesV3 />
        <ProblemSolvingV3 />
        <MoreWorkV3 />
        <MethodV3 />
        <AboutV3 />
        <ContactV3 />
      </div>
    </main>
  )
}