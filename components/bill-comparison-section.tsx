"use client"

import { motion } from "framer-motion"
import { TrendingDown, Zap, Sun, Battery, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"

export function BillComparisonSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-400 text-sm">See Your Savings</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl"
        >
          Real bills. Real savings.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-lg mb-12 max-w-xl"
        >
          See how much a real California homeowner saves every month with RIV Solar.
        </motion.p>

        {/* Bill Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Left Panel - Current Bill */}
              <div className="lg:w-[55%] border-b lg:border-b-0 lg:border-r border-zinc-800">
                {/* Header */}
                <div className="px-6 py-5 border-b border-zinc-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Your Current Bill</h3>
                      <p className="text-zinc-500 text-sm">Southern California Edison</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 text-3xl font-bold">$97.78</div>
                    <div className="text-zinc-500 text-sm">per month</div>
                  </div>
                </div>

                {/* Bill Image */}
                <div className="p-6 relative">
                  <div className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-xl">
                    <img
                      src="/scebill.webp"
                      alt="SCE Electric Bill"
                      className="w-full h-auto max-h-[400px] object-cover object-top"
                    />
                  </div>

                  {/* Pain points overlay */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2">
                      <div className="text-red-400 text-xs font-medium">Rate Increase</div>
                      <div className="text-white text-lg font-bold">+8%/year</div>
                    </div>
                    <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-4 py-2">
                      <div className="text-orange-400 text-xs font-medium">Peak Hours</div>
                      <div className="text-white text-lg font-bold">4-9pm</div>
                    </div>
                    <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-4 py-2">
                      <div className="text-yellow-400 text-xs font-medium">Monthly Usage</div>
                      <div className="text-white text-lg font-bold">418 kWh</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Arrow - Desktop */}
              <div className="hidden lg:flex absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50 border-4 border-zinc-900">
                  <ArrowRight className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="lg:hidden flex justify-center py-4 bg-zinc-900">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50 rotate-90">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Right Panel - With RIV Solar */}
              <div className="lg:w-[45%] bg-gradient-to-br from-zinc-900 to-zinc-950">
                {/* Header */}
                <div className="px-6 py-5 border-b border-zinc-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">With RIV Solar</h3>
                      <p className="text-zinc-500 text-sm">Your new electric bill</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-3xl font-bold">$11</div>
                    <div className="text-zinc-500 text-sm">per month</div>
                  </div>
                </div>

                {/* Savings Content */}
                <div className="p-6">
                  {/* Big Savings Number */}
                  <div className="text-center py-6 mb-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                    <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-3">
                      <TrendingDown className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Monthly Savings</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-1">$86.78</div>
                    <div className="text-zinc-400">saved every month</div>
                  </div>

                  {/* Savings Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-400 text-sm">Annual Savings</span>
                        <span className="text-green-400 font-bold text-xl">$1,041</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                        <div className="h-full w-[89%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-400 text-sm">25-Year Savings</span>
                        <span className="text-green-400 font-bold text-xl">$26,034</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-300">25-Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-300">$0 Down</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-300">30% Tax Credit</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-300">Battery Ready</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
                    <Battery className="w-5 h-5" />
                    Calculate Your Savings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
