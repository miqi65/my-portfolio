export const HOME_V3 = {
    color: {
      bg: '#0A0A0A',
      bgDeep: '#050505',
      bgPanel: '#121212',
      bgPanelElevated: '#1A1A1A',
      text: '#F2F5EF',
      textMuted: '#A7AEA1',
      textSubtle: '#6F766B',
      accent: '#B8E351',
      accentHover: '#cbf765',
      accentSoft: 'rgba(184,227,81,0.1)',
      danger: '#9B302B',
      dangerSoft: 'rgba(155,48,43,0.1)',
      border: 'rgba(242,245,239,0.08)',
      borderStrong: 'rgba(242,245,239,0.16)',
      grid: 'rgba(242,245,239,0.03)',
    },
    layout: {
      container: 'mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16',
      sectionY: 'py-24 sm:py-32',
    },
    radius: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      full: '9999px',
    },
    motion: {
      ease: [0.22, 1, 0.36, 1],
      section: 0.5,
      hover: 0.2,
    },
  } as const