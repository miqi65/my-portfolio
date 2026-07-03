"use client"; // 必须放在第一行：声明这是客户端组件

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider"; // 引入语言钩子

export default function Home() {
  const { language } = useLanguage(); // 获取当前语言状态 ("en" 或 "zh")

  return (
    <div className="w-full min-h-screen bg-background overflow-hidden selection:bg-foreground selection:text-background">
      <section className="h-screen w-full flex items-center">
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex items-start gap-[24px] pl-[38vw] pr-[18vw]">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col flex-shrink-0 w-[82vw] md:w-[clamp(460px,28vw,520px)]"
              >
                <div className="w-full aspect-[460/510] relative overflow-hidden bg-muted/10">
                  <Image
                    src={project.cover}
                    alt={""}
                    fill
                    className="object-cover grayscale contrast-[0.95] brightness-[1.02] transition-all duration-700 ease-out group-hover:scale-[1.015] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 82vw, clamp(460px,28vw,520px)"
                    priority={index < 3}
                  />
                </div>
                
                <div className="mt-[16px] pl-[6px] flex flex-col gap-[4px]">
                  <h2 className="text-[14px] font-serif text-foreground">
                    {/* 根据当前语言动态显示标题 */}
                    {project.title[language]}
                  </h2>
                  <p className="text-[13px] text-muted font-serif opacity-80">
                    {/* 根据当前语言动态显示分类 */}
                    {project.category[language]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}