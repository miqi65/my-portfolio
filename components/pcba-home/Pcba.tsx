import {
  CaseImageGrid,
  CaseMediaBlock,
  CaseMetaGrid,
  CaseNextProject,
  CasePageShell,
  CaseSplitSection,
  CaseTextBlock
} from "@/components/case-study";
import svgPaths from "./svg-b1xkrhket4";

const imgContainer = "/images/work/pcba/01-hero.webp";
const imgContainer1 = "/images/work/pcba/02-current-system.webp";
const img1 = "/images/work/pcba/03-new-system.webp";
const img2 = "/images/work/pcba/04-warning-dashboard.webp";
const img31 = "/images/work/pcba/05-material-module.webp";
const img3 = "/images/work/pcba/06-engineering-module.webp";
const imgContainer2 = "/images/work/pcba/07-camera-acquisition.webp";
const imgContainer3 = "/images/work/pcba/08-camera-parameters.webp";
const img4 = "/images/work/pcba/09-teaching-record.webp";
const imgAb1 = "/images/work/pcba/10-io-settings.webp";
const img5 = "/images/work/pcba/11-manual-conveyor.webp";
const imgContainer4 = "/images/work/pcba/12-manual-gripper.webp";
const img6 = "/images/work/pcba/13-sync-material.webp";
const img7 = "/images/work/pcba/14-sync-engineering.webp";
const img8 = "/images/work/pcba/15-login-account.webp";
const img9 = "/images/work/pcba/16-login-role.webp";
const img10 = "/images/work/pcba/17-log-page.webp";
const imgIo1 = "/images/work/pcba/18-design-overview.webp";
const img11 = "/images/work/pcba/19-ab-layout.webp";
const img12 = "/images/work/pcba/20-delivery-spec.webp";
const img13 = "/images/work/pcba/21-system-overview.webp";
const img14 = "/images/work/pcba/22-detail-a.webp";
const img15 = "/images/work/pcba/23-detail-b.webp";
const img16 = "/images/work/pcba/24-detail-c.webp";
const img17 = "/images/work/pcba/25-detail-d.webp";
const img18 = "/images/work/pcba/26-detail-e.webp";
const img19 = "/images/work/pcba/27-detail-f.webp";
const img20 = "/images/work/pcba/28-detail-g.webp";
const imgContainer5 = "/images/work/pcba/29-final-overview.webp";
const imgContainer6 = "/images/work/pcba/30-next-cover.webp";
const imgImage = "/images/work/pcba/31-next-cover-a.webp";

function OptimizedCaseImage({
  loading = "lazy",
  decoding = "async",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img loading={loading} decoding={decoding} {...props} />;
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#080808] text-[15px] tracking-[0.375px] whitespace-nowrap">Miki Yang</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#080808] text-[15px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#080808] text-[15px] whitespace-nowrap">Info</p>
      </div>
    </div>
  );
}

function ButtonToggleLanguage() {
  return (
    <div className="relative shrink-0" data-name="Button - Toggle Language">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#080808] text-[15px] text-center tracking-[0.375px] uppercase whitespace-nowrap">EN</p>
      </div>
    </div>
  );
}

function ButtonToggleTheme() {
  return <div className="bg-[#080808] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Button - Toggle Theme" />;
}

function ButtonToggleThemeMargin() {
  return (
    <div className="relative shrink-0" data-name="Button - Toggle Theme:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <ButtonToggleTheme />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link />
        <Link1 />
        <ButtonToggleLanguage />
        <ButtonToggleThemeMargin />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[22px] top-0 w-full" data-name="Header">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[1.15] md:leading-[64.4px] relative shrink-0 text-[#111] text-[clamp(34px,4vw,46px)] md:whitespace-nowrap">PCBA 插件机控制系统</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="aspect-[1400/786] h-auto relative shrink-0 w-full" data-name="Container">
      <OptimizedCaseImage loading="eager" fetchPriority="high" alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container6() {
  return (
    <CaseMediaBlock aspect="aspect-[1400/787]" gutters="none" className="h-auto" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
      </div>
    </CaseMediaBlock>
  );
}

function Container4() {
  return (
    <CasePageShell maxWidth="wide" gutters="viewport" className="shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </CasePageShell>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目概述</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[1.55] md:leading-[30.8px] relative shrink-0 text-[#111] text-[clamp(17px,1.35vw,22px)] w-full max-w-[680px]">把长期闲置的进口控制系统，重构为可度量、可持续扩展的产线管理系统。系统面向 PCBA 数字化产线，核心目标是把原本分散、依赖人工确认的产线操作，整合为统一管理生产任务、物料选择、异常预警与工程资料的生产管理系统。</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10.08px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目成果</p>
      </div>
    </div>
  );
}

function MetricValue({ value }: { value: string }) {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full text-[#111] whitespace-nowrap">
        <div className="absolute content-stretch flex gap-[4px] items-baseline left-0 top-[0.5px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] text-[40px] tracking-[0.3711px]">{value}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] text-[20px] tracking-[-0.4492px]">%</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return <MetricValue value="+28" />;
}

function Text1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">管理效率</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.328px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return <MetricValue value="17" />;
}

function Text3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">插件效率</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.336px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return <MetricValue value="-10" />;
}

function Text5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">人工介入率</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.328px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return <MetricValue value="+17" />;
}

function Text7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">工程导入耗时</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.328px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-y-[20px] items-center relative size-full md:flex-nowrap">
        <Container14 />
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <ParagraphMargin1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[680px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">交付物</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="leading-[25.2px] mb-0 whitespace-pre">{`产线控制系统 `}</p>
          <p className="leading-[25.2px] ml-[-5px] whitespace-pre">{` Web/PC 端`}</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[113px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center relative w-full lg:absolute lg:left-0 lg:top-[-0.38px] lg:w-[112.961px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">范围</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black w-[220px] whitespace-pre-wrap">
          <p className="leading-[25.2px] mb-0">{`UI/UX, `}</p>
          <p className="leading-[25.2px] mb-0">设计系统规范</p>
          <p className="leading-[25.2px]">可用性测试</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[220px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center relative w-full lg:absolute lg:left-[210px] lg:top-[-0.38px] lg:w-[112.961px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目类型</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="leading-[25.2px] mb-0 whitespace-pre">工业级系统 /</p>
          <p className="leading-[25.2px] ml-[-5px] whitespace-pre">{` 双端全链路架构设计`}</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-[167px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center relative w-full lg:absolute lg:left-0 lg:top-[103.54px] lg:w-[112.961px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">角色</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[198px]">{`UI/UX 设计 `}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[5.92px] items-start relative w-full lg:absolute lg:left-0 lg:top-[207.46px] lg:w-[167px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-auto max-w-none relative shrink-0 w-full lg:h-[410px] lg:max-w-[256px] lg:w-[210px]" data-name="Container">
      <CaseMetaGrid layout="sidebar" className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Container23 />
        <Container27 />
        <Container31 />
      </CaseMetaGrid>
    </div>
  );
}

function Container9() {
  return (
    <CasePageShell maxWidth="wide" gutters="viewport" className="h-auto shrink-0 lg:h-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pr-0 relative size-full lg:flex-row lg:gap-[272px] lg:pr-[128px]">
        <Container10 />
        <Container18 />
      </div>
    </CasePageShell>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="h-full relative shrink-0 w-full" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[4.85px] bg-[rgba(0,0,0,0.69)] inset-0 rounded-[15px]" />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[32px] text-[16px] text-white top-[72px] whitespace-nowrap md:left-[64px] lg:left-[688px] lg:top-[238.5px]">核心挑战</p>
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[32px] right-[32px] text-[0px] text-white top-[112px] whitespace-pre-wrap md:left-[64px] md:right-[64px] lg:left-[688px] lg:right-auto lg:top-[277.5px] lg:w-[560px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[32px]">#1.操作惯性</p>
          <p className="leading-[24px] mb-0 pt-[16px] text-[16px]">一线人员对旧系统的操作逻辑已经形成肌肉记忆，强行替换全新交互逻辑，会增加培训成本和误操作风险。</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[32px]">#2.研发排期</p>
          <p className="leading-[24px] mb-0 pt-[16px] text-[16px]">设计方案与研发排期强耦合，交互复杂度必须可控，避免引入过重的实现成本。</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[32px]">#3.生产风险</p>
          <p className="leading-[24px] pt-[16px] text-[16px]">系统直连真实产线，高风险操作必须具备权限校验与兜底机制。</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <CaseMediaBlock aspect="aspect-[1400/788]" className="min-h-[760px] md:min-h-[620px] lg:min-h-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container37 />
      </div>
    </CaseMediaBlock>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full lg:pl-[118px] lg:pr-[671px]">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">关键决策</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full lg:pl-[118px] lg:pr-[355px]">
        <CaseTextBlock unstyled className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-full max-w-[560px]">
          <p className="leading-[24px] mb-0">面对这三个约束，我没有选择推翻旧系统、从零设计一套新逻辑，而是选择保留底层逻辑、重构关键流程。这个判断具体体现在两处取舍：</p>
          <p className="leading-[24px] mb-0">1.现场观察证实，物料选择与孔位确认在真实作业中是连续发生的，因此把它们从跨界面确认合并为同一任务路径；</p>
          <p className="leading-[24px]">2.机台异常原本依赖红黄灯和人工巡检，问题发现滞后、处理优先级也不清楚，因此改为分层数字预警，让异常类型、设备状态和处理优先级同时可见。</p>
        </CaseTextBlock>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <CasePageShell as="section" maxWidth="wide" gutters="viewport" className="h-auto shrink-0 lg:h-[175px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Heading3 />
        <Container40 />
      </div>
    </CasePageShell>
  );
}

function Container39() {
  return (
    <div className="h-auto relative shrink-0 w-full lg:h-[175px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Container41() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="bg-[#e2e5e9] aspect-square h-auto relative shrink-0 w-full lg:h-[680px] lg:w-[679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[25%] w-[85%] lg:h-[360px] lg:left-[47.5px] lg:top-[171px] lg:w-[576px]" data-name="示教-物料列表 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img1} />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7.5%] rounded-[8px] top-[25%] w-[85%] lg:h-[360px] lg:left-[51.5px] lg:top-[171px] lg:w-[576px]" data-name="首页3 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7.5%] rounded-[8px] top-[25%] w-[85%] lg:h-[360px] lg:left-[51.5px] lg:top-[171px] lg:w-[576px]" data-name="首页3 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="aspect-square content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] w-full lg:absolute lg:left-[719px] lg:size-[680px] lg:top-0" data-name="Container">
      <Container45 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">设计方案</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[587px] relative w-full lg:absolute lg:left-[63px] lg:px-[54px] lg:top-[145px] lg:w-[587px]" data-name="Container">
      <Heading4 />
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-full max-w-[480px] whitespace-pre-wrap">
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">集中监控看板</p>
        <p className="leading-[24px] mb-0">{`管理者过去要翻查日志、询问现场，才能判断产线状态和异常优先级。设计将产线进度、机台状态、订单信息和异常警报整合为统一监控入口。 `}</p>
        <p className="leading-[24px] mb-0">结果：管理效率提升 +28%。</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">任务流重组</p>
        <p className="leading-[24px] mb-0">{`物料选择与孔位确认原本割裂在机台端和后台系统之间，操作员需要反复确认。设计将两者与在制品状态整合进同一任务路径。 `}</p>
        <p className="leading-[24px] mb-0">结果：插件效率提升 +17%。</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">{`分层数字预警 `}</p>
        <p className="leading-[24px] mb-0">{`机台异常原本依赖红黄灯和人工巡检，发现滞后、优先级不清。设计将异常转化为系统级数字预警，按类型、状态和优先级分层展示。 `}</p>
        <p className="leading-[24px]">结果：人工介入率降低 -10%。</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <CasePageShell maxWidth="wide" gutters="viewport" className="h-auto shrink-0 lg:h-[680px]" data-name="Container">
      <CaseSplitSection layout="desktopAbsolute" className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container44 />
        <Container46 />
      </CaseSplitSection>
    </CasePageShell>
  );
}

function Container47() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container43 />
        <Container47 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#e2e5e9] aspect-square h-auto relative shrink-0 w-full lg:h-[680px] lg:w-[679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[47.5px] lg:top-[151px] lg:w-[576px]" data-name="示教-物料列表 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img2} />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="aspect-square content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] w-full lg:absolute lg:left-0 lg:size-[680px] lg:top-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f5f5f7] aspect-square h-auto relative shrink-0 w-full lg:h-[680px] lg:w-[679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img31} />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="aspect-square content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] w-full lg:absolute lg:left-[719px] lg:size-[680px] lg:top-0" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container48() {
  return (
    <CasePageShell maxWidth="wide" gutters="viewport" className="h-auto shrink-0 lg:h-[680px]" data-name="Container">
      <CaseImageGrid layout="desktopAbsolute" className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <Container51 />
      </CaseImageGrid>
    </CasePageShell>
  );
}

function Container53() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container48 />
        <Container53 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#f5f5f7] aspect-square h-auto relative shrink-0 w-full lg:h-[680px] lg:w-[679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[47.5px] lg:top-[151px] lg:w-[576px]" data-name="示教-物料列表 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img3} />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute aspect-[576/360] h-auto left-[7%] rounded-[8px] top-[22%] w-[85%] lg:h-[360px] lg:left-[46.5px] lg:top-[151px] lg:w-[576px]" data-name="首页3 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="aspect-square content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] w-full lg:absolute lg:left-[-1px] lg:size-[680px] lg:top-[-0.38px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container57() {
  return <div className="hidden lg:absolute lg:block lg:h-[240px] lg:left-[774.5px] lg:max-w-[1398px] lg:top-[30.82px] lg:w-[516px]" data-name="Container" />;
}

function Container54() {
  return (
    <CasePageShell maxWidth="wide" gutters="viewport" className="h-auto shrink-0 lg:h-[680px]" data-name="Container">
      <CaseSplitSection layout="desktopAbsolute" className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container55 />
        <Container57 />
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] max-w-[480px] relative text-[#111] text-[16px] w-full lg:absolute lg:left-[805px] lg:top-[270.05px] lg:w-[480px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">研发效率资产</p>
          <p className="leading-[24px]">将标准化工程资料沉淀为项目资料库与配置模板，减少重复导入，工程导入耗时降低 -17%。</p>
        </div>
      </CaseSplitSection>
    </CasePageShell>
  );
}

function Container58() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container54 />
        <Container58 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-full relative shrink-0 w-full" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#fafafa] bottom-[5%] left-[4%] right-[4%] rounded-[8px] top-[5%] lg:h-[707px] lg:left-[54px] lg:right-auto lg:top-[36.31px] lg:w-[1296px]" />
        <div className="absolute aspect-[610/343] h-auto left-[8%] rounded-[8px] top-[56%] w-[40%] md:left-[52%] md:top-[8%] md:w-[43.5%] lg:h-[343px] lg:left-[704px] lg:top-[46.31px] lg:w-[610px]" data-name="竞品分析 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img4} />
        </div>
        <div className="absolute aspect-[611/344] h-auto left-[52%] rounded-[8px] top-[56%] w-[40%] md:left-[52%] md:top-[51%] md:w-[43.5%] lg:h-[344px] lg:left-[703px] lg:top-[399.31px] lg:w-[611px]" data-name="ab测试 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAb1} />
        </div>
        <div className="absolute aspect-[610/343] h-auto left-[8%] rounded-[8px] top-[74%] w-[40%] md:left-[6%] md:top-[51%] md:w-[43.5%] lg:h-[343px] lg:left-[73px] lg:top-[399.31px] lg:w-[610px]" data-name="上线验证 1">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img5} />
        </div>
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[8%] right-[8%] text-[#111] text-[16px] top-[18%] whitespace-pre-wrap md:left-[8%] md:right-auto md:top-[18%] md:w-[42%] lg:left-[119px] lg:top-[137.31px] lg:w-[480px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">竞品对标与用户测试</p>
          <p className="leading-[24px] mb-0">对标 YAMAHA、Universal 等行业方案，结合现场操作频率与上线风险，确定首版核心能力；面向 12 位操作员与组长做 A/B 可用性测试，验证横版布局更符合工业屏幕视距和操作习惯。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">上线前风险验证</p>
          <p className="leading-[24px]">针对工程导入压测、预警并发、越权拦截三类高风险场景做专项测试，均通过验证——基础操作员越权写入被系统拦截，结果记录进审计日志。</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[8%] right-[8%] text-[#111] text-[16px] top-[12%] md:left-[8%] md:right-auto md:w-[42%] lg:left-[119px] lg:top-[87.31px] lg:w-[480px]">标准化资产与系统校验</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <CaseMediaBlock aspect="aspect-[1398/786.375]" maxWidth="wide" className="min-h-[760px] md:min-h-[620px] lg:min-h-0" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgContainer2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container61 />
      </div>
    </CaseMediaBlock>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Container62() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[96px] md:left-[64px] md:right-[64px] lg:left-[591px] lg:pr-[576px] lg:right-auto lg:top-[298.63px] lg:w-[607px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#f5f5f7] text-[16px] text-center whitespace-nowrap">项目结果与复盘</p>
    </div>
  );
}

function Container64() {
  return (
    <CaseMediaBlock aspect="aspect-[1400/780]" className="min-h-[640px] md:min-h-[560px] lg:min-h-0" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[16px]">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[16px] size-full" src={imgContainer4} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[16px]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(24,24,24,0.5)] inset-0" />
        <Heading5 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[32px] right-[32px] text-[0px] text-white top-[136px] md:left-[64px] md:right-[64px] lg:left-[591px] lg:right-auto lg:top-[337.63px] lg:w-[620px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[36px] mb-0 text-[32px]">上线后，系统通过 90+ 条真实产线订单验证了可用性，沉淀 80+ 条一线反馈用于后续迭代。试行产线在特定时段内，产能提升至原有的 1.5 倍。</p>
          <p className="leading-[24px] mb-0 pt-[16px] text-[16px]">这个项目证明的能力，是能在存量系统、真实产线约束和研发排期的挤压下，找到一条可上线、可验证、有数据支撑的重构路径——设计判断的价值，最终体现在管理效率、插件效率这些业务能读懂的数字上。</p>
          <p className="leading-[24px] mb-0 text-[16px]">(注：本案例所有项目数据与敏感信息均已做脱敏处理。)</p>
          <p className="leading-[24px] text-[16px]">​</p>
        </div>
      </div>
    </CaseMediaBlock>
  );
}

function Container65() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents h-[1733.149px] left-[-696px] top-[-389.38px] w-[2529.877px]">
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-696px] top-[93.1px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="登录_身份选择 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-246.35px] top-[-27.38px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="登录_账户登录 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[203.3px] top-[-148.03px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="工程 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[654.22px] top-[-268.69px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="日志 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[1103.87px] top-[-389.34px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="设置_工程 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-618.3px] top-[383.08px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="设置_IO 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIo1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-168.65px] top-[262.59px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="示教-插件记录 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[280.99px] top-[141.94px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="示教-物料列表 2">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[731.92px] top-[21.28px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="手控-传送带 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[1181.57px] top-[-99.37px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="手控-夹抓控制 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-540.6px] top-[673.05px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="首页 4">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-90.95px] top-[552.56px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="首页3 4">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[359.04px] top-[433.19px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="同步-工程 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[809.62px] top-[311.26px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="同步-物料 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[1259.27px] top-[190.6px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="物料-1 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-462.9px] top-[963.02px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="物料 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img16} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[-13.26px] top-[842.54px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="相机-采集 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img17} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[436.71px] top-[723.08px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="相机-相机处理参数 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img18} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.156px] items-center justify-center left-[887.32px] top-[601.23px] w-[495.72px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[274.743px] relative w-[439.59px]" data-name="相机-运行参数 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img19} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[379.726px] items-center justify-center left-[1337.09px] top-[480.54px] w-[496.465px]">
        <div className="-rotate-15 flex-none">
          <div className="h-[275.157px] relative w-[440.251px]" data-name="用户权限管理 1">
            <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <CaseMediaBlock aspect="aspect-[1398/913]" maxWidth="wide" className="min-h-[360px] md:min-h-[520px] lg:min-h-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </CaseMediaBlock>
  );
}

function Container68() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer6} />
    </div>
  );
}

function Container70() {
  return (
    <CaseMediaBlock aspect="aspect-[1400/780]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgContainer5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container71 />
      </div>
    </CaseMediaBlock>
  );
}

function Container72() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container70 />
        <Container72 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[#474747] text-[24px] text-center uppercase whitespace-nowrap">下一个项目</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[21.602px] relative shrink-0 w-full max-w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] text-center uppercase whitespace-nowrap">PCBA 插件机控制系统</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[150.297px] relative shrink-0 w-full max-w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#fafafa] text-[14px] whitespace-nowrap">[UI/UX]</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[198.359_0_0] min-h-px relative w-[349px]" data-name="Image">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage} />
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer} />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[198.359px] relative rounded-[8px] shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#fafafa] text-[14px] whitespace-nowrap">WILD</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[#fafafa] text-[14px] text-right whitespace-nowrap">RESPONSIVE WEB</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[228px] relative shrink-0 w-[349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
        <Container76 />
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container81() {
  return <div className="h-[20px] min-h-[20px] relative shrink-0 w-full max-w-[1680px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#2f2f2f] text-[14px] text-center whitespace-nowrap">COLLECTION OF WORK</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#2f2f2f] text-[14px] text-center whitespace-nowrap">COPYRIGHT 2026</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Icon">
          <path d={svgPaths.p15b83e00} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[21px] left-[25px] top-[3.36px] w-[18px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p33198480} fill="var(--fill-0, #2F2F2F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[22px] left-[25px] top-[28.77px] w-[18px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Label</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bg-[#111] content-stretch flex h-[39px] items-center left-[26px] px-[16px] py-[10px] top-0 w-[66px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute flex items-center justify-center left-[49.81px] size-[18.385px] top-[-7.69px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#111] relative rounded-[2px] size-[13px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[39px] left-[-25px] top-[-60px] w-[118px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[26px] left-[806px] top-[12.99px] w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container84 />
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[53px] left-0 right-0 top-[738.9px] w-full max-w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container83 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[791.898px] relative shrink-0 w-full max-w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip py-[150px] relative rounded-[inherit] size-full">
        <Container74 />
        <Container75 />
        <Link2 />
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container69() {
  return <CaseNextProject currentSlug="pcba" />;
}

function Container89() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container() {
  return (
    <div className="h-auto relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container1 />
        <Section />
        <Container8 />
        <Section1 />
        <Container34 />
        <Container35 />
        <Container38 />
        <Container39 />
        <Container41 />
        <Container90 />
        <Container42 />
        <Section4 />
        <Section5 />
        <Container59 />
        <Container62 />
        <Container63 />
        <Container66 />
        <Container69 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-auto relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[#fafafa] min-h-[962px] relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-x-hidden relative rounded-[inherit] w-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function Pcba() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative size-full" data-name="pcba">
      <Body />
    </div>
  );
}
