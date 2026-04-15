import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00D4B8',
          50: '#E0FAF7',
          100: '#B3F3EC',
          500: '#00D4B8',
          600: '#00B89E',
        },
        purple: {
          DEFAULT: '#A855F7',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
        },
        surface: {
          DEFAULT: '#0A0D14',
          raised: '#111620',
          overlay: '#161C28',
          card: '#0F1420',
        },
        border: {
          DEFAULT: '#1E2533',
          focus: '#00D4B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyan-purple': 'linear-gradient(135deg, #00D4B8, #A855F7)',
        'gradient-purple-violet': 'linear-gradient(135deg, #A855F7, #7C3AED)',
        'gradient-cta': 'linear-gradient(135deg, #EC4899, #D946EF)',
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 212, 184, 0.2)',
        'purple-glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config
