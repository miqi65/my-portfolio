'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: '12', unit: '年', label: '行业经验', sub: 'Years of Experience' },
  { number: '60', unit: '+', label: '落地项目', sub: 'Delivered Projects' },
  { number: '100', unit: '%', label: '客户好评', sub: 'Client Satisfaction' },
]

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-2 border-l border-[#EEEEEE] pl-8 md:pl-12 py-4"
    >
      {/* Big number */}
      <div className="flex items-end gap-1 leading-none">
        <motion.span
          className="text-[14vw] md:text-[8vw] font-bold leading-none text-ink tracking-tight"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          {stat.number}
        </motion.span>
        <span className="text-[6vw] md:text-[3.5vw] font-light text-ink mb-1">
          {stat.unit}
        </span>
      </div>

      {/* Labels */}
      <div>
        <p className="text-[16px] font-medium text-ink">{stat.label}</p>
        <p className="text-[12px] tracking-widest uppercase text-muted mt-0.5">{stat.sub}</p>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 px-8 md:px-12 border-t border-[#F0F0F0]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="w-8 h-px bg-ink" />
        <span className="text-[11px] tracking-[0.3em] uppercase text-muted">By the Numbers</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
