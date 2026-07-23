import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = process.env.PORTFOLIO_ROOT || process.cwd();
const OUT = path.join(ROOT, "output/portfolio-full/Miki_Product_Designer_Portfolio_Full_CN_v1.pptx");
const PREVIEW = path.join(ROOT, "output/portfolio-full/previews");
const W = 1280;
const H = 720;

const C = {
  bg: "#F4F1EA",
  panel: "#E8E3D9",
  ink: "#151716",
  muted: "#686D68",
  line: "#CDC6BA",
  green: "#168B61",
  orange: "#C9673F",
  dark: "#171A19",
  white: "#FFFFFF",
  paleGreen: "#DDEBE3",
  paleOrange: "#F1DED3",
};

const FONT = "Arial Unicode MS";

function box(slide, x, y, w, h, fill, radius = 0, line = "none") {
  return slide.shapes.add({
    geometry: radius ? "roundRect" : "rect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: line, width: line === "none" ? 0 : 1 },
    ...(radius ? { borderRadius: radius } : {}),
  });
}

function text(slide, value, x, y, w, h, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    typeface: FONT,
    fontSize: opts.size ?? 18,
    bold: opts.bold ?? false,
    color: opts.color ?? C.ink,
    alignment: opts.align ?? "left",
    verticalAlignment: opts.valign ?? "top",
    autoFit: "shrinkText",
    wrap: "square",
    lineSpacing: opts.lineSpacing ?? 1.16,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function rule(slide, x, y, w, color = C.line, height = 1) {
  box(slide, x, y, w, height, color);
}

function base(slide, n, section, dark = false) {
  slide.background.fill = dark ? C.dark : C.bg;
  const fg = dark ? "#AEB5AF" : C.muted;
  text(slide, section, 64, 28, 500, 22, { size: 13, color: fg });
  text(slide, String(n).padStart(2, "0") + " / 47", 1124, 676, 92, 18, { size: 12, color: fg, align: "right" });
  text(slide, "杨蜜萁 Miki · Product Designer", 64, 676, 300, 18, { size: 12, color: fg });
}

function title(slide, t, sub = "", dark = false) {
  text(slide, t, 64, 72, 1152, 58, { size: 38, bold: true, color: dark ? C.white : C.ink });
  if (sub) text(slide, sub, 64, 142, 1080, 52, { size: 18, color: dark ? "#B9C0BA" : C.muted, lineSpacing: 1.25 });
}

function label(slide, t, x, y, color = C.green) {
  text(slide, t.toUpperCase(), x, y, 280, 20, { size: 13, bold: true, color });
}

function bullet(slide, t, x, y, w, color = C.ink, dotColor = C.green) {
  box(slide, x, y + 8, 7, 7, dotColor, 4);
  text(slide, t, x + 18, y, w - 18, 50, { size: 17, color, lineSpacing: 1.25 });
}

function metric(slide, value, caption, x, y, w, accent = C.green, note = "") {
  text(slide, value, x, y, w, 52, { size: 36, bold: true, color: accent });
  text(slide, caption, x, y + 54, w, 42, { size: 16, bold: true });
  if (note) text(slide, note, x, y + 98, w, 42, { size: 14, color: C.muted });
}

function contentType(p) {
  const ext = path.extname(p).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "image/png";
}

async function image(slide, rel, x, y, w, h, alt, fit = "contain", crop = undefined) {
  const p = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  const bytes = await fs.readFile(p);
  const blob = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  return slide.images.add({
    blob,
    contentType: contentType(p),
    alt,
    fit,
    position: { left: x, top: y, width: w, height: h },
    geometry: "roundRect",
    borderRadius: 8,
    ...(crop ? { crop } : {}),
  });
}

function caption(slide, t, x, y, w, dark = false) {
  text(slide, "观看重点｜" + t, x, y, w, 48, { size: 16, color: dark ? "#CCD2CD" : C.muted, lineSpacing: 1.2 });
}

function meta(slide, items, x, y, w, dark = false) {
  const cw = w / 2;
  items.forEach((it, i) => {
    const xx = x + (i % 2) * cw;
    const yy = y + Math.floor(i / 2) * 76;
    text(slide, it[0], xx, yy, cw - 20, 20, { size: 13, bold: true, color: dark ? "#97A098" : C.muted });
    text(slide, it[1], xx, yy + 24, cw - 20, 44, { size: 17, bold: true, color: dark ? C.white : C.ink });
  });
}

function callout(slide, t, x, y, w, h, accent = C.green, dark = false) {
  box(slide, x, y, w, h, dark ? "#222624" : C.panel, 8);
  box(slide, x, y, 7, h, accent);
  text(slide, t, x + 22, y + 18, w - 40, h - 30, { size: 18, bold: true, color: dark ? C.white : C.ink, lineSpacing: 1.25, valign: "middle" });
}

async function cover(pres) {
  const s = pres.slides.add();
  s.background.fill = C.dark;
  await image(s, "public/images/work/industrial-ai-detection/00-card.webp", 700, 0, 580, 720, "工业 AI 视觉质检系统界面", "cover");
  box(s, 0, 0, 760, 720, C.dark);
  box(s, 64, 70, 48, 5, C.green);
  text(s, "PORTFOLIO / 2026", 64, 96, 300, 24, { size: 14, bold: true, color: "#AAB1AB" });
  text(s, "杨蜜萁\nMiki Yang", 64, 160, 560, 148, { size: 62, bold: true, color: C.white, lineSpacing: 0.95 });
  text(s, "Product Designer / 高级产品设计师", 64, 334, 570, 42, { size: 25, bold: true, color: C.white });
  text(s, "复杂 B 端系统 · 工业 HMI · 智能硬件 · AI 产品体验", 64, 392, 600, 46, { size: 19, color: "#CCD2CD" });
  rule(s, 64, 570, 560, "#454B46");
  text(s, "12 年产品与视觉设计经验", 64, 592, 300, 26, { size: 16, color: "#AAB1AB" });
  text(s, "miqi723@163.com  ·  mikistudio.com.cn", 64, 628, 440, 26, { size: 16, color: "#AAB1AB" });
  text(s, "01 / 47", 1124, 676, 92, 18, { size: 12, color: "#AAB1AB", align: "right" });
}

function positioning(pres) {
  const s = pres.slides.add(); base(s, 2, "01 / POSITIONING");
  title(s, "我处理的是系统判断，不只是界面。", "把业务、角色、状态、权限、技术约束和现场风险组织成可上线、可验证、可交付的产品方案。");
  const items = [
    ["复杂系统", "把角色任务、权限边界和异常路径组织成清晰结构。", "工业 AI · PCBA · WMS"],
    ["工业 HMI", "在算法、设备、渲染和现场安全约束下做产品取舍。", "工业 AI · 智能硬件"],
    ["移动体验", "处理地图、原生短信、小屏操作和跨设备适配。", "GPS · 5G 消息"],
    ["设计工程化", "用规范、原型、QA 和 AI 辅助工具降低交付风险。", "WMS · AI 工作流"],
  ];
  items.forEach((it, i) => {
    const x = 64 + (i % 2) * 580;
    const y = 238 + Math.floor(i / 2) * 188;
    box(s, x, y, 548, 158, i === 0 || i === 3 ? C.dark : C.panel, 10);
    text(s, `0${i + 1}`, x + 20, y + 18, 55, 36, { size: 24, bold: true, color: i % 2 ? C.orange : C.green });
    text(s, it[0], x + 92, y + 19, 320, 34, { size: 24, bold: true, color: i === 0 || i === 3 ? C.white : C.ink });
    text(s, it[1], x + 20, y + 68, 500, 48, { size: 17, color: i === 0 || i === 3 ? "#D3D8D4" : C.muted });
    text(s, it[2], x + 20, y + 128, 500, 20, { size: 13, bold: true, color: i % 2 ? C.orange : C.green });
  });
}

function timeline(pres) {
  const s = pres.slides.add(); base(s, 3, "02 / CAREER");
  title(s, "12 年，从视觉执行走到复杂产品与体验管理。", "职位、行业和责任不断变化，但主线一直是把信息组织成可理解、可执行的产品体验。");
  const jobs = [
    ["2014—2015", "广东点控科技", "UI 设计师", "OA / 门店管理"],
    ["2015—2017", "珠海银泰贸易", "UI/UX 设计师", "冷库监控 / 智能硬件"],
    ["2017—2018", "珠海罗西尼", "视觉运营设计师", "电商 / 品牌视觉"],
    ["2019—2020", "珠海达明科技", "UI/UX 设计师", "PCBA / GPS / WMS / 工业"],
    ["2021—2022", "珠海小源科技", "用户体验经理", "5G 消息 / 团队管理"],
    ["2022—至今", "万门科技", "产品设计师", "工业 AI / HMI / AI 工作流"],
  ];
  jobs.forEach((j, i) => {
    const x = 64 + (i % 3) * 384;
    const y = 232 + Math.floor(i / 3) * 192;
    box(s, x, y, 352, 160, i >= 3 ? C.dark : C.panel, 8);
    text(s, j[0], x + 18, y + 18, 160, 24, { size: 16, bold: true, color: i >= 3 ? C.green : C.orange });
    text(s, j[1], x + 18, y + 54, 310, 30, { size: 22, bold: true, color: i >= 3 ? C.white : C.ink });
    text(s, j[2], x + 18, y + 90, 310, 24, { size: 16, color: i >= 3 ? "#D1D6D2" : C.muted });
    text(s, j[3], x + 18, y + 125, 310, 22, { size: 14, color: i >= 3 ? "#9DA69E" : C.muted });
  });
}

function capabilities(pres) {
  const s = pres.slides.add(); base(s, 4, "03 / CAPABILITY MAP");
  title(s, "四类能力都有后续项目证据。", "页码不是目录装饰；它让招聘者直接跳到最相关的项目判断与界面证据。");
  const rows = [
    ["复杂 B 端与流程", "信息架构 · 任务流 · 状态 · 异常 · 权限", "工业 AI P06–13 · PCBA P14–21 · WMS P22–29", C.green],
    ["工业 HMI 与智能硬件", "设备状态 · 算法边界 · 高风险操作 · 安全接管", "工业 AI P06–13 · PCBA P14–21", C.orange],
    ["移动端与多端体验", "地图定位 · 小屏扫码 · 原生短信 · 跨设备适配", "5G P30–35 · GPS P36–39 · WMS P22–29", C.green],
    ["Design System 与交付", "组件 · 规则 · QA · 原型 · AI 辅助检查", "WMS P28–29 · 5G P32–35 · AI 工作流 P43–45", C.orange],
  ];
  rows.forEach((r, i) => {
    const y = 220 + i * 105;
    rule(s, 64, y + 88, 1152);
    text(s, `0${i + 1}`, 64, y, 56, 34, { size: 26, bold: true, color: r[3] });
    text(s, r[0], 144, y, 300, 34, { size: 23, bold: true });
    text(s, r[1], 458, y + 2, 380, 56, { size: 17, color: C.muted });
    text(s, r[2], 850, y + 2, 366, 56, { size: 15, bold: true, color: r[3] });
  });
}

async function workIndex(pres) {
  const s = pres.slides.add(); base(s, 5, "04 / SELECTED WORK");
  title(s, "三个深度系统案例建立主线，四项实践补足宽度。", "主案例证明复杂度和落地；其他案例证明移动端、数据可视化、团队影响力和 AI 辅助交付。");
  const featured = [
    ["01", "工业 AI 视觉质检", "算法结果如何被现场理解和安全接管", "P06–13", "public/images/work/industrial-ai-detection/09-statistics.webp"],
    ["02", "PCBA 插件机控制", "在存量系统与真实产线中重构关键流程", "P14–21", "public/images/work/pcba/03-new-system.webp"],
    ["03", "WMS 智能仓储", "Web / RF 双端任务重组与设计系统", "P22–29", "public/images/work/wms/05-template-all.webp"],
  ];
  for (let i = 0; i < featured.length; i++) {
    const y = 218 + i * 125;
    box(s, 64, y, 730, 106, C.panel, 8);
    await image(s, featured[i][4], 76, y + 10, 190, 86, featured[i][1], "contain");
    text(s, featured[i][0], 292, y + 14, 54, 25, { size: 18, bold: true, color: i === 1 ? C.orange : C.green });
    text(s, featured[i][1], 350, y + 12, 330, 30, { size: 22, bold: true });
    text(s, featured[i][2], 292, y + 51, 420, 38, { size: 16, color: C.muted });
    text(s, featured[i][3], 706, y + 12, 70, 24, { size: 14, bold: true, color: C.muted, align: "right" });
  }
  label(s, "Additional / Practice", 840, 218, C.orange);
  const other = [
    ["5G 消息规范与团队建设", "移动端 · 规范 · 培训", "P30–35"],
    ["GPS 轨迹定位", "地图 · 告警 · 技术取舍", "P36–39"],
    ["智能工厂数据大屏", "数据可视化 · 决策", "P40–42"],
    ["AI 辅助设计工作流", "原型 · 风险 · QA", "P43–45"],
  ];
  other.forEach((o, i) => {
    const y = 252 + i * 87;
    text(s, o[0], 840, y, 300, 28, { size: 19, bold: true });
    text(s, o[1], 840, y + 32, 300, 24, { size: 15, color: C.muted });
    text(s, o[2], 1142, y, 74, 24, { size: 14, bold: true, color: C.orange, align: "right" });
    rule(s, 840, y + 66, 376);
  });
}

async function caseIntro(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section);
  title(s, cfg.title, cfg.sub);
  label(s, "Project conclusion", 64, 220, cfg.accent);
  text(s, cfg.conclusion, 64, 252, 470, 112, { size: 21, bold: true, lineSpacing: 1.25 });
  meta(s, cfg.meta, 64, 392, 480);
  await image(s, cfg.img, 596, 218, 620, 350, cfg.alt, cfg.fit || "contain");
  caption(s, cfg.caption, 596, 584, 620);
  if (cfg.note) text(s, cfg.note, 64, 590, 470, 44, { size: 14, color: C.muted });
}

function problemCards(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section);
  title(s, cfg.title, cfg.sub);
  cfg.cards.forEach((c, i) => {
    const x = 64 + (i % 2) * 580;
    const y = 218 + Math.floor(i / 2) * 192;
    box(s, x, y, 548, 162, i === 0 || i === 3 ? C.dark : C.panel, 8);
    text(s, `0${i + 1}`, x + 18, y + 18, 50, 28, { size: 22, bold: true, color: c.accent });
    text(s, c.title, x + 80, y + 18, 420, 30, { size: 21, bold: true, color: i === 0 || i === 3 ? C.white : C.ink });
    text(s, c.body, x + 18, y + 66, 510, 76, { size: 17, color: i === 0 || i === 3 ? "#D4D9D5" : C.muted, lineSpacing: 1.25 });
  });
}

async function textImage(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section, cfg.dark || false);
  title(s, cfg.title, cfg.sub, cfg.dark || false);
  const fg = cfg.dark ? C.white : C.ink;
  const muted = cfg.dark ? "#C4CAC5" : C.muted;
  label(s, cfg.label || "Design decision", 64, 220, cfg.accent || C.green);
  text(s, cfg.lead, 64, 252, 420, 92, { size: 22, bold: true, color: fg, lineSpacing: 1.25 });
  (cfg.bullets || []).forEach((b, i) => bullet(s, b, 64, 370 + i * 72, 430, muted, cfg.accent || C.green));
  await image(s, cfg.img, 532, 218, 684, 382, cfg.alt, cfg.fit || "contain", cfg.crop);
  caption(s, cfg.caption, 532, 614, 684, cfg.dark || false);
}

async function twoEvidence(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section, cfg.dark || false);
  title(s, cfg.title, cfg.sub, cfg.dark || false);
  const y = 220;
  const iw = 550;
  for (let i = 0; i < 2; i++) {
    const x = 64 + i * 586;
    await image(s, cfg.items[i].img, x, y, iw, 330, cfg.items[i].alt, cfg.items[i].fit || "contain", cfg.items[i].crop);
    text(s, cfg.items[i].title, x, 566, iw, 30, { size: 19, bold: true, color: cfg.dark ? C.white : C.ink });
    caption(s, cfg.items[i].caption, x, 604, iw, cfg.dark || false);
  }
}

async function fullEvidence(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section, cfg.dark || false);
  title(s, cfg.title, cfg.sub, cfg.dark || false);
  await image(s, cfg.img, 64, 214, 1152, 388, cfg.alt, cfg.fit || "contain", cfg.crop);
  caption(s, cfg.caption, 64, 616, 1152, cfg.dark || false);
}

async function threeScreens(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section);
  title(s, cfg.title, cfg.sub);
  for (let i = 0; i < 3; i++) {
    const x = 94 + i * 390;
    await image(s, cfg.items[i].img, x, 214, 250, 410, cfg.items[i].alt, "contain");
    text(s, cfg.items[i].title, x + 266, 238, 110, 50, { size: 18, bold: true, color: i === 1 ? C.orange : C.green });
    text(s, cfg.items[i].caption, x + 266, 304, 110, 170, { size: 15, color: C.muted, lineSpacing: 1.25 });
  }
}

function takeover(pres) {
  const s = pres.slides.add(); base(s, 12, "05 / INDUSTRIAL AI");
  title(s, "自动化越强，越需要人工接管和安全冗余。", "把已上线、未完整落地和设备安全机制分开表达，避免把设计方案写成既成成果。");
  const levels = [
    ["01", "在线调参", "已上线", "不中断任务调整检测条件和参数。", C.green],
    ["02", "人工复判 / 接管", "设计但未完整落地", "异常进入人工确认路径；受工期限制。", C.orange],
    ["03", "物理急停", "设备安全机制", "极端情况下保留最终人工控制。", "#C84A3B"],
  ];
  levels.forEach((l, i) => {
    const y = 232 + i * 126;
    box(s, 64, y, 720, 102, i === 1 ? C.panel : C.dark, 8);
    text(s, l[0], 84, y + 22, 60, 40, { size: 28, bold: true, color: l[4] });
    text(s, l[1], 162, y + 18, 230, 30, { size: 22, bold: true, color: i === 1 ? C.ink : C.white });
    text(s, l[2], 418, y + 20, 220, 24, { size: 15, bold: true, color: l[4] });
    text(s, l[3], 162, y + 58, 560, 30, { size: 16, color: i === 1 ? C.muted : "#CCD2CD" });
  });
  callout(s, "算法负责输出结果；系统负责呈现状态和约束；现场人员保留确认与接管责任。", 824, 232, 392, 150, C.orange, true);
  callout(s, "中度接管没有完整上线，因此只作为设计边界展示，不计入项目交付成果。", 824, 410, 392, 150, C.green, false);
}

function resultsSlide(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section, cfg.dark || false);
  title(s, cfg.title, cfg.sub, cfg.dark || false);
  const cols = cfg.metrics.length;
  const cw = 1100 / cols;
  cfg.metrics.forEach((m, i) => metric(s, m.value, m.label, 72 + i * cw, 232, cw - 20, m.accent || C.green, m.note || ""));
  rule(s, 64, 364, 1152, cfg.dark ? "#414743" : C.line);
  label(s, cfg.label || "Contribution boundary", 64, 398, cfg.accent || C.orange);
  text(s, cfg.body, 64, 432, 740, 126, { size: 20, bold: true, color: cfg.dark ? C.white : C.ink, lineSpacing: 1.28 });
  callout(s, cfg.callout, 842, 400, 374, 168, cfg.accent || C.orange, cfg.dark || false);
  if (cfg.note) text(s, cfg.note, 64, 598, 1152, 40, { size: 14, color: cfg.dark ? "#AEB5AF" : C.muted });
}

function archive(pres) {
  const s = pres.slides.add(); base(s, 46, "12 / SELECTED ARCHIVE");
  title(s, "早期经历补足 12 年职业积累。", "这些项目只有简历级事实，没有足够公开截图，因此保留为职业档案，不包装成深度案例。");
  const items = [
    ["2014—2015", "OA 办公系统", "企业软件 · UI 设计", "审批流程、页面设计、切图标注与开发验收"],
    ["2014—2015", "儿童乐园门店管理", "门店系统 · UI 设计", "会员、门店管理与运营数据模块"],
    ["2015—2017", "冷库监控系统", "IoT · Web / 移动端", "温度、设备状态、异常告警与数据展示"],
    ["2017—2018", "罗西尼电商视觉", "C 端 · 视觉运营", "活动页面、Banner、详情页与品牌视觉"],
    ["2019—2020", "智能储物柜", "智能硬件 · UI/UX", "柜机端投递取货与后台管理"],
  ];
  items.forEach((it, i) => {
    const y = 224 + i * 82;
    text(s, it[0], 64, y, 128, 26, { size: 15, bold: true, color: i < 2 ? C.orange : C.green });
    text(s, it[1], 216, y - 2, 260, 30, { size: 21, bold: true });
    text(s, it[2], 500, y, 250, 24, { size: 16, color: C.muted });
    text(s, it[3], 772, y, 444, 42, { size: 16, color: C.ink });
    rule(s, 64, y + 54, 1152);
  });
}

async function contact(pres) {
  const s = pres.slides.add(); base(s, 47, "13 / CONTACT", true);
  box(s, 64, 84, 48, 5, C.green);
  text(s, "联系 Miki", 64, 132, 620, 76, { size: 54, bold: true, color: C.white });
  text(s, "高级产品设计师 · 复杂 B 端 · 工业 HMI · 智能硬件 · AI 产品体验", 64, 222, 760, 46, { size: 20, color: "#BDC4BE" });
  rule(s, 64, 300, 1152, "#454B46");
  const info = [
    ["电话", "13622962831"],
    ["邮箱", "miqi723@163.com"],
    ["网站", "mikistudio.com.cn"],
    ["所在 / 意向城市", "深圳"],
    ["求职方向", "高级产品设计师 / 高级 UIUX"],
  ];
  info.forEach((it, i) => {
    const x = 64 + (i % 2) * 390;
    const y = 342 + Math.floor(i / 2) * 92;
    text(s, it[0], x, y, 220, 20, { size: 13, bold: true, color: "#98A098" });
    text(s, it[1], x, y + 30, 350, 32, { size: 20, bold: true, color: C.white });
  });
  await image(s, "output/portfolio-full/assets/portfolio-qr.png", 980, 348, 190, 190, "mikistudio.com.cn 网站二维码", "contain");
  text(s, "扫码查看在线作品集", 980, 552, 190, 24, { size: 15, color: "#AEB5AF", align: "center" });
  text(s, "本作品集使用脱敏项目材料；待确认信息未进入正文。", 64, 622, 760, 24, { size: 14, color: "#8F9790" });
}

async function build() {
  await fs.mkdir(PREVIEW, { recursive: true });
  const p = Presentation.create({ slideSize: { width: W, height: H } });

  await cover(p);
  positioning(p);
  timeline(p);
  capabilities(p);
  await workIndex(p);

  await caseIntro(p, { n: 6, section: "05 / CASE 01 · INDUSTRIAL AI", title: "工业 AI：把算法输出变成现场可执行判断。", sub: "铝材挤压视觉检测设备 · 约 2 个月 · 已上线并验收", accent: C.green, conclusion: "面向四类现场角色，重组检测、状态、权限和异常接管，让算法结果成为可理解、可处理、可追溯的操作信息。", meta: [["我的角色", "设计负责人"], ["交付", "AI 质检 HMI"], ["范围", "功能梳理 / UIUX / 规则 / 落地"], ["结果", "11 个核心模块上线验收"]], img: "public/images/work/industrial-ai-detection/00-card.webp", alt: "工业 AI 质检系统项目界面", caption: "项目开场图只说明产品场景；后续页面使用真实界面证明设计判断。", fit: "cover", note: "客户匿名；公开版本不展示未经授权的真实检测效率数据。" });
  await textImage(p, { n: 7, section: "05 / CASE 01 · INDUSTRIAL AI", title: "一套系统同时承载检测、设备和四类角色。", sub: "系统复杂度决定界面不能按功能简单堆砌。", label: "System complexity", accent: C.green, lead: "2D + 3D 双模态、16 路工业相机、11 类缺陷，以及操作员、工程师、维护和质检四类任务同时进入一个 HMI。", bullets: ["操作员：观察预警并处理当前任务。", "工程师：调整模型与检测条件。", "维护 / 质检：处理设备风险并追溯结果。"], img: "public/images/work/industrial-ai-detection/09-statistics.webp", alt: "工业 AI 主监控界面", caption: "同一页面需要同时支持实时画面、缺陷结果、设备状态和统计判断。" });
  problemCards(p, { n: 8, section: "05 / CASE 01 · INDUSTRIAL AI", title: "四个原始问题决定了后续方案。", sub: "问题不是四条口号；每一条都对应后面的界面、权限或安全机制。", cards: [
    { title: "高密度信息", body: "多路画面、缺陷和设备状态高频输出；直接平铺会推高判断成本。", accent: C.green },
    { title: "算法结果边界", body: "算法输出不能直接成为最终业务判定，需要条件、结果和追溯信息。", accent: C.orange },
    { title: "四类角色权限", body: "工程师、操作员、维护和质检看到的信息与能执行的动作不同。", accent: C.green },
    { title: "异常与误操作", body: "数据擦除、系统重置和急停相关动作几乎没有现场容错空间。", accent: C.orange },
  ] });
  await fullEvidence(p, { n: 9, section: "05 / CASE 01 · INDUSTRIAL AI", title: "主屏按产线方位组织，而不是平铺 16 路画面。", sub: "曾评估更具沉浸感的独立平铺 + 3D 截面方案，但渲染成本高，也不符合操作员对物理点位的直觉。", img: "public/images/work/industrial-ai-detection/09-statistics.webp", alt: "按产线方位分组的工业 AI 主监控界面", caption: "相机画面按实际方位分组；关键状态、缺陷结果和设备信息位于同一判断视野。" });
  await twoEvidence(p, { n: 10, section: "05 / CASE 01 · INDUSTRIAL AI", title: "算法结果必须可解释、可追溯。", sub: "设计不修改算法模型；设计负责让检测条件、结果和执行记录对现场人员可见。", items: [
    { img: "public/images/work/industrial-ai-detection/13-control-settings.webp", alt: "工业 AI 控制设置界面", title: "检测条件与阈值", caption: "暴露模型、参数、检测条件和执行结果，避免把 AI 判断变成不可解释的黑箱。" },
    { img: "public/images/work/industrial-ai-detection/11-log-management.webp", alt: "工业 AI 日志管理界面", title: "日志与追溯", caption: "按时间、对象和执行结果保留记录，为异常排查和责任追溯提供依据。" },
  ] });
  await fullEvidence(p, { n: 11, section: "05 / CASE 01 · INDUSTRIAL AI", title: "四类角色不能共享同一套操作权限。", sub: "放弃维护成本高的按钮级控制，改为菜单级权限矩阵，定义每类角色的可见范围与操作边界。", img: "public/images/work/industrial-ai-detection/14-permission-system.webp", alt: "工业 AI 权限与模块总览", caption: "观看重点：工程师、操作员、维护与质检能进入哪些模块、看到哪些数据，以及高风险功能如何被隔离。" });
  takeover(p);
  resultsSlide(p, { n: 13, section: "05 / CASE 01 · INDUSTRIAL AI", title: "11 个核心模块完成上线验收。", sub: "结果页只保留能够解释来源和归因边界的内容。", metrics: [["11", "核心模块", "检测 / 统计 / 日志 / 权限", C.green], ["16", "工业相机", "统一进入 HMI", C.green], ["4", "现场角色", "权限范围分离", C.orange]].map(x => ({ value:x[0], label:x[1], note:x[2], accent:x[3] })), body: "Miki 主导功能梳理、信息架构、UI/UX、状态和权限规则，并协同算法、开发、硬件和客户团队完成落地。", callout: "误操作率约下降 20% 仅作为前后方案与项目测试的预估结果，不等同于长期生产统计。", accent: C.orange, note: "中度人工复判未完整上线，不计入项目交付成果。" });

  await caseIntro(p, { n: 14, section: "06 / CASE 02 · PCBA", title: "PCBA：在存量系统和真实产线中完成可上线重构。", sub: "核心设计约 2—3 个月 · 设计负责人 · 系统已上线", accent: C.orange, conclusion: "保留现场已经形成的底层操作逻辑，只重构物料、任务、预警和高风险操作等关键路径。", meta: [["我的角色", "设计负责人"], ["交付", "PCBA 产线控制系统"], ["验证", "12 位操作员与组长 A/B 测试"], ["上线", "90+ 订单 / 80+ 反馈"]], img: "public/images/work/pcba/03-new-system.webp", alt: "PCBA 上线系统主界面", caption: "主界面集中呈现产线进度、机台状态、订单和操作控制。", note: "项目整体周期资料冲突，因此正文只写核心设计周期。" });
  await textImage(p, { n: 15, section: "06 / CASE 02 · PCBA", title: "旧系统、研发排期和生产风险限制了设计自由度。", sub: "真正的设计范围不是任意创新，而是在可实现和不打断生产之间做选择。", label: "Constraints", accent: C.orange, lead: "进口控制系统长期闲置，但一线人员对既有逻辑已经形成肌肉记忆。", bullets: ["全部替换会增加培训成本和误操作风险。", "交互复杂度与研发排期强耦合。", "系统直连产线，高风险动作必须校验和兜底。"], img: "public/images/pcb2026/104-pcb-old.png", alt: "PCBA 旧控制系统界面", caption: "旧界面证明存量结构和现场路径依赖；最终方案没有简单推倒重来。" });
  await textImage(p, { n: 16, section: "06 / CASE 02 · PCBA", title: "现场任务是连续的，原系统却把它们拆散。", sub: "现场观察与用户旅程显示：物料选择、孔位确认和在制状态需要在同一任务上下文中完成。", label: "Workflow diagnosis", accent: C.orange, lead: "关键判断：保留底层控制逻辑，重构任务之间的连接方式。", bullets: ["把跨页面确认合并为连续任务路径。", "把依赖人工巡检的异常转成数字预警。", "把高风险动作纳入权限、确认和审计。"], img: "public/images/pcb2026/journey map.png", alt: "PCBA 用户旅程与问题地图", caption: "旅程图连接用户动作、痛点和解决方案，避免只从页面层面修补旧系统。" });
  await fullEvidence(p, { n: 17, section: "06 / CASE 02 · PCBA", title: "集中监控让管理者直接看到进度、状态和异常。", sub: "过去需要翻日志和询问现场；现在从统一入口判断产线运行和处理优先级。", img: "public/images/work/pcba/21-system-overview.webp", alt: "PCBA 集中监控与系统概览", caption: "产线进度、机台状态、订单和操作控制被收敛到一个管理视野。" });
  await textImage(p, { n: 18, section: "06 / CASE 02 · PCBA", title: "物料选择与孔位确认被合并为连续操作。", sub: "流程重构减少跨界面确认，同时保留操作员熟悉的底层作业逻辑。", label: "Task redesign", accent: C.orange, lead: "物料、孔位和在制状态不再分散在机台端与后台系统。", bullets: ["同一任务路径完成选择、确认和状态查看。", "异常物料直接进入当前任务上下文。", "工程资料沉淀为可复用配置资产。"], img: "public/images/work/pcba/05-material-module.webp", alt: "PCBA 物料与在制状态模块", caption: "界面把物料信息、在制状态、异常提示和操作入口组织在同一上下文。" });
  await twoEvidence(p, { n: 19, section: "06 / CASE 02 · PCBA", title: "异常和高风险动作进入数字预警与权限校验。", sub: "异常不再依赖红黄灯和人工巡检；越权写入需要被系统拦截并留下记录。", items: [
    { img: "public/images/work/pcba/04-warning-dashboard.webp", alt: "PCBA 数字预警界面", title: "分层数字预警", caption: "异常类型、设备状态和处理优先级同时可见，帮助现场先处理高风险问题。" },
    { img: "public/images/work/pcba/16-login-role.webp", alt: "PCBA 角色与登录界面", title: "角色与权限", caption: "不同角色进入不同操作范围；高风险动作增加权限校验和审计日志。" },
  ] });
  await twoEvidence(p, { n: 20, section: "06 / CASE 02 · PCBA", title: "A/B 测试比较的是读取和操作效率。", sub: "12 位操作员与组长参与；测试关注布局、读取、操作路径和高风险场景，不把偏好当成结果。", items: [
    { img: "public/images/work/pcba/10-io-settings.webp", alt: "PCBA A/B 可用性测试材料", title: "A/B 可用性测试", caption: "比较竖版与横版在工业屏幕视距、信息读取和操作效率上的差异。" },
    { img: "public/images/work/pcba/09-teaching-record.webp", alt: "PCBA 竞品与用户测试材料", title: "竞品与首版范围", caption: "对标行业方案，并结合现场频率与上线风险决定首版核心能力。" },
  ] });
  resultsSlide(p, { n: 21, section: "06 / CASE 02 · PCBA", title: "上线结果属于项目整体，设计贡献有明确边界。", sub: "订单、反馈和效率数据用于说明项目经过验证，不把算法、设备和运营变化全部归因于设计。", metrics: [
    { value:"90+", label:"真实产线订单", note:"上线验证", accent:C.green },
    { value:"80+", label:"一线反馈", note:"进入后续迭代", accent:C.green },
    { value:"+28%", label:"管理效率", note:"项目整体预估", accent:C.orange },
    { value:"+17%", label:"插件效率", note:"项目整体预估", accent:C.orange },
  ], body: "其他项目整体预估结果：人工介入率降低 10%，工程导入耗时降低 17%。Miki 的可归因贡献是流程、界面、状态、权限、测试和交付规范。", callout: "所有效率数字均基于前后方案与测试对比，不解释为单由界面设计直接造成。", accent: C.orange, note: "系统已上线；90+ 订单和 80+ 反馈为项目验证口径。" });

  await caseIntro(p, { n: 22, section: "07 / CASE 03 · WMS", title: "WMS：Miki 主导 RF，并协作 Web 端交付。", sub: "两位设计师参与 · Web 与 RF 均已上线", accent: C.green, conclusion: "将多客户、多仓库、多作业流程拆成 Web 配置查询与 RF 现场任务，并沉淀为可复用的双端交付资产。", meta: [["我的角色", "RF 端主导 / Web 端协作"], ["团队", "两位设计师"], ["范围", "双端流程 / 权限 / 规范"], ["状态", "Web + RF 已上线"]], img: "public/images/work/wms/00-cover.png", alt: "WMS Web 与 RF 双端界面", caption: "项目开场展示双端形态；后续页面分别证明 Web 模板和 RF 现场流程。", fit: "contain" });
  await twoEvidence(p, { n: 23, section: "07 / CASE 03 · WMS", title: "Web 与 RF 服务不同任务密度。", sub: "Web 承载配置、查询和高密度表格；RF 服务扫码、核对、异常和提交。", items: [
    { img: "public/images/cyg-wms/p2_03_web_view.png", alt: "WMS Web 管理端场景", title: "Web 管理端", caption: "需要全局查询、字段配置、表格和多仓库信息，因此保留更高信息密度。" },
    { img: "public/images/cyg-wms/p2_04_rf_main.png", alt: "WMS RF 现场端界面", title: "RF 现场端", caption: "只暴露当前动作所需字段和扫码入口，降低单手操作中的理解与误触成本。" },
  ] });
  await fullEvidence(p, { n: 24, section: "07 / CASE 03 · WMS", title: "Web 模板矩阵减少重复页面设计。", sub: "标准化不是追求 100% 配置化；高频标准场景组合交付，非标业务保留扩展入口。", img: "public/images/work/wms/04-rf-view.webp", alt: "WMS Web 页面模板矩阵", caption: "列表、弹窗、表单区块、侧边导航和字段排列规则被整理成可复用页面骨架。" });
  await textImage(p, { n: 25, section: "07 / CASE 03 · WMS", title: "RF 只显示当前动作所需的信息。", sub: "照搬 Web 结构会让手持机过载，增加现场核对和单手扫码的成本。", label: "RF task model", accent: C.green, lead: "RF 的信息架构围绕当前任务，而不是围绕后台模块。", bullets: ["待办入口减少多层级查找。", "扫码后只显示核对与提交所需字段。", "异常和修改按需展开，不占用正常流程。"], img: "public/images/cyg-wms/p2_04_rf_main.png", alt: "WMS RF 当前任务界面", caption: "屏幕优先呈现任务对象、数量、异常状态和下一步动作。" });
  await fullEvidence(p, { n: 26, section: "07 / CASE 03 · WMS", title: "四种收货模式共享组件，但不共享同一流程节奏。", sub: "待办、标准收货、按箱和按单模式使用统一组件外壳，再按业务复杂度组合字段与步骤。", img: "public/images/work/wms/05-template-all.webp", alt: "WMS 四种 RF 收货模式", caption: "复用的是导航、字段和反馈组件；不同模式根据任务深度保留不同确认步骤。" });
  await twoEvidence(p, { n: 27, section: "07 / CASE 03 · WMS", title: "操作阻力必须匹配风险。", sub: "轻流程快确认，重流程强校验；删除、修改等危险动作增加防误触、二次确认和结果反馈。", items: [
    { img: "public/images/cyg-wms/p2_04_mode_lite.png", alt: "WMS RF 收货核对界面", title: "任务核对", caption: "低风险操作减少停顿；需要修改时再展开明细和数量确认。" },
    { img: "public/images/cyg-wms/p2_06_feedback_1.1.png", alt: "WMS 危险操作反馈界面", title: "危险操作反馈", caption: "滑动防误触、二次确认和 Toast 结果反馈共同降低库存数据风险。" },
  ] });
  await twoEvidence(p, { n: 28, section: "07 / CASE 03 · WMS", title: "权限控制在菜单、用户和仓库三层。", sub: "按钮级权限带来高配置、高测试成本；三层模型守住数据边界，同时控制多客户交付复杂度。", items: [
    { img: "public/images/work/wms/09-mode-complex.webp", alt: "WMS Design System", title: "共享设计系统", caption: "统一字体、颜色、状态、组件与反馈语义，支持 Web 与 RF 多端交付。" },
    { img: "public/images/cyg-wms/p2_07_spec_1.png", alt: "WMS 设计规范与权限证据", title: "权限与交付规则", caption: "菜单可见、用户范围和仓库数据隔离成为可实现、可测试的规则。" },
  ] });
  resultsSlide(p, { n: 29, section: "07 / CASE 03 · WMS", title: "Web、RF 和规范均已交付上线。", sub: "交付规模来自当前项目交付页；没有独立上线后效率统计，因此不补充未经验证的提升百分比。", metrics: [
    { value:"28", label:"Web 页面", note:"当前交付记录", accent:C.green },
    { value:"48+", label:"弹窗 / 小窗", note:"当前交付记录", accent:C.green },
    { value:"4", label:"RF 收货模式", note:"已落地", accent:C.orange },
    { value:"Live", label:"上线状态", note:"Web + RF", accent:C.orange },
  ], body: "Miki 主导 RF 端任务、模式、反馈和权限，并参与 Web 模板资产；另一位设计师共同完成双端交付。", callout: "项目价值是降低后续多客户交付中的重复设计和沟通成本，不把整个 WMS 写成个人独立完成。", accent:C.green, note:"复用价值为交付层面的定性结果。" });

  await caseIntro(p, { n: 30, section: "08 / CASE 04 · 5G MESSAGE", title: "5G 消息项目同时证明移动体验和团队影响力。", sub: "用户体验经理 · 管理 2 名设计师 · 15 人产品部门", accent: C.orange, conclusion: "在手机原生短信入口和安卓设备差异下，建立跨设备可复用的交互与视觉规范，并通过评审、培训和质量标准推动团队应用。", meta: [["我的角色", "用户体验经理"], ["核心项目", "4 个 5G 消息项目"], ["团队影响", "40+ 培训 / 15 人部门"], ["结果", "相关项目获 3 项行业奖项"]], img: "public/images/work/5g-chatbot/00-card.webp", alt: "5G 消息移动端应用场景", caption: "开场图说明原生短信中的移动端使用场景；后续用规范和团队材料证明贡献。", fit:"cover" });
  await textImage(p, { n: 31, section: "08 / CASE 04 · 5G MESSAGE", title: "原生短信入口让交互容错空间极小。", sub: "不能像 App 一样自由使用控件或精准控制版本，设计必须兼顾线性流程、设备差异和跨度很大的用户。", label: "Constraints", accent: C.orange, lead: "三个问题共同要求方案克制：", bullets: ["“1-1-1”单线流程，用户只能逐步推进。", "安卓厂商渲染差异大，无法按版本精确下发。", "用户从学生到政务人员，认知模型差异明显。"], img: "public/images/work/5g-chatbot/03-strategy-flow.webp", alt: "5G 消息原生短信使用场景", caption: "移动端交互必须在系统原生能力和跨设备限制内完成，不能照搬 App 组件。" });
  await fullEvidence(p, { n: 32, section: "08 / CASE 04 · 5G MESSAGE", title: "规范以跨设备“最小公约数”为基准。", sub: "放弃单设备上的完美视觉，统一安全区、色彩对比、系统字体、图片裁切和消息卡片规则。", img: "public/images/work/5g-chatbot/04-design-spec.webp", alt: "5G 消息交互与视觉规范", caption: "这张规范图证明跨设备适配、消息卡片、按钮、安全区和视觉规则被整理为可复用资产。" });
  await twoEvidence(p, { n: 33, section: "08 / CASE 04 · 5G MESSAGE", title: "线性流程需要把复杂业务拆成单步选择。", sub: "交互策略不是让用户失去思考，而是在容错空间极小的入口中，每一步只保留当前决策所需信息。", items: [
    { img: "public/images/work/5g-chatbot/03-strategy-flow.webp", alt: "5G 消息移动端流程", title: "标准业务流", caption: "将复杂业务拆为顺序明确的单步选择，减少线性链路中的返回和误操作。" },
    { img: "public/images/work/5g-chatbot/06-deliverables.webp", alt: "5G 消息交付与评审", title: "评审与 Demo", caption: "规范、流程和 Demo 进入团队评审，而不是停留在个人设计文件。" },
  ] });
  await twoEvidence(p, { n: 34, section: "08 / CASE 04 · 5G MESSAGE", title: "规范只有进入评审和培训流程才产生价值。", sub: "Miki 管理 2 名设计师，并面向 15 人产品部门组织 40+ 场用户体验培训。", items: [
    { img: "output/portfolio-full/assets/old-5g-training-55-crop.png", alt: "5G 项目培训材料", title: "培训与知识分享", caption: "培训覆盖用户研究、需求分析、交互、视觉、可用性测试和设计验收。" },
    { img: "output/portfolio-full/assets/old-5g-evidence-57-crop.png", alt: "5G 团队结构与人才培养", title: "团队能力建设", caption: "规范、评审和培训把个人经验转成团队可执行的工作标准。" },
  ] });
  await textImage(p, { n: 35, section: "08 / CASE 04 · 5G MESSAGE", title: "3 项行业奖项属于项目与团队成果。", sub: "Miki 主导核心体验、规范、评审和培训；奖项和 200+ 方案 / Demo 不表述为个人独立完成。", label: "Team outcome", accent: C.orange, lead: "相关 5G 消息项目获得 3 项行业奖项，其中包含绽放杯奖项。", bullets: ["主导 4 个核心项目的体验设计与视觉重构。", "40+ 场培训推动方法进入日常产品流程。", "200+ 方案与 Demo 属于团队共同产出。"], img: "output/portfolio-full/assets/old-5g-evidence-58-crop.png", alt: "5G 消息项目奖项与试点材料", caption: "公开材料证明项目获得行业认可；具体奖项等级存在资料冲突，因此正文不写等级。" });

  await caseIntro(p, { n: 36, section: "09 / CASE 05 · GPS", title: "GPS：1 个月内完成移动端定位与预警重构。", sub: "设计负责人 · 已上线 · 现场巡检 / 后台调度 / 管理层", accent: C.green, conclusion: "在定位延迟和大规模载体管理约束下，收窄默认视图，并通过按需精准请求、围栏、告警和轨迹回溯补齐关键任务。", meta: [["我的角色", "设计负责人 / 主设计师"], ["周期", "约 1 个月"], ["交付", "载体管理移动端"], ["状态", "已上线"]], img: "public/images/work/gps-2/00-card.webp", alt: "GPS 载体管理移动端", caption: "移动端界面服务定位、告警、辖区和历史轨迹，不是单纯地图视觉。", fit:"cover" });
  await twoEvidence(p, { n: 37, section: "09 / CASE 05 · GPS", title: "精准定位需要 12—15 秒，因此默认视图必须克制。", sub: "否决启动即加载全部载体，改为默认概览 + 按需触发精准定位，把等待成本留给真正需要排查的任务。", items: [
    { img: "public/images/work/gps-2/07-mobile-state-1.webp", alt: "GPS 默认运行概览", title: "默认概览", caption: "优先显示正在运行和异常载体，让用户先获得可操作的全局状态。" },
    { img: "public/images/work/gps-2/08-mobile-state-2.webp", alt: "GPS 围栏与精准定位", title: "按需精准请求", caption: "用户排查特定载体时再触发精准定位，避免全量加载造成长时间等待。" },
  ] });
  await threeScreens(p, { n: 38, section: "09 / CASE 05 · GPS", title: "围栏、告警和轨迹回溯覆盖运行与事故场景。", sub: "地图界面背后是状态、异常、辖区和追责链路。", items: [
    { img:"public/images/work/gps-2/15-mobile-state-5.webp", alt:"GPS 地图定位界面", title:"定位", caption:"项目 / 地区折叠与地图状态帮助调度理解辖区。" },
    { img:"public/images/work/gps-2/16-mobile-state-6.webp", alt:"GPS 告警筛选界面", title:"告警", caption:"按紧急程度和时间过滤消息，减少信息过载。" },
    { img:"public/images/work/gps-2/17-mobile-state-7.webp", alt:"GPS 历史轨迹界面", title:"轨迹", caption:"历史路径回放为事故复盘和责任追溯提供依据。" },
  ] });
  await textImage(p, { n: 39, section: "09 / CASE 05 · GPS", title: "产品上线，但行为改变需要时间。", sub: "上线初期，部分业务员仍习惯电话确认运载细节；工具可以减少信息不确定，却不能瞬间改写协作习惯。", label: "Reflection", accent: C.green, lead: "这个项目最重要的结果不是冲突的百分比，而是一次清楚的技术取舍。", bullets: ["12—15 秒定位延迟来自产品与开发协同测试。", "默认概览保证主任务流畅度。", "精准定位只在用户明确需要时发生。"], img: "public/images/work/gps-2/13-interface-overview-a.webp", alt: "GPS 上线移动端界面", caption: "界面展示移动端状态和告警；网站与旧版冲突的结果百分比未进入作品集。" });

  await caseIntro(p, { n: 40, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "工厂大屏：管理者需要的是异常决策台。", sub: "约 2 个月 · 设计负责人 · 两个大屏 UI / UX", accent: C.orange, conclusion: "将分散的产能、设备、质量和异常信息整理成管理者可以快速判断、下钻和追溯的两个大屏。", meta: [["使用者", "管理人员"], ["我的角色", "设计负责人"], ["交付", "两个数据大屏"], ["范围", "数据结构 / UI / UX"]], img: "public/images/work/factory-dashboard/07-final-screen.webp", alt: "智能工厂最终数据大屏", caption: "最终大屏证明工业数据可视化和视觉完成度；结果页不使用缺少口径的满意度数据。", fit:"cover" });
  await twoEvidence(p, { n: 41, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "数据先降噪，再按全局—趋势—异常分级。", sub: "用户不关心图表数量；他们需要看见产线瓶颈、趋势变化和故障来源。", items: [
    { img:"public/images/yuxunda/yuxunda-core-problem-analysis.png", alt:"工厂大屏核心问题分析", title:"问题与数据结构", caption:"把生产、设备、质量和异常信息连接到管理决策，而不是罗列指标。" },
    { img:"public/images/yuxunda/yuxunda-User-Info Needs.png", alt:"工厂管理用户信息需求", title:"用户信息需求", caption:"管理、生产、维护和质检对全局、趋势、告警和追溯的需求不同。" },
  ] });
  await twoEvidence(p, { n: 42, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "两个大屏完成 UI 与 UX 交付。", sub: "状态色、阈值和信息层级帮助管理者快速识别异常；没有原始样本支持的满意度与运营指标不展示。", items: [
    { img:"public/images/yuxunda/yuxunda-final-solution-01.png", alt:"智能工厂大屏一", title:"生产与设备视图", caption:"全局状态、趋势和设备健康度被组织在同一决策视野。" },
    { img:"public/images/yuxunda/yuxunda-final-solution-02.png", alt:"智能工厂大屏二", title:"质量与异常视图", caption:"异常通过状态色和阈值进入高优区域，并保留下钻与追溯入口。" },
  ] });

  await fullEvidence(p, { n: 43, section: "11 / AI-ASSISTED WORKFLOW", title: "AI 工作流从一句模糊需求开始。", sub: "“希望首页能看到所有设备和检测情况”不是设计任务；先要确认谁看、看什么、出现异常后做什么。", img:"public/images/work/ds-ai/01-evidence-01.webp", alt:"AI 辅助工作流决策简报", caption:"AI 帮助整理信息缺口；设计师把需求重写为业务问题、确认项和成功标准。" });
  await fullEvidence(p, { n: 44, section: "11 / AI-ASSISTED WORKFLOW", title: "AI 初稿需要人工补齐异常、权限和动作优先级。", sub: "原始草稿堆叠 KPI、只覆盖正常状态；人工精修把异常摘要、处理入口、离线状态和权限边界前置。", img:"public/images/work/ds-ai/04-ai-draft-vs-human.webp", alt:"AI 初稿与人工精修对比", caption:"左侧证明生成速度，右侧证明产品判断：异常优先级、状态、权限和动作入口由设计师负责。" });
  await textImage(p, { n: 45, section: "11 / AI-ASSISTED WORKFLOW", title: "上下文、风险清单和 QA 把问题提前到开发前。", sub: "本案例是基于既有工业 AI 场景抽象的方法演示，不代表原项目当时使用生成式 AI 交付。", label: "Human ownership", accent: C.orange, lead: "先把目标、状态、权限和术语写成约束，再让 AI 辅助生成与检查。", bullets: ["接口、数据、设备离线、算法置信度和权限风险在开发前检查。", "AI 辅助方案生成、规则对照和 QA。", "设计师负责问题定义、优先级、风险判断和验收。"], img:"public/images/work/ds-ai/05-qa-checklist.webp", alt:"Demo 与风险清单", caption:"观看重点：风险被整理为可检查的交付清单；AI 提高整理与检查速度，关键判断仍由设计师负责。" });
  archive(p);
  await contact(p);

  for (const [i, slide] of p.slides.items.entries()) {
    const png = await p.export({ slide, format: "png", scale: 1 });
    await fs.writeFile(path.join(PREVIEW, `page-${String(i + 1).padStart(2, "0")}.png`), new Uint8Array(await png.arrayBuffer()));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(PREVIEW, `page-${String(i + 1).padStart(2, "0")}.layout.json`), await layout.text());
  }
  const montage = await p.export({ format: "webp", montage: true, scale: 0.4 });
  await fs.writeFile(path.join(PREVIEW, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));
  const deck = await PresentationFile.exportPptx(p);
  await deck.save(OUT);
  console.log(`Generated ${OUT}`);
  console.log(`Slides ${p.slides.items.length}`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
