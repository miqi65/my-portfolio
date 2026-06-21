'use client'

import { motion } from 'framer-motion'
import { HOME_V3 } from './tokens'

const cases = [
  {
    num: '01',
    name: '工业 AI 视觉质检 HMI',
    type: 'Industrial AI / Human-AI Boundary',
    tags: ['多维数据', '异常接管', '置信度'],
    decision: '用置信度反馈与权限状态建立人机边界，将算法黑盒转化为操作流。',
    result: '培训周期 3天 → 1天。',
    href: '/projects/p1-new',
    img: '/images/p1/p1-hero-industrial-ai-hmi.png'
  },
  {
    num: '02',
    name: 'PCBA 插件机控制系统',
    type: 'B2B Control System / Manufacturing',
    tags: ['设备状态', '订单追踪', '权限控制'],
    decision: '机台异常转数字预警，减少车间对物理信号灯强依赖。',
    result: '管理效率 +28%、插件效率 +17%。',
    href: '/projects/pcb-new',
    img: '/images/pcb2026/pcb-new-home-cover.png'
  },
  {
    num: '03',
    name: 'AI 工作流设计交付链路',
    type: 'Design System / AI Delivery',
    tags: ['组件 Token', '规则沉淀', '高效交付'],
    decision: '高频规则沉淀为 AI 适用上下文，建立无损交付基建。',
    result: '大幅减少设计与前端重复沟通与返工。',
    href: '/Project_P3/index.html',
    img: '/Project_P3/images/p3image-3.png'
  }
]

export default function CoreCasesV3() {
  return (
    <section id="cases" className={`relative border-t border-[#1F211F] bg-[#050505] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="mb-16">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">02 / CORE CASES</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF]">产品验证证据系统</h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {cases.map((c, i) => (
            <motion.a key={c.num} href={c.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ delay: 0.1 }}
              className={`group flex flex-col ${i === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-[#121212] border border-[#2A2C29] rounded-[24px] overflow-hidden hover:border-[#4F544B] hover:shadow-2xl transition-all duration-500`}
            >
              {/* Image Section */}
              <div className={`w-full ${i === 0 ? 'lg:w-[60%]' : 'lg:w-[55%]'} relative overflow-hidden bg-[#1A1A1A] aspect-[4/3] lg:aspect-auto min-h-[320px]`}>
                <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 lg:hidden" />
              </div>

              {/* Content Section */}
              <div className={`w-full ${i === 0 ? 'lg:w-[40%]' : 'lg:w-[45%]'} p-8 lg:p-12 flex flex-col justify-center`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[16px] font-mono font-bold text-[#B8E351]">{c.num}</span>
                  <span className="text-[10px] font-mono text-[#A7AEA1] uppercase tracking-widest">{c.type}</span>
                </div>
                
                <h3 className="text-[28px] lg:text-[32px] font-bold text-[#F2F5EF] mb-4">{c.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {c.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#1A1C1A] border border-[#2A2C29] rounded-full text-[11px] text-[#A7AEA1]">{tag}</span>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-mono text-[#B8E351] uppercase tracking-widest mb-2">Key Decision</p>
                    <p className="text-[14px] text-[#F2F5EF] leading-relaxed font-medium">{c.decision}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6F766B] uppercase tracking-widest mb-2">Result</p>
                    <p className="text-[13px] text-[#A7AEA1]">{c.result}</p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#1F211F]">
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold text-[#F2F5EF] uppercase tracking-widest group-hover:text-[#B8E351] transition-colors">
                    View Case Study <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}