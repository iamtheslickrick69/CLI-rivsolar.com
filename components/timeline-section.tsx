"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, ChevronRight, TrendingUp, AlertTriangle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineYear {
  year: string
  title: string
  rates: { utility: string; rate: string }[]
  description: string
  highlight?: string
  highlightIcon?: string
  isNow?: boolean
  isFuture?: boolean
}

const timelineData: TimelineYear[] = [
  {
    year: "2014",
    title: "The Baseline",
    rates: [
      { utility: "PG&E", rate: "21¢" },
      { utility: "SCE", rate: "17¢" },
      { utility: "SDG&E", rate: "22¢" },
    ],
    description: "California electricity was already expensive but manageable. Most families paid $150-180/month. Federal solar tax credit was 30%, but few homeowners took advantage.",
  },
  {
    year: "2018",
    title: "Solar Mandate",
    rates: [
      { utility: "PG&E", rate: "24¢" },
      { utility: "SCE", rate: "19¢" },
      { utility: "SDG&E", rate: "25¢" },
    ],
    description: "California becomes the first state in America to require solar panels on all new home construction. A turning point for residential solar adoption.",
    highlight: "FIRST STATE TO MANDATE SOLAR",
    highlightIcon: "🏛️",
  },
  {
    year: "2020",
    title: "Title 24 Update",
    rates: [
      { utility: "PG&E", rate: "28¢" },
      { utility: "SCE", rate: "23¢" },
      { utility: "SDG&E", rate: "32¢" },
    ],
    description: "California's building efficiency standards get stricter. Energy costs continue climbing as demand increases and infrastructure ages.",
    highlight: "RATES UP 25% IN 6 YEARS",
    highlightIcon: "📈",
  },
  {
    year: "2022",
    title: "Inflation Reduction Act",
    rates: [
      { utility: "PG&E", rate: "36¢" },
      { utility: "SCE", rate: "32¢" },
      { utility: "SDG&E", rate: "45¢" },
    ],
    description: "The 30% federal tax credit is extended through 2032. Best opportunity to go solar since the program began. Many homeowners rush to lock in savings.",
    highlight: "30% TAX CREDIT EXTENDED",
    highlightIcon: "💰",
  },
  {
    year: "2026",
    title: "Right Now",
    rates: [
      { utility: "PG&E", rate: "45¢" },
      { utility: "SCE", rate: "42¢" },
      { utility: "SDG&E", rate: "55¢" },
    ],
    description: "California has the highest electricity rates in the continental US. The average family now pays $300-400/month. Solar payback period is under 6 years.",
    highlight: "BEST TIME TO GO SOLAR",
    highlightIcon: "⚡",
    isNow: true,
  },
  {
    year: "2030",
    title: "Projected",
    rates: [
      { utility: "PG&E", rate: "60¢+" },
      { utility: "SCE", rate: "55¢+" },
      { utility: "SDG&E", rate: "70¢+" },
    ],
    description: "Based on current trends, rates could increase another 30-40%. Waiting costs the average homeowner $10,000+ in lost savings.",
    highlight: "DON'T WAIT",
    highlightIcon: "⚠️",
    isFuture: true,
  },
]

export function TimelineSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2026")

  const selectedData = timelineData.find((d) => d.year === selectedYear)

  // Calculate position for slider (0-100%)
  const selectedIndex = timelineData.findIndex(d => d.year === selectedYear)
  const sliderPosition = (selectedIndex / (timelineData.length - 1)) * 100

  return (
    <section className="relative z-20 overflow-hidden">
      {/* Background - Static image only for reliability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/r2/house3.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#333] rounded-full mb-4">
              <Zap className="w-4 h-4 text-[#a3a3a3]" />
              <span className="text-[#a3a3a3] text-sm font-medium uppercase tracking-wide">California Solar Timeline</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]"
              style={{
                letterSpacing: "-0.02em",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              The 6 Moments That Matter
            </h2>

            <p className="text-[#a3a3a3] max-w-xl mx-auto">
              Why waiting costs you more every year — and why 2026 is the year to act.
            </p>
          </motion.div>

          {/* Year Selector Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {timelineData.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setSelectedYear(item.year)}
                  className={cn(
                    "relative px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm",
                    selectedYear === item.year
                      ? "bg-white border-white"
                      : "bg-[#1a1a1a]/90 border-[#333] hover:border-[#444]"
                  )}
                >
                  {item.isNow && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-white text-black text-[10px] font-bold rounded-full">
                      NOW
                    </span>
                  )}
                  {item.isFuture && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#6b6b6b] text-white text-[10px] font-bold rounded-full">
                      SOON
                    </span>
                  )}
                  <p className={cn(
                    "text-xl sm:text-2xl font-bold transition-colors",
                    selectedYear === item.year ? "text-black" : "text-[#6b6b6b]"
                  )}>
                    {item.year}
                  </p>
                  <p className={cn(
                    "text-xs sm:text-sm font-medium transition-colors",
                    selectedYear === item.year ? "text-[#6b6b6b]" : "text-[#6b6b6b]"
                  )}>
                    {item.rates[0].rate}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Rate Growth Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 px-4"
          >
            <div className="relative">
              {/* Track */}
              <div className="h-3 bg-gradient-to-r from-[#333] via-[#555] to-white rounded-full overflow-hidden" />

              {/* Slider indicator */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-black rounded-full"
                animate={{ left: `calc(${sliderPosition}% - 10px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="flex justify-between mt-3 text-xs text-[#6b6b6b] font-medium">
              <span>17¢/kWh</span>
              <span className="text-white">70¢+/kWh</span>
            </div>
          </motion.div>

          {/* Expanded Details Card */}
          <div className="min-h-[340px]">
            <AnimatePresence mode="wait">
              {selectedData && (
                <motion.div
                  key={selectedData.year}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={cn(
                    "rounded-3xl border-2 p-5 sm:p-8 transition-colors flex flex-col",
                    selectedData.isNow ? "bg-[#111]/90 backdrop-blur-sm border-white" : "bg-[#1a1a1a]/90 backdrop-blur-sm border-[#333]"
                  )}
                >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        {selectedData.year}
                      </span>
                      {selectedData.isNow && (
                        <span className="flex items-center gap-1 px-3 py-1 bg-white text-black text-sm font-semibold rounded-full">
                          <Sparkles className="w-4 h-4" />
                          You Are Here
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white uppercase font-[family-name:var(--font-barlow-condensed)]">
                      {selectedData.title}
                    </h3>
                  </div>

                  {/* Rate Pills */}
                  <div className="flex flex-wrap gap-2">
                    {selectedData.rates.map((rate) => (
                      <div
                        key={rate.utility}
                        className="px-3 py-2 rounded-xl border border-[#333] bg-[#111] text-sm font-medium"
                      >
                        <span className="text-[#a3a3a3]">{rate.utility}</span>{" "}
                        <span className="font-bold text-white">{rate.rate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight Box */}
                {selectedData.highlight && (
                  <div className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl mb-4",
                    selectedData.isNow || selectedData.isFuture ? "bg-[#1a1a1a]" : "bg-[#111]"
                  )}>
                    <span className="text-2xl">{selectedData.highlightIcon}</span>
                    <span className="font-bold text-sm sm:text-base text-white">
                      {selectedData.highlight}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-[#a3a3a3] leading-relaxed text-sm sm:text-base">
                  {selectedData.description}
                </p>

                {/* CTA for "NOW" */}
                {selectedData.isNow && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-[#333]"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">Rates have more than doubled since 2014</span>
                      </div>
                      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white hover:bg-[#e5e5e5] text-black text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                        LOCK IN TODAY'S RATES
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Warning for future */}
                {selectedData.isFuture && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="mt-6 pt-6 border-t border-[#333]"
                  >
                    <div className="flex items-center gap-3 text-[#a3a3a3]">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">Every year you wait costs an average of $2,500 in lost savings</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 mt-8"
          >
            {[
              { value: "114%", label: "Rate increase since 2014" },
              { value: "30%", label: "Federal tax credit" },
              { value: "<6 yrs", label: "Average payback period" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 sm:p-4 bg-[#1a1a1a] rounded-2xl border border-[#333]">
                <p className="text-lg sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] sm:text-sm text-[#a3a3a3] mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
