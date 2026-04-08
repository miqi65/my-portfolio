'use client'

import { useRef, useMemo, Suspense, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// ─── Vertex Shader ───────────────────────────────────────────────────────────
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // Subtle wave displacement on hover
    float dist = length(uv - uMouse);
    float wave = sin(dist * 12.0 - uTime * 3.0) * 0.018 * uHover;
    wave *= smoothstep(0.6, 0.0, dist);
    pos.z += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// ─── Fragment Shader ─────────────────────────────────────────────────────────
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  varying vec2 vUv;

  // Simple 2D noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  void main() {
    vec2 uv = vUv;

    // Liquid displacement based on noise + mouse proximity
    float dist = length(uv - uMouse);
    float proximity = smoothstep(0.55, 0.0, dist) * uHover;

    float n = noise(uv * 4.0 + uTime * 0.4) * 2.0 - 1.0;
    vec2 liquidOffset = vec2(n) * 0.018 * proximity;

    // Chromatic aberration strength: baseline + hover boost
    float aberration = 0.003 + proximity * 0.018;

    // RGB split along X axis
    float r = texture2D(uTexture, uv + liquidOffset + vec2(aberration, 0.0)).r;
    float g = texture2D(uTexture, uv + liquidOffset).g;
    float b = texture2D(uTexture, uv + liquidOffset - vec2(aberration, 0.0)).b;
    float a = texture2D(uTexture, uv + liquidOffset).a;

    // Subtle vignette
    float vignette = smoothstep(0.9, 0.4, length(uv - 0.5) * 1.2);
    vec3 color = vec3(r, g, b) * mix(1.0, vignette, 0.3);

    gl_FragColor = vec4(color, a);
  }
`

// ─── Shader Mesh ─────────────────────────────────────────────────────────────
function ImagePlane({ url }: { url: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  const texture = useTexture(url)
  texture.minFilter = THREE.LinearFilter
  texture.generateMipmaps = false

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    }),
    [texture]
  )

  const hoverTarget = useRef(0)

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return
    const mat = meshRef.current.material as THREE.ShaderMaterial
    mat.uniforms.uTime.value = clock.getElapsedTime()

    // Map pointer (-1..1) to UV (0..1)
    const mx = pointer.x * 0.5 + 0.5
    const my = pointer.y * 0.5 + 0.5
    mat.uniforms.uMouse.value.set(mx, my)

    // Smooth hover lerp
    mat.uniforms.uHover.value += (hoverTarget.current - mat.uniforms.uHover.value) * 0.06
  })

  const handlePointerEnter = useCallback(() => { hoverTarget.current = 1 }, [])
  const handlePointerLeave = useCallback(() => { hoverTarget.current = 0 }, [])

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <planeGeometry args={[viewport.width, viewport.height, 48, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

// ─── Placeholder texture generator (canvas) ──────────────────────────────────
function PlaceholderPlane() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Generate a dark industrial placeholder texture via canvas
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1280
    canvas.height = 720
    const ctx = canvas.getContext('2d')!

    // Background
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, 1280, 720)

    // Grid lines
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 1
    for (let x = 0; x < 1280; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 720); ctx.stroke()
    }
    for (let y = 0; y < 720; y += 80) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1280, y); ctx.stroke()
    }

    // Central content
    ctx.fillStyle = '#222222'
    ctx.fillRect(240, 200, 800, 320)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 48px Inter, system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('铝材 AI 视觉质检系统', 640, 340)

    ctx.fillStyle = '#888888'
    ctx.font = '20px Inter, system-ui, sans-serif'
    ctx.fillText('Industrial AI Vision Inspection', 640, 390)

    // Corner markers
    const corners = [[240,200],[1040,200],[240,520],[1040,520]]
    corners.forEach(([x,y]) => {
      ctx.strokeStyle = '#444444'
      ctx.lineWidth = 2
      ctx.strokeRect(x - 12, y - 12, 24, 24)
    })

    return new THREE.CanvasTexture(canvas)
  }, [])

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    }),
    [texture]
  )

  const hoverTarget = useRef(0)

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return
    const mat = meshRef.current.material as THREE.ShaderMaterial
    mat.uniforms.uTime.value = clock.getElapsedTime()
    const mx = pointer.x * 0.5 + 0.5
    const my = pointer.y * 0.5 + 0.5
    mat.uniforms.uMouse.value.set(mx, my)
    mat.uniforms.uHover.value += (hoverTarget.current - mat.uniforms.uHover.value) * 0.06
  })

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => { hoverTarget.current = 1 }}
      onPointerLeave={() => { hoverTarget.current = 0 }}
    >
      <planeGeometry args={[2, 1.125, 48, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function WebGLProject() {
  return (
    <section className="relative w-full py-24 overflow-hidden border-t border-[#F0F0F0]" id="works">
      <div className="max-w-[1170px] mx-auto px-5">
      {/* Section label */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-end">
        {/* Project info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">01 / Featured</p>
            <h2 className="text-[28px] md:text-[32px] font-bold leading-tight text-ink">
              铝材 AI 视觉质检系统
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#666666]">
            让 AI 辅助视觉检测。将机器视觉算法结果以对操作者友好的方式呈现，软硬件一体化 HMI
            设计，适配工厂环境的强光与噪声干扰。
          </p>

          <div className="flex flex-wrap gap-2">
            {['HMI', 'Industrial AI', 'Vision Inspection', 'Embedded UI'].map((tag) => (
              <span key={tag} className="text-[11px] border border-faint px-3 py-1 rounded-full text-muted tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <a href="/Project_P1/index.html" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex items-center gap-2 group w-fit"
              whileHover={{ gap: '12px' }}
            >
              <span className="text-[13px] tracking-wider uppercase font-medium text-ink">View Case</span>
              <div className="w-6 h-px bg-ink transition-all duration-300 group-hover:w-10" />
            </motion.div>
          </a>
        </motion.div>

        {/* WebGL Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="cursor-scale relative w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <Canvas
            camera={{ position: [0, 0, 1.2], fov: 60 }}
            gl={{ antialias: true, alpha: false }}
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <Suspense fallback={
              <Html center>
                <div className="text-white text-sm font-light tracking-wider">Loading...</div>
              </Html>
            }>
              <ImagePlane url="/images/p1-cover-hero.png" />
            </Suspense>
          </Canvas>
          <a
            href="/Project_P1/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'absolute', inset: 0, zIndex: 10 }}
            aria-label="查看铝材 AI 视觉质检系统案例"
          />
        </motion.div>
      </div>
      </div>
    </section>
  )
}
