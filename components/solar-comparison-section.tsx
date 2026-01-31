"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import NumberFlow from "@number-flow/react"
import { SolarComparison } from "@/components/ui/feature-with-image-comparison"
import {
  TrendingUp,
  TrendingDown,
  Sun,
  Receipt,
  PiggyBank,
  Battery,
  Check,
  CloudOff,
  Zap,
  Shield,
  Sliders,
  ChevronRight,
  BarChart3,
  GitCompare,
  Clock,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

// ===== TAB 1: Without Solar vs With Solar Data =====
const withoutSolarItems = [
  {
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    text: "Hostage to rate hikes",
    detail: "Rates increase 6-9% every year",
  },
  {
    icon: <Receipt className="w-4 h-4 text-white" />,
    text: "$500+ summer bills",
    detail: "AC running = wallet draining",
  },
  {
    icon: <PiggyBank className="w-4 h-4 text-white" />,
    text: "Zero ROI",
    detail: "Every dollar to utility is gone forever",
  },
  {
    icon: <CloudOff className="w-4 h-4 text-white" />,
    text: "Dark during outages",
    detail: "When the grid goes down, you go dark",
  },
  {
    icon: <Sliders className="w-4 h-4 text-white" />,
    text: "No rate control",
    detail: "Utility sets the price, you just pay",
  },
  {
    icon: <Sun className="w-4 h-4 text-white" />,
    text: "Wasting free sunshine",
    detail: "Living in CA and paying for electricity?",
  },
]

const withSolarItems = [
  {
    icon: <Check className="w-4 h-4 text-purple-400" />,
    text: "Locked-in rates",
    detail: "Same payment for 25+ years",
  },
  {
    icon: <Receipt className="w-4 h-4 text-purple-400" />,
    text: "Bills under $20/month",
    detail: "Most customers see single digits",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-purple-400" />,
    text: "10-20% annual ROI",
    detail: "One of the best investments you can make",
  },
  {
    icon: <Battery className="w-4 h-4 text-purple-400" />,
    text: "Powered through blackouts",
    detail: "Battery keeps your lights on",
  },
  {
    icon: <Zap className="w-4 h-4 text-purple-400" />,
    text: "YOU control your rates",
    detail: "Generate your own power, set your own terms",
  },
  {
    icon: <Shield className="w-4 h-4 text-purple-400" />,
    text: "Energy independence",
    detail: "The grid becomes your backup",
  },
]

// ===== TAB 2: Rate Comparison Data =====
const rateData = [
  {
    utility: "SDG&E",
    rate: 55,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500",
    textColor: "text-red-400",
    borderColor: "border-red-500/30",
    sublabel: "Highest in USA",
    monthly: 385,
  },
  {
    utility: "SCE",
    rate: 42,
    color: "from-gray-400 to-gray-500",
    bgColor: "bg-gray-400",
    textColor: "text-gray-300",
    borderColor: "border-gray-400/30",
    sublabel: "So. California",
    monthly: 294,
  },
  {
    utility: "PG&E",
    rate: 45,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    sublabel: "No. California",
    monthly: 315,
  },
  {
    utility: "SOLAR",
    rate: 20,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500",
    textColor: "text-green-400",
    borderColor: "border-green-500/50",
    sublabel: "With RIV Solar",
    monthly: 140,
    isHighlight: true,
  },
]

const maxRate = Math.max(...rateData.map(d => d.rate))

// ===== TAB 3: Timeline Data =====
const timelineData = [
  { year: "2014", rate: 20, bill: 165 },
  { year: "2018", rate: 23, bill: 195 },
  { year: "2020", rate: 28, bill: 240 },
  { year: "2022", rate: 38, bill: 310 },
  { year: "2026", rate: 47, bill: 385, isNow: true },
  { year: "2030", rate: 62, bill: 510, isFuture: true },
]

const maxTimelineRate = 70

// ===== Animated Bar Component =====
function AnimatedBar({
  data,
  index,
  isInView
}: {
  data: typeof rateData[0]
  index: number
  isInView: boolean
}) {
  const heightPercent = (data.rate / maxRate) * 100
  const delay = index * 0.15

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center flex-1 max-w-[160px]"
    >
      <div className="relative w-full h-[300px] md:h-[350px] flex items-end justify-center">
        <div className="absolute inset-x-2 bottom-0 top-0 bg-[#1a1a1a] rounded-2xl border border-[#333]" />

        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: `${heightPercent}%` } : {}}
          transition={{
            duration: 0.8,
            delay: delay + 0.3,
            type: "spring",
            damping: 15
          }}
          className={`relative w-full mx-2 rounded-2xl bg-gradient-to-t ${data.color} ${data.isHighlight ? 'shadow-lg shadow-green-500/30' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.8 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10"
          >
            <p className="text-2xl md:text-3xl font-bold text-white text-center font-[family-name:var(--font-barlow-condensed)]">
              {isInView ? <NumberFlow value={data.rate} /> : 0}¢
            </p>
            <p className="text-[10px] text-white/70 text-center uppercase tracking-wide">per kWh</p>
          </motion.div>

          {data.isHighlight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: delay + 1 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1 shadow-lg shadow-green-500/30"
            >
              <TrendingDown className="w-3 h-3" />
              LOWEST
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.5 }}
        className="mt-4 text-center"
      >
        <p className={`font-bold text-lg md:text-xl ${data.isHighlight ? 'text-green-400' : 'text-white'} uppercase font-[family-name:var(--font-barlow-condensed)]`}>
          {data.utility}
        </p>
        <p className="text-[#6b6b6b] text-xs mt-0.5">{data.sublabel}</p>
        <p className={`text-sm mt-1 ${data.textColor} font-medium`}>
          ~${data.monthly}/mo
        </p>
      </motion.div>
    </motion.div>
  )
}

// ===== Tab Options =====
const tabs = [
  {
    id: "comparison",
    label: "Compare",
    shortLabel: "Compare",
    icon: GitCompare,
  },
  {
    id: "rates",
    label: "Rates",
    shortLabel: "Rates",
    icon: BarChart3,
  },
  {
    id: "timeline",
    label: "Timeline",
    shortLabel: "History",
    icon: Clock,
  },
]

// ===== Main Combined Section =====
export function SolarComparisonSection() {
  const [activeTab, setActiveTab] = useState("comparison")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [savingsAmount, setSavingsAmount] = useState(0)

  // Animate savings counter when rates tab is active
  useEffect(() => {
    if (isInView && activeTab === "rates") {
      const avgUtility = (385 + 294 + 315) / 3
      const savings = Math.round((avgUtility - 140) * 12)
      setTimeout(() => setSavingsAmount(savings), 1500)
    }
  }, [isInView, activeTab])

  return (
    <section ref={ref} className="py-20 px-6 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-[#a3a3a3] text-sm font-medium mb-6 uppercase tracking-wide"
          >
            <Zap className="w-4 h-4" />
            The Ultimate Comparison
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]"
          >
            <span className="text-white">Without Solar</span>
            {" "}vs{" "}
            <span className="text-purple-400">With Solar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#a3a3a3] mb-8"
          >
            See the real difference. Compare costs, benefits, and why California homeowners are making the switch.
          </motion.p>

          {/* Radio Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-1 md:gap-2 p-1 md:p-1.5 bg-[#1a1a1a] border border-[#333] rounded-full"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 uppercase tracking-wide
                  ${activeTab === tab.id
                    ? "bg-white text-black shadow-lg"
                    : "text-[#a3a3a3] hover:text-white"
                  }
                `}
              >
                <tab.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "comparison" && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Comparison Slider */}
              <SolarComparison
                withoutSolar={withoutSolarItems}
                withSolar={withSolarItems}
                withoutChartSrc="/charts/without-solar.webp"
                withChartSrc="/charts/with-solar.webp"
              />

              {/* Bottom CTA for comparison */}
              <div className="mt-10 text-center">
                <p className="text-[#a3a3a3] mb-4 text-base">
                  The choice is clear. Stop renting your power.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#e5e5e5] text-black font-semibold rounded-lg transition-all hover:scale-105 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                >
                  <Sun className="w-5 h-5" />
                  JOIN THE SOLAR SIDE
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === "rates" && (
            <motion.div
              key="rates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Bar Chart */}
              <div className="relative flex items-end justify-center gap-3 md:gap-6 mb-8">
                {rateData.map((data, index) => (
                  <AnimatedBar
                    key={data.utility}
                    data={data}
                    index={index}
                    isInView={isInView && activeTab === "rates"}
                  />
                ))}
              </div>

              {/* Savings callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="max-w-md mx-auto mb-8"
              >
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl text-center">
                  <p className="text-[#a3a3a3] text-sm mb-1">Average annual savings with solar</p>
                  <p className="text-3xl md:text-4xl font-bold text-green-400 font-[family-name:var(--font-barlow-condensed)]">
                    $<NumberFlow value={savingsAmount} />/year
                  </p>
                  <p className="text-green-400/70 text-xs mt-1">
                    That's ${Math.round(savingsAmount / 12)}/month back in your pocket
                  </p>
                </div>
              </motion.div>

              {/* Bottom note */}
              <p className="text-center text-[#6b6b6b] text-xs mb-8">
                *Average rates as of 2025. Based on 700 kWh monthly usage. Solar cost reflects 25-year system ownership.
              </p>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href="/ai-tools"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                >
                  Calculate Your Savings
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline Bar Chart */}
              <div className="mb-8">
                <div className="flex items-end justify-between gap-2 sm:gap-4 h-[280px] md:h-[320px]">
                  {timelineData.map((item, idx) => {
                    const barHeight = (item.rate / maxTimelineRate) * 100
                    return (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex-1 flex flex-col items-center"
                      >
                        {/* Rate label */}
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className={`text-sm font-bold mb-2 ${item.isNow ? 'text-purple-400' : item.isFuture ? 'text-red-400' : 'text-white/60'}`}
                        >
                          {item.rate}¢
                        </motion.span>

                        {/* Bar */}
                        <div className="w-full h-[200px] md:h-[240px] flex items-end justify-center">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeight}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                            className={`w-full max-w-[80px] rounded-t-xl ${
                              item.isNow
                                ? 'bg-gradient-to-t from-purple-600 to-purple-400 shadow-lg shadow-purple-500/30'
                                : item.isFuture
                                  ? 'bg-gradient-to-t from-red-600 to-red-400'
                                  : 'bg-gradient-to-t from-[#333] to-[#555]'
                            }`}
                          />
                        </div>

                        {/* Year label */}
                        <div className="mt-3 text-center">
                          {item.isNow && (
                            <span className="block text-[10px] font-bold text-purple-400 uppercase mb-1">NOW</span>
                          )}
                          {item.isFuture && (
                            <span className="block text-[10px] font-bold text-red-400 uppercase mb-1">SOON</span>
                          )}
                          <span className={`text-sm font-bold ${item.isNow ? 'text-white' : 'text-white/60'}`}>
                            {item.year}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Bill Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-5">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">2014 Average Bill</p>
                  <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-barlow-condensed)]">
                    $165<span className="text-lg text-[#6b6b6b]">/mo</span>
                  </p>
                  <p className="text-[#6b6b6b] text-xs mt-1">At 20¢ per kWh</p>
                </div>

                <div className="bg-purple-500/10 border-2 border-purple-500/50 rounded-2xl p-5 relative">
                  <span className="absolute top-3 right-3 px-2 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-full uppercase">
                    You Are Here
                  </span>
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">2026 Average Bill</p>
                  <p className="text-3xl md:text-4xl font-bold text-purple-400 font-[family-name:var(--font-barlow-condensed)]">
                    $385<span className="text-lg text-purple-400/60">/mo</span>
                  </p>
                  <p className="text-[#6b6b6b] text-xs mt-1">At 47¢ per kWh</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
                  <TrendingUp className="w-4 h-4 text-red-400" />
                  <span className="text-white text-sm font-medium">+135% rate increase</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
                  <span className="text-white text-sm font-medium">+$220/mo more than 2014</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
                  <span className="text-white text-sm font-medium">+$2,640/yr extra</span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10 border border-purple-500/30 rounded-2xl p-6 max-w-xl mx-auto">
                  <p className="text-purple-400 font-bold text-sm mb-2 uppercase tracking-wide">Lock in Today's Rates</p>
                  <p className="text-[#a3a3a3] text-sm mb-4">
                    Solar lets you freeze your energy costs. Stop paying more every year.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-colors uppercase tracking-wider text-sm font-[family-name:var(--font-barlow-condensed)]"
                  >
                    See Your Savings
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
