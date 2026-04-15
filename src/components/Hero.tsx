import { useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []
    const COUNT = 80
    const CONNECT_DIST = 120

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random(),
        opacity: 0.15 + Math.random() * 0.25,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToAgents = () => {
    document.querySelector('#agents')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0D14]">
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />

      {/* Radial glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00D4B8] opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#A855F7] opacity-[0.07] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="section-label">THE FUTURE OF AVIATION MRO</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">AI-Powered</span>
              <br />
              <span className="text-white">Maintenance</span>
              <br />
              <span className="gradient-text">Intelligence</span>
            </h1>

            <p className="text-lg text-[#9BA3B0] leading-relaxed max-w-lg">
              From reactive firefighting to predictive operations — Trax AI orchestrates your
              entire MRO domain with human-approved AI agents.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                Request a Demo <ArrowRight size={16} />
              </button>
              <button onClick={scrollToAgents} className="btn-ghost">
                Explore Agents
              </button>
            </div>

            <p className="text-sm text-[#9BA3B0]">
              Trusted by 100+ airlines worldwide · 27 years of aviation expertise
            </p>
          </div>

          {/* Right column — floating chat widget */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#111620] border border-[#1E2533] rounded-2xl p-5 w-full max-w-md animate-float shadow-[0_0_40px_rgba(0,212,184,0.08)]">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#1E2533]">
                <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-sm font-semibold text-white">Sherlock · Decision Support</span>
              </div>

              {/* User bubble */}
              <div className="flex justify-end mb-3">
                <div className="bg-[#1E2533] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-[#E8ECF2]">
                    AOG on N789UA — hydraulic fault code 29-10-03
                  </p>
                </div>
              </div>

              {/* AI bubble */}
              <div className="flex justify-start mb-4">
                <div className="bg-[#00D4B8]/10 border border-[#00D4B8]/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[92%]">
                  <p className="text-sm text-[#E8ECF2] leading-relaxed">
                    Analyzing fleet history... Found{' '}
                    <span className="text-[#00D4B8] font-medium">3 similar defects</span> on 737NG
                    fleet. Recommended fix: replace hydraulic pump{' '}
                    <span className="text-[#00D4B8] font-medium">P/N 476300-1</span>. Parts
                    confirmed available at MIA.{' '}
                    <span className="text-[#A855F7] font-medium">ETA 2h 15m</span>. MEL C applies —
                    aircraft may continue with restrictions.
                  </p>
                </div>
              </div>

              {/* Metric row */}
              <div className="flex gap-3 pt-3 border-t border-[#1E2533]">
                <div className="flex items-center gap-2 bg-[#0A0D14] rounded-full px-3 py-1.5">
                  <span className="text-[#F59E0B]">⚡</span>
                  <span className="text-xs font-medium text-[#E8ECF2]">87% faster diagnosis</span>
                </div>
                <div className="flex items-center gap-2 bg-[#0A0D14] rounded-full px-3 py-1.5">
                  <span className="text-[#10B981]">✓</span>
                  <span className="text-xs font-medium text-[#E8ECF2]">MEL compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
