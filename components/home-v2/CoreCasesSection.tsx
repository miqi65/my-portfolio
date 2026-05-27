'use client'

import { motion } from 'framer-motion'

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
      { label: '我的角色', value: 'UI&UX' },
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
      { label: '我的角色', value: 'UI&UX' },
    ],
  },
  {
    num: '03',
    metaLabel: '03 / AI Workflow',
    name: 'AI 时代设计交付链路重构',
    description:
      '把设计规则、组件规范和原型验证转化为 Agent 可读取的交付系统，减少标注、解释和样式返工。',
    tags: ['Design System', 'Token', 'Figma MCP', 'Cursor'],
    href: '/Project_P3/index.html',
    previewMain: '/Project_P3/images/p3image-3.png',
    previewAlt: 'AI 设计交付链路重构封面图',
    previewPosition: 'object-top',
    info: [
      { label: '应用场景', value: '设计交付' },
      { label: '项目周期', value: '持续迭代' },
      { label: '我的角色', value: 'UI&UX' },
    ],
  },
]

function CasePreview({ item }: { item: CaseItem }) {
  const fitClass = item.num === '01' ? 'object-contain' : 'object-cover'

  return (
    <div className="h-full overflow-hidden rounded-[20px] border border-[rgba(16,24,40,0.08)] bg-[rgba(15,23,42,0.04)]">
      <img
        src={item.previewMain}
        alt={item.previewAlt}
        className={`h-full w-full ${fitClass} ${item.previewPosition ?? 'object-center'} transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        loading="lazy"
      />
    </div>
  )
}

function CaseCard({ item, index }: { item: CaseItem; index: number }) {
  const [metaNum, metaName = ''] = item.metaLabel.split('/').map((text) => text.trim())

  return (
    <motion.article
      aria-labelledby={`case-title-${item.num}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="case-card group flex h-[560px] flex-col overflow-hidden rounded-[24px] border border-[rgba(16,24,40,0.08)] bg-[rgba(255,255,255,0.9)] px-6 py-4 shadow-[0_24px_80px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(16,24,40,0.14)] hover:shadow-[0_30px_92px_rgba(15,23,42,0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="case-card-meta mb-5 flex items-center gap-4">
        <p className="case-card-kicker text-[13px] font-semibold uppercase leading-none tracking-[0.08em]">
          <span className="number text-[#123A6F]">{metaNum}</span>
          <span className="text-[rgba(15,23,42,0.48)]"> / {metaName}</span>
        </p>
      </div>

      <h3
        id={`case-title-${item.num}`}
        className={`case-card-title min-h-[40px] text-[24px] font-normal leading-[1.15] tracking-[-0.04em] text-[#101318] ${
          item.num === '01' ? 'max-w-[400px]' : 'max-w-full'
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
        className="case-card-description -mt-1 min-h-[56px] text-[14px] font-normal leading-[1.68] text-[rgba(15,23,42,0.62)]"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.description}
      </p>

      <p
        className="case-card-tags -mt-1 min-h-5 pt-0 text-[12px] leading-5 text-[rgba(15,23,42,0.52)]"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.tags.join(' / ')}
      </p>

      <div className="case-card-preview mt-5 h-[226px] flex-shrink-0">
        <CasePreview item={item} />
      </div>

      <div className="case-card-info mt-5 grid grid-cols-3 gap-4 border-t border-[rgba(16,24,40,0.08)] pt-5">
        {item.info.map((entry) => (
          <div key={entry.label} className="min-w-0">
            <p className="case-card-info-label text-[13px] font-normal leading-[1.4] text-[rgba(15,23,42,0.42)]">
              {entry.label}
            </p>
            <p className="case-card-info-value mt-2 h-5 truncate text-[14px] font-normal leading-5 text-[#101318]">
              {entry.value}
            </p>
          </div>
        ))}
      </div>

      <a
        href={item.href}
        className="case-card-link mt-5 inline-flex min-h-[44px] items-center gap-2 self-start px-1 text-[16px] font-bold leading-none text-[#123A6F] transition duration-200 hover:translate-x-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none motion-reduce:hover:translate-x-0"
        aria-label={`查看案例：${item.name}`}
      >
        查看案例
        <span aria-hidden="true">→</span>
      </a>
    </motion.article>
  )
}

export default function CoreCasesSection() {
  return (
    <section
      id="cases"
      data-section-id="cases"
      className="relative scroll-mt-16 overflow-hidden border-b border-[rgba(16,24,40,0.08)] bg-[#F8F7F3] px-4 py-24 sm:px-8 lg:scroll-mt-0 lg:px-12 xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(15,23,42,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.45)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-[1040px]"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1E3A8A]">
            03 / SELECTED WORK
          </p>
          <h2 className="mt-4 text-[48px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#111827]">
            项目
          </h2>
          <p className="mt-3 text-[17px] font-medium leading-7 text-[#4B5565]">
            复杂系统 / AI 应用 / 产品验证
          </p>
          <p className="mt-0 max-w-[920px] text-[16px] leading-7 text-[#5B6575]">
            用真实项目展示复杂系统、AI 应用和智能硬件产品从需求到方案落地的能力。
          </p>
        </motion.div>

        <div className="cases-grid mt-10 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3">
          {cases.map((item, index) => (
            <CaseCard key={item.num} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
