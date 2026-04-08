'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: '11', unit: '年', label: '行业经验', sub: 'Years of Experience' },
  { number: '60', unit: '+', label: '落地项目', sub: 'Delivered Projects' },
  { number: '100', unit: '%', label: '客户好评', sub: 'Client Satisfaction' },
]

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2 border-l border-[#2C2C2E] pl-6 py-2"
    >
      <div className="flex items-end gap-1 leading-none">
        <motion.span
          className="text-[36px] md:text-[38px] font-bold leading-none text-white tracking-tight tabular-nums"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.15 }}
        >
          {stat.number}
        </motion.span>
        <span className="text-[18px] md:text-[20px] font-light text-[#8E8E93] mb-0.5">
          {stat.unit}
        </span>
      </div>
      <div>
        <p className="text-[14px] font-medium text-white tracking-wide">{stat.label}</p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#636366] mt-0.5">{stat.sub}</p>
      </div>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-20 pb-12 overflow-hidden">
      <div style={{ width: '1170px', maxWidth: 'calc(100% - 40px)', margin: '0 auto' }}>

        {/* Main two-column layout */}
        <div className="flex flex-col md:flex-row md:items-end gap-16 md:gap-0 mb-20">

          {/* LEFT: By the Numbers */}
          <div className="md:w-2/3 md:pr-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>

          {/* Vertical divider (desktop only) */}
          <div className="hidden md:block w-px bg-[#1C1C1E] self-stretch mx-0" />

          {/* RIGHT: Get in Touch */}
          <div className="md:w-1/3 md:pl-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-8"
            >
              <motion.a
                href="mailto:miqi723@163.com"
                className="cursor-scale block text-[5vw] md:text-[1.6vw] font-bold leading-tight text-white tracking-tight group relative w-fit break-all"
                whileHover={{ opacity: 0.65 }}
                transition={{ duration: 0.2 }}
              >
                miqi723@163.com
                <motion.span
                  className="absolute -bottom-2 left-0 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] text-[#8E8E93] leading-relaxed max-w-sm"
            >
              如果你有复杂的工业或企业项目，正在寻找能兼顾业务逻辑与视觉秩序的设计师<br />欢迎随时联系我
            </motion.p>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-[#1C1C1E] pt-8 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[12px] text-[#ffffff] tracking-wide">
            Yang Miki · Portfolio · UX / Product Designer / AI
          </p>

          <p className="text-[10px] text-[#ffffff] tracking-wider">
            © All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
