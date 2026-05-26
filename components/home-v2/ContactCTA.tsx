'use client'

import { motion } from 'framer-motion'

const resumeHref = '/杨蜜萁_高级UI_UX设计师_13622962831.pdf'
const portfolioHref = '/杨蜜萁_9年经验产品设计_13622962831.pdf'
const emailHref = 'mailto:hello@miki.design?subject=%E4%BA%A7%E5%93%81%E9%AA%8C%E8%AF%81%E6%B2%9F%E9%80%9A'

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
    >
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

export default function ContactCTA() {
  return (
    <section
      id="contact"
      data-section-id="contact"
      className="scroll-mt-16 bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:scroll-mt-0 lg:px-12 lg:py-28 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.62fr)] lg:items-end"
      >
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0037C5]">
            09 / Contact
          </p>
          <h2 className="mt-4 max-w-5xl text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111111] md:text-[76px] xl:text-[88px]">
            想更快判断一个产品想法是否值得做？
          </h2>
          <p className="mt-8 max-w-3xl text-[20px] leading-[1.75] text-[#5D626B]">
            用 60 秒 Demo 和验证框架，提前看见方向、边界和风险。
          </p>
        </div>

        <div className="rounded-[8px] border border-[#D7DBE1] bg-white p-6 shadow-[0_12px_36px_rgba(17,17,17,0.04)] md:p-8">
          <div className="grid gap-3">
            <a
              href={emailHref}
              className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-[8px] bg-[#111111] px-5 py-3 text-[14px] font-semibold text-white transition duration-200 hover:bg-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              预约沟通
              <ArrowIcon />
            </a>
            <a
              href="#cases"
              className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-[8px] border border-[#D5DAE2] px-5 py-3 text-[14px] font-semibold text-[#111111] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              查看案例
              <ArrowIcon />
            </a>
            <a
              href={resumeHref}
              className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-[8px] border border-[#D5DAE2] px-5 py-3 text-[14px] font-semibold text-[#111111] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              下载简历
              <ArrowIcon />
            </a>
          </div>

          <div className="mt-8 border-t border-[#E2E4E8] pt-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A8F98]">
              Contact details
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href="mailto:hello@miki.design"
                className="group inline-flex min-h-11 items-center justify-between gap-3 rounded-[8px] border border-[#E2E4E8] px-4 py-3 text-[14px] font-medium text-[#20242A] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
              >
                hello@miki.design
                <ArrowIcon />
              </a>
              <button
                type="button"
                aria-disabled="true"
                className="inline-flex min-h-11 cursor-default items-center justify-between gap-3 rounded-[8px] border border-[#E2E4E8] px-4 py-3 text-[14px] font-medium text-[#6F7680]"
              >
                微信入口按钮
                <span className="h-2 w-2 rounded-full bg-[#2EB67D]" />
              </button>
              <a
                href={portfolioHref}
                className="group inline-flex min-h-11 items-center justify-between gap-3 rounded-[8px] border border-[#E2E4E8] px-4 py-3 text-[14px] font-medium text-[#20242A] transition duration-200 hover:border-[#0037C5] hover:text-[#0037C5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0037C5] motion-reduce:transition-none"
              >
                PDF 作品集按钮
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
