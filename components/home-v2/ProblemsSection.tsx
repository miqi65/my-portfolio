'use client'

import { motion } from 'framer-motion'

type ProblemNumber = '01' | '02' | '03' | '04'

type ProblemCard = {
  num: ProblemNumber
  title: string
  desc: string
  footer: string
  pills: string[]
}

const problems: ProblemCard[] = [
  {
    num: '01',
    title: '模糊需求 → 清晰方案',
    desc: '把老板和客户的抽象想法拆成角色、流程、任务和边界。',
    footer: 'Validation output / 01',
    pills: ['MAP', 'FLOW', 'VERIFIED'],
  },
  {
    num: '02',
    title: '旧流程 → Agent 流程',
    desc: '判断哪些步骤适合 AI / Agent 压缩，哪些必须人工确认。',
    footer: 'Validation output / 02',
    pills: ['AGENT', 'HUMAN REVIEW', 'VERIFIED'],
  },
  {
    num: '03',
    title: '静态 UI → 可演示 Demo',
    desc: '用低成本原型帮助团队提前判断方向是否值得开发。',
    footer: 'Validation output / 03',
    pills: ['DEMO', 'CLICK-THROUGH', 'TESTABLE'],
  },
  {
    num: '04',
    title: '开发前 → 风险清单',
    desc: '提前暴露数据、权限、算法、硬件、成本和上线风险。',
    footer: 'Validation output / 04',
    pills: ['RISK', 'VALIDATE', 'DECIDE'],
  },
]

const riskRows = [
  ['Data', '数据来源稳定', 4, '已验证'],
  ['Permission', '权限边界清晰', 3, '需验证'],
  ['Algorithm', '效果可复现', 3, '需验证'],
  ['Hardware', '性能可达标', 2, '已验证'],
  ['Cost', '预算可控', 2, '已验证'],
  ['Launch', '上线路径明确', 1, '需验证'],
] as const

const cardClassName =
  'problem-card grid h-auto min-h-[292px] grid-rows-[auto_1fr_24px] gap-4 overflow-hidden rounded-[12px] border border-[rgba(15,23,42,0.12)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.16)] hover:shadow-[0_16px_28px_rgba(15,23,42,0.06)] xl:h-[292px] xl:min-h-0 motion-reduce:transform-none motion-reduce:transition-none'

const diagramCanvasClassName =
  'problem-card-diagram min-w-0 h-[152px] overflow-hidden rounded-[8px] border border-[rgba(17,17,17,0.1)] bg-[rgba(246,248,249,0.9)] p-3'

function CardArrow() {
  return (
    <span
      className="inline-flex size-8 items-center justify-center rounded-full border border-[rgba(49,75,120,0.34)] text-[#314B78]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-none stroke-current">
        <path d="M5 15L15 5M7 5H15V13" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function CardPills({ pills }: { pills: string[] }) {
  return (
    <div className="flex max-w-full flex-wrap items-center justify-end gap-2">
      {pills.map((pill, index) => (
        <span
          key={pill}
          className={`problem-pill inline-flex h-6 shrink-0 items-center rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.04em] md:px-3 md:text-[11px] ${
            pill === 'VERIFIED' || pill === 'HUMAN REVIEW'
              ? 'border border-[#D5E4DE] bg-[#F3F9F6] text-[#2F6E63]'
              : index === 0
                ? 'border border-[#D1DBE9] bg-[#F0F4FA] text-[#314B78]'
                : 'border border-[#D8DDE4] bg-[#F5F7F9] text-[#627081]'
          }`}
        >
          {pill}
        </span>
      ))}
    </div>
  )
}

function FlowArrow() {
  return (
    <span
      className="inline-block size-2 rotate-45 border-r border-t border-[#365486]"
      aria-hidden="true"
    />
  )
}

function ClarifyPlanVisual() {
  return (
    <div className={diagramCanvasClassName} aria-hidden="true">
      <div className="grid h-full grid-cols-[42%_18px_minmax(0,1fr)] items-center gap-2">
        <div className="relative h-full rounded-[8px] border border-[#D3DAE3] bg-[#F8FAFB] p-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8791A0]">
            Messy idea cluster
          </p>
          <span className="absolute left-3 top-7 h-6 w-6 rounded-full bg-[#EDF1F5]" />
          <span className="absolute right-3 top-8 h-5 w-5 rounded-full bg-[#EEF2F6]" />
          <span className="absolute left-6 bottom-3 h-5 w-5 rounded-full bg-[#F1F4F7]" />
          <div className="mt-2 grid grid-cols-2 gap-2 pr-4">
            <span className="inline-flex h-6 items-center justify-center rounded-full border border-[#CBD3DD] bg-[#F3F6F9] px-2 text-[8px] text-[#6A7482]">
              想法
            </span>
            <span className="inline-flex h-6 items-center justify-center rounded-full border border-[#CFD6DE] bg-[#F7F9FB] px-2 text-[8px] text-[#6A7482]">
              需求
            </span>
            <span className="inline-flex h-6 items-center justify-center rounded-full border border-dashed border-[#C7CFD9] bg-[#F8FAFC] px-2 text-[8px] text-[#6A7482]">
              目标
            </span>
            <span className="inline-flex h-6 items-center justify-center rounded-full border border-[#D1D8E1] bg-[#F5F7FA] px-2 text-[8px] text-[#6A7482]">
              问题
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="h-px w-3 bg-[#3A578A]" />
          <span className="-ml-1 inline-block size-2 rotate-45 border-r border-t border-[#3A578A]" />
        </div>
        <div className="flex h-full flex-col justify-center rounded-[8px] border border-[#CBD7E8] bg-white p-2">
          <div className="flex flex-wrap items-center justify-center gap-1">
            {['Boss', 'Client', 'Operator', 'Engineer'].map((role) => (
              <span
                key={role}
                className="rounded-[4px] border border-[#D4DCE6] bg-[#F6F9FC] px-1 py-0 text-[7px] font-medium text-[#526071]"
              >
                {role}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-2 w-full max-w-[140px] space-y-1">
            <div className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#7A8492]">Role</span>
              <span className="h-4 rounded-[4px] border border-[#D8DEE7] bg-[#FAFBFC] px-1 py-0 text-[7px] text-[#586474]">
                Responsibility
              </span>
            </div>
            <div className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#7A8492]">Flow</span>
              <div className="flex h-4 items-center rounded-[4px] border border-[#CAD6E6] bg-[#F5F8FC] px-1">
                <span className="h-1 w-2 rounded bg-[#3E5F95]" />
                <span className="mx-1 h-px w-2 bg-[#3E5F95]" />
                <FlowArrow />
                <span className="mx-1 h-px w-2 bg-[#3E5F95]" />
                <span className="h-1 w-2 rounded bg-[#2F4F80]" />
                <span className="mx-1 h-px w-2 bg-[#3E5F95]" />
                <FlowArrow />
                <span className="mx-1 h-px w-2 bg-[#3E5F95]" />
                <span className="h-1 w-2 rounded bg-[#2F6E63]" />
              </div>
            </div>
            <div className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#7A8492]">
                Boundary
              </span>
              <span className="h-4 rounded-[4px] border border-dashed border-[#C0C9D5] bg-[#F8FAFB] px-1 py-0 text-[7px] text-[#5E6A79]">
                Scope / input / output
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function OldToAgentVisual() {
  const flowNodes = ['AI', 'Agent', 'AI', 'Human Review'] as const
  return (
    <div className={diagramCanvasClassName} aria-hidden="true">
      <div className="grid h-full grid-cols-[42%_18px_minmax(0,1fr)] items-center gap-2">
        <div className="flex h-full flex-col items-center justify-center rounded-[8px] border border-[#D4DBE3] bg-[#F8FAFB] p-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8B93A0]">旧流程 / 人工为主</p>
          <div className="mt-2 flex items-center justify-center gap-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#CBD3DD] bg-[#F4F6F8]">
                  <span className="absolute top-1 h-1 w-1 rounded-full bg-[#7F8A99]" />
                  <span className="absolute bottom-1 h-1 w-1 rounded bg-[#97A2B0]" />
                </span>
                {index < 3 ? <FlowArrow /> : null}
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
            {['耗时长', '重复多', '易出错'].map((tag) => (
              <span
                key={tag}
                className="rounded-[4px] border border-[#D5DBE3] bg-[#F1F4F7] px-1 py-0 text-[7px] text-[#657181]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="h-px w-3 bg-[#3A578A]" />
          <span className="-ml-1 inline-block size-2 rotate-45 border-r border-t border-[#3A578A]" />
        </div>
        <div className="flex h-full flex-col items-center justify-center rounded-[8px] border border-[#CBD7E8] bg-white p-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#355485]">Agent 流程 / 人机协同</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
            {flowNodes.map((node, index) => (
              <div key={`${node}-${index}`} className="flex items-center gap-1">
                <span
                  className={`rounded-[4px] px-1 py-0 text-[7px] font-semibold ${
                    node === 'Agent'
                      ? 'bg-[#2F4F80] text-white'
                      : node === 'Human Review'
                        ? 'bg-[#EAF6F2] text-[#2F6E63]'
                        : 'bg-[#EFF3F9] text-[#3A578A]'
                  }`}
                >
                  {node}
                </span>
                {index < flowNodes.length - 1 ? <FlowArrow /> : null}
              </div>
            ))}
          </div>
          <div className="mt-2 grid w-full max-w-[124px] grid-cols-3 gap-1">
            <span className="rounded-[4px] border border-[#CCD7E7] bg-[#EDF2F9] px-1 py-0 text-center text-[7px] text-[#365486]">
              Automation
            </span>
            <span className="rounded-[4px] border border-[#CFE1DB] bg-[#EFF8F4] px-1 py-0 text-center text-[7px] text-[#2F6E63]">
              Human Review
            </span>
            <span className="rounded-[4px] border border-[#D6DBE2] bg-[#F2F5F7] px-1 py-0 text-center text-[7px] text-[#647182]">
              Escalation
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function StaticToDemoVisual() {
  return (
    <div className={diagramCanvasClassName} aria-hidden="true">
      <div className="grid h-full grid-cols-[41%_18px_minmax(0,1fr)] items-center gap-2">
        <div className="h-full rounded-[8px] border border-[#D4DBE3] bg-[#F8FAFB] p-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8B93A0]">Static wireframe</p>
          <div className="mt-2 grid h-[80px] grid-cols-[16px_minmax(0,1fr)] gap-1">
            <div className="rounded-[4px] border border-[#D7DDE6] bg-[#F1F4F7]" />
            <div className="space-y-1">
              <div className="h-3 rounded-[4px] border border-[#D9DFE8] bg-white" />
              <div className="grid grid-cols-2 gap-1">
                <div className="h-4 rounded-[4px] border border-[#D9DFE8] bg-white" />
                <div className="h-4 rounded-[4px] border border-[#D9DFE8] bg-white" />
              </div>
              <div className="h-3 rounded-[4px] border border-dashed border-[#C9D1DC] bg-[#F6F8FB]" />
              <div className="h-3 rounded-[4px] border border-[#D9DFE8] bg-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="h-px w-3 bg-[#3A578A]" />
          <span className="-ml-1 inline-block size-2 rotate-45 border-r border-t border-[#3A578A]" />
        </div>
        <div className="relative h-full overflow-hidden rounded-[8px] border border-[#2A3E61] bg-[#121A27] p-2">
          <div className="flex gap-1">
            {['Demo', 'Click', 'Testable'].map((chip, index) => (
              <span
                key={chip}
                className={`rounded-[4px] px-1 py-0 text-[7px] ${
                  index === 0
                    ? 'bg-[#2E4E83] text-[#E8EEFC]'
                    : index === 1
                      ? 'bg-[#1D2B42] text-[#CFD9EA]'
                      : 'bg-[#193830] text-[#CDE5DD]'
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-2 h-[72px] rounded-[4px] border border-[#2F4568] bg-[#0F1621] p-2">
            <div className="mb-2 h-2 w-12 rounded-full bg-[#1F2C43]" />
            <div className="grid grid-cols-3 gap-1">
              <div className="h-3 rounded-[4px] bg-[#1A2538]" />
              <div className="h-3 rounded-[4px] bg-[#1D2A40]" />
              <div className="h-3 rounded-[4px] bg-[#1A2538]" />
            </div>
            <svg viewBox="0 0 120 20" className="mt-1 h-[20px] w-full" fill="none">
              <path
                d="M4 17 C16 10 25 13 34 9 C45 5 54 7 64 11 C74 15 87 6 98 8 C108 10 114 8 116 6"
                stroke="#3A5F98"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M4 14 C15 16 23 14 34 11 C46 8 58 10 70 13 C84 16 96 12 116 11"
                stroke="#2F6E63"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="pointer-events-none absolute left-1/2 top-[56%] inline-flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#AFC2E6] bg-[#E8EEF9]">
            <span className="ml-1 inline-block h-0 w-0 border-b-[4px] border-l-[8px] border-t-[4px] border-b-transparent border-l-[#2E4E83] border-t-transparent" />
          </span>
        </div>
      </div>
    </div>
  )
}

function RiskChecklistVisual() {
  return (
    <div className={diagramCanvasClassName} aria-hidden="true">
        <div className="h-full rounded-[8px] border border-[#D4DBE3] bg-white">
        <div className="grid grid-cols-[52px_minmax(0,1fr)_42px_42px] gap-1 border-b border-[#E3E8EE] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.08em] text-[#7E8896]">
          <span>维度</span>
          <span>关键问题</span>
          <span>等级</span>
          <span>验证</span>
        </div>
        <div className="space-y-1 px-2 py-1">
          {riskRows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-[52px_minmax(0,1fr)_42px_42px] items-center gap-1 text-[7px] text-[#5B6573]"
            >
              <span className="font-medium text-[#4D5866]">{row[0]}</span>
              <span className="truncate">{row[1]}</span>
              <span className="inline-flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className={`h-1 w-1 rounded-full ${
                      dot <= row[2] ? 'bg-[#37598D]' : 'bg-[#D4DAE2]'
                    }`}
                  />
                ))}
              </span>
              <span
                className={`inline-flex items-center gap-1 ${
                  row[3] === '已验证' ? 'text-[#2F6E63]' : 'text-[#778292]'
                }`}
              >
                <span
                  className={`inline-flex h-2 w-2 items-center justify-center rounded-full border text-[6px] ${
                    row[3] === '已验证'
                      ? 'border-[#2F6E63] bg-[#EAF6F2]'
                      : 'border-[#A0A8B4] bg-[#F1F3F6]'
                  }`}
                >
                  {row[3] === '已验证' ? '✓' : '·'}
                </span>
                {row[3]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function renderDiagram(num: ProblemNumber) {
  if (num === '01') return <ClarifyPlanVisual />
  if (num === '02') return <OldToAgentVisual />
  if (num === '03') return <StaticToDemoVisual />
  return <RiskChecklistVisual />
}

export default function ProblemsSection() {
  return (
    <section
      id="problems"
      data-section-id="problems"
      className="problems-section relative min-h-screen scroll-mt-16 overflow-hidden border-b border-[#E1E4E8] bg-[#F4F5F6] lg:scroll-mt-0"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(22,33,48,0.04) 0px, rgba(22,33,48,0.04) 1px, transparent 1px, transparent 160px)',
        }}
      />

      <div className="problems-main relative mx-auto min-h-screen w-full max-w-[1880px] px-4 pb-14 pt-[88px] sm:px-8 lg:px-16">
        <div className="problems-meta-row flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5F6A79]">
          <span className="text-[#2E4D7F]">02 / PROBLEMS</span>
        </div>

        <header className="problems-header mt-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="problems-title m-0 max-w-[720px] text-[clamp(48px,4.2vw,64px)] font-extrabold leading-[1.08] tracking-normal text-[#0E1116]">
              我解决什么问题
            </h2>
            <p className="problems-subtitle mt-4 max-w-[840px] text-[16px] leading-[1.7] text-[rgba(15,23,42,0.68)]">
              从模糊需求到清晰方案，从旧流程到 Agent 流程，从静态 UI 到可演示 Demo，从开发前到风险清单。
            </p>
          </motion.div>
        </header>

        <div className="problems-grid mt-10 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:grid-rows-[repeat(2,292px)]">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cardClassName}
            >
              <div className="problem-card-top flex min-h-7 items-start justify-between gap-3">
                <span className="card-number shrink-0 text-[13px] font-bold tracking-[0.12em] text-[#2E4D7F]">{problem.num}</span>
                <CardPills pills={problem.pills} />
              </div>

              <div className="problem-card-body grid min-h-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(190px,0.36fr)_minmax(320px,0.64fr)] xl:gap-6">
                <div className="problem-card-copy min-w-0">
                  <h3
                    className="problem-card-title m-0 text-[28px] font-bold leading-[1.12] tracking-normal text-[#101318]"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {problem.title}
                  </h3>
                  <p className="problem-card-desc mt-3 text-[14px] leading-[1.65] text-[rgba(15,23,42,0.68)]">
                    {problem.desc}
                  </p>
                </div>
                <div className="min-w-0">{renderDiagram(problem.num)}</div>
              </div>

              <div className="problem-card-footer flex h-6 items-center justify-between border-t border-[rgba(17,17,17,0.1)] pt-2 text-[12px]">
                <p className="card-output text-[12px] font-medium text-[#7D8796]">{problem.footer}</p>
                <CardArrow />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
