'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: '主页', href: '#about' },
  { label: '项目', href: '#works' },
  { label: '关于我', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 xl:px-[160px] py-6 mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="cursor-scale small text-[44px] text-white select-none"
        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.2 }}
      >
        miki.
      </motion.a>

      {/* Nav links */}
      <nav className="flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="cursor-scale small text-[18px] font-normal text-white relative group"
            style={{ fontFamily: "'PingFang SC', 'Noto Sans SC', sans-serif", lineHeight: '28.8px' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            whileHover={{ opacity: 0.6 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  )
}
