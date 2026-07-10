"use client"; // 声明为客户端组件

import { profile } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";

export default function InfoPage() {
  const { language } = useLanguage();
  const isChinese = language === "zh";

  return (
    <div
      lang={isChinese ? "zh-CN" : "en"}
      className={`info-page ${isChinese ? "info-page-chinese" : "info-page-english"} min-h-screen bg-background px-6 pb-32 pt-[clamp(112px,15vh,176px)] text-foreground selection:bg-foreground selection:text-background sm:px-8 sm:pb-40 lg:px-12 lg:pb-48`}
    >
      <div className="mx-auto w-full max-w-[1120px] lg:ml-auto lg:mr-[5vw] lg:max-w-[980px]">
        <p className="max-w-[900px] text-[clamp(28px,4.4vw,54px)] leading-[1.28] tracking-[-0.035em] text-foreground">
          {profile.intro[language]}
        </p>

        <div className="mt-20 grid grid-cols-1 gap-16 text-[13px] leading-[1.65] sm:mt-24 sm:gap-20 sm:text-[14px] lg:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
          <div>
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.08em] opacity-60 sm:text-[13px]">
              {isChinese ? "工作经历" : "Experience"}
            </h3>
            <ul className="flex flex-col gap-5">
              {profile.experience.map((exp, i) => (
                <li key={i} className="flex min-w-0 flex-col">
                  <span>{exp.title[language]}</span>
                  <span>{exp.company[language]}</span>
                  <span className="mt-0.5 text-muted">{exp.year[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.08em] opacity-60 sm:text-[13px]">
              {isChinese ? "核心领域" : "Focus"}
            </h3>
            <ul className="flex flex-col gap-5">
              {profile.focus.map((item, i) => (
                <li key={i} className="flex min-w-0 flex-col">
                  <span>{item.title[language]}</span>
                  <span className="mt-0.5 text-muted">{item.desc[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info-contact-grid mt-24 grid grid-cols-1 gap-10 text-[13px] leading-[1.6] sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 sm:text-[14px] lg:mt-32 lg:grid-cols-3 lg:gap-x-16">
          {profile.contact.map((item, i) => (
            <div key={i} className="info-contact-item flex min-w-0 flex-col gap-1">
              <span className="text-muted">{item.label[language]}</span>
              {item.href === "#" ? (
                <span>{item.value[language]}</span>
              ) : (
                <a href={item.href} target="_blank" rel="noreferrer" className="info-contact-value break-words transition-opacity hover:opacity-60">
                  {item.value[language]}
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
