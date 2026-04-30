'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    num: '01',
    label: 'Industrial AI · HMI',
    title: 'AI 视觉质检系统',
    desc: '让 AI 辅助视觉检测。将机器视觉算法结果以对操作者友好的方式呈现，软硬件一体化 HMI 设计，适配工厂环境的强光与噪声干扰。',
    tags: ['HMI', 'Industrial AI', 'Vision Inspection', 'Embedded UI'],
    image: '/images/p1-cover-hero.png',
    href: '/Project_P1/index.html',
  },
  {
    num: '02',
    label: 'GIS · Tracking System',
    title: '轨迹定位跟踪系统',
    desc: '面向大型工业园区的载体定位与轨迹追踪系统，解决传统人工管理效率低下的痛点，实现分区管理、实时追踪与灵活信息呈现。',
    tags: ['GIS', 'Tracking', 'Industrial'],
    image: '/国家能源/project/assets/bg-cover.png',
    href: '/国家能源/project/Portfolio.html',
  },
  {
    num: '03',
    label: 'B端 · 双端全链路',
    title: 'CYG 智能仓储管理系统',
    desc: '覆盖 Web 管理端与 RF 手持终端的双端全链路设计，打通入库、拣货、盘点全流程，在高密度信息环境下保持操作效率与可读性。',
    tags: ['WMS', 'B端设计', 'RF Terminal', 'Full-Stack Design'],
    image: '/Project_P2/images/P2_01_hero_mockup.png',
    href: '/Project_P2/index.html',
  },
  {
    num: '04',
    label: 'Data Visualization · Dashboard',
    title: '友讯达数据大屏',
    desc: '从庞大的生产数据中提炼价值，以直觉友好的可视化方式呈现，降低数据分析成本，帮助管理层快速洞察生产态势与业务结构。',
    tags: ['Dashboard', 'Data Viz', 'B端设计', 'Visual Design'],
    image: '/友讯达/project/友讯达大屏/友讯达封面图.jpg',
    href: '/友讯达/project/友讯达大屏/index.html',
  },
  {
    num: '05',
    label: 'Design System',
    title: '设计工程化的三次进化',
    desc: '从手搓规范到 Machine–Readable Design System，记录设计与工程协作三个阶段的演进路径，探索让设计决策可被机器理解与消费的方法论。',
    tags: ['Design System', 'Design Tokens', 'Engineering', 'Figma'],
    image: '/images/p3-cover.png',
    href: '/Project_P3/index.html',
  },
  {
    num: '06',
    label: 'Interaction Spec',
    title: '5G消息 Chatbot 交互规范体系',
    desc: '制定通用交互规范，在 5G 消息受限渲染环境中保持品牌一致性与可读性，覆盖组件定义、状态规则与多场景适配指南。',
    tags: ['Chatbot', '5G Message', 'Interaction Spec', 'Brand'],
    image: '/images/p4-cover.png',
    href: '/Project_P4/index.html',
  },
]

export default function ProjectGrid() {
  return (
    <section id="works" className="w-full">
      {projects.map((project, i) => (
        <ProjectRow key={project.num} project={project} index={i} />
      ))}
    </section>
  )
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  // Fix: index 0 → text left, image right (natural reading order)
  const reversed = index % 2 !== 0

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`flex flex-col gap-6 ${reversed ? 'order-1 lg:order-2' : ''}`}
    >
      <div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">
          {project.num} / {project.label}
        </p>
        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight text-ink">
          {project.title}
        </h2>
      </div>

      <p className="text-[15px] leading-relaxed text-[#666666]">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] border border-faint px-3 py-1 rounded-full text-[#555555] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Enlarged touch target: py-3 -my-3 */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block py-3 -my-3 w-fit"
      >
        <motion.div
          className="flex items-center gap-2 group"
          whileHover={{ gap: '12px' }}
        >
          <span className="text-[13px] tracking-wider uppercase font-medium text-ink">
            View Case
          </span>
          <div className="w-6 h-px bg-ink transition-all duration-300 group-hover:w-10" />
        </motion.div>
      </a>
    </motion.div>
  )

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full overflow-hidden ${reversed ? 'order-2 lg:order-1' : ''}`}
      style={{ aspectRatio: '16/9' }}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-full overflow-hidden group cursor-scale"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          sizes="(max-width: 1024px) 100vw, 722px"
        />
      </a>
    </motion.div>
  )

  return (
    <div className="relative w-full py-16 lg:py-24 overflow-hidden border-t border-[#F0F0F0]">
      <div className="max-w-[1170px] mx-auto px-5">
        <div
          className={`grid grid-cols-1 gap-8 lg:gap-12 items-center ${
            reversed
              ? 'lg:grid-cols-[1fr_400px]'
              : 'lg:grid-cols-[400px_1fr]'
          }`}
        >
          {reversed ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
