'use client'

import { motion } from 'framer-motion'

const framework = [
  {
    step: '01',
    title: '需求真假',
    label: 'Problem Fit',
    question: '这是真问题，还是只是一句想法？',
    output: '目标 / 场景 / 触发条件',
  },
  {
    step: '02',
    title: '用户位置',
    label: 'Workflow Fit',
    question: '用户在原流程里的位置和任务是否清楚？',
    output: '角色 / 入口 / 任务链',
  },
  {
    step: '03',
    title: '人机边界',
    label: 'Human-AI Fit',
    question: '哪些交给 AI，哪些必须人工确认？',
    output: 'AI 边界 / 人工接管',
  },
  {
    step: '04',
    title: '数据与反馈',
    label: 'Data & Feedback Fit',
    question: '数据是否能支撑判断，反馈是否可解释？',
    output: '数据源 / 状态 / 反馈',
  },
  {
    step: '05',
    title: '业务优先级',
    label: 'Business Priority',
    question: '这个方案现在是否值得占用团队资源？',
    output: '价值 / 成本 / 时机',
  },
  {
    step: '06',
    title: '风险识别',
    label: 'Risk Recognition',
    question: '上线前有哪些技术、权限、硬件和运营风险？',
    output: '风险清单 / 验证路径',
  },
  {
    step: '07',
    title: '是否值得开发',
    label: 'Go / No-Go',
    question: '要继续开发、换方向，还是先做更小验证？',
    output: '决策卡 / 下一步',
  },
] as const

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      data-section-id="framework"
      className="scroll-mt-16 border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 border-b border-[#D7DBE1] pb-10 lg:grid-cols-[minmax(260px,0.5fr)_minmax(0,1fr)] lg:items-end"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
            05 / Framework
          </p>
          <h2 className="mt-4 max-w-4xl text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111111] md:text-[50px] xl:text-[56px]">
            AI 产品判断框架
          </h2>
        </div>
        <p className="max-w-3xl text-[18px] font-medium leading-[1.7] text-[#20242A]">
          是否值得投入开发？
        </p>
      </motion.div>

      <div className="mt-8 overflow-hidden rounded-[8px] border border-[#D7DBE1] bg-white shadow-[0_12px_36px_rgba(17,17,17,0.035)]">
        <div className="grid min-h-12 grid-cols-[1fr_auto] items-center border-b border-[#E2E4E8] px-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#8A8F98]">
            Product validation board
          </p>
          <span className="flex items-center gap-2 text-[12px] font-semibold text-[#126B4E]">
            <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
            reviewable
          </span>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-7">
          {framework.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.48, delay: index * 0.035 }}
              className={`flex min-h-[320px] flex-col border-b border-[#E2E4E8] p-5 xl:border-b-0 xl:border-r xl:last:border-r-0 ${
                index === framework.length - 1 ? 'bg-[#F8FAFF]' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[12px] font-semibold text-[#0037C5]">
                  {item.step}
                </p>
                <span className={index === framework.length - 1 ? 'h-2 w-2 rounded-full bg-[#0037C5]' : 'h-2 w-2 rounded-full bg-[#C5CAD2]'} />
              </div>
              <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.08em] text-[#8A8F98]">
                {item.label}
              </p>
              <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#111111]">
                {item.title}
              </h3>
              <p className="mt-5 text-[14px] leading-[1.75] text-[#5D626B]">
                {item.question}
              </p>
              <div className="mt-auto border-t border-[#E2E4E8] pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8F98]">
                  Output
                </p>
                <p className="mt-2 text-[13px] font-medium leading-relaxed text-[#20242A]">
                  {item.output}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
