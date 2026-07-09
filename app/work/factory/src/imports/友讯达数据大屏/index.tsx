import svgPaths from "./svg-i9m3yq8fto";
import imgContainer from "./c5559afa8d754117b73a27710273be81c1fdc7c6.png";
import imgContainer1 from "./af642686dce3013c8b19020aaeb8e39891ce0f8d.png";
import imgContainer2 from "./05bdfedb9f5eab215358879e4eeea132b944bb9d.png";
import imgContainer3 from "./289409ed7f5d42c956c81efa0421804f97c7abac.png";
import imgContainer4 from "./c6a4717dc9a15f634e8f8ab3dd89d3b98e177bec.png";
import imgContainer5 from "./7b809cfff199bef8cf9e7d4a5fb52dccb822722a.png";
import imgContainer6 from "./ec4c6095fd6a350f08b58788a4065275f3c24293.png";
import imgImage from "./3829fadc0e9472939fa554b8f2710edd317813fe.png";
import imgImage1 from "./336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png";

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
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Header />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] whitespace-nowrap">友讯达数据大屏</p>
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
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[113.34%] left-[-13.04%] max-w-none top-[-4.28%] w-[113.06%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
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
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[30.8px] relative shrink-0 text-[#111] text-[22px] w-[680px]">本项目围绕智能工厂生产场景，在 2 个月内从零构建了一套集中化的大屏监控中枢。通过将产能、设备、质量与异常状态进行高信噪比的可视化转译，帮助管理层从“凭经验盲猜”转向“看数据秒级决策”，并成功将其打造为公司 B 端产品平台化能力的展示样板。</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">69</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">客户满意度评分 ≥6 分占比</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">31</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">满分占比</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">43</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] w-[336px]">可视化作为决策支撑工具，运营改善的整体结果</p>
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[168px]">数据可视化大屏</p>
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">数据可视化</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[90px]" data-name="Container">
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
    <div className="h-[334px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container38() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[125.27%] left-[-97.64%] max-w-none top-[-0.02%] w-[257.91%]" src={imgContainer1} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-0 overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container37 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[808px] text-[#111] text-[16px] top-[250.25px] w-[480px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1.数据碎片化</p>
          <p className="leading-[24px] mb-0">生产状态散落在不同孤立系统中，管理者缺乏全局视野，导致产线瓶颈无法被及时识别。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2.决策严重滞后</p>
          <p className="leading-[24px] mb-0">依赖人工整理报表，成本高、周期长，管理层只能基于“后验数据”做事，极易错过最佳干预时机。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3.异常响应低效</p>
          <p className="leading-[24px] mb-0">设备故障与质量预警缺乏统一的高优展示通道，问题定位慢，直接拖累整体产能。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px] mb-0">共识结论：</p>
          <p className="leading-[24px]">所有利益相关方并不关心图表多酷炫，他们只想要一个集中呈现关键数据、能一眼看穿异常、并支持追踪溯源的决策台。</p>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[840px] text-[#717171] text-[16px] text-center top-[211.25px] whitespace-nowrap">核心挑战</p>
      </div>
    </div>
  );
}

function Container39() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container36 />
        <Container39 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
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

function Container43() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-[719px] overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container42 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[118px] text-[#111] text-[16px] top-[289.18px] w-[480px]">
          <p className="leading-[24px] mb-0">项目初期处于“零既有需求”状态。通过深度访谈管理层、生产主管及产线质检/维护团队，挖掘真实业务诉求，并将其转化为设计标尺。</p>
          <p className="leading-[24px] mb-0">核心发现：</p>
          <p className="leading-[24px] mb-0">管理与运营侧：缺指标、缺全局，决策高度依赖人工经验，抓不到真实产能瓶颈。</p>
          <p className="leading-[24px] mb-0">设备与维护侧：缺上报，设备状态黑盒，难以判断最佳维护时机，常导致被动停机。</p>
          <p className="leading-[24px]">质量控制侧：缺追溯，异常数据无可视化链路，问题定位与排障效率极低。</p>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[150px] text-[#111] text-[16px] text-center top-[250.18px] whitespace-nowrap">{`用户洞察 `}</p>
      </div>
    </div>
  );
}

function Container44() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container41 />
        <Container44 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[3.2px] h-[787px] left-0 rounded-[15px] top-[0.13px] w-[1400px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1400 787' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.6100000143051147'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.0719e-13 -59.3 115.43 -2.1363e-7 727.5 429.55)'><stop stop-color='rgba(0,0,0,1)' offset='0.59135'/><stop stop-color='rgba(6,6,6,1)' offset='0.61689'/><stop stop-color='rgba(13,13,13,1)' offset='0.64243'/><stop stop-color='rgba(26,26,26,1)' offset='0.69351'/><stop stop-color='rgba(51,51,51,1)' offset='0.79567'/><stop stop-color='rgba(77,77,77,1)' offset='0.89784'/><stop stop-color='rgba(102,102,102,1)' offset='1'/></radialGradient></defs></svg>\")" }} />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[451px] text-[16px] text-white top-[218.68px] whitespace-nowrap">愿景与策略</p>
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[451px] text-[0px] text-white top-[257.68px] w-[584px] whitespace-pre-wrap">
          <p className="leading-[40px] mb-0 text-[32px]">设计策略的核心是“功能优先于形式 ”，用信息层级替代视觉堆砌。</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold mb-0 text-[16px]">
            <span className="leading-[40px]">#1</span>
            <span className="leading-[24px]">.数据降噪</span>
          </p>
          <p className="leading-[24px] mb-0 text-[16px]">剔除冗余，聚焦能直接影响产能、设备健康度与质量判断的核心指标。</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px]">#2.信息分级</p>
          <p className="leading-[24px] mb-0 text-[16px]">建立「全局宏观状态 → 重点趋势变化 → 局部异常告警」的严密视觉秩序。</p>
          <p className="leading-[24px] mb-0 text-[16px]">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px]">#3.直觉判断</p>
          <p className="leading-[24px] text-[16px]">用高对比度状态色（Status Colors）和告警阈值，替代复杂的数字阅读，降低判断成本。</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container48() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer4} />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-0 overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[808px] text-[#111] text-[16px] top-[250.25px] w-[480px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1.动态可视化趋势</p>
          <p className="leading-[24px] mb-0">用折线、雷达等动态组件呈现周期变化，帮助用户看清“趋势”而非死磕“单点读数”。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2.产线状态流模拟</p>
          <p className="leading-[24px] mb-0">通过流程可视化图表映射物理产线，辅助运营快速掐准工艺瓶颈。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3.多维下钻与探索</p>
          <p className="leading-[24px] mb-0">告别死板数据，支持从全局红绿灯状态，一键下钻筛选至具体故障源头。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#4.智能阈值告警</p>
          <p className="leading-[24px]">联动底层数据，一旦触碰安全红线，立即触发强视觉告警，实现防御性管理。</p>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[840px] text-[#717171] text-[16px] text-center top-[211.25px] whitespace-nowrap">交互逻辑</p>
      </div>
    </div>
  );
}

function Container54() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container51 />
        <Container54 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section4 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer5} />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container56 />
        <Section5 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer6} />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container62() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container60 />
        <Container62 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[#474747] text-[24px] text-center uppercase whitespace-nowrap">下一个项目</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[21.602px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] text-center uppercase whitespace-nowrap">PCBA 插件机控制系统</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[150.297px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading4 />
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

function Container67() {
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
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage} />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container68() {
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

function Container70() {
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

function Container71() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[228px] relative shrink-0 w-[349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
        <Container67 />
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container72() {
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

function Container75() {
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

function Container76() {
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

function Container78() {
  return (
    <div className="absolute bg-[#111] content-stretch flex h-[39px] items-center left-[26px] px-[16px] py-[10px] top-0 w-[66px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute flex items-center justify-center left-[49.81px] size-[18.385px] top-[-7.69px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#111] relative rounded-[2px] size-[13px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[39px] left-[-25px] top-[-60px] w-[118px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[26px] left-[806px] top-[12.99px] w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container75 />
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[53px] left-0 top-[738.9px] w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container74 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[791.898px] items-center justify-center left-0 overflow-clip py-[150px] top-[-0.32px] w-[1680px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Link2 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container64 />
      </div>
    </div>
  );
}

function Container80() {
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
        <Container40 />
        <Container45 />
        <Container49 />
        <Container55 />
        <Container59 />
        <Container63 />
        <Container80 />
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
    <div className="bg-white h-[7514px] min-h-[962px] relative shrink-0 w-[1728px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="友讯达数据大屏">
      <Body />
    </div>
  );
}