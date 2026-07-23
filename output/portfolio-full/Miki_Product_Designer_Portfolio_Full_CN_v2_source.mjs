import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = process.env.PORTFOLIO_ROOT || process.cwd();
const OUT = path.join(ROOT, "output/portfolio-full/Miki_Product_Designer_Portfolio_Full_CN_v2.pptx");
const PREVIEW = path.join(ROOT, "output/portfolio-full/v2-previews");
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
  text(slide, t, x, y, w, 48, { size: 16, color: dark ? "#CCD2CD" : C.muted, lineSpacing: 1.2 });
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
  await image(s, "public/images/work/pcba/03-new-system.webp", 700, 0, 580, 720, "PCBA 插件机控制系统界面", "cover");
  box(s, 0, 0, 760, 720, C.dark);
  box(s, 64, 70, 48, 5, C.green);
  text(s, "PORTFOLIO / 2026", 64, 96, 300, 24, { size: 14, bold: true, color: "#AAB1AB" });
  text(s, "杨蜜萁\nMiki Yang", 64, 160, 560, 148, { size: 62, bold: true, color: C.white, lineSpacing: 0.95 });
  text(s, "Product Designer / 高级产品设计师", 64, 334, 570, 42, { size: 25, bold: true, color: C.white });
  text(s, "复杂 B 端 · 工业软件 / HMI · 智能硬件 · AI 产品体验", 64, 392, 610, 46, { size: 19, color: "#CCD2CD" });
  rule(s, 64, 570, 560, "#454B46");
  text(s, "12 年产品与视觉设计经验", 64, 592, 300, 26, { size: 16, color: "#AAB1AB" });
  text(s, "miqi723@163.com  ·  mikistudio.com.cn", 64, 628, 440, 26, { size: 16, color: "#AAB1AB" });
  text(s, "01 / 47", 1124, 676, 92, 18, { size: 12, color: "#AAB1AB", align: "right" });
}

function positioning(pres) {
  const s = pres.slides.add(); base(s, 2, "01 / POSITIONING");
  title(s, "我处理的是复杂产品判断，不只是界面。", "从模糊需求、角色任务和技术约束出发，完成结构、流程、状态、权限、界面、验证与研发落地。");
  const items = [
    ["复杂系统", "把角色任务、权限边界和异常路径组织成清晰结构。", "工业 AI · PCBA · WMS"],
    ["工业 HMI", "在算法、设备、渲染和现场安全约束下做产品取舍。", "工业 AI · 智能硬件"],
    ["移动与视觉", "处理地图、原生短信、小屏操作、多端适配与电商视觉。", "GPS · 5G 消息 · Selected Experience"],
    ["设计工程化", "用规范、组件、QA 和 AI 辅助工具降低交付风险。", "WMS · AI 辅助设计工程实践"],
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
    ["复杂 B 端与流程", "信息架构 · 任务流 · 状态 · 异常 · 权限", "PCBA P06–13 · 工业 AI P14–21 · WMS P22–29", C.green],
    ["工业 HMI 与智能硬件", "设备状态 · 算法边界 · 高风险操作 · 安全接管", "PCBA P06–13 · 工业 AI P14–21", C.orange],
    ["移动端与多端体验", "地图定位 · RF 扫码 · 原生短信 · 跨设备适配", "5G P30–33 · GPS P34–37 · WMS P22–29", C.green],
    ["Design System 与交付", "组件 · 规则 · QA · 设计到代码 · AI 输出审查", "WMS P28–29 · 5G P31–33 · AI 实践 P41–45", C.orange],
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
    ["01", "PCBA 插件机控制", "真实产线中的流程重构、测试、上线与结果", "P06–13", "public/images/work/pcba/03-new-system.webp"],
    ["02", "工业 AI 视觉质检", "算法结果如何被现场理解、复核和安全接管", "P14–21", "public/images/work/industrial-ai-detection/09-statistics.webp"],
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
    ["5G 消息体验规范", "ToC 服务交互 · 适配 · 培训", "P30–33"],
    ["GPS 轨迹定位", "地图 · 告警 · 技术取舍", "P34–37"],
    ["智能工厂数据大屏", "数据可视化 · 异常发现", "P38–40"],
    ["AI 辅助设计工程实践", "设计到代码 · 规则 · QA", "P41–45"],
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

function takeover(pres, n = 20, section = "06 / CASE 02 · INDUSTRIAL AI") {
  const s = pres.slides.add(); base(s, n, section);
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

async function pcbaTest(pres) {
  const s = pres.slides.add(); base(s, 12, "05 / CASE 01 · PCBA");
  title(s, "12 位一线使用者验证：横版更快读懂，也更少误操作。", "方案对比可用性测试｜参与者为操作员与组长；比较竖版信息分散与横版信息集中两种方案。");
  await image(s, "public/images/work/pcba/10-io-settings.webp", 64, 226, 720, 406, "PCBA 方案对比可用性测试证据", "contain");
  box(s, 64, 226, 720, 68, C.bg);
  text(s, "方案 A｜竖版", 84, 248, 210, 28, { size: 19, bold: true, color: C.orange });
  text(s, "方案 B｜横版", 360, 248, 220, 28, { size: 19, bold: true, color: C.green });
  text(s, "测试任务", 824, 226, 160, 24, { size: 14, bold: true, color: C.orange });
  ["读取关键生产信息", "判断设备状态与异常", "完成高频操作路径", "识别高风险操作"].forEach((t, i) => bullet(s, t, 824, 258 + i * 44, 360, C.ink, C.orange));
  rule(s, 824, 438, 360);
  const ms = [["92%", "横版方案偏好"], ["+34%", "信息读取效率"], ["+27%", "操作准确率"], ["+41%", "主观满意度"]];
  ms.forEach((m, i) => {
    const x = 824 + (i % 2) * 184;
    const y = 466 + Math.floor(i / 2) * 82;
    text(s, m[0], x, y, 160, 34, { size: 27, bold: true, color: i < 2 ? C.green : C.orange });
    text(s, m[1], x, y + 38, 160, 24, { size: 14, bold: true });
  });
  text(s, "观看重点｜偏好只是一个结果；读取效率、准确率与满意度共同支持横版方案。", 824, 630, 360, 36, { size: 14, color: C.muted });
}

function pcbaResults(pres) {
  const s = pres.slides.add(); base(s, 13, "05 / CASE 01 · PCBA");
  title(s, "系统已上线；真实验证与项目预估结果分层表达。", "不把订单、设备、运营和界面设计混成单一归因。");
  label(s, "真实验证规模", 64, 214, C.green);
  const real = [["90+", "真实产线订单"], ["80+", "一线操作记录与反馈"], ["已上线", "系统功能"]];
  real.forEach((m, i) => {
    const x = 64 + i * 374;
    box(s, x, 246, 346, 116, i === 2 ? C.dark : C.panel, 8);
    text(s, m[0], x + 20, 266, 306, 42, { size: 31, bold: true, color: i === 2 ? C.green : C.ink });
    text(s, m[1], x + 20, 316, 306, 24, { size: 15, bold: true, color: i === 2 ? C.white : C.muted });
  });
  label(s, "项目整体预估结果", 64, 402, C.orange);
  const est = [["+28%", "管理效率"], ["+17%", "插件效率"], ["−10%", "人工介入率"], ["−17%", "工程导入耗时"]];
  est.forEach((m, i) => {
    const x = 64 + i * 288;
    text(s, m[0], x, 442, 250, 42, { size: 31, bold: true, color: C.orange });
    text(s, m[1], x, 490, 250, 26, { size: 15, bold: true });
  });
  callout(s, "Miki 主导流程、界面、状态、权限、方案对比可用性测试与交付规范；上线和效率属于项目整体。", 64, 544, 760, 82, C.green, false);
  text(s, "数据基于方案前后对比、可用性测试及项目阶段复盘，为项目整体预估结果，不单独归因于界面设计。", 850, 552, 366, 68, { size: 14, color: C.muted, lineSpacing: 1.3 });
}

function roleMatrix(pres) {
  const s = pres.slides.add(); base(s, 19, "06 / CASE 02 · INDUSTRIAL AI");
  title(s, "四类角色按任务与权限进入系统，而不是共享同一套界面。", "信息来源：基于 107 页工程资料，以及与产品、算法、开发和客户团队的需求梳理。");
  const xs = [64, 212, 594, 904];
  const ws = [132, 366, 294, 312];
  ["角色", "核心任务", "可进入模块", "受限动作"].forEach((h, i) => {
    box(s, xs[i], 216, ws[i], 44, C.dark, 0);
    text(s, h, xs[i] + 12, 228, ws[i] - 24, 22, { size: 14, bold: true, color: C.white });
  });
  const rows = [
    ["操作员", "监控设备状态与预警，处理当前任务", "监控、预警、任务", "不调整检测参数与系统设置"],
    ["工程师", "调整检测参数、阈值与检测条件", "参数、模型、检测规则", "不承担用户与系统管理"],
    ["维护人员", "处理设备故障、通讯异常和急停恢复", "设备、通讯、维护", "不修改检测结果"],
    ["质检人员", "查看、复核并追溯检测结果", "结果、日志、统计", "不修改设备与算法配置"],
  ];
  rows.forEach((r, ri) => {
    const y = 260 + ri * 84;
    r.forEach((v, ci) => {
      box(s, xs[ci], y, ws[ci], 76, ri % 2 ? C.bg : C.panel, 0, C.line);
      text(s, v, xs[ci] + 12, y + 14, ws[ci] - 24, 50, { size: ci === 0 ? 17 : 15, bold: ci === 0, color: ci === 0 ? (ri % 2 ? C.orange : C.green) : C.ink, lineSpacing: 1.22, valign: "middle" });
    });
  });
  callout(s, "权限矩阵把角色任务转成可实现、可测试的模块边界；高风险动作继续由确认、日志和物理安全机制约束。", 64, 612, 1152, 50, C.orange, false);
}

function wmsReuseMap(pres) {
  const s = pres.slides.add(); base(s, 28, "07 / CASE 03 · WMS");
  title(s, "复用资产按模块—场景—客户需求重新组合。", "沉淀的不是固定页面数量，而是 Web 模板、RF 流程与组件规则之间的映射关系。");
  const xs = [64, 352, 692, 1006];
  const ws = [272, 324, 298, 210];
  ["复用模块", "适用场景", "客户差异如何进入", "交付价值"].forEach((h, i) => {
    box(s, xs[i], 218, ws[i], 44, C.dark);
    text(s, h, xs[i] + 12, 230, ws[i] - 24, 22, { size: 14, bold: true, color: C.white });
  });
  const rows = [
    ["Web 列表 / 表单 / 弹窗", "配置、查询、异常处理", "字段、筛选和权限按客户组合", "减少页面重画"],
    ["RF 任务导航 / 扫码 / 反馈", "收货、核对、提交、异常", "按 4 种作业模式重组步骤", "保持现场节奏"],
    ["状态 / 权限 / 交互规则", "危险操作、结果反馈、数据边界", "菜单、用户、仓库三级配置", "降低沟通与测试风险"],
  ];
  rows.forEach((r, ri) => {
    const y = 262 + ri * 96;
    r.forEach((v, ci) => {
      box(s, xs[ci], y, ws[ci], 88, ri % 2 ? C.bg : C.panel, 0, C.line);
      text(s, v, xs[ci] + 12, y + 18, ws[ci] - 24, 58, { size: ci === 0 ? 17 : 15, bold: ci === 0, color: ci === 0 ? C.green : C.ink, lineSpacing: 1.22, valign: "middle" });
    });
  });
  callout(s, "基于模块复用与项目复盘，预计减少约 40% 的重复设计与开发工作。该数字不是长期工时统计。", 64, 574, 1152, 74, C.orange, false);
}

async function wmsTemplateDetails(pres) {
  const s = pres.slides.add(); base(s, 24, "07 / CASE 03 · WMS");
  title(s, "Web 模板复用页面骨架，字段、列表和权限按场景组合。", "保留模板全貌，同时放大高频结构，避免用缩略图证明工作量。");
  await image(s, "public/images/work/wms/04-rf-view.webp", 64, 214, 470, 268, "WMS Web 模板全貌", "contain");
  text(s, "模板全貌", 64, 494, 180, 26, { size: 18, bold: true });
  caption(s, "多个客户页面共享导航、表单和列表骨架。", 64, 526, 470);

  const details = [
    ["output/portfolio-full/assets/wms-p24-fields.png", "字段", "字段分组、输入类型和状态规则复用。"],
    ["output/portfolio-full/assets/wms-p24-list-permission.png", "列表 / 权限", "列结构、开关与操作入口按权限显示。"],
    ["output/portfolio-full/assets/wms-p24-popup.png", "弹窗", "复杂选择按需展开，不挤压主任务。"],
  ];
  for (let i = 0; i < details.length; i++) {
    const x = i < 2 ? 560 + i * 330 : 560;
    const y = i < 2 ? 214 : 432;
    const w = 306;
    const h = 168;
    await image(s, details[i][0], x, y, w, h, `WMS ${details[i][1]}局部放大`, "cover");
    box(s, x + 10, y + 10, i < 2 ? 112 : 88, 30, C.dark, 5);
    text(s, details[i][1], x + 20, y + 16, i < 2 ? 94 : 72, 18, { size: 13, bold: true, color: C.white });
    text(s, details[i][2], x, y + h + 8, w, 34, { size: 14, color: C.muted });
  }
  callout(s, "复用顺序：先复用导航与页面骨架，再按客户场景组合字段、列表、权限和弹窗。", 890, 432, 306, 168, C.green, false);
}

async function fiveGSpecs(pres) {
  const s = pres.slides.add(); base(s, 31, "08 / CASE 04 · 5G MESSAGE");
  title(s, "7 类规范用安全区和组件规则守住跨终端一致性。", "不追求单台设备上的完美视觉，而是先定义安卓终端都能稳定呈现的边界。");
  label(s, "7 类可复用规则", 64, 214, C.orange);
  const items = ["颜色与对比", "图片与裁切", "卡片消息", "位置与地图", "文件消息", "音频 / 视频", "输入控件"];
  items.forEach((v, i) => {
    const x = 64 + (i % 2) * 164;
    const y = 248 + Math.floor(i / 2) * 70;
    box(s, x, y, 150, 54, i === 6 ? C.dark : C.panel, 6);
    text(s, String(i + 1).padStart(2, "0"), x + 14, y + 16, 34, 24, { size: 14, bold: true, color: i === 6 ? C.orange : C.green });
    text(s, v, x + 48, y + 15, 92, 26, { size: 15, bold: true, color: i === 6 ? C.white : C.ink });
  });
  callout(s, "安全区、按钮、内容裁切与终端适配成为设计和交付共同遵守的规则。", 64, 548, 314, 92, C.orange, false);
  await image(s, "public/images/work/5g-chatbot/04-design-spec.webp", 400, 210, 816, 424, "5G 消息设计规范证据", "contain");
  caption(s, "原始规范板展示组件、内容类型与适配边界。", 400, 638, 816);
}

async function chatbotFlow(pres) {
  const s = pres.slides.add(); base(s, 32, "08 / CASE 04 · 5G MESSAGE");
  title(s, "Chatbot 流程每一步只保留当前服务决策。", "信息卡片建立入口，悬浮菜单引导操作，预约状态与结果反馈持续可见。");
  await image(s, "output/portfolio-full/assets/old-5g-flow-54-nodes-crop.png", 64, 208, 1152, 402, "5G 消息 Chatbot 关键流程节点", "contain");
  text(s, "观看重点｜入口识别 → 服务选择 → 预约确认 → 结果反馈", 64, 620, 1152, 28, { size: 16, bold: true, color: C.orange, align: "center" });
}

async function fiveGOutcome(pres) {
  const s = pres.slides.add(); base(s, 33, "08 / CASE 04 · 5G MESSAGE");
  title(s, "规范通过 15 人团队、持续培训和 200+ 方案进入规模化交付。", "一年内持续开展周度分享、月度培训及交互评审，累计 40+ 场团队能力建设活动。");
  await image(s, "output/portfolio-full/assets/old-5g-evidence-57-crop.png", 64, 222, 408, 182, "5G 消息团队结构与能力建设", "contain");
  text(s, "15 人团队与能力建设", 64, 416, 408, 26, { size: 18, bold: true });
  caption(s, "Miki 管理 2 名设计师，并推动规范、评审与培训进入部门协作。", 64, 448, 408);
  const metrics = [["15 人", "产品部门"], ["40+", "能力建设活动"], ["200+", "方案与 Demo"]];
  metrics.forEach((m, i) => {
    const x = 64 + i * 136;
    text(s, m[0], x, 530, 124, 34, { size: 25, bold: true, color: i === 1 ? C.orange : C.green });
    text(s, m[1], x, 568, 124, 38, { size: 13, bold: true, color: C.muted });
  });
  await image(s, "output/portfolio-full/assets/old-5g-evidence-58-proof-crop.png", 508, 208, 708, 396, "5G 消息奖项与国家试点公开证据", "contain");
  text(s, "团队成果与公开证据", 508, 610, 708, 24, { size: 18, bold: true });
  caption(s, "行业奖项和国家试点属于团队与项目整体成果。", 508, 638, 708);
}

async function largePairEvidence(pres, cfg) {
  const s = pres.slides.add(); base(s, cfg.n, cfg.section);
  title(s, cfg.title, cfg.sub);
  for (let i = 0; i < 2; i++) {
    const x = 64 + i * 588;
    await image(s, cfg.items[i].img, x, 206, 540, 382, cfg.items[i].alt, cfg.items[i].fit || "cover");
    text(s, cfg.items[i].title, x, 598, 540, 26, { size: 18, bold: true, color: i === 0 ? C.green : C.orange });
    text(s, cfg.items[i].caption, x, 628, 540, 34, { size: 14, color: C.muted, lineSpacing: 1.15 });
  }
}

function aiRules(pres) {
  const s = pres.slides.add(); base(s, 43, "11 / AI-ASSISTED DESIGN ENGINEERING");
  title(s, "AI 生成页面之后，设计师重新定义三类规则。", "首版能运行，但结构、响应式和组件节奏仍需要人工判断。");
  const cards = [
    ["结构", "问题", "首版更像线性 PPT，案例、方法和转化路径缺少网站浏览节奏。", "判断", "按问题—案例—验证—信任重新组织首页。"],
    ["响应式", "问题", "大字号、横向内容和固定宽度在小屏存在溢出与阅读断裂。", "判断", "定义断点、容器、字号、换行与内容降级规则。"],
    ["组件", "问题", "卡片、间距、状态和交互反馈缺少统一约束。", "判断", "将重复界面整理为组件、状态和 QA 检查项。"],
  ];
  cards.forEach((c, i) => {
    const x = 64 + i * 384;
    box(s, x, 222, 352, 364, i === 1 ? C.dark : C.panel, 10);
    text(s, `0${i + 1}`, x + 22, 242, 52, 34, { size: 25, bold: true, color: i === 1 ? C.orange : C.green });
    text(s, c[0], x + 82, 240, 220, 34, { size: 24, bold: true, color: i === 1 ? C.white : C.ink });
    text(s, c[1], x + 22, 308, 80, 24, { size: 13, bold: true, color: i === 1 ? "#AEB5AF" : C.muted });
    text(s, c[2], x + 22, 342, 308, 90, { size: 17, color: i === 1 ? "#D3D8D4" : C.ink, lineSpacing: 1.28 });
    text(s, c[3], x + 22, 456, 80, 24, { size: 13, bold: true, color: i === 1 ? C.orange : C.green });
    text(s, c[4], x + 22, 490, 308, 70, { size: 17, bold: true, color: i === 1 ? C.white : C.ink, lineSpacing: 1.28 });
  });
}

async function aiQa(pres) {
  const s = pres.slides.add(); base(s, 44, "11 / AI-ASSISTED DESIGN ENGINEERING");
  title(s, "QA 清单把 AI 输出审查变成交付步骤。", "AI 负责加速实现与修改；Miki 负责定义标准、识别问题、取舍优先级和最终验收。");
  const groups = [
    ["版式", ["1440 / 1536 / 1600 桌面宽度", "移动端横向溢出", "标题换行与最小字号"]],
    ["组件", ["间距和容器规则", "卡片状态与反馈", "重复样式统一"]],
    ["交付", ["目标页面返回 200", "静态资源无 404", "生产构建通过"]],
  ];
  groups.forEach((g, i) => {
    const x = 64 + i * 270;
    box(s, x, 234, 246, 318, i === 2 ? C.dark : C.panel, 8);
    text(s, g[0], x + 18, 254, 200, 28, { size: 21, bold: true, color: i === 2 ? C.white : C.ink });
    g[1].forEach((v, j) => bullet(s, v, x + 18, 308 + j * 66, 210, i === 2 ? "#D3D8D4" : C.ink, i === 1 ? C.orange : C.green));
  });
  await image(s, "output/portfolio-full/assets/portfolio-current-desktop.png", 900, 234, 316, 318, "最终个人作品集网站", "cover");
  caption(s, "最终网站通过结构、响应式、组件与交付检查。", 900, 568, 316);
  callout(s, "设计到代码并不是接受首版输出，而是把审查结果转成可重复的布局、组件和 QA 规则。", 64, 596, 788, 62, C.orange, false);
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
    ["求职方向", "高级产品设计师 / 高级 UI/UX"],
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

async function buildV2() {
  await fs.rm(PREVIEW, { recursive: true, force: true });
  await fs.mkdir(PREVIEW, { recursive: true });
  const p = Presentation.create({ slideSize: { width: W, height: H } });

  await cover(p);
  positioning(p);
  timeline(p);
  capabilities(p);
  await workIndex(p);

  await caseIntro(p, { n: 6, section: "05 / CASE 01 · PCBA", title: "PCBA：真实产线中的重构、测试与上线。", sub: "核心设计约 2—3 个月 · 设计负责人 · 系统已上线", accent: C.orange, conclusion: "保留现场已经形成的底层操作逻辑，重构物料、任务、预警和高风险操作；方案经过 12 位一线使用者对比测试，并进入真实产线。", meta: [["使用者", "操作员 / 组长 / 工程师"], ["我的角色", "设计负责人"], ["验证", "方案对比可用性测试"], ["上线", "90+ 订单 / 80+ 记录与反馈"]], img: "public/images/work/pcba/03-new-system.webp", alt: "PCBA 上线控制系统主界面", caption: "第一眼看主界面：产线进度、设备状态、订单与操作入口进入同一判断视野。", note: "项目整体周期资料存在不同口径，因此正文仅写核心设计周期。" });
  await textImage(p, { n: 7, section: "05 / CASE 01 · PCBA", title: "不能推翻旧系统：一线习惯、研发排期和生产风险共同限定方案。", sub: "设计自由度来自对约束的理解，而不是任意改变现场逻辑。", label: "现实约束", accent: C.orange, lead: "进口控制系统长期闲置，但一线人员已对既有底层操作形成肌肉记忆。", bullets: ["全部替换会增加培训与误操作风险。", "复杂交互与研发排期强耦合。", "系统直连产线，高风险动作必须校验和兜底。"], img: "public/images/pcb2026/104-pcb-old.png", alt: "PCBA 旧控制系统界面", caption: "旧界面证明存量结构和路径依赖；最终方案只重构高频生产任务。" });
  await textImage(p, { n: 8, section: "05 / CASE 01 · PCBA", title: "保留底层控制逻辑，只重构任务之间的连接方式。", sub: "现场任务连续发生，旧系统却把物料、孔位、在制状态和异常确认拆散。", label: "流程判断", accent: C.orange, lead: "用户旅程把动作、等待、误判和风险连接到后续方案。", bullets: ["跨页面确认合并为连续任务路径。", "人工巡检信号转为分层数字预警。", "高风险动作进入权限、确认和审计。"], img: "public/images/pcb2026/journey map.png", alt: "PCBA 用户旅程与问题地图", caption: "旅程图证明流程问题如何对应任务重组、预警和权限方案。" });
  await fullEvidence(p, { n: 9, section: "05 / CASE 01 · PCBA", title: "集中监控让管理者先看到进度、状态和异常。", sub: "过去需要翻日志和询问现场；现在从统一入口判断产线运行与处理优先级。", img: "public/images/work/pcba/21-system-overview.webp", alt: "PCBA 集中监控与系统概览", caption: "产线进度、机台状态、订单和操作控制被收敛到一个管理视野。" });
  await textImage(p, { n: 10, section: "05 / CASE 01 · PCBA", title: "物料选择与孔位确认合并为连续操作。", sub: "减少跨界面确认，同时保留操作员熟悉的底层作业逻辑。", label: "任务重构", accent: C.orange, lead: "物料、孔位和在制状态不再分散在机台端与后台系统。", bullets: ["同一任务路径完成选择、确认和状态查看。", "异常物料直接进入当前任务上下文。", "工程资料沉淀为可复用配置资产。"], img: "public/images/work/pcba/05-material-module.webp", alt: "PCBA 物料与在制状态模块", caption: "物料信息、在制状态、异常提示和操作入口共享同一上下文。" });
  await twoEvidence(p, { n: 11, section: "05 / CASE 01 · PCBA", title: "异常先进入数字预警，高风险动作再进入权限校验。", sub: "不再只依赖红黄灯与人工巡检；越权写入必须被拦截并留下记录。", items: [
    { img: "public/images/work/pcba/04-warning-dashboard.webp", alt: "PCBA 数字预警界面", title: "分层数字预警", caption: "异常类型、设备状态和优先级同时可见，帮助现场先处理高风险问题。" },
    { img: "public/images/work/pcba/16-login-role.webp", alt: "PCBA 角色与登录界面", title: "角色与权限", caption: "不同角色进入不同操作范围；高风险动作增加权限校验和审计记录。" },
  ] });
  await pcbaTest(p);
  pcbaResults(p);

  await caseIntro(p, { n: 14, section: "06 / CASE 02 · INDUSTRIAL AI", title: "工业 AI：让算法结果可理解、可复核、可接管。", sub: "铝材挤压视觉检测设备 · 约 2 个月 · 已上线并验收", accent: C.green, conclusion: "面向操作员、工程师、维护和质检四类角色，重组检测、设备、权限和异常处理，让算法输出成为现场可执行的信息。", meta: [["我的角色", "设计负责人"], ["复杂度", "16 路相机 / 11 类缺陷"], ["范围", "结构 / UI/UX / 状态 / 权限"], ["结果", "11 个核心模块上线验收"]], img: "public/images/work/industrial-ai-detection/00-card.webp", alt: "工业 AI 视觉质检系统项目界面", caption: "开场先说明设备与 HMI 场景；后续页面用真实界面和权限矩阵证明判断。", fit: "cover", note: "角色信息基于 107 页工程资料，以及与产品、算法、开发和客户团队的需求梳理。" });
  await textImage(p, { n: 15, section: "06 / CASE 02 · INDUSTRIAL AI", title: "16 路相机、11 类缺陷和四类角色必须共享一个判断视野。", sub: "系统同时承载 2D / 3D 检测、设备状态、参数配置和结果追溯。", label: "系统复杂度", accent: C.green, lead: "界面不能按功能简单堆砌，必须先决定谁在何时看什么、能做什么。", bullets: ["操作员：监控与预警处理。", "工程师：参数、阈值与检测条件。", "维护 / 质检：设备恢复、复核与追溯。"], img: "public/images/work/industrial-ai-detection/09-statistics.webp", alt: "工业 AI 主监控界面", caption: "实时画面、缺陷结果、设备状态和统计信息进入同一主监控界面。" });
  problemCards(p, { n: 16, section: "06 / CASE 02 · INDUSTRIAL AI", title: "四个现场矛盾决定了界面、权限和安全方案。", sub: "每个问题都在后续页面找到对应证据。", cards: [
    { title: "高密度信息", body: "多路画面、缺陷和设备状态高频输出；直接平铺会推高判断成本。", accent: C.green },
    { title: "算法判定边界", body: "算法输出不能直接等于最终业务判定，需要条件、结果与追溯信息。", accent: C.orange },
    { title: "四类角色", body: "操作员、工程师、维护和质检看到的信息与能执行的动作不同。", accent: C.green },
    { title: "异常与安全", body: "数据擦除、系统重置和急停相关动作几乎没有现场容错空间。", accent: C.orange },
  ] });
  await fullEvidence(p, { n: 17, section: "06 / CASE 02 · INDUSTRIAL AI", title: "操作员先知道哪台设备异常，再查看对应画面。", sub: "否决独立平铺 16 路画面：渲染成本高，也不符合对物理点位的判断习惯。", img: "public/images/work/industrial-ai-detection/09-statistics.webp", alt: "按产线方位组织的工业 AI 主监控界面", caption: "相机按实际方位分组；关键状态、缺陷结果和设备信息位于同一判断视野。" });
  await twoEvidence(p, { n: 18, section: "06 / CASE 02 · INDUSTRIAL AI", title: "算法负责识别，系统负责解释条件并保留追溯。", sub: "设计不修改算法模型；设计让检测条件、结果和执行记录对现场人员可见。", items: [
    { img: "public/images/work/industrial-ai-detection/13-control-settings.webp", alt: "工业 AI 检测条件与阈值界面", title: "检测条件与阈值", caption: "模型、参数、检测条件和执行结果可见，避免黑箱式判断。" },
    { img: "public/images/work/industrial-ai-detection/11-log-management.webp", alt: "工业 AI 日志管理界面", title: "日志与追溯", caption: "按时间、对象和结果保留记录，为异常排查和责任追溯提供依据。" },
  ] });
  roleMatrix(p);
  takeover(p, 20, "06 / CASE 02 · INDUSTRIAL AI");
  resultsSlide(p, { n: 21, section: "06 / CASE 02 · INDUSTRIAL AI", title: "11 个核心模块上线验收，未完整落地方案不计入成果。", sub: "项目差异化来自工业 HMI、算法边界、四类角色和安全接管的整体判断。", metrics: [
    { value: "11", label: "核心模块", note: "上线并验收", accent: C.green },
    { value: "16", label: "工业相机", note: "统一进入 HMI", accent: C.green },
    { value: "11", label: "缺陷类型", note: "检测结果可追溯", accent: C.orange },
    { value: "4", label: "现场角色", note: "任务与权限分离", accent: C.orange },
  ], body: "Miki 主导功能梳理、信息架构、UI/UX、状态与权限规则，并协同产品、算法、开发、硬件和客户团队落地。", callout: "在线调参已上线；人工复判 / 接管设计未完整落地；物理急停属于设备安全机制。", accent: C.orange, note: "不将未完整落地的人工复判路径写入项目交付结果。" });

  await caseIntro(p, { n: 22, section: "07 / CASE 03 · WMS", title: "WMS：Web 负责配置查询，RF 负责现场任务。", sub: "两位设计师参与 · Miki 主导 RF、参与部分 Web · 双端已上线", accent: C.green, conclusion: "将多客户、多仓库流程拆成 Web 高密度管理与 RF 小屏作业，并把模板、流程和组件规则沉淀为可复用资产。", meta: [["我的角色", "RF 主导 / 部分 Web 参与"], ["团队", "两位设计师"], ["范围", "双端流程 / 权限 / 规范"], ["状态", "Web + RF 已上线"]], img: "public/images/work/wms/00-cover.png", alt: "WMS Web 与 RF 双端界面", caption: "双端不是同一界面的缩放版本；后续页面分别证明任务重组与复用逻辑。", fit: "contain" });
  await twoEvidence(p, { n: 23, section: "07 / CASE 03 · WMS", title: "Web 与 RF 的信息密度由任务决定。", sub: "Web 承载配置、查询和高密度表格；RF 只保留扫码、核对、异常和提交。", items: [
    { img: "public/images/cyg-wms/p2_03_web_view.png", alt: "WMS Web 管理端", title: "Web 管理端", caption: "全局查询、字段配置、表格和多仓库信息需要较高密度。" },
    { img: "public/images/cyg-wms/p2_04_rf_main.png", alt: "WMS RF 现场端", title: "RF 现场端", caption: "只暴露当前动作所需字段和扫码入口，减少单手操作负担。" },
  ] });
  await wmsTemplateDetails(p);
  await textImage(p, { n: 25, section: "07 / CASE 03 · WMS", title: "RF 只显示当前动作所需的信息。", sub: "照搬 Web 会让手持机过载，增加现场核对、扫码与误触成本。", label: "RF 任务模型", accent: C.green, lead: "RF 的信息架构围绕当前任务，而不是后台模块。", bullets: ["待办入口减少多层级查找。", "扫码后只显示核对与提交字段。", "异常和修改按需展开。"], img: "public/images/cyg-wms/p2_04_rf_main.png", alt: "WMS RF 当前任务界面", caption: "任务对象、数量、异常状态和下一步动作被放在手持机首要位置。" });
  await fullEvidence(p, { n: 26, section: "07 / CASE 03 · WMS", title: "四种 RF 作业模式共享组件，但保留不同流程节奏。", sub: "待办、标准、按箱和按单模式使用统一组件外壳，再按业务复杂度组合字段与步骤。", img: "public/images/work/wms/05-template-all.webp", alt: "WMS 四种 RF 作业模式", caption: "复用导航、字段和反馈组件；不同模式按任务深度保留不同确认步骤。" });
  await twoEvidence(p, { n: 27, section: "07 / CASE 03 · WMS", title: "操作阻力必须匹配库存风险。", sub: "轻流程快确认；删除、修改等危险动作增加防误触、二次确认和结果反馈。", items: [
    { img: "public/images/cyg-wms/p2_04_mode_lite.png", alt: "WMS RF 收货核对", title: "任务核对", caption: "低风险操作减少停顿，需要修改时再展开明细与数量确认。" },
    { img: "public/images/cyg-wms/p2_06_feedback_1.1.png", alt: "WMS 危险操作反馈", title: "危险操作反馈", caption: "滑动防误触、二次确认和结果反馈共同降低库存数据风险。" },
  ] });
  wmsReuseMap(p);
  resultsSlide(p, { n: 29, section: "07 / CASE 03 · WMS", title: "双端交付规模与复用价值分开表达。", sub: "工作量数字证明交付范围；约 40% 是项目复盘后的预估，不是长期工时统计。", metrics: [
    { value: "28", label: "Web 管理端页面", note: "当前交付记录", accent: C.green },
    { value: "48+", label: "弹窗与组件", note: "当前交付记录", accent: C.green },
    { value: "4", label: "RF 作业模式", note: "已落地", accent: C.orange },
    { value: "约 40%", label: "重复工作减少", note: "项目复盘预估", accent: C.orange },
  ], body: "Miki 主导 RF 端任务、模式、反馈和权限，参与部分 Web 模板；另一位设计师共同完成双端交付。", callout: "Web 模板、RF 流程与组件规则被沉淀为可复用资产。", accent: C.green, note: "基于模块复用与项目复盘，预计减少约 40% 的重复设计与开发工作。" });

  await caseIntro(p, { n: 30, section: "08 / CASE 04 · 5G MESSAGE", title: "5G 消息：在原生短信与安卓限制下建立移动服务体验。", sub: "用户体验经理 · 15 人产品部门 · 补充案例", accent: C.orange, conclusion: "在无法像 App 一样自由使用控件、且安卓终端渲染差异明显的条件下，建立可复用规范，并推动评审、培训和规模化交付。", meta: [["我的角色", "用户体验经理"], ["产品形态", "原生短信 Chatbot"], ["核心约束", "安卓终端差异 / 线性流程"], ["项目定位", "ToC 服务交互 + 规范"]], img: "public/images/work/5g-chatbot/00-card.webp", alt: "5G 消息移动端服务场景", caption: "此项目证明移动端 ToC 服务交互与规范体系，不包装为增长型案例。", fit: "cover" });
  await fiveGSpecs(p);
  await chatbotFlow(p);
  await fiveGOutcome(p);

  await caseIntro(p, { n: 34, section: "09 / CASE 05 · GPS", title: "GPS：定位要等 12—15 秒，所以先给概览。", sub: "设计负责人 · 约 1 个月 · 已上线 · 补充案例", accent: C.green, conclusion: "否决启动即加载全部载体，改为默认概览 + 按需精准定位，并用围栏、告警和轨迹回溯覆盖运行与事故场景。", meta: [["使用者", "巡检 / 调度 / 管理"], ["我的角色", "设计负责人"], ["关键约束", "精准定位 12—15 秒"], ["状态", "移动端已上线"]], img: "public/images/work/gps-2/15-mobile-state-5.webp", alt: "GPS 真实地图定位界面", caption: "开场直接使用真实地图界面，证明定位、辖区与状态信息。", fit: "contain" });
  await twoEvidence(p, { n: 35, section: "09 / CASE 05 · GPS", title: "默认概览保证主任务流畅，精准定位只在需要时发生。", sub: "把等待成本留给明确的排查任务，而不是让所有用户在启动时承担。", items: [
    { img: "public/images/work/gps-2/07-mobile-state-1.webp", alt: "GPS 默认概览", title: "默认概览", caption: "优先显示运行与异常载体，让用户先获得可操作的全局状态。" },
    { img: "public/images/work/gps-2/08-mobile-state-2.webp", alt: "GPS 按需精准定位", title: "按需精准定位", caption: "排查特定载体时再发起请求，避免全量加载造成长等待。" },
  ] });
  await threeScreens(p, { n: 36, section: "09 / CASE 05 · GPS", title: "定位、告警与轨迹回溯覆盖运行和事故场景。", sub: "地图界面背后是状态、异常、辖区和责任追溯链路。", items: [
    { img: "public/images/work/gps-2/15-mobile-state-5.webp", alt: "GPS 地图定位", title: "定位", caption: "地区折叠与地图状态帮助调度理解辖区。" },
    { img: "public/images/work/gps-2/16-mobile-state-6.webp", alt: "GPS 告警筛选", title: "告警", caption: "按紧急程度和时间过滤消息，减少过载。" },
    { img: "public/images/work/gps-2/17-mobile-state-7.webp", alt: "GPS 历史轨迹", title: "轨迹", caption: "历史路径回放支持事故复盘与追溯。" },
  ] });
  await textImage(p, { n: 37, section: "09 / CASE 05 · GPS", title: "产品已上线，但工具不会瞬间改写协作习惯。", sub: "上线初期，部分业务员仍使用电话确认运载细节；界面能降低信息不确定，行为迁移仍需要时间。", label: "项目收尾", accent: C.green, lead: "这个案例最有价值的证据，是对定位延迟的明确取舍。", bullets: ["12—15 秒延迟来自产品与开发协同测试。", "默认概览保证主任务流畅度。", "精准定位按需触发。"], img: "public/images/work/gps-2/10-mobile-state-4.webp", alt: "GPS 上线移动端真实界面", caption: "真实地图、状态和操作入口共同证明移动端产品落地。" });

  await caseIntro(p, { n: 38, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "工厂大屏：把分散指标组织成异常发现入口。", sub: "设计负责人 · 约 2 个月 · 数据可视化补充案例", accent: C.orange, conclusion: "完成两块管理大屏的 UI/UX 设计与交付，覆盖生产、设备、质量与异常，帮助管理人员集中查看状态并快速发现问题。", meta: [["使用者", "管理人员"], ["我的角色", "设计负责人"], ["交付", "2 块管理大屏"], ["范围", "数据结构 / UI / UX"]], img: "public/images/work/factory-dashboard/07-final-screen.webp", alt: "智能工厂最终数据大屏", caption: "大屏证明工业数据可视化和视觉完成度，不使用缺少样本支持的精确百分比。", fit: "cover" });
  await largePairEvidence(p, { n: 39, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "先按全局—趋势—异常分级，再选择图表。", sub: "管理者需要看见产线状态、趋势变化和故障来源，而不是更多图表。", items: [
    { img: "public/images/yuxunda/yuxunda-core-problem-analysis.png", alt: "工厂大屏问题与数据结构", title: "问题与数据结构", caption: "生产、设备、质量和异常被连接到管理判断。", fit: "contain" },
    { img: "public/images/yuxunda/yuxunda-User-Info Needs.png", alt: "工厂管理用户信息需求", title: "信息需求", caption: "不同管理任务对全局、趋势、告警和追溯的需求不同。", fit: "contain" },
  ] });
  await twoEvidence(p, { n: 40, section: "10 / CASE 06 · FACTORY DASHBOARD", title: "两块大屏完成交付，小范围阶段回访整体正向。", sub: "结果只保留可解释的交付事实与阶段反馈，不使用样本不足的精确比例。", items: [
    { img: "public/images/yuxunda/yuxunda-final-solution-01.png", alt: "智能工厂生产与设备大屏", title: "生产与设备", caption: "集中查看全局状态、趋势与设备健康度。" },
    { img: "public/images/yuxunda/yuxunda-final-solution-02.png", alt: "智能工厂质量与异常大屏", title: "质量与异常", caption: "状态色和阈值帮助管理人员快速发现异常。" },
  ] });

  await caseIntro(p, { n: 41, section: "11 / AI-ASSISTED DESIGN ENGINEERING", title: "AI 辅助设计工程实践：个人作品集网站。", sub: "真实独立实践 · Figma → Codex 首版 → 人工判断 → 规则重构 → QA", accent: C.orange, conclusion: "AI 加速了首版实现，但 Miki 负责识别结构与响应式问题、重新定义布局和组件规则，并完成 QA 与交付。", meta: [["设计输入", "原始 Figma"], ["首版实现", "Codex"], ["人工责任", "结构 / 响应式 / 组件"], ["交付", "最终网站 + QA"]], img: "output/portfolio-full/assets/portfolio-codex-first-desktop.png", alt: "Codex 首版作品集网站", caption: "最早可验证视觉证据：首版已能运行，但更像线性展示，结构与响应式规则仍不完整。", fit: "cover", note: "当前公开资料未包含可直接导出的完整 Figma 画板，因此不伪造截图；以真实首版实现作为最早视觉证据。" });
  await largePairEvidence(p, { n: 42, section: "11 / AI-ASSISTED DESIGN ENGINEERING", title: "首版能运行，最终版才形成可浏览的产品作品集。", sub: "对比不评价 AI 好坏，只显示设计师如何审查输出并把问题转成规则。", items: [
    { img: "output/portfolio-full/assets/portfolio-codex-first-desktop.png", alt: "Codex 首版作品集网站", title: "Codex 首版", caption: "层级过度集中在巨型标题，页面更像演示稿，网站浏览路径不清。" },
    { img: "output/portfolio-full/assets/portfolio-current-desktop.png", alt: "重构后的作品集网站", title: "规则重构后", caption: "项目、验证、方法和联系路径按网站节奏组织，组件与视觉语言更统一。" },
  ] });
  aiRules(p);
  await aiQa(p);
  await textImage(p, { n: 45, section: "11 / AI-ASSISTED DESIGN ENGINEERING", title: "AI 提高实现速度，设计师对结果与交付负责。", sub: "该实践证明设计到代码、AI 输出审查、响应式与组件规则、QA 和最终交付。", label: "最终产出", accent: C.orange, lead: "最终网站不是首版生成结果，而是多轮判断、修改和验证后的产品。", bullets: ["AI：生成首版、辅助修改与规则检查。", "Miki：问题判断、布局与组件规则、优先级和验收。", "交付：可运行网站、响应式规则与 QA 清单。"], img: "output/portfolio-full/assets/portfolio-current-desktop.png", alt: "最终个人作品集网站", caption: "最终页面把复杂产品定位、项目证据和联系路径组织为可浏览的求职材料。", fit: "cover" });

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


buildV2().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
