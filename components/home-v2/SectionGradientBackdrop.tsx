'use client'

type GradientVariant =
  | 'hero'
  | 'cases'
  | 'problems'
  | 'more-work'
  | 'method'
  | 'about'
  | 'contact'

export function SectionGradientBackdrop({ variant: _variant }: { variant: GradientVariant }) {
  return null
}

export function GlobalFlowBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.02) 28%, rgba(18,18,18,0.1) 100%), radial-gradient(52% 34% at 84% 8%, rgba(30,215,96,0.08) 0%, rgba(30,215,96,0) 58%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(30,215,96,0.06) 0%, rgba(30,215,96,0.018) 16%, rgba(18,18,18,0) 34%), linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0) 18%, rgba(30,215,96,0.018) 52%, rgba(18,18,18,0) 100%)',
          opacity: 0.82,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.012) 40%, rgba(18,18,18,0.06) 100%)',
        }}
      />
    </>
  )
}
