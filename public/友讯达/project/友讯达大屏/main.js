/* ─── Scroll Reveal ───────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── Nav Progress ────────────────────────────────────── */
const progress = document.querySelector('.nav-progress');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  if (progress) progress.style.width = pct + '%';
});

/* ─── Counter Animation ───────────────────────────────── */
function animateCounter(el, target, suffix = '', decimals = 0) {
  const duration = 1400;
  const start = performance.now();
  const isFloat = target % 1 !== 0 || decimals > 0;
  const step = now => {
    const elapsed = now - start;
    const raw = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - raw, 3);
    const val = eased * target;
    el.textContent = isFloat ? val.toFixed(decimals) + suffix : Math.floor(val) + suffix;
    if (raw < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const dec = parseInt(el.dataset.decimals || '0');
    animateCounter(el, target, suffix, dec);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ─── Chart defaults ──────────────────────────────────── */
Chart.defaults.color = '#7e7e7e';
Chart.defaults.font.family = "'Noto Sans SC', sans-serif";
Chart.defaults.font.size = 11;

const BLUE   = 'rgba(28,105,212,0.75)';
const BLUE_S = 'rgba(28,105,212,1)';
const ORANGE = 'rgba(234,103,43,0.8)';
const ORANGE_S = 'rgba(234,103,43,1)';
const GRID_COLOR = 'rgba(255,255,255,0.05)';

/* ─── Chart 1: 大数据产业规模 (Bar) ─────────────────── */
const ctx1 = document.getElementById('chart1');
if (ctx1) {
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['2017', '2018', '2019', '2020'],
      datasets: [{
        data: [1500, 1981.8, 2434.6, 2887.4],
        backgroundColor: [BLUE, BLUE, BLUE, ORANGE],
        borderColor:     [BLUE_S, BLUE_S, BLUE_S, ORANGE_S],
        borderWidth: 1,
        borderRadius: 0,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      layout: { padding: { top: 20, bottom: 8, left: 4, right: 4 } },
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: '#1a1a1a', borderColor: '#3c3c3c', borderWidth: 1,
        callbacks: { label: ctx => ctx.parsed.y.toLocaleString() + ' 亿元' }
      }},
      scales: {
        x: { grid: { color: GRID_COLOR }, ticks: { color: '#7e7e7e' } },
        y: { min: 0, grid: { color: GRID_COLOR }, ticks: { color: '#7e7e7e', callback: v => v.toLocaleString() } }
      }
    }
  });
}

/* ─── Chart 2: 产业结构 (Doughnut) ──────────────────── */
const ctx2 = document.getElementById('chart2');
if (ctx2) {
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['大数据硬件', '大数据软件', '大数据服务'],
      datasets: [{
        data: [40, 20, 40],
        backgroundColor: ['rgba(28,105,212,0.85)', 'rgba(234,103,43,0.85)', 'rgba(0,174,239,0.7)'],
        borderWidth: 0,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      cutout: '62%',
      plugins: {
        legend: { position: 'bottom', labels: { color: '#7e7e7e', padding: 16, boxWidth: 10 } },
        tooltip: {
          backgroundColor: '#1a1a1a', borderColor: '#3c3c3c', borderWidth: 1,
          callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed + '%' }
        }
      }
    }
  });
}

/* ─── Chart 3: 市场规模预测 (Bar) ───────────────────── */
const ctx3 = document.getElementById('chart3');
if (ctx3) {
  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['2021E', '2022E', '2023E', '2024E', '2025E', '2026E'],
      datasets: [{
        data: [7589, 8744, 10099, 11614, 13329, 15323],
        backgroundColor: [BLUE, BLUE, BLUE, BLUE, BLUE, ORANGE],
        borderColor:     [BLUE_S, BLUE_S, BLUE_S, BLUE_S, BLUE_S, ORANGE_S],
        borderWidth: 1, borderRadius: 0,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      layout: { padding: { top: 20, bottom: 8, left: 4, right: 4 } },
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: '#1a1a1a', borderColor: '#3c3c3c', borderWidth: 1,
        callbacks: { label: ctx => ctx.parsed.y.toLocaleString() + ' 亿元' }
      }},
      scales: {
        x: { grid: { color: GRID_COLOR }, ticks: { color: '#7e7e7e' } },
        y: {
          min: 0,
          grid: { color: GRID_COLOR }, ticks: { color: '#7e7e7e',
          callback: v => (v/10000).toFixed(1) + 'w' }
        }
      }
    }
  });
}

/* ─── TV screen mini-bar heights ─────────────────────── */
const bars = document.querySelectorAll('.tv-chart-bar');
const heights = [30, 55, 42, 70, 48, 85, 38, 62];
bars.forEach((b, i) => { b.style.height = (heights[i % heights.length]) + '%'; });
