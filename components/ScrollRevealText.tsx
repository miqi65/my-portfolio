'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const text =
  '我帮助团队将高密度业务逻辑转化为对操作者无障碍使用的界面——同时构建让设计规模化交付的工程基础：从企业级 Design System 到自动化设计到代码的交付路线。'

// Split into characters for granular reveal
function RevealChar({ char, progress, start, end }: {
  char: string
  progress: any
  start: number
  end: number
}) {
  const color = useTransform(progress, [start, end], ['#CCCCCC', '#111111'])
  return (
    <motion.span style={{ color }} className="inline-block whitespace-pre-wrap">
      {char}
    </motion.span>
  )
}

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.3'],
  })

  const chars = text.split('')

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-8 md:px-12 overflow-hidden"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="w-8 h-px bg-ink" />
        <span className="text-[11px] tracking-[0.3em] uppercase text-muted">Philosophy</span>
      </motion.div>

      {/* Scroll-reveal text block */}
      <div className="max-w-5xl">
        <p
          className="text-[5vw] md:text-[3.8vw] leading-tight font-light tracking-tight"
          aria-label={text}
        >
          {chars.map((char, i) => {
            const segmentSize = 1 / chars.length
            const start = i * segmentSize
            const end = Math.min(start + segmentSize * 6, 1)
            return (
              <RevealChar
                key={i}
                char={char}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            )
          })}
        </p>
      </div>

      {/* Background label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 flex items-center justify-end"
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#DDDDDD]">
          12 Years · 60+ Projects
        </span>
      </motion.div>
    </section>
  )
}
