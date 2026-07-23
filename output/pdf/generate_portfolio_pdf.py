from __future__ import annotations

import html
import io
import os
from pathlib import Path
from typing import Iterable

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / "public"
TMP_ASSETS = ROOT / "tmp" / "pdfs" / "portfolio_assets"
OUTPUT = ROOT / "output" / "pdf" / "Miki_Portfolio_Selected_Work_CN.pdf"

PAGE_W, PAGE_H = landscape(A4)
MARGIN = 42
BG = HexColor("#F4F1EA")
INK = HexColor("#151716")
MUTED = HexColor("#6B6D68")
LINE = HexColor("#D5D0C7")
GREEN = HexColor("#1D8D62")
ORANGE = HexColor("#C96D45")
CHARCOAL = HexColor("#171A19")
WHITE = colors.white


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("CN-Regular", "/System/Library/Fonts/STHeiti Light.ttc", subfontIndex=0))
    pdfmetrics.registerFont(TTFont("CN-Medium", "/System/Library/Fonts/STHeiti Medium.ttc", subfontIndex=0))


class AssetStore:
    def __init__(self) -> None:
        TMP_ASSETS.mkdir(parents=True, exist_ok=True)
        self.cache: dict[str, tuple[ImageReader, int, int]] = {}

    def get(self, rel: str) -> tuple[ImageReader, int, int]:
        if rel in self.cache:
            return self.cache[rel]
        source = PUBLIC / rel
        if not source.exists():
            raise FileNotFoundError(source)
        target = TMP_ASSETS / (rel.replace("/", "__").replace(" ", "_") + ".jpg")
        if not target.exists():
            image = Image.open(source).convert("RGB")
            max_side = 1900
            if max(image.size) > max_side:
                ratio = max_side / max(image.size)
                image = image.resize((int(image.width * ratio), int(image.height * ratio)), Image.Resampling.LANCZOS)
            image.save(target, "JPEG", quality=84, optimize=True, progressive=True)
        image = Image.open(target)
        reader = ImageReader(str(target))
        self.cache[rel] = (reader, image.width, image.height)
        return self.cache[rel]


def esc(text: str) -> str:
    return html.escape(text).replace("\n", "<br/>")


def para(c: canvas.Canvas, text: str, x: float, top: float, width: float, size: float = 10,
         leading: float | None = None, font: str = "CN-Regular", color: colors.Color = INK,
         max_height: float | None = None, align: int = TA_LEFT) -> float:
    leading = leading or size * 1.55
    style = ParagraphStyle(
        name=f"p-{size}-{leading}-{font}", fontName=font, fontSize=size, leading=leading,
        textColor=color, alignment=align, spaceAfter=0, spaceBefore=0, wordWrap="CJK",
    )
    p = Paragraph(esc(text), style)
    _, height = p.wrap(width, max_height or PAGE_H)
    if max_height is not None and height > max_height + 0.5:
        WARNINGS.append(f"Text overflow: {text[:36]}... ({height:.1f}>{max_height:.1f})")
    p.drawOn(c, x, top - height)
    return height


def line(c: canvas.Canvas, x1: float, y1: float, x2: float, y2: float, color: colors.Color = LINE,
         width: float = 0.7) -> None:
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def label(c: canvas.Canvas, text: str, x: float, y: float, color: colors.Color = MUTED,
          size: float = 8.2) -> None:
    c.setFillColor(color)
    c.setFont("CN-Medium", size)
    c.drawString(x, y, text.upper())


def heading(c: canvas.Canvas, text: str, x: float, top: float, width: float,
            size: float = 28, color: colors.Color = INK, max_height: float | None = None) -> float:
    return para(c, text, x, top, width, size=size, leading=size * 1.15, font="CN-Medium", color=color,
                max_height=max_height)


def footer(c: canvas.Canvas, page_no: int, dark: bool = False) -> None:
    color = HexColor("#A8ADA8") if dark else MUTED
    c.setFillColor(color)
    c.setFont("CN-Regular", 7.5)
    c.drawString(MARGIN, 20, "Miki Yang  /  Product Designer")
    c.drawRightString(PAGE_W - MARGIN, 20, f"{page_no:02d} / 14")


def page_start(c: canvas.Canvas, page_no: int, section: str, dark: bool = False) -> None:
    c.setFillColor(CHARCOAL if dark else BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    label(c, section, MARGIN, PAGE_H - 31, HexColor("#A8ADA8") if dark else MUTED, 7.5)
    footer(c, page_no, dark)


def draw_image(c: canvas.Canvas, store: AssetStore, rel: str, x: float, y: float, w: float, h: float,
               mode: str = "cover", radius: float = 0, bg: colors.Color = WHITE) -> None:
    reader, iw, ih = store.get(rel)
    c.saveState()
    if radius:
        path = c.beginPath()
        path.roundRect(x, y, w, h, radius)
        c.clipPath(path, stroke=0, fill=0)
    c.setFillColor(bg)
    c.rect(x, y, w, h, fill=1, stroke=0)
    if mode == "contain":
        scale = min(w / iw, h / ih)
    else:
        scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    dx, dy = x + (w - dw) / 2, y + (h - dh) / 2
    c.drawImage(reader, dx, dy, dw, dh, mask="auto")
    c.restoreState()


def meta(c: canvas.Canvas, items: Iterable[tuple[str, str]], x: float, y: float, width: float,
         dark: bool = False, cols: int = 2) -> None:
    item_list = list(items)
    col_w = width / cols
    row_h = 42
    for idx, (k, v) in enumerate(item_list):
        col = idx % cols
        row = idx // cols
        xx = x + col * col_w
        yy = y - row * row_h
        label(c, k, xx, yy, HexColor("#99A19C") if dark else MUTED, 7.5)
        para(c, v, xx, yy - 10, col_w - 14, size=10, leading=13,
             font="CN-Medium", color=WHITE if dark else INK, max_height=27)


def bullet_list(c: canvas.Canvas, items: list[str], x: float, top: float, width: float,
               size: float = 9.5, leading: float | None = None, color: colors.Color = INK,
               gap: float = 7) -> float:
    leading = leading or size * 1.48
    y = top
    for item in items:
        c.setFillColor(GREEN if color == INK else ORANGE)
        c.circle(x + 3, y - 5, 2.1, fill=1, stroke=0)
        h = para(c, item, x + 14, y, width - 14, size=size, leading=leading, color=color)
        y -= h + gap
    return top - y


def stat(c: canvas.Canvas, value: str, caption: str, x: float, y: float, dark: bool = False) -> None:
    c.setFillColor(WHITE if dark else INK)
    c.setFont("CN-Medium", 20)
    c.drawString(x, y, value)
    para(c, caption, x, y - 10, 105, size=7.5, leading=10, color=HexColor("#B6BBB5") if dark else MUTED)


def project_chip(c: canvas.Canvas, title: str, category: str, x: float, y: float, w: float,
                 accent: colors.Color = GREEN) -> None:
    c.setFillColor(accent)
    c.circle(x + 4, y + 3, 3, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("CN-Medium", 10.5)
    c.drawString(x + 14, y, title)
    c.setFillColor(MUTED)
    c.setFont("CN-Regular", 8)
    c.drawRightString(x + w, y, category)


def draw_cover(c: canvas.Canvas, store: AssetStore) -> None:
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    draw_image(c, store, "images/work/industrial-ai-detection/00-card.webp", PAGE_W * 0.52, 0, PAGE_W * 0.48, PAGE_H,
               mode="cover", bg=CHARCOAL)
    c.setFillColor(HexColor("#151716"))
    c.rect(0, 0, PAGE_W * 0.61, PAGE_H, fill=1, stroke=0)
    c.setFillColor(GREEN)
    c.rect(MARGIN, PAGE_H - 88, 34, 4, fill=1, stroke=0)
    label(c, "SELECTED WORK / 2026", MARGIN, PAGE_H - 120, HexColor("#97A19B"), 8)
    c.setFillColor(WHITE)
    c.setFont("CN-Medium", 62)
    c.drawString(MARGIN, PAGE_H - 210, "Miki")
    c.setFont("CN-Regular", 28)
    c.drawString(MARGIN, PAGE_H - 253, "精选作品集")
    para(c, "产品设计师 / 复杂 B 端系统 / 工业 AI / AI 应用工作流", MARGIN, PAGE_H - 310,
         350, size=13, leading=20, color=HexColor("#DBDFDA"))
    line(c, MARGIN, 106, PAGE_W * 0.54, 106, HexColor("#4B514D"), 0.8)
    c.setFillColor(HexColor("#A8ADA8"))
    c.setFont("CN-Regular", 9)
    c.drawString(MARGIN, 84, "杨蜜萁  /  Shenzhen  /  mikistudio.com.cn")
    c.drawRightString(PAGE_W - MARGIN, 20, "01 / 14")
    c.showPage()


def draw_profile(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 2, "01  /  PROFILE")
    heading(c, "把复杂产品，变成团队能判断、能协作、能落地的方案。", MARGIN, PAGE_H - 72, 445, 29)
    para(c, "杨蜜萁是一名产品设计师，专注复杂 B 端系统、工业 AI、AI 应用工作流与 Design System。擅长把模糊需求转化为清晰流程、可演示原型、设计规则与开发前风险识别，帮助团队降低沟通成本、返工成本和无效开发。", MARGIN, PAGE_H - 164, 430, size=11, leading=18, color=MUTED, max_height=110)
    c.setFillColor(GREEN)
    c.rect(MARGIN, 275, 4, 118, fill=1, stroke=0)
    para(c, "我的优势不是只交付界面，而是把业务逻辑、用户任务、技术约束与最终交付放进同一套判断里。", MARGIN + 20, 388, 410, size=15, leading=23, font="CN-Medium", color=INK, max_height=120)
    draw_image(c, store, "images/home-v2/about-portrait.png", PAGE_W - MARGIN - 236, 260, 216, 256, mode="cover", radius=2, bg=CHARCOAL)
    label(c, "FOCUS", PAGE_W - MARGIN - 236, 240, MUTED, 7.5)
    focus = ["工业 AI HMI", "复杂 B 端系统", "设计系统", "AI 辅助工作流"]
    for i, item in enumerate(focus):
        project_chip(c, item, "", PAGE_W - MARGIN - 236, 218 - i * 23, 216, GREEN if i < 2 else ORANGE)
    label(c, "CAREER SNAPSHOT", MARGIN, 222, MUTED, 7.5)
    line(c, MARGIN, 210, PAGE_W - MARGIN, 210)
    timeline = [("2022.07 - 至今", "产品设计", "珠海市万门科技有限公司"), ("2021.06 - 2022.06", "用户体验经理 / 产品设计师", "珠海小源科技"), ("2014.04 - 2020.10", "UI / UX / 视觉 / 产品设计", "达明科技、点控科技、银泰贸易、罗西尼")]
    for i, (year, role, company) in enumerate(timeline):
        x = MARGIN + i * 178
        c.setFillColor(GREEN if i == 0 else LINE)
        c.circle(x + 2, 193, 3, fill=1, stroke=0)
        c.setFillColor(MUTED)
        c.setFont("CN-Regular", 7.8)
        c.drawString(x, 172, year)
        c.setFillColor(INK)
        c.setFont("CN-Medium", 9)
        c.drawString(x, 152, role)
        para(c, company, x, 140, 150, size=7.8, leading=10, color=MUTED, max_height=25)
    footer(c, 2)
    c.showPage()


def draw_overview(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 3, "02  /  SELECTED WORK")
    heading(c, "Selected Work", MARGIN, PAGE_H - 72, 350, 34)
    para(c, "用真实项目展示复杂系统、AI 应用和智能硬件产品从需求到方案落地的能力。", MARGIN, PAGE_H - 120, 440, size=10.5, leading=16, color=MUTED)
    # Featured project
    draw_image(c, store, "images/work/industrial-ai-detection/00-card.webp", MARGIN, 260, 300, 215, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "工业 AI 视觉质检系统", "工业软件 / HMI", MARGIN, 241, 300, GREEN)
    para(c, "把工程师工具重构为工厂现场可理解、可接管、可追溯的 AI 质检 HMI。", MARGIN, 222, 300, size=9, leading=13.5, color=MUTED)
    # PCBA
    x2 = MARGIN + 328
    draw_image(c, store, "images/work/pcba/00-card.webp", x2, 354, 206, 121, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "PCBA 插件机控制系统", "工业软件", x2, 336, 206, ORANGE)
    para(c, "保留现场肌肉记忆，重构产线管理与高风险操作。", x2, 318, 206, size=8.5, leading=12, color=MUTED)
    # GPS
    x3 = x2 + 228
    draw_image(c, store, "images/work/gps-2/00-card.webp", x3, 354, 206, 121, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "载体轨迹定位系统", "GIS / 移动端", x3, 336, 206, GREEN)
    para(c, "将大规模资产追踪变成可检索、可预警、可回溯的移动体验。", x3, 318, 206, size=8.5, leading=12, color=MUTED)
    # Lower breadth row
    lower_y = 92
    tiles = [("images/work/wms/00-card.webp", "WMS 智能仓储管理系统", "Web 管理端 + RF 终端"), ("images/work/factory-dashboard/00-card.webp", "智能工厂数据大屏", "决策看板 / 数据可视化"), ("images/work/5g-chatbot/00-card.webp", "5G 消息 Chatbot", "交互规范 / 设计运营")]
    for i, (img, title, cat) in enumerate(tiles):
        x = MARGIN + i * 178
        draw_image(c, store, img, x, lower_y + 38, 162, 92, mode="cover", radius=2, bg=CHARCOAL)
        project_chip(c, title, cat, x, lower_y + 22, 162, GREEN if i != 1 else ORANGE)
    c.setFillColor(MUTED)
    c.setFont("CN-Regular", 7.5)
    c.drawRightString(PAGE_W - MARGIN, 58, "当前网站使用的项目素材 / 脱敏展示")
    footer(c, 3)
    c.showPage()


def draw_ai_intro(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 4, "03  /  CASE 01  -  INDUSTRIAL AI HMI")
    label(c, "CASE 01", MARGIN, PAGE_H - 68, GREEN, 8)
    heading(c, "工业 AI 视觉质检系统", MARGIN, PAGE_H - 92, 365, 31)
    para(c, "把偏工程师工具的检测系统，重构为支撑工厂多角色协作的 HMI 标准产品。", MARGIN, PAGE_H - 151, 365, size=11, leading=17, color=MUTED, max_height=60)
    meta(c, [("交付产物", "铝材挤压 AI 检测系统"), ("客户", "某硬件公司"), ("我的角色", "设计负责人"), ("服务范围", "UI/UX、系统设计")], MARGIN, 330, 365, cols=2)
    label(c, "PROJECT BRIEF", MARGIN, 246, MUTED, 7.5)
    para(c, "项目面向铝材挤压产线的表面质检场景，整合 2D + 3D 双模态检测、16 路工业相机画面、11 类缺陷识别、统计分析、日志追溯与权限管理。", MARGIN, 226, 360, size=10, leading=15.5, color=INK, max_height=92)
    c.setFillColor(CHARCOAL)
    c.roundRect(PAGE_W - MARGIN - 420, 61, 420, 405, 3, fill=1, stroke=0)
    draw_image(c, store, "images/work/industrial-ai-detection/01-hero-base.webp", PAGE_W - MARGIN - 420, 61, 420, 405, mode="cover", radius=3, bg=CHARCOAL)
    c.setFillColor(HexColor("#151716"))
    c.rect(PAGE_W - MARGIN - 420, 61, 420, 98, fill=1, stroke=0)
    para(c, "设计目标", PAGE_W - MARGIN - 394, 141, 100, size=8, leading=11, color=HexColor("#A8ADA8"))
    para(c, "让现场人员快速识别异常、理解结果、判断优先级，并在必要时安全接管。", PAGE_W - MARGIN - 394, 126, 354, size=11, leading=16, font="CN-Medium", color=WHITE, max_height=50)
    label(c, "CORE CHALLENGE", MARGIN, 185, MUTED, 7.5)
    challenges = [("01", "高密度判断", "2D + 3D 检测与多路相机同时输出，界面不能简单堆叠。"), ("02", "四类角色协作", "工程师、操作员、维护与质检角色的优先级不同。"), ("03", "AI 与人工边界", "算法输出需要转译为能理解、能处理、能追溯的操作信息。")]
    for i, (num, title, body) in enumerate(challenges):
        x = MARGIN + i * 108
        c.setFillColor(GREEN if i == 0 else LINE)
        c.circle(x + 3, 163, 3, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("CN-Medium", 10)
        c.drawString(x + 15, 158, f"{num}  {title}")
        para(c, body, x + 15, 145, 95, size=8.2, leading=11.5, color=MUTED, max_height=36)
    footer(c, 4)
    c.showPage()


def draw_ai_solution(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 5, "03  /  CASE 01  -  DECISIONS")
    heading(c, "把算法结果，转译为现场可用的判断界面。", MARGIN, PAGE_H - 72, 470, 28)
    para(c, "核心判断不是做更多模块，而是把高密度信息按产线物理方位、风险等级和角色边界重新组织。", MARGIN, PAGE_H - 126, 470, size=10.5, leading=16, color=MUTED)
    draw_image(c, store, "images/work/industrial-ai-detection/05-monitoring-dashboard.webp", MARGIN, 112, 470, 265, mode="contain", radius=2, bg=WHITE)
    label(c, "MONITORING INFORMATION", MARGIN, 92, MUTED, 7.5)
    para(c, "16 路相机画面、统计数据、缺陷分布与设备日志统一组织进监控首页，最终采用贴合现场认知且渲染压力可控的分组方案。", MARGIN, 78, 470, size=8.6, leading=12.5, color=MUTED, max_height=34)
    x = MARGIN + 510
    label(c, "DESIGN RULES", x, PAGE_H - 154, MUTED, 7.5)
    bullet_list(c, ["关键状态优先：主屏优先呈现实时画面、缺陷结果、设备状态与日志。", "遵循现场物理直觉：按产线上下左右方位分组，降低认知转换成本。", "高风险操作分层：数据擦除与系统重置不作为普通按钮直接暴露。", "角色边界清晰：以权限矩阵隔离四类角色的操作范围。"], x, PAGE_H - 174, 270, size=9, leading=13.5, color=INK, gap=8)
    draw_image(c, store, "images/work/industrial-ai-detection/06-realtime-inspection.webp", x, 134, 270, 132, mode="cover", radius=2, bg=CHARCOAL)
    draw_image(c, store, "images/work/industrial-ai-detection/14-permission-system.webp", x + 286, 134, 202, 132, mode="contain", radius=2, bg=WHITE)
    label(c, "DELIVERY", x, 113, MUTED, 7.5)
    para(c, "完成 11 个核心模块从 0 到 1 的交付；界面、交互与权限资产通过开发团队与项目负责人审核确认并落地。", x, 98, 488, size=8.6, leading=12.5, color=MUTED, max_height=40)
    footer(c, 5)
    c.showPage()


def draw_pcba_intro(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 6, "04  /  CASE 02  -  PCBA")
    label(c, "CASE 02", MARGIN, PAGE_H - 68, ORANGE, 8)
    heading(c, "PCBA 插件机控制系统", MARGIN, PAGE_H - 92, 400, 31)
    para(c, "保留现场已经形成的操作肌肉记忆，重构产线管理、物料选择、异常预警与工程资料。", MARGIN, PAGE_H - 151, 400, size=11, leading=17, color=MUTED, max_height=60)
    meta(c, [("项目类型", "PCBA / B 端工业软件"), ("我的角色", "产品设计"), ("工作重点", "流程重构、交互与系统规则"), ("周期", "2 - 3 个月")], MARGIN, 330, 400, cols=2)
    label(c, "THE DECISION", MARGIN, 246, MUTED, 7.5)
    para(c, "面对旧系统、研发排期与产线风险的约束，没有推翻底层逻辑从零设计，而是保留现场认知，重构关键流程。", MARGIN, 226, 370, size=10, leading=15.5, color=INK, max_height=70)
    draw_image(c, store, "images/work/pcba/01-hero.webp", PAGE_W - MARGIN - 440, 82, 440, 354, mode="cover", radius=2, bg=CHARCOAL)
    label(c, "CONSTRAINTS", MARGIN, 153, MUTED, 7.5)
    constraints = ["旧系统逻辑已经形成肌肉记忆，替换成本高。", "交互复杂度必须可控，避免过重的实现成本。", "系统直连真实产线，高风险操作需要权限校验与兜底。"]
    bullet_list(c, constraints, MARGIN, 132, 385, size=9.2, leading=13.5, color=INK, gap=7)
    footer(c, 6)
    c.showPage()


def draw_pcba_outcome(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 7, "04  /  CASE 02  -  DELIVERY")
    heading(c, "把“能操作”推进到“能管理、能追踪、能交付”。", MARGIN, PAGE_H - 72, 490, 28)
    para(c, "通过横版布局、模块分组与系统校验，减少产线人员的切换和确认成本，并把工程资料沉淀为可复用的资料库与配置模板。", MARGIN, PAGE_H - 160, 490, size=10.5, leading=16, color=MUTED)
    draw_image(c, store, "images/work/pcba/03-new-system.webp", MARGIN, 150, 255, 213, mode="contain", radius=2, bg=WHITE)
    draw_image(c, store, "images/work/pcba/04-warning-dashboard.webp", MARGIN + 275, 150, 255, 213, mode="contain", radius=2, bg=WHITE)
    label(c, "SELECTED OUTCOMES", MARGIN, 131, MUTED, 7.5)
    stat(c, "+28%", "管理效率提升", MARGIN, 107)
    stat(c, "+17%", "插件效率提升", MARGIN + 130, 107)
    stat(c, "-10%", "人工介入率", MARGIN + 260, 107)
    stat(c, "-17%", "工程导入耗时", MARGIN + 390, 107)
    x = PAGE_W - MARGIN - 210
    label(c, "WHAT I SHIPPED", x, 356, MUTED, 7.5)
    bullet_list(c, ["首页预警与状态层级", "物料、工程、相机与手控模块", "权限、日志与交付规范", "面向 12 位操作员与组长的 A/B 可用性测试"], x, 336, 210, size=8.7, leading=12.8, color=INK, gap=7)
    para(c, "注：案例中的项目数据与敏感信息均已做脱敏处理。", x, 140, 210, size=7.5, leading=10, color=MUTED, max_height=24)
    footer(c, 7)
    c.showPage()


def draw_gps_intro(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 8, "05  /  CASE 03  -  GPS")
    label(c, "CASE 03", MARGIN, PAGE_H - 68, GREEN, 8)
    heading(c, "国家能源集团：载体轨迹定位系统", MARGIN, PAGE_H - 92, 500, 30)
    para(c, "把大规模资产追踪从“人工查岗”推进为可搜索、可预警、可回溯的移动端管理体验。", MARGIN, PAGE_H - 150, 470, size=11, leading=17, color=MUTED, max_height=60)
    meta(c, [("项目场景", "GIS 定位追踪 / 移动端 UX"), ("用户角色", "现场巡检、后台调度、管理层"), ("周期", "1 个月"), ("我的角色", "主设计师")], MARGIN, 328, 425, cols=2)
    label(c, "THE PROBLEM", MARGIN, 242, MUTED, 7.5)
    para(c, "面对几百个分区和数千个高频移动的载体，原有系统响应慢、统筹弱；高达 60% 的载体存在严重定位偏差，告警和历史轨迹也缺乏清晰的管理入口。", MARGIN, 222, 395, size=10, leading=15.5, color=INK, max_height=92)
    draw_image(c, store, "images/work/gps-2/03-project-overview.webp", PAGE_W - MARGIN - 420, 70, 420, 396, mode="cover", radius=2, bg=CHARCOAL)
    footer(c, 8)
    c.showPage()


def draw_gps_solution(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 9, "05  /  CASE 03  -  DECISION")
    heading(c, "当定位需要 12 - 15 秒，体验如何保持可控？", MARGIN, PAGE_H - 72, 480, 28)
    para(c, "关键判断是默认视图收窄 + 渐进式精准请求：先让用户快速掌握高优运行状态，再在需要排查特定载体时触发精准定位。", MARGIN, PAGE_H - 164, 472, size=10.5, leading=16, color=MUTED)
    draw_image(c, store, "images/work/gps-2/04-map-dashboard.webp", MARGIN, 126, 365, 260, mode="cover", radius=2, bg=CHARCOAL)
    draw_image(c, store, "images/work/gps-2/13-interface-overview-a.webp", MARGIN + 385, 126, 180, 260, mode="cover", radius=2, bg=CHARCOAL)
    x = PAGE_W - MARGIN - 170
    label(c, "DESIGN MOVES", x, 374, MUTED, 7.5)
    bullet_list(c, ["用机器围栏替代人工肉眼巡查，支持圆、矩形与自定义多边形划区。", "以紧急程度 + 时间线过滤海量告警，让致命威胁优先抵达管理层。", "支持历史路径回放与轨迹追溯，为事故定损与追责提供依据。", "按项目 / 地区折叠管理，减少跨区调度沟通成本。"], x, 354, 170, size=8.2, leading=11.5, color=INK, gap=6)
    footer(c, 9)
    c.showPage()


def draw_wms_factory(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 10, "06  /  SYSTEMS AT SCALE")
    heading(c, "从单一界面，到多端协作的系统框架。", MARGIN, PAGE_H - 72, 450, 28)
    para(c, "这些项目共同指向同一种能力：在复杂业务与现场约束下，用信息架构、状态层级和可复用规则，把多个角色的工作连成一套可交付系统。", MARGIN, PAGE_H - 126, 570, size=10.5, leading=16, color=MUTED)
    # WMS band
    c.setFillColor(HexColor("#E9E5DC"))
    c.roundRect(MARGIN, 270, PAGE_W - MARGIN * 2, 176, 3, fill=1, stroke=0)
    draw_image(c, store, "images/work/wms/03-web-view.webp", MARGIN + 16, 286, 250, 144, mode="cover", radius=2, bg=WHITE)
    draw_image(c, store, "images/work/wms/04-rf-view.webp", MARGIN + 278, 286, 194, 144, mode="contain", radius=2, bg=WHITE)
    label(c, "WMS  /  WEB + RF", MARGIN + 500, 406, ORANGE, 8)
    heading(c, "WMS 智能仓储管理系统", MARGIN + 500, 386, 220, 19)
    para(c, "把 Web 管理端与 RF 终端的高频结构、流程与权限边界，收敛为一套标准化、可扩展的仓储系统交付框架。", MARGIN + 500, 338, 260, size=8.8, leading=13, color=MUTED, max_height=72)
    # Factory band
    c.setFillColor(CHARCOAL)
    c.roundRect(MARGIN, 64, PAGE_W - MARGIN * 2, 168, 3, fill=1, stroke=0)
    draw_image(c, store, "images/work/factory-dashboard/02-overview.webp", MARGIN + 16, 80, 260, 136, mode="cover", radius=2, bg=CHARCOAL)
    draw_image(c, store, "images/work/factory-dashboard/04-production-analysis.webp", MARGIN + 292, 80, 196, 136, mode="cover", radius=2, bg=CHARCOAL)
    label(c, "SMART FACTORY  /  2 MONTHS", MARGIN + 515, 198, HexColor("#A8ADA8"), 8)
    heading(c, "智能工厂数据大屏", MARGIN + 515, 177, 205, 19, color=WHITE)
    para(c, "在 2 个月内从零构建集中化的大屏监控中枢，用高信噪比的可视化呈现产能、设备、质量与异常状态，帮助管理层从凭经验盲猜转向看数据决策。", MARGIN + 515, 132, 230, size=8.8, leading=13, color=HexColor("#CDD2CD"), max_height=78)
    footer(c, 10)
    c.showPage()


def draw_5g(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 11, "07  /  SYSTEMS AT SCALE")
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    label(c, "07  /  SYSTEMS AT SCALE", MARGIN, PAGE_H - 31, HexColor("#A8ADA8"), 7.5)
    label(c, "CASE 04", MARGIN, PAGE_H - 68, ORANGE, 8)
    heading(c, "5G 消息 Chatbot 交互规范体系", MARGIN, PAGE_H - 92, 480, 30, color=WHITE)
    para(c, "在手机原生短信入口的高度受限环境中，建立跨设备可复用的“最小公约数”适配规范。", MARGIN, PAGE_H - 150, 450, size=11, leading=17, color=HexColor("#C5CBC5"), max_height=60)
    meta(c, [("项目类型", "5G 通信 / 交互规范体系"), ("我的角色", "交互设计负责人"), ("团队", "15 人跨职能团队"), ("设计运营", "40+ 次内部培训")], MARGIN, 330, 415, dark=True, cols=2)
    label(c, "WHY IT MATTERED", MARGIN, 242, HexColor("#A8ADA8"), 7.5)
    bullet_list(c, ["原生短信入口缺乏灵活 UI 控件，交互容错成本高。", "安卓设备的渲染差异巨大，无法像 App 一样精准下发版本。", "通过规范、培训与安全区标准，把个人判断转化为团队的流水线能力。"], MARGIN, 222, 390, size=9, leading=13.5, color=WHITE, gap=8)
    draw_image(c, store, "images/work/5g-chatbot/01-hero.webp", PAGE_W - MARGIN - 425, 262, 425, 204, mode="cover", radius=2, bg=CHARCOAL)
    draw_image(c, store, "images/work/5g-chatbot/04-design-spec.webp", PAGE_W - MARGIN - 425, 70, 205, 170, mode="contain", radius=2, bg=WHITE)
    draw_image(c, store, "images/work/5g-chatbot/03-strategy-flow.webp", PAGE_W - MARGIN - 205, 70, 205, 170, mode="cover", radius=2, bg=CHARCOAL)
    footer(c, 11, dark=True)
    c.showPage()


def draw_more_work(c: canvas.Canvas, store: AssetStore) -> None:
    page_start(c, 12, "08  /  MORE WORK")
    heading(c, "More Work", MARGIN, PAGE_H - 72, 300, 34)
    para(c, "跨越 AI 工作流、仓储、工厂与通信场景，持续把复杂系统转译为可理解的界面与规则。", MARGIN, PAGE_H - 120, 460, size=10.5, leading=16, color=MUTED)
    draw_image(c, store, "images/work/ds-ai/04-ai-draft-vs-human.webp", MARGIN, 232, 345, 242, mode="cover", radius=2, bg=CHARCOAL)
    label(c, "AI-ASSISTED WORKFLOW", MARGIN, 214, GREEN, 7.5)
    heading(c, "让 AI 草稿进入可判断、可校验的设计流程。", MARGIN, 196, 345, 17)
    para(c, "保留 AI 探索速度，同时补上上下文、证据与 QA 检查，让产出能够进入真实交付。", MARGIN, 156, 345, size=8.8, leading=13, color=MUTED, max_height=38)
    x = MARGIN + 380
    draw_image(c, store, "images/work/wms/08-mode-standard.webp", x, 334, 180, 140, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "WMS 多模式作业", "Web / RF", x, 317, 180, ORANGE)
    draw_image(c, store, "images/work/factory-dashboard/06-management-view.webp", x + 200, 334, 180, 140, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "工厂管理视图", "决策看板", x + 200, 317, 180, GREEN)
    draw_image(c, store, "images/work/5g-chatbot/06-deliverables.webp", x, 122, 380, 160, mode="cover", radius=2, bg=CHARCOAL)
    project_chip(c, "规范交付与复用", "5G Chatbot", x, 105, 380, ORANGE)
    label(c, "BREADTH", x, 78, MUTED, 7.5)
    para(c, "能够在不同业务形态之间迁移同一套判断方法：先结构化问题，再做信息层级、交互规则与交付校验。", x, 63, 380, size=8.8, leading=13, color=MUTED, max_height=32)
    footer(c, 12)
    c.showPage()


def draw_method(c: canvas.Canvas) -> None:
    page_start(c, 13, "09  /  METHOD")
    heading(c, "我的工作方式：先把问题说清楚，再让方案变得可验证。", MARGIN, PAGE_H - 72, 620, 28)
    para(c, "在复杂 B 端、AI 与智能硬件场景中，我把设计工作拆成四个连续动作，帮助团队更快判断方向、减少沟通成本与无效开发。", MARGIN, PAGE_H - 126, 620, size=10.5, leading=16, color=MUTED)
    steps = [("01", "拆业务", "角色、任务、权限、异常", "把模糊需求拆成可讨论的业务结构。"), ("02", "做判断", "优先级、取舍、边界", "说明为什么做，以及为什么暂时不做。"), ("03", "做原型", "关键路径、Demo、验证", "让静态界面变成能被讨论和测试的方案。"), ("04", "控风险", "数据、算法、硬件、上线", "提前暴露开发前风险，减少后期返工。")]
    start_x = MARGIN
    y = 284
    for i, (num, title, tags, body) in enumerate(steps):
        x = start_x + i * 177
        c.setFillColor(CHARCOAL if i % 2 == 0 else HexColor("#E9E5DC"))
        c.roundRect(x, y, 148, 155, 3, fill=1, stroke=0)
        c.setFillColor(GREEN if i == 2 else (WHITE if i % 2 == 0 else ORANGE))
        c.setFont("CN-Medium", 23)
        c.drawString(x + 14, y + 112, num)
        c.setFillColor(WHITE if i % 2 == 0 else INK)
        c.setFont("CN-Medium", 16)
        c.drawString(x + 14, y + 82, title)
        para(c, tags, x + 14, y + 59, 118, size=8, leading=11, color=HexColor("#C7CCC7") if i % 2 == 0 else MUTED, max_height=24)
        para(c, body, x + 14, y + 27, 118, size=8.3, leading=12, color=HexColor("#C7CCC7") if i % 2 == 0 else INK, max_height=42)
        if i < len(steps) - 1:
            c.setStrokeColor(GREEN)
            c.setLineWidth(1.3)
            c.line(x + 148, y + 77, x + 167, y + 77)
            c.line(x + 162, y + 82, x + 167, y + 77)
            c.line(x + 162, y + 72, x + 167, y + 77)
    label(c, "WHAT THIS CHANGES FOR A TEAM", MARGIN, 218, MUTED, 7.5)
    line(c, MARGIN, 206, PAGE_W - MARGIN, 206)
    outcomes = [("老板 / 决策者", "更早看见方案价值、风险与投入边界。"), ("产品 / 研发", "更少依赖口头解释，关键路径和规则更清晰。"), ("设计团队", "把个人经验沉淀为可复用的组件、规范与 QA。"), ("最终用户", "在高压或复杂场景下更快理解、操作与恢复。")]
    for i, (title, body) in enumerate(outcomes):
        x = MARGIN + (i % 2) * 330
        yy = 175 - (i // 2) * 58
        c.setFillColor(GREEN if i == 0 else ORANGE)
        c.circle(x + 3, yy + 4, 3, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("CN-Medium", 10)
        c.drawString(x + 15, yy, title)
        para(c, body, x + 15, yy - 13, 275, size=8.6, leading=12, color=MUTED, max_height=28)
    footer(c, 13)
    c.showPage()


def draw_contact(c: canvas.Canvas, store: AssetStore) -> None:
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    label(c, "10  /  CONTACT", MARGIN, PAGE_H - 31, HexColor("#A8ADA8"), 7.5)
    c.setFillColor(GREEN)
    c.rect(MARGIN, PAGE_H - 90, 34, 4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("CN-Medium", 42)
    c.drawString(MARGIN, PAGE_H - 160, "如果你的产品足够复杂，")
    c.drawString(MARGIN, PAGE_H - 212, "我可以帮你把它讲清楚、做出来。");
    para(c, "产品设计师 / 10+ 年设计经验 / 专注 B 端系统、工业 AI 与智能硬件产品体验", MARGIN, PAGE_H - 262, 580, size=12, leading=19, color=HexColor("#C7CCC7"), max_height=40)
    line(c, MARGIN, 235, PAGE_W - MARGIN, 235, HexColor("#4B514D"), 0.8)
    label(c, "CONTACT", MARGIN, 209, HexColor("#A8ADA8"), 7.5)
    contacts = [("邮箱", "miqi723@163.com"), ("作品集网站", "mikistudio.com.cn"), ("求职方向", "产品设计 / UI/UX / 复杂 B 端系统"), ("微信", "待补充")]
    for i, (k, v) in enumerate(contacts):
        x = MARGIN + (i % 2) * 300
        y = 179 - (i // 2) * 62
        label(c, k, x, y, HexColor("#A8ADA8"), 7.5)
        para(c, v, x, y - 12, 260, size=12, leading=16, font="CN-Medium", color=WHITE, max_height=28)
    x = PAGE_W - MARGIN - 270
    label(c, "EXPERIENCE", x, 209, HexColor("#A8ADA8"), 7.5)
    exp = [("2022 - 至今", "产品设计 / 珠海市万门科技有限公司"), ("2021 - 2022", "用户体验经理 / 珠海小源科技"), ("2019 - 2020", "UI/UX 设计师 / 珠海达明科技、长园集团"), ("此前", "广东点控科技、银泰贸易、罗西尼")]
    for i, (year, role) in enumerate(exp):
        yy = 179 - i * 33
        c.setFillColor(GREEN if i == 0 else HexColor("#788078"))
        c.setFont("CN-Medium", 8.5)
        c.drawString(x, yy, year)
        para(c, role, x + 72, yy + 2, 190, size=8.5, leading=11, color=HexColor("#D3D8D3"), max_height=24)
    c.setFillColor(HexColor("#A8ADA8"))
    c.setFont("CN-Regular", 8)
    c.drawString(MARGIN, 44, "本材料为精选项目版本，项目画面均来自当前网站在用素材；涉密内容已做脱敏展示。")
    c.drawRightString(PAGE_W - MARGIN, 20, "14 / 14")
    c.showPage()


def build() -> None:
    global WARNINGS
    WARNINGS = []
    register_fonts()
    store = AssetStore()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=landscape(A4), pageCompression=1)
    c.setTitle("Miki Portfolio Selected Work CN")
    c.setAuthor("Miki Yang")
    draw_cover(c, store)
    draw_profile(c, store)
    draw_overview(c, store)
    draw_ai_intro(c, store)
    draw_ai_solution(c, store)
    draw_pcba_intro(c, store)
    draw_pcba_outcome(c, store)
    draw_gps_intro(c, store)
    draw_gps_solution(c, store)
    draw_wms_factory(c, store)
    draw_5g(c, store)
    draw_more_work(c, store)
    draw_method(c)
    draw_contact(c, store)
    c.save()
    print(f"Generated: {OUTPUT}")
    print(f"Warnings: {len(WARNINGS)}")
    for warning in WARNINGS:
        print(warning)


if __name__ == "__main__":
    build()
