'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    num: '01',
    title: '模糊需求 → 清晰方案',
    before: 'Abstract Input',
    after: 'Clear Plan',
    desc: '把老板和客户的抽象想法拆成角色、流程、任务和边界。',
  },
  {
    num: '02',
    title: '旧流程 → Agent 流程',
    before: 'Legacy Process',
    after: 'Agent Workflow',
    desc: '判断哪些步骤适合 AI / Agent 压缩，哪些必须人工确认。',
  },
  {
    num: '03',
    title: '静态 UI → 可演示 Demo',
    before: 'Static UI',
    after: 'Interactive Demo',
    desc: '用低成本原型帮助团队提前判断方向是否值得开发。',
  },
  {
    num: '04',
    title: '开发前 → 风险清单',
    before: 'Before Build',
    after: 'Risk List',
    desc: '提前暴露数据、权限、算法、硬件、成本和上线风险。',
  },
]

export default function ProblemsSection() {
  return (
    <section
      id="problems"
      data-section-id="problems"
      className="scroll-mt-16 border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-[#D7DBE1] pb-10 lg:grid-cols-[minmax(260px,0.5fr)_minmax(0,1fr)] lg:items-end"
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
              02 / Problems
            </p>
            <h2 className="mt-4 text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] md:text-[60px]">
              我解决什么问题
            </h2>
          </div>
          <p className="max-w-3xl text-[17px] leading-[1.9] text-[#5D626B]">
            从模糊需求到清晰方案，从旧流程到 Agent 流程，从静态 UI 到可演示 Demo，从开发前到风险清单。
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group flex min-h-[330px] flex-col rounded-[8px] border border-[#E2E4E8] bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#0037C5] hover:shadow-[0_18px_46px_rgba(17,17,17,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#0037C5]">
                  {problem.num}
                </span>
                <span className="flex items-center gap-2 text-[11px] font-medium text-[#126B4E]">
                  <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
                  verified
                </span>
              </div>

              <div className="mt-10 rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-4">
                <div className="grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] items-center gap-3">
                  <div className="min-h-16 rounded-[6px] border border-[#D7DBE1] bg-white p-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8A8F98]">
                      {problem.before}
                    </p>
                  </div>
                  <div className="relative h-px bg-[#0037C5]">
                    <span className="absolute right-[-1px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#0037C5]" />
                  </div>
                  <div className="min-h-16 rounded-[6px] border border-[#0037C5] bg-white p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0037C5]">
                      {problem.after}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-[27px] font-semibold leading-tight tracking-[-0.03em] text-[#111111]">
                {problem.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#5D626B]">
                {problem.desc}
              </p>

              <div className="mt-auto pt-8">
                <div className="h-px bg-[#E2E4E8]" />
                <p className="mt-4 text-[12px] font-medium text-[#8A8F98]">
                  Validation output / 0{index + 1}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
