"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CANVAS_WIDTH = 1680;
const CANVAS_HEIGHT = 12019;

const image = {
  hero: "/images/work/ai-hmi/00-cover.png",
  overview: "/images/work/ai-hmi/02-realtime-monitor-overview.png",
  layout: "/images/work/ai-hmi/03-monitoring-layout.png",
  goal: "/images/work/ai-hmi/04-product-goal.png",
  principles: "/images/work/ai-hmi/05-principles-map.png",
  rules: "/images/work/ai-hmi/06-system-rules.png",
  frame: "/images/work/ai-hmi/07-hmi-frame.png",
  monitor: "/images/work/ai-hmi/08-realtime-monitor.png",
  galleryFrame: "/images/work/ai-hmi/09-module-gallery-frame.png",
  camera3d: "/images/work/ai-hmi/10-3d-camera-settings.png",
  log: "/images/work/ai-hmi/11-log-management.png",
  parameter: "/images/work/ai-hmi/12-parameter-editing.png",
  control: "/images/work/ai-hmi/13-control-settings.png",
  deviceA: "/images/work/ai-hmi/14-device-frame-a.png",
  deviceB: "/images/work/ai-hmi/15-device-frame-b.png",
  monitorA: "/images/work/ai-hmi/16-realtime-monitor-a.png",
  monitorB: "/images/work/ai-hmi/17-realtime-monitor-b.png",
};

function FullImage({ src }: { src: string }) {
  return (
    <section className="h-[962px] w-[1680px] shrink-0 overflow-hidden rounded-[4px]">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </section>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`text-[14px] leading-[20px] ${light ? "text-white" : "text-foreground"}`}>
      [{children}]
    </p>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[14px] leading-[20px] text-foreground">[{label}]</p>
      <p className="whitespace-nowrap text-[32px] font-medium uppercase leading-[34px] tracking-[-1.5px] text-foreground">
        {value}
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex h-[1474px] w-[1680px] shrink-0 flex-col gap-[10px] overflow-hidden">
      <div className="flex h-[360px] w-full items-start px-[40px] pb-[100px] pt-[120px]">
        <div className="flex h-[157px] w-[1600px] items-center justify-center overflow-hidden">
          <h1 className="whitespace-nowrap text-right text-[96px] font-black leading-[150px] tracking-[-1.5px] text-foreground">
            工业 AI 视觉质检系统
          </h1>
        </div>
      </div>

      <div className="flex h-[85px] w-full items-start justify-between overflow-hidden pb-[24px]">
        <MetaItem label="交付产物" value="铝材挤压AI检测系统" />
        <MetaItem label="客户" value="某硬件公司" />
        <MetaItem label="我的角色" value="设计负责人" />
        <MetaItem label="服务范围" value="UI/UX, 系统设计" />
      </div>

      <div className="h-[962px] w-full overflow-hidden">
        <img src={image.hero} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="flex h-[428px] w-[1680px] shrink-0 items-end overflow-hidden py-[100px]">
      <div className="flex h-[304px] w-full flex-col items-end justify-end">
        <div className="flex h-[228px] w-[840px] flex-col justify-center gap-[16px] overflow-hidden">
          <SectionLabel>项目概述</SectionLabel>
          <p className="w-[672px] text-[28px] font-medium uppercase leading-[32px] tracking-[-1.5px] text-foreground">
            本项目面向铝材挤压产线的表面质检场景，将 2D + 3D 双模态检测、16 路工业相机画面、11
            类缺陷识别、统计分析、日志追溯与权限管理整合为一套工业 AI 视觉质检 HMI，帮助工厂从人工目视检测转向可监控、可分析、可追溯的数字化质检流程。
          </p>
        </div>
        <div className="h-[34px] w-[840px] overflow-hidden">
          <p className="w-[660px] text-[14px] leading-[18px] text-foreground">
            系统底层由多相机协同与深度学习算法识别铝型材表面缺陷，前端 HMI
            需要将算法结果转译现场用户可理解、可判断、可接管的操作界面。
          </p>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  const items = [
    {
      number: "#1",
      title: "高并发信息判断",
      body: "双模态检测与 16 路相机高频输出画面、结果与状态，直接堆叠会显著推高操作员的判断成本",
    },
    {
      number: "#2",
      title: "一套系统，四种角色",
      body: "工程师调参、操作员盯预警、维护工程师处理急停、质检人员查数据，优先级和风险各不相同，界面不能按功能简单堆砌",
    },
    {
      number: "#3",
      title: "算法与人工的边界",
      body: "清除工位信息、系统重置等能力源于工厂既有操作习惯，需要在保留入口的同时降低误触风险。",
    },
  ];

  return (
    <section className="flex h-[580px] w-[1680px] shrink-0 items-center justify-center overflow-hidden">
      <div className="flex w-[672px] flex-col items-center justify-center gap-[16px] text-center text-foreground">
        <SectionLabel>核心挑战</SectionLabel>
        <div className="flex w-full flex-col items-center gap-[8px] text-[12px] leading-[17px]">
          {items.map((item) => (
            <div key={item.number}>
              <p className="font-bold">{item.number}</p>
              <p className="font-bold">{item.title}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductGoalSection() {
  return (
    <section className="relative h-[960px] w-[1680px] shrink-0 overflow-hidden">
      <img src={image.goal} alt="" className="absolute inset-0 h-full w-full object-cover blur-[0.95px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex w-[1176px] flex-col items-center justify-center gap-[16px] text-center text-white">
          <SectionLabel light>产品目标</SectionLabel>
          <p className="w-full text-[40px] font-medium leading-[56px] tracking-[-1.5px]">
            除界面优化之外，把偏工程师工具的检测系统，重构为能支撑工厂多角色协作的 HMI
            标准产品——让现场人员快速识别异常、理解结果、判断优先级，并在必要时安全接管。
          </p>
        </div>
      </div>
    </section>
  );
}

function DesignPrinciplesSection() {
  const principles = [
    ["关键状态优先", "主屏优先呈现实时画面、缺陷结果、设备状态与日志，保证高压场景下的快速定位；"],
    ["遵循现场物理直觉", "监控信息按产线上下左右方位分组，降低相机画面与实际点位之间的认知转换成本；"],
    ["高风险操作分层管理", "数据擦除、系统重置类操作不作为普通按钮直接暴露，以置灰与多层验证做风险隔离；"],
    ["角色边界清晰", "以权限矩阵定义各角色的操作范围，杜绝跨工序、跨角色的越权干扰；"],
    ["在工程可实现范围内做最优解", "设计服从客户决策、开发成本与渲染性能等真实约束，优先选择可解释、可持续维护的方案。"],
  ];

  return (
    <section className="flex h-[818px] w-[1680px] shrink-0 gap-[40px] overflow-hidden">
      <div className="flex h-full w-[806px] items-center justify-center">
        <div className="flex w-[456px] flex-col items-center justify-center gap-[16px] text-center text-foreground">
          <SectionLabel>设计原则</SectionLabel>
          <div className="flex flex-col gap-[8px] text-[12px] leading-[17px]">
            {principles.map(([title, body]) => (
              <div key={title}>
                <p className="font-bold">{title}</p>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full w-[823px] overflow-hidden">
        <img src={image.principles} alt="" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}

function DesignSystemSection() {
  const rules = [
    ["状态规则", "相机卡片在空闲、检测中、离线、预警等状态下的视觉层级"],
    ["检测结果规则", "缺陷边框（BBox）在高光、叠层、复杂画面下的显示权重"],
    ["危险操作规则", "数据擦除、重置类操作的置灰、多层验证与反馈机制可见范围边界"],
    ["角色权限规则", "4 类工种的操作流与可见范围边界"],
  ];

  return (
    <section className="flex h-[818px] w-[1680px] shrink-0 items-center justify-center overflow-hidden text-center text-foreground">
      <div className="flex w-[672px] flex-col items-center justify-center gap-[16px]">
        <SectionLabel>设计系统与约束</SectionLabel>
        <div className="text-[12px] leading-[17px]">
          <p className="mb-[16px]">本项目在工业 HMI 的复杂业务场景下补充了项目级状态规则与权限规则。</p>
          {rules.map(([title, body]) => (
            <div key={title} className="mb-[8px]">
              <p className="font-bold">{title}</p>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockupPairSection() {
  return (
    <section className="flex h-[818px] w-[1680px] shrink-0 gap-[40px] overflow-hidden">
      {[
        [image.deviceA, image.monitorA],
        [image.deviceB, image.monitorB],
      ].map(([frame, screen], index) => (
        <div key={index} className="relative h-full w-[823px] overflow-hidden">
          <img src={frame} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute left-[131px] top-[251px] h-[315px] w-[560px] rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.16)]">
            <img src={screen} alt="" className="h-full w-full rounded-[4px] object-cover" />
            <div className="absolute inset-0 rounded-[4px] border border-white" />
          </div>
        </div>
      ))}
    </section>
  );
}

function CoreSolutionSection() {
  return (
    <section className="flex h-[818px] w-[1680px] shrink-0 gap-[40px] overflow-hidden">
      <div className="flex h-full w-[806px] items-center justify-center">
        <div className="flex w-[448px] flex-col items-center justify-center gap-[16px] text-center text-[12px] leading-[17px] text-foreground">
          <SectionLabel>核心设计方案</SectionLabel>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">监控信息重组</p>
            <p>
              16 路相机画面、统计数据、缺陷分布与设备日志统一组织进监控首页，按产线物理方位分组。最终采用更贴合现场认知、且渲染压力可控的分组方案。
            </p>
            <p className="font-bold">人机协作设计</p>
            <p>把算法输出的缺陷特征、异常参数与预警状态，设计为 HMI 中可读的缺陷框、优先级排序与安全接管入口。</p>
            <p className="font-bold">分级容错机制</p>
            <p>规划轻度、中度、极端三级人工接管路径，为算法不稳定期保留干预空间。</p>
            <p className="font-bold">权限矩阵替代按钮级管控</p>
            <p>面向通用化产品定位，改用菜单级权限隔离四类角色的操作范围。</p>
          </div>
        </div>
      </div>
      <div className="relative h-full w-[834px] overflow-hidden">
        <img src={image.frame} alt="" className="absolute inset-0 h-full w-full object-contain" />
        <div className="absolute left-[131px] top-[251px] h-[315px] w-[560px] rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.16)]">
          <img src={image.monitor} alt="" className="h-full w-full rounded-[4px] object-cover" />
          <div className="absolute inset-0 rounded-[4px] border border-white" />
        </div>
      </div>
    </section>
  );
}

function ModuleGallerySection() {
  const modules = [
    [image.monitor, "left-[102px] top-[199px]"],
    [image.log, "left-[600px] top-[199px]"],
    [image.monitorB, "left-[1098px] top-[199px]"],
    [image.camera3d, "left-[102px] top-[493px]"],
    [image.parameter, "left-[600px] top-[493px]"],
    [image.control, "left-[1098px] top-[493px]"],
  ];

  return (
    <section className="relative h-[962px] w-[1680px] shrink-0 overflow-hidden rounded-[4px]">
      <img src={image.galleryFrame} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {modules.map(([src, position], index) => (
        <div key={index} className={`absolute ${position} h-[270px] w-[480px] rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.16)]`}>
          <img src={src} alt="" className="h-full w-full rounded-[4px] object-cover" />
          <div className="absolute inset-0 rounded-[4px] border border-white" />
        </div>
      ))}
    </section>
  );
}

function ProjectValueSection() {
  const values = [
    "将 16 路工业相机、11 类缺陷结果与多角色任务整合进统一 HMI，完成 11 个核心模块从 0 到 1 的交付；",
    "以物理分组与状态层级，降低高密度检测信息的判断成本；",
    "建立算法—系统—人工三层职责边界，让 AI 判断转化为现场可理解、可操作、可追溯的信息；",
    "以状态规则与权限矩阵，降低误操作与越权风险；",
    "全部界面、交互与权限资产已通过开发团队与项目负责人审核确认并落地",
  ];

  return (
    <section className="flex h-[818px] w-[1680px] shrink-0 items-center justify-center overflow-hidden text-center text-foreground">
      <div className="flex w-[672px] flex-col items-center justify-center gap-[16px]">
        <SectionLabel>项目价值</SectionLabel>
        <div className="text-[12px] leading-[17px]">
          {values.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextProjectSection() {
  return (
    <Link
      href="/work/pcba"
      className="flex h-[119px] min-h-[119px] w-full shrink-0 items-center justify-center text-foreground"
    >
      <div className="flex min-h-[119px] w-full items-center justify-center px-[20px] py-[10px]">
        <div className="w-[900px] max-w-[1677px]">
          <div className="flex w-full items-center gap-[40px]">
            <div className="flex shrink-0 items-center gap-[12px]">
              <p className="whitespace-nowrap text-[13px] leading-[20px] tracking-[-0.13px] text-muted">
                Next Project
              </p>
              <p className="whitespace-nowrap text-[13px] leading-[20px] tracking-[-0.13px] text-foreground">
                PCBA Project
              </p>
            </div>
            <div className="h-px min-w-[80px] flex-1 bg-foreground/15">
              <div className="h-px w-0 bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function AiHmiProjectPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(Math.min(1, window.innerWidth / CANVAS_WIDTH));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-background antialiased"
      style={{
        fontFamily:
          '"Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Arial, sans-serif',
      }}
    >
      <div
        className="mx-auto"
        style={{
          width: CANVAS_WIDTH * scale,
          height: CANVAS_HEIGHT * scale,
          fontFamily:
            '"Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: CANVAS_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div className="flex w-full flex-col items-start gap-[40px]">
            <HeroSection />
            <OverviewSection />
            <FullImage src={image.overview} />
            <ChallengesSection />
            <FullImage src={image.layout} />
            <ProductGoalSection />
            <DesignPrinciplesSection />
            <FullImage src={image.rules} />
            <DesignSystemSection />
            <MockupPairSection />
            <CoreSolutionSection />
            <ModuleGallerySection />
            <ProjectValueSection />
            <NextProjectSection />
          </div>
        </div>
      </div>
    </main>
  );
}
