< !DOCTYPE html >
    <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Production Dashboard</title>
                    <!-- 引入 ECharts 图表库 -->
                    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
                    <style>
                        :root {
                            --bg - dark: #1e212b;
                        --panel-bg: #272a37;
                        --text-main: #ffffff;
                        --text-muted: #8b92a5;
                        --cyan-glow: #00f2fe;
                        --green-glow: #4facfe;
                        --accent-green: #00d26a;
                        --accent-orange: #ff9900;
        }

                        body {
                            margin: 0;
                        padding: 20px;
                        background-color: var(--bg-dark);
                        color: var(--text-main);
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        display: flex;
                        height: 100vh;
                        box-sizing: border-box;
        }

                        /* 侧边栏模拟 */
                        .sidebar {
                            width: 80px;
                        background-color: #1a1d24;
                        border-radius: 12px;
                        margin-right: 20px;
        }

                        /* 主体网格布局 */
                        .dashboard-container {
                            flex: 1;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: auto auto auto;
                        gap: 20px;
        }

                        .panel {
                            background - color: var(--panel-bg);
                        border-radius: 12px;
                        padding: 20px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                        display: flex;
                        flex-direction: column;
        }

                        /* 主图表区域跨列 */
                        .main-chart-panel {
                            grid - column: span 2;
                        height: 350px;
        }

                        /* 顶部小指标卡片 */
                        .mini-card {
                            height: 120px;
        }

                        .panel-header {
                            display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 15px;
        }

                        .panel-title {
                            font - size: 16px;
                        font-weight: 600;
        }

                        .yield-number {
                            font - size: 36px;
                        font-weight: bold;
                        margin: 0;
        }

                        .yield-label {
                            font - size: 14px;
                        color: var(--text-muted);
        }

                        /* 图表容器 */
                        .chart-container {
                            flex: 1;
                        width: 100%;
        }

                        .status-text {
                            color: var(--accent-green);
                        font-weight: bold;
        }

                    </style>
                </head>
                <body>

                    <div class="sidebar"></div>

                    <div class="dashboard-container">
                        <!-- 核心主图表：Production Yield Overview -->
                        <div class="panel main-chart-panel">
                            <div class="panel-header">
                                <div>
                                    <div class="panel-title">Production Yield Overview</div>
                                    <div class="yield-number">98.5% <span class="yield-label">YIELD</span></div>
                                </div>
                                <select style="background: transparent; color: white; border: 1px solid #444; border-radius: 4px; padding: 5px;">
                                    <option>24 hours</option>
                                </select>
                            </div>
                            <div id="mainChart" class="chart-container"></div>
                        </div>

                        <!-- 右侧小卡片 1：AOI Unit A1 -->
                        <div class="panel mini-card" style="grid-column: 3; grid-row: 1;">
                            <div class="panel-header" style="margin-bottom: 0;">
                                <span class="panel-title">AOI Unit A1</span>
                                <span class="status-text">Online</span>
                            </div>
                            <div style="font-size: 12px; color: var(--text-muted);">Defect Rate <span style="float: right; color: white;">0.12%</span></div>
                            <div id="miniChart1" class="chart-container"></div>
                        </div>

                        <!-- 底部其他占位区域 (Live Map, Alerts 等) -->
                        <div class="panel" style="grid-column: span 2; height: 300px;">
                            <div class="panel-title">Live AOI Inspection Map</div>
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; color: var(--text-muted); border: 1px dashed #444; margin-top: 15px; border-radius: 8px;">
                                此处可使用 div 背景图 + 绝对定位的 CSS 动画发光圆点来实现电路板特效
                            </div>
                        </div>

                        <div class="panel" style="grid-column: 3; height: 300px;">
                            <div class="panel-title">Line Efficiency (OEE)</div>
                            <div id="gaugeChart" class="chart-container"></div>
                        </div>
                    </div>

                    <script>
        // 1. 初始化主折线图 (Production Yield Overview)
                        var mainChart = echarts.init(document.getElementById('mainChart'));
                        var mainOption = {
                            tooltip: {trigger: 'axis' },
                        grid: {left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
                        xAxis: {
                            type: 'category',
                        boundaryGap: false,
                        data: ['06:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                        axisLine: {lineStyle: {color: '#444' } },
                        axisLabel: {color: '#8b92a5' }
            },
                        yAxis: {
                            type: 'value',
                        min: 50,
                        max: 100,
                        axisLabel: {formatter: '{value}%', color: '#8b92a5' },
                        splitLine: {lineStyle: {color: '#333', type: 'dashed' } }
            },
                        series: [{
                            name: 'Yield',
                        type: 'line',
                        smooth: true, // 平滑曲线
                        symbol: 'none', // 隐藏节点
                        lineStyle: {
                            width: 4,
                        color: '#00f2fe',
                        shadowColor: 'rgba(0, 242, 254, 0.8)', // 发光效果
                        shadowBlur: 15,
                        shadowOffsetY: 5
                },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: 'rgba(0, 242, 254, 0.4)' },
                        {offset: 1, color: 'rgba(0, 242, 254, 0)' }
                        ])
                },
                        data: [52, 68, 58, 88, 72, 95, 98],
                        // 开启进入动画
                        animationDuration: 2000,
                        animationEasing: 'cubicOut'
            }]
        };
                        mainChart.setOption(mainOption);

                        // 2. 初始化右上角迷你发光折线图 (AOI Unit A1)
                        var miniChart1 = echarts.init(document.getElementById('miniChart1'));
                        var miniOption1 = {
                            grid: {left: 0, right: 0, top: 10, bottom: 0 },
                        xAxis: {type: 'category', show: false, data: ['1','2','3','4','5','6','7','8'] },
                        yAxis: {type: 'value', show: false, min: 'dataMin' },
                        series: [{
                            type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            width: 3,
                        color: '#00d26a', // 绿色
                        shadowColor: 'rgba(0, 210, 106, 0.5)',
                        shadowBlur: 10
                },
                        data: [10, 12, 11, 15, 13, 18, 16, 20],
                        animationDuration: 1500
            }]
        };
                        miniChart1.setOption(miniOption1);

                        // 窗口大小调整时自动适配图表大小
                        window.addEventListener('resize', function() {
                            mainChart.resize();
                        miniChart1.resize();
        });

        // 模拟数据动态更新（让图表真正"动"起来）
        setInterval(() => {
                            let data = mainOption.series[0].data;
                        data.push(95 + Math.random() * 4); // 随机生成新数据
                        data.shift(); // 移除老数据
                        mainChart.setOption({series: [{data: data }] });
        }, 3000); // 每3秒更新一次数据
                    </script>
                </body>
            </html>