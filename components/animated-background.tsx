"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const isDark = resolvedTheme === "dark"

    // Particle system with theme-aware colors
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      type: "circle" | "square" | "triangle"
    }> = []

    // Create particles with different shapes for dark/light mode
    for (let i = 0; i < (isDark ? 60 : 40); i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isDark ? 0.8 : 0.4),
        vy: (Math.random() - 0.5) * (isDark ? 0.8 : 0.4),
        size: Math.random() * (isDark ? 3 : 2) + 1,
        opacity: Math.random() * (isDark ? 0.4 : 0.2) + 0.1,
        type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
      })
    }

    const drawParticle = (particle: (typeof particles)[0]) => {
      const colors = isDark
        ? [
            `rgba(34, 197, 94, ${particle.opacity})`,
            `rgba(59, 130, 246, ${particle.opacity})`,
            `rgba(168, 85, 247, ${particle.opacity})`,
          ]
        : [
            `rgba(5, 150, 105, ${particle.opacity})`,
            `rgba(37, 99, 235, ${particle.opacity})`,
            `rgba(147, 51, 234, ${particle.opacity})`,
          ]

      const color = colors[Math.floor(Math.random() * colors.length)]

      ctx.fillStyle = color

      switch (particle.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break
        case "square":
          ctx.fillRect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2)
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
          ctx.closePath()
          ctx.fill()
          break
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        drawParticle(particle)
      })

      // Draw connections with theme-aware colors
      if (isDark) {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(34, 197, 94, ${0.15 * (1 - distance / 120)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })
        })
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resolvedTheme])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="animated-bg absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60 dark:opacity-40" />
    </div>
  )
}
