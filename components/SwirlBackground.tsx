'use client'

import { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

const PARTICLE_COUNT = 700
const PARTICLE_PROPS = 9
const PROPS_LENGTH = PARTICLE_COUNT * PARTICLE_PROPS
const BASE_TTL = 60
const RANGE_TTL = 180
const BASE_SPEED = 0.5
const RANGE_SPEED = 1.5
const BASE_RADIUS = 1
const RANGE_RADIUS = 3
const BASE_HUE = 160
const RANGE_HUE = 55
const NOISE_STEPS = 6
const X_OFF = 0.0012
const Y_OFF = 0.0012
const Z_OFF = 0.0004
const BG_COLOR = 'hsla(218,70%,4%,1)'
const PULL_FACTOR = 0.0009

const TAU = 2 * Math.PI
const rand = (n: number) => n * Math.random()
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m
  return Math.abs(((t + hm) % m) - hm) / hm
}
const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b

export default function SwirlBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // P0-1: Respect prefers-reduced-motion (Apple HIG requirement)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const container = containerRef.current
    if (!container) return

    const canvasA = document.createElement('canvas')
    const canvasB = document.createElement('canvas')
    canvasB.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'
    container.appendChild(canvasB)

    const ctxA = canvasA.getContext('2d')!
    const ctxB = canvasB.getContext('2d')!
    const noise3D = createNoise3D()
    const particleProps = new Float32Array(PROPS_LENGTH)
    let attractX = 0
    let attractY = 0
    let tick = 0
    let rafId: number

    function resize() {
      const w = container!.offsetWidth
      const h = container!.offsetHeight
      canvasA.width = w
      canvasA.height = h
      canvasB.width = w
      canvasB.height = h
      // P0-2: Align attractor to headline visual center of mass
      // X: 3 lines of left-aligned text, visual center ≈ 50% width
      attractX = w * 0.50
      // Y: pt-28 nav offset + centered headline block ≈ 40% hero height
      attractY = h * 0.40
    }

    function spawnEdge(): [number, number] {
      const edge = Math.random()
      const w = canvasA.width
      const h = canvasA.height
      if (edge < 0.28) return [rand(w), 0]
      if (edge < 0.56) return [rand(w), h]
      if (edge < 0.78) return [0, rand(h)]
      return [w, rand(h)]
    }

    function initParticle(i: number) {
      const [x, y] = spawnEdge()
      particleProps.set([
        x, y, 0, 0, 0,
        BASE_TTL + rand(RANGE_TTL),
        BASE_SPEED + rand(RANGE_SPEED),
        BASE_RADIUS + rand(RANGE_RADIUS),
        BASE_HUE + rand(RANGE_HUE),
      ], i)
    }

    function initParticles() {
      tick = 0
      for (let i = 0; i < PROPS_LENGTH; i += PARTICLE_PROPS) initParticle(i)
    }

    function checkBounds(x: number, y: number) {
      return x > canvasA.width || x < 0 || y > canvasA.height || y < 0
    }

    function updateParticle(i: number) {
      const i2=i+1,i3=i+2,i4=i+3,i5=i+4,i6=i+5,i7=i+6,i8=i+7,i9=i+8
      const x = particleProps[i]
      const y = particleProps[i2]

      const n = noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * TAU
      const toCenterX = attractX - x
      const toCenterY = attractY - y

      const vx = lerp(particleProps[i3], Math.cos(n) + toCenterX * PULL_FACTOR, 0.5)
      const vy = lerp(particleProps[i4], Math.sin(n) + toCenterY * PULL_FACTOR, 0.5)

      const life = particleProps[i5]
      const ttl = particleProps[i6]
      const speed = particleProps[i7]
      const x2 = x + vx * speed
      const y2 = y + vy * speed
      const radius = particleProps[i8]
      const hue = particleProps[i9]

      // P1-3: Reduce particle alpha in text zone so type stays primary
      const inTextZone = y < canvasA.height * 0.58
      const alpha = fadeInOut(life, ttl) * (inTextZone ? 0.2 : 0.5)

      ctxA.save()
      ctxA.lineCap = 'round'
      ctxA.lineWidth = radius
      ctxA.strokeStyle = `hsla(${hue},100%,65%,${alpha})`
      ctxA.beginPath()
      ctxA.moveTo(x, y)
      ctxA.lineTo(x2, y2)
      ctxA.stroke()
      ctxA.restore()

      particleProps[i] = x2
      particleProps[i2] = y2
      particleProps[i3] = vx
      particleProps[i4] = vy
      particleProps[i5] = life + 1

      if (checkBounds(x, y) || life > ttl) initParticle(i)
    }

    function draw() {
      tick++
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height)
      ctxB.fillStyle = BG_COLOR
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height)

      for (let i = 0; i < PROPS_LENGTH; i += PARTICLE_PROPS) updateParticle(i)

      // Glow pass 1 — wide bloom
      ctxB.save()
      ctxB.filter = 'blur(12px) brightness(220%)'
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()
      // Glow pass 2 — tight corona
      ctxB.save()
      ctxB.filter = 'blur(5px) brightness(200%)'
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()
      // Base render
      ctxB.save()
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      // P2-5: Bottom vignette — darker bottom edge guides scroll
      ctxB.save()
      ctxB.globalCompositeOperation = 'source-over'
      const grad = ctxB.createLinearGradient(0, canvasB.height * 0.65, 0, canvasB.height)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, 'hsla(218,70%,4%,0.65)')
      ctxB.fillStyle = grad
      ctxB.fillRect(0, canvasB.height * 0.65, canvasB.width, canvasB.height * 0.35)
      ctxB.restore()


      rafId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      canvasB.remove()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden />
}
