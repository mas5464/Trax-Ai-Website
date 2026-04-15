import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import Capabilities from './components/Capabilities'
import AgentShowcase from './components/AgentShowcase'
import AppMockup from './components/AppMockup'
import Vision from './components/Vision'
import CustomerLogos from './components/CustomerLogos'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Capabilities />
        <AgentShowcase />
        <AppMockup />
        <Vision />
        <CustomerLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
