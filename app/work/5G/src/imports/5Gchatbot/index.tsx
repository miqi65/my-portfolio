import svgPaths from "./svg-x5lekoojnc";
import imgContainer from "./902bd9cb5345e95748b19b0a35ef01cb4f60a3f5.png";
import imgContainer1 from "./a169984832e56fd99a6974db941e6246f6758413.png";
import imgContainer2 from "./c6d713bf855a8399cbf3882240f2ed94e204cc6e.png";
import imgContainer3 from "./f21bc47bf40d6c7af0e89e41b96507852425354c.png";
import imgContainer4 from "./f8eb217af3bca6a7db483191f74f0068285aac8e.png";
import imgContainer5 from "./449724633cc62d0afe68e79ac547f710cc5249c1.png";
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] whitespace-nowrap">5G消息Chatbot交互规范体系</p>
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
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[787px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="border-0 overflow-clip rounded-[inherit] size-full">
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
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[30.8px] relative shrink-0 text-[#111] text-[22px] w-[680px]">5G 消息运行于手机原生短信入口，技术环境被高度受限。本项目的核心目标，是跳出单一项目的定制化设计，针对极高的容错成本与极其碎片的设备渲染差异，建立一套“最小公约数”适配规范，并将这套规范成功推行至包含 15 人的跨职能团队，实现后续项目的无缝复用与低成本交付。</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">15</p>
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[20px] tracking-[-0.4492px]">人</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">规范覆盖人数</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">40</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">新增项目交付效率提升</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] relative shrink-0 text-[40px] tracking-[0.3711px]">3</p>
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[20px] tracking-[-0.4492px]">项</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">获得奖项</p>
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
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black w-[168px]">
          <p className="leading-[25.2px] mb-0">交互规范体系</p>
          <p className="leading-[25.2px] mb-0">组件适配标准</p>
          <p className="leading-[25.2px]">标准业务流</p>
        </div>
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
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black w-[220px]">
          <p className="leading-[25.2px] mb-0">UX</p>
          <p className="leading-[25.2px] mb-0">视觉系统规范</p>
          <p className="leading-[25.2px]">设计运营</p>
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">5G通信</p>
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
    <div className="absolute content-stretch flex items-center left-0 top-[128.54px] w-[112.961px]" data-name="Container">
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black w-[202px] whitespace-pre-wrap">{`交互设计负责人  `}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.92px] items-start left-0 top-[207.46px] w-[167px]" data-name="Container">
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
    <div className="h-[364px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-225px] pl-[845px] pr-[513px] top-[245.81px] w-[1713px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#e2e5e9] text-[16px] text-center whitespace-nowrap">核心挑战</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-67.5px] max-w-[1398px] pl-[687px] pr-[355px] top-[284.81px] w-[1398px]" data-name="Container">
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#fafafa] text-[0px] w-[560px] whitespace-pre-wrap">
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] mb-0 text-[24px]">#1.「1-1-1」单线流程</p>
        <p className="leading-[24px] mb-0 text-[16px]">原生短信入口缺乏灵活的 UI 控件，交互被锁死在线性链路中，用户只能单向步步推进，操作容错成本极高。</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] mb-0 text-[24px]">#2.渲染规则碎片化</p>
        <p className="leading-[24px] mb-0 text-[16px]">各主流安卓手机厂商对同一卡片的渲染逻辑差异巨大，且无法像 App 一样分版本精准下发控制。</p>
        <p className="leading-[24px] mb-0 text-[16px]">​</p>
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] mb-0 text-[24px]">#3.用户画像无边界</p>
        <p className="leading-[24px] text-[16px]">服务对象横跨在校学生至政务办事人员，认知折叠度极高，无法套用单一互联网圈层的用户心智。</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[786px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[3.35px] bg-[rgba(0,0,0,0.77)] h-[786px] left-[-15px] rounded-[28px] top-[-0.19px] w-[1415px]" />
        <Heading3 />
        <Container37 />
      </div>
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

function Container40() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="h-[798.82px] relative shrink-0 w-[679px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-0 overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container42 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[808px] text-[#111] text-[16px] top-[213.63px] w-[480px] whitespace-pre-wrap">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1:确立「最小公约数」适配基准</p>
          <p className="leading-[24px] mb-0">策略：放弃追求单设备上的“完美视觉”，转而针对碎片化渲染，建立严苛的「安全区」标准。重新定义色彩对比度、系统字体调用规则与图片安全裁切比例，确保信息在所有厂商设备上的信息传达不失真。</p>
          <p className="leading-[24px] mb-0">价值：从源头斩断了多机型适配的冗余测试与修改成本。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2:极简颗粒度的防错交互</p>
          <p className="leading-[24px] mb-0">策略：针对「1-1-1」线性链路和极宽的用户画像，采取“剥夺思考”的交互策略。将复杂的业务逻辑拆解为极简的单步选项，确保用户在每一步的认知负荷降至最低。</p>
          <p className="leading-[24px]">价值：在容错率极低的环境下，用最克制的选项保障了主链路的高转化率。</p>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[840px] text-[#717171] text-[16px] text-center top-[174.63px] whitespace-nowrap">设计策略</p>
      </div>
    </div>
  );
}

function Container44() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container40 />
        <Container41 />
        <Container44 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container35 />
        <Container38 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="787" src={imgContainer3} width="1400" />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container46 />
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
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex h-[798.82px] items-center justify-center left-[719px] overflow-clip rounded-[16px] top-0 w-[679px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[798.82px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[118px] text-[#111] text-[16px] top-[309.43px] w-[480px]">
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3:组织提效与规范布道</p>
          <p className="leading-[24px] mb-0">策略：规范不应停留在文档。作为唯一的设计负责人，通过 40+ 次的高频内部培训，将复杂的交互逻辑与视觉适配标准，强力推行至 15 人的研发与交付团队。</p>
          <p className="leading-[24px]">价值：将个人的专业认知转化为团队的流水线能力，使后续新增项目可以直接调用规范，极大压缩了沟通与设计交付周期。</p>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container52() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-[72px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] left-[699px] text-[#111] text-[16px] top-[0.25px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">交付资产</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="leading-[24px] mb-0">Fig. 01 — Interaction Flow (交互链路重构)：基于「贴近用户真实物理环境」原则，输出标准化的线性对话流程模板与节点信息传达策略。</p>
          <p className="leading-[24px]">Fig. 02 — Design System (视觉最小公约数)：定义色彩语义、系统级字体降级方案、图片自适应安全区的全套规范。</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Container54() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container57() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-[924px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px pr-[576px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">业务结果与行业认可</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[237px] pr-[117px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">规范落地后，直接支撑的 3 个核心项目在 2021 年收获行业顶层认可，验证了“克制且标准化的设计”在复杂 B/G 端场景下的绝对商业价值：</p>
          <p className="leading-[24px] mb-0">{`•    🏆 2021 绽放杯 三等奖`}</p>
          <p className="leading-[24px] mb-0">{`•    🏆 行业优秀创新奖`}</p>
          <p className="leading-[24px] mb-0">{`•    🏆 智慧教育优秀奖（注：其中智慧校园项目成功入选国家 5G+ 智慧教育应用试点）`}</p>
          <p className="leading-[24px]">​</p>
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Heading4 />
        <Container59 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[#474747] text-[24px] text-center uppercase whitespace-nowrap">下一个项目</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[21.602px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="flex-[1680_0_0] min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] text-center uppercase whitespace-nowrap">PCBA 插件机控制系统</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[150.297px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Heading6 />
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

function Container64() {
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

function Container65() {
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

function Container67() {
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

function Container68() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[228px] relative shrink-0 w-[349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
        <Container64 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container69() {
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

function Container72() {
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

function Container73() {
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

function Container75() {
  return (
    <div className="absolute bg-[#111] content-stretch flex h-[39px] items-center left-[26px] px-[16px] py-[10px] top-0 w-[66px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute flex items-center justify-center left-[49.81px] size-[18.385px] top-[-7.69px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#111] relative rounded-[2px] size-[13px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[39px] left-[-25px] top-[-60px] w-[118px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[26px] left-[806px] top-[12.99px] w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container72 />
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[53px] left-0 top-[738.9px] w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container71 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[791.898px] items-center justify-center left-0 overflow-clip py-[150px] top-[-0.5px] w-[1680px]" data-name="Container">
      <Container62 />
      <Container63 />
      <Link2 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container77() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container78() {
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
        <Container45 />
        <Section3 />
        <Container52 />
        <Section4 />
        <Container54 />
        <Container55 />
        <Container58 />
        <Section5 />
        <Container60 />
        <Container77 />
        <Container78 />
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
    <div className="bg-white h-[7280px] min-h-[962px] relative shrink-0 w-[1728px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function Component5Gchatbot() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="5Gchatbot">
      <Body />
    </div>
  );
}