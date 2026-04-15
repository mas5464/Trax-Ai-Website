import { motion } from 'framer-motion'
import { airlineLogos } from '../data/agents'

export default function CustomerLogos() {
  const doubled = [...airlineLogos, ...airlineLogos]

  return (
    <section id="customers" className="py-20 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9BA3B0]">
            Trusted by the World's Leading Airlines
          </p>
        </motion.div>

        {/* Logo strip with fade edges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0D14] to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0D14] to-transparent" />

          <div className="logos-track gap-6">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 bg-white/10 rounded-xl p-4 h-20 w-40 flex items-center justify-center"
              >
                <img
                  src={logo.file}
                  alt={logo.name}
                  className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const fallback = document.createElement('span')
                      fallback.className = 'text-xs font-semibold text-white/60 text-center leading-tight'
                      fallback.textContent = logo.name
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
