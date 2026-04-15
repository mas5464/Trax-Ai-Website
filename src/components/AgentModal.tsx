import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Search,
  CalendarDays,
  Shield,
  Tag,
  Users,
  Package,
  Activity,
  X,
  CheckCircle2,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { Agent } from '../data/agents'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<LucideProps | any>> = {
  cpu: Cpu,
  search: Search,
  calendar: CalendarDays,
  shield: Shield,
  tag: Tag,
  users: Users,
  package: Package,
  activity: Activity,
}

interface AgentModalProps {
  agent: Agent
  onClose: () => void
}

// Animated placeholder when no screenshot is provided
function AnimatedPlaceholder({ color }: { color: string }) {
  const nodes = Array.from({ length: 6 }, (_, i) => i)
  return (
    <div className="relative w-full h-64 lg:h-full min-h-[260px] bg-[#080B12] rounded-b-xl overflow-hidden flex items-center justify-center">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Floating nodes */}
      {nodes.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            left: `${15 + i * 14}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
      {/* Central pulsing ring */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: `${color}60`, backgroundColor: `${color}15` }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}30` }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              {(() => {
                const Icon = Cpu
                return <Icon size={20} color={color} />
              })()}
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute w-24 h-24 rounded-full border"
          style={{ borderColor: `${color}30` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
  )
}

export default function AgentModal({ agent, onClose }: AgentModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const IconComponent = iconMap[agent.icon] ?? Cpu

  // Body scroll lock + Escape key
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = () => onClose()
  const handlePanelClick = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(3, 5, 8, 0.90)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: `${agent.color}1A` }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: '#A855F714' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Modal panel */}
      <motion.div
        ref={panelRef}
        className="relative w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto bg-[#0A0D14] border border-[#1E2533] rounded-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={handlePanelClick}
      >
        {/* Header strip */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E2533]">
          <div className="flex items-center gap-4">
            {/* Icon circle */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${agent.color}26` }}
            >
              <IconComponent size={22} color={agent.color} />
            </div>
            {/* Name + tagline */}
            <div>
              <h2 className="text-2xl font-bold text-white leading-tight">{agent.name}</h2>
              {agent.tagline && (
                <p className="text-sm text-[#9BA3B0] mt-0.5">{agent.tagline}</p>
              )}
            </div>
          </div>

          {/* Right: AI ACTIVE + status + close */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* AI ACTIVE indicator */}
            <div className="hidden sm:flex items-center gap-1.5">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs font-mono text-green-400">AI ACTIVE</span>
            </div>

            {/* Status badge */}
            <span
              className="hidden sm:block text-xs font-medium px-3 py-1 rounded-full border"
              style={{ color: agent.color, borderColor: `${agent.color}40` }}
            >
              {agent.status}
            </span>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1A1F2E] hover:bg-[#252B3B] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} className="text-[#9BA3B0]" />
            </button>
          </div>
        </div>

        {/* Body: two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* LEFT — Screenshot with scan-line animation */}
          <div className="order-1">
            {agent.screenshot ? (
              <div>
                {/* Browser chrome */}
                <div className="bg-[#1A1F2E] rounded-t-xl p-3 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="bg-[#0A0D14] rounded px-3 py-1 text-xs text-[#9BA3B0] font-mono flex-1 truncate">
                    app.traxai.aero/{agent.id}
                  </div>
                </div>
                {/* Screenshot container */}
                <div className="relative overflow-hidden rounded-b-xl">
                  <img
                    src={agent.screenshot}
                    alt={`${agent.name} screenshot`}
                    className="w-full object-cover object-top block"
                    style={{ maxHeight: '340px' }}
                  />
                  {/* Holographic overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${agent.color}0D, transparent)`,
                    }}
                  />
                  {/* Scan-line */}
                  <motion.div
                    className="absolute left-0 w-full h-[2px] pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)`,
                    }}
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Corner brackets */}
                  {/* Top-left */}
                  <div
                    className="absolute top-3 left-3 w-5 h-5 pointer-events-none"
                    style={{
                      borderTop: `2px solid ${agent.color}`,
                      borderLeft: `2px solid ${agent.color}`,
                    }}
                  />
                  {/* Top-right */}
                  <div
                    className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
                    style={{
                      borderTop: `2px solid ${agent.color}`,
                      borderRight: `2px solid ${agent.color}`,
                    }}
                  />
                  {/* Bottom-left */}
                  <div
                    className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
                    style={{
                      borderBottom: `2px solid ${agent.color}`,
                      borderLeft: `2px solid ${agent.color}`,
                    }}
                  />
                  {/* Bottom-right */}
                  <div
                    className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none"
                    style={{
                      borderBottom: `2px solid ${agent.color}`,
                      borderRight: `2px solid ${agent.color}`,
                    }}
                  />
                  {/* Bottom vignette */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-[#0A0D14]/60 to-transparent" />
                </div>
              </div>
            ) : (
              <div>
                {/* Browser chrome for placeholder */}
                <div className="bg-[#1A1F2E] rounded-t-xl p-3 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="bg-[#0A0D14] rounded px-3 py-1 text-xs text-[#9BA3B0] font-mono flex-1 truncate">
                    app.traxai.aero/{agent.id}
                  </div>
                </div>
                <AnimatedPlaceholder color={agent.color} />
              </div>
            )}
          </div>

          {/* RIGHT — Agent details */}
          <div className="order-2 flex flex-col gap-6">
            {/* Tagline / description heading */}
            {agent.tagline && (
              <h3 className="text-lg font-semibold text-white">{agent.tagline}</h3>
            )}

            {/* Description */}
            <p className="text-sm text-[#9BA3B0] leading-relaxed -mt-4">{agent.description}</p>

            {/* Features list */}
            {agent.features && agent.features.length > 0 && (
              <div className="flex flex-col gap-2">
                {agent.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                  >
                    <CheckCircle2 size={16} color={agent.color} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#9BA3B0]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Impact metrics */}
            {agent.impact && agent.impact.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-2">
                {agent.impact.map((kpi, index) => (
                  <motion.div
                    key={kpi.label}
                    className="bg-[#111620] border border-[#1E2533] rounded-xl p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.07 }}
                  >
                    <div className="text-2xl font-bold" style={{ color: agent.color }}>
                      {kpi.value}
                    </div>
                    <div className="text-xs text-[#9BA3B0] mt-1">{kpi.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
              <button
                className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold text-[#0A0D14] transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#00D4B8' }}
              >
                Request a Demo for {agent.name}
              </button>
              <button className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold text-[#9BA3B0] border border-[#1E2533] hover:border-[#2E3547] hover:text-white transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
