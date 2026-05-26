'use client'

import { motion } from 'framer-motion'

const works = [
  {
    title: '企业数字分析平台',
    desc: '面向经营与运营团队的数据指标、趋势洞察和权限化分析体验。',
    tags: ['Dashboard', 'Data Model'],
  },
  {
    title: '设备运维监控平台',
    desc: '整合设备状态、告警等级、派单流转和远程诊断路径。',
    tags: ['Operation', 'Monitoring'],
  },
  {
    title: 'HMI 操作界面设计',
    desc: '为工厂现场设备建立低误触、强反馈、可接管的操作界面。',
    tags: ['HMI', 'Industrial UI'],
  },
  {
    title: '设计系统搭建',
    desc: '沉淀组件、状态、Token、交付规则和跨团队复用规范。',
    tags: ['Design System', 'Token'],
  },
  {
    title: '硬件配套移动应用',
    desc: '连接设备绑定、状态查看、远程控制和异常提醒的移动端体验。',
    tags: ['Mobile', 'Hardware'],
  },
  {
    title: '工业视觉数字化改造',
    desc: '把传统质检链路拆解为采集、识别、复核、追溯的数字流程。',
    tags: ['Vision', 'Workflow'],
  },
  {
    title: 'AI 图像验证 Demo',
    desc: '用可点击原型验证识别结果、置信度、人工确认和回退机制。',
    tags: ['AI Demo', 'Validation'],
  },
  {
    title: '低代码后台搭建',
    desc: '快速组织表单、权限、流程、数据表和管理端验证场景。',
    tags: ['Low-code', 'Admin'],
  },
] as const

export default function MoreWorkSection() {
  return (
    <section
      id="more-work"
      data-section-id="more-work"
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
            06 / More Work
          </p>
          <h2 className="mt-4 text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] md:text-[60px]">
            更多作品
          </h2>
        </div>
        <p className="max-w-3xl text-[17px] leading-[1.9] text-[#5D626B]">
          覆盖企业数字化、工业软件、智能硬件、AI 验证和后台工具等不同复杂度的产品场景。
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {works.map((work, index) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.48, delay: index * 0.035 }}
            className="group flex min-h-[280px] flex-col rounded-[8px] border border-[#E2E4E8] bg-white p-5 shadow-[0_8px_28px_rgba(17,17,17,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#0037C5] hover:shadow-[0_18px_44px_rgba(17,17,17,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#0037C5]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#C5CAD2] transition duration-200 group-hover:bg-[#0037C5] motion-reduce:transition-none" />
            </div>

            <div className="mt-8 grid gap-2 rounded-[8px] border border-[#E2E4E8] bg-[#FAFAFA] p-3">
              <span className="h-2 w-1/2 rounded-full bg-[#D7DBE1]" />
              <span className="h-2 w-4/5 rounded-full bg-[#E2E4E8]" />
              <span className="h-16 rounded-[6px] border border-[#D7DBE1] bg-white" />
            </div>

            <h3 className="mt-7 text-[23px] font-semibold leading-tight tracking-[-0.03em] text-[#111111]">
              {work.title}
            </h3>
            <p className="mt-4 text-[14px] leading-[1.75] text-[#5D626B]">
              {work.desc}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {work.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#D7DBE1] px-3 py-1 text-[11px] font-medium text-[#6F7680]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
