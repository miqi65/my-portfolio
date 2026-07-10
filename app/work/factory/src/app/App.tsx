import ProjectNextSection from "@/components/ProjectNextSection";
const imgContainer = "/images/work/factory-dashboard/01-hero.webp";
const imgContainer1 = "/images/work/factory-dashboard/02-overview.webp";
const imgContainer2 = "/images/work/factory-dashboard/03-data-dashboard.webp";
const imgContainer3 = "/images/work/factory-dashboard/04-production-analysis.webp";
const imgContainer4 = "/images/work/factory-dashboard/05-alert-system.webp";
const imgContainer5 = "/images/work/factory-dashboard/06-management-view.webp";
const imgContainer6 = "/images/work/factory-dashboard/07-final-screen.webp";

// ─── Typography helpers ───────────────────────────────────────────────────────
const robotoMono = "font-['Roboto_Mono',monospace] font-normal";
const notoSC = "font-['Noto_Sans_SC',sans-serif] font-normal";
const notoSCBold = "font-['Noto_Sans_SC',sans-serif] font-bold";
const inter = "font-['Inter',sans-serif] font-normal";
const interMedium = "font-['Inter',sans-serif] font-medium";

type ImageAsset = string | { src: string };

const imageSrc = (image: ImageAsset) => (typeof image === "string" ? image : image.src);

function OptimizedCaseImage({
  loading = "lazy",
  decoding = "async",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img loading={loading} decoding={decoding} {...props} />;
}

// ─── Hero section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center px-5 sm:px-8 lg:px-16 xl:px-[164px]">
      <div className="w-full max-w-[1398px] flex flex-col gap-[80px] items-start">
        {/* Title */}
        <h1 className={`${notoSCBold} text-[#111] text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.4]`}>
          友讯达数据大屏
        </h1>
        {/* Hero image */}
        <div className="w-full rounded-[16px] overflow-hidden">
          <OptimizedCaseImage
            loading="eager"
            fetchPriority="high"
            alt="友讯达数据大屏 hero"
            className="w-full h-auto object-cover"
            src={imageSrc(imgContainer)}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Project info section ─────────────────────────────────────────────────────
function ProjectInfoSection() {
  return (
    <section className="w-full flex flex-col items-center px-5 sm:px-8 lg:px-16 xl:px-[164px] mt-[120px]">
      <div className="w-full max-w-[1398px] flex flex-col xl:flex-row gap-12 xl:gap-0 items-start">
        {/* Left: overview + results */}
        <div className="w-full lg:max-w-[680px] flex flex-col">
          {/* Overview */}
          <div className="flex flex-col">
            <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>项目概述</p>
            <div className="pt-[10px]">
              <p className={`${notoSC} text-[#111] text-[22px] leading-[30.8px] max-w-[680px]`}>
                本项目围绕智能工厂生产场景，在 2 个月内从零构建了一套集中化的大屏监控中枢。通过将产能、设备、质量与异常状态进行高信噪比的可视化转译，帮助管理层从"凭经验盲猜"转向"看数据秒级决策"，并成功将其打造为公司 B 端产品平台化能力的展示样板。
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-[48px]" />

          {/* Results */}
          <div className="flex flex-col gap-2">
            <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>项目成果</p>
            <div className="flex flex-row flex-wrap gap-8 mt-1">
              {/* Metric 1 */}
              <div className="flex flex-col">
                <div className="flex items-end gap-0.5">
                  <span className={`${interMedium} text-[40px] leading-[60px] tracking-[0.37px] text-[#111]`}>69</span>
                  <span className={`${inter} text-[20px] leading-[44px] tracking-[-0.45px] text-[#111]`}>%</span>
                </div>
                <p className={`${inter} text-[12px] leading-[18px] text-[#111]`}>客户满意度评分 ≥6 分占比</p>
              </div>
              {/* Metric 2 */}
              <div className="flex flex-col">
                <div className="flex items-end gap-0.5">
                  <span className={`${interMedium} text-[40px] leading-[60px] tracking-[0.37px] text-[#111]`}>31</span>
                  <span className={`${inter} text-[20px] leading-[44px] tracking-[-0.45px] text-[#111]`}>%</span>
                </div>
                <p className={`${inter} text-[12px] leading-[18px] text-[#111]`}>满分占比</p>
              </div>
              {/* Metric 3 */}
              <div className="flex flex-col">
                <div className="flex items-end gap-0.5">
                  <span className={`${interMedium} text-[40px] leading-[60px] tracking-[0.37px] text-[#111]`}>43</span>
                  <span className={`${inter} text-[20px] leading-[44px] tracking-[-0.45px] text-[#111]`}>%</span>
                </div>
                <p className={`${inter} text-[12px] leading-[18px] text-[#111] max-w-[200px]`}>可视化作为决策支撑工具，运营改善的整体结果</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: metadata */}
        <div className="flex w-full flex-col gap-8 xl:ml-auto xl:w-[420px] xl:gap-0 xl:relative">
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 xl:block xl:gap-0">
            {/* 交付物 */}
            <div className="xl:absolute xl:left-0 xl:top-0">
              <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>交付物</p>
              <p className={`${notoSC} text-[18px] leading-[25.2px] text-black mt-1.5`}>数据可视化大屏</p>
            </div>
            {/* 范围 */}
            <div className="xl:absolute xl:left-[210px] xl:top-0">
              <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>范围</p>
              <p className={`${notoSC} text-[18px] leading-[25.2px] text-black mt-1.5`}>UI/UX</p>
            </div>
            {/* 项目类型 */}
            <div className="xl:absolute xl:left-0 xl:top-[78px]">
              <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>项目类型</p>
              <p className={`${notoSC} text-[18px] leading-[25.2px] text-black mt-1.5`}>数据可视化</p>
            </div>
            {/* 角色 */}
            <div className="xl:absolute xl:left-0 xl:top-[157px]">
              <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px]`}>角色</p>
              <p className={`${notoSC} text-[18px] leading-[25.2px] text-black mt-1.5`}>主设计师</p>
            </div>
          </div>
          {/* invisible spacer for the absolute-positioned children on lg */}
          <div className="hidden xl:block h-[240px]" />
        </div>
      </div>
    </section>
  );
}

// ─── Split panel sections (image + text) ──────────────────────────────────────
interface SplitSectionProps {
  imageLeft?: boolean;
  image: ImageAsset;
  label: string;
  content: React.ReactNode;
}

function SplitSection({ imageLeft = true, image, label, content }: SplitSectionProps) {
  const imagePanel = (
    <div className="w-full lg:w-1/2 rounded-[16px] overflow-hidden shrink-0 self-stretch min-h-[300px] lg:min-h-0">
      <OptimizedCaseImage alt={label} className="w-full h-full object-cover" src={imageSrc(image)} />
    </div>
  );

  const textPanel = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-0 lg:px-12">
      <p className={`${notoSC} text-[#717171] text-[16px] leading-[22.4px] mb-4`}>{label}</p>
      <div className={`${notoSC} text-[#111] text-[16px] leading-[24px]`}>{content}</div>
    </div>
  );

  return (
    <section className="w-full flex flex-col items-center px-5 sm:px-8 lg:px-16 xl:px-[164px] mt-[120px]">
      <div className="w-full max-w-[1398px]">
        <div className={`flex flex-col ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-0 items-stretch`}>
          {imagePanel}
          {textPanel}
        </div>
      </div>
      <div className="h-[48px]" />
    </section>
  );
}

// ─── Core challenges section ───────────────────────────────────────────────────
function CoreChallengesSection() {
  return (
    <SplitSection
      image={imgContainer1}
      label="核心挑战"
      content={
        <>
          <p><strong className={notoSCBold}>#1.数据碎片化</strong></p>
          <p>生产状态散落在不同孤立系统中，管理者缺乏全局视野，导致产线瓶颈无法被及时识别。</p>
          <br />
          <p><strong className={notoSCBold}>#2.决策严重滞后</strong></p>
          <p>依赖人工整理报表，成本高、周期长，管理层只能基于"后验数据"做事，极易错过最佳干预时机。</p>
          <br />
          <p><strong className={notoSCBold}>#3.异常响应低效</strong></p>
          <p>设备故障与质量预警缺乏统一的高优展示通道，问题定位慢，直接拖累整体产能。</p>
          <br />
          <p>共识结论：</p>
          <p>所有利益相关方并不关心图表多酷炫，他们只想要一个集中呈现关键数据、能一眼看穿异常、并支持追踪溯源的决策台。</p>
        </>
      }
    />
  );
}

// ─── User insights section ────────────────────────────────────────────────────
function UserInsightsSection() {
  return (
    <SplitSection
      imageLeft={false}
      image={imgContainer2}
      label="用户洞察"
      content={
        <>
          <p>项目初期处于"零既有需求"状态。通过深度访谈管理层、生产主管及产线质检/维护团队，挖掘真实业务诉求，并将其转化为设计标尺。</p>
          <p>核心发现：</p>
          <p>管理与运营侧：缺指标、缺全局，决策高度依赖人工经验，抓不到真实产能瓶颈。</p>
          <p>设备与维护侧：缺上报，设备状态黑盒，难以判断最佳维护时机，常导致被动停机。</p>
          <p>质量控制侧：缺追溯，异常数据无可视化链路，问题定位与排障效率极低。</p>
        </>
      }
    />
  );
}

// ─── Vision & strategy (dark) section ────────────────────────────────────────
function VisionStrategySection() {
  return (
    <section className="w-full flex flex-col items-center px-5 sm:px-8 lg:px-16 xl:px-[164px] mt-[48px]">
      <div className="w-full max-w-[1400px] rounded-[16px] overflow-hidden relative" style={{ minHeight: 560 }}>
        {/* Background image */}
        <OptimizedCaseImage
          alt="strategy background"
          className="absolute inset-0 w-full h-full object-cover"
          src={imageSrc(imgContainer3)}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 rounded-[15px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.61) 59%, rgba(102,102,102,0.61) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 lg:py-32 xl:px-[451px] xl:py-[218px]">
          <p className={`${notoSC} text-white text-[16px] leading-[22.4px] mb-4`}>愿景与策略</p>
          <div className={`${notoSC} text-white max-w-[584px]`}>
            <p className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[40px] mb-4">
              设计策略的核心是"功能优先于形式 "，用信息层级替代视觉堆砌。
            </p>
            <p className={`${notoSCBold} text-[16px] leading-[24px]`}>#1.数据降噪</p>
            <p className="text-[16px] leading-[24px]">剔除冗余，聚焦能直接影响产能、设备健康度与质量判断的核心指标。</p>
            <br />
            <p className={`${notoSCBold} text-[16px] leading-[24px]`}>#2.信息分级</p>
            <p className="text-[16px] leading-[24px]">建立「全局宏观状态 → 重点趋势变化 → 局部异常告警」的严密视觉秩序。</p>
            <br />
            <p className={`${notoSCBold} text-[16px] leading-[24px]`}>#3.直觉判断</p>
            <p className="text-[16px] leading-[24px]">用高对比度状态色（Status Colors）和告警阈值，替代复杂的数字阅读，降低判断成本。</p>
          </div>
        </div>
      </div>
      <div className="h-[48px]" />
    </section>
  );
}

// ─── Interaction logic section ─────────────────────────────────────────────────
function InteractionSection() {
  return (
    <SplitSection
      image={imgContainer4}
      label="交互逻辑"
      content={
        <>
          <p><strong className={notoSCBold}>#1.动态可视化趋势</strong></p>
          <p>用折线、雷达等动态组件呈现周期变化，帮助用户看清"趋势"而非死磕"单点读数"。</p>
          <br />
          <p><strong className={notoSCBold}>#2.产线状态流模拟</strong></p>
          <p>通过流程可视化图表映射物理产线，辅助运营快速掐准工艺瓶颈。</p>
          <br />
          <p><strong className={notoSCBold}>#3.多维下钻与探索</strong></p>
          <p>告别死板数据，支持从全局红绿灯状态，一键下钻筛选至具体故障源头。</p>
          <br />
          <p><strong className={notoSCBold}>#4.智能阈值告警</strong></p>
          <p>联动底层数据，一旦触碰安全红线，立即触发强视觉告警，实现防御性管理。</p>
        </>
      }
    />
  );
}

// ─── Full-width screenshot sections ───────────────────────────────────────────
function ScreenshotSection({ image, alt }: { image: ImageAsset; alt: string }) {
  return (
    <section className="w-full flex flex-col items-center px-5 sm:px-8 lg:px-16 xl:px-[164px]">
      <div className="w-full max-w-[1398px] rounded-[16px] overflow-hidden">
        <OptimizedCaseImage alt={alt} className="w-full h-auto object-cover" src={imageSrc(image)} />
      </div>
      <div className="h-[48px]" />
    </section>
  );
}

// ─── Footer / Next project ────────────────────────────────────────────────────
function Footer() {
  return <ProjectNextSection currentSlug="factory" />;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col" data-name="友讯达数据大屏">
      <div aria-hidden className="h-[88px] md:h-[96px]" />

      {/* Hero */}
      <HeroSection />

      {/* Project info */}
      <ProjectInfoSection />

      {/* Spacer */}
      <div className="h-[120px]" />

      {/* Core challenges */}
      <CoreChallengesSection />

      {/* User insights */}
      <UserInsightsSection />

      {/* Vision strategy (dark) */}
      <VisionStrategySection />

      {/* Interaction logic */}
      <InteractionSection />

      {/* Dashboard screenshots */}
      <ScreenshotSection image={imgContainer5} alt="数据大屏截图 1" />
      <ScreenshotSection image={imgContainer6} alt="数据大屏截图 2" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
