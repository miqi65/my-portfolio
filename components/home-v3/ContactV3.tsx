'use client'

import { HOME_V3 } from './tokens'

export default function ContactV3() {
  return (
    <section id="contact" className={`relative border-t border-[#1F211F] pb-24 pt-24`}>
      <div className={HOME_V3.layout.container}>
        <div className="bg-[#121212] border border-[#2A2C29] rounded-[32px] p-10 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B8E351] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
          
          <div className="w-full lg:w-1/2 relative z-10">
            <p className="text-[11px] font-mono tracking-[0.2em] text-[#B8E351] mb-6">07 / INQUIRY</p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-black text-[#F2F5EF] leading-[1.1] mb-6">
              推进你的复杂产品<br/><span className="text-[#B8E351]">稳健落地。</span>
            </h2>
            <p className="text-[15px] text-[#A7AEA1] max-w-[400px]">开放评估 B端系统、AI应用、智能硬件方向的高级产品设计师角色（驻地或 Remote）。</p>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10">
            <a href="mailto:miqi0723@gmail.com" className="group h-[64px] px-8 flex items-center justify-between bg-[#B8E351] text-[#0A0A0A] font-bold text-[15px] rounded-[16px] hover:bg-[#cbf765] transition-all shadow-[0_8px_24px_rgba(184,227,81,0.2)]">
              发送邮件联络
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/杨蜜萁_高级UI_UX设计师.pdf" target="_blank" className="group h-[64px] px-8 flex items-center justify-between border border-[#2A2C29] bg-[#161816] text-[#F2F5EF] font-bold text-[15px] rounded-[16px] hover:border-[#B8E351]/50 hover:bg-[#1A1C1A] transition-all">
              下载履历 PDF
              <svg className="w-5 h-5 text-[#6F766B] group-hover:text-[#B8E351] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <div className="mt-6 flex items-center justify-between px-2 text-[11px] font-mono text-[#6F766B] uppercase tracking-widest">
              <span>WeChat: _00Y0Y_</span>
              <span>Based: ZH / SZ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}