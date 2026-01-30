"use client"

import { SolarComparison } from "@/components/ui/feature-with-image-comparison"
import {
  TrendingUp,
  Zap,
  DollarSign,
  Sun,
  Receipt,
  PiggyBank,
  Plug,
  BadgePercent,
  Leaf,
  Home,
  CloudOff,
  Flame,
  Battery,
  Shield,
  Check
} from "lucide-react"

const withoutSolarItems = [
  {
    icon: <TrendingUp className="w-4 h-4 text-red-400" />,
    text: "Hostage to rate hikes",
    detail: "PG&E, SDG&E, SCE raise rates 6-9% every year",
  },
  {
    icon: <CloudOff className="w-4 h-4 text-red-400" />,
    text: "Dark during outages",
    detail: "When the grid goes down, you go dark",
  },
  {
    icon: <Flame className="w-4 h-4 text-red-400" />,
    text: "Paying for their problems",
    detail: "Wildfires, lawsuits, executive bonuses — you pay",
  },
  {
    icon: <Sun className="w-4 h-4 text-red-400" />,
    text: "Wasting free sunshine",
    detail: "Living in CA and paying for electricity?",
  },
  {
    icon: <Receipt className="w-4 h-4 text-red-400" />,
    text: "$500+ summer bills",
    detail: "AC running = wallet draining",
  },
  {
    icon: <PiggyBank className="w-4 h-4 text-red-400" />,
    text: "Zero ROI",
    detail: "Every dollar sent to utility is gone forever",
  },
  {
    icon: <Plug className="w-4 h-4 text-red-400" />,
    text: "100% grid dependent",
    detail: "At the mercy of aging infrastructure",
  },
  {
    icon: <BadgePercent className="w-4 h-4 text-red-400" />,
    text: "Missing the tax credit",
    detail: "30% federal credit won't last forever",
  },
  {
    icon: <Leaf className="w-4 h-4 text-red-400" />,
    text: "Carbon emissions",
    detail: "Grid electricity = fossil fuels",
  },
  {
    icon: <Home className="w-4 h-4 text-red-400" />,
    text: "Renting power forever",
    detail: "Pay forever, own nothing",
  },
]

const withSolarItems = [
  {
    icon: <Check className="w-4 h-4 text-green-400" />,
    text: "Locked-in rates",
    detail: "Same payment for 25+ years",
  },
  {
    icon: <Battery className="w-4 h-4 text-green-400" />,
    text: "Powered through blackouts",
    detail: "Battery keeps your lights on",
  },
  {
    icon: <PiggyBank className="w-4 h-4 text-green-400" />,
    text: "Investing in yourself",
    detail: "Every dollar builds YOUR equity",
  },
  {
    icon: <Sun className="w-4 h-4 text-green-400" />,
    text: "Harvesting free energy",
    detail: "Your roof becomes a power plant",
  },
  {
    icon: <Receipt className="w-4 h-4 text-green-400" />,
    text: "Bills under $20/month",
    detail: "Most RIV customers see single digits",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
    text: "10-20% annual ROI",
    detail: "One of the best investments you can make",
  },
  {
    icon: <Shield className="w-4 h-4 text-green-400" />,
    text: "Energy independent",
    detail: "The grid becomes your backup",
  },
  {
    icon: <BadgePercent className="w-4 h-4 text-green-400" />,
    text: "$10K+ back in your pocket",
    detail: "30% federal tax credit = real money",
  },
  {
    icon: <Leaf className="w-4 h-4 text-green-400" />,
    text: "100% clean energy",
    detail: "Leading by example for the planet",
  },
  {
    icon: <Home className="w-4 h-4 text-green-400" />,
    text: "OWN your power",
    detail: "Free electricity for 15+ years after payoff",
  },
]

export function SolarComparisonSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            The Ultimate Comparison
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-red-400">Without Solar</span>
            {" "}vs{" "}
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">With Solar</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Drag the slider to see the difference. Which side do you want to be on?
          </p>
        </div>

        {/* Comparison Slider */}
        <SolarComparison
          withoutSolar={withoutSolarItems}
          withSolar={withSolarItems}
        />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 mb-6 text-lg">
            The choice is clear. Stop renting your power.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-[14px] transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
          >
            <Sun className="w-5 h-5" />
            Join the Solar Side
          </a>
        </div>
      </div>
    </section>
  )
}
