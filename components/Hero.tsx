'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'

// Load Three.js particle system client-side only
const ParticleUniverse = dynamic(() => import('./ParticleUniverse'), {
  ssr: false,
  loading: () => null,
})

const MODE_LABELS = ['Nebula', 'Torus', 'Lattice', 'Vortex'] as const

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
}
const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const [mode, setMode]       = useState(0)
  const [palette]             = useState(0)

  const handleSetMode = (idx: number) => setMode(idx)

  return (
    <>
      <section
        ref={ref}
        id="about"
        className="relative flex flex-col overflow-hidden bg-[#030305]"
        style={{ minHeight: '100svh' }}
      >
        {/* ── WebGL Particle Background ───────────────────────── */}
        <div className="absolute inset-0 z-0">
          <ParticleUniverse targetMode={mode} colorPalette={palette} />
        </div>

        {/* ── Scanlines overlay ───────────────────────────────── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-40 mix-blend-overlay"
          style={{
            background: 'linear-gradient(to bottom, transparent, transparent 50%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.06))',
            backgroundSize: '100% 4px',
          }}
        />

        {/* ── Vignette ────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.75) 120%)' }}
        />

        {/* ── Hero Text — centered, parallax ──────────────────── */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-6 text-center pt-24 pb-36 md:pt-0 md:pb-20"
        >
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            {/* Greeting */}
            <div className="overflow-hidden mb-3">
              <motion.p
                variants={lineVariants}
                className="text-[11px] md:text-[13px] font-mono tracking-[0.3em] text-white/40 uppercase"
              >
                嗨！
              </motion.p>
            </div>

            {/* Headline */}
            {(['我是杨蜜萁', '高级产品设计师', 'AI 产品 · B 端体验 · 软硬一体'] as const).map((line) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="text-[22px] xs:text-[26px] sm:text-[38px] md:text-[52px] xl:text-[64px] font-semibold leading-[1.15] tracking-tighter
                             text-transparent bg-clip-text
                             bg-gradient-to-b from-white via-white/90 to-white/40 pb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
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
            className="mt-7 text-[15px] md:text-lg leading-[1.75] text-white/55 max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            十一年复杂场景设计经验，繁处见秩序，简处见功力。
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#works"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full
                         bg-black/40 backdrop-blur-sm border border-white/10
                         hover:bg-white/5 hover:border-white/25
                         text-[13px] font-medium text-white/85 hover:text-white
                         transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              看看我做过什么
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-full
                         border border-orange-500/35 text-white/75
                         hover:text-white hover:bg-orange-500/5 hover:border-orange-500/60
                         transition-all duration-300 text-[13px] font-medium
                         shadow-[0_0_14px_-4px_rgba(249,115,22,0.15)]
                         hover:shadow-[0_0_20px_-4px_rgba(249,115,22,0.3)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              联系我
            </a>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 1.6, duration: 6, times: [0, 0.1, 0.85, 1], ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        >
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
            <rect x="1" y="1" width="22" height="36" rx="11" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
            <motion.rect
              x="11" y="8" width="2" height="7" rx="1" fill="white" fillOpacity="0.45"
              animate={{ y: [8, 16, 8] }}
              transition={{ duration: 1.8, repeat: 2, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* ── HUD: Bottom-left — Mode Selector ────────────────── */}
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 w-56 pointer-events-auto">
          <div
            className="p-3 rounded-xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            style={{ background: 'rgba(10,10,12,0.78)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-1.5 mb-2.5 px-0.5">
              {/* cpu icon */}
              <svg className="w-3 h-3 text-white/35" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">Simulation</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {MODE_LABELS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => handleSetMode(i)}
                  className={`
                    group relative flex items-center justify-between px-2.5 py-2 rounded-lg
                    transition-all duration-200 text-left border
                    ${mode === i
                      ? 'bg-white/[0.08] border-white/15'
                      : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'}
                  `}
                >
                  <span className={`text-[10px] font-medium transition-colors ${mode === i ? 'text-white' : 'text-white/55 group-hover:text-white/90'}`}>
                    {label}
                  </span>
                  <span className="text-[9px] font-mono text-white/20">{String(i + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── Client logo strip ─────────────────────────────────── */}
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
