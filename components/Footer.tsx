'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper px-8 md:px-12 pt-24 pb-12 overflow-hidden">
      {/* Top: intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-paper opacity-30" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#888888]">Get in Touch</span>
        </div>
        <p className="text-[16px] text-[#888888] max-w-xl leading-relaxed">
          如果你有一个复杂的工业或企业项目，正在寻找一个能兼顾业务逻辑与视觉秩序的设计师——欢迎联系。
        </p>
      </motion.div>

      {/* Giant email */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <motion.a
          href="mailto:miqi723@163.com"
          className="cursor-scale block text-[6vw] md:text-[4.5vw] font-bold leading-none text-paper tracking-tight group relative w-fit"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          miqi723@163.com
          <motion.span
            className="absolute -bottom-2 left-0 h-[3px] bg-paper"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.a>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="border-t border-[#222222] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        {/* Left: name + role */}
        <div>
          <p className="text-[20px] font-bold text-paper">杨蜜萁</p>
          <p className="text-[13px] text-[#666666] mt-1 tracking-wide">
            Industrial UX Designer · Est. 2014
          </p>
        </div>

        {/* Center: contact details */}
        <div className="flex flex-col gap-2 text-[13px] text-[#666666]">
          <a href="tel:13622962831" className="hover:text-paper transition-colors duration-200">
            电话：13622962831
          </a>
          <span>小红书：机智维他命</span>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-6">
          {[
            { label: 'Email', href: 'mailto:miqi723@163.com' },
            { label: '小红书', href: 'https://xhslink.com/m/AjJa4jzxN3Y' },
            { label: 'LinkedIn', href: '#' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="cursor-scale small text-[12px] tracking-widest uppercase text-[#666666] hover:text-paper transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-paper transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-[11px] text-[#444444] tracking-wider"
      >
        © 2024 杨蜜萁. All rights reserved. · Designed & built with Next.js + R3F
      </motion.p>
    </footer>
  )
}
