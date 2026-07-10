import ProjectNextSection from "@/components/ProjectNextSection";
import svgPaths from "./svg-xv7l13cwhu";
const imgContainer = "/images/work/industrial-ai-detection/01-hero-base.webp";
const imgContainer1 = "/images/work/industrial-ai-detection/02-hero-overlay.webp";
const imgContainer2 = "/images/work/industrial-ai-detection/03-project-overview.webp";
const imgContainer3 = "/images/work/industrial-ai-detection/04-system-architecture.webp";
const imgContainer4 = "/images/work/industrial-ai-detection/05-monitoring-dashboard.webp";
const imgContainer5 = "/images/work/industrial-ai-detection/06-realtime-inspection.webp";
const imgImage = "/images/work/industrial-ai-detection/07-defect-analysis.webp";
const imgContainer6 = "/images/work/industrial-ai-detection/08-camera-settings-2d.webp";
const img022DCameraSettings1 = "/images/work/industrial-ai-detection/09-statistics.webp";
const imgContainer7 = "/images/work/industrial-ai-detection/10-camera-settings-3d.webp";
const img022DCameraSettings2 = "/images/work/industrial-ai-detection/11-log-management.webp";
const imgContainer8 = "/images/work/industrial-ai-detection/12-parameter-editing.webp";
const img022DCameraSettings3 = "/images/work/industrial-ai-detection/13-control-settings.webp";
const imgRectangle11 = "/images/work/industrial-ai-detection/14-permission-system.webp";
const imgContainer9 = "/images/work/industrial-ai-detection/15-device-frame-a.webp";
const imgContainer10 = "/images/work/industrial-ai-detection/16-device-frame-b.webp";
const imgImage1 = "/images/work/industrial-ai-detection/17-next-cover-a.webp";
const imgImage2 = "/images/work/industrial-ai-detection/18-next-cover-b.webp";

function OptimizedCaseImage({
  loading = "lazy",
  decoding = "async",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img loading={loading} decoding={decoding} {...props} />;
}

function Container1() {
  return <div className="h-[160px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[64.4px] relative shrink-0 text-[#111] text-[46px] whitespace-nowrap">工业 AI 视觉质检系统</p>
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
        <OptimizedCaseImage loading="eager" fetchPriority="high" alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer} />
        <OptimizedCaseImage loading="eager" alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer1} />
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
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目概览</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[22px] w-[680px]">
        <p className="leading-[30.8px] mb-0">本项目的核心不是界面优化,而是把一套原本只服务工程师的检测系统,重构为能支撑工厂多角色协作的 HMI 标准产品。</p>
        <p className="leading-[30.8px] mb-0">落地场景是铝材挤压产线的表面质检,整合为一套工业 AI 视觉质检系统。系统底层通过多相机协同与深度学习算法,识别铝型材表面缺陷;</p>
        <p className="leading-[30.8px]">系统的任务,是把算法输出转译为现场人员可理解、可判断、可接管的操作界面,帮助工厂从人工目视检测,转向可监控、可分析、可追溯的数字化质检流程。</p>
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

function Container10() {
  return (
    <div className="max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">交付物</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">铝材挤压AI检测系统</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[161px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[-0.38px] w-[112.961px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">范围</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] text-black w-[220px] whitespace-pre-wrap">
          <p className="leading-[25.2px] mb-0">{`UI/UX, `}</p>
          <p className="leading-[25.2px]">系统设计</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[220px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-center left-[210px] top-[-0.38px] w-[112.961px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">项目类型</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">工业级AI系统</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[107px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.92px] items-start relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[78.54px] w-[112.961px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] whitespace-nowrap">角色</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[25.2px] relative shrink-0 text-[18px] text-black whitespace-nowrap">设计负责人</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.92px] items-start left-0 top-[157.46px] w-[167px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[410px] max-w-[256px] relative shrink-0 w-[210px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Container18 />
        <Container22 />
        <Container26 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[265px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[272px] items-start max-w-[inherit] pr-[128px] relative size-full">
        <Container10 />
        <Container13 />
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

function Container29() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container32() {
  return (
    <div className="h-[786px] relative shrink-0 w-[1400px]" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer2} />
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer3} />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[845px] pr-[513px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap xl:ml-[-64px]">核心挑战</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[687px] pr-[355px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">系统要同时服务四类角色、处理高密度检测信息,现场又几乎没有误操作的容错空间——核心难点集中在三个维度:</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1.高并发信息判断</p>
          <p className="leading-[24px] mb-0">系统需要同时处理 2D + 3D 双模态检测与 16 路工业相机的高频画面输出。若将画面、结果与设备状态直接堆叠,会显著推高操作员的判断成本。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2.一套系统，四种角色</p>
          <p className="leading-[24px] mb-0">工程师需要调参,操作员需要盯预警,维护工程师需要处理急停,质检人员需要追溯数据。不同角色的任务优先级、操作权限与风险边界各不相同,界面不能按功能简单堆砌。</p>
          <p className="leading-[24px] mb-0">​</p>
          <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3.算法与人工的边界</p>
          <p className="leading-[24px]">清除工位信息、系统重置等操作,源自工厂既有的现场作业习惯——一旦被当作普通按钮直接暴露,就极易造成误触、误删和越权操作。</p>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="min-h-[319px] relative shrink-0 w-[1713px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Heading2 />
        <Container35 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="min-h-[295px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Container36() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container39() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer4} />
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgContainer5} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute backdrop-blur-[1.15px] bg-[rgba(0,0,0,0.3)] h-[787px] left-0 rounded-[15px] top-[0.13px] w-[1400px]" />
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] left-[476px] text-[16px] text-white top-[278.13px] whitespace-nowrap">{`产品愿景 `}</p>
        <p className="[word-break:break-word] absolute font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] left-[476px] text-[32px] text-white top-[317.13px] w-[621px]">除界面优化之外，把偏工程师工具的检测系统，重构为能支撑工厂多角色协作的 HMI 标准产品——让现场人员快速识别异常、理解结果、判断优先级，并在必要时安全接管。</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[788px] max-h-[788px] max-w-[1400px] relative rounded-[16px] shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Image() {
  return (
    <div className="industrial-system-media-image absolute h-[805px] left-0 rounded-[4px] top-[-0.06px] w-[1406px]" data-name="Image">
      <OptimizedCaseImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage} />
    </div>
  );
}

function Container43() {
  return (
    <div className="industrial-system-media-canvas bg-[#0b0c0e] h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Image />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="industrial-system-media-frame h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container47() {
  return (
    <div className="h-[680px] relative shrink-0 w-[679px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer6} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <OptimizedCaseImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img022DCameraSettings1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip rounded-[16px] size-[680px] top-0" data-name="Container">
      <Container47 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">设计方案</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[752px] px-[54px] top-[228.25px] w-[587px]" data-name="Container">
      <Heading3 />
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[480px]">
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#1.状态优先,遵循现场物理直觉</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">策略:主屏优先呈现实时画面、缺陷结果、设备状态与日志;16 路相机画面按产线实际方位分组,而非按功能或时间顺序堆砌。相机卡片在空闲、检测中、离线、预警等状态下有独立的视觉层级,缺陷边框(BBox)在高光、叠层等复杂画面下的显示权重也做了专门规范,避免关键信息被画面噪声掩盖。</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">{`价值:把高并发的检测信息,从"信息堆栈"变成一张"空间地图",操作员定位异常的认知转换成本因此大幅降低。`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[680px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container45 />
        <Container49 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[680px] relative shrink-0 w-[679px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <OptimizedCaseImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img022DCameraSettings2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[719px] overflow-clip rounded-[16px] size-[680px] top-0" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[67px] px-[54px] top-[240.25px] w-[587px]" data-name="Container">
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[480px]">
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#2.权限矩阵替代按钮级管控</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">策略:面向工程师、操作员、维护工程师、质检人员四类角色,不再依赖零散的按钮级控制,而是通过菜单级权限矩阵,定义每类角色的操作流程、可见范围与权限边界。</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">价值:系统从单一检测工具,升级为可承载多角色协作、便于长期扩展维护的标准化产品,也从根本上压缩了跨工序、跨角色越权干扰的空间。</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[680px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <Container54 />
      </div>
    </div>
  );
}

function Container55() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container51 />
        <Container55 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section5 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[680px] relative shrink-0 w-[679px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer8} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 2">
          <div aria-hidden className="absolute border-6 border-[#ccc] border-solid inset-[-6px] pointer-events-none rounded-[14px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 3">
          <div aria-hidden className="absolute border-6 border-black border-solid inset-[-3px] pointer-events-none rounded-[11px]" />
        </div>
        <div className="absolute h-[324px] left-[47.5px] rounded-[8px] top-[178.25px] w-[576px]" data-name="02-2d-camera-settings 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <OptimizedCaseImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img022DCameraSettings3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip rounded-[16px] size-[680px] top-0" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[752px] px-[54px] top-[228.25px] w-[587px]" data-name="Container">
      <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[480px]">
        <p className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] mb-0">#3.危险操作分层隔离 + 算法不稳定期的人工接管</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">策略:数据擦除、系统重置这类高风险操作,通过置灰、多层验证与操作反馈进行分层隔离,而不是做成一键可触达的普通按钮。同时,视觉质检算法无法保证在所有工况下都能给出 100% 稳定的判断——系统不让算法输出直接等于最终判定,而是规划了轻度、中度、极端三级人工接管路径,为算法的不确定性主动保留人工干预空间。</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">{`价值:这是整个项目里"信任边界"感最强的一处设计判断——既不因为过度保守而拖慢现场效率,也不让误判绕开人工直接生效。`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[680px] max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container57 />
        <Container59 />
      </div>
    </div>
  );
}

function Container60() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container56 />
        <Container60 />
      </div>
    </div>
  );
}

function Container63() {
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

function Container62() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Section4 />
        <Container50 />
        <Section6 />
        <Container61 />
      </div>
    </div>
  );
}

function Container64() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container67() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer9} />
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

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Container68() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-[1158px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[567px] pr-[576px] relative size-full">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#717171] text-[16px] text-center whitespace-nowrap">项目价值</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="max-w-[1398px] relative shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pl-[687px] pr-[117px] relative size-full">
        <div className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111] text-[16px] w-[620px]">
          <ol className="list-decimal mb-0" start={1}>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[24px]">本项目完成从 0 到 1 的整体交付,覆盖检测、统计分析、日志追溯与权限管理等核心模块,将 16 路工业相机、11 类缺陷识别结果与四类角色任务,整合进一套统一的 HMI。</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[24px]">系统上线后,现场误操作率下降约 20%,直接验证了危险操作分层隔离与权限矩阵设计的实际效果。全部界面、交互与权限资产已通过开发团队与项目负责人验收,正式在产线落地使用。</span>
            </li>
            <li className="ms-[24px]">
              <span className="leading-[24px]">{`这个项目让我更确信一件事:工业 HMI 设计的价值,不在于界面本身有多精致,而在于能否在客户决策、开发成本与算法稳定性这些真实约束内,找到那个"可解释、可落地、可持续维护"的最优解。`}</span>
            </li>
          </ol>
          <p className="leading-[24px]">​</p>
        </div>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Heading4 />
        <Container69 />
      </div>
    </div>
  );
}

function Container70() {
  return <div className="h-[48px] relative shrink-0 w-full" data-name="Container" />;
}

function Container73() {
  return (
    <div className="h-[787px] relative shrink-0 w-[1400px]" data-name="Container">
      <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer10} />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[786.375px] max-w-[1398px] relative rounded-[16px] shrink-0 w-[1398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Container73 />
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

function Container75() {
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

function Container76() {
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

function Container77() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="flex-[198.359_0_0] min-h-px relative w-[349px]" data-name="Image">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage1} />
        <OptimizedCaseImage alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[198.359px] relative rounded-[8px] shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
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

function Container80() {
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

function Container81() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[174.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[19.602px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[228px] relative shrink-0 w-[349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
        <Container77 />
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container82() {
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

function Container85() {
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

function Container86() {
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

function Container88() {
  return (
    <div className="absolute bg-[#111] content-stretch flex h-[39px] items-center left-[26px] px-[16px] py-[10px] top-0 w-[66px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute flex items-center justify-center left-[49.81px] size-[18.385px] top-[-7.69px]">
      <div className="flex-none rotate-45">
        <div className="bg-[#111] relative rounded-[2px] size-[13px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[39px] left-[-25px] top-[-60px] w-[118px]" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[26px] left-[806px] top-[12.99px] w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container85 />
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[53px] left-0 top-[738.9px] w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Container84 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[791.898px] relative shrink-0 w-[1680px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip py-[150px] relative rounded-[inherit] size-full">
        <Container75 />
        <Container76 />
        <Link2 />
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Container71() {
  return <ProjectNextSection currentSlug="industrial-ai-detection" />;
}

function Container90() {
  return <div className="h-[120px] relative shrink-0 w-full" data-name="Container" />;
}

function Container91() {
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
        <Container29 />
        <Container30 />
        <Container33 />
        <Container34 />
        <Container36 />
        <Container37 />
        <Container40 />
        <Container41 />
        <Container44 />
        <Section3 />
        <Container64 />
        <Container65 />
        <Container68 />
        <Section7 />
        <Container70 />
        <Container71 />
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
    <div className="bg-white h-[10430px] min-h-[962px] relative shrink-0 w-[1728px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function IndustrialAIDetectionPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="工业AI视觉质检">
      <Body />
    </div>
  );
}
