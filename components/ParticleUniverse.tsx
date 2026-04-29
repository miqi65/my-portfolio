'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export interface ParticleUniverseProps {
  targetMode: number
  colorPalette: number
}

export default function ParticleUniverse({ targetMode, colorPalette }: ParticleUniverseProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Use refs so the animation loop always reads the latest value without re-running the effect
  const targetModeRef = useRef(targetMode)
  const colorPaletteRef = useRef(colorPalette)

  useEffect(() => { targetModeRef.current = targetMode }, [targetMode])
  useEffect(() => { colorPaletteRef.current = colorPalette }, [colorPalette])

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof window === 'undefined') return

    const isMobile = window.innerWidth < 768
    const PC = isMobile ? 65000 : 120000
    const BG = 0x030305
    let cameraZ = isMobile ? 40 : 28

    let animId: number
    let renderer: THREE.WebGLRenderer

    async function init() {
      // --- Dynamic imports (avoids SSR issues with Three.js addons) ---
      const [
        { EffectComposer },
        { RenderPass },
        { UnrealBloomPass },
        { ShaderPass },
      ] = await Promise.all([
        import('three/examples/jsm/postprocessing/EffectComposer.js'),
        import('three/examples/jsm/postprocessing/RenderPass.js'),
        import('three/examples/jsm/postprocessing/UnrealBloomPass.js'),
        import('three/examples/jsm/postprocessing/ShaderPass.js'),
      ])

      // --- Renderer ---
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
        depth: true,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = THREE.CineonToneMapping
      renderer.toneMappingExposure = 1.2
      renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'
      // 增加一层判断，如果 container 不是 null 才执行挂载
      if (container) {
        container.appendChild(renderer.domElement)
      }

      // --- Scene & Camera ---
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(BG, 0.015)
      scene.background = new THREE.Color(BG)

      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
      camera.position.z = cameraZ

      // --- Post-processing ---
      const renderPass = new RenderPass(scene, camera)

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, 0.4, 0.85
      )
      bloomPass.threshold = 0.1
      bloomPass.strength = 1.0
      bloomPass.radius = 0.8

      const chromaShader = {
        uniforms: {
          tDiffuse: { value: null as THREE.Texture | null },
          uTime: { value: 0 },
          uRGBShift: { value: 0.002 },
        },
        vertexShader: /* glsl */`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: /* glsl */`
          uniform sampler2D tDiffuse;
          uniform float uTime;
          uniform float uRGBShift;
          varying vec2 vUv;
          float rand(vec2 p) { return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
          void main() {
            vec2 uv = vUv;
            float d = distance(uv, vec2(0.5));
            vec2 off = (uv - 0.5) * d * uRGBShift;
            float r = texture2D(tDiffuse, uv + off).r;
            float g = texture2D(tDiffuse, uv).g;
            float b = texture2D(tDiffuse, uv - off).b;
            vec3 col = vec3(r, g, b);
            col += (rand(uv + uTime) - 0.5) * 0.04;
            gl_FragColor = vec4(col, 1.0);
          }`,
      }

      const finalPass = new ShaderPass(chromaShader)

      const composer = new EffectComposer(renderer)
      composer.addPass(renderPass)
      composer.addPass(bloomPass)
      composer.addPass(finalPass)

      // --- Particle Shaders ---
      const vertexShader = /* glsl */`
        uniform float uTime;
        uniform float uMode;
        uniform vec3  uHandRight;
        uniform float uHandRightState;
        uniform float uAudio;

        attribute vec3  aRandom;
        attribute float aIndex;

        varying vec3  vColor;
        varying float vAlpha;

        // --- Simplex noise ---
        vec3 mod289v3(vec3 x){ return x - floor(x*(1./289.))*289.; }
        vec4 mod289v4(vec4 x){ return x - floor(x*(1./289.))*289.; }
        vec4 permute(vec4 x){ return mod289v4(((x*34.)+1.)*x); }
        vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }
        float snoise(vec3 v){
          const vec2 C = vec2(1./6.,1./3.);
          const vec4 D = vec4(0.,.5,1.,2.);
          vec3 i  = floor(v + dot(v,C.yyy));
          vec3 x0 = v - i + dot(i,C.xxx);
          vec3 g  = step(x0.yzx,x0.xyz);
          vec3 l  = 1. - g;
          vec3 i1 = min(g.xyz,l.zxy);
          vec3 i2 = max(g.xyz,l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289v3(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.,i1.z,i2.z,1.))
            + i.y + vec4(0.,i1.y,i2.y,1.))
            + i.x + vec4(0.,i1.x,i2.x,1.));
          float n_ = 0.142857142857;
          vec3 ns = n_*D.wyz - D.xzx;
          vec4 j  = p - 49.*floor(p*ns.z*ns.z);
          vec4 x_ = floor(j*ns.z);
          vec4 y_ = floor(j - 7.*x_);
          vec4 x  = x_*ns.x + ns.yyyy;
          vec4 y  = y_*ns.x + ns.yyyy;
          vec4 h  = 1. - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy,y.xy);
          vec4 b1 = vec4(x.zw,y.zw);
          vec4 s0 = floor(b0)*2.+1.;
          vec4 s1 = floor(b1)*2.+1.;
          vec4 sh = -step(h,vec4(0.));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
          vec4 m = max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
          m = m*m;
          return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }

        // --- Shape functions ---
        vec3 getPosSphere(float idx){
          float phi   = acos(-1. + (2.*idx)/${PC}.);
          float theta = sqrt(${PC}. * 3.1415926)*phi;
          float r = 12. + aRandom.x*2.;
          return vec3(r*sin(phi)*cos(theta), r*sin(phi)*sin(theta), r*cos(phi));
        }
        vec3 getPosTorus(float idx){
          float t    = idx*0.1;
          float r    = 10. + aRandom.y*3.;
          float tube = 3.  + aRandom.x*2.;
          float ang  = (idx/${PC}.)*6.28*15.;
          return vec3((r+tube*cos(ang))*cos(t),(r+tube*cos(ang))*sin(t),tube*sin(ang));
        }
        vec3 getPosLattice(float idx){
          float size = 25.;
          float s    = pow(${PC}.,1./3.);
          float x = mod(idx,s);
          float y = mod(floor(idx/s),s);
          float z = floor(idx/(s*s));
          return (vec3(x,y,z)/s - .5)*size;
        }
        vec3 getPosVortex(float idx){
          float r = (idx/${PC}.)*18.;
          float ang = r*3.;
          float h = (aRandom.x-.5)*8.*(1.-r/20.);
          return vec3(r*cos(ang),r*sin(ang),h);
        }

        void main(){
          float t = uTime*0.15;
          float m = uMode;

          vec3 pS = getPosSphere(aIndex);
          vec3 pT = getPosTorus(aIndex);
          vec3 pL = getPosLattice(aIndex);
          vec3 pV = getPosVortex(aIndex);

          vec3 nb = vec3(
            snoise(vec3(aIndex*.01, t*.2, 0.)),
            snoise(vec3(aIndex*.01, 0.,  t*.2)),
            snoise(vec3(0., aIndex*.01,  t*.2))
          );
          pS += nb*4.; pT += nb*2.; pL += nb*1.5; pV += nb*2.;

          float c=cos(t*.3), s=sin(t*.3);
          pT.xy = mat2(c,-s,s,c)*pT.xy;
          pT.xz = mat2(c,-s,s,c)*pT.xz;

          float va=t-length(pV.xy)*.2, vc=cos(va), vs=sin(va);
          pV.xy = mat2(vc,-vs,vs,vc)*pV.xy;

          vec3 pos;
          if(m<=0.) pos=pS;
          else if(m<=1.) pos=mix(pS,pT,m);
          else if(m<=2.) pos=mix(pT,pL,m-1.);
          else if(m<=3.) pos=mix(pL,pV,m-2.);
          else pos=pV;

          pos *= (1. + uAudio*.4);

          // Mouse repulsion
          if(uHandRight.x < 90.){
            float d = distance(pos,uHandRight);
            float inf = smoothstep(12.,0.,d);
            pos += normalize(pos-uHandRight)*inf*8.;
          }

          vec4 mvPos = modelViewMatrix * vec4(pos,1.);
          gl_PointSize = (1.5 + aRandom.y*2. + uAudio*5.) * (30./-mvPos.z);
          gl_Position  = projectionMatrix * mvPos;

          float depthFade = smoothstep(60.,10.,-mvPos.z);
          vAlpha = depthFade * (0.2 + aRandom.z*0.6);
          vColor = pos;
        }
      `

      const fragmentShader = /* glsl */`
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec3  vColor;
        varying float vAlpha;
        void main(){
          vec2 c = gl_PointCoord - .5;
          if(length(c) > .5) discard;
          float glow = pow(1. - smoothstep(0.,.5,length(c)), 1.5);
          vec3 col = mix(uColor1, uColor2, smoothstep(-20.,20.,vColor.x+vColor.y));
          gl_FragColor = vec4(col, vAlpha*glow);
        }
      `

      // --- Geometry ---
      const geometry = new THREE.BufferGeometry()
      const idxArr = new Float32Array(PC)
      const rndArr = new Float32Array(PC * 3)
      for (let i = 0; i < PC; i++) {
        idxArr[i] = i
        rndArr[i * 3] = Math.random()
        rndArr[i * 3 + 1] = Math.random()
        rndArr[i * 3 + 2] = Math.random()
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PC * 3).fill(0), 3))
      geometry.setAttribute('aIndex', new THREE.BufferAttribute(idxArr, 1))
      geometry.setAttribute('aRandom', new THREE.BufferAttribute(rndArr, 3))

      const palettes = [
        { c1: new THREE.Color('#818cf8'), c2: new THREE.Color('#2dd4bf') }, // indigo / teal
        { c1: new THREE.Color('#f472b6'), c2: new THREE.Color('#60a5fa') }, // pink / blue
        { c1: new THREE.Color('#fb923c'), c2: new THREE.Color('#e11d48') }, // orange / rose
      ]

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uMode: { value: 0 },
          uHandRight: { value: new THREE.Vector3(100, 0, 0) },
          uHandRightState: { value: 0 },
          uAudio: { value: 0 },
          uColor1: { value: palettes[0].c1.clone() },
          uColor2: { value: palettes[0].c2.clone() },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      scene.add(new THREE.Points(geometry, material))

      // --- Interaction state ---
      let currentMode = 0
      const handRight = new THREE.Vector3(100, 0, 0)
      const handRightTarget = new THREE.Vector3(100, 0, 0)

      const onMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        handRightTarget.set(x * 30, y * 20, 0)
      }
      window.addEventListener('mousemove', onMouseMove)

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        composer.setSize(window.innerWidth, window.innerHeight)
        cameraZ = window.innerWidth < 768 ? 40 : 28
      }
      window.addEventListener('resize', onResize)

      // --- Animation loop ---
      const clock = new THREE.Clock()

      const animate = () => {
        animId = requestAnimationFrame(animate)
        const delta = clock.getDelta()
        const time = clock.elapsedTime

        // Mode transition (reads from ref — always fresh)
        const targetM = targetModeRef.current
        if (Math.abs(currentMode - targetM) > 0.001) {
          currentMode += (targetM - currentMode) * 0.05
        } else {
          currentMode = targetM
        }
        material.uniforms.uMode.value = currentMode
        material.uniforms.uTime.value = time
        finalPass.uniforms.uTime.value = time

        // Hand / mouse lerp
        handRight.lerp(handRightTarget, 0.1)
        material.uniforms.uHandRight.value.copy(handRight)

        // Color palette transition
        const cp = colorPaletteRef.current
        material.uniforms.uColor1.value.lerp(palettes[cp].c1, 0.05)
        material.uniforms.uColor2.value.lerp(palettes[cp].c2, 0.05)

        // Gentle camera sway
        const zTarget = cameraZ + Math.sin(time * 0.5) * 2
        camera.position.z += (zTarget - camera.position.z) * 0.02
        camera.position.x = Math.sin(time * 0.2) * 2
        camera.position.y = Math.cos(time * 0.15) * 2
        camera.lookAt(0, 0, 0)

        composer.render()
      }

      animate()

      return () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    }

    let cleanupFn: (() => void) | undefined
    init().then(fn => { cleanupFn = fn })

    return () => { cleanupFn?.() }
  }, []) // intentionally empty — props flow via refs

  return <div ref={containerRef} className="absolute inset-0" />
}
