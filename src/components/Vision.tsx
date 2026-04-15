import { motion } from 'framer-motion'
import { AlertTriangle, Flame, Database } from 'lucide-react'
import { roadmapQuarters } from '../data/agents'

const challenges = [
  {
    icon: <AlertTriangle size={22} className="text-[#F59E0B]" />,
    bg: 'bg-[#F59E0B]/10',
    border: 'border-[#F59E0B]/20',
    title: 'Manual Bottlenecks',
    description:
      'Procurement, planning & scheduling still rely on tribal knowledge and spreadsheets — creating delays and single points of failure.',
  },
  {
    icon: <Flame size={22} className="text-[#EF4444]" />,
    bg: 'bg-[#EF4444]/10',
    border: 'border-[#EF4444]/20',
    title: 'Reactive Operations',
    description:
      'Teams spend their days firefighting AOGs instead of preventing them — reacting to disruptions rather than anticipating them.',
  },
  {
    icon: <Database size={22} className="text-[#A855F7]" />,
    bg: 'bg-[#A855F7]/10',
    border: 'border-[#A855F7]/20',
    title: 'Data Overload',
    description:
      'Technicians are overwhelmed by disparate data sources — AMMs, CMMs, MEL, parts systems — with no unified intelligence layer.',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-[#111620]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 flex flex-col items-center gap-4"
        >
          <span className="section-label">THE 2026 ROADMAP</span>
          <h2 className="section-title">From Reactive to Predictive</h2>
        </motion.div>

        {/* Vision statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-[#9BA3B0] text-lg leading-relaxed max-w-3xl mx-auto mb-20"
        >
          The future of aviation MRO is orchestrated, autonomous, and human-approved. We're building
          the world's first end-to-end agentic AI platform for maintenance operations — where every
          decision is AI-informed and every action is engineer-approved.
        </motion.p>

        {/* Roadmap timeline */}
        <div className="relative mb-24">
          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 timeline-line rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {roadmapQuarters.map((q, i) => (
              <motion.div
                key={q.quarter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Node circle */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full border-2 flex items-center justify-center mb-6 shadow-lg"
                  style={{
                    backgroundColor: `${q.color}20`,
                    borderColor: q.color,
                    boxShadow: `0 0 20px ${q.color}30`,
                  }}
                >
                  <span className="text-xs font-bold text-white">{q.quarter.split(' ')[0]}</span>
                </div>

                {/* Card */}
                <div className="bg-[#0A0D14] border border-[#1E2533] rounded-2xl p-5 w-full">
                  <div
                    className="text-sm font-bold mb-3"
                    style={{ color: q.color }}
                  >
                    {q.quarter}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {q.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                          style={{ backgroundColor: `${q.color}20`, color: q.color }}
                        >
                          ✓
                        </span>
                        <span className="text-sm text-[#9BA3B0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Trax AI */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white">Why Trax AI?</h3>
          <p className="text-[#9BA3B0] mt-2">The problems we're solving — for real operators.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#0A0D14] border ${c.border} rounded-2xl p-6 flex flex-col gap-4`}
            >
              <div className={`${c.bg} ${c.border} border w-12 h-12 rounded-full flex items-center justify-center`}>
                {c.icon}
              </div>
              <h4 className="font-bold text-white text-lg">{c.title}</h4>
              <p className="text-[#9BA3B0] text-sm leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
