'use client'

import { motion } from 'framer-motion'
import { SectionGradientBackdrop } from './SectionGradientBackdrop'

const resumeHref = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'
const portfolioHref = '/杨蜜萁_9年经验产品设计_13622962831.pdf'
const emailHref = 'mailto:miqi0723@gmail.com?subject=%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E6%B2%9F%E9%80%9A'
const wechatHref = 'mailto:miqi0723@gmail.com?subject=%E5%BE%AE%E4%BF%A1%E8%81%94%E7%B3%BB%20%E4%BA%8C%E7%BB%B4%E7%A0%81'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function ContactSectionHeader() {
  return (
    <div className="flex items-center gap-2">
      <span
        style={{
          fontSize: '11px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          color: '#1ED760',
          letterSpacing: '0.2em',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        07
      </span>
      <span
        style={{
          fontSize: '11px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          color: '#B3B3B3',
          letterSpacing: '0.2em',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        / CONTACT
      </span>
    </div>
  )
}

function SignatureBlock() {
  return (
    <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
      <div className="leading-none">
        <span
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="block text-[52px] font-semibold italic leading-none text-[#1ED760] sm:text-[56px]"
        >
          Miki
        </span>
      </div>
      <div className="pb-1">
        <div className="text-[14px] font-semibold text-[#1ED760]">Product Designer</div>
        <div className="mt-2 text-[14px] leading-7 text-[#B3B3B3]">
          10+ 年产品体验设计经验
          <br />
          专注 B端系统 · AI应用 · 智能硬件
        </div>
      </div>
    </div>
  )
}

function ContactHeroMessage() {
  return (
    <div className="max-w-[840px]">
      <ContactSectionHeader />

      <h2 className="mt-3 max-w-[720px] text-[56px] font-bold leading-[1.05] tracking-[-0.045em] text-[#FDFDFD]">
        <span className="block">让复杂产品</span>
        <span className="block">
          更快变<span className="text-[#1ED760]">清楚</span>
        </span>
      </h2>

      <div className="mt-10 flex max-w-[640px] gap-4">
        <div className="mt-2 h-auto min-h-[92px] w-[3px] shrink-0 rounded-full bg-[#1ED760] shadow-[0_0_12px_rgba(30,215,96,0.45)]" />
        <p className="text-[18px] leading-[1.8] text-[#B3B3B3] sm:text-[19px]">
          如果你需要把 B端系统、AI应用或智能硬件产品，
          <br />
          从复杂需求推进到清晰流程、交互原型、风险识别和可落地方案，
          <br />
          我可以参与产品体验设计与早期验证。
        </p>
      </div>

      <div className="mt-10 max-w-[520px] text-[13px] font-medium uppercase tracking-[0.16em] text-[#7C7C7C]">
        TURN COMPLEXITY INTO CLARITY.
        <br />
        DESIGN WITH PURPOSE. DELIVER WITH IMPACT.
      </div>

      <SignatureBlock />
    </div>
  )
}

function ActionCard({
  number,
  title,
  description,
  href,
}: {
  number: string
  title: string
  description: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-[16px] border border-transparent bg-[#181818] p-6 text-left shadow-[rgba(0,0,0,0.3)_0px_8px_8px] transition duration-200 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,215,96,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_26%)] opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="text-[28px] font-medium leading-none tracking-[-0.02em] text-[#1ED760]">
          {number}
        </span>
        <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-[#FDFDFD] transition-transform duration-200 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#FDFDFD]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-[#B3B3B3]">{description}</p>
      </div>
    </a>
  )
}

function ActionCardGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <ActionCard number="01" title="下载简历 PDF" description="获取我的完整经历与技能" href={resumeHref} />
      <ActionCard number="02" title="查看 PDF 作品集" description="完整项目案例与设计思考" href={portfolioHref} />
      <ActionCard number="03" title="发送邮件" description="与我聊聊你的项目或岗位" href={emailHref} />
      <ActionCard number="04" title="微信联系" description="添加微信，快速沟通" href={wechatHref} />
    </div>
  )
}

function ContactInfoRow({
  label,
  value,
  valueClassName = '',
  href,
}: {
  label: string
  value: string
  valueClassName?: string
  href?: string
}) {
  const valueNode = href ? (
    <a
      href={href}
      className={`text-[16px] font-medium leading-[1.6] text-[#FDFDFD] transition-colors duration-200 hover:text-[#1ED760] ${valueClassName}`}
    >
      {value}
    </a>
  ) : (
    <span className={`text-[16px] font-medium leading-[1.6] text-[#FDFDFD] ${valueClassName}`}>{value}</span>
  )

  return (
    <div className="grid gap-2 py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center">
      <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#7C7C7C]">
        {label}
      </span>
      <div className="sm:justify-self-end">{valueNode}</div>
    </div>
  )
}

function ContactInfoPanel() {
  return (
    <div className="rounded-[16px] border border-transparent bg-[#181818] p-6 shadow-[rgba(0,0,0,0.3)_0px_8px_8px]">
      <div className="flex items-center gap-4">
        <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#1ED760]">
          CONTACT
        </span>
        <div className="h-px flex-1 bg-white/10" />
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-[#1ED760] shadow-[0_0_10px_rgba(30,215,96,0.8)]"
        />
      </div>

      <div className="mt-5 divide-y divide-white/[0.08]">
        <ContactInfoRow label="Email" value="miqi0723@gmail.com" href="mailto:miqi0723@gmail.com" />
        <ContactInfoRow label="WeChat" value="邮件联系后发送二维码" valueClassName="text-[#B3B3B3]" />
        <ContactInfoRow label="Location" value="Shenzhen / Zhuhai" valueClassName="text-[#B3B3B3]" />
        <ContactInfoRow
          label="Availability"
          value="Available for Product Design / UX roles"
          valueClassName="text-[#FDFDFD]"
        />
      </div>
    </div>
  )
}

function FooterBar() {
  return (
    <div className="mt-16 border-t border-white/10 pt-6">
      <div className="flex flex-col gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7C7C7C] sm:flex-row sm:items-center sm:justify-between">
        <span>2026 © MIKI. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-3">
          <span>THANKS FOR SCROLLING.</span>
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#1ED760] shadow-[0_0_10px_rgba(30,215,96,0.8)]"
          />
        </div>
      </div>
    </div>
  )
}

export default function ContactCTA() {
  return (
    <motion.section
      id="contact"
      data-section-id="contact"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      className="relative scroll-mt-16 overflow-hidden bg-[#121212] px-5 py-[92px] text-[#FDFDFD] sm:px-8 lg:scroll-mt-0 lg:px-12 xl:px-16"
    >
      <SectionGradientBackdrop variant="contact" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(300px,0.45fr)_minmax(0,1fr)] lg:gap-20">
          <ContactHeroMessage />

          <div className="flex flex-col gap-2">
            <ActionCardGrid />
            <ContactInfoPanel />
          </div>
        </div>

        <FooterBar />
      </div>
    </motion.section>
  )
}
