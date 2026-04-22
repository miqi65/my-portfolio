'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
}

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}


export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
    <section
      ref={ref}
      id="about"
      className="cursor-scale hero-noise relative flex flex-col bg-[#0d0d0d] overflow-hidden"
    >
      {/* Main hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-12 xl:px-[160px] pt-28 pb-24"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          {/* Greeting */}
          <div className="overflow-hidden mb-2">
            <motion.p
              variants={lineVariants}
              className="text-[15px] leading-[1.6] text-white/40 tracking-[0.12em]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              嗨！
            </motion.p>
          </div>

          {/* Headline — 3 lines */}
          {['我是杨蜜萁', '高级产品设计师', 'AI 产品 · B 端体验 · 软硬一体'].map((line) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="text-[40px] md:text-[52px] xl:text-[60px] font-bold leading-[1.18] text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: '-0.025em',
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[17px] leading-[1.7] text-white/45 max-w-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          十一年复杂场景设计经验，繁处见秩序，简处见功力。
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href="#works"
            className="inline-flex items-center px-10 py-[12px] border border-white/50 rounded-full text-[14px] tracking-[0.12em] text-white/70 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            看看我做过什么
          </a>
        </motion.div>

        {/* Mouse scroll indicator — centered, fades out after 3 loops */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 1.6, duration: 6, times: [0, 0.1, 0.85, 1], ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="36" rx="11" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
            <motion.rect
              x="11" y="8" width="2" height="7" rx="1" fill="white" fillOpacity="0.5"
              animate={{ y: [8, 16, 8] }}
              transition={{ duration: 1.8, repeat: 2, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.div>

    </section>

    {/* Client logo strip — separate light section */}
    <div className="bg-[#f5f5f5]">
      <div className="px-8 md:px-12 xl:px-[160px] py-8 flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-16">
          <Image
            src="/images/logo.svg"
            alt="合作客户"
            fill
            className="object-contain object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </>
  )
}
