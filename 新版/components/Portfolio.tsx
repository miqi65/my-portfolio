"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { audiences, experience, explorations, projects, themes, type AudienceKey } from "@/data/site";

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
    const stored = window.localStorage.getItem("miki-theme-index");
    if (stored !== null) {
      const parsed = Number(stored);
      if (Number.isInteger(parsed) && parsed >= 0 && parsed < themes.length) setThemeIndex(parsed);
    }
    const timer = window.setTimeout(() => setLoading(false), 1750);
    return () => window.clearTimeout(timer);
  }, []);

  const currentTheme = themes[themeIndex];
  const style = useMemo(
    () =>
      ({
        "--page-bg": currentTheme.bg,
        "--ink": currentTheme.ink,
        "--muted": currentTheme.muted,
        "--card": currentTheme.card,
        "--card-ink": currentTheme.cardInk,
        "--accent": currentTheme.accent,
      }) as CSSProperties,
    [currentTheme],
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
          <span>Miki Yang</span>
          <i />
        </div>
      </div>

      <div className={`grid-overlay ${gridVisible ? "is-visible" : ""}`} aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#intro" aria-label="回到首页">
          <span className="brand-short">Miki</span>
          <span className="brand-long"> Yang</span>
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
          {mobileOpen ? "Close" : "Menu"}
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
        <div className={`theme-control ${themeOpen ? "is-open" : ""}`}>
          <div className="theme-slider-wrap">
            <input
              aria-label="选择颜色主题"
              type="range"
              min="0"
              max={themes.length - 1}
              step="1"
              value={themeIndex}
              onChange={(event) => selectTheme(Number(event.target.value))}
            />
            <span>{String(themeIndex + 1).padStart(2, "0")}</span>
          </div>
          <button type="button" onClick={() => setThemeOpen((value) => !value)} aria-expanded={themeOpen}>
            <span className="theme-icon" />
            <span className="sr-only">打开颜色主题选择器</span>
          </button>
        </div>
        <button type="button" className="grid-toggle" aria-pressed={gridVisible} onClick={() => setGridVisible((value) => !value)}>
          <span className="grid-icon" />
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
          {projects.map((project, index) => (
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
          <p>
            我擅长把模糊需求转化为清晰流程、可演示原型、设计规则与开发前风险识别，帮助团队减少沟通与返工。
          </p>
          <p>
            工作横跨复杂 B 端系统、工业 HMI、AI 辅助工作流与 Design System，并保持对实现约束和最终体验的关注。
          </p>
        </div>
      </section>

      <section id="background" className="section background-section">
        <div className="content-column experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={`${item.company}-${item.year}`}>
              <div className="experience-icon" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="experience-company">{item.company}</p>
              <h2>{item.role}</h2>
              <p className="experience-year">{item.year}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="explorations" className="section explorations-section">
        <div className="explorations-layout">
          <div className="explorations-intro">
            <p>AI personal explorations</p>
            <h2>探索人与 AI 一起思考、设计和制作的新方式。</h2>
            <p>以下为个人兴趣拓展区域。具体项目名称、工具与过程将在资料确认后补充。</p>
          </div>
          <div className="exploration-grid">
            {explorations.map((item) => (
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
        <div className="content-column about-intro">
          <h2>我关注复杂问题背后的结构，也在意最终呈现是否足够简单。</h2>
          <p>
            杨蜜萁是一名产品设计师，专注复杂 B 端系统、AI 应用工作流与 Design System。工作方式覆盖 UX 策略、视觉系统和前端协作。
          </p>
        </div>
        <div className="content-column about-columns">
          <div>
            <h3>Focus</h3>
            <ul>
              <li>工业 AI HMI</li>
              <li>复杂 B 端系统</li>
              <li>Design System</li>
              <li>AI 辅助工作流</li>
              <li>前端协作与设计验收</li>
            </ul>
          </div>
          <div>
            <h3>Working approach</h3>
            <ul>
              <li>先对齐业务目标与真实约束</li>
              <li>用流程和原型缩小不确定性</li>
              <li>明确人机协作与风险边界</li>
              <li>把高频判断沉淀为设计规则</li>
              <li>在开发前识别交付风险</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-kicker">开放产品设计相关机会</p>
            <h2>如果你正在推进复杂的 B 端、工业 AI 或智能硬件产品，欢迎联系我。</h2>
            <div className="contact-links">
              <a href="mailto:miqi723@163.com">miqi723@163.com</a>
              <a href="https://mikistudio.com.cn" target="_blank" rel="noreferrer">mikistudio.com.cn</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <Image src="/images/about/miki.webp" alt="Miki Yang 肖像" fill sizes="(max-width: 760px) 100vw, 36vw" />
          </div>
        </div>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Miki Yang</span>
          <span>Product Designer</span>
        </footer>
      </section>
    </main>
  );
}
