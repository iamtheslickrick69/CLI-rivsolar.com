"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, ChevronRight, TrendingUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface RateData {
  year: string
  rate: number // cents per kWh (avg)
  bill: number // avg monthly bill
  isNow?: boolean
  isFuture?: boolean
}

const rateData: RateData[] = [
  { year: "2014", rate: 20, bill: 165 },
  { year: "2018", rate: 23, bill: 195 },
  { year: "2020", rate: 28, bill: 240 },
  { year: "2022", rate: 38, bill: 310 },
  { year: "2026", rate: 47, bill: 385, isNow: true },
  { year: "2030", rate: 62, bill: 510, isFuture: true },
]

const maxRate = 70 // for scaling bars

export function TimelineSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2026")
  const chartRef = useRef(null)
  const isInView = useInView(chartRef, { once: true, margin: "-100px" })

  const selectedData = rateData.find((d) => d.year === selectedYear)
  const baselineData = rateData[0] // 2014

  // Calculate increase from baseline
  const rateIncrease = selectedData ? Math.round(((selectedData.rate - baselineData.rate) / baselineData.rate) * 100) : 0
  const billIncrease = selectedData ? selectedData.bill - baselineData.bill : 0

  return (
    <section className="relative z-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/r2/house3.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80 text-sm font-medium uppercase tracking-wide">California Rate History</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]"
              style={{ letterSpacing: "-0.02em", fontWeight: 600, lineHeight: 1.2 }}>
              Watch Your Rates <span className="text-yellow-400">Climb</span>
            </h2>

            <p className="text-white/60 max-w-xl mx-auto">
              California electricity rates have more than doubled since 2014. See exactly how much you're paying — and how much you'll pay if you wait.
            </p>
          </motion.div>

          {/* Animated Bar Chart */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-end justify-between gap-2 sm:gap-4 h-[300px] px-4">
              {rateData.map((item, idx) => {
                const barHeight = (item.rate / maxRate) * 100
                const isSelected = selectedYear === item.year

                return (
                  <button
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className="flex-1 flex flex-col items-center group"
                  >
                    {/* Bar */}
                    <div className="w-full relative flex flex-col items-center justify-end h-[220px]">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: isInView ? `${barHeight}%` : 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                        className={cn(
                          "w-full rounded-t-xl transition-all duration-300 relative overflow-hidden",
                          isSelected
                            ? item.isNow
                              ? "bg-yellow-400"
                              : item.isFuture
                                ? "bg-red-500"
                                : "bg-white"
                            : "bg-white/30 group-hover:bg-white/50"
                        )}
                      >
                        {/* Pulse animation for NOW */}
                        {item.isNow && isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-yellow-300"
                            animate={{ opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>

                      {/* Rate label on bar */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 }}
                        className={cn(
                          "absolute -top-8 text-sm font-bold transition-colors",
                          isSelected ? "text-white" : "text-white/50"
                        )}
                      >
                        {item.rate}¢
                      </motion.div>
                    </div>

                    {/* Year label */}
                    <div className={cn(
                      "mt-3 text-center transition-all duration-300",
                      isSelected ? "scale-110" : ""
                    )}>
                      {item.isNow && (
                        <span className="block text-[10px] font-bold text-yellow-400 uppercase mb-1">Now</span>
                      )}
                      {item.isFuture && (
                        <span className="block text-[10px] font-bold text-red-400 uppercase mb-1">Soon</span>
                      )}
                      <span className={cn(
                        "text-sm sm:text-base font-bold transition-colors",
                        isSelected ? "text-white" : "text-white/50"
                      )}>
                        {item.year}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* X-axis line */}
            <div className="h-px bg-white/20 mx-4 mt-2" />
          </motion.div>

          {/* Bill Comparison Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {/* Then Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-white/50 text-sm uppercase tracking-wide mb-2">2014 Average Bill</p>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                ${baselineData.bill}<span className="text-xl text-white/50">/mo</span>
              </p>
              <p className="text-white/40 text-sm">At {baselineData.rate}¢ per kWh</p>
            </div>

            {/* Now Card */}
            <div className={cn(
              "rounded-2xl p-6 border-2 relative overflow-hidden",
              selectedData?.isNow
                ? "bg-yellow-400/10 border-yellow-400"
                : selectedData?.isFuture
                  ? "bg-red-500/10 border-red-500"
                  : "bg-white/10 border-white/30"
            )}>
              {selectedData?.isNow && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">YOU ARE HERE</span>
                </div>
              )}
              {selectedData?.isFuture && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">PROJECTED</span>
                </div>
              )}
              <p className="text-white/50 text-sm uppercase tracking-wide mb-2">{selectedYear} Average Bill</p>
              <p className={cn(
                "text-4xl sm:text-5xl font-bold mb-2",
                selectedData?.isNow ? "text-yellow-400" : selectedData?.isFuture ? "text-red-400" : "text-white"
              )}>
                ${selectedData?.bill}<span className="text-xl text-white/50">/mo</span>
              </p>
              <p className="text-white/40 text-sm">At {selectedData?.rate}¢ per kWh</p>
            </div>
          </motion.div>

          {/* Increase Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <TrendingUp className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">
                +{rateIncrease}% rate increase
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-2xl">💸</span>
              <span className="text-white font-semibold">
                +${billIncrease}/mo more than 2014
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-2xl">📅</span>
              <span className="text-white font-semibold">
                +${billIncrease * 12}/yr extra
              </span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-yellow-400/20 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg mb-2 uppercase tracking-wide">Lock in Today's Rates</p>
              <p className="text-white/70 mb-6">
                Solar lets you freeze your energy costs. Stop paying more every year — start generating your own power.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl transition-all uppercase tracking-wider font-[family-name:var(--font-barlow-condensed)]"
              >
                See Your Savings
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 mt-12"
          >
            {[
              { value: "135%", label: "Rate increase since 2014" },
              { value: "30%", label: "Federal tax credit available" },
              { value: "<6 yrs", label: "Average payback period" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-2xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
