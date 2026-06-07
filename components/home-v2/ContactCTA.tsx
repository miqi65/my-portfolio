'use client'

import { motion } from 'framer-motion'

const resumeHref = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'
const portfolioHref = '/杨蜜萁_9年经验产品设计_13622962831.pdf'
const emailHref = 'mailto:hello@miki.design?subject=%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E6%B2%9F%E9%80%9A'
const wechatHref = 'mailto:hello@miki.design?subject=%E5%BE%AE%E4%BF%A1%E8%81%94%E7%B3%BB%20%E4%BA%8C%E7%BB%B4%E7%A0%81'

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
          color: '#75E03A',
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
          color: '#A8AEA5',
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
          className="block text-[52px] font-semibold italic leading-none text-[#75E03A] sm:text-[56px]"
        >
          Miki
        </span>
      </div>
      <div className="pb-1">
        <div className="text-[14px] font-semibold text-[#75E03A]">Product Designer</div>
        <div className="mt-2 text-[14px] leading-7 text-[#A8AEA5]">
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

      <h2 className="max-w-[720px] text-[clamp(64px,7.2vw,124px)] font-bold leading-[1.05] tracking-[-0.045em] text-[#F2F5EF]">
        <span className="block">让复杂产品</span>
        <span className="block">
          更快变<span className="text-[#75E03A]">清楚</span>
        </span>
      </h2>

      <div className="mt-10 flex max-w-[640px] gap-4">
        <div className="mt-2 h-auto min-h-[92px] w-[3px] shrink-0 rounded-full bg-[#75E03A] shadow-[0_0_12px_rgba(117,224,58,0.55)]" />
        <p className="text-[18px] leading-[1.8] text-[#A8AEA5] sm:text-[19px]">
          如果你需要把 B端系统、AI应用或智能硬件产品，
          <br />
          从复杂需求推进到清晰流程、交互原型、风险识别和可落地方案，
          <br />
          我可以参与产品体验设计与早期验证。
        </p>
      </div>

      <div className="mt-10 max-w-[520px] text-[13px] font-medium uppercase tracking-[0.16em] text-[#747B70]">
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
      className="group relative overflow-hidden rounded-[16px] border border-white/14 bg-[rgba(8,10,8,0.78)] p-8 text-left shadow-[rgba(0,0,0,0.5)_0px_8px_24px] transition duration-200 hover:-translate-y-1 hover:border-white/20 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(117,224,58,0.22),transparent_30%),radial-gradient(circle_at_top_left,rgba(117,224,58,0.06),transparent_26%)] opacity-70 transition-opacity duration-200 group-hover:opacity-100"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="text-[30px] font-medium leading-none tracking-[-0.02em] text-[#75E03A]">
          {number}
        </span>
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#F2F5EF] transition-transform duration-200 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>

      <div className="relative z-10 mt-10">
        <h3 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#F2F5EF]">
          {title}
        </h3>
        <p className="mt-4 text-[15px] leading-7 text-[#A8AEA5]">{description}</p>
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
      className={`text-[20px] font-medium leading-[1.5] text-[#F2F5EF] transition-colors duration-200 hover:text-[#75E03A] ${valueClassName}`}
    >
      {value}
    </a>
  ) : (
    <span className={`text-[20px] font-medium leading-[1.5] text-[#F2F5EF] ${valueClassName}`}>{value}</span>
  )

  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-center">
      <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#747B70]">
        {label}
      </span>
      <div className="sm:justify-self-end">{valueNode}</div>
    </div>
  )
}

function ContactInfoPanel() {
  return (
    <div className="rounded-[16px] border border-white/14 bg-[rgba(8,10,8,0.78)] p-8 shadow-[rgba(0,0,0,0.5)_0px_8px_24px]">
      <div className="flex items-center gap-4">
        <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#75E03A]">
          CONTACT
        </span>
        <div className="h-px flex-1 bg-white/10" />
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-[#75E03A] shadow-[0_0_10px_rgba(117,224,58,0.8)]"
        />
      </div>

      <div className="mt-6 divide-y divide-white/[0.08]">
        <ContactInfoRow label="Email" value="hello@miki.design" href="mailto:hello@miki.design" />
        <ContactInfoRow label="WeChat" value="邮件联系后发送二维码" valueClassName="text-[#A8AEA5]" />
        <ContactInfoRow label="Location" value="Shenzhen / Greater Bay Area" valueClassName="text-[#A8AEA5]" />
        <ContactInfoRow
          label="Availability"
          value="Available for Product Design / UX roles"
          valueClassName="text-[#75E03A]"
        />
      </div>
    </div>
  )
}

function FooterBar() {
  return (
    <div className="mt-16 border-t border-white/12 pt-6">
      <div className="flex flex-col gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#747B70] sm:flex-row sm:items-center sm:justify-between">
        <span>2026 © MIKI. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-3">
          <span>THANKS FOR SCROLLING.</span>
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#75E03A] shadow-[0_0_10px_rgba(117,224,58,0.8)]"
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
      className="relative scroll-mt-16 overflow-hidden bg-[#030503] px-5 py-[92px] text-[#F2F5EF] sm:px-8 lg:scroll-mt-0 lg:px-16 xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(117,224,58,0.16),transparent_22%),radial-gradient(circle_at_top_left,rgba(117,224,58,0.05),transparent_24%)] opacity-80"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-20">
          <ContactHeroMessage />

          <div className="flex flex-col gap-3">
            <ActionCardGrid />
            <ContactInfoPanel />
          </div>
        </div>

        <FooterBar />
      </div>
    </motion.section>
  )
}
