'use client'

import './globals.css'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <html lang="zh-CN">
      <head>
        <title>杨蜜萁 — 高级产品设计师</title>
        <meta name="description" content="从早期 IoT 冷库监控，到百万级 WMS/MES 系统重构，再到工业 AI 视觉质检机的软硬一体 HMI。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
