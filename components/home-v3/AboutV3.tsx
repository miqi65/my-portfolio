'use client'

import { HOME_V3 } from './tokens'

export default function AboutV3() {
  return (
    <section id="about" className={`relative border-t border-[#1F211F] bg-[#050505] ${HOME_V3.layout.sectionY}`}>
      <div className={HOME_V3.layout.container}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div>
            <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-4">06 / IDENTITY</p>
            <h2 className="text-[clamp(40px,5vw,64px)] font-black text-[#F2F5EF] uppercase mb-2">Miki</h2>
            <div className="inline-flex px-3 py-1 bg-[#1A1C1A] border border-[#2A2C29] rounded text-[10px] font-mono text-[#A7AEA1] uppercase tracking-widest mb-8">Senior Product Designer</div>
            
            <p className="text-[15px] leading-relaxed text-[#A7AEA1] mb-8">
              拥有 10+ 年数字产品体验设计经验。深耕 B端复杂系统、工业 AI、HMI 与智能硬件领域。习惯以严谨的工程思维解构模糊业务，通过推导约束边界与交互原型，保障产品稳健落地。
            </p>
            
            <p className="text-[13px] text-[#6F766B] mb-10">现居珠海，优先寻求深圳及大湾区的高级产品设计角色或可评估机会。</p>
            
            <a href="/杨蜜萁_高级UI_UX设计师.pdf" target="_blank" className="inline-flex items-center gap-3 text-[12px] font-bold font-mono tracking-widest text-[#B8E351] border-b border-[#B8E351] pb-1 hover:text-[#F2F5EF] hover:border-[#F2F5EF] transition-all">
              DOWNLOAD RESUME PDF <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <h3 className="text-[12px] font-mono text-[#F2F5EF] uppercase tracking-widest border-b border-[#1F211F] pb-4 mb-6">Domain Expertise</h3>
              <ul className="space-y-4">
                {['B端复杂系统设计 (B2B SaaS)', '工业 AI 与机器视觉 HMI', '智能硬件与软硬协同', 'Design System 设计体系', 'AI 辅助原型与方案验证'].map(s => (
                  <li key={s} className="text-[14px] text-[#A7AEA1] flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B8E351] rounded-full" /> {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-mono text-[#F2F5EF] uppercase tracking-widest border-b border-[#1F211F] pb-4 mb-6">Toolkit & Stack</h3>
              <ul className="space-y-4">
                {['Figma (Variables / AutoLayout)', 'Next.js / Tailwind CSS (基础)', 'Midjourney / AI 提效链', 'Axure / 高保真交互'].map(s => (
                  <li key={s} className="text-[14px] text-[#A7AEA1] flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#2A2C29] rounded-full" /> {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}