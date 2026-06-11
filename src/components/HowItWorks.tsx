import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Create your workspace',
    description:
      'Sign up in seconds and set up your team workspace. Invite colleagues and customize roles and permissions to fit your organization.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
  },
  {
    number: '02',
    title: 'Connect your tools',
    description:
      'Link your existing apps with one click. NovaSpark syncs data across Slack, GitHub, Jira, and 200+ other integrations automatically.',
    color: 'text-fuchsia-400',
    border: 'border-fuchsia-500/30',
    bg: 'bg-fuchsia-500/10',
  },
  {
    number: '03',
    title: 'Automate & optimize',
    description:
      'Let AI handle repetitive tasks, surface insights, and recommend optimizations — so your team spends time on high-value work.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
]

export default function HowItWorks(): React.ReactElement {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No complex setup, no steep learning curve. Three simple steps to transform how your team works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-500/40 via-fuchsia-500/40 to-cyan-500/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div
                className={`w-20 h-20 rounded-full ${step.bg} border ${step.border} flex items-center justify-center mb-6 relative z-10`}
              >
                <span className={`text-2xl font-extrabold ${step.color}`}>{step.number}</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '12K+', label: 'Teams onboarded' },
            { value: '4M+', label: 'Tasks automated' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '3min', label: 'Avg. setup time' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
