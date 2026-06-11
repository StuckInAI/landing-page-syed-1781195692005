import React from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Streamline Inc.',
    avatar: 'SC',
    color: 'from-violet-500 to-fuchsia-500',
    quote:
      'NovaSpark cut our deployment time by 70%. The AI automation is genuinely impressive — it learned our workflows within days and started making smart suggestions we hadn\'t even considered.',
    stars: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Engineering Lead at Apex Labs',
    avatar: 'MW',
    color: 'from-cyan-500 to-blue-500',
    quote:
      'We replaced four separate tools with NovaSpark and our team collaboration has never been better. The real-time features are rock-solid and the analytics dashboard is beautiful.',
    stars: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Head of Product at Nexus Co.',
    avatar: 'PP',
    color: 'from-fuchsia-500 to-pink-500',
    quote:
      'Setup took less than 10 minutes and we were productive immediately. The integrations with our existing stack were seamless. Honestly the best SaaS purchase we\'ve made this year.',
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'VP Operations at BrightPath',
    avatar: 'JO',
    color: 'from-emerald-500 to-teal-500',
    quote:
      'The enterprise security features gave our compliance team peace of mind. SSO, audit logs, and granular permissions — everything we needed without any extra configuration.',
    stars: 5,
  },
  {
    name: 'Elena Russo',
    role: 'Founder at Orbit Digital',
    avatar: 'ER',
    color: 'from-orange-500 to-amber-500',
    quote:
      'As a startup, we needed something that could scale with us. NovaSpark\'s pricing is fair and the platform handles our growth without missing a beat. Highly recommend.',
    stars: 5,
  },
  {
    name: 'David Kim',
    role: 'Director of Engineering at CloudBase',
    avatar: 'DK',
    color: 'from-blue-500 to-indigo-500',
    quote:
      'The 99.99% uptime SLA isn\'t just marketing — we\'ve been running on NovaSpark for 8 months and haven\'t experienced a single outage. Exceptional reliability.',
    stars: 5,
  },
]

export default function Testimonials(): React.ReactElement {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of teams who have transformed how they work with NovaSpark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
