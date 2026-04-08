'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// 按中文语义断句：界面—— 为第一句收尾，同时…为第二句起首
const lines = [
  '我帮助团队将高密度业务逻辑转化为对操作者无障碍使用的界面——',
  '同时构建让设计规模化交付的工程基础：从企业级 Design System 到自动化设计到代码的交付路线。',
]

// 将多行合并为带 '\n' 分隔的字符数组
const chars = lines.flatMap((line, li) => [
  ...line.split(''),
  ...(li < lines.length - 1 ? ['\n'] : []),
])

function RevealChar({
  char,
  progress,
  start,
  end,
}: {
  char: string
  progress: any
  start: number
  end: number
}) {
  const color = useTransform(progress, [start, end], ['#CCCCCC', '#111111'])
  if (char === '\n') return <br />
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

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* 与 ProfileIntroSection 同宽、居中 */}
      <div style={{ width: '1170px', maxWidth: 'calc(100% - 40px)', margin: '0 auto' }}>
        {/* Scroll-reveal text block — font halved from original 5vw/3.8vw */}
        <div>
          <p
            style={{ lineHeight: 1.6 }}
            className="font-light tracking-tight text-[28px] md:text-[32px] text-center"
            aria-label={lines.join('')}
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

      </div>
    </section>
  )
}
