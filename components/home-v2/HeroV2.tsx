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
  ['Experience', '10+ 年产品设计经验'],
  ['Method', 'AI 辅助 × 结构化设计'],
  ['Delivery', '从原型到落地的闭环'],
] 

const diagramSteps = [
  {
    num: '01',
    title: '模糊需求',
    lines: ['信息分散 / 需求模糊', '目标不清 / 范围不明'],
    visual: 'idea',
  },
  {
    num: '02',
    title: '流程拆解',
    lines: ['梳理业务流程', '识别路径与依赖'],
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
    lines: ['开发前风险识别', '技术 / 体验 / 业务'],
    visual: 'risk',
  },
  {
    num: '05',
    title: '老板决策卡',
    lines: ['方案摘要 / 价值评估', '决策依据可追踪'],
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
    <div className="relative h-[96px] rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA]">
      <div className="absolute left-[18px] top-[26px] h-8 w-8 rounded-full bg-[#ECEFF3]" />
      <div className="absolute right-[20px] top-[20px] h-10 w-10 rounded-full bg-[#EEF1F5]" />
      <div className="absolute left-[42px] bottom-[14px] h-9 w-9 rounded-full bg-[#EFF2F6]" />
      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D7DBE1] bg-white text-center text-[16px] font-semibold leading-8 text-[#555B64]">
        ?
      </div>
      {nodes.map((node) => (
        <span key={node} className={`absolute ${node} rounded-full bg-[#AEB4BD]`} />
      ))}
    </div>
  )
}

function FlowchartVisual() {
  return (
    <div className="relative h-[96px] overflow-hidden rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-2.5">
      <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-2">
        {['角色', '任务', '边界', '异常'].map((item, index) => (
          <div
            key={item}
            className={`z-10 flex h-full items-center justify-center rounded-[5px] border px-2 py-1.5 text-center text-[10px] font-medium leading-none text-[#555B64] ${
              index === 1 ? 'border-[#0037C5] text-[#0037C5]' : 'border-[#D7DBE1]'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <path d="M33 28 H67" stroke="#AEB4BD" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M25 36 V64" stroke="#AEB4BD" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M75 36 V64" stroke="#AEB4BD" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M33 72 H67" stroke="#AEB4BD" strokeWidth="1.2" strokeLinecap="round" />

        <path d="M67 28 L63 25 M67 28 L63 31" stroke="#AEB4BD" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M25 64 L22 60 M25 64 L28 60" stroke="#AEB4BD" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M75 64 L72 60 M75 64 L78 60" stroke="#AEB4BD" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M67 72 L63 69 M67 72 L63 75" stroke="#AEB4BD" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function PrototypeVisual() {
  return (
    <div className="h-[96px] overflow-hidden rounded-[8px] border border-[#0037C5]/40 bg-[#F6F8FF] p-2">
      <div className="relative h-full rounded-[6px] border border-[#1D4ED8]/25 bg-[#111827]">
        <div className="flex h-4 items-center justify-between border-b border-white/10 px-2">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
          <span className="text-[7px] font-semibold tracking-[0.1em] text-white/70">DEMO</span>
        </div>

        <div className="grid h-[calc(100%-1rem)] grid-cols-[22px_minmax(0,1fr)]">
          <div className="border-r border-white/10 px-1.5 py-1">
            <span className="block h-1.5 w-4 rounded-full bg-white/35" />
            <span className="mt-1 block h-1.5 w-4 rounded-full bg-[#60A5FA]" />
            <span className="mt-1 block h-1.5 w-4 rounded-full bg-white/25" />
          </div>

          <div className="relative px-2 py-1.5">
            <div className="h-3.5 rounded-[3px] bg-white/12" />
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              <div className="h-3.5 rounded-[3px] border border-white/15 bg-white/5" />
              <div className="h-3.5 rounded-[3px] border border-white/15 bg-white/5" />
            </div>
            <div className="mt-1.5 flex gap-1">
              <span className="h-1.5 flex-1 rounded-full bg-[#60A5FA]" />
              <span className="h-1.5 w-6 rounded-full bg-[#34D399]" />
              <span className="h-1.5 w-4 rounded-full bg-white/30" />
            </div>
            <span className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/15 text-[9px] text-white">
              ▶
            </span>
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
    <div className="h-[82px] overflow-hidden rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-1.5">
      <div className="space-y-0.5">
        {risks.map(([label, level], index) => (
          <div key={label} className="grid h-[24px] grid-cols-[1fr_24px] items-center gap-1.5">
            <div className="h-full rounded-[5px] bg-white px-2">
              <div className="flex h-full items-center gap-2">
                <span className={index === 0 ? 'h-1.5 w-1.5 rounded-full bg-[#0037C5]' : 'h-1.5 w-1.5 rounded-full bg-[#AEB4BD]'} />
                <span className="text-[9px] font-medium text-[#555B64]">{label}</span>
              </div>
            </div>
            <span className="inline-flex h-full items-center justify-center rounded-full bg-white text-center text-[9px] font-semibold text-[#555B64]">
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
    <div className="h-[78px] overflow-hidden rounded-[8px] border border-[#D4EBDD] bg-[#FAFAFA] p-1.5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8F98]">
            Value
          </p>
          <p className="mt-1 text-[20px] font-semibold leading-none tracking-[-0.04em] text-[#111111]">
            92%
          </p>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D4EBDD] bg-white text-[10px] font-semibold text-[#126B4E]">
          ✓
        </div>
      </div>
      <div className="mt-2 flex h-5 items-end gap-1 overflow-hidden">
        {[8, 6, 7, 6, 12, 9].map((height, index) => (
          <span
            key={index}
            className={index === 4 ? 'flex-1 self-end rounded-t-[3px] bg-[#2EB67D]' : 'flex-1 self-end rounded-t-[3px] bg-[#D7DBE1]'}
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

function InlineConnectorArrow() {
  return (
    <div className="flex h-[262px] items-center justify-center text-[#9AA1AB]" aria-hidden="true">
      <svg viewBox="0 0 16 10" className="h-2.5 w-4">
        <path d="M1 5h12M9 1l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  )
}

function DiagramCard({ step }: { step: DiagramStep }) {
  const active = 'active' in step && step.active
  const verified = 'verified' in step && step.verified

  return (
    <article
      className={`relative z-10 flex h-[262px] flex-col rounded-[10px] border bg-white p-3 shadow-[0_8px_24px_rgba(17,17,17,0.035)] ${
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

      <div className="mt-3 h-[96px] shrink-0">
        <StepVisual visual={step.visual} />
      </div>

      <div className="mt-4 min-h-[66px]">
        <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.03em] text-[#111111]">
          {step.title}
        </h3>
        <div className="mt-2 space-y-1">
          {step.lines.map((line) => (
            <p key={line} className="text-[11px] leading-[1.5] text-[#555B64]">
              {line}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}

function StageTimeline() {
  const stages = [
    {
      title: '发现阶段',
      subtitle: '澄清与对齐',
    },
    {
      title: '验证阶段',
      subtitle: '原型与测试',
    },
    {
      title: '交付风控',
      subtitle: '降低与控制',
    },
  ] as const

  return (
    <div className="mt-6 h-[110px] pt-4">
      <div className="relative">
        <span className="absolute left-0 right-0 top-2 h-px bg-[#D7DBE1]" aria-hidden="true" />
        <div className="relative grid grid-cols-3 gap-4">
          <div>
            <div className="flex flex-col items-center text-center">
              <span className="relative z-10 block h-[14px] w-[14px] rounded-full border border-[#D7DBE1] bg-white" />
              <p className="mt-3 text-[10px] font-semibold tracking-[0.02em] text-[#20242A]">
                {stages[0].title}
              </p>
              <p className="mt-1 text-[9px] font-medium tracking-[0.02em] text-[#8A8F98]">
                {stages[0].subtitle}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center text-center">
              <span className="relative z-10 block h-[14px] w-[14px] rounded-full border-[3px] border-white bg-[#0037C5] shadow-[0_0_0_1px_rgba(0,55,197,0.25)]" />
              <p className="mt-3 text-[10px] font-semibold tracking-[0.02em] text-[#20242A]">
                {stages[1].title}
              </p>
              <p className="mt-1 text-[9px] font-medium tracking-[0.02em] text-[#8A8F98]">
                {stages[1].subtitle}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center text-center">
              <span className="relative z-10 block h-[14px] w-[14px] rounded-full border border-[#D7DBE1] bg-white" />
              <p className="mt-3 text-[10px] font-semibold tracking-[0.02em] text-[#20242A]">
                {stages[2].title}
              </p>
              <p className="mt-1 text-[9px] font-medium tracking-[0.02em] text-[#8A8F98]">
                {stages[2].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductValidationDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[#E2E4E8] bg-[#FCFCFD] p-4 shadow-[0_18px_56px_rgba(17,17,17,0.05)] md:p-5 min-[1440px]:p-6">
      <div className="relative h-[104px] border-b border-[#E2E4E8]">
        <div className="flex h-full items-center">
          <div className="flex flex-col items-start">
            <h2 className="max-w-[300px] text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]">
              产品验证工作流
            </h2>
            <div className="relative z-20 mt-3 inline-flex min-w-[112px] items-center justify-start rounded-full border border-[#D7DBE1] bg-white px-4 py-2 text-left text-[11px] font-semibold leading-[1.2] tracking-[0.04em] text-[#555B64]">
              AI 协作边界
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mx-2 mt-6 px-2">
        <span
          className="pointer-events-none absolute bottom-[112px] left-2 top-0 z-20 w-6 bg-gradient-to-r from-[#FCFCFD] to-transparent xl:hidden"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-[112px] right-2 top-0 z-20 w-6 bg-gradient-to-l from-[#FCFCFD] to-transparent xl:hidden"
          aria-hidden="true"
        />
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative min-w-[860px] pb-1">
            <div className="relative h-[324px]">
              <div className="relative z-10 grid h-full grid-cols-[minmax(148px,1fr)_24px_minmax(148px,1fr)_24px_minmax(148px,1fr)_24px_minmax(148px,1fr)_24px_minmax(148px,1fr)] items-start">
                <DiagramCard step={diagramSteps[0]} />
                <InlineConnectorArrow />
                <DiagramCard step={diagramSteps[1]} />
                <InlineConnectorArrow />
                <DiagramCard step={diagramSteps[2]} />
                <InlineConnectorArrow />
                <DiagramCard step={diagramSteps[3]} />
                <InlineConnectorArrow />
                <DiagramCard step={diagramSteps[4]} />
              </div>
            </div>

            <StageTimeline />
          </div>
        </div>
        <p className="mt-2 text-right text-[10px] font-medium uppercase tracking-[0.08em] text-[#8A8F98] xl:hidden">
          横向滑动查看全流程
        </p>
      </div>
    </div>
  )
}

export default function HeroV2() {
  return (
    <section
      id="intro"
      data-section-id="intro"
      className="flex min-h-screen scroll-mt-16 flex-col border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:scroll-mt-0 lg:px-12 lg:pb-8 lg:pt-24 min-[1440px]:px-8 min-[1600px]:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="grid flex-1 items-start gap-8 py-2 sm:gap-9 sm:py-4 xl:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] xl:items-center xl:gap-6 min-[1600px]:gap-10"
      >
        <div className="max-w-5xl">
          <p className="text-[13px] font-semibold tracking-[0.16em] text-[#0037C5]">
            B端 / AI应用 / 智能硬件方向
          </p>

          <h1 className="mt-6 max-w-5xl text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#111111] sm:text-[40px] md:text-[48px] xl:text-[44px] min-[1440px]:text-[48px] min-[1600px]:text-[60px] min-[1800px]:text-[68px]">
            <span className="block whitespace-nowrap">高级产品设计师</span>
            <span className="block whitespace-nowrap">B端 / AI应用 /</span>
            <span className="block whitespace-nowrap">智能硬件方向</span>
          </h1>

          <p className="mt-6 max-w-4xl text-[18px] font-medium leading-[1.4] tracking-[-0.02em] text-[#20242A] sm:text-[22px] md:text-[28px]">
            AI辅助原型验证与产品方案落地
          </p>

          <p className="mt-6 max-w-[780px] text-[15px] leading-[1.85] text-[#555B64] sm:text-[16px] md:text-[18px]">
            把复杂或模糊的产品需求，转化为清晰流程、可演示 Demo、AI 协作界面和开发前风险清单，帮助团队更快验证方向、对齐老板 / 产品 / 工程 / 销售，减少无效开发和沟通成本。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

          <div className="mt-7 flex max-w-[760px] flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-[#D7DBE1] bg-white px-3 py-1.5 text-[12px] font-medium text-[#555B64]">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <ProductValidationDiagram />
      </motion.div>

      <div className="mt-4 grid gap-0 border-y border-[#E2E4E8] md:grid-cols-4">
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
