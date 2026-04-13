import './globals.css'
import type { Metadata } from 'next'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import LenisProvider from '@/components/LenisProvider'

export const metadata: Metadata = {
  title: '杨蜜萁 — 高级产品设计师',
  description: '从早期 IoT 冷库监控，到百万级 WMS/MES 系统重构，再到工业 AI 视觉质检机的软硬一体 HMI。',
  openGraph: {
    title: '杨蜜萁 — 高级产品设计师',
    description: '11年复杂B端与智能硬件设计经验，工业AI / WMS / HMI 全端设计师。',
    url: 'https://miki-portfolio.vercel.app',
    siteName: 'Miki Portfolio',
    images: [
      {
        url: '/images/p1-cover-hero.png',
        width: 1200,
        height: 630,
        alt: '杨蜜萁作品集封面',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '杨蜜萁 — 高级产品设计师',
    description: '11年复杂B端与智能硬件设计经验，工业AI / WMS / HMI 全端设计师。',
    images: ['/images/p1-cover-hero.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LenisProvider />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
