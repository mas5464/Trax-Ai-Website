import { motion } from 'framer-motion'
import { LayoutDashboard, Brain, ShoppingCart, Users, ArrowRight } from 'lucide-react'
import { capabilities } from '../data/agents'

const iconMap: Record<string, React.ReactNode> = {
  'layout-dashboard': <LayoutDashboard size={24} className="text-[#00D4B8]" />,
  'brain': <Brain size={24} className="text-[#00D4B8]" />,
  'shopping-cart': <ShoppingCart size={24} className="text-[#00D4B8]" />,
  'users-2': <Users size={24} className="text-[#00D4B8]" />,
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Capabilities() {
  return (
    <section id="platform" className="py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <span className="section-label">CAPABILITIES</span>
          <h2 className="section-title">One Platform. Every MRO Domain.</h2>
          <p className="section-subtitle">
            Four intelligent capability pillars working in concert to cover every dimension of
            maintenance operations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={item}
              whileHover={{ x: 4 }}
              className="bg-[#111620] border border-[#1E2533] rounded-2xl p-6 flex items-center gap-6 hover:border-[#00D4B8]/40 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="flex-shrink-0 bg-[#00D4B8]/10 rounded-full w-16 h-16 flex items-center justify-center">
                {iconMap[cap.icon] ?? <LayoutDashboard size={24} className="text-[#00D4B8]" />}
              </div>

              {/* Title */}
              <div className="flex-shrink-0 w-52">
                <h3 className="font-bold text-white text-lg">{cap.title}</h3>
              </div>

              {/* Description */}
              <p className="flex-1 text-[#9BA3B0] leading-relaxed">{cap.description}</p>

              {/* Arrow */}
              <div className="flex-shrink-0 text-[#00D4B8]">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
