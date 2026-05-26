'use client'

import { motion } from 'framer-motion'

const resumeHref = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'

const chips = [
  'B端复杂系统',
  '工业软件',
  'AI应用',
  '智能硬件',
  'HMI',
  'Agent Workflow',
]

const meta = [
  ['Focus', 'B端 / AI应用 / 智能硬件'],
  ['Experience', '8+ 年产品设计经验'],
  ['Method', 'AI 辅助 × 结构化设计'],
  ['Delivery', '从原型到落地的闭环'],
  ['Location', 'Remote / Worldwide'],
]

const diagramSteps = [
  {
    num: '01',
    title: '模糊需求',
    lines: ['信息分散 / 需求模糊', '目标不清 / 范围不明确'],
    visual: 'idea',
  },
  {
    num: '02',
    title: '流程拆解',
    lines: ['梳理业务流程', '识别关键路径与依赖'],
    visual: 'flow',
  },
  {
    num: '03',
    title: 'Demo 原型',
    lines: ['可演示原型 / 交互验证', '快速对齐关键角色'],
    visual: 'prototype',
    active: true,
  },
  {
    num: '04',
    title: '风险清单',
    lines: ['开发前风险识别', '技术 / 体验 / 业务 / 依赖'],
    visual: 'risk',
  },
  {
    num: '05',
    title: '老板决策卡',
    lines: ['方案摘要 / 价值评估', '决策依据提前可追踪'],
    visual: 'decision',
    verified: true,
  },
] as const

type DiagramStep = (typeof diagramSteps)[number]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
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

function IdeaClusterVisual() {
  const nodes = [
    'left-[18px] top-[18px] h-1.5 w-1.5',
    'right-[22px] top-[16px] h-2 w-2',
    'left-[30px] bottom-[20px] h-2 w-2',
    'right-[34px] bottom-[18px] h-1.5 w-1.5',
    'left-1/2 top-[12px] h-1.5 w-1.5',
    'left-[54%] bottom-[12px] h-1.5 w-1.5',
  ]

  return (
    <div className="relative h-[78px] rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA]">
      <div className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#AEB4BD]" />
      <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D7DBE1] bg-white text-center text-[16px] font-semibold leading-7 text-[#555B64]">
        ?
      </div>
      {nodes.map((node) => (
        <span key={node} className={`absolute ${node} rounded-full bg-[#AEB4BD]`} />
      ))}
      <span className="absolute left-[31px] top-[24px] h-px w-12 rotate-[22deg] bg-[#D7DBE1]" />
      <span className="absolute right-[32px] top-[27px] h-px w-10 -rotate-[24deg] bg-[#D7DBE1]" />
      <span className="absolute bottom-[25px] left-[38px] h-px w-11 -rotate-[18deg] bg-[#D7DBE1]" />
    </div>
  )
}

function FlowchartVisual() {
  return (
    <div className="relative h-[78px] rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-2.5">
      <div className="grid h-full grid-cols-[1fr_20px_1fr] grid-rows-2 gap-y-3">
        {['角色', '任务', '边界', '异常'].map((item, index) => (
          <div
            key={item}
            className={`rounded-[5px] border bg-white px-2 py-1.5 text-[10px] font-medium text-[#555B64] ${
              index === 1 ? 'border-[#0037C5] text-[#0037C5]' : 'border-[#D7DBE1]'
            } ${index % 2 === 0 ? 'col-start-1' : 'col-start-3'}`}
          >
            {item}
          </div>
        ))}
      </div>
      <span className="absolute left-[43%] top-[27px] h-px w-8 bg-[#AEB4BD]" />
      <span className="absolute left-[50%] top-[47px] h-px w-8 -rotate-45 bg-[#AEB4BD]" />
      <span className="absolute bottom-[28px] left-[42%] h-px w-8 bg-[#AEB4BD]" />
    </div>
  )
}

function PrototypeVisual() {
  return (
    <div className="h-[78px] rounded-[8px] border border-[#0037C5]/40 bg-[#F8FAFF] p-2">
      <div className="h-full rounded-[6px] border border-[#D7DBE1] bg-white">
        <div className="flex h-5 items-center gap-1 border-b border-[#E2E4E8] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0037C5]" />
          <span className="h-1.5 w-8 rounded-full bg-[#D7DBE1]" />
        </div>
        <div className="grid h-[calc(100%-1.25rem)] grid-cols-[28px_minmax(0,1fr)]">
          <div className="border-r border-[#E2E4E8] p-2">
            <span className="block h-2 w-3 rounded-full bg-[#D7DBE1]" />
            <span className="mt-2 block h-2 w-3 rounded-full bg-[#0037C5]" />
            <span className="mt-2 block h-2 w-3 rounded-full bg-[#D7DBE1]" />
          </div>
          <div className="p-2">
            <div className="h-5 rounded-[4px] border border-[#D7DBE1] bg-[#FAFAFA]" />
            <div className="mt-2 grid grid-cols-[1fr_0.7fr] gap-2">
              <div className="h-5 rounded-[4px] border border-[#D7DBE1] bg-white">
                <span className="mt-2 block h-px w-3/4 bg-[#0037C5]" />
              </div>
              <div className="h-5 rounded-[4px] bg-[#E2E4E8]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RiskListVisual() {
  const risks = [
    ['权限', '高'],
    ['数据', '中'],
    ['上线', '低'],
  ] as const

  return (
    <div className="h-[78px] rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-2.5">
      <div className="space-y-2">
        {risks.map(([label, level], index) => (
          <div key={label} className="grid grid-cols-[1fr_24px] items-center gap-2">
            <div className="rounded-[5px] border border-[#D7DBE1] bg-white px-2 py-1.5">
              <div className="flex items-center gap-2">
                <span className={index === 0 ? 'h-1.5 w-1.5 rounded-full bg-[#0037C5]' : 'h-1.5 w-1.5 rounded-full bg-[#AEB4BD]'} />
                <span className="text-[10px] font-medium text-[#555B64]">{label}</span>
              </div>
            </div>
            <span className="rounded-full border border-[#D7DBE1] bg-white py-1 text-center text-[10px] font-semibold text-[#555B64]">
              {level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DecisionCardVisual() {
  return (
    <div className="h-[78px] rounded-[8px] border border-[#D4EBDD] bg-[#FAFAFA] p-2.5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8F98]">
            Value
          </p>
          <p className="mt-1 text-[24px] font-semibold leading-none tracking-[-0.04em] text-[#111111]">
            92%
          </p>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D4EBDD] bg-white text-[12px] font-semibold text-[#126B4E]">
          ✓
        </div>
      </div>
      <div className="mt-3 flex h-6 items-end gap-1">
        {[24, 14, 20, 16, 28, 20].map((height, index) => (
          <span
            key={index}
            className={index === 4 ? 'w-full rounded-t-[3px] bg-[#2EB67D]' : 'w-full rounded-t-[3px] bg-[#D7DBE1]'}
            style={{ height }}
          />
        ))}
      </div>
    </div>
  )
}

function StepVisual({ visual }: { visual: DiagramStep['visual'] }) {
  if (visual === 'idea') return <IdeaClusterVisual />
  if (visual === 'flow') return <FlowchartVisual />
  if (visual === 'prototype') return <PrototypeVisual />
  if (visual === 'risk') return <RiskListVisual />
  return <DecisionCardVisual />
}

function ConnectorArrow() {
  return (
    <div className="hidden items-center justify-center xl:flex" aria-hidden="true">
      <span className="relative block h-px w-full bg-[#AEB4BD]">
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#AEB4BD]" />
      </span>
    </div>
  )
}

function DiagramCard({ step }: { step: DiagramStep }) {
  const active = 'active' in step && step.active
  const verified = 'verified' in step && step.verified

  return (
    <article
      className={`relative z-10 flex min-h-[224px] flex-col rounded-[10px] border bg-white p-3 shadow-[0_8px_24px_rgba(17,17,17,0.035)] ${
        active
          ? 'border-[#0037C5] shadow-[0_12px_30px_rgba(0,55,197,0.08)]'
          : 'border-[#E2E4E8]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={active ? 'text-[11px] font-semibold text-[#0037C5]' : 'text-[11px] font-semibold text-[#8A8F98]'}>
          {step.num}
        </span>
        <span
          className={`h-2 w-2 rounded-full ${
            verified ? 'bg-[#2EB67D]' : active ? 'bg-[#0037C5]' : 'bg-[#C5CAD2]'
          }`}
        />
      </div>

      <div className="mt-3">
        <StepVisual visual={step.visual} />
      </div>

      <h3 className="mt-4 text-[15px] font-semibold leading-tight tracking-[-0.03em] text-[#111111]">
        {step.title}
      </h3>
      <div className="mt-3 space-y-1">
        {step.lines.map((line) => (
          <p key={line} className="text-[11px] leading-[1.55] text-[#555B64]">
            {line}
          </p>
        ))}
      </div>
    </article>
  )
}

function StageTimeline() {
  const stages = [
    ['DISCOVERY', 'CLARIFY & ALIGN'],
    ['VALIDATION', 'PROTOTYPE & TEST'],
    ['DELIVERY RISK', 'REDUCE & CONTROL'],
  ] as const

  return (
    <div className="mt-5 border-t border-[#E2E4E8] pt-4">
      <div className="relative grid grid-cols-3 gap-4">
        <span className="absolute left-0 right-0 top-[7px] h-px bg-[#D7DBE1]" aria-hidden="true" />
        {stages.map(([label, desc], index) => (
          <div key={label} className="relative">
            <span className={index === 1 ? 'relative z-10 block h-[15px] w-[15px] rounded-full border-[3px] border-white bg-[#0037C5] shadow-[0_0_0_1px_rgba(0,55,197,0.25)]' : 'relative z-10 block h-[15px] w-[15px] rounded-full border border-[#D7DBE1] bg-white'} />
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#20242A]">
              {label}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#8A8F98]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductValidationDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[#E2E4E8] bg-[#FCFCFD] p-4 shadow-[0_18px_56px_rgba(17,17,17,0.05)] md:p-5 min-[1440px]:p-6">
      <div className="flex items-start justify-between gap-6 border-b border-[#E2E4E8] pb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.18em] text-[#0037C5]">
            WORKFLOW
            <span className="block text-[#0037C5]">PRODUCT VALIDATION</span>
          </p>
          <h2 className="mt-2 max-w-[280px] text-[22px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#111111]">
            Product Validation Workflow
          </h2>
        </div>
        <div className="rounded-full border border-[#D7DBE1] bg-white px-3 py-2 text-[10px] font-semibold uppercase leading-[1.4] tracking-[0.12em] text-[#555B64]">
          AI BOUNDARY
          <span className="block">ASSISTED CREATION</span>
        </div>
      </div>

      <div className="-mx-2 mt-5 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative min-w-[760px] min-[1440px]:min-w-0">
          <div className="pointer-events-none absolute bottom-[84px] left-[40.5%] right-0 top-[-14px] hidden rounded-[14px] border border-dashed border-[#C7CBD2] xl:block" />
          <div className="pointer-events-none absolute right-4 top-[-7px] hidden bg-[#FCFCFD] px-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8A8F98] xl:block">
            Assisted creation / Human review
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)] gap-2">
            {diagramSteps.map((step, index) => (
              <div key={step.num} className="contents">
                <DiagramCard step={step} />
                {index < diagramSteps.length - 1 && <ConnectorArrow />}
              </div>
            ))}
          </div>

          <StageTimeline />
        </div>
      </div>
    </div>
  )
}

export default function HeroV2() {
  return (
    <section
      id="intro"
      data-section-id="intro"
      className="flex min-h-screen scroll-mt-16 flex-col border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 pb-8 pt-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:pb-8 lg:pt-24 min-[1440px]:px-8 min-[1600px]:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="grid flex-1 items-center gap-10 py-8 xl:grid-cols-[minmax(360px,0.38fr)_minmax(0,0.62fr)] xl:gap-8 min-[1440px]:grid-cols-[minmax(420px,0.36fr)_minmax(760px,1fr)] min-[1440px]:gap-6 min-[1600px]:gap-14"
      >
        <div className="max-w-5xl">
          <p className="text-[13px] font-semibold tracking-[0.16em] text-[#0037C5]">
            B端 / AI应用 / 智能硬件方向
          </p>

          <h1 className="mt-7 max-w-5xl text-[48px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#111111] sm:text-[60px] md:text-[68px] xl:text-[60px] min-[1440px]:text-[68px] min-[1600px]:text-[84px] min-[1800px]:text-[96px]">
            <span className="block whitespace-nowrap">高级产品设计师</span>
            <span className="block whitespace-nowrap">B端 / AI应用 /</span>
            <span className="block whitespace-nowrap">智能硬件方向</span>
          </h1>

          <p className="mt-8 max-w-4xl text-[24px] font-medium leading-[1.34] tracking-[-0.02em] text-[#20242A] md:text-[32px]">
            AI辅助原型验证与产品方案落地
          </p>

          <p className="mt-7 max-w-[780px] text-[16px] leading-[1.9] text-[#555B64] md:text-[18px]">
            把复杂或模糊的产品需求，转化为清晰流程、可演示 Demo、AI 协作界面和开发前风险清单，帮助团队更快验证方向、对齐老板 / 产品 / 工程 / 销售，减少无效开发和沟通成本。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#cases"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#0037C5] px-5 py-3 text-[14px] font-semibold text-white transition duration-200 hover:bg-[#002B9A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              查看核心案例
              <ArrowIcon />
            </a>
            <a
              href="#demo"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-[#D5DAE2] bg-white px-5 py-3 text-[14px] font-semibold text-[#111111] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              查看 60 秒 Demo
              <ArrowIcon />
            </a>
            <a
              href={resumeHref}
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-[#D5DAE2] bg-white px-5 py-3 text-[14px] font-semibold text-[#111111] transition duration-200 hover:border-[#AEB6C2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              下载简历
            </a>
          </div>

          <div className="mt-8 flex max-w-[760px] flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-[#D7DBE1] bg-white px-3 py-1.5 text-[12px] font-medium text-[#555B64]">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <ProductValidationDiagram />
      </motion.div>

      <div className="mt-4 grid gap-0 border-y border-[#E2E4E8] md:grid-cols-5">
        {meta.map(([label, value]) => (
          <div key={label} className="border-b border-[#E2E4E8] py-5 md:border-b-0 md:border-r md:px-5 md:last:border-r-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
              {label}
            </p>
            <p className="mt-3 text-[14px] font-medium leading-relaxed text-[#20242A]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
