import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

const benefits = [
  'Personalized demo for your fleet size and operations',
  'ROI analysis based on your current workflow',
  '30-minute session, no commitment required',
]

const contactDetails = [
  { label: 'Miami', value: '+1 (305) 662 7400', icon: <Phone size={14} /> },
  { label: 'London', value: '+44 (0) 1403 275353', icon: <Phone size={14} /> },
  { label: 'Email', value: 'sales@emro.com', icon: <Mail size={14} /> },
]

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Demo request:', form)
    setSubmitted(true)
  }

  const inputClass =
    'bg-[#111620] border border-[#1E2533] rounded-xl px-4 py-3 text-white w-full focus:border-[#00D4B8] focus:outline-none transition-colors placeholder:text-[#9BA3B0]/50 text-sm'

  return (
    <section id="contact" className="py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <span className="section-label">REQUEST A DEMO</span>
          <h2 className="section-title">See Trax AI in Action</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-[#9BA3B0] leading-relaxed">
              Schedule a live demonstration with our team and see how Trax AI can transform your
              MRO operations.
            </p>

            {/* Benefits */}
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00D4B8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#E8ECF2] text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#1E2533]">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="text-[#00D4B8]">{c.icon}</span>
                  <span className="text-xs text-[#9BA3B0] w-14">{c.label}</span>
                  <span className="text-sm text-[#E8ECF2]">{c.value}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-[#1E2533]">
              {['JCAB', 'EASA Part 145', 'FAA Compliant'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#1E2533] text-[#9BA3B0]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-[#111620] border border-[#00D4B8]/30 rounded-2xl p-10 flex flex-col items-center gap-4 text-center h-full justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00D4B8]/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#00D4B8]" />
                </div>
                <h3 className="text-xl font-bold text-white">Request Received</h3>
                <p className="text-[#9BA3B0] max-w-xs">
                  Thank you! Our team will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#9BA3B0]">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#9BA3B0]">Airline / Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="United Airlines"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#9BA3B0]">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@airline.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#9BA3B0]">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (305) 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#9BA3B0]">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your fleet size and current MRO challenges..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-2">
                  Request Your Demo <ArrowRight size={16} />
                </button>

                <p className="text-xs text-[#9BA3B0] text-center">
                  By submitting, you agree to our Privacy Policy. We'll never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
