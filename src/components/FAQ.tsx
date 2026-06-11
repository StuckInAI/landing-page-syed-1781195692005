import React, { useState } from 'react'

const faqs = [
  {
    question: 'How does the free plan work?',
    answer:
      'The Starter plan is completely free forever — no credit card required. You get access to core features for up to 5 team members and 10 active projects. Upgrade anytime when your team needs more.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you\'ll be charged the prorated difference immediately. When you downgrade, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a limit on integrations?',
    answer:
      'The Starter plan includes 10 integrations. The Pro and Enterprise plans include all 200+ available integrations. Enterprise customers can also request custom integrations as part of their contract.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified, GDPR compliant, and offer SSO, audit logs, and granular permissions on Enterprise plans.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter users get access to our documentation and community forum. Pro users get priority email support with a 24-hour response time. Enterprise customers receive 24/7 dedicated support with a named account manager.',
  },
  {
    question: 'Do you offer a free trial for paid plans?',
    answer:
      'Yes! The Pro plan comes with a 14-day free trial — no credit card required. Enterprise customers can request a custom proof-of-concept trial. We want you to be confident before you commit.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Absolutely. You own your data. You can export all projects, tasks, and analytics in CSV, JSON, or PDF formats at any time from your account settings. We also support full data portability if you choose to leave.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer:
      'We\'ll notify you via email when you\'re approaching your plan limits. We won\'t cut off your access suddenly. You\'ll have a grace period to either clean up or upgrade, and we\'ll work with you to find the right solution.',
  },
]

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Can\'t find the answer you\'re looking for? Reach out to our support team.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm pr-4 group-hover:text-violet-300 transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
