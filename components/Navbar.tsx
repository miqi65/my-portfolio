'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: '主页', href: '#about' },
  { label: '项目', href: '#works' },
  { label: '关于我', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const diff = current - lastScrollY.current

      // 始终在顶部附近时保持可见
      if (current < 80) {
        setVisible(true)
      } else if (diff > 6) {
        // 向下滚动超过 6px 才隐藏，避免抖动
        setVisible(false)
        if (menuOpen) setMenuOpen(false)
      } else if (diff < -6) {
        // 向上滚动超过 6px 才显示
        setVisible(true)
      }

      lastScrollY.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // 锁定/解锁 body 滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-12 xl:px-[160px] py-5 md:py-6 mix-blend-difference"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: visible ? 0 : '-100%' }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Logo — touch target ≥ 44×44px (Apple HIG), visual 28px mobile / 32px desktop */}
        <motion.a
          href="#"
          className="cursor-scale small select-none inline-flex items-center min-h-[44px] min-w-[44px]"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <img src="/images/miki_logo.svg" alt="miki logo" className="h-[28px] md:h-[32px] w-auto" />
        </motion.a>

        {/* 桌面端导航链接 */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="cursor-scale small text-[18px] font-normal text-white relative group"
              style={{ fontFamily: "var(--font-display)", lineHeight: '28.8px' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              whileHover={{ opacity: 0.6 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
        >
          <motion.span
            className="block w-6 h-[2px] bg-white origin-center"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white origin-center"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.header>

      {/* 移动端全屏菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white text-[32px] font-normal tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
