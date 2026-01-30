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
  GitCompare
} from "lucide-react"
import Link from "next/link"

// ===== TAB 1: Without Solar vs With Solar Data =====
const withoutSolarItems = [
  {
    icon: <TrendingUp className="w-4 h-4 text-orange-400" />,
    text: "Hostage to rate hikes",
    detail: "Rates increase 6-9% every year",
  },
  {
    icon: <Receipt className="w-4 h-4 text-orange-400" />,
    text: "$500+ summer bills",
    detail: "AC running = wallet draining",
  },
  {
    icon: <PiggyBank className="w-4 h-4 text-orange-400" />,
    text: "Zero ROI",
    detail: "Every dollar to utility is gone forever",
  },
  {
    icon: <CloudOff className="w-4 h-4 text-orange-400" />,
    text: "Dark during outages",
    detail: "When the grid goes down, you go dark",
  },
  {
    icon: <Sliders className="w-4 h-4 text-orange-400" />,
    text: "No rate control",
    detail: "Utility sets the price, you just pay",
  },
  {
    icon: <Sun className="w-4 h-4 text-orange-400" />,
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
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500",
    textColor: "text-orange-400",
    borderColor: "border-orange-500/30",
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
    label: "Solar Comparison",
    icon: GitCompare,
  },
  {
    id: "rates",
    label: "Rate Breakdown",
    icon: BarChart3,
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
            <span className="text-orange-400">Without Solar</span>
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
                <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">{tab.id === "comparison" ? "Compare" : "Rates"}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "comparison" ? (
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
          ) : (
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
        </AnimatePresence>
      </div>
    </section>
  )
}
