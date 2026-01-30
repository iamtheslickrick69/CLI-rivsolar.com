"use client"

import { motion } from "framer-motion"
import { TrendingDown, Zap, Sun, Battery, CheckCircle, ArrowRight } from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Panel - Current Bill */}
      <motion.div
        className="w-[55%] h-full bg-zinc-900/50 border-r border-zinc-800/50 flex flex-col shrink-0 relative"
        variants={panelVariants}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Your Current Bill</h3>
              <p className="text-zinc-500 text-xs">Southern California Edison</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-red-400 text-2xl font-bold">$97.78</div>
            <div className="text-zinc-500 text-xs">per month</div>
          </div>
        </div>

        {/* Bill Image */}
        <div className="flex-1 p-4 overflow-hidden relative">
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-800/50 shadow-2xl">
            <img
              src="/scebill.webp"
              alt="SCE Electric Bill"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute bottom-4 left-4 right-4 h-32 bg-gradient-to-t from-zinc-900 to-transparent rounded-b-xl pointer-events-none" />

          {/* Pain points */}
          <div className="absolute bottom-8 left-8 right-8 flex gap-3">
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-3 py-2">
              <div className="text-red-400 text-xs font-medium">Rate Increase</div>
              <div className="text-white text-sm font-bold">+8%/year</div>
            </div>
            <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-3 py-2">
              <div className="text-orange-400 text-xs font-medium">Peak Hours</div>
              <div className="text-white text-sm font-bold">4-9pm</div>
            </div>
            <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-3 py-2">
              <div className="text-yellow-400 text-xs font-medium">Usage</div>
              <div className="text-white text-sm font-bold">418 kWh</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center Arrow */}
      <motion.div
        className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        variants={panelVariants}
      >
        <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Right Panel - With RIV Solar */}
      <motion.div
        className="w-[45%] h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col"
        variants={panelVariants}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">With RIV Solar</h3>
              <p className="text-zinc-500 text-xs">Your new electric bill</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-green-400 text-2xl font-bold">$11</div>
            <div className="text-zinc-500 text-xs">per month</div>
          </div>
        </div>

        {/* Savings Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Big Savings Number */}
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <TrendingDown className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Monthly Savings</span>
            </div>
            <div className="text-6xl font-bold text-white mb-2">$86.78</div>
            <div className="text-zinc-400 text-lg">saved every month</div>
          </div>

          {/* Savings Breakdown */}
          <div className="space-y-4 flex-1">
            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-sm">Annual Savings</span>
                <span className="text-green-400 font-bold text-lg">$1,041</span>
              </div>
              <div className="w-full h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                <div className="h-full w-[89%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
              </div>
            </div>

            <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-sm">25-Year Savings</span>
                <span className="text-green-400 font-bold text-lg">$26,034</span>
              </div>
              <div className="w-full h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-zinc-300">25-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-zinc-300">$0 Down</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-zinc-300">30% Tax Credit</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-zinc-300">Battery Ready</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
              <Battery className="w-5 h-5" />
              Get Your Free Quote
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
