import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PingFang SC', 'Noto Sans SC', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['PingFang SC', 'Noto Sans SC', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        paper: '#FFFFFF',
        muted: '#888888',
        faint: '#CCCCCC',
        'hero-bg': '#0f0f0f',
      },
      cursor: {
        none: 'none',
      },
    },
  },
  plugins: [],
}
export default config
