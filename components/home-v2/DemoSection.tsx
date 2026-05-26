'use client'

import { motion } from 'framer-motion'

const validationSteps = [
  '模糊需求',
  '场景拆解',
  'Agent流程',
  '可演示Demo',
  '风险清单',
  '老板决策卡',
]

const reviewPoints = [
  ['角色', '谁在什么场景里做判断'],
  ['边界', 'AI 做什么，人确认什么'],
  ['风险', '数据、权限、算法、硬件、成本'],
]

export default function DemoSection() {
  return (
    <section
      id="demo"
      data-section-id="demo"
      className="scroll-mt-16 border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 lg:grid-cols-[minmax(300px,0.45fr)_minmax(0,1fr)] lg:items-start"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
            04 / Demo
          </p>
          <h2 className="mt-4 max-w-xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] md:text-[60px]">
            60 秒产品验证 Demo
          </h2>
          <p className="mt-6 max-w-xl text-[18px] font-medium leading-[1.7] text-[#20242A]">
            从模糊需求到可演示方案
          </p>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-[#5D626B]">
            Demo 不只是把界面画出来，而是把关键角色、入口、状态、异常和确认动作组织成可以讨论的证据，让团队在开发前就能判断方向是否值得继续。
          </p>

          <div className="mt-10 grid gap-3">
            {reviewPoints.map(([title, desc]) => (
              <div key={title} className="grid grid-cols-[72px_minmax(0,1fr)] gap-4 border-t border-[#D7DBE1] pt-4">
                <p className="text-[13px] font-semibold text-[#0037C5]">{title}</p>
                <p className="text-[14px] leading-relaxed text-[#5D626B]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[8px] border border-[#D7DBE1] bg-white shadow-[0_14px_40px_rgba(17,17,17,0.045)]">
            <div className="flex min-h-12 items-center justify-between border-b border-[#E2E4E8] px-4">
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#8A8F98]">
                Product validation preview
              </span>
              <span className="flex items-center gap-2 text-[12px] font-semibold text-[#126B4E]">
                <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
                ready to review
              </span>
            </div>

            <div className="grid min-h-[420px] gap-5 bg-[#F4F5F7] p-5 lg:grid-cols-[1fr_0.55fr]">
              <div className="relative overflow-hidden rounded-[8px] border border-[#D7DBE1] bg-white p-5">
                <div className="flex items-center justify-between border-b border-[#E2E4E8] pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">
                      60 sec demo
                    </p>
                    <p className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">
                      老板决策卡
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0037C5] bg-white text-[#0037C5]">
                    <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-current" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {['业务场景是否成立', 'Agent 边界是否清楚', '开发风险是否可控'].map((item, index) => (
                    <div key={item} className="rounded-[7px] border border-[#E2E4E8] bg-[#FAFAFA] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[14px] font-semibold text-[#20242A]">{item}</p>
                        <span className={index === 2 ? 'text-[12px] font-semibold text-[#0037C5]' : 'text-[12px] font-semibold text-[#126B4E]'}>
                          {index === 2 ? 'review' : 'pass'}
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-[#E2E4E8]">
                        <div
                          className={index === 2 ? 'h-2 rounded-full bg-[#0037C5]' : 'h-2 rounded-full bg-[#2EB67D]'}
                          style={{ width: `${index === 0 ? 86 : index === 1 ? 74 : 58}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {validationSteps.map((step, index) => (
                  <div
                    key={step}
                    className={`rounded-[7px] border px-4 py-3 ${
                      index === 3
                        ? 'border-[#0037C5] bg-white text-[#0037C5]'
                        : 'border-[#D7DBE1] bg-white text-[#20242A]'
                    }`}
                  >
                    <p className="text-[11px] font-semibold text-[#8A8F98]">
                      0{index + 1}
                    </p>
                    <p className="mt-1 text-[14px] font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-6">
            {validationSteps.map((step, index) => (
              <div key={step} className="relative min-h-20 rounded-[8px] border border-[#E2E4E8] bg-white p-3">
                <p className="text-[11px] font-semibold text-[#0037C5]">0{index + 1}</p>
                <p className="mt-3 text-[13px] font-medium leading-tight text-[#20242A]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
