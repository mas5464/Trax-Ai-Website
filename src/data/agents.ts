export interface Agent {
  id: string
  name: string
  description: string
  metric: string
  metricLabel: string
  icon: string
  color: string
  status: string
  screenshot?: string
  tagline?: string
  features?: string[]
  impact?: { label: string; value: string }[]
}

export const agents: Agent[] = [
  {
    id: 'agent-core',
    name: 'Agent Core',
    tagline: 'Every AI decision. Human-approved.',
    description: 'Central orchestration hub governing all AI agents. Every action — schedule change, PO issuance, deferral — requires B1/B2 engineer approval before execution.',
    metric: 'Human-in-Loop',
    metricLabel: 'Every action',
    icon: 'cpu',
    color: '#00D4B8',
    status: 'Live Q1 2026',
    screenshot: '/screenshots/agent-core.png',
    features: [
      'Multi-agent coordination & governance',
      'Human approval gates on every action',
      'Full audit trail with Cedar policy controls',
      'Append-only records for compliance',
      'Real-time agent health monitoring',
    ],
    impact: [
      { label: 'Approval Latency', value: '< 30s' },
      { label: 'Audit Coverage', value: '100%' },
      { label: 'Active Agents', value: '12' },
      { label: 'Override Rate', value: '8.4%' },
    ],
  },
  {
    id: 'sherlock',
    name: 'Sherlock',
    tagline: 'Defect to fix plan in seconds.',
    description: 'Decision support agent for defect diagnosis. Surfaces step-by-step repair guidance, similar past defects, parts availability, and MEL regulatory limits in seconds.',
    metric: '+30%',
    metricLabel: 'Productivity gain',
    icon: 'search',
    color: '#A855F7',
    status: 'Beta Q1 2026',
    screenshot: '/screenshots/sherlock.png',
    features: [
      'Step-by-step repair guidance from tech manuals',
      'Fleet history search for similar defects',
      'Real-time parts & tools availability check',
      'MEL & regulatory constraint surfacing',
      'Accelerated AOG diagnostic workflow',
    ],
    impact: [
      { label: 'Faster Diagnosis', value: '87%' },
      { label: 'FTE Reduction', value: '3.0' },
      { label: 'Annual Savings', value: '$390K' },
      { label: 'Unscheduled MX ↓', value: '20%' },
    ],
  },
  {
    id: 'mxplanner',
    name: 'MxPlanner Pro',
    tagline: 'From disruption to recovery in minutes.',
    description: 'Constraint-based schedule optimizer that balances labor, parts, tools, and regulatory requirements. Handles AOG replanning and predicts task demand 48–72 hours ahead.',
    metric: '+40%',
    metricLabel: 'Productivity gain',
    icon: 'calendar',
    color: '#00D4B8',
    status: 'MVP Q2 2026',
    screenshot: '/screenshots/mxplanner.png',
    features: [
      'Constraint-based schedule optimization',
      'Auto-generates optimized work packages',
      'AOG & disruption real-time replanning bot',
      'Predictive defect & task forecasting engine',
      'Dynamic aircraft utilization optimization',
    ],
    impact: [
      { label: 'Planning Time ↓', value: '33%' },
      { label: 'FTE Reduction', value: '5.0' },
      { label: 'Annual Savings', value: '$650K' },
      { label: 'Forecast Lead', value: '72h' },
    ],
  },
  {
    id: 'mel-advisor',
    name: 'MEL Advisor',
    tagline: 'Dispatch confidence. Zero compliance gaps.',
    description: 'Surfaces applicable Minimum Equipment List rules, JCAB/EASA Part 145 compliance requirements, and regulatory constraints in real time at the point of deferral.',
    metric: '100%',
    metricLabel: 'Compliance coverage',
    icon: 'shield',
    color: '#F59E0B',
    status: 'Q2 2026',
    screenshot: '/screenshots/mel-advisory.png',
    features: [
      'Instant MEL item lookup by defect description',
      'JCAB / EASA Part 145 / FAA rule surfacing',
      'Dispatch category & interval calculation',
      'Required operational & maintenance procedures',
      'Human approval gate before any deferral record',
    ],
    impact: [
      { label: 'Match Confidence', value: '76%+' },
      { label: 'Compliance', value: '100%' },
      { label: 'Lookup Time', value: '< 5s' },
      { label: 'Approval Required', value: 'Always' },
    ],
  },
  {
    id: 'ata-classification',
    name: 'ATA Classification',
    tagline: 'Natural language in. Correct ATA code out.',
    description: 'Auto-tags defects and work orders with correct ATA chapter codes from natural language input, eliminating manual classification errors and accelerating routing.',
    metric: '95%+',
    metricLabel: 'Confidence score',
    icon: 'tag',
    color: '#10B981',
    status: 'Live Q1 2026',
    screenshot: '/screenshots/ata-classification.png',
    features: [
      'Natural language defect description input',
      'AWS Bedrock Nova Pro AI classification',
      'ATA chapter, section & label resolution',
      'Confidence score with candidate matches',
      'Human feedback loop for continuous learning',
    ],
    impact: [
      { label: 'Avg Confidence', value: '95%' },
      { label: 'Latency', value: '1.3s' },
      { label: 'Misclassifications', value: '~0' },
      { label: 'ATA Chapters', value: '100+' },
    ],
  },
  {
    id: 'resource-planner',
    name: 'Resource Planner',
    tagline: 'Right tech. Right task. Right time.',
    description: 'Matches technicians to tasks by skill set, shift availability, and certifications. Assigns hangar bays, validates tool availability, and detects workload imbalances before they cascade.',
    metric: '+25%',
    metricLabel: 'Productivity gain',
    icon: 'users',
    color: '#A855F7',
    status: 'Beta Q2 2026',
    features: [
      'Skill & certification-based task matching',
      'Tool availability validation & bay assignment',
      'Intelligent shift rebalancing engine',
      'Resource shortage simulation & forecasting',
      'Real-time planner conflict alerts',
    ],
    impact: [
      { label: 'Planning Time ↓', value: '33%' },
      { label: 'FTE Reduction', value: '2.5' },
      { label: 'Annual Savings', value: '$325K' },
      { label: 'Cert Mismatches', value: '0' },
    ],
  },
  {
    id: 'airvoyant',
    name: 'Airvoyant',
    tagline: 'Smarter procurement. Lower cost. Faster parts.',
    description: 'AI-powered procurement intelligence that analyzes quotes, recommends deals, negotiates with vendors, consolidates demand across facilities, and auto-issues approved purchase orders.',
    metric: '+35%',
    metricLabel: 'Productivity gain',
    icon: 'package',
    color: '#EC4899',
    status: 'v1.0 Q2 2026',
    features: [
      'AI deal recommendation & vendor negotiation',
      'Automated purchase order generation',
      'Demand consolidation across facilities',
      'Order grouping & splitting optimization',
      'Vendor rating & performance scoring',
    ],
    impact: [
      { label: 'Procurement Cycle ↓', value: '25%' },
      { label: 'FTE Reduction', value: '4.5' },
      { label: 'Annual Savings', value: '$585K' },
      { label: 'Part Cost ↓', value: '12%' },
    ],
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'One screen. Every active event.',
    description: 'Live MRO control tower dashboard. Surfaces every open defect, AOG countdown, work package status, parts ETA, and technician utilization on a single pane of glass with one-click drill.',
    metric: 'Real-Time',
    metricLabel: 'Operational visibility',
    icon: 'activity',
    color: '#38BDF8',
    status: 'Q3 2026',
    screenshot: '/screenshots/pulse.png',
    features: [
      'Open defects with MEL time limit countdown',
      'Work package status by technician & bay',
      'Parts on order with ETA & delivery risk',
      'Technician utilization & overtime flags',
      'One-click drill into any active event',
    ],
    impact: [
      { label: 'Cascade Detection', value: '87%' },
      { label: 'AOG Duration ↓', value: '50%' },
      { label: 'Response Time', value: 'Real-time' },
      { label: 'Events Tracked', value: 'All' },
    ],
  },
]

export const stats = [
  { value: 1.95, prefix: '$', suffix: 'M', label: 'Estimated Annual Savings', decimals: 2 },
  { value: 33, prefix: '+', suffix: '%', label: 'Average Productivity Gain', decimals: 0 },
  { value: 15.0, prefix: '', suffix: ' FTE', label: 'Workforce Hours Recovered', decimals: 1 },
  { value: 24, prefix: '', suffix: '', label: 'Use Cases Across the Platform', decimals: 0 },
]

export const capabilities = [
  {
    id: 'planning',
    title: 'Intelligent Planning',
    description: 'Constraint-based schedule optimization that balances labor, parts, tools, and regulatory rules — with real-time AOG replanning when disruptions hit.',
    icon: 'layout-dashboard',
  },
  {
    id: 'decision',
    title: 'Decision Support',
    description: 'Step-by-step defect resolution drawing from fleet history, technical manuals, and safety databases — accelerating diagnosis from hours to minutes.',
    icon: 'brain',
  },
  {
    id: 'procurement',
    title: 'Procurement Intelligence',
    description: 'Automated deal analysis, vendor negotiation, demand consolidation, and purchase order generation — cutting procurement cycles by 20–25%.',
    icon: 'shopping-cart',
  },
  {
    id: 'resources',
    title: 'Resource Optimization',
    description: 'Labor matching by skill and certification, bay and tool slot assignment, shift rebalancing, and shortage forecasting before conflicts arise.',
    icon: 'users-2',
  },
]

export const roadmapQuarters = [
  {
    quarter: 'Q1 2026',
    color: '#00D4B8',
    items: ['eMRO Agent Core v1.0', 'ATA Classification Agent v1.0', 'Sherlock Beta'],
  },
  {
    quarter: 'Q2 2026',
    color: '#A855F7',
    items: ['Airvoyant Procurement v1.0', 'MxPlanner Pro MVP', 'Resource Planner Beta'],
  },
  {
    quarter: 'Q3 2026',
    color: '#EC4899',
    items: ['Sherlock v1.0', 'MxPlanner Pro Beta', 'MRO Agent Codex v1.0'],
  },
  {
    quarter: 'Q4 2026',
    color: '#38BDF8',
    items: ['Resource Planner v1.0', 'Full Agent Orchestration', 'MxPlanner Pro v1.0'],
  },
]

export const airlineLogos = [
  { name: 'United Airlines', file: '/logos/united.jpg' },
  { name: 'Qatar Airways', file: '/logos/qatar.jpg' },
  { name: 'WestJet', file: '/logos/westjet.jpg' },
  { name: 'JetStar', file: '/logos/jetstar.jpg' },
  { name: 'Horizon Air', file: '/logos/horizon.jpg' },
  { name: 'Astar', file: '/logos/astar.jpg' },
  { name: 'Air Berlin', file: '/logos/air-berlin.jpg' },
  { name: 'Virgin Blue', file: '/logos/virgin-blue.jpg' },
]
