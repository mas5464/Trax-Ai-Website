const productLinks = [
  'Platform Overview',
  'Agent Core',
  'MxPlanner Pro',
  'Sherlock',
]

const agentLinks = [
  'Airvoyant',
  'Resource Planner',
  'MEL Advisor',
  'ATA Classification',
  'Pulse',
]

const companyLinks = [
  'About TRAX',
  'Careers',
  'Contact',
  'Privacy Policy',
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0D14] border-t border-[#1E2533]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/airvoyant-logo.svg" alt="Trax AI" className="h-8" />
              <span className="font-bold text-white text-lg">TRAX AI</span>
            </div>
            <p className="text-sm text-[#9BA3B0]">AI-Powered MRO Intelligence</p>
            <p className="text-xs text-[#9BA3B0] leading-relaxed">
              27 years of aviation expertise
            </p>
            <p className="text-xs text-[#9BA3B0]">
              © 2026 TRAX USA Corp. All rights reserved.
            </p>
          </div>

          {/* Col 2 — Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#9BA3B0] hover:text-[#00D4B8] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Agents */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Agents</h4>
            <ul className="flex flex-col gap-2.5">
              {agentLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#agents"
                    className="text-sm text-[#9BA3B0] hover:text-[#00D4B8] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#9BA3B0] hover:text-[#00D4B8] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1E2533] text-center">
          <p className="text-xs text-[#9BA3B0]">
            The world's leading provider of aviation maintenance, mobile and cloud solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
