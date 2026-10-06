import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; base: number; speed: number; phase: number; blue: boolean }

/**
 * Lightweight canvas of twinkling stars layered over the hero photo.
 * Draws a single static frame when the user prefers reduced motion,
 * and skips drawing while off-screen or when the tab is hidden.
 */
export default function Starfield({ density = 0.00018 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let width = 0
    let height = 0
    let frame = 0
    let visible = true

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase)
        ctx.globalAlpha = s.base * twinkle + 0.1
        ctx.fillStyle = s.blue ? '#9fdcff' : '#ffffff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      ;({ width, height } = canvas.getBoundingClientRect())
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = Array.from({ length: Math.round(width * height * density) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.5 + 0.25,
        speed: Math.random() * 0.0015 + 0.0005,
        phase: Math.random() * Math.PI * 2,
        blue: Math.random() < 0.35,
      }))
      draw(performance.now())
    }

    const loop = (t: number) => {
      if (visible && !document.hidden) draw(t)
      frame = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)
    if (!reduceMotion) frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
    }
  }, [density])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
}
