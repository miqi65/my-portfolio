"use client"; // 声明为客户端组件

import { profile } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";

export default function InfoPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-[15vh] pb-[20vh] px-[24px] md:px-0 flex justify-end bg-background text-foreground selection:bg-foreground selection:text-background">
      <div className="w-full md:w-[65vw] max-w-[900px] md:pr-[10vw]">
        
        {/* 主介绍文案：动态读取 en 或 zh */}
        <p className="text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.3] md:leading-[1.35] text-foreground mb-24 md:mb-32 font-serif">
          {profile.intro[language]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-32 text-[13px] md:text-[14px] leading-relaxed font-serif">
          <div>
            <h3 className="italic mb-6 opacity-70">
              {language === "en" ? "Experience" : "工作经历"}
            </h3>
            <ul className="flex flex-col gap-5">
              {profile.experience.map((exp, i) => (
                <li key={i} className="flex flex-col">
                  <span>{exp.title}</span>
                  <span>{exp.company}</span>
                  <span className="text-muted mt-0.5">{exp.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="italic mb-6 opacity-70">
              {language === "en" ? "Focus" : "核心领域"}
            </h3>
            <ul className="flex flex-col gap-5">
              {profile.focus.map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-muted mt-0.5">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-[13px] md:text-[14px] font-serif">
          {profile.contact.map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-muted">{item.label}</span>
              {item.href === "#" ? (
                <span>{item.value}</span>
              ) : (
                <a href={item.href} target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
                  {item.value}
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}