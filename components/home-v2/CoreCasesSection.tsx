'use client'

import type { CSSProperties, PointerEvent } from 'react'
import { useRef } from 'react'

type CaseMeta = {
  label: string
  value: string
}

type CaseItem = {
  num: '01' | '02' | '03'
  metaLabel: string
  name: string
  description: string
  tags: string[]
  href: string
  previewMain: string
  previewAlt: string
  previewPosition?: 'object-center' | 'object-top'
  info: [CaseMeta, CaseMeta, CaseMeta]
}

const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

const cases: CaseItem[] = [
  {
    num: '01',
    metaLabel: '01 / AI HMI',
    name: '工业 AI 视觉质检系统',
    description:
      '把工程师工具界面重构为工厂现场可用的 AI 操作系统，让检测结果可理解、可接管、可追溯。',
    tags: ['工业视觉', '角色权限', '异常接管', '工控容错'],
    href: '/Project_P1/index.html',
    previewMain: '/Project_P1/images/p1-cover-hero.jpg',
    previewAlt: '工业 AI 视觉质检系统封面图',
    previewPosition: 'object-center',
    info: [
      { label: '客户行业', value: '智能制造' },
      { label: '项目周期', value: '3.5 个月' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
  {
    num: '02',
    metaLabel: '02 / MES',
    name: 'PCB 制造执行系统',
    description:
      '把老旧生产系统重构为可监控、可协同、可追踪的制造执行平台，提升生产过程透明度与协作效率。',
    tags: ['制造执行', '复杂流程', '订单追踪', '角色权限'],
    href: '/pcb/portfolio-PCB-2026.html',
    previewMain: '/images/pcb2026/108-screen.png',
    previewAlt: 'PCB 制造执行系统封面图',
    previewPosition: 'object-top',
    info: [
      { label: '客户行业', value: '制造执行' },
      { label: '项目周期', value: '2–3 个月' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
  {
    num: '03',
    metaLabel: '03 / AI Workflow',
    name: 'AI 时代设计交付链路重构',
    description:
      '把设计规则、组件规范和原型验证转化为 Agent 可读取的交付系统，减少标注、解释和样式返工。',
    tags: ['Design System', 'Figma MCP', 'Cursor'],
    href: '/Project_P3/index.html',
    previewMain: '/Project_P3/images/p3image-3.png',
    previewAlt: 'AI 设计交付链路重构封面图',
    previewPosition: 'object-top',
    info: [
      { label: '应用场景', value: '设计交付' },
      { label: '项目周期', value: '持续迭代' },
      { label: '我的角色', value: 'UI/UX' },
    ],
  },
]

function CasePreview({ item }: { item: CaseItem }) {
  return (
    <div className="h-full overflow-hidden rounded-[8px] bg-[#F4F4EF]">
      <img
        src={item.previewMain}
        alt={item.previewAlt}
        className={`h-full w-full object-cover ${item.previewPosition ?? 'object-center'} transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        loading="lazy"
      />
    </div>
  )
}

function CaseCard({ item }: { item: CaseItem }) {
  const [metaNum, metaName = ''] = item.metaLabel.split('/').map((text) => text.trim())

  return (
    <article
      aria-labelledby={`case-title-${item.num}`}
      className="case-card relative z-[var(--case-z,0)]"
      style={
        {
          '--case-scale': '1',
          '--case-z': '0',
          opacity: 1,
        } as CSSProperties
      }
    >
      <div
        className="case-card-surface group flex min-h-[440px] origin-center flex-col overflow-hidden rounded-[8px] border border-[rgba(16,24,40,0.08)] bg-white px-4 py-4 shadow-[0_16px_48px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-300 will-change-transform hover:border-[rgba(117,171,42,0.4)] hover:shadow-[0_24px_64px_rgba(15,23,42,0.1)] focus-within:border-[rgba(117,171,42,0.4)] focus-within:shadow-[0_24px_64px_rgba(15,23,42,0.1)] sm:px-6 motion-reduce:transition-none"
        style={{ transform: 'scale(var(--case-scale))' }}
      >
        <div className="case-card-meta flex items-center gap-4">
          <p className="case-card-kicker text-[12px] font-semibold uppercase leading-4 tracking-normal">
            <span className="number text-[#7FB12B]">{metaNum}</span>
            <span className="text-[rgba(15,23,42,0.42)]"> / {metaName}</span>
          </p>
        </div>

        <div className="case-card-preview mt-3 h-[164px] flex-shrink-0 sm:h-[184px] lg:h-[208px] xl:h-[196px]">
          <CasePreview item={item} />
        </div>

        <h3
          id={`case-title-${item.num}`}
          className={`case-card-title mt-9 min-h-8 text-[20px] font-semibold leading-6 tracking-normal text-[#101318] sm:text-[24px] sm:leading-7 ${
            item.num === '01' ? 'max-w-[360px]' : 'max-w-full'
          }`}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textWrap: 'balance',
          }}
        >
          {item.name}
        </h3>

        <p
          className="case-card-description mt-3 min-h-12 text-[12px] font-normal leading-5 text-[rgba(15,23,42,0.6)] sm:text-[14px] sm:leading-6"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.description}
        </p>

        <div className="case-card-tags mt-1 flex min-h-[28px] flex-wrap content-start gap-x-1 gap-y-0">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-6 items-center rounded-[8px] border border-[rgba(16,24,40,0.08)] bg-[#F8F7F3] px-3 text-[12px] leading-4 text-[rgba(15,23,42,0.55)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="case-card-info mt-3 grid grid-cols-3 gap-3 border-t border-[rgba(16,24,40,0.08)] pt-4">
          {item.info.map((entry) => (
            <div key={entry.label} className="min-w-0">
              <p className="case-card-info-label text-[12px] font-normal leading-4 text-[rgba(15,23,42,0.38)]">
                {entry.label}
              </p>
              <p className="case-card-info-value mt-1 h-5 truncate text-[12px] font-medium leading-5 text-[#101318]">
                {entry.value}
              </p>
            </div>
          ))}
        </div>

        <a
          href={item.href}
          className="case-card-link mt-4 inline-flex min-h-12 items-center gap-1 self-start text-[14px] font-bold leading-5 text-[#7FB12B] transition duration-200 hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FB12B] motion-reduce:transition-none motion-reduce:hover:translate-x-0"
          aria-label={`查看案例：${item.name}`}
        >
          查看案例
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default function CoreCasesSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  const resetCardScale = () => {
    const grid = gridRef.current

    if (!grid) {
      return
    }

    grid.querySelectorAll<HTMLElement>('.case-card').forEach((card) => {
      card.style.setProperty('--case-scale', '1')
      card.style.setProperty('--case-z', '0')
    })
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== 'mouse' ||
      window.innerWidth < 1024 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      resetCardScale()
      return
    }

    const grid = gridRef.current

    if (!grid || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    grid.querySelectorAll<HTMLElement>('.case-card').forEach((card) => {
      const rect = card.getBoundingClientRect()
      const distanceX = event.clientX - rect.left - rect.width / 2
      const distanceY = event.clientY - rect.top - rect.height / 2
      const distance = Math.hypot(distanceX, distanceY)
      const strength = Math.max(0, 1 - distance / 300)
      const scale = 1 + strength * 0.075

      card.style.setProperty('--case-scale', scale.toFixed(3))
      card.style.setProperty('--case-z', strength > 0.45 ? '2' : '0')
    })
  }

  return (
    <section
      id="cases"
      data-section-id="cases"
      className="relative scroll-mt-16 overflow-hidden border-b border-[rgba(16,24,40,0.08)] bg-[#F8F7F3] py-14 sm:py-20 lg:scroll-mt-0 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,rgba(15,23,42,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.45)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className={`relative ${SECTION_CONTAINER}`}>
        <div className="max-w-[820px]">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-normal text-[rgba(15,23,42,0.58)]">
            <span className="h-2 w-2 rounded-full bg-[#7FB12B]" aria-hidden="true" />
            02 / SELECTED WORK
          </p>
          <h2 className="mt-2 text-[44px] font-semibold leading-[56px] tracking-normal text-[#111111] sm:text-[56px] sm:leading-[68px] lg:text-[64px] lg:leading-[80px]">
            核心项目
          </h2>
          <p className="mt-4 text-[16px] font-semibold leading-6 text-[#252A31]">
            复杂系统 / AI 应用 / 产品验证
          </p>
          <p className="mt-2 max-w-[760px] text-[14px] leading-6 text-[rgba(15,23,42,0.58)] sm:text-[16px] sm:leading-7">
            用真实项目展示复杂系统、AI 应用和智能硬件产品从需求到方案落地的能力。
          </p>
        </div>

        <div
          ref={gridRef}
          className="cases-grid mt-6 grid grid-cols-1 items-stretch gap-5 sm:mt-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetCardScale}
          onBlur={resetCardScale}
        >
          {cases.map((item) => (
            <CaseCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
