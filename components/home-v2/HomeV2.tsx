'use client'

import { useEffect, useState } from 'react'
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

const sections = [
  {
    id: 'intro',
    num: '01',
    label: 'Intro',
    title: '高级产品设计师',
    note: 'B端 / AI应用 / 智能硬件方向',
  },
  {
    id: 'problems',
    num: '02',
    label: 'Problems',
    title: '我解决什么问题',
    note: '模糊需求、旧流程、静态 UI、开发前风险。',
  },
  {
    id: 'cases',
    num: '03',
    label: 'Cases',
    title: '核心案例',
    note: '复杂系统 / AI 应用 / 产品验证。',
  },
  {
    id: 'demo',
    num: '04',
    label: 'Demo',
    title: '可演示 Demo',
    note: '用低成本原型把判断提前。',
  },
  {
    id: 'framework',
    num: '05',
    label: 'Framework',
    title: '产品验证框架',
    note: '从需求边界到风险清单的协作结构。',
  },
  {
    id: 'more-work',
    num: '06',
    label: 'More Work',
    title: '更多项目',
    note: '工业园区、WMS、数据大屏、交互规范。',
  },
  {
    id: 'method',
    num: '07',
    label: 'Method',
    title: '方法',
    note: '先判断，再美化；先跑通，再扩展。',
  },
  {
    id: 'about',
    num: '08',
    label: 'About',
    title: '关于我',
    note: '复杂产品设计与早期产品验证搭档。',
  },
  {
    id: 'contact',
    num: '09',
    label: 'Contact',
    title: '联系',
    note: '让模糊想法先跑起来。',
  },
] as const

type SectionId = (typeof sections)[number]['id']

const topNavItems = [
  { label: '首页', href: '/' },
  { label: '项目', href: '/#works' },
  { label: '关于我', href: '/#about' },
  { label: '联系', href: '/#contact' },
] as const

const resumeHref = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'

function scrollToSection(id: SectionId) {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  })
}

function SectionRail({ activeSection }: { activeSection: SectionId }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-[80] hidden w-[160px] overflow-y-auto border-r border-[#E5E7EB] bg-[#FAFAFA] px-6 py-6 [scrollbar-width:none] lg:flex lg:h-screen lg:flex-col [&::-webkit-scrollbar]:hidden">
      <a
        href="#intro"
        className="mb-6 inline-flex items-start gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]"
        aria-label="回到首页开头"
      >
        <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 text-[#111111]" fill="currentColor" aria-hidden="true">
          <path d="M2 2h5.4l2.7 4.9L12.8 2H18v16h-5.2V9.9l-2.7 4.9-2.7-4.9V18H2V2z" />
        </svg>
        <span>
          <span className="block text-[14px] font-semibold leading-none tracking-[-0.02em] text-[#111111]">Miki Studio</span>
          <span className="mt-1 block text-[11px] font-medium leading-none tracking-[-0.01em] text-[#8A8F98]">Product Design</span>
        </span>
      </a>

      <div className="flex min-h-0 flex-1 items-start pb-12 pt-2 [@media(min-height:860px)]:items-center [@media(min-height:860px)]:pt-0">
        <nav className="relative w-full" aria-label="Section navigation">
          <span className="absolute bottom-[52px] left-[8.5px] top-2 w-px bg-[#E5E7EB]" aria-hidden="true" />
          {sections.map((section) => {
            const active = activeSection === section.id

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-label={`跳转到 ${section.num} ${section.label}`}
                aria-current={active ? 'page' : undefined}
                className="group relative grid min-h-[70px] grid-cols-[18px_minmax(0,1fr)] gap-5 rounded-[6px] text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] motion-reduce:transition-none"
              >
                <span
                  className={`relative z-10 mt-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full transition duration-200 motion-reduce:transition-none ${
                    active
                      ? 'border border-[#0037C5]/25 bg-white'
                      : ''
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`block rounded-full transition duration-200 motion-reduce:transition-none ${
                      active
                        ? 'h-2 w-2 bg-[#0037C5]'
                        : 'h-[5px] w-[5px] bg-[#C5CAD2] group-hover:bg-[#8A8F98]'
                    }`}
                  />
                </span>
                <span className="block">
                  <span
                    className={`block leading-none tracking-[-0.03em] transition-colors duration-200 motion-reduce:transition-none ${
                      active ? 'text-[#0037C5]' : 'text-[#9AA1AB] group-hover:text-[#555B64]'
                    }`}
                  >
                    <span className={active ? 'text-[16px] font-semibold' : 'text-[15px] font-medium'}>
                      {section.num}
                    </span>
                  </span>
                  <span
                    className={`mt-1 block text-[11px] font-medium leading-none transition-colors duration-200 motion-reduce:transition-none ${
                      active ? 'text-[#0037C5]' : 'text-[#A0A6AF] group-hover:text-[#555B64]'
                    }`}
                  >
                    {section.label}
                  </span>
                </span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="min-h-[52px] shrink-0 border-t border-[#E5E7EB] pt-4">
        <p className="text-[13px] font-medium tracking-[-0.02em] text-[#9AA1AB]">
          © 2026
        </p>
        <p className="mt-1.5 text-[12px] font-medium tracking-[-0.02em] text-[#9AA1AB]">
          Miki Studio
        </p>
      </div>
    </aside>
  )
}

function TopNavigation() {
  return (
    <nav
      aria-label="Global site navigation"
      className="fixed right-8 top-8 z-[70] hidden items-center gap-6 text-[13px] font-medium text-[#555B64] lg:flex xl:right-12"
    >
      {topNavItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="transition duration-200 hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
        >
          {item.label}
        </a>
      ))}
      <a
        href={resumeHref}
        className="inline-flex min-h-8 items-center rounded-full border border-[#D7DBE1]/85 bg-white/30 px-3 text-[12px] font-medium text-[#555B64] shadow-[0_2px_10px_rgba(17,17,17,0.06)] backdrop-blur-md transition duration-200 hover:border-[#0037C5]/70 hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
      >
        下载简历
      </a>
    </nav>
  )
}

function MobileGlobalNav() {
  return (
    <div className="sticky top-0 z-[80] border-b border-[#E2E4E8] bg-[#FAFAFA]/95 backdrop-blur-sm lg:hidden">
      <div className="flex min-h-16 items-center justify-between gap-3 px-5">
        <div>
          <p className="text-[14px] font-semibold text-[#111111]">Miki Studio</p>
          <p className="text-[11px] font-medium text-[#8A8F98]">Product Design</p>
        </div>
        <div className="flex min-w-0 items-center gap-3">
          <nav
            aria-label="Global site navigation"
            className="flex max-w-[56vw] items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {topNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 text-[13px] font-medium text-[#555B64] transition duration-200 hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={resumeHref}
            className="shrink-0 rounded-full border border-[#D7DBE1] px-2.5 py-1 text-[11px] font-medium text-[#555B64] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
          >
            简历
          </a>
        </div>
      </div>
    </div>
  )
}

export default function HomeV2() {
  const [activeSection, setActiveSection] = useState<SectionId>('intro')

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        const id = visibleEntry?.target.getAttribute('data-section-id') as SectionId | null

        if (id) {
          setActiveSection(id)
        }
      },
      {
        root: null,
        rootMargin: '-34% 0px -46% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main data-miki-v2 className="min-h-screen bg-[#FAFAFA] text-[#111111]">
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
      <SectionRail activeSection={activeSection} />
      <TopNavigation />
      <MobileGlobalNav />

      <div className="lg:ml-[160px]">
        <HeroV2 />
        <ProblemsSection />
        <CoreCasesSection />
        <DemoSection />
        <FrameworkSection />
        <MoreWorkSection />
        <MethodSection />
        <AboutSection />
        <ContactCTA />
      </div>

      <BackToTop />
    </main>
  )
}
