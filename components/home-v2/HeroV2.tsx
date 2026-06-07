'use client'

import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

const ASSET = '/images/home-v2/hero'
const RESUME_HREF = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'
const HERO_BACKGROUND_GLOW = `${ASSET}/ellipse-1.png`

/** 1280 内容区，与 v2 其他 section 留白节奏一致 */
const HERO_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

const HERO_CTA_SIZE =
  'inline-flex h-12 min-h-12 shrink-0 cursor-pointer items-center box-border py-0 text-[14px] leading-none'

const heroIcons = {
  logo: `${ASSET}/logo.svg`,
  glow: `${ASSET}/glow-ellipse.png`,
  flow: {
    step01: `${ASSET}/flow/step-01.svg`,
    step02: `${ASSET}/flow/step-02.svg`,
    step03: `${ASSET}/flow/step-03.svg`,
    step04: `${ASSET}/flow/step-04.svg`,
    step05: `${ASSET}/flow/step-05.svg`,
  },
  keyElements: {
    ai: `${ASSET}/key-elements/icon-ai.svg`,
    role: `${ASSET}/key-elements/icon-role.svg`,
    task: `${ASSET}/key-elements/icon-task.svg`,
    risk: `${ASSET}/key-elements/icon-risk.svg`,
    verify: `${ASSET}/key-elements/icon-verify.png`,
  },
  capability: {
    focus: `${ASSET}/capability/cap-focus.svg`,
    experience: `${ASSET}/capability/cap-experience.svg`,
    method: `${ASSET}/capability/cap-method.svg`,
    delivery: `${ASSET}/capability/cap-delivery.svg`,
  },
} as const

type HeroV2NavItem = {
  label: string
  href: string
  active?: boolean
}

const defaultNavItems: HeroV2NavItem[] = [
  { label: '首页', href: '#intro', active: true },
  { label: '作品', href: '#cases' },
  { label: '方法', href: '#method' },
  { label: '关于我', href: '#about' },
  { label: '联系', href: '#contact' },
]

const skillTags = [
  'B端系统',
  '工业软件',
  'AI应用',
  '智能硬件',
  'HMI',
  '交互设计',
  'Design System',
] as const

type FlowStep = {
  id: string
  title: string
  items: string[]
  badge: string
  icon: string
}

const flowSteps: FlowStep[] = [
  {
    id: '01',
    title: '模糊需求',
    items: ['需求收集与澄清', '痛点与目标识别', '业务背景与场景分析'],
    badge: '需求边界定义',
    icon: heroIcons.flow.step01,
  },
  {
    id: '02',
    title: '流程拆解',
    items: ['业务流程梳理', '角色与任务映射', '信息流与数据流梳理'],
    badge: '流程图 / 任务清单',
    icon: heroIcons.flow.step02,
  },
  {
    id: '03',
    title: '原型验证',
    items: ['低保真原型设计', '关键路径验证', '可用性快速测试'],
    badge: '可验证 / 反馈记录',
    icon: heroIcons.flow.step03,
  },
  {
    id: '04',
    title: '风险识别',
    items: ['技术实现风险', '体验可行性风险', '人机协作边界校验'],
    badge: '风险清单 / 应对策略',
    icon: heroIcons.flow.step04,
  },
  {
    id: '05',
    title: '决策支持',
    items: ['方案对比与取舍', '投入产出评估', '下一步行动建议'],
    badge: '决策建议 / 路线图',
    icon: heroIcons.flow.step05,
  },
]

const keyElements = [
  {
    title: 'AI 协作边界',
    body: '明确人机分工，保障系统可控、结果可信。',
    icon: heroIcons.keyElements.ai,
  },
  {
    title: '角色',
    body: '梳理多角色职责，统一目标、权限与使用视角。',
    icon: heroIcons.keyElements.role,
  },
  {
    title: '任务',
    body: '聚焦核心任务闭环，减少无效跳转与操作干扰。',
    icon: heroIcons.keyElements.task,
  },
  {
    title: '风险',
    body: '前置识别体验、技术与落地风险，降低项目不确定性。',
    icon: heroIcons.keyElements.risk,
  },
  {
    title: '验证',
    body: '用原型和反馈驱动判断，让方案更快迭代、持续收敛。',
    icon: heroIcons.keyElements.verify,
  },
] as const

const capabilityCards = [
  {
    label: 'PROJECT',
    title: 'AI 视觉质检系统',
    body: '工业 AI / HMI / 机器视觉结果呈现',
    icon: heroIcons.capability.focus,
  },
  {
    label: 'IMPACT',
    title: 'PCB 系统 90+ 产线验证',
    body: '管理效率 +28%，工程导入耗时 -17%',
    icon: heroIcons.capability.experience,
  },
  {
    label: 'ROLE',
    title: '从需求拆解到原型验证',
    body: '流程、原型、Design System 与交付协作',
    icon: heroIcons.capability.method,
  },
  {
    label: 'OUTPUT',
    title: '可落地方案闭环',
    body: '决策依据、风险清单、路线图与交互规范',
    icon: heroIcons.capability.delivery,
  },
] as const

const appliedProjectTags = ['AI 视觉质检系统', 'PCB 系统', '智能仓储管理系统'] as const

function HeroIcon({
  src,
  size,
  className = '',
}: {
  src: string
  size: number
  className?: string
}) {
  if (src.endsWith('.svg')) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="" width={size} height={size} className={className} decoding="async" />
    )
  }
  return <Image src={src} alt="" width={size} height={size} className={className} />
}

function FlowArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 shrink-0 text-[#65992b]" fill="none">
      <path
        d="M4 8h7M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  )
}

function FlowStepCard({
  step,
  className = '',
}: {
  step: FlowStep
  className?: string
}) {
  return (
    <article className={`group flex h-[236px] min-w-0 w-full flex-col ${className}`}>
      <div
        className="flex h-full w-full flex-col rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-4 pb-4 pt-5 transition duration-200 group-hover:border-[#a6e22e]/40 group-hover:bg-[rgba(166,226,46,0.07)] group-hover:shadow-[0_0_28px_rgba(166,226,46,0.1)]"
      >
        <p className="font-['Space_Grotesk'] text-[11px] font-medium leading-4 tracking-[0.88px] text-[#a6e22e]">
          {step.id}
        </p>
        <div className="flex h-8 shrink-0 items-center justify-center py-1">
          <HeroIcon src={step.icon} size={32} className="size-8 object-contain" />
        </div>
        <h3 className="shrink-0 text-center text-[13px] font-bold leading-5 text-[#f2f5ef]">{step.title}</h3>
        <ul className="mt-2 flex min-h-[72px] flex-1 flex-col gap-1">
          {step.items.map((item) => (
            <li key={item} className="flex gap-2 text-[11px] leading-4 text-[#6f776b]">
              <span className="mt-1 shrink-0 text-[8px] leading-none text-[#65992b]">▸</span>
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex shrink-0 justify-center pt-2">
          <span className="flex h-8 w-full max-w-full items-center justify-center rounded-[8px] border border-[rgba(101,153,43,0.3)] bg-[rgba(101,153,43,0.15)] px-2 text-center text-[9px] font-medium leading-4 text-[#a6e22e] sm:text-[10px]">
            {step.badge}
          </span>
        </div>
      </div>
    </article>
  )
}

const FLOW_ARROW_SLOT = 'w-4 shrink-0'
const FLOW_STEP_DESKTOP_GRID = 'lg:grid-cols-[132px_1fr_132px_1fr_132px_1fr_132px_1fr_132px]'

function FlowStepsRow() {
  return (
    <>
      {/* Desktop: card and arrow columns alternate so arrows stay centered in the interval. */}
      <div className={`hidden w-full min-w-0 lg:grid lg:items-stretch ${FLOW_STEP_DESKTOP_GRID}`}>
        {flowSteps.map((step, index) => (
          <Fragment key={step.id}>
            <div className="relative min-w-0">
              <FlowStepCard step={step} />
            </div>
            {index < flowSteps.length - 1 ? (
              <div
                className="pointer-events-none flex min-w-0 items-center justify-center"
                aria-hidden
              >
                <FlowArrow />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      {/* Mobile / tablet: horizontal scroll（不突破页面宽度） */}
      <div className="overflow-x-auto [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max items-stretch gap-2 pr-4">
          {flowSteps.map((step, index) => (
            <Fragment key={step.id}>
              <div className="w-[120px] shrink-0 sm:w-[124px]">
                <FlowStepCard step={step} />
              </div>
              {index < flowSteps.length - 1 ? (
                <div className={`flex ${FLOW_ARROW_SLOT} items-center justify-center self-center`}>
                  <FlowArrow />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

function FlowDiagram() {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[8px] border border-white/[0.08] bg-[rgba(8,11,7,0.56)] px-4 py-6 shadow-[0_0_80px_rgba(166,226,46,0.04)] sm:px-5 sm:py-8 lg:px-6 lg:py-8">
      <div className="border-b border-white/[0.08] pb-4">
        <div className="min-w-0">
          <h2 className="text-[18px] font-bold leading-6 text-[#f2f5ef]">产品验证流程</h2>
          <p className="mt-1 text-[13px] leading-5 text-[#6f776b]">
            从模糊需求到清晰方案，从原型验证到决策支持
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="font-['Space_Grotesk'] text-[9px] font-medium uppercase tracking-[1.44px] text-[#6f776b]">
              Applied in
            </span>
            {appliedProjectTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] leading-[14px] text-[#a7aea1]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 min-w-0">
        <FlowStepsRow />
      </div>

      <div className="mt-6 hidden border-t border-white/[0.08] pt-5 sm:block">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-6">
          <div className="shrink-0 text-[10px] leading-[15px] text-[#6f776b]">
            <p>关键要素</p>
            <p className="pt-0.5">全程贯穿</p>
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {keyElements.map((item) => (
              <div key={item.title} className="flex min-w-0 gap-2">
                <HeroIcon src={item.icon} size={18} className="mt-0.5 size-[18px] shrink-0 object-contain" />
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-[18px] text-[#f2f5ef]">{item.title}</p>
                  <p className="mt-0.5 text-[10px] leading-[15px] text-[#6f776b]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CapabilityBar() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityCards.map((card, index) => (
          <div
            key={card.label}
            className={[
              'flex min-h-[128px] items-start gap-3 border-white/[0.08] p-5 sm:p-8 lg:px-6',
              index < capabilityCards.length - 1 ? 'border-b sm:border-b-0' : '',
              index % 2 === 0 ? 'sm:border-r' : '',
              index < capabilityCards.length - 1 ? 'lg:border-r' : '',
              index < 2 ? 'sm:border-b' : 'sm:border-b-0',
              'lg:border-b-0',
            ].join(' ')}
          >
            <HeroIcon src={card.icon} size={56} className="size-14 shrink-0 object-contain" />
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="font-['Space_Grotesk'] text-[10px] font-medium uppercase tracking-[1.6px] text-[#6f776b]">
                {card.label}
              </p>
              <p className="mt-2 text-[15px] font-bold leading-5 text-[#f2f5ef]">{card.title}</p>
              <p className="mt-2 text-[13px] leading-6 text-[#a7aea1]">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

type HeroV2Props = {
  navItems?: HeroV2NavItem[]
  primaryCtaHref?: string
  primaryCtaLabel?: string
}

export default function HeroV2({
  navItems = defaultNavItems,
  primaryCtaHref = '#cases',
  primaryCtaLabel = '查看核心案例',
}: HeroV2Props = {}) {
  const [navOpen, setNavOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => navItems.find((item) => item.active)?.href ?? '#intro')

  useEffect(() => {
    const sectionEntries = navItems
      .filter((item) => item.href.startsWith('#'))
      .map((item) => ({
        href: item.href,
        section: document.getElementById(item.href.slice(1)),
      }))
      .filter((entry): entry is { href: string; section: HTMLElement } => Boolean(entry.section))

    const updateActiveHref = () => {
      const activationLine = window.innerHeight * 0.35
      let nextHref = sectionEntries[0]?.href ?? '#intro'

      sectionEntries.forEach(({ href, section }) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          nextHref = href
        }
      })

      if (window.location.hash && sectionEntries.some((entry) => entry.href === window.location.hash)) {
        const hashSection = document.getElementById(window.location.hash.slice(1))
        const hashRect = hashSection?.getBoundingClientRect()

        if (hashRect && hashRect.top < window.innerHeight && hashRect.bottom > 0) {
          nextHref = window.location.hash
        }
      }

      document.querySelectorAll<HTMLAnchorElement>('[data-miki-nav-href]').forEach((link) => {
        if (link.dataset.mikiNavHref === nextHref) {
          link.setAttribute('aria-current', 'page')
        } else {
          link.removeAttribute('aria-current')
        }
      })

      setActiveHref(nextHref)
    }

    updateActiveHref()
    const timeout = window.setTimeout(updateActiveHref, 250)

    window.addEventListener('hashchange', updateActiveHref)
    window.addEventListener('resize', updateActiveHref)
    window.addEventListener('scroll', updateActiveHref, { passive: true })

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('hashchange', updateActiveHref)
      window.removeEventListener('resize', updateActiveHref)
      window.removeEventListener('scroll', updateActiveHref)
    }
  }, [navItems])

  return (
    <section
      id="intro"
      data-section-id="intro"
      className="relative w-full scroll-mt-16 overflow-x-hidden bg-[#050505] text-[#f2f5ef] lg:scroll-mt-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[-112px] z-0 h-[360px] w-[280px] bg-[length:100%_100%] bg-no-repeat opacity-40 sm:right-[-96px] sm:h-[520px] sm:w-[404px] sm:opacity-50 lg:right-0 lg:top-[-120px] lg:h-[572px] lg:w-[444px] lg:opacity-55"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_GLOW})` }}
      />
      <header className="relative z-20 border-b border-[#000000] bg-[rgba(3,5,3,0.40)] shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[24px] backdrop-saturate-150">
        <div className={`${HERO_CONTAINER} flex h-16 items-center justify-between gap-4`}>
          <a
            href="#intro"
            className="flex shrink-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a6e22e]"
          >
            <HeroIcon src={heroIcons.logo} size={32} className="size-8" />
            <div>
              <p className="font-['Space_Grotesk'] text-[15px] font-bold tracking-[1.2px] text-[#f2f5ef]">MIKI</p>
              <p className="text-[9px] font-medium tracking-[1.26px] text-[#6f776b]">SENIOR PRODUCT DESIGNER</p>
            </div>
          </a>

          <nav aria-label="主导航" className="ml-auto hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const isActive = activeHref === item.href || (!activeHref && 'active' in item && item.active)

              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-miki-nav-href={item.href}
                  className={`relative pb-1 text-[14px] leading-[21px] transition-colors hover:text-[#f2f5ef] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a6e22e] ${
                    isActive
                    ? 'font-medium text-[#f2f5ef] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-sm after:bg-[#a6e22e]'
                    : 'text-[#a7aea1]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-white/[0.05] text-[#f2f5ef] md:hidden"
              aria-expanded={navOpen}
              aria-controls="hero-mobile-nav"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="sr-only">{navOpen ? '关闭菜单' : '打开菜单'}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                {navOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {navOpen ? (
          <nav id="hero-mobile-nav" className={`${HERO_CONTAINER} py-4 md:hidden`} aria-label="移动端导航">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeHref === item.href || (!activeHref && 'active' in item && item.active)

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      data-miki-nav-href={item.href}
                      className={`block cursor-pointer rounded-lg px-3 py-3 text-[14px] ${
                        isActive
                        ? 'bg-[rgba(166,226,46,0.12)] font-medium text-[#a6e22e]'
                        : 'text-[#a7aea1]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setNavOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        ) : null}
      </header>

      <div className={`${HERO_CONTAINER} relative z-10 pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-[88px]`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-10">
          {/* 桌面：列宽仅由「高级产品设计师」决定；超出部分换行，余量给右侧流程图 */}
          <div className="relative w-full min-w-0 shrink-0">
            <div className="w-full lg:grid">
              <div
                aria-hidden
                className="pointer-events-none invisible col-start-1 row-start-1 hidden whitespace-nowrap text-[36px] font-bold tracking-normal sm:text-[48px] lg:block lg:text-[56px]"
              >
                高级产品设计师
              </div>
              <div className="col-start-1 row-start-1 w-full min-w-0 break-words lg:w-0 lg:min-w-full lg:max-w-full">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[1.98px] text-[#6f776b]">
                  <span className="size-1 shrink-0 rounded-full bg-[#a6e22e]" aria-hidden="true" />
                  Senior Product Designer
                </p>

                <h1 className="relative mt-3">
                  <span className="relative block whitespace-nowrap text-[36px] font-bold leading-[1.05] tracking-normal text-[#f2f5ef] sm:text-[48px] lg:text-[56px]">
                    高级产品设计师
                  </span>
                  <p className="hero-direction relative mt-1 text-[28px] font-normal leading-8 text-[#f2f5ef] sm:text-[32px] sm:leading-[40px]">
                    <span className="block whitespace-nowrap">B端 / AI应用 / 智能硬件方向</span>
                  </p>
                </h1>

                <p className="mt-4 text-[20px] font-medium leading-8 sm:text-[24px]">
                  <span className="text-[#a6e22e]">AI辅助</span>
                  <span className="text-[#a7aea1]"> 原型验证与产品方案落地</span>
                </p>

                <p className="mt-4 max-w-[32rem] text-[14px] leading-5 text-[#6f776b] lg:max-w-none lg:text-pretty">
                  把模糊需求变成可验证原型、清晰决策和可落地方案，帮助团队更快判断方向，减少沟通、返工和无效开发
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skillTags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`${index > 3 ? 'hidden sm:inline-flex' : 'inline-flex'} h-7 items-center gap-2 rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-3 text-[12px] tracking-[0.24px] text-[#6f776b]`}
                    >
                      <span className="size-1 shrink-0 rounded-full bg-[#a6e22e]" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={primaryCtaHref}
                    className={`${HERO_CTA_SIZE} group justify-between gap-3 rounded-lg border border-transparent bg-[#a6e22e] pl-6 pr-2 font-bold text-[#030503] transition hover:bg-[#b8f24a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a6e22e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] sm:min-w-[148px]`}
                  >
                    {primaryCtaLabel}
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#030503]/10">
                      <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                        <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={RESUME_HREF}
                    download
                    className={`${HERO_CTA_SIZE} justify-center gap-2 rounded-lg border border-white/[0.12] bg-transparent px-6 font-medium text-[#f2f5ef] transition hover:border-[#a6e22e]/40 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a6e22e]`}
                  >
                    下载简历
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <FlowDiagram />
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <CapabilityBar />
        </div>
      </div>
    </section>
  )
}
