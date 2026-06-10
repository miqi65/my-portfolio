'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionGradientBackdrop } from './SectionGradientBackdrop'
import { V2_MIXED_TEXT_STACK } from './fontStacks'

type WorkCardItem = {
  num: '01' | '02' | '03' | '04'
  title: string
  desc: string
  caption: string
  href: string
  image: string
  imageAlt: string
  previewPosition?: 'object-center' | 'object-top'
}

const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

const works: WorkCardItem[] = [
  {
    num: '01',
    title: 'CYG 智能仓储系统',
    desc: '优化仓储作业流程与库存可视化，提升出入库效率与库存准确率。',
    caption: 'WAREHOUSE PRODUCT',
    href: '/Project_P2/index.html',
    image: '/Project_P2/images/P2_01_hero_mockup.png',
    imageAlt: 'CYG 智能仓储系统',
    previewPosition: 'object-center',
  },
  {
    num: '02',
    title: '友讯达数据大屏',
    desc: '整合多源数据，实时呈现关键业务指标，支撑管理层快速决策。',
    caption: 'DATA DASHBOARD',
    href: '/友讯达/project/友讯达大屏/index.html',
    image: '/友讯达/project/友讯达大屏/友讯达封面图.jpg',
    imageAlt: '友讯达数据大屏',
    previewPosition: 'object-top',
  },
  {
    num: '03',
    title: '轨迹定位系统',
    desc: '精准定位与轨迹追踪，为工业场景提供实时位置监控与历史路径分析。',
    caption: 'TRACKING PLATFORM',
    href: '/国家能源/project/Portfolio.html',
    image: '/国家能源/project/assets/bg-cover.png',
    imageAlt: '轨迹定位系统',
    previewPosition: 'object-center',
  },
  {
    num: '04',
    title: 'Chatbot 设计规范',
    desc: '建立统一的对话交互标准，保障 AI 产品体验的一致性与可扩展性。',
    caption: 'INTERACTION STANDARD',
    href: '/Project_P4/index.html',
    image: '/images/p4-cover.png',
    imageAlt: 'Chatbot 设计规范',
    previewPosition: 'object-top',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="none">
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function WorkCard({ work, index }: { work: WorkCardItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group flex h-full min-h-[428px] flex-col overflow-hidden rounded-[18px] border border-white/[0.04] bg-[#1F1F1F] p-3 shadow-[rgba(0,0,0,0.3)_0px_8px_8px] transition duration-300 hover:-translate-y-1 hover:bg-[#252525] hover:shadow-[rgba(0,0,0,0.5)_0px_8px_24px] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{ fontFamily: V2_MIXED_TEXT_STACK }}
    >
      <a
        href={work.href}
        className="flex h-full min-h-0 w-full flex-col text-left"
        aria-label={`查看案例：${work.title}`}
      >
        <div className="relative h-[214px] overflow-hidden rounded-[14px] bg-[#252525]">
          <Image
            src={work.image}
            alt={work.imageAlt}
            fill
            className={`object-cover ${work.previewPosition ?? 'object-center'} transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
            sizes="(min-width: 1280px) 24vw, (min-width: 768px) 46vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.02)_0%,rgba(18,18,18,0.12)_55%,rgba(18,18,18,0.42)_100%)]" />
          <div className="absolute left-4 top-4 text-[10px] font-bold uppercase leading-4 tracking-[0.2em] text-[#1ed760]">
            {work.num}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-1 pb-1 pt-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className="text-[19px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[21px]"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {work.title}
              </h3>
              <p className="mt-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.18em] text-[#8D8D8D]">
                {work.caption}
              </p>
            </div>

            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#313131] bg-[#181818] text-[#1ed760] transition duration-200 group-hover:border-[#4D4D4D] group-hover:bg-[#1F1F1F] motion-reduce:transition-none">
              <ArrowIcon />
            </span>
          </div>

          <p
            className="mt-4 text-[13px] leading-[1.6] text-[#B3B3B3] [--desc-lines:3] xl:max-w-[26ch] xl:[--desc-lines:2]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 'var(--desc-lines)',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {work.desc}
          </p>
        </div>
      </a>
    </motion.article>
  )
}

export default function MoreWorkSection() {
  return (
    <section
      id="more-work"
      data-section-id="more-work"
      className="relative scroll-mt-16 overflow-hidden border-b border-[#222222] bg-[#121212] py-16 text-[#f2f5ef] sm:py-20 lg:scroll-mt-0 lg:py-[88px]"
    >
      <SectionGradientBackdrop variant="more-work" />
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px] bg-[#181818] px-6 py-6 shadow-[rgba(0,0,0,0.5)_0px_8px_24px] sm:px-8 sm:py-8 lg:px-10 lg:py-10"
          style={{ fontFamily: V2_MIXED_TEXT_STACK }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,215,96,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(83,157,245,0.04),transparent_28%)]"
          />

          <div className="relative space-y-8">
            <motion.div className="max-w-[840px]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.2em] text-[#1ed760]">
                  04
                </span>
                <span className="text-[11px] font-normal uppercase leading-4 tracking-[0.2em] text-[#a7aea1]">
                  / More Work
                </span>
              </div>
              <h2 className="mt-4 text-[clamp(44px,4.4vw,64px)] font-black leading-[0.96] tracking-[-0.04em] text-[#f2f5ef] sm:max-w-[720px]">
                更多<span className="text-[#1ed760]">项目</span>经验
              </h2>
              <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#b3b3b3] sm:text-[16px] sm:leading-7">
                覆盖仓储系统、数据大屏、轨迹定位和 5G 消息交互规范等不同复杂度的产品场景。
              </p>
            </motion.div>

            <div className="pt-2">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {works.map((work, index) => (
                  <WorkCard key={work.title} work={work} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
