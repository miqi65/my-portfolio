"use client";

import svgPaths from "../imports/5Gchatbot/svg-x5lekoojnc";
import imgHero from "../imports/5Gchatbot/902bd9cb5345e95748b19b0a35ef01cb4f60a3f5.png";
import imgChallenges from "../imports/5Gchatbot/a169984832e56fd99a6974db941e6246f6758413.png";
import imgStrategy1 from "../imports/5Gchatbot/c6d713bf855a8399cbf3882240f2ed94e204cc6e.png";
import imgSpec from "../imports/5Gchatbot/f21bc47bf40d6c7af0e89e41b96507852425354c.png";
import imgStrategy2 from "../imports/5Gchatbot/f8eb217af3bca6a7db483191f74f0068285aac8e.png";
import imgDeliverables from "../imports/5Gchatbot/449724633cc62d0afe68e79ac547f710cc5249c1.png";
import imgNextProject from "../imports/5Gchatbot/3829fadc0e9472939fa554b8f2710edd317813fe.png";
import imgNextProjectOverlay from "../imports/5Gchatbot/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png";

type ImageAsset = string | { src: string };

const imageSrc = (image: ImageAsset) => (typeof image === "string" ? image : image.src);

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full font-sans">
      <div aria-hidden className="h-[88px] md:h-[96px]" />

      {/* ── Hero Section ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-10 pb-0">
        <h1 className="font-['Noto_Sans_SC',sans-serif] font-bold text-[#111] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight mb-12 md:mb-16 lg:mb-20">
          5G消息Chatbot交互规范体系
        </h1>
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src={imageSrc(imgHero)}
            alt="5G Chatbot 项目封面"
            className="w-full h-[280px] sm:h-[400px] md:h-[540px] lg:h-[680px] xl:h-[787px] object-cover"
          />
        </div>
      </section>

      {/* ── Project Overview ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 lg:pt-28 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between">

          {/* Left: description + results */}
          <div className="w-full lg:max-w-[620px]">
            <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-3">项目概览</p>
            <p className="font-['Noto_Sans_SC',sans-serif] text-[#111] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.4] mb-12">
              5G 消息运行于手机原生短信入口，技术环境被高度受限。本项目的核心目标，是跳出单一项目的定制化设计，针对极高的容错成本与极其碎片的设备渲染差异，建立一套"最小公约数"适配规范，并将这套规范成功推行至包含 15 人的跨职能团队，实现后续项目的无缝复用与低成本交付。
            </p>

            <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-4">项目成果</p>
            <div className="flex flex-row flex-wrap gap-x-10 gap-y-8 sm:gap-x-16">
              <div>
                <div className="flex items-end gap-1">
                  <span className="font-['Inter',sans-serif] font-medium text-[40px] leading-[1] text-[#111]">15</span>
                  <span className="font-['Inter',sans-serif] text-[20px] leading-[1.2] text-[#111] mb-0.5">人</span>
                </div>
                <p className="font-['Inter','Noto_Sans_SC',sans-serif] text-[12px] text-[#111] mt-1">规范覆盖人数</p>
              </div>
              <div>
                <div className="flex items-end gap-0.5">
                  <span className="font-['Inter',sans-serif] font-medium text-[40px] leading-[1] text-[#111]">40</span>
                  <span className="font-['Inter',sans-serif] text-[20px] leading-[1.2] text-[#111] mb-0.5">%</span>
                </div>
                <p className="font-['Inter','Noto_Sans_SC',sans-serif] text-[12px] text-[#111] mt-1">新增项目交付效率提升</p>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <span className="font-['Inter',sans-serif] font-medium text-[40px] leading-[1] text-[#111]">3</span>
                  <span className="font-['Noto_Sans_SC',sans-serif] text-[20px] leading-[1.2] text-[#111] mb-0.5">项</span>
                </div>
                <p className="font-['Inter','Noto_Sans_SC',sans-serif] text-[12px] text-[#111] mt-1">获得奖项</p>
              </div>
            </div>
          </div>

          {/* Right: metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-12 gap-y-8 lg:pt-2 lg:pr-8">
            <div>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-1.5">交付物</p>
              <div className="font-['Noto_Sans_SC',sans-serif] text-[18px] text-black leading-[1.4] space-y-0">
                <p>交互规范体系</p>
                <p>组件适配标准</p>
                <p>标准业务流</p>
              </div>
            </div>
            <div>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-1.5">范围</p>
              <div className="font-['Noto_Sans_SC',sans-serif] text-[18px] text-black leading-[1.4]">
                <p>UX</p>
                <p>视觉系统规范</p>
                <p>设计运营</p>
              </div>
            </div>
            <div>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-1.5">项目类型</p>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[18px] text-black leading-[1.4]">5G通信</p>
            </div>
            <div>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-1.5">角色</p>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[18px] text-black leading-[1.4]">交互设计负责人</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Challenges ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 lg:pt-28">
        <div className="w-full rounded-2xl overflow-hidden relative">
          <img
            src={imageSrc(imgChallenges)}
            alt="核心挑战背景"
            className="w-full h-[420px] sm:h-[560px] md:h-[680px] lg:h-[787px] object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.77)] backdrop-blur-[3px] rounded-2xl" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 md:px-20 lg:px-28 xl:px-40">
            <p className="font-['Noto_Sans_SC',sans-serif] text-[#e2e5e9] text-[16px] text-center mb-6 md:mb-8">核心挑战</p>
            <div className="font-['Noto_Sans_SC',sans-serif] text-[#fafafa] max-w-[560px] mx-auto lg:mx-0 lg:ml-auto space-y-5">
              <div>
                <p className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[1.33] mb-1">#1.「1-1-1」单线流程</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]">原生短信入口缺乏灵活的 UI 控件，交互被锁死在线性链路中，用户只能单向步步推进，操作容错成本极高。</p>
              </div>
              <div>
                <p className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[1.33] mb-1">#2.渲染规则碎片化</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]">各主流安卓手机厂商对同一卡片的渲染逻辑差异巨大，且无法像 App 一样分版本精准下发控制。</p>
              </div>
              <div>
                <p className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[1.33] mb-1">#3.用户画像无边界</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5]">服务对象横跨在校学生至政务办事人员，认知折叠度极高，无法套用单一互联网圈层的用户心智。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Strategy #1 & #2 ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-12 md:pt-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Image left */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
            <img
              src={imageSrc(imgStrategy1)}
              alt="设计策略截图"
              className="w-full h-[360px] sm:h-[480px] lg:h-[660px] xl:h-[798px] object-cover"
            />
          </div>
          {/* Text right */}
          <div className="w-full lg:w-1/2 lg:pt-40">
            <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-6">设计策略</p>
            <div className="font-['Noto_Sans_SC',sans-serif] text-[#111] text-[16px] leading-[1.5] space-y-5">
              <div>
                <p className="font-bold text-[18px] leading-[1.33] mb-2">#1:确立「最小公约数」适配基准</p>
                <p className="mb-1">策略：放弃追求单设备上的"完美视觉"，转而针对碎片化渲染，建立严苛的「安全区」标准。重新定义色彩对比度、系统字体调用规则与图片安全裁切比例，确保信息在所有厂商设备上的信息传达不失真。</p>
                <p>价值：从源头斩断了多机型适配的冗余测试与修改成本。</p>
              </div>
              <div>
                <p className="font-bold text-[18px] leading-[1.33] mb-2">#2:极简颗粒度的防错交互</p>
                <p className="mb-1">策略：针对「1-1-1」线性链路和极宽的用户画像，采取"剥夺思考"的交互策略。将复杂的业务逻辑拆解为极简的单步选项，确保用户在每一步的认知负荷降至最低。</p>
                <p>价值：在容错率极低的环境下，用最克制的选项保障了主链路的高转化率。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spec full-width image ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-12 md:pt-16">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src={imageSrc(imgSpec)}
            alt="规范文档截图"
            className="w-full h-[280px] sm:h-[400px] md:h-[540px] lg:h-[680px] xl:h-[787px] object-cover"
          />
        </div>
      </section>

      {/* ── Design Strategy #3 ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-12 md:pt-16">
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
          {/* Image right */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
            <img
              src={imageSrc(imgStrategy2)}
              alt="组织推行截图"
              className="w-full h-[360px] sm:h-[480px] lg:h-[660px] xl:h-[798px] object-cover"
            />
          </div>
          {/* Text left */}
          <div className="w-full lg:w-1/2 lg:pt-40">
            <div className="font-['Noto_Sans_SC',sans-serif] text-[#111] text-[16px] leading-[1.5] space-y-3">
              <p className="font-bold text-[18px] leading-[1.33]">#3:组织提效与规范布道</p>
              <p>策略：规范不应停留在文档。作为唯一的设计负责人，通过 40+ 次的高频内部培训，将复杂的交互逻辑与视觉适配标准，强力推行至 15 人的研发与交付团队。</p>
              <p>价值：将个人的专业认知转化为团队的流水线能力，使后续新增项目可以直接调用规范，极大压缩了沟通与设计交付周期。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables text ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-[620px] ml-auto mr-0 lg:mr-16 xl:mr-28">
          <div className="font-['Noto_Sans_SC',sans-serif] text-[#111] text-[16px] leading-[1.5] space-y-2">
            <p>交付资产</p>
            <p className="text-transparent select-none">​</p>
            <p>Fig. 01 — Interaction Flow (交互链路重构)：基于「贴近用户真实物理环境」原则，输出标准化的线性对话流程模板与节点信息传达策略。</p>
            <p>Fig. 02 — Design System (视觉最小公约数)：定义色彩语义、系统级字体降级方案、图片自适应安全区的全套规范。</p>
          </div>
        </div>
      </section>

      {/* ── Deliverables full-width image ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-12 md:pt-16 pb-0">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src={imageSrc(imgDeliverables)}
            alt="交付物截图"
            className="w-full h-[280px] sm:h-[400px] md:h-[540px] lg:h-[680px] xl:h-[787px] object-cover"
          />
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24">
        <div className="max-w-[620px]">
          <p className="font-['Noto_Sans_SC',sans-serif] text-[#717171] text-[16px] leading-[1.4] mb-4">业务结果与行业认可</p>
          <div className="font-['Noto_Sans_SC',sans-serif] text-[#111] text-[16px] leading-[1.5] space-y-1.5">
            <p>规范落地后，直接支撑的 3 个核心项目在 2021 年收获行业顶层认可，验证了"克制且标准化的设计"在复杂 B/G 端场景下的绝对商业价值：</p>
            <p>• &nbsp;&nbsp; 🏆 2021 绽放杯 三等奖</p>
            <p>• &nbsp;&nbsp; 🏆 行业优秀创新奖</p>
            <p>• &nbsp;&nbsp; 🏆 智慧教育优秀奖（注：其中智慧校园项目成功入选国家 5G+ 智慧教育应用试点）</p>
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="mt-20 md:mt-28 bg-[#111] relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center py-20 md:py-28 lg:py-36 px-6 text-center">
          <p className="font-['Noto_Sans_SC',sans-serif] text-[#474747] text-[16px] sm:text-[20px] md:text-[24px] uppercase tracking-wide mb-4">下一个项目</p>
          <h2 className="font-['Noto_Sans_SC',sans-serif] font-bold text-[#111] text-[28px] sm:text-[36px] md:text-[46px] uppercase text-white mb-10">
            PCBA 插件机控制系统
          </h2>

          {/* Preview card */}
          <div className="relative w-[200px] sm:w-[280px] md:w-[349px] rounded-lg overflow-hidden group cursor-pointer">
            <p className="font-['Noto_Sans_SC',sans-serif] text-[#fafafa] text-[13px] mb-2 text-left">[UI/UX]</p>
            <div className="w-full h-[120px] sm:h-[160px] md:h-[198px] relative rounded-lg overflow-hidden">
              <img src={imageSrc(imgNextProject)} alt="PCBA 项目预览" className="absolute inset-0 w-full h-full object-cover" />
              <img src={imageSrc(imgNextProjectOverlay)} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#fafafa] text-[13px]">WILD</p>
              <p className="font-['Noto_Sans_SC',sans-serif] text-[#fafafa] text-[13px] opacity-50">RESPONSIVE WEB</p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/10 flex items-center justify-between px-6 md:px-10 py-4">
          <p className="font-['Roboto_Mono',monospace] text-[#2f2f2f] text-[13px] md:text-[14px]">COLLECTION OF WORK</p>
          <p className="font-['Roboto_Mono',monospace] text-[#2f2f2f] text-[13px] md:text-[14px]">COPYRIGHT 2026</p>
          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
            aria-label="回到顶部"
          >
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
              <path d={svgPaths.p15b83e00} stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path clipRule="evenodd" d={svgPaths.p33198480} fill="#2F2F2F" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

    </div>
  );
}
