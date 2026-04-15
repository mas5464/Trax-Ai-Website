interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const scales = {
    sm: { icon: 28, textSize: 'text-sm', tracking: 'tracking-[0.15em]' },
    md: { icon: 34, textSize: 'text-base', tracking: 'tracking-[0.18em]' },
    lg: { icon: 44, textSize: 'text-xl', tracking: 'tracking-[0.2em]' },
  }
  const s = scales[size]

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon mark */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-icon-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D4B8" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="lg-stroke-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D4B8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Hexagon frame */}
        <path
          d="M20 3 L34.5 11.5 L34.5 28.5 L20 37 L5.5 28.5 L5.5 11.5 Z"
          fill="url(#lg-icon-grad)"
          fillOpacity="0.08"
          stroke="url(#lg-icon-grad)"
          strokeWidth="1.2"
        />

        {/* Neural network nodes */}
        {/* Top node */}
        <circle cx="20" cy="13" r="2.8" fill="white" />
        {/* Bottom-left node */}
        <circle cx="13" cy="26" r="2.2" fill="#00D4B8" />
        {/* Bottom-right node */}
        <circle cx="27" cy="26" r="2.2" fill="#A855F7" />

        {/* Connecting lines */}
        <line x1="20" y1="15.8" x2="13.8" y2="24" stroke="white" strokeWidth="1" strokeOpacity="0.45" />
        <line x1="20" y1="15.8" x2="26.2" y2="24" stroke="white" strokeWidth="1" strokeOpacity="0.45" />
        <line x1="15.2" y1="26" x2="24.8" y2="26" stroke="url(#lg-icon-grad)" strokeWidth="1" strokeOpacity="0.6" />
      </svg>

      {/* Wordmark */}
      <div className={`flex items-baseline gap-0 font-bold ${s.tracking} uppercase leading-none`}>
        <span className="text-white" style={{ fontWeight: 700, letterSpacing: '0.15em' }}>TRAX</span>
        <span
          className={`${s.textSize}`}
          style={{
            fontWeight: 800,
            letterSpacing: '0.1em',
            background: 'linear-gradient(135deg, #00D4B8, #A855F7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginLeft: '0.35em',
          }}
        >
          AI
        </span>
      </div>
    </div>
  )
}
