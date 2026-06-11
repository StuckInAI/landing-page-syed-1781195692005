import React from 'react'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-violet-500 to-fuchsia-500',
    title: 'AI-Powered Automation',
    description:
      "Automate repetitive tasks with intelligent workflows that learn and adapt to your team's unique processes over time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-fuchsia-500 to-pink-500',
    title: 'Real-Time Collaboration',
    description:
      'Work seamlessly with your team in real time. Share projects, leave comments, and track changes \ all in one place.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    title: 'Advanced Analytics',
    description:
      'Gain deep insights into team performance, project health, and business KPIs with stunning real-time dashboards.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, SSO, audit logs, and granular permissions keep your data safe and your team compliant.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-orange-500 to-amber-500',
    title: 'Powerful Integrations',
    description:
      'Connect with 200+ tools including Slack, GitHub, Jira, Figma, and Salesforce with one-click integrations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    title: 'Cloud-Native Platform',
    description:
      'Infinitely scalable infrastructure with 99.99% uptime SLA, global CDN, and automatic backups included.',
  },
]

export default function Features(): React.ReactElement {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Everything your team needs
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            One platform built to replace the patchwork of tools slowing your team down.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
