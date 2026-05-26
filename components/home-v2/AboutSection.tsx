'use client'

import { motion } from 'framer-motion'

const aboutCards = [
  {
    title: '关注方向',
    desc: 'B 端复杂系统、AI 应用、智能硬件、工业软件与 HMI。',
  },
  {
    title: '擅长能力',
    desc: '信息架构、流程重组、交互策略、设计系统和跨团队沟通。',
  },
  {
    title: '产品验证 Demo',
    desc: '用可点击原型提前验证场景、路径、状态和决策证据。',
  },
  {
    title: 'AI 协作界面',
    desc: '设计建议生成、人工确认、异常接管和可解释反馈链路。',
  },
  {
    title: '风险识别',
    desc: '在开发前整理数据、权限、算法、硬件、成本和上线风险。',
  },
] as const

const capabilityRows = [
  ['Focus', 'B端复杂系统 / AI应用 / 智能硬件'],
  ['Experience', '8+ 年产品设计经验'],
  ['Method', 'AI 辅助 × 结构化设计'],
  ['Delivery', '从原型到落地的闭环'],
] as const

export default function AboutSection() {
  return (
    <section
      id="about"
      data-section-id="about"
      className="scroll-mt-16 border-b border-[#E2E4E8] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 lg:grid-cols-[minmax(300px,0.45fr)_minmax(0,1fr)]"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
            08 / About
          </p>
          <h2 className="mt-4 max-w-xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] md:text-[60px]">
            关于 Miki
          </h2>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[8px] border border-[#D7DBE1] bg-white p-6 shadow-[0_10px_32px_rgba(17,17,17,0.035)] md:p-8">
            <p className="text-[22px] font-semibold leading-[1.65] tracking-[-0.02em] text-[#111111]">
              我是 Miki，高级产品设计师，专注于 B 端复杂系统、AI 应用与智能硬件方向。
            </p>
            <p className="mt-6 text-[18px] leading-[1.9] text-[#5D626B]">
              我更擅长把复杂或模糊的产品想法转化成可理解、可演示、可评估、可推进的方案。
            </p>

            <div className="mt-10 grid gap-0 overflow-hidden rounded-[8px] border border-[#E2E4E8] md:grid-cols-4">
              {capabilityRows.map(([label, value]) => (
                <div key={label} className="border-b border-[#E2E4E8] p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8A8F98]">
                    {label}
                  </p>
                  <p className="mt-3 text-[14px] font-semibold leading-relaxed text-[#20242A]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {aboutCards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.44, delay: index * 0.04 }}
                className="min-h-[190px] rounded-[8px] border border-[#E2E4E8] bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-[#0037C5]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className={index === 0 ? 'h-2 w-2 rounded-full bg-[#0037C5]' : 'h-2 w-2 rounded-full bg-[#C5CAD2]'} />
                </div>
                <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.02em] text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.75] text-[#5D626B]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
