import { useEffect, useRef } from 'react'

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const ripples: { x: number; y: number; birth: number; speed: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    function spawnRipple() {
      if (!canvas) return
      ripples.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        birth: time,
        speed: 0.6 + Math.random() * 0.4,
      })
      if (ripples.length > 8) ripples.shift()
    }

    for (let i = 0; i < 3; i++) {
      ripples.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        birth: -i * 120,
        speed: 0.6 + Math.random() * 0.4,
      })
    }

    let spawnTimer = 0

    function draw() {
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)

      time++
      spawnTimer++

      if (spawnTimer > 180) {
        spawnRipple()
        spawnTimer = 0
      }

      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r]
        const age = (time - ripple.birth) * ripple.speed

        for (let ring = 0; ring < 5; ring++) {
          const radius = age * 1.2 + ring * 60
          const maxRadius = Math.max(w, h) * 1.2
          if (radius > maxRadius) continue

          const life = 1 - radius / maxRadius
          const alpha = Math.max(0, life * 0.12 * (1 - ring * 0.15))

          if (alpha <= 0) continue

          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(10, 186, 181, ${alpha})`
          ctx.lineWidth = 1.5 - ring * 0.15
          ctx.stroke()
        }

        const maxAge = (Math.max(w, h) * 1.2) / (ripple.speed * 1.2)
        if (age > maxAge + 300) {
          ripples.splice(r, 1)
        }
      }

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const yOffset = h * 0.25 + i * h * 0.25
        for (let x = 0; x <= w; x += 4) {
          const y =
            yOffset +
            Math.sin(x * 0.003 + time * 0.008 + i * 1.5) * 30 +
            Math.sin(x * 0.007 + time * 0.012 + i * 0.8) * 15
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(10, 186, 181, ${0.04 - i * 0.008})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
