'use client'

import { motion } from 'framer-motion'

const methods = [
  {
    num: '01',
    title: '拆业务',
    desc: '把老板、客户、产品、工程的信息拆成角色、目标、场景、任务和边界。',
    output: '业务地图 / 用户任务 / 流程边界',
  },
  {
    num: '02',
    title: '做判断',
    desc: '先判断问题是否真实、流程是否成立、AI 是否真的能降低成本或提升效率。',
    output: '判断框架 / 优先级 / Go / No-Go',
  },
  {
    num: '03',
    title: '搭 Demo',
    desc: '用可点击原型呈现关键路径、AI 状态、人工确认和异常接管方式。',
    output: '可演示 Demo / 核心界面 / 状态链路',
  },
  {
    num: '04',
    title: '控风险',
    desc: '在开发前暴露数据、权限、算法、硬件、成本和上线风险。',
    output: '风险清单 / 验收标准 / 下一步',
  },
] as const

export default function MethodSection() {
  return (
    <section
      id="method"
      data-section-id="method"
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
            07 / Method
          </p>
          <h2 className="mt-4 max-w-4xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] md:text-[60px]">
            我的工作方式
          </h2>
        </div>
        <p className="max-w-3xl text-[18px] font-medium leading-[1.7] text-[#20242A]">
          拆业务 / 做判断 / 搭 Demo / 控风险
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 xl:grid-cols-4">
        {methods.map((method, index) => (
          <motion.article
            key={method.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.48, delay: index * 0.045 }}
            className="flex min-h-[390px] flex-col rounded-[8px] border border-[#E2E4E8] bg-white p-6 shadow-[0_8px_28px_rgba(17,17,17,0.03)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold text-[#0037C5]">
                {method.num}
              </p>
              <span className={index === 2 ? 'h-2 w-2 rounded-full bg-[#0037C5]' : 'h-2 w-2 rounded-full bg-[#C5CAD2]'} />
            </div>
            <h3 className="mt-16 text-[34px] font-semibold leading-none tracking-[-0.04em] text-[#111111]">
              {method.title}
            </h3>
            <p className="mt-6 text-[15px] leading-[1.85] text-[#5D626B]">
              {method.desc}
            </p>
            <div className="mt-auto rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8F98]">
                Output
              </p>
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-[#20242A]">
                {method.output}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
