'use client'

import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'

const PORTRAIT_URL =
  '/images/home-v2/about-portrait.png'

const COLORS = {
  background: '#121212',
  surface: '#181818',
  surfaceMid: '#1f1f1f',
  spotifyGreen: '#1ed760',
  white: '#ffffff',
  silver: '#b3b3b3',
  nearWhite: '#cbcbcb',
  border: '#4d4d4d',
}

const timelineItems = [
  {
    id: '01',
    time: '2022 - 至今',
    role: '高级产品设计师 / 独立设计顾问',
    desc: '负责 AI 视觉、工业软件、B端系统与 Design System 相关项目的体验设计、原型验证与方案落地。',
  },
  {
    id: '02',
    time: '2020 - 2022',
    role: '产品设计师 / 工业互联网方向',
    desc: '主导 B端系统与数据平台的设计与落地，参与复杂业务流程、权限、数据结构和界面体验设计。',
  },
  {
    id: '03',
    time: '2017 - 2020',
    role: '交互设计师 / 智能硬件与 HMI 方向',
    desc: '专注 HMI、智能硬件产品和用户研究，处理软硬件结合场景中的交互流程与使用体验。',
  },
  {
    id: '04',
    time: '2014 - 2017',
    role: 'UI 设计师 / 企业管理与电商系统方向',
    desc: '参与企业管理软件、多功能产品界面与商业视觉设计，建立早期系统化设计能力。',
  },
]

const skillTags = [
  '复杂系统设计',
  'B端产品设计',
  'AI 应用体验',
  '工业软件 / HMI',
  '交互设计',
  'Design System',
  'AI 辅助原型验证',
  '产品方案落地',
  '业务洞察',
  '流程设计',
  '风险识别',
  '跨团队协作',
]

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        backgroundColor: COLORS.surfaceMid,
        borderRadius: '9999px',
        padding: '8px 16px',
        fontSize: '10.5px',
        color: COLORS.white,
        fontWeight: 600,
        display: 'inline-block',
        transition: 'all 140ms cubic-bezier(0.3, 0, 0.4, 1)',
        cursor: 'pointer',
        fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
        lineHeight: 1.33,
        textTransform: 'uppercase',
        letterSpacing: '1.6px',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.backgroundColor = COLORS.spotifyGreen
        el.style.color = '#000000'
        el.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.backgroundColor = COLORS.surfaceMid
        el.style.color = COLORS.white
        el.style.transform = 'scale(1)'
      }}
    >
      {label}
    </span>
  )
}

function TimelineItem({
  time,
  role,
  desc,
  isLast,
}: {
  time: string
  role: string
  desc: string
  isLast: boolean
}) {
  return (
    <div
      style={{ display: 'flex', gap: '16px', position: 'relative' }}
      onMouseEnter={(e) => {
        const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement
        const roleEl = e.currentTarget.querySelector('.timeline-role') as HTMLElement
        if (dot) {
          dot.style.backgroundColor = COLORS.spotifyGreen
          dot.style.boxShadow = `0 0 16px ${COLORS.spotifyGreen}80`
        }
        if (roleEl) roleEl.style.color = COLORS.spotifyGreen
      }}
      onMouseLeave={(e) => {
        const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement
        const roleEl = e.currentTarget.querySelector('.timeline-role') as HTMLElement
        if (dot) {
          dot.style.backgroundColor = COLORS.border
          dot.style.boxShadow = 'none'
        }
        if (roleEl) roleEl.style.color = COLORS.white
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '12px' }}>
        <div
          className="timeline-dot"
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: COLORS.border,
            flexShrink: 0,
            marginTop: '3px',
            transition:
              'background-color 200ms cubic-bezier(0.3, 0, 0.4, 1), box-shadow 200ms cubic-bezier(0.3, 0, 0.4, 1)',
            zIndex: 1,
          }}
        />
        {!isLast && (
          <div
            style={{
              width: '1px',
              flex: 1,
              backgroundColor: COLORS.border,
              opacity: 0.3,
              marginTop: '4px',
              minHeight: '32px',
            }}
          />
        )}
      </div>

      <div style={{ paddingBottom: isLast ? 0 : '24px', flex: 1 }}>
        <div
          style={{
            fontSize: '12px',
            color: COLORS.silver,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '4px',
            lineHeight: 1.5,
            textTransform: 'uppercase',
          }}
        >
          {time}
        </div>
        <div
          className="timeline-role"
          style={{
            fontSize: '14px',
            color: COLORS.white,
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
            fontWeight: 700,
            marginBottom: '6px',
            lineHeight: 1.3,
            transition: 'color 200ms cubic-bezier(0.3, 0, 0.4, 1)',
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: '14px',
            color: COLORS.silver,
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
            fontWeight: 400,
            lineHeight: 1.54,
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function AboutMkSection() {
  return (
    <motion.section
      id="about"
      data-section-id="about"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-16 border-b border-[#222222] bg-[#121212] px-5 py-20 text-[#f2f5ef] sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
      style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(300px,0.45fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="max-w-[840px]">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: COLORS.spotifyGreen,
                    letterSpacing: '0.2em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  06
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    color: COLORS.nearWhite,
                    letterSpacing: '0.2em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  / ABOUT
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(44px, 4.4vw, 64px)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  color: COLORS.white,
                  lineHeight: 0.96,
                  letterSpacing: '-0.04em',
                  margin: '16px 0 0',
                }}
              >
                关于我
              </h2>
            </div>

            <div
              style={{
                backgroundColor: COLORS.surface,
                borderRadius: '8px',
                boxShadow: 'rgba(0,0,0,0.3) 0px 8px 8px',
                overflow: 'hidden',
                position: 'relative',
                transition:
                  'transform 200ms cubic-bezier(0.3, 0, 0.4, 1), box-shadow 200ms cubic-bezier(0.3, 0, 0.4, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLElement
                const glow = card.querySelector('.green-glow') as HTMLElement
                card.style.transform = 'translateY(-6px)'
                card.style.boxShadow = 'rgba(0,0,0,0.5) 0px 8px 24px, 0 0 48px rgba(30,215,96,0.2)'
                if (glow) glow.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLElement
                const glow = card.querySelector('.green-glow') as HTMLElement
                card.style.transform = 'translateY(0)'
                card.style.boxShadow = 'rgba(0,0,0,0.3) 0px 8px 8px'
                if (glow) glow.style.opacity = '0.6'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <ImageWithFallback
                  src={PORTRAIT_URL}
                  alt="Miki - Senior Product Designer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.2)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="green-glow"
                  style={{
                    position: 'absolute',
                    bottom: '-60px',
                    right: '-60px',
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${COLORS.spotifyGreen}40 0%, ${COLORS.spotifyGreen}20 40%, transparent 70%)`,
                    pointerEvents: 'none',
                    transition: 'opacity 200ms cubic-bezier(0.3, 0, 0.4, 1)',
                    opacity: 0.6,
                  }}
                />
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: COLORS.surface,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '28px',
                    fontWeight: 700,
                    color: COLORS.white,
                    lineHeight: 1.1,
                    marginBottom: '4px',
                    letterSpacing: '0.01em',
                  }}
                >
                  Miki
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '10px',
                    fontWeight: 700,
                    color: COLORS.silver,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  PRODUCT DESIGNER
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: '88px' }}>
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
                  fontWeight: 700,
                  color: COLORS.white,
                  lineHeight: 1.3,
                  margin: '0 0 12px 0',
                  letterSpacing: 'normal',
                }}
              >
                专注复杂系统设计与产品落地的高级产品设计师
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
                  fontWeight: 400,
                  color: COLORS.silver,
                  lineHeight: 1.54,
                  margin: 0,
                }}
              >
                10+ 年 B2B 系统、AI 应用、工业软件与智能硬件领域经验。擅长将复杂业务与技术约束转化为清晰流程、可验证原型与可落地产品方案，与产品、研发、业务团队协作，推动产品从 0 到 1 或从 1 到 N。
              </p>
            </div>

            <div
              style={{
                height: '1px',
                backgroundColor: COLORS.border,
                opacity: 0.3,
                marginBottom: '24px',
              }}
            />

            <div style={{ marginBottom: '24px' }}>
              {timelineItems.map((item, idx) => (
                <TimelineItem
                  key={item.id}
                  time={item.time}
                  role={item.role}
                  desc={item.desc}
                  isLast={idx === timelineItems.length - 1}
                />
              ))}
            </div>

            <div
              style={{
                height: '1px',
                backgroundColor: COLORS.border,
                opacity: 0.3,
                marginBottom: '24px',
              }}
            />

            <div>
              <div
                style={{
                  fontSize: '10px',
                  fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
                  fontWeight: 700,
                  color: COLORS.silver,
                  letterSpacing: '2px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                核心能力
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skillTags.map((tag) => (
                  <SkillTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
