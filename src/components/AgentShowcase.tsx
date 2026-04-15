import { motion } from 'framer-motion'
import {
  Cpu,
  Search,
  CalendarDays,
  Shield,
  Tag,
  Users,
  Package,
  Activity,
  ArrowRight,
} from 'lucide-react'
import { agents } from '../data/agents'

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={20} />,
  search: <Search size={20} />,
  calendar: <CalendarDays size={20} />,
  shield: <Shield size={20} />,
  tag: <Tag size={20} />,
  users: <Users size={20} />,
  package: <Package size={20} />,
  activity: <Activity size={20} />,
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function AgentShowcase() {
  return (
    <section id="agents" className="py-24 bg-[#111620]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <span className="section-label">AI AGENTS</span>
          <h2 className="section-title">Meet the Airvoyant Agent Suite</h2>
          <p className="section-subtitle">
            Eight specialized AI agents working in concert — each an expert in its domain,
            governed by the Agent Core orchestration hub.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={item}
              className="gradient-border-card group cursor-default"
            >
              <div className="p-5 flex flex-col gap-4 h-full">
                {/* Top row: icon + metric badge */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${agent.color}26` }}
                  >
                    <span style={{ color: agent.color }}>
                      {iconMap[agent.icon] ?? <Cpu size={20} />}
                    </span>
                  </div>
                  <div className="bg-[#0A0D14] border border-[#1E2533] text-xs rounded-full px-2 py-0.5 text-[#9BA3B0] text-right">
                    <span className="font-semibold text-white">{agent.metric}</span>
                    <br />
                    <span>{agent.metricLabel}</span>
                  </div>
                </div>

                {/* Name + description */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-white text-lg">{agent.name}</h3>
                  <p className="text-sm text-[#9BA3B0] leading-relaxed line-clamp-3">
                    {agent.description}
                  </p>
                </div>

                {/* Footer: status + arrow */}
                <div className="flex items-center justify-between pt-2 border-t border-[#1E2533]">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full border"
                    style={{ color: agent.color, borderColor: `${agent.color}40` }}
                  >
                    {agent.status}
                  </span>
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: agent.color }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
