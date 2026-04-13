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
          <div className="overflow-hidden mb-1">
            <motion.p
              variants={lineVariants}
              className="text-[19px] leading-[1.8] text-white/80"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              嗨！
            </motion.p>
          </div>

          {/* Headline — 3 lines */}
          {['我是杨蜜萁', '在AI与智能硬件之间', '做设计的高级产品设计师'].map((line) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="text-[36px] md:text-[44px] xl:text-[52px] font-normal leading-[1.3] text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: '-0.04em',
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
          className="mt-8 text-[15px] leading-[1.9] text-white/50 max-w-sm"
          style={{ fontFamily: "var(--font-display)" }}
        >
          从冷库IoT监控到AI视觉质检系统，11年复杂B端经验<br />
          约束越多，设计越有意思
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
            className="inline-flex items-center px-10 py-[10px] border-2 border-white rounded-[24px] text-[15px] text-white/80 transition-all duration-300 hover:bg-white hover:text-[#0d0d0d] hover:border-white"
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
