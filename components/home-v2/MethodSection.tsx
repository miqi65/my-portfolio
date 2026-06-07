'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import businessMapImage from './method-assets/ChatGPT_Image_2026_6_7__19_25_23__1_.png'
import decisionTreeImage from './method-assets/ChatGPT_Image_2026_6_7__19_25_24__3_.png'
import prototypeFlowImage from './method-assets/ChatGPT_Image_2026_6_7__19_25_25__5_.png'
import riskTableImage from './method-assets/ChatGPT_Image_2026_6_7__19_25_28__7_.png'

const SPOTIFY_GREEN = '#1ed760'
const NEAR_BLACK = '#121212'
const DARK_SURFACE = '#181818'
const MID_DARK = '#1f1f1f'
const WHITE = '#ffffff'
const SILVER = '#b3b3b3'
const BORDER_GRAY = '#4d4d4d'
const SECTION_CONTAINER = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true)
      },
      { threshold: 0.08 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, vis }
}

function PlaceholderDiagram({ title, type }: { title: string; type: 'map' | 'tree' | 'flow' | 'table' }) {
  const getIcon = () => {
    switch (type) {
      case 'map':
        return '🗺️'
      case 'tree':
        return '🌳'
      case 'flow':
        return '→'
      case 'table':
        return '📊'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: 120,
        background: MID_DARK,
        borderRadius: 8,
        border: `1px solid ${BORDER_GRAY}`,
        gap: 12,
      }}
    >
      <div style={{ fontSize: 32, opacity: 0.6 }}>{getIcon()}</div>
      <div
        style={{
          fontSize: 12,
          color: SILVER,
          textAlign: 'center',
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 10,
          color: SILVER,
          opacity: 0.5,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        Placeholder
      </div>
    </div>
  )
}

const CARDS = [
  {
    num: '01',
    title: '拆业务',
    desc: '理解业务目标、客户场景、用户任务和现实限制，先把问题讲清楚。',
    diagramType: 'map' as const,
  },
  {
    num: '02',
    title: '做判断',
    desc: '判断哪些功能值得做，哪些需要优化，哪些边界必须保留人工确认。',
    diagramType: 'tree' as const,
  },
  {
    num: '03',
    title: '做原型',
    desc: '用交互原型验证方案方向，而不是等开发后才发现问题。',
    diagramType: 'flow' as const,
  },
  {
    num: '04',
    title: '控风险',
    desc: '提前暴露权限、数据、算法、硬件、成本和上线风险。',
    diagramType: 'table' as const,
  },
] as const

function MethodCard({
  card,
  idx,
  vis,
}: {
  card: (typeof CARDS)[number]
  idx: number
  vis: boolean
}) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#1a1a1a' : DARK_SURFACE,
        borderRadius: 24,
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        boxShadow: hov ? '0 28px 68px rgba(0,0,0,0.42)' : '0 22px 56px rgba(0,0,0,0.32)',
        transform: hov ? 'translateY(-2px)' : 'translateY(0px)',
        transition: 'all 200ms ease',
        opacity: vis ? 1 : 0,
        transitionProperty: 'transform, opacity, background, box-shadow',
        transitionDuration: vis ? '200ms, 500ms, 200ms, 200ms' : '0ms',
        transitionDelay: vis ? `0ms, ${idx * 100 + 200}ms, 0ms, 0ms` : '0ms',
      }}
    >
      <div className="min-w-0">
        <h3 className="text-[22px] font-bold leading-[1.12] tracking-[-0.03em] text-[#f2f5ef] sm:text-[24px]">
          {card.title}
        </h3>
        <p className="mt-3 text-[14px] leading-7 text-[#b3b3b3] sm:text-[15px]">{card.desc}</p>
      </div>

      {card.diagramType === 'map' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 178,
            background: MID_DARK,
            borderRadius: 14,
            border: `1px solid ${BORDER_GRAY}`,
            overflow: 'hidden',
          }}
        >
          <ImageWithFallback
            src={businessMapImage.src}
            alt="业务地图示意图"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : card.diagramType === 'tree' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 178,
            background: MID_DARK,
            borderRadius: 14,
            border: `1px solid ${BORDER_GRAY}`,
            overflow: 'hidden',
          }}
        >
          <ImageWithFallback
            src={decisionTreeImage.src}
            alt="决策树示意图"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : card.diagramType === 'flow' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 178,
            background: MID_DARK,
            borderRadius: 14,
            border: `1px solid ${BORDER_GRAY}`,
            overflow: 'hidden',
          }}
        >
          <ImageWithFallback
            src={prototypeFlowImage.src}
            alt="原型流程示意图"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : card.diagramType === 'table' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 178,
            background: MID_DARK,
            borderRadius: 14,
            border: `1px solid ${BORDER_GRAY}`,
            overflow: 'hidden',
          }}
        >
          <ImageWithFallback
            src={riskTableImage.src}
            alt="风险清单示意图"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export function MethodSection() {
  const { ref, vis } = useInView()

  const fade = (delay: number) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
  })

  return (
    <section
      ref={ref}
      id="method"
      data-section-id="method"
      className="relative scroll-mt-16 overflow-hidden bg-[#121212] py-16 text-[#f2f5ef] sm:py-20 lg:scroll-mt-0 lg:py-[88px]"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
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
        <div className="max-w-[840px]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.2em] text-[#1ed760]" style={fade(0)}>
              05
            </span>
            <span className="text-[11px] font-normal uppercase leading-4 tracking-[0.2em] text-[#a7aea1]" style={fade(0)}>
              / Method
            </span>
          </div>

          <h2
            className="mt-4 text-[clamp(44px,4.4vw,64px)] font-black leading-[0.96] tracking-[-0.04em] text-[#f2f5ef] sm:max-w-[720px]"
            style={fade(100)}
          >
            我的工作方式
          </h2>

          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#b3b3b3] sm:text-[16px] sm:leading-7" style={fade(200)}>
            以系统思维和用户价值为核心，通过结构化方法与高效协作，把复杂产品从模糊想法推进到可验证、可评估、可落地的方案。
          </p>
        </div>

        <div className="mt-12 mb-12 grid gap-4 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <MethodCard key={card.num} card={card} idx={i} vis={vis} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodSection
