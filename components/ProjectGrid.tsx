'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 'left1',
    title: '铝材 AI 视觉质检系统',
    subtitle: '让 AI 辅助视觉检测',
    image: '/images/p1-cover.png',
    href: '../Project_P1/index.html',
  },
  {
    id: 'right1',
    title: 'CYG 智能仓储管理系统',
    subtitle: 'Web管理端 + RF手持终端 | 双端全链路设计',
    image: '/images/p2-cover.png',
    href: '/Project_P2/index.html',
  },
  {
    id: 'left2',
    title: '设计工程化的三次进化',
    subtitle: '从手搓规范到 Machine–Readable Design System',
    image: '/images/p3-cover.png',
    href: '/Project_P3/index.html',
  },
  {
    id: 'right2',
    title: '5G消息Chatbot交互规范体系',
    subtitle: '制定通用交互规范，在受限环境中保持品牌一致性与可读性',
    image: '/images/p4-cover.png',
    href: '/Project_P4/index.html',
  },
]

export default function ProjectGrid() {
  const leftProjects = [projects[0], projects[2]]
  const rightProjects = [projects[1], projects[3]]

  return (
    <section id="projects" className="py-24 px-8 md:px-12 border-t border-[#F0F0F0]">
      {/* Header row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-ink" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-muted">More Works</span>
          </div>
          <h2 className="text-[6vw] md:text-[4vw] font-bold leading-none text-ink">项目案例</h2>
        </div>
        <span className="text-[13px] text-muted hidden md:block">2018 — 2026</span>
      </motion.div>

      {/* 2-column staggered grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
        {/* Left column */}
        <div className="flex flex-col gap-16 md:gap-20">
          {leftProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i * 2} />
          ))}
        </div>

        {/* Right column — offset downward for staggered effect */}
        <div className="flex flex-col gap-16 md:gap-20 md:mt-[18%]">
          {rightProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i * 2 + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Caption */}
      <div className="mt-5 space-y-1">
        <p className="text-[18px] font-semibold leading-snug text-ink">{project.title}</p>
        <p className="text-[14px] font-normal text-muted leading-snug">{project.subtitle}</p>
      </div>
    </motion.div>
  )

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block cursor-scale">
        {inner}
      </a>
    )
  }

  return <div className="cursor-scale">{inner}</div>
}
