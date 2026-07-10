import svgPaths from "./svg-v32uxjvhke";
import imgContainer from "./a1925cfcd1b376841168c4a647d62506c5e54411.png";
import imgContainer1 from "./b68591649a0c5b43bd7be4f181ad6cdf25343e21.png";
import imgContainer2 from "./23db8f8988371344f84784807220c5d6a8d983d7.png";
import imgRectangle11 from "./0a47443951c4caecf5be305a8a7407e048a33a6b.png";
import imgContainer3 from "./d7e53d8267efccb18d7d4fe8b83acbe3cf988548.png";
import imgContainer4 from "./8f7228e72dbc01354c8ea444c4f893f671624be5.png";
import imgVideo from "./5bf999b8ed489032f7552203d35f645d1fa67a08.png";
import imgContainer5 from "./2600512d4e2103f088c39cd0d6a317dc37041951.png";
import imgContainer6 from "./6abd3ce5edb43a085e7d1698973ee1cae4c9b145.png";
import imgContainer7 from "./4eb63c54b41f18338aeec748c0640b917e3d744f.png";
import imgImage from "./3829fadc0e9472939fa554b8f2710edd317813fe.png";
import imgImage1 from "./336dc2de0822a7a75df8a866a9095bc6d6d4c1e1.png";

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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] whitespace-nowrap">WMS 智能仓储管理系统</p>
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
      <OptimizedCaseImage loading="eager" fetchPriority="high" alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full wms-hero-thumbnail-image" src={imgContainer} />
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目概览</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[30.8px] relative shrink-0 text-[#111] text-[22px] w-[680px]">本项目不仅是单一 WMS 界面的重构。客户原型仅能支撑单点展示，若在多客户、多仓库、多作业流程中逐页复刻，设计与研发成本将随客户数量线性暴增。本项目的核心目标，是将 Web 管理端与 RF 终端中高频的结构、流程与权限边界，收敛为一套标准化、高可扩展的交付框架。</p>
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

function Text() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full text-[#111] whitespace-nowrap">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 text-[40px] top-[0.5px] tracking-[0.3711px]">+43</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[76.79px] text-[20px] top-[22.5px] tracking-[-0.4492px]">%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">生产效率提升</p>
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
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full text-[#111] whitespace-nowrap">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 text-[40px] top-[0.5px] tracking-[0.3711px]">79</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[50.11px] text-[20px] top-[22.5px] tracking-[-0.4492px]">%</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.336px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">满意度 6 分及以上占比</p>
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
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full text-[#111] whitespace-nowrap">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 text-[40px] top-[0.5px] tracking-[0.3711px]">21</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[45.15px] text-[20px] top-[22.5px] tracking-[-0.4492px]">%</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[181.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">满分 10 分占比</p>
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
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="leading-[25.2px] mb-0 whitespace-pre">响应式 Web 管理端</p>
          <p className="leading-[25.2px] whitespace-pre">{` RF 手持终端`}</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[153px]" data-name="Container">
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
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black w-[220px] whitespace-pre-wrap">
          <p className="leading-[25.2px] mb-0">{`UI/UX, `}</p>
          <p className="leading-[25.2px]">设计系统</p>
        </div>
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
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="leading-[25.2px] mb-0 whitespace-pre">工业级 WMS /</p>
          <p className="leading-[25.2px] whitespace-pre">{` 双端全链路架构设计`}</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[167px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[103.54px] w-[112.961px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container30() {
  return <div className="wms-meta-placeholder absolute h-[129.92px] left-[210px] top-[205px] w-[112.961px]" data-name="Container" />;
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">UI/UX设计</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.92px] items-start left-0 top-[207.46px] w-[167px]" data-name="Container">
      <Container32 />
      <Container33 />
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
        <Container31 />
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

function Container34() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="h-[786px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container37 />
      </div>
    </div>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[845px] pr-[513px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">核心挑战</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[687px] pr-[355px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1.成本失控陷阱</p>
          <p className="leading-[24px] mb-0">客户、仓库、字段与流程差异客观存在。若按原型逐页定制，交付与长期维护成本将无法承受。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2.跨端场景错位</p>
          <p className="leading-[24px] mb-0">Web 端重“配置与查询”，RF 端重“现场扫码与核对”。照搬 Web 结构至小屏，会严重拖慢一线物理作业效率。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3.颗粒度迷思</p>
          <p className="leading-[24px]">过度追求按钮级权限，在多客户/多仓场景下会造成极高的配置成本，转化为长期的系统管理负担。</p>
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
        <Container40 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[313px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Container41() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container44() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[4.85px] bg-[rgba(0,0,0,0.3)] h-[787px] left-0 rounded-[15px] top-[0.13px] w-[1400px]" />
        <p className="wms-vision-label [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[476px] text-[16px] text-white top-[278.13px] whitespace-nowrap">{`产品愿景 `}</p>
        <div className="wms-vision-copy [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[476px] text-[0px] text-white top-[317.13px] w-[560px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] mb-0 text-[32px]">{`将一次性原型转化为可持续维护的双端业务架构。 `}</p>
          <p className="mb-0 text-[16px]">
            <span className="leading-[40px]">We</span>
            <span className="leading-[24px]">b 端聚焦管理视角（查询、配置、批量管理、异常定位）；</span>
          </p>
          <p className="leading-[24px] text-[16px]">RF 端聚焦执行视角（扫码、核对、确认、提交）。通过模板组合交付标准场景，为非标需求预留扩展口；让高频操作保持轻量，为高风险动作增加绝对物理阻力。</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container45() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[283px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap wms-architecture-strategy-label">{`架构与交互策略 `}</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[72px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[119px] text-[#111] text-[16px] top-[0.25px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">Web 模板矩阵</p>
          <p className="leading-[24px] mb-0">策略：提取高频页面骨架，将列表页、表单页、弹窗与侧边导航沉淀为可组合的模板矩阵，并预留非标字段扩展位。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px]">价值：标准场景免于从零设计，通过模板拼装完成交付，极大幅度降低重复设计与研发理解成本。</p>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="h-[193px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Heading4 />
        <Container46 />
      </div>
    </div>
  );
}

function Container47() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container50() {
  return (
    <div className="bg-[#0b0c0e] h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[750px] left-[32px] top-[18.94px] w-[1335px]">
          <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle11} />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container52() {
  return (
    <div className="h-[72px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[119px] text-[#111] text-[16px] top-[0.25px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">RF 交互工作流程</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px] mb-0">策略：RF 端摒弃“信息浏览”逻辑。在统一的扫码组件外壳下，按业务复杂度将收货流程拆解为 4 种模式：待办列表（集中任务入口）、标准收货（逐件核对防错）、按箱收货（降本批量核对）、按单收货（极简低风险闭环）。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px]">价值：从“页面等比缩放”转为“一线作业重组”，确保操作员视野内只存在当前任务所需的极简信息。</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[193px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container56() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer3} />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Video() {
  return (
    <div className="absolute h-[495.72px] left-[-2.86px] top-[-4.86px] w-[291.72px]" data-name="Video">
      <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[486px] left-0 pointer-events-none rounded-[20px] top-0 w-[286px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[486px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Video />
        <Container65 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white h-[492px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[3px] relative size-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#eef2f5] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-[500px] items-start left-[190.5px] max-w-[300px] p-[4px] rounded-[28px] top-[149.14px] w-[300px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[799px] relative shrink-0 w-[680px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[798.82px] relative rounded-[16px] shrink-0 w-[679px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex h-[799px] items-center justify-center left-[719px] overflow-clip rounded-[16px] top-[0.13px] w-[680px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[66.5px] px-[54px] top-[242.5px] w-[587px]" data-name="Container">
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[480px]">
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">交互设计— 操作阻力分层与防误触</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">策略：应对现场连续扫码、单手盲操等复杂物理环境，按动作对库存数据的影响风险设计三层防线：</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">轻流程 (低风险)：扫码 → 提交。极简闭环，Toast 弱反馈不打断节奏。</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">中流程 (中风险)：扫码 → 核对/改数 → 提交。按需展开信息。</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">重流程 (高风险)：删除、修改、异常提交等动作，在 UI 上与主操作区物理隔离，并强制引入二次确认。</span>
          </li>
        </ul>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">价值：确保低风险任务极速流转，高风险动作被明确阻断，守住库存数据准确性的底线。</p>
        <p className="leading-[24px] whitespace-pre-wrap">​</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Container66 />
      </div>
    </div>
  );
}

function Container67() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container58 />
        <Container67 />
      </div>
    </div>
  );
}

function Container68() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Video1() {
  return (
    <div className="absolute h-[495.72px] left-[-2.86px] top-[-4.86px] w-[291.72px]" data-name="Video">
      <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[486px] left-0 pointer-events-none rounded-[20px] top-0 w-[286px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-white h-[486px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Video1 />
        <Container75 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white h-[492px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[3px] relative size-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#eef2f5] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-[500px] items-start left-[190.5px] max-w-[300px] p-[4px] rounded-[28px] top-[149.14px] w-[300px]" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[799px] relative shrink-0 w-[680px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container72 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-0 overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function Container76() {
  return <div className="absolute h-[240px] left-[774.5px] max-w-[1398px] top-[30.82px] w-[516px]" data-name="Container" />;
}

function Container69() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container70 />
        <Container76 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[805px] text-[#111] text-[16px] top-[270.05px] w-[480px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">系统架构设计— 权限边界降维</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px] mb-0">策略：摒弃按钮级细分，将权限收敛为三层核心模型：菜单权限（业务模块可见性）、用户范围（角色操作边界）、仓库隔离（数据访问屏障）。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px]">价值：在守住数据安全边界的前提下，极大降低多客户场景的系统维护负担。</p>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container69 />
        <Container77 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[rgba(0,0,0,0.36)] h-[787px] left-0 top-[-0.45px] w-[1400px]" />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container80 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Container81() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">设计系统</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[926px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#111] text-[16px] w-[620px]">本项目面向持续交付，双端的颜色语义、字体层级与组件状态均被沉淀为基础规范。</p>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[284px] relative size-full">
        <Heading5 />
        <Container82 />
      </div>
    </div>
  );
}

function Container83() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container86() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer6} />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function Container87() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-[1158px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[567px] pr-[576px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">经验沉淀</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[687px] pr-[117px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px]">
          <ol className="list-decimal mb-0" start="1">
            <li className="mb-0 ms-[24px]">
              <span className="leading-[24px]">品牌色需与危险语义尽早解耦：在工业/仓储场景中，红色天然绑定“异常与警告”。若强行将红色作为常规主操作色，会严重削弱一线人员对高风险状态的直觉警惕。</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[24px]">组件可复用，但流程需差异化：UI 外壳可以统一，但底层业务逻辑不能“一刀切”。轻流程必须快，重流程必须慢（预留确认与阻断机制）。</span>
            </li>
            <li className="ms-[24px]">
              <span className="leading-[24px]">多端适配的本质是重组，而非缩放：Web 端服务“全局管理”，RF 端服务“单点执行”。优秀的跨端设计是做业务信息的断舍离，而非视窗尺寸的响应式妥协。</span>
            </li>
          </ol>
          <p className="leading-[24px] mb-0">(注：本案例已做脱敏处理。界面与数据仅用于展示架构思维与逻辑推演，不含客户敏感商业信息。)</p>
          <p className="leading-[24px]">​</p>
        </div>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Heading6 />
        <Container88 />
      </div>
    </div>
  );
}

function Container89() {
  return <div className="wms-before-next-image-spacer h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container93() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer7} />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container93 />
      </div>
    </div>
  );
}

function Container94() {
  return <div className="flex-[1_0_0] h-[786.375px] min-w-px relative" data-name="Container" />;
}

function Container91() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container92 />
        <Container94 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[#474747] text-[24px] text-center uppercase whitespace-nowrap">下一个项目</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[21.602px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] text-center uppercase whitespace-nowrap">PCBA 插件机控制系统</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[150.297px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading8 />
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

function Container98() {
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

function Container99() {
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

function Container101() {
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

function Container102() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[228px] relative shrink-0 w-[349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
        <Container98 />
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container103() {
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

function Container106() {
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

function Container107() {
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

function Container109() {
  return (
    <div className="absolute bg-[#111] content-stretch flex h-[39px] items-center left-[26px] px-[16px] py-[10px] top-0 w-[66px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute flex items-center justify-center left-[49.81px] size-[18.385px] top-[-7.69px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#111] relative rounded-[2px] size-[13px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[39px] left-[-25px] top-[-60px] w-[118px]" data-name="Container">
      <Container109 />
      <Container110 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[26px] left-[806px] top-[12.99px] w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container106 />
        <Container107 />
        <Container108 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[53px] left-0 top-[738.9px] w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container105 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[791.898px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip py-[150px] relative rounded-[inherit] size-full">
        <Container96 />
        <Container97 />
        <Link2 />
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container91 />
        <Container95 />
      </div>
    </div>
  );
}

function Container111() {
  return <div className="wms-after-footer-spacer h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container() {
  return (
    <div className="h-[12055px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Section />
        <Container8 />
        <Section1 />
        <Container34 />
        <Container35 />
        <Container38 />
        <Container39 />
        <Container41 />
        <Container42 />
        <Container45 />
        <Section3 />
        <Container47 />
        <Container48 />
        <Container51 />
        <Section4 />
        <Container53 />
        <Container54 />
        <Container57 />
        <Section5 />
        <Container68 />
        <Section6 />
        <Container78 />
        <Container81 />
        <Section7 />
        <Container83 />
        <Container84 />
        <Container87 />
        <Section8 />
        <Container89 />
        <Container90 />
        <Container111 />
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
    <div className="bg-white h-[12066px] min-h-[962px] relative shrink-0 w-[1728px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function Wms() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="wms">
      <Body />
    </div>
  );
}
