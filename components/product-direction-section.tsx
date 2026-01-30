"use client"

import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">How It Works</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          From consultation to solar in 4-8 weeks
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">A simple, transparent process.</span> We handle everything from
          permits to installation, so you can relax and watch your savings grow.
        </p>

        {/* Timeline Visualization */}
        <div className="relative w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Free Consultation</h3>
              <p className="text-zinc-500 text-sm">
                We assess your home, review your energy needs, and design a custom solar system for maximum savings.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Permits & Design</h3>
              <p className="text-zinc-500 text-sm">
                Our team handles all paperwork, permits, and utility coordination. You don't lift a finger.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Installation</h3>
              <p className="text-zinc-500 text-sm">
                Our in-house crew installs your system in 1-2 days. No subcontractors, just quality work.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Customer savings */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Real California Savings</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              See what our customers are saving every month after going solar with RIV.
            </p>

            <div className="space-y-4">
              {/* Maria */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    M
                  </div>
                  <div>
                    <div className="text-white font-medium">Maria G.</div>
                    <div className="text-zinc-500 text-sm">Temecula, CA</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-zinc-500 text-xs">Before</div>
                    <div className="text-red-400 font-medium">$340/mo</div>
                  </div>
                  <div className="text-2xl text-zinc-600">→</div>
                  <div>
                    <div className="text-zinc-500 text-xs">After</div>
                    <div className="text-green-400 font-medium">$11/mo</div>
                  </div>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 font-medium text-sm">Save $329/mo</span>
                  </div>
                </div>
              </div>

              {/* James */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    J
                  </div>
                  <div>
                    <div className="text-white font-medium">James T.</div>
                    <div className="text-zinc-500 text-sm">San Diego, CA</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-zinc-500 text-xs">Before</div>
                    <div className="text-red-400 font-medium">$280/mo</div>
                  </div>
                  <div className="text-2xl text-zinc-600">→</div>
                  <div>
                    <div className="text-zinc-500 text-xs">After</div>
                    <div className="text-green-400 font-medium">$12/mo</div>
                  </div>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 font-medium text-sm">Save $268/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Warranty */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">25-Year All-Inclusive Warranty</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              We stand behind our work with a comprehensive warranty that covers everything.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-zinc-300">Solar panel performance guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-zinc-300">Inverter replacement coverage</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-zinc-300">Workmanship and roof penetration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-zinc-300">Battery storage included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <span className="text-zinc-300">Free monitoring for life</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {/* Stat 1 */}
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">2,500+</div>
            <p className="text-zinc-500 text-sm leading-relaxed">California homeowners served</p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">$12M+</div>
            <p className="text-zinc-500 text-sm leading-relaxed">Saved for our customers</p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">1-2 Days</div>
            <p className="text-zinc-500 text-sm leading-relaxed">Average installation time</p>
          </div>

          {/* Stat 4 */}
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
            <p className="text-zinc-500 text-sm leading-relaxed">Federal tax credit available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
