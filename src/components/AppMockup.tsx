import { motion } from 'framer-motion'

const kpis = [
  { label: 'AOGs', value: '2', color: '#EF4444', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { label: 'Open Defects', value: '47', color: '#F59E0B', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { label: 'Work Packs', value: '23', color: '#A855F7', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { label: 'On-Time', value: '94%', color: '#10B981', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
]

const scheduleRows = [
  {
    tail: 'N789UA',
    tasks: [
      { label: 'Hydraulic Insp', start: 1, span: 3, color: '#EF4444', bg: 'bg-red-500/20', border: 'border-red-500/40' },
      { label: 'AOG — Active', start: 4, span: 2, color: '#00D4B8', bg: 'bg-cyan-500/20', border: 'border-cyan-500/40' },
      { label: 'C-Check', start: 7, span: 3, color: '#A855F7', bg: 'bg-purple-500/20', border: 'border-purple-500/40' },
    ],
  },
  {
    tail: 'N456AA',
    tasks: [
      { label: 'Engine Run', start: 1, span: 2, color: '#00D4B8', bg: 'bg-cyan-500/20', border: 'border-cyan-500/40' },
      { label: 'Avionics', start: 4, span: 4, color: '#A855F7', bg: 'bg-purple-500/20', border: 'border-purple-500/40' },
      { label: 'Dispatch', start: 9, span: 1, color: '#10B981', bg: 'bg-emerald-500/20', border: 'border-emerald-500/40' },
    ],
  },
  {
    tail: 'N123DL',
    tasks: [
      { label: 'Scheduled Mx', start: 2, span: 5, color: '#00D4B8', bg: 'bg-cyan-500/20', border: 'border-cyan-500/40' },
      { label: 'Parts Wait', start: 7, span: 2, color: '#F59E0B', bg: 'bg-amber-500/20', border: 'border-amber-500/40' },
    ],
  },
]

const timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00']
const COLS = 10

function GanttRow({ tail, tasks }: { tail: string; tasks: typeof scheduleRows[0]['tasks'] }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className="text-[10px] font-mono text-[#9BA3B0] w-14 flex-shrink-0">{tail}</span>
      <div className="flex-1 relative h-6 rounded overflow-hidden" style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '1px' }}>
        {Array.from({ length: COLS }).map((_, i) => (
          <div key={i} className="bg-[#1E2533]/30 rounded-sm" />
        ))}
        {tasks.map((t, i) => (
          <div
            key={i}
            className={`absolute top-0 bottom-0 rounded ${t.bg} border ${t.border} flex items-center px-1.5`}
            style={{
              left: `${((t.start - 1) / COLS) * 100}%`,
              width: `${(t.span / COLS) * 100 - 0.5}%`,
            }}
          >
            <span className="text-[9px] font-medium truncate" style={{ color: t.color }}>
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AppMockup() {
  return (
    <section className="py-24 bg-[#0A0D14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <span className="section-label">THE PLATFORM</span>
          <h2 className="section-title">One Pane of Glass. Every Active Event Visible.</h2>
          <p className="section-subtitle">
            The Pulse dashboard gives your maintenance control team total situational awareness —
            AOGs, work packs, parts ETAs, and technician utilization in one place.
          </p>
        </motion.div>

        {/* Browser + glow wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#00D4B8]/10 via-transparent to-[#A855F7]/10 rounded-3xl blur-2xl pointer-events-none" />

          {/* Browser chrome */}
          <div className="relative border border-[#1E2533] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Title bar */}
            <div className="bg-[#1E2533] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex-1 bg-[#111620] rounded-md px-3 py-1 max-w-xs mx-auto">
                <span className="text-xs text-[#9BA3B0] font-mono">app.traxai.aero/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-[#0A0D14] p-4 lg:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white text-sm lg:text-base">
                    Maintenance Control Tower
                  </h3>
                  <span className="text-xs text-[#9BA3B0]">April 15, 2026 — 14:32 UTC</span>
                </div>
                <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-3 py-1">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-semibold text-[#10B981]">Live</span>
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className={`${kpi.bg} border ${kpi.border} rounded-xl p-3`}
                  >
                    <div className="text-xl font-bold" style={{ color: kpi.color }}>
                      {kpi.value}
                    </div>
                    <div className="text-[11px] text-[#9BA3B0] mt-0.5">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="grid lg:grid-cols-3 gap-4">
                {/* Gantt left 2/3 */}
                <div className="lg:col-span-2 bg-[#111620] border border-[#1E2533] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white">Active Schedule</span>
                    <span className="text-[10px] text-[#9BA3B0]">Next 18 hours</span>
                  </div>
                  {/* Time header */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-14 flex-shrink-0" />
                    <div className="flex-1" style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
                      {timeSlots.map((t) => (
                        <span key={t} className="text-[9px] text-[#9BA3B0] text-center">{t}</span>
                      ))}
                    </div>
                  </div>
                  {scheduleRows.map((row) => (
                    <GanttRow key={row.tail} tail={row.tail} tasks={row.tasks} />
                  ))}
                  {/* Legend */}
                  <div className="flex gap-4 mt-3 pt-3 border-t border-[#1E2533]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-cyan-500/20 border border-cyan-500/40" />
                      <span className="text-[10px] text-[#9BA3B0]">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-purple-500/20 border border-purple-500/40" />
                      <span className="text-[10px] text-[#9BA3B0]">AI Assigned</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/40" />
                      <span className="text-[10px] text-[#9BA3B0]">Attention</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-red-500/20 border border-red-500/40" />
                      <span className="text-[10px] text-[#9BA3B0]">AOG</span>
                    </div>
                  </div>
                </div>

                {/* Chat panel right 1/3 */}
                <div className="bg-[#111620] border border-[#1E2533] rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#1E2533]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_6px_#A855F7]" />
                    <span className="text-xs font-semibold text-white">Sherlock</span>
                  </div>
                  <div className="bg-[#1E2533] rounded-xl rounded-tr-none px-3 py-2">
                    <p className="text-[11px] text-[#E8ECF2]">
                      Why is N789UA AOG on fault 29-10-03?
                    </p>
                  </div>
                  <div className="bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-xl rounded-tl-none px-3 py-2">
                    <p className="text-[11px] text-[#E8ECF2] leading-relaxed">
                      Hydraulic pump failure. P/N 476300-1 en route from MIA.{' '}
                      <span className="text-[#00D4B8]">ETA: 2h 15m</span>. MEL C — restricted ops
                      authorized.
                    </p>
                  </div>
                  <div className="bg-[#1E2533] rounded-xl rounded-tr-none px-3 py-2">
                    <p className="text-[11px] text-[#E8ECF2]">
                      Assign best available B2 tech?
                    </p>
                  </div>
                  <div className="bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-xl rounded-tl-none px-3 py-2">
                    <p className="text-[11px] text-[#E8ECF2] leading-relaxed">
                      Recommended:{' '}
                      <span className="text-[#A855F7] font-medium">Martinez, J.</span> — 737NG
                      certified, available 15:00.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="bg-[#0A0D14] border border-[#1E2533] rounded-lg px-3 py-2 flex items-center gap-2">
                      <span className="text-[11px] text-[#9BA3B0] flex-1">Ask Sherlock...</span>
                      <div className="w-5 h-5 rounded-full bg-[#A855F7]/20 flex items-center justify-center">
                        <span className="text-[#A855F7] text-[10px]">↑</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
