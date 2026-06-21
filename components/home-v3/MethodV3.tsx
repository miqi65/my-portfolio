'use client'

import { motion } from 'framer-motion'
import { HOME_V3 } from './tokens'

const methods = [
  { step: 'INPUT', desc: '界定业务目标与系统约束。', out: '约束清单' },
  { step: 'DECIDE', desc: '界定自动化与人工边界。', out: '人机边界' },
  { step: 'PROTOTYPE', desc: '可交互 Demo 验证假想。', out: '验证原型' },
  { step: 'RISK', desc: '预判数据异常与边缘 Case。', out: '风险清单' },
  { step: 'DELIVER', desc: '建立可无损落地的规范。', out: '交付规范' },
]

export default function MethodV3() {
  return (
    <section id="method" className={`relative border-t border-[#1F211F] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="text-center mb-16">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">05 / METHODOLOGY</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF]">执行链路说明书</h2>
        </div>

        <div className="hidden lg:flex items-center justify-between relative mb-8 px-12">
          <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-[#1F211F] -z-10" />
          {methods.map((m, i) => (
            <div key={m.step} className="w-4 h-4 rounded-full bg-[#1A1C1A] border-2 border-[#2A2C29] ring-4 ring-[#121212]" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {methods.map((m, i) => (
            <motion.div key={m.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[#121212] border border-[#2A2C29] rounded-[16px] p-6 hover:border-[#B8E351]/50 transition-colors"
            >
              <div className="text-[10px] font-mono text-[#6F766B] mb-2">STEP 0{i+1}</div>
              <h3 className="text-[14px] font-bold text-[#F2F5EF] font-mono tracking-widest mb-3">{m.step}</h3>
              <p className="text-[12px] text-[#A7AEA1] mb-6">{m.desc}</p>
              <div className="pt-4 border-t border-[#1F211F]">
                <span className="text-[12px] font-medium text-[#B8E351]">{m.out}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}