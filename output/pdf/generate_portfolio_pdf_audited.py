from __future__ import annotations

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas

import generate_portfolio_pdf as base


OUTPUT = base.ROOT / "output" / "pdf" / "Miki_Portfolio_Selected_Work_CN_Audited.pdf"
W, H = landscape(A4)
M = 42
BG = HexColor("#F4F1EA")
PANEL = HexColor("#E9E5DC")
INK = HexColor("#151716")
MUTED = HexColor("#686D68")
LINE = HexColor("#D4CEC3")
GREEN = HexColor("#168B61")
ORANGE = HexColor("#C9673F")
DARK = HexColor("#171A19")
WHITE = colors.white
TOTAL = 14


def p(c, text, x, top, width, size=10, leading=None, font="CN-Regular", color=INK, max_height=None):
    return base.para(c, text, x, top, width, size=size, leading=leading, font=font, color=color, max_height=max_height)


def title(c, text, subtitle=None, dark=False):
    color = WHITE if dark else INK
    muted = HexColor("#BCC2BD") if dark else MUTED
    p(c, text, M, H - 76, W - 2 * M, size=29, leading=34, font="CN-Medium", color=color, max_height=76)
    if subtitle:
        p(c, subtitle, M, H - 148, W - 2 * M, size=10.5, leading=16, color=muted, max_height=42)


def page(c, number, section, dark=False):
    c.setFillColor(DARK if dark else BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(HexColor("#AAB1AB") if dark else MUTED)
    c.setFont("CN-Regular", 7.5)
    c.drawString(M, H - 28, section)
    c.drawString(M, 19, "杨蜜萁 Miki  /  高级产品设计师")
    c.drawRightString(W - 84, 19, f"{number:02d} / {TOTAL:02d}")


def small_label(c, text, x, y, color=MUTED):
    c.setFillColor(color)
    c.setFont("CN-Medium", 7.8)
    c.drawString(x, y, text)


def rule(c, x1, y1, x2, y2, color=LINE, width=0.7):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def dot(c, x, y, color=GREEN, r=2.8):
    c.setFillColor(color)
    c.circle(x, y, r, fill=1, stroke=0)


def bullet(c, text, x, top, width, color=GREEN, size=9.2, max_height=34):
    dot(c, x + 3, top - 6, color, 2.2)
    return p(c, text, x + 14, top, width - 14, size=size, leading=size * 1.45, color=INK, max_height=max_height)


def evidence_image(c, store, rel, x, y, w, h, caption, mode="contain", dark=False):
    base.draw_image(c, store, rel, x, y, w, h, mode=mode, radius=2, bg=HexColor("#0F1110") if dark else WHITE)
    cap_color = HexColor("#C5CBC6") if dark else MUTED
    p(c, caption, x, y - 8, w, size=8, leading=11, color=cap_color, max_height=24)


def meta_grid(c, items, x, top, width, cols=2, dark=False):
    color = WHITE if dark else INK
    muted = HexColor("#9EA59F") if dark else MUTED
    col_w = width / cols
    row_h = 52
    for i, (label, value) in enumerate(items):
        xx = x + (i % cols) * col_w
        yy = top - (i // cols) * row_h
        small_label(c, label, xx, yy, muted)
        p(c, value, xx, yy - 11, col_w - 12, size=10.2, leading=14, font="CN-Medium", color=color, max_height=30)


def stat(c, value, label, x, y, width, accent=GREEN, dark=False):
    c.setFillColor(accent)
    c.setFont("CN-Medium", 22)
    c.drawString(x, y, value)
    p(c, label, x, y - 10, width, size=8, leading=11, color=HexColor("#B9C0BA") if dark else MUTED, max_height=24)


def card(c, x, y, w, h, dark=False):
    c.setFillColor(HexColor("#222624") if dark else PANEL)
    c.roundRect(x, y, w, h, 3, fill=1, stroke=0)


def cover(c, store):
    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    base.draw_image(c, store, "images/work/industrial-ai-detection/00-card.webp", 482, 0, W - 482, H, mode="cover", bg=DARK)
    c.setFillColor(DARK)
    c.rect(0, 0, 520, H, fill=1, stroke=0)
    c.setFillColor(GREEN)
    c.rect(M, H - 76, 34, 4, fill=1, stroke=0)
    small_label(c, "SELECTED WORK / 2026", M, H - 106, HexColor("#AAB1AB"))
    p(c, "杨蜜萁 / Miki", M, H - 154, 410, size=42, leading=48, font="CN-Medium", color=WHITE, max_height=58)
    p(c, "高级产品设计师 / 高级 UIUX", M, H - 222, 400, size=19, leading=25, font="CN-Medium", color=WHITE, max_height=35)
    p(c, "复杂 B 端系统  ·  工业软件 / HMI  ·  AI 产品体验", M, H - 268, 405, size=11.5, leading=18, color=HexColor("#CBD1CC"), max_height=44)
    p(c, "10+ 年产品体验设计经验。把角色、流程、状态、权限与技术约束，转化为可验证、可开发、可交付的系统方案。", M, H - 336, 405, size=10.5, leading=17, color=HexColor("#9FA7A0"), max_height=72)
    rule(c, M, 89, 438, 89, HexColor("#4A504B"))
    p(c, "求职方向：复杂 B 端 / 工业软件 / AI 产品体验", M, 72, 390, size=9, leading=13, color=HexColor("#AAB1AB"))
    p(c, "miqi723@163.com  /  mikistudio.com.cn", M, 48, 390, size=8.5, leading=12, color=HexColor("#AAB1AB"))
    c.setFillColor(HexColor("#AAB1AB"))
    c.setFont("CN-Regular", 7.5)
    c.drawRightString(W - 84, 19, "01 / 14")
    c.showPage()


def profile(c, store):
    page(c, 2, "01 / 个人定位")
    p(c, "把复杂系统中的角色、状态、权限与风险，\n转成可落地方案。", M, H - 76, 540, size=28, leading=34, font="CN-Medium", color=INK, max_height=76)
    p(c, "我是 Miki，高级产品设计师。长期处理复杂 B 端、工业 HMI、AI 应用和智能硬件场景。我的工作不止是输出界面，而是把模糊业务、用户任务、技术限制和交付风险放进同一套判断。", M, H - 154, 520, size=10.5, leading=17, color=MUTED, max_height=72)
    base.draw_image(c, store, "images/home-v2/about-portrait.png", 640, 307, 160, 198, mode="cover", radius=2, bg=DARK)
    small_label(c, "10+ 年", 640, 288, GREEN)
    p(c, "产品体验设计经验", 690, 293, 110, size=9, leading=12, font="CN-Medium", color=INK, max_height=20)
    proof = [
        ("01", "复杂工业系统", "多角色、状态、权限、异常与现场操作约束。", "工业 AI / PCBA / WMS"),
        ("02", "技术约束下取舍", "算法稳定性、渲染性能、定位延迟与设备差异。", "AI HMI / GPS / 5G"),
        ("03", "设计工程化", "原型验证、规则沉淀、设计 QA 与研发交付。", "AI 工作流 / Design System"),
    ]
    for i, (num, name, body, cases) in enumerate(proof):
        x = M + i * 254
        card(c, x, 145, 232, 126)
        c.setFillColor(GREEN if i != 1 else ORANGE)
        c.setFont("CN-Medium", 18)
        c.drawString(x + 14, 236, num)
        p(c, name, x + 52, 242, 160, size=12, leading=16, font="CN-Medium", color=INK, max_height=24)
        p(c, body, x + 14, 213, 204, size=8.8, leading=13, color=MUTED, max_height=42)
        small_label(c, cases, x + 14, 163, GREEN if i != 1 else ORANGE)
    small_label(c, "最近经历", M, 116)
    rule(c, M, 106, W - M, 106)
    p(c, "2022.07 - 至今  产品设计  /  珠海市万门科技有限公司", M, 89, 340, size=8.5, leading=12, color=INK)
    p(c, "2021.06 - 2022.06  用户体验经理 / 产品设计师  /  珠海小源科技", 390, 89, 410, size=8.5, leading=12, color=INK)
    c.showPage()


def selected_work(c, store):
    page(c, 3, "02 / 主案例")
    title(c, "三个主案例，证明三种复杂产品能力。", "每个项目先说清问题、我的贡献和为什么值得看。")
    rows = [
        ("images/work/industrial-ai-detection/09-statistics.webp", "01  工业 AI 视觉质检系统", "16 路相机、11 类缺陷、四类角色与 AI 接管边界。", "我的贡献：设计负责人；HMI、状态、权限与系统规则。", GREEN),
        ("images/work/pcba/03-new-system.webp", "02  PCBA 插件机控制系统", "在存量系统、现场习惯和研发排期约束下重构关键流程。", "我的贡献：流程重构、交互、状态规则与交付规范。", ORANGE),
        ("images/work/wms/05-template-all.webp", "03  WMS 智能仓储管理系统", "把 Web 管理端与 RF 现场端收敛为可复用的双端交付框架。", "我的贡献：双端任务分工、模式、反馈、权限与设计系统。", GREEN),
    ]
    for i, (img, name, problem, contribution, accent) in enumerate(rows):
        y = 350 - i * 137
        card(c, M, y, W - 2 * M, 116)
        base.draw_image(c, store, img, M + 10, y + 10, 210, 96, mode="contain", radius=2, bg=WHITE)
        dot(c, M + 246, y + 88, accent, 3)
        p(c, name, M + 260, y + 99, 470, size=14, leading=18, font="CN-Medium", color=INK, max_height=22)
        p(c, problem, M + 260, y + 67, 470, size=9.5, leading=14, color=INK, max_height=30)
        p(c, contribution, M + 260, y + 37, 470, size=8.7, leading=13, color=MUTED, max_height=28)
    small_label(c, "MORE WORK：GPS 定位系统 / 智能工厂数据大屏 / 5G Chatbot 规范", M, 66, MUTED)
    c.showPage()


def ai_overview(c, store):
    page(c, 4, "03 / 主案例 01 - 工业 AI")
    title(c, "工业 AI 视觉质检：把算法输出转成现场判断。", "从工程师工具，重构为四类工种可理解、可追溯、可安全接管的工业 HMI。")
    small_label(c, "项目结论", M, 417, GREEN)
    p(c, "面向铝材挤压产线，整合 2D + 3D 检测、16 路相机、11 类缺陷、统计、日志与权限管理。我的核心贡献是建立信息层级、角色边界和异常接管规则。", M, 402, 330, size=10, leading=16, color=INK, max_height=88)
    meta_grid(c, [("我的角色", "设计负责人"), ("交付", "AI 检测 HMI"), ("服务范围", "UIUX / 系统设计"), ("结果", "11 个核心模块交付并验收")], M, 292, 330, cols=2)
    evidence_image(c, store, "images/work/industrial-ai-detection/00-card.webp", 400, 213, 400, 258, "当前项目界面：检测画面、缺陷结果、统计与多端状态在同一系统中呈现。", mode="cover")
    small_label(c, "系统复杂度", M, 146)
    facts = [("16", "路工业相机"), ("11", "类缺陷识别"), ("4", "类现场角色"), ("11", "个核心模块")]
    for i, (v, lab) in enumerate(facts):
        x = M + i * 190
        stat(c, v, lab, x, 107, 150, GREEN if i != 2 else ORANGE)
    p(c, "公开版本仅展示脱敏界面；不展示未经授权的真实检测效率数据。", M, 56, 600, size=7.7, leading=11, color=MUTED)
    c.showPage()


def ai_decisions(c, store):
    page(c, 5, "03 / 主案例 01 - 问题、判断、证据")
    title(c, "三条问题链，对应三类产品判断。", "不让观看者自己猜：每张图都对应一个现场问题和一个设计取舍。")
    panels = [
        ("高密度信息判断", "问题：多路画面、缺陷和设备状态同时输出。", "判断：按产线物理方位组织主屏，关键状态优先。", "images/work/industrial-ai-detection/09-statistics.webp", GREEN),
        ("AI 输出可解释", "问题：算法结果不能直接等于最终判定。", "判断：暴露模型、阈值、检测条件与执行结果。", "images/work/industrial-ai-detection/13-control-settings.webp", ORANGE),
        ("四类角色边界", "问题：工程师、操作员、维护与质检权限不同。", "判断：用菜单级权限矩阵替代零散按钮控制。", "images/work/industrial-ai-detection/11-log-management.webp", GREEN),
    ]
    for i, (name, problem, decision, img, accent) in enumerate(panels):
        x = M + i * 254
        card(c, x, 99, 232, 306)
        small_label(c, f"0{i+1} / {name}", x + 14, 381, accent)
        p(c, problem, x + 14, 363, 204, size=8.5, leading=12.5, color=INK, max_height=38)
        p(c, decision, x + 14, 318, 204, size=8.5, leading=12.5, font="CN-Medium", color=INK, max_height=42)
        base.draw_image(c, store, img, x + 12, 119, 208, 151, mode="contain", radius=2, bg=WHITE)
        p(c, "界面证据", x + 14, 111, 100, size=7.5, leading=10, color=MUTED)
    c.setFillColor(DARK)
    c.roundRect(M, 48, W - 2 * M, 37, 3, fill=1, stroke=0)
    p(c, "结果：完成检测、统计、日志、权限等 11 个核心模块；界面、交互与权限资产通过开发团队和项目负责人验收并落地。", M + 16, 73, W - 2 * M - 32, size=8.6, leading=12, font="CN-Medium", color=WHITE, max_height=23)
    c.showPage()


def ai_boundary(c, store):
    page(c, 6, "03 / 主案例 01 - 人机边界与风险")
    title(c, "不让算法输出直接等于最终判定。", "工业 AI 的可信度来自可解释、可干预和可恢复，而不是把自动化做满。")
    small_label(c, "三级接管路径", M, 413, ORANGE)
    levels = [
        ("01", "轻度", "在线调参", "不中断任务，调整模型和检测条件。"),
        ("02", "中度", "人工接管", "异常结果进入人工确认路径；受工期限制未完整落地。"),
        ("03", "极端", "物理急停", "联动设备安全机制，保留最终人工控制。"),
    ]
    for i, (num, level, action, desc) in enumerate(levels):
        y = 337 - i * 86
        card(c, M, y, 314, 70)
        c.setFillColor(ORANGE if i == 2 else GREEN)
        c.setFont("CN-Medium", 17)
        c.drawString(M + 14, y + 40, num)
        p(c, f"{level} / {action}", M + 58, y + 55, 118, size=10.5, leading=14, font="CN-Medium", color=INK, max_height=22)
        p(c, desc, M + 58, y + 32, 236, size=8.2, leading=12, color=MUTED, max_height=32)
    evidence_image(c, store, "images/work/industrial-ai-detection/14-permission-system.webp", 386, 188, 414, 256, "模块总览：监控、参数、统计、日志、用户与控制设置形成统一系统边界。", mode="contain")
    c.setFillColor(DARK)
    c.roundRect(386, 71, 414, 80, 3, fill=1, stroke=0)
    small_label(c, "这个案例证明的能力", 404, 128, GREEN)
    p(c, "在算法稳定性、客户决策、开发成本和现场安全约束内，设计可解释、可接管、可持续维护的工业 HMI。", 404, 111, 376, size=9.3, leading=14, font="CN-Medium", color=WHITE, max_height=48)
    c.showPage()


def pcba_overview(c, store):
    page(c, 7, "04 / 主案例 02 - PCBA")
    title(c, "PCBA：保留现场习惯，重构关键流程。")
    p(c, "目标不是推翻旧系统，而是在存量逻辑、研发排期和真实产线风险中找到可上线的重构路径。", M, H - 148, 310, size=10.5, leading=16, color=MUTED, max_height=48)
    meta_grid(c, [("我的角色", "产品设计"), ("周期", "2 - 3 个月"), ("重点", "流程 / 交互 / 系统规则"), ("验证", "12 位操作员与组长 A/B 测试")], M, 414, 310, cols=2)
    small_label(c, "约束 - 判断", M, 292, ORANGE)
    bullet(c, "旧系统已形成肌肉记忆 -> 保留底层逻辑，只重构高频关键路径。", M, 274, 310, ORANGE, size=8.8)
    bullet(c, "交互与研发排期强耦合 -> 控制复杂度，优先可实现方案。", M, 230, 310, ORANGE, size=8.8)
    bullet(c, "系统直连真实产线 -> 高风险动作必须有权限校验与兜底。", M, 186, 310, ORANGE, size=8.8)
    evidence_image(c, store, "images/work/pcba/03-new-system.webp", 382, 278, 418, 190, "统一监控入口：产线进度、机台状态、订单与操作控制集中呈现。", mode="contain")
    evidence_image(c, store, "images/work/pcba/10-io-settings.webp", 382, 86, 418, 150, "A/B 可用性测试：面向 12 位操作员与组长比较布局、读取和操作效率。", mode="contain")
    c.showPage()


def pcba_results(c, store):
    page(c, 8, "04 / 主案例 02 - 交付与验证")
    title(c, "从“能操作”推进到“能管理、能追踪、能交付”。", "界面证据与验收指标放在同一页，明确设计变化与结果之间的关系。")
    evidence_image(c, store, "images/work/pcba/05-material-module.webp", M, 218, 360, 234, "物料与异常：把物料确认、在制状态和预警整合进同一任务路径。", mode="contain")
    evidence_image(c, store, "images/work/pcba/04-warning-dashboard.webp", 440, 218, 360, 234, "系统预警：把依赖人工巡检的异常转成按类型、状态和优先级分层的数字预警。", mode="contain")
    small_label(c, "上线与项目验收（网站现有脱敏口径）", M, 183, GREEN)
    results = [("90+", "真实产线订单验证"), ("80+", "一线反馈进入迭代"), ("+28%", "管理效率"), ("+17%", "插件效率"), ("-10%", "人工介入率"), ("-17%", "工程导入耗时")]
    for i, (v, lab) in enumerate(results):
        x = M + i * 126
        stat(c, v, lab, x, 140, 112, GREEN if i < 2 else ORANGE)
    p(c, "说明：结果仅使用当前项目页面已有数据；公开版本不展示客户敏感明细，也不将设备、算法与运营变化全部归因于设计。", M, 70, W - 2 * M, size=7.8, leading=11.5, color=MUTED, max_height=30)
    c.showPage()


def wms_overview(c, store):
    page(c, 9, "05 / 主案例 03 - WMS")
    title(c, "WMS：Web 管理端与 RF 现场端不是缩放关系。")
    p(c, "Web 负责全局配置与查询，RF 负责扫码、核对、确认和提交；跨端设计的核心是任务重组。", M, H - 148, 310, size=10.5, leading=16, color=MUTED, max_height=48)
    meta_grid(c, [("我的角色", "产品设计"), ("交付", "Web 管理端 + RF 终端"), ("场景", "多客户 / 多仓库 / 多流程"), ("目标", "标准化、可扩展交付")], M, 414, 310, cols=2)
    small_label(c, "关键矛盾", M, 293, ORANGE)
    bullet(c, "逐页定制无法承受长期交付与维护成本。", M, 275, 310, ORANGE, size=8.8)
    bullet(c, "照搬 Web 结构会拖慢 RF 单手扫码与现场核对。", M, 232, 310, ORANGE, size=8.8)
    bullet(c, "按钮级权限在多客户、多仓场景中配置成本过高。", M, 189, 310, ORANGE, size=8.8)
    evidence_image(c, store, "images/work/wms/04-rf-view.webp", 382, 279, 418, 177, "Web 模板矩阵：用标准模块组合覆盖多客户、多仓库的配置与查询场景。", mode="contain")
    evidence_image(c, store, "images/work/wms/05-template-all.webp", 382, 83, 418, 154, "RF 任务流：围绕收货、核对、异常与提交组织高频现场动作。", mode="contain")
    c.showPage()


def wms_rules(c, store):
    page(c, 10, "05 / 主案例 03 - 模式、风险与权限")
    title(c, "组件可以复用，流程必须按风险差异化。", "轻流程要快，重流程要慢；统一的是组件和规则，不是一刀切的业务逻辑。")
    panels = [
        ("01 / 四种 RF 模式", "images/work/wms/05-template-all.webp", "按业务复杂度组合待办、标准收货、按箱和按单流程。", GREEN),
        ("02 / 操作阻力分层", "images/work/wms/07-mode-lite.webp", "低风险弱反馈；中风险核对；高风险物理隔离并二次确认。", ORANGE),
        ("03 / 共享设计系统", "images/work/wms/09-mode-complex.webp", "统一字体、颜色、状态、组件与反馈规则，支持多端交付。", GREEN),
    ]
    for i, (name, img, desc, accent) in enumerate(panels):
        x = M + i * 254
        card(c, x, 137, 232, 270)
        small_label(c, name, x + 14, 383, accent)
        base.draw_image(c, store, img, x + 12, 224, 208, 142, mode="contain", radius=2, bg=WHITE)
        p(c, desc, x + 14, 205, 204, size=8.6, leading=12.5, color=INK, max_height=50)
    c.setFillColor(DARK)
    c.roundRect(M, 58, W - 2 * M, 68, 3, fill=1, stroke=0)
    small_label(c, "权限降维", M + 16, 105, GREEN)
    p(c, "将权限收敛为菜单权限、用户范围、仓库隔离三层模型：守住数据安全边界，同时降低多客户场景的系统维护负担。", M + 16, 89, W - 2 * M - 32, size=9.2, leading=14, font="CN-Medium", color=WHITE, max_height=40)
    c.showPage()


def ai_workflow(c, store):
    page(c, 11, "06 / AI 辅助设计工作流")
    title(c, "AI 提供速度，设计师负责判断与质量。", "AI 不替代问题定义、优先级、状态、权限和风险判断；它进入的是可验证、可校验的交付链路。")
    evidence_image(c, store, "images/work/ds-ai/04-ai-draft-vs-human.webp", M, 176, 470, 292, "AI 初稿 vs 人工精修：补全信息优先级、异常状态、权限边界与动作入口。", mode="contain")
    evidence_image(c, store, "images/work/ds-ai/05-qa-checklist.webp", 540, 253, 260, 215, "Demo 与风险清单：把数据、算法、权限、硬件和上线风险放到开发前。", mode="contain")
    card(c, 540, 176, 260, 56)
    small_label(c, "责任边界", 554, 211, ORANGE)
    p(c, "AI：草稿、变体、初步整理。设计师：上下文、取舍、状态、权限、风险、验收。", 554, 196, 232, size=8.3, leading=12, color=INK, max_height=34)
    steps = [("01", "需求拆解"), ("02", "方案探索"), ("03", "人工判断"), ("04", "规则 / QA"), ("05", "原型 / 交付")]
    for i, (num, name) in enumerate(steps):
        x = M + i * 151
        c.setFillColor(DARK if i in (0, 2, 4) else PANEL)
        c.roundRect(x, 61, 133, 70, 3, fill=1, stroke=0)
        c.setFillColor(GREEN if i == 2 else ORANGE if i == 3 else (WHITE if i in (0, 2, 4) else INK))
        c.setFont("CN-Medium", 12)
        c.drawString(x + 12, 101, num)
        p(c, name, x + 12, 88, 110, size=8.7, leading=12, font="CN-Medium", color=WHITE if i in (0, 2, 4) else INK, max_height=20)
    c.showPage()


def more_work(c, store):
    page(c, 12, "07 / More Work")
    title(c, "三项补充证据，展示能力迁移。", "不再用氛围图占面积，只保留每个项目最有辨识度的决策或交付证据。")
    rows = [
        ("GPS 载体轨迹定位", "images/work/gps-2/11-decision-map.webp", "技术约束", "精准定位需要 12 - 15 秒。", "设计判断", "默认概览 + 渐进式精准请求，避免全量加载阻塞。", GREEN),
        ("智能工厂数据大屏", "images/work/factory-dashboard/07-final-screen.webp", "业务问题", "产能、设备、质量和异常分散，管理层依赖后验报表。", "设计产出", "2 个月内从零构建集中监控与异常决策视图。", ORANGE),
        ("5G Chatbot 交互规范", "images/work/5g-chatbot/04-design-spec.webp", "技术约束", "原生短信控件受限，安卓设备渲染差异大。", "设计产出", "建立安全区与适配规则，并通过 40+ 次培训推广到 15 人团队。", GREEN),
    ]
    for i, (name, img, lab1, text1, lab2, text2, accent) in enumerate(rows):
        y = 347 - i * 137
        card(c, M, y, W - 2 * M, 116)
        base.draw_image(c, store, img, M + 10, y + 10, 210, 96, mode="contain", radius=2, bg=WHITE)
        dot(c, M + 244, y + 88, accent, 3)
        p(c, name, M + 258, y + 99, 235, size=13, leading=17, font="CN-Medium", color=INK, max_height=22)
        small_label(c, lab1, M + 258, y + 62, MUTED)
        p(c, text1, M + 322, y + 70, 190, size=8.5, leading=12, color=INK, max_height=28)
        small_label(c, lab2, M + 525, y + 62, accent)
        p(c, text2, M + 590, y + 70, 160, size=8.5, leading=12, color=INK, max_height=36)
    c.showPage()


def method(c):
    page(c, 13, "08 / 方法与证据地图")
    title(c, "方法不是口号，每一步都有项目产物。", "把拆业务、做判断、做原型和控风险，直接绑定到这本作品集里的证据。")
    items = [
        ("01", "拆业务", "工业 AI", "角色任务、权限边界、异常与接管路径", "产物：角色 / 任务 / 约束清单", GREEN),
        ("02", "做判断", "GPS + PCBA", "延迟下的渐进请求；保留现场肌肉记忆", "产物：方案取舍与关键流程", ORANGE),
        ("03", "做原型", "PCBA", "面向 12 位操作员与组长做 A/B 可用性测试", "产物：可演示原型与反馈记录", GREEN),
        ("04", "控风险", "WMS + 5G", "操作阻力、权限降维、设备安全区与 QA", "产物：规则、风险清单、验收标准", ORANGE),
    ]
    for i, (num, name, case_name, proof, output, accent) in enumerate(items):
        col = i % 2
        row = i // 2
        x = M + col * 386
        y = 282 - row * 170
        card(c, x, y, 360, 145, dark=(i in (0, 3)))
        c.setFillColor(accent)
        c.setFont("CN-Medium", 23)
        c.drawString(x + 16, y + 101, num)
        p(c, name, x + 72, y + 116, 110, size=14, leading=18, font="CN-Medium", color=WHITE if i in (0, 3) else INK, max_height=24)
        small_label(c, case_name, x + 16, y + 78, accent)
        p(c, proof, x + 16, y + 64, 328, size=8.8, leading=13, color=HexColor("#D4D9D5") if i in (0, 3) else INK, max_height=34)
        p(c, output, x + 16, y + 28, 328, size=8, leading=11, color=HexColor("#AAB1AB") if i in (0, 3) else MUTED, max_height=22)
    c.showPage()


def contact(c):
    page(c, 14, "09 / 联系方式", dark=True)
    c.setFillColor(GREEN)
    c.rect(M, H - 88, 34, 4, fill=1, stroke=0)
    p(c, "如果你的产品足够复杂，\n我可以帮你把它讲清楚、做出来。", M, H - 132, 690, size=34, leading=43, font="CN-Medium", color=WHITE, max_height=100)
    p(c, "高级产品设计师 / 高级 UIUX  ·  复杂 B 端系统  ·  工业软件 / HMI  ·  AI 产品体验", M, H - 257, 700, size=11.5, leading=18, color=HexColor("#B9C0BA"), max_height=36)
    rule(c, M, 288, W - M, 288, HexColor("#454B46"))
    small_label(c, "联系", M, 263, HexColor("#9FA79F"))
    meta_grid(c, [("邮箱", "miqi723@163.com"), ("作品集网站", "mikistudio.com.cn"), ("求职方向", "高级产品设计 / 高级 UIUX"), ("地区", "深圳 / 大湾区机会")], M, 233, 450, cols=2, dark=True)
    small_label(c, "经历", 520, 263, HexColor("#9FA79F"))
    exp = [
        ("2022 - 至今", "产品设计 / 珠海市万门科技有限公司"),
        ("2021 - 2022", "用户体验经理 / 珠海小源科技"),
        ("2019 - 2020", "UIUX 设计师 / 珠海达明科技、长园集团"),
        ("此前", "广东点控科技、银泰贸易、罗西尼"),
    ]
    for i, (year, role) in enumerate(exp):
        yy = 226 - i * 38
        p(c, year, 520, yy, 74, size=8.2, leading=11, font="CN-Medium", color=GREEN if i == 0 else HexColor("#8D958E"), max_height=18)
        p(c, role, 606, yy, 194, size=8.2, leading=11, color=HexColor("#CFD5D0"), max_height=28)
    p(c, "本材料使用当前网站在用内容与图片，涉密内容均已脱敏。", M, 55, 520, size=7.6, leading=11, color=HexColor("#8D958E"))
    c.showPage()


def build():
    base.WARNINGS = []
    base.register_fonts()
    store = base.AssetStore()
    c = canvas.Canvas(str(OUTPUT), pagesize=landscape(A4), pageCompression=1)
    c.setTitle("Miki Portfolio Selected Work CN Audited")
    c.setAuthor("Miki Yang")
    cover(c, store)
    profile(c, store)
    selected_work(c, store)
    ai_overview(c, store)
    ai_decisions(c, store)
    ai_boundary(c, store)
    pcba_overview(c, store)
    pcba_results(c, store)
    wms_overview(c, store)
    wms_rules(c, store)
    ai_workflow(c, store)
    more_work(c, store)
    method(c)
    contact(c)
    c.save()
    print(f"Generated: {OUTPUT}")
    print(f"Warnings: {len(base.WARNINGS)}")
    for warning in base.WARNINGS:
        print(warning)


if __name__ == "__main__":
    build()
