import type { Metadata } from 'next'
import HomeV3 from '../../components/home-v3/HomeV3'

export const metadata: Metadata = {
  title: 'Miki Portfolio V3 | Senior Product Designer',
  description: '高级产品设计师，聚焦 B端复杂系统、工业 AI、HMI 与智能硬件。把模糊需求转化为清晰可验的产品方案。',
}

export default function V3Page() {
  return <HomeV3 />
}