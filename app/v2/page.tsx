import type { Metadata } from 'next'
import HomeV2 from '../../components/home-v2/HomeV2'

export const metadata: Metadata = {
  title: 'Miki Portfolio',
  description: '高级产品设计师，B端 / AI应用 / 智能硬件方向。AI辅助原型验证与产品方案落地。',
  icons: {
    icon: '/images/home-v2/hero/logo.svg',
    shortcut: '/images/home-v2/hero/logo.svg',
    apple: '/images/home-v2/hero/logo.svg',
  },
}

export default function V2Page() {
  return <HomeV2 />
}
