import React, { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small teams getting started.',
    color: 'from-slate-500 to-slate-600',
    features: [
      'Up to 5 team members',
      '10 active projects',
      '5GB storage',
      'Basic integrations (10)',
      'Email support',
      'Core analytics',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'For growing teams that need more power and flexibility.',
    color: 'from-violet-500 to-fuchsia-500',
    features: [
      'Up to 50 team members',
      'Unlimited projects',
      '100GB storage',
      'All integrations (200+)',
      'Priority support',
      'Advanced analytics',
      'AI automation',
      'Custom workflows',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For large organizations with advanced security and scale needs.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      '1TB storage',
      'All integrations + custom',
      '24/7 dedicated support',
      'Enterprise analytics',
      'AI automation + training',
      'SSO & advanced security',
      'SLA guarantee',
      'Custom onboarding',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing(): React.ReactElement {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprise charges. Pick the plan that fits your team.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800/60 rounded-full px-2 py-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !yearly ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                yearly ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-emerald-400 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-slate-900/60 border rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.popular
                  ? 'border-violet-500/60 shadow-lg shadow-violet-500/10 scale-105'
                  : 'border-slate-800/60 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {(yearly ? plan.yearlyPrice : plan.monthlyPrice) > 0 && (
                  <span className="text-slate-400 text-sm mb-1">/mo</span>
                )}
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <svg
                      className="w-4 h-4 text-emerald-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto text-center font-semibold py-3 px-6 rounded-full text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white glow-sm'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
