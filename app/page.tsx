"use client"; // 必须放在第一行：声明这是客户端组件

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider"; // 引入语言钩子

const INDUSTRIAL_AI_SLUG = "ai-hmi";
const INDUSTRIAL_AI_HREF = "/work/industrial-ai-detection";
const INDUSTRIAL_AI_HERO =
  "/images/industrial-ai-detection/7ff1541c3c112892a91494819379750e14ac3783.png";
const PCBA_SLUG = "pcba";
const PCBA_TITLE = {
  zh: "PCBA 插件机控制系统",
  en: "PCBA Insertion Machine Control System"
};
const PCBA_CATEGORY = {
  zh: "PCBA/B端系统",
  en: "Industrial Software UX / Production Workflow Redesign"
};
const GPS_SLUG = "gps";
const GPS_HREF = "/work/gps-2";
const GPS_HERO = "/images/gps-2/hero.png";
const GPS_ZH_TITLE = "载体轨迹定位系统";
const GPS_ZH_CATEGORY = "GIS 定位追踪 / 移动端 UX 设计";

export default function Home() {
  const { language } = useLanguage(); // 获取当前语言状态 ("en" 或 "zh")

  return (
    <div
      className="font-english w-full min-h-screen bg-background overflow-hidden selection:bg-foreground selection:text-background"
    >
      <section className="h-screen w-full flex items-center">
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex items-start gap-[24px] pl-[38vw] pr-[18vw]">
            {projects.map((project, index) => {
              const isIndustrialAi = project.slug === INDUSTRIAL_AI_SLUG;
              const isPcba = project.slug === PCBA_SLUG;
              const isGps = project.slug === GPS_SLUG;
              const projectHref = isIndustrialAi
                ? INDUSTRIAL_AI_HREF
                : isGps
                  ? GPS_HREF
                  : `/work/${project.slug}`;
              const projectCover = isIndustrialAi
                ? INDUSTRIAL_AI_HERO
                : isGps
                  ? GPS_HERO
                  : project.cover;
              const projectTitle =
                isPcba
                  ? PCBA_TITLE[language]
                  : isGps && language === "zh"
                  ? GPS_ZH_TITLE
                  : project.title[language];
              const projectCategory =
                isPcba
                  ? PCBA_CATEGORY[language]
                  : isGps && language === "zh"
                  ? GPS_ZH_CATEGORY
                  : project.category[language];

              return (
                <Link
                  key={project.slug}
                  href={projectHref}
                  className="group flex flex-col flex-shrink-0 w-[82vw] md:w-[clamp(460px,28vw,520px)]"
                >
                  <div className="w-full aspect-[460/510] relative overflow-hidden bg-muted/10">
                    <Image
                      src={projectCover}
                      alt={""}
                      fill
                      className="object-cover grayscale contrast-[0.95] brightness-[1.02] transition-all duration-700 ease-out group-hover:scale-[1.015] group-hover:grayscale-0"
                      sizes="(max-width: 768px) 82vw, clamp(460px,28vw,520px)"
                      priority={index < 3}
                    />
                  </div>

                  <div className="font-home-card mt-[16px] pl-[6px] flex flex-col gap-[4px]">
                    <h2 className="text-[14px] text-foreground">
                      {/* 根据当前语言动态显示标题 */}
                      {projectTitle}
                    </h2>
                    <p className="text-[13px] text-muted opacity-80">
                      {/* 根据当前语言动态显示分类 */}
                      {projectCategory}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
