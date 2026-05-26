'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    num: '01',
    name: '工业 AI 视觉质检系统',
    headline: '把工程师工具界面重构为工厂现场可用的 AI 操作系统',
    tags: ['AI HMI', '工业视觉', '角色权限', '异常接管', '工控容错'],
    href: '/Project_P1/index.html',
    industry: '工业 AI / 制造质检',
    cycle: '0-1 产品验证',
    role: '产品策略 / UX / HMI',
    variant: 'vision',
  },
  {
    num: '02',
    name: 'PCB 制造执行系统',
    headline: '把老旧生产系统重构为可监控、可协同、可追踪的制造执行平台',
    tags: ['MES', '制造执行', '生产看板', '异常预警', '订单追踪'],
    href: '/pcb/portfolio-PCB-2026.html',
    industry: 'PCB 制造 / MES',
    cycle: '系统重构',
    role: '体验架构 / 设计系统',
    variant: 'pcb',
  },
  {
    num: '03',
    name: 'AI 时代设计交付链路重构',
    headline: '把设计规则变成 Agent 可读取的交付系统，减少标注、解释和样式返工',
    tags: ['Design System', 'Token', 'Figma MCP', 'Cursor', 'Agent-readable Rules'],
    href: '/Project_P3/index.html',
    industry: 'AI 设计工程化',
    cycle: '交付链路验证',
    role: '方法设计 / 规则系统',
    variant: 'delivery',
  },
] as const

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function PreviewMockup({ variant }: { variant: (typeof cases)[number]['variant'] }) {
  if (variant === 'pcb') {
    return (
      <div className="h-full p-5">
        <div className="flex h-full flex-col rounded-[8px] border border-[#D7DBE1] bg-white">
          <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#E2E4E8] px-4 py-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
                MES Control
              </p>
              <p className="mt-1 text-[13px] font-semibold text-[#111111]">
                Production Trace
              </p>
            </div>
            <span className="flex items-center gap-2 text-[11px] font-medium text-[#126B4E]">
              <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
              live
            </span>
          </div>
          <div className="grid flex-1 gap-3 p-4">
            {['订单追踪', '异常预警', '工序协同'].map((item, index) => (
              <div key={item} className="grid grid-cols-[72px_minmax(0,1fr)_38px] items-center gap-3">
                <span className="text-[11px] font-medium text-[#6F7680]">{item}</span>
                <span className="h-2 rounded-full bg-[#E2E4E8]">
                  <span
                    className="block h-2 rounded-full bg-[#0037C5]"
                    style={{ width: `${70 - index * 12}%` }}
                  />
                </span>
                <span className="text-right text-[11px] font-semibold text-[#20242A]">
                  {index === 0 ? '84%' : index === 1 ? '62%' : '48%'}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 border-t border-[#E2E4E8]">
            {['看板', '批次', '告警'].map((item) => (
              <div key={item} className="border-r border-[#E2E4E8] p-3 text-center last:border-r-0">
                <p className="text-[11px] font-medium text-[#8A8F98]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'delivery') {
    return (
      <div className="h-full p-5">
        <div className="grid h-full gap-3 rounded-[8px] border border-[#D7DBE1] bg-white p-4">
          <div className="flex items-center justify-between border-b border-[#E2E4E8] pb-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
              Agent-readable Rules
            </p>
            <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
          </div>
          {[
            ['Token', '颜色 / 间距 / 字号'],
            ['Component', '状态 / 约束 / 变体'],
            ['MCP', '读取 / 校验 / 生成'],
          ].map(([label, value], index) => (
            <div key={label} className="grid grid-cols-[86px_minmax(0,1fr)] items-center gap-3">
              <div className={index === 1 ? 'rounded-[6px] border border-[#0037C5] bg-[#F8FAFF] px-3 py-3' : 'rounded-[6px] border border-[#E2E4E8] px-3 py-3'}>
                <p className="text-[12px] font-semibold text-[#20242A]">{label}</p>
              </div>
              <div className="rounded-[6px] border border-[#E2E4E8] bg-[#FAFAFA] px-3 py-3">
                <p className="text-[11px] font-medium text-[#6F7680]">{value}</p>
              </div>
            </div>
          ))}
          <div className="mt-1 h-px bg-[#E2E4E8]" />
          <p className="text-[11px] font-semibold text-[#0037C5]">
            Cursor / Figma MCP / Design System
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full p-5">
      <div className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto] rounded-[8px] border border-[#D7DBE1] bg-white">
        <div className="flex items-center justify-between border-b border-[#E2E4E8] px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
            AI Vision HMI
          </p>
          <span className="rounded-full border border-[#0037C5] px-2 py-1 text-[10px] font-semibold text-[#0037C5]">
            active
          </span>
        </div>
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-3 p-4">
          <div className="rounded-[6px] border border-[#E2E4E8] bg-[#FAFAFA] p-3">
            <div className="h-20 rounded-[5px] border border-[#0037C5] bg-white" />
            <div className="mt-3 grid gap-2">
              <span className="h-2 rounded-full bg-[#D7DBE1]" />
              <span className="h-2 w-3/4 rounded-full bg-[#D7DBE1]" />
            </div>
          </div>
          <div className="grid gap-2">
            {['缺陷识别', '人工复核', '异常接管'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-[6px] border border-[#E2E4E8] bg-[#FAFAFA] px-3 py-2">
                <span className="text-[11px] font-medium text-[#20242A]">{item}</span>
                <span className={index === 1 ? 'h-2 w-2 rounded-full bg-[#0037C5]' : 'h-2 w-2 rounded-full bg-[#2EB67D]'} />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-[#E2E4E8] px-4 py-3 text-[11px] font-medium text-[#6F7680]">
          Confidence / Human takeover / Permission
        </div>
      </div>
    </div>
  )
}

export default function CoreCasesSection() {
  return (
    <section
      id="cases"
      data-section-id="cases"
      className="scroll-mt-16 border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5 border-b border-[#D7DBE1] pb-10 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
            03 / 复杂系统 / AI 应用 / 产品验证
          </p>
          <h2 className="mt-4 text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111111] md:text-[72px]">
            核心案例
          </h2>
        </div>
        <p className="max-w-xl text-[17px] leading-[1.8] text-[#5D626B]">
          复杂系统 / AI 应用 / 产品验证
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {cases.map((item, index) => {
          const active = index === 1

          return (
            <motion.a
              key={item.num}
              href={item.href}
              aria-label={`查看${item.name}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.52, delay: index * 0.05 }}
              className={`group flex min-h-[640px] cursor-pointer flex-col rounded-[8px] border bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0037C5] hover:shadow-[0_18px_48px_rgba(17,17,17,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                active
                  ? 'border-[#0037C5] shadow-[0_16px_42px_rgba(0,55,197,0.08)]'
                  : 'border-[#E2E4E8] shadow-[0_8px_28px_rgba(17,17,17,0.035)]'
              }`}
            >
              <div className="flex min-h-[214px] flex-col justify-between border-b border-[#E2E4E8] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className={active ? 'text-[12px] font-semibold text-[#0037C5]' : 'text-[12px] font-semibold text-[#7A828E]'}>
                    {item.num}
                  </span>
                  <span className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-medium ${
                    active ? 'border-[#0037C5] text-[#0037C5]' : 'border-[#D7DBE1] text-[#7A828E]'
                  }`}>
                    <span className={active ? 'h-1.5 w-1.5 rounded-full bg-[#0037C5]' : 'h-1.5 w-1.5 rounded-full bg-[#C5CAD2]'} />
                    Case
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#20242A]">
                    {item.name}
                  </p>
                  <h3 className="mt-4 text-[26px] font-semibold leading-[1.16] tracking-[-0.03em] text-[#111111]">
                    {item.headline}
                  </h3>
                </div>
              </div>

              <div className="h-[260px] border-b border-[#E2E4E8] bg-[#F4F5F7]">
                <PreviewMockup variant={item.variant} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#D7DBE1] px-3 py-1 text-[12px] font-medium text-[#5D626B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid divide-y divide-[#E2E4E8] border-t border-[#E2E4E8] pt-2">
                  {[
                    ['客户行业', item.industry],
                    ['项目周期', item.cycle],
                    ['我的角色', item.role],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 py-3">
                      <span className="text-[12px] text-[#8A8F98]">
                        {label}
                      </span>
                      <span className="text-[13px] font-medium text-[#24272D]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0037C5]">
                  查看项目
                  <ArrowIcon />
                </span>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
