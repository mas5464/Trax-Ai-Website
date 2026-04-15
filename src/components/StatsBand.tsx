import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { stats } from '../data/agents'

interface AnimatedNumberProps {
  value: number
  decimals: number
  prefix: string
  suffix: string
}

function AnimatedNumber({ value, decimals, prefix, suffix }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 })
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, motionValue, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals) + suffix
      }
    })
  }, [spring, prefix, suffix, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  )
}

export default function StatsBand() {
  return (
    <section className="bg-[#111620] border-y border-[#1E2533] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1
                  ? 'lg:border-r lg:border-[#1E2533]'
                  : ''
              } px-4`}
            >
              <div className="text-5xl font-bold text-white mb-2">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm text-[#9BA3B0] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
