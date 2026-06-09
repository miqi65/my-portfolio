'use client'

import { SectionGradientBackdrop } from './SectionGradientBackdrop'

const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

type ProblemCard = {
  number: '01' | '02' | '03' | '04'
  title: string
  englishTitle: string
  description: string
}

const problemCards: ProblemCard[] = [
  {
    number: '01',
    title: '模糊需求 -> 清晰方案',
    englishTitle: 'Ambiguous Requirements -> Clear Solution',
    description: '把老板和客户的抽象想法拆成角色、流程、任务和边界，让团队先知道要解决什么。',
  },
  {
    number: '02',
    title: '旧流程 -> 更清晰的协作流程',
    englishTitle: 'Legacy Flow -> Clearer Collaboration Workflow',
    description: '识别每一步并结合自动化辅助，明确协作边界与交付标准，让流程更稳定、责任更清晰。',
  },
  {
    number: '03',
    title: '静态 UI -> 可验证原型',
    englishTitle: 'Static UI -> Testable Prototype',
    description: '用原型帮助团队提前识别方案是否值得推进，而不是等开发后才发现问题。',
  },
  {
    number: '04',
    title: '开发前 -> 风险清单',
    englishTitle: 'Before Development -> Risk Checklist',
    description: '提前暴露权限、数据、算法、硬件和上线风险，减少后期返工。',
  },
]

function SectionHeader() {
  return (
    <div className="max-w-[840px]">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.2em] text-[#1ed760]">
          03
        </span>
        <span className="text-[11px] font-normal uppercase leading-4 tracking-[0.2em] text-[#a7aea1]">
          / Problem Solving
        </span>
      </div>
      <h2 className="mt-4 text-[clamp(44px,4.4vw,64px)] font-black leading-[0.96] tracking-[-0.04em] text-[#f2f5ef] sm:max-w-[720px]">
        我<span className="text-[#1ed760]">解决</span>什么问题
      </h2>
      <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#b3b3b3] sm:text-[16px] sm:leading-7">
        从模糊需求到清晰方案，从旧流程到更可控的协作流程，从静态界面到可验证原型，从开发前到风险识别。
      </p>
    </div>
  )
}

function ProblemTrack({ card }: { card: ProblemCard }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[24px] border border-[#242424] bg-[#181818] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.34)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#313131] hover:shadow-[0_28px_72px_rgba(0,0,0,0.44)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,215,96,0.08),transparent_42%)]" />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#1ed760] text-[14px] font-black text-black shadow-[0_12px_28px_rgba(30,215,96,0.22)]">
            {card.number}
          </span>
          <div className="min-w-0">
            <p className="font-['Space_Grotesk'] text-[10px] font-medium uppercase leading-4 tracking-[0.22em] text-[#a7aea1]">
              {card.englishTitle}
            </p>
            <h3 className="mt-2 text-[22px] font-bold leading-[1.12] tracking-[-0.03em] text-[#f2f5ef] sm:text-[24px]">
              {card.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-[14px] leading-7 text-[#b3b3b3] sm:text-[15px]">{card.description}</p>
      </div>
    </article>
  )
}

export default function ProblemSolvingSection() {
  return (
    <section
      id="problems"
      data-section-id="problems"
      className="relative scroll-mt-16 overflow-hidden bg-[#121212] py-16 text-[#f2f5ef] sm:py-20 lg:scroll-mt-0 lg:py-[88px]"
    >
      <SectionGradientBackdrop variant="problems" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(167,174,161,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,174,161,0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.022,
        }}
      />

      <div className={`relative ${SECTION_CONTAINER}`}>
        <div className="space-y-8">
          <SectionHeader />

          <div className="grid gap-4 md:grid-cols-2">
            {problemCards.map((card) => (
              <ProblemTrack key={card.number} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
