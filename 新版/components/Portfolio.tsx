"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { audiences, capabilities, experience, explorations, methods, projects, themes, type AudienceKey } from "@/data/site";

const navItems = [
  ["Intro", "intro"],
  ["Work", "work"],
  ["Values", "values"],
  ["Background", "background"],
  ["Explorations", "explorations"],
  ["About", "about"],
  ["Contact", "contact"],
];

function useActiveSection() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Portfolio() {
  const [audience, setAudience] = useState<AudienceKey>("anyone");
  const [themeIndex, setThemeIndex] = useState(0);
  const [gridVisible, setGridVisible] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const activeSection = useActiveSection();

  useEffect(() => {
    let restoreThemeTimer: number | undefined;
    const stored = window.localStorage.getItem("miki-theme-index");
    if (stored !== null) {
      const parsed = Number(stored);
      if (Number.isInteger(parsed) && parsed >= 0 && parsed < themes.length) {
        restoreThemeTimer = window.setTimeout(() => setThemeIndex(parsed), 0);
      }
    }
    const timer = window.setTimeout(() => setLoading(false), 1750);
    return () => {
      window.clearTimeout(timer);
      if (restoreThemeTimer !== undefined) window.clearTimeout(restoreThemeTimer);
    };
  }, []);

  const currentTheme = themes[themeIndex];
  const isDefaultTheme = themeIndex === 0;
  const style = useMemo(
    () =>
      ({
        "--page-bg": isDefaultTheme ? "#ffffff" : currentTheme.bg,
        "--ink": isDefaultTheme ? "#000000" : currentTheme.ink,
        "--muted": isDefaultTheme ? "rgb(0 0 0 / 33.3%)" : currentTheme.muted,
        "--card": currentTheme.card,
        "--card-ink": currentTheme.cardInk,
        "--accent": currentTheme.accent,
      }) as CSSProperties,
    [currentTheme, isDefaultTheme],
  );

  const audienceCopy = audiences.find((item) => item.key === audience)?.copy ?? audiences[0].copy;

  const selectTheme = (nextIndex: number) => {
    setThemeIndex(nextIndex);
    window.localStorage.setItem("miki-theme-index", String(nextIndex));
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="site-shell" style={style}>
      <div className={`loading-cover ${loading ? "is-visible" : ""}`} aria-hidden={!loading}>
        <div className="loading-mark">
          <span>Miki Yang<br />—Product Designer</span>
          <i />
        </div>
      </div>

      <div className={`grid-overlay ${gridVisible ? "is-visible" : ""}`} aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span className="grid-column" key={index}>
            <i />
            <i />
          </span>
        ))}
      </div>

      <header className="site-header">
        <a className="brand" href="#intro" aria-label="回到首页">
          <span className="brand-short">M</span>
          <span className="brand-long">iki Yang</span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "is-active" : ""}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      <nav id="mobile-menu" className={`mobile-menu ${mobileOpen ? "is-open" : ""}`} aria-label="移动端导航">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={closeMobile}>
            {label}
          </a>
        ))}
      </nav>

      <aside className="site-controls" aria-label="外观设置">
        <div
          className={`theme-control ${themeOpen ? "is-open" : ""}`}
          style={{ "--theme-position": `${themeIndex * 20}px` } as CSSProperties}
          onMouseEnter={() => setThemeOpen(true)}
          onMouseLeave={() => setThemeOpen(false)}
        >
          <div className="theme-slider-wrap">
            <div className="theme-dots" aria-hidden="true">
              {themes.map((_, index) => <i key={index} />)}
            </div>
            <input
              aria-label="选择颜色主题"
              type="range"
              min="0"
              max={themes.length - 1}
              step="1"
              value={themeIndex}
              onChange={(event) => selectTheme(Number(event.target.value))}
            />
            <span className="theme-value sr-only">{String(themeIndex + 1).padStart(2, "0")}</span>
          </div>
          <button className="theme-trigger" type="button" onClick={() => setThemeOpen((value) => !value)} aria-expanded={themeOpen}>
            <svg className="theme-icon" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">
              <path d="M17 2h-2v6h2V2zm-1 8c-3.31372 0-6 2.68628-6 6s2.68628 6 6 6 6-2.68628 6-6-2.68628-6-6-6zm0 10c-2.20911 0-4-1.79089-4-4s1.79089-4 4-4 4 1.79089 4 4-1.79089 4-4 4zm-1 10h2v-6h-2v6zM11.05029 9.63605 6.80762 5.39337 5.39337 6.80762l4.24268 4.24268 1.41424-1.41425zm9.89954 12.72796 4.24255 4.24261 1.41425-1.41425-4.24261-4.24268-1.41419 1.41432zM8 15H2v2h6v-2zm16 0v2h6v-2h-6zM5.39337 25.19238l1.41425 1.41425 4.24268-4.24261-1.41425-1.41431-4.24268 4.24267zM26.60663 6.80762l-1.41425-1.41425-4.24268 4.24268 1.41431 1.41412 4.24262-4.24255z" />
            </svg>
            <span className="sr-only">{themeOpen ? "关闭颜色主题选择器" : "打开颜色主题选择器"}</span>
          </button>
        </div>
        <button type="button" className="grid-toggle" aria-pressed={gridVisible} onClick={() => setGridVisible((value) => !value)}>
          <svg className="grid-icon" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">
            <path d="M5 28h2V4H5v24zm5 0h2V4h-2v24zm5 0h2V4h-2v24zm5 0h2V4h-2v24zm5-24v24h2V4h-2z" />
          </svg>
          <span className="sr-only">切换网格显示</span>
        </button>
      </aside>

      <section id="intro" className="section intro-section">
        <div className="content-column intro-inner">
          <div className="audience-tabs" role="tablist" aria-label="选择浏览视角">
            {audiences.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={audience === item.key}
                className={audience === item.key ? "is-active" : ""}
                onClick={() => setAudience(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <h1 key={audience} className="hero-title">
            {audienceCopy}
          </h1>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading content-column">
          <h2>Selected work</h2>
          <p>真实项目内容来自现有作品集。尚未确认的年份与成果数据暂不展示。</p>
        </div>
        <div className="work-list">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.title} className={`project-card project-${project.tone}`}>
              <div className="project-copy">
                <div>
                  <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{project.title}</h3>
                  <p className="project-meta">{project.category}</p>
                  <p className="project-summary">{project.summary}</p>
                </div>
                <div className="project-footer">
                  <span>{project.role}</span>
                  <span>案例详情待接入&nbsp; →</span>
                </div>
              </div>
              <div className="project-media">
                <Image src={project.image} alt={`${project.title}项目界面`} fill sizes="(max-width: 760px) 100vw, 56vw" priority={index === 0} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="values" className="section values-section">
        <div className="content-column values-title">
          <h2>清晰</h2>
          <h2>周到</h2>
          <h2>有用</h2>
          <h2>能落地</h2>
        </div>
        <div className="content-column value-notes">
          <div className="value-description">
            <p>
              我擅长把模糊需求转化为清晰流程、可演示原型、设计规则与开发前风险识别，帮助团队减少沟通与返工。
            </p>
            <p>
              工作横跨复杂 B 端系统、工业 HMI、AI 辅助工作流与 Design System，并保持对实现约束和最终体验的关注。
            </p>
          </div>
        </div>
      </section>

      <section id="background" className="section background-section">
        <div className="content-column experience-list">
          <p className="background-intro">
            我有 12 年产品与视觉设计经验，经历从品牌视觉、消费端界面到复杂 B 端系统与工业 AI 产品。以下职责与领域来自现有简历和作品集事实审计。
          </p>
          {experience.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.year}`}>
              <p className="experience-company">{item.company}</p>
              <h2>{item.role}</h2>
              <p className="experience-year">
                <span>{item.year}</span>
                <span>{item.area}</span>
              </p>
              <p className="experience-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="explorations" className="section explorations-section">
        <div className="content-column explorations-layout">
          <div className="explorations-intro">
            <p>AI personal explorations</p>
            <h2>探索人与 AI 一起思考、设计和制作的新方式。</h2>
            <p>以下为个人兴趣拓展区域。具体项目名称、工具与过程将在资料确认后补充。</p>
          </div>
          <div className="exploration-grid">
            {explorations.slice(0, 3).map((item) => (
              <article className={`exploration-card ${item.className}`} key={item.title}>
                <div className="exploration-media">
                  <Image src={item.image} alt={`${item.title}占位视觉`} fill sizes="(max-width: 760px) 100vw, 40vw" />
                </div>
                <div className="exploration-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="content-column about-grid">
          <div className="about-intro">
            <p>
              杨蜜萁是一名拥有 12 年产品与视觉设计经验的产品设计师，专注复杂 B 端系统、工业 HMI、AI 应用工作流与 Design System。她把模糊需求转化为清晰流程、可演示原型、设计规则与开发前风险识别，并在 UX 策略、视觉系统和前端协作之间推进产品落地。
            </p>
          </div>
          <div className="about-list capabilities">
            <h2>Capabilities</h2>
            {capabilities.map((item) => (
              <p key={item.title}>
                <span>{item.title}</span>
                <small>{item.description}</small>
              </p>
            ))}
          </div>
          <div className="about-list methods">
            <h2>Methods</h2>
            {methods.map((item) => (
              <p key={item.title}>
                <span>{item.title}</span>
                <small>{item.description}</small>
              </p>
            ))}
          </div>
          <div className="colophon">
            <h2>Colophon</h2>
            <p>
              内容与设计方向：Miki Yang
              <br />
              使用 Next.js、React、TypeScript、Geist 与 Noto Sans SC 构建
              <br />
              <br /><span className="copyright">© {new Date().getFullYear()} Miki Yang</span>
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="content-column contact-layout">
          <div className="contact-copy">
            <div>
              <p className="contact-kicker">开放深圳产品设计相关机会</p>
              <h2>关注工业 AI、HMI 与复杂 B 端产品。</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:miqi723@163.com">miqi723@163.com</a>
              <a href="https://mikistudio.com.cn" target="_blank" rel="noreferrer">mikistudio.com.cn</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <Image src="/images/about/miki.webp" alt="Miki Yang 肖像" fill sizes="(max-width: 760px) 100vw, 36vw" />
          </div>
        </div>
      </section>
    </main>
  );
}
