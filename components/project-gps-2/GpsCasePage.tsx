"use client";

import ProjectNextSection from "@/components/ProjectNextSection";
import svgPaths from "./svg-g4y8famgkp";

const imgContainer = "/images/project-gps-2/5479f65d6abe97f21b99c7efb59f599dbb01e1bc.png";
const img1 = "/images/project-gps-2/0ad3598a1bb924f5ad4091a724980ccb08506b91.png";
const imgContainer1 = "/images/project-gps-2/66b8726b5ed08e4a8dc2767d44e20519f6b4ebee.png";
const imgContainer2 = "/images/project-gps-2/d6204e0055b0267ba30402b5aafa540d00cca09b.png";
const imgContainer3 = "/images/project-gps-2/9104ded63af30bb84614c6f588e1e4af634e31d4.png";
const imgRectangle4 = "/images/project-gps-2/0b095acc2c953901851bc74b531bbee54172bef5.png";
const imgRectangle6 = "/images/project-gps-2/fd5105de07db292be4ee03033fb27bd9fed589de.png";
const imgRectangle7 = "/images/project-gps-2/52f1bd9e3c1eaa68686e1b32d68848db09447b03.png";
const imgRectangle8 = "/images/project-gps-2/1de99f8b6576b99ceda5802611e5007a6d8d6596.png";
const imgRectangle9 = "/images/project-gps-2/6847e7c9b863929b8d5b783629f8f965847eb2ad.png";
const imgContainer4 = "/images/project-gps-2/96d16763ae68c834d0746ae5b4d0ab04bd688ada.png";
const imgContainer5 = "/images/project-gps-2/52e64294f6d0960bb715f6e9b5050e6fce1d02c4.png";
const imgContainer6 = "/images/project-gps-2/d796b62bdf4be0e2f203452401a5f82ad1d2351b.png";
const imgContainer7 = "/images/project-gps-2/3f9330c83c364b2bc1ddc78c57f66e338f2726b0.png";
const imgRectangle10 = "/images/project-gps-2/b1dba9dd7b5e787ee49e1606ac8d956c32a88ab0.png";
const imgRectangle11 = "/images/project-gps-2/eac1e7e093ed6ee5ff5350f9d4f61a708899e05d.png";
const imgRectangle12 = "/images/project-gps-2/7fa7beb8bd81207395c5ca2def0fa53dd77cc00d.png";
const imgContainer8 = "/images/project-gps-2/91fb763dea378ed2e49aebc19c5f3a3ec3a3149d.png";
const imgContainer9 = "/images/project-gps-2/7fe295df83399d569038760dda9cf61bf545625d.png";
const imgImage = "/images/project-gps-2/3829fadc0e9472939fa554b8f2710edd317813fe.png";
const imgImage1 = "/images/project-gps-2/336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png";

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
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[22px] top-0 w-[1728px]" data-name="Header">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return <div className="h-[160px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] w-[1288px]">国家能源集团：载体轨迹定位系统</p>
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
    <div className="h-[786px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage loading="eager" fetchPriority="high" alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[567px] left-[963px] rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] top-[126.5px] w-[262px]" data-name="告警信息-两种状态 1">
          <OptimizedCaseImage loading="eager" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[787px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
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
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[22px] w-[680px]">
        <p className="leading-[30.8px] mb-0">2017 年重组后，国家能源集团旗下的管理分区与运载设备呈指数级暴增。面对几百个分区和数千个高频移动的载体，原有的管理系统面临崩溃：响应慢、统筹弱。</p>
        <p className="leading-[30.8px]">本项目目标是在 1 个月内，重塑移动端的载体跟踪与预警机制，覆盖现场巡检、后台调度、管理层三类核心用户角色，将后台管理人员从“人工查岗”的泥潭中解放出来，实现大规模资产的自动化、高精度监控。</p>
      </div>
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

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex items-end justify-center left-0 not-italic text-[#111] top-[0.5px] whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">-23</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[20px] tracking-[-0.4492px]">%</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">载体预警响应等待时间</p>
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

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex items-end justify-end left-0 not-italic text-[#111] top-[0.5px] whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">+17</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[20px] tracking-[-0.4492px]">%</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">目的地精准度</p>
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

function Frame2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex items-end justify-end left-0 not-italic text-[#111] top-[0.5px] whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">-10</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[20px] tracking-[-0.4492px]">%</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] w-[336px]">执行任务期间的紧急求援率</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.336px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container14 />
        <Container15 />
        <Container16 />
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
    <div className="max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">交付物</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[168px]">移动端应用</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-0.38px] w-[112.961px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">范围</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[220px]">UI/UX</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[220px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-center left-[210px] top-[-0.38px] w-[112.961px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目类型</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">GIS</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[78.54px] w-[112.961px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">角色</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[202px]">主设计师</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.92px] items-start left-0 top-[157.46px] w-[167px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[410px] max-w-[256px] relative shrink-0 w-[210px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
        <Container22 />
        <Container26 />
        <Container30 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[402px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[272px] items-start max-w-[inherit] pr-[128px] relative size-full">
        <Container10 />
        <Container17 />
      </div>
    </div>
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

function Container33() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container36() {
  return (
    <div className="h-[786px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[845px] pr-[513px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap lg:ml-[-65px]">核心挑战</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[687px] pr-[355px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">现场实地调研与产品测试暴露了极高的业务管理风险，集中在四个维度：</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1:数据失真</p>
          <p className="leading-[24px] mb-0">高达 60% 的载体存在严重定位偏差，突发状况下系统如同“盲人摸象”。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2:告警瘫痪</p>
          <p className="leading-[24px] mb-0">状态与告警信息无脑全量推送，毫无优先级。管理员陷入“信息过载”，无法及时揪出致命危机。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3:调度混乱</p>
          <p className="leading-[24px] mb-0">辖区归属模糊，跨区调度缺乏统一的全局视角，沟通成本极高。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#4:追责断层</p>
          <p className="leading-[24px]">历史轨迹无法回溯，一旦发生事故，无法复原路径，导致定损与追责困难。</p>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[319px] relative shrink-0 w-[1713px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Heading3 />
        <Container39 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[343px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[3px] bg-[rgba(0,0,0,0.39)] h-[787px] left-0 rounded-[15px] top-[0.13px] w-[1400px]" />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[451px] text-[16px] text-white top-[194.13px] whitespace-nowrap">关键决策：15秒的取舍</p>
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[451px] text-[0px] text-white top-[233.13px] w-[620px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[40px] mb-0 text-[32px]">冲突：技术底层逻辑决定了，精准锁定一个高精度的 GPS + LBS 位置需要 12-15 秒。</p>
          <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[40px] mb-0 text-[32px]">如果按照传统做法“启动即全量加载数千个载体”，系统将陷入漫长的瘫痪式等待。</p>
          <p className="font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[40px] mb-0 text-[32px]">决策：默认视图收窄 + 渐进式精准请求。</p>
          <p className="mb-0 text-[16px]">
            <span className="leading-[40px]">{`• `}</span>
            <span className="leading-[24px]">{`   违背直觉的克制：我否决了“展示全部”的需求，基于管理者的核心心理模型“只关心正在运行/有异常的载体”，将默认视图大幅收窄。`}</span>
          </p>
          <p className="leading-[24px] mb-0 text-[16px]">{`•    按需分配算力：系统默认仅展示高优运行状态，当用户真正需要排查特定载体时，再通过精准搜索触发那“15秒”的等待成本。`}</p>
          <p className="leading-[24px] text-[16px]">{`•    验证：该策略在珠三角原型的实地测试中大获成功，用户完全没有产生查找障碍，反而极大提升了核心场景的系统流畅度。`}</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Group() {
  return (
    <div className="absolute contents left-[719px] top-[153.94px]">
      <div className="absolute h-[513px] left-[719px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[719px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[719px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1003px] top-[153.94px]">
      <div className="absolute h-[513px] left-[1003px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[1003px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[1003px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle7} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[151px] top-[153.94px]">
      <div className="absolute h-[513px] left-[151px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[151px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[151px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[435px] top-[153.94px]">
      <div className="absolute h-[513px] left-[435px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[435px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[435px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle9} />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="gps-decision-media-canvas h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[3.3px] bg-[rgba(0,0,0,0.37)] h-[656px] left-[72px] rounded-[28px] top-[77.94px] w-[1252px]" />
        <Group />
        <Group1 />
        <Group2 />
        <Group3 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="gps-decision-media-frame h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container42 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container48() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container51() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer5} />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="gps-strategy-media absolute content-stretch flex h-[798.82px] items-center justify-center left-0 overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container49() {
  return (
    <div className="gps-strategy-panel h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <div className="gps-strategy-copy [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[808px] text-[#111] text-[16px] top-[250.25px] w-[480px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">设计不仅要解决理想状态下的问题，更要覆盖“低基站、弱信号”的极端物理环境</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1:智能电子围栏</p>
          <p className="leading-[24px] mb-0">支持圆/矩/自定义多边形划区。载体越界自动触发系统判定，用机器围栏彻底替代人工肉眼巡查。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2:分级预警机制</p>
          <p className="leading-[24px]">建立强视觉梯度的告警体系。将海量消息按“紧急程度+时间线”进行强过滤，确保致命威胁一秒破防，直达管理层。</p>
        </div>
        <p className="gps-strategy-label -translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[840px] text-[#717171] text-[16px] text-center top-[211.25px] whitespace-nowrap">设计策略</p>
      </div>
    </div>
  );
}

function Container52() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container49 />
        <Container52 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container48 />
        <Section3 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer4} />
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer6} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-[719px] overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container55 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[118px] text-[#111] text-[16px] top-[285.43px] w-[480px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3:辖区网格化管理</p>
          <p className="leading-[24px] mb-0">重构信息架构，按“项目/地区”实施网格化折叠管理。打破跨区信息壁垒，减少无效调度沟通。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#4:历史轨迹回溯</p>
          <p className="leading-[24px]">支持全量历史路径回放与轨迹追溯，事故发生后可精准复原载体全程移动路径，为定损与追责提供数据依据，彻底终结“有责无据”的追责断层。</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container54 />
        <Container57 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section4 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[579px] top-[153.94px]">
      <div className="absolute h-[513px] left-[579px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[579px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[579px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle10} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[259px] top-[153.94px]">
      <div className="absolute h-[513px] left-[259px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[259px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[259px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle11} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[899px] top-[153.94px]">
      <div className="absolute h-[513px] left-[899px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-12 border-[#343434] border-solid inset-[-6px] rounded-[22px]" />
      </div>
      <div className="absolute h-[513px] left-[899px] pointer-events-none rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover rounded-[16px] size-full" src={imgRectangle4} />
        <div aria-hidden className="absolute border-8 border-[#1e1e1e] border-solid inset-[-4px] rounded-[20px]" />
      </div>
      <div className="absolute h-[513px] left-[899px] rounded-[16px] top-[153.94px] w-[242px]">
        <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle12} />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[3.3px] bg-[rgba(0,0,0,0.37)] h-[657px] left-[105px] rounded-[28px] top-[80.49px] w-[1207px]" />
        <Group4 />
        <Group5 />
        <Group6 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex h-[786.375px] items-center justify-center left-px max-w-[1398px] overflow-clip rounded-[16px] top-[-5.26px] w-[1398px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f5f5f7] h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container67() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer8} />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container67 />
      </div>
    </div>
  );
}

function Container68() {
  return <div className="gps-ending-blank-panel flex-[1_0_0] h-[786.375px] min-w-px relative" data-name="Container" />;
}

function Container65() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container66 />
        <Container68 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function Container69() {
  return <div className="gps-before-next-spacer h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container72() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer9} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[6.7px] h-[787px] left-0 rounded-[15px] top-[0.13px] w-[1400px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1400 787' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.28999999165534973'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.0000042761 -42.8 156.26 -0.000015612 700 428.23)'><stop stop-color='rgba(102,102,102,1)' offset='0'/><stop stop-color='rgba(77,77,77,1)' offset='0.14784'/><stop stop-color='rgba(51,51,51,1)' offset='0.29567'/><stop stop-color='rgba(26,26,26,1)' offset='0.44351'/><stop stop-color='rgba(13,13,13,1)' offset='0.51743'/><stop stop-color='rgba(6,6,6,1)' offset='0.55439'/><stop stop-color='rgba(0,0,0,1)' offset='0.59135'/></radialGradient></defs></svg>\")" }} />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[451px] text-[16px] text-white top-[222.36px] whitespace-nowrap">深度复盘与认知迭代</p>
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[451px] text-[0px] text-white top-[261.36px] w-[620px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] mb-0 text-[32px]">除了纸面上的数据增长，这个项目带来最深刻的商业认知是：“系统能升级工具，但无法瞬间重写行为习惯。”</p>
          <p className="text-[16px]">
            <span className="leading-[40px]">上</span>
            <span className="leading-[24px]">线初期，我发现电话沟通协调率并未如预期般下降——业务员依然习惯性地打电话确认运载细节。这让我明白，在复杂的企业级（B端/G端）场景中，设计只是降本增效的起点。建立信任需要周期，作为设计师，我们要做的就是在极端不确定（如信号差）的场景中，持续给出最合适的取舍，并交由时间去沉淀用户的习惯。</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container72 />
      </div>
    </div>
  );
}

function Heading4() {
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
    <div className="h-[21.602px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Heading5() {
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
    <div className="h-[150.297px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading5 />
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
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage1} />
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
  return <div className="h-[20px] min-h-[20px] relative shrink-0 w-[1680px]" data-name="Container" />;
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
    <div className="absolute h-[53px] left-0 top-[738.9px] w-[1680px]" data-name="Container">
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
    <div className="h-[791.898px] relative shrink-0 w-[1680px]" data-name="Container">
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

function Container70() {
  return <ProjectNextSection currentSlug="gps-2" />;
}

function Container89() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container() {
  return (
    <div className="h-[12055px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Section />
        <Container8 />
        <Section1 />
        <Container33 />
        <Container34 />
        <Container37 />
        <Container38 />
        <Container40 />
        <Container41 />
        <Container47 />
        <Container53 />
        <Container58 />
        <Container63 />
        <Container64 />
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-[#fafafa] h-[9721px] min-h-[962px] relative shrink-0 w-[1728px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div
      className="case-export-responsive gps-case-responsive bg-[#fafafa] overflow-x-hidden relative w-full"
      data-name="国家能源集团：载体轨迹定位系统"
    >
      <Body />
    </div>
  );
}
