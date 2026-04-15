import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Product', href: '#platform' },
  { label: 'Agents', href: '#agents' },
  { label: 'Vision', href: '#vision' },
  { label: 'Customers', href: '#customers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0D14]/90 backdrop-blur-md shadow-lg border-b border-[#1E2533]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/airvoyant-logo.svg" alt="Trax AI" className="h-8" />
            <span className="font-bold text-white text-lg tracking-wide">TRAX AI</span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#9BA3B0] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#9BA3B0] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0D14]/95 backdrop-blur-md border-t border-[#1E2533] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[#9BA3B0] hover:text-white text-sm font-medium transition-colors text-left py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary text-sm w-full justify-center mt-2"
          >
            Request a Demo
          </button>
        </div>
      )}
    </nav>
  )
}
