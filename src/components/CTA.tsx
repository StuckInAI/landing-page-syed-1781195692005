import React from 'react'

export default function CTA(): React.ReactElement {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-violet-900/50 to-fuchsia-900/30 border border-violet-500/20 rounded-3xl p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-violet-600/20 blur-[80px]" />
          </div>

          <div className="relative">
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to supercharge<br />your workflow?
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join 12,000+ teams already using NovaSpark to automate tasks, collaborate in real time, and ship faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 glow"
              >
                Start for Free
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            <p className="text-slate-500 text-sm mt-6">No credit card required · Free forever plan available · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
