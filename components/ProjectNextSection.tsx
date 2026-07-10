"use client";

import Link from "next/link";

type ImageAsset = string | { src: string };

type ProjectNextItem = {
  slug: string;
  href: string;
  title: string;
  hero: ImageAsset;
};

const PROJECT_SEQUENCE: ProjectNextItem[] = [
  {
    slug: "industrial-ai-detection",
    href: "/work/industrial-ai-detection",
    title: "工业 AI 视觉质检系统",
    hero: "/images/work/industrial-ai-detection/00-card.webp"
  },
  {
    slug: "pcba",
    href: "/work/pcba",
    title: "PCBA 插件机控制系统",
    hero: "/images/work/pcba/00-card.webp"
  },
  {
    slug: "wms",
    href: "/work/wms",
    title: "WMS 智能仓储管理系统",
    hero: "/images/work/wms/00-card.webp"
  },
  {
    slug: "gps-2",
    href: "/work/gps-2",
    title: "载体轨迹定位系统",
    hero: "/images/work/gps-2/00-card.webp"
  },
  {
    slug: "5G",
    href: "/work/5G",
    title: "5G消息Chatbot交互规范体系",
    hero: "/images/work/5g-chatbot/00-card.webp"
  },
  {
    slug: "factory",
    href: "/work/factory",
    title: "友讯达数据大屏",
    hero: "/images/work/factory-dashboard/00-card.webp"
  },
  {
    slug: "ds-ai",
    href: "/work/ds-ai",
    title: "DS-AI 项目",
    hero: "/images/work/ds-ai/00-card.webp"
  }
];

function imageSrc(image: ImageAsset) {
  return typeof image === "string" ? image : image.src;
}

function getNextProject(currentSlug: string) {
  const currentIndex = PROJECT_SEQUENCE.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  return PROJECT_SEQUENCE[(currentIndex + 1) % PROJECT_SEQUENCE.length];
}

export default function ProjectNextSection({ currentSlug }: { currentSlug: string }) {
  const nextProject = getNextProject(currentSlug);

  if (!nextProject) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full shrink-0 bg-white text-[#111]" data-project-next={currentSlug}>
      <div className="relative flex min-h-[640px] w-full flex-col items-center justify-center overflow-hidden px-6 py-[120px] md:min-h-[792px] md:py-[150px]">
        <p className="[word-break:break-word] font-['Noto_Sans_SC:Regular',sans-serif] text-center text-[18px] font-normal uppercase leading-[21.6px] text-[#474747] md:text-[24px]">
          下一个项目
        </p>

        <Link href={nextProject.href} className="group mt-[24px] flex flex-col items-center outline-none">
          <h2 className="[word-break:break-word] max-w-[1200px] text-center font-['Noto_Sans_SC:Bold',sans-serif] text-[clamp(30px,4vw,46px)] font-bold uppercase leading-[1.4] text-[#111] transition-opacity group-hover:opacity-70">
            {nextProject.title}
          </h2>

          <div className="mt-[24px] flex w-[min(349px,80vw)] flex-col items-center justify-center gap-[10px]">
            <p className="self-start font-['Noto_Sans_SC:Regular',sans-serif] text-[14px] font-normal leading-[19.6px] text-[#fafafa]">
              [UI/UX]
            </p>
            <div className="relative aspect-[349/198] w-full overflow-hidden rounded-[8px] bg-[#111]">
              <img
                loading="lazy"
                decoding="async"
                alt={`${nextProject.title} hero`}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                src={imageSrc(nextProject.hero)}
              />
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <p className="font-['Noto_Sans_SC:Regular',sans-serif] text-[14px] font-normal leading-[19.6px] text-[#fafafa]">
                WILD
              </p>
              <p className="font-['Noto_Sans_SC:Regular',sans-serif] text-right text-[14px] font-normal leading-[19.6px] text-[#fafafa] opacity-50">
                RESPONSIVE WEB
              </p>
            </div>
          </div>
        </Link>

        <div className="absolute bottom-0 left-0 flex h-[64px] w-full items-center justify-between px-5 py-4 md:h-[53px]">
          <p className="[word-break:break-word] font-['Roboto_Mono:Regular',monospace] text-center text-[12px] font-normal leading-[21px] text-[#2f2f2f] md:text-[14px]">
            COLLECTION OF WORK
          </p>
          <button
            type="button"
            aria-label="返回顶部"
            className="absolute left-1/2 top-1/2 flex size-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#2f2f2f] outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2"
            onClick={scrollToTop}
          >
            <span aria-hidden className="font-['Roboto_Mono:Regular',monospace] text-[20px] leading-none">
              ↑
            </span>
          </button>
          <p className="[word-break:break-word] font-['Roboto_Mono:Regular',monospace] text-center text-[12px] font-normal leading-[21px] text-[#2f2f2f] md:text-[14px]">
            COPYRIGHT 2026
          </p>
        </div>
      </div>
    </section>
  );
}
