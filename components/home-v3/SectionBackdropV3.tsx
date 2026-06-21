'use client'

import { HOME_V3 } from './tokens'

export function GlobalFlowBackdropV3() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#0A0A0A]" />
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${HOME_V3.color.grid} 1px, transparent 1px), linear-gradient(to bottom, ${HOME_V3.color.grid} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_0%,rgba(184,227,81,0.05)_0%,transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_100%,rgba(242,245,239,0.02)_0%,transparent_40%)]" />
    </>
  )
}