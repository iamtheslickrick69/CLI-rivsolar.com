"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Zap, MapPin, Users } from "lucide-react"

const utilityCards = [
  {
    id: 1,
    utility: "PG&E",
    title: "Pacific Gas & Electric Customers",
    description: "Rates increasing ~7% per year. Save before it's too late.",
    color: "blue",
    stats: { avgRate: "$0.35/kWh", peakHours: "4-9pm", rateIncrease: "7%/year" },
  },
  {
    id: 2,
    utility: "SDG&E",
    title: "San Diego Gas & Electric Customers",
    description: "Highest rates in the nation. Battery storage is essential.",
    color: "orange",
    stats: { avgRate: "$0.45/kWh", peakHours: "4-9pm", rateIncrease: "9%/year" },
  },
  {
    id: 3,
    utility: "SCE",
    title: "Southern California Edison Customers",
    description: "Complex rate structures. We optimize for your plan.",
    color: "purple",
    stats: { avgRate: "$0.38/kWh", peakHours: "4-9pm", rateIncrease: "8%/year" },
  },
  {
    id: 4,
    utility: "NEM 3.0",
    title: "Understanding NEM 3.0",
    description: "Export rates dropped 75%. Self-consumption is critical now.",
    color: "green",
    stats: { exportRate: "-75%", selfConsumption: "Critical", batteryROI: "Higher" },
  },
]

const serviceAreas = [
  { name: "Riverside", icon: MapPin },
  { name: "San Diego", icon: MapPin },
  { name: "Orange County", icon: MapPin },
  { name: "San Bernardino", icon: MapPin },
  { name: "LA County", icon: MapPin },
  { name: "Temecula", icon: MapPin },
]

function UtilityCardMockup({ utility, stats, color }: { utility: string; stats: Record<string, string>; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: "text-blue-400 bg-blue-500/20 border-blue-500/30",
    orange: "text-orange-400 bg-orange-500/20 border-orange-500/30",
    purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
    green: "text-green-400 bg-green-500/20 border-green-500/30",
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${colorClasses[color]} border w-fit`}>
        <Zap className="w-3.5 h-3.5" />
        <span>{utility}</span>
      </div>
      <div className="space-y-2 mt-2">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between text-sm">
            <span className="text-zinc-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className={`font-medium ${colorClasses[color].split(' ')[0]}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(utilityCards.length - 3, scrollPosition + 1))
  }

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">California Utilities</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              We know your utility
              <br />
              inside and out
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            RIV Solar specializes in California utilities — PG&E, SDG&E, and SCE. We design systems optimized for your
            specific rate plan and usage patterns.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {utilityCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <UtilityCardMockup utility={card.utility} stats={card.stats} color={card.color} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.utility}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.description}</p>
                      </div>
                      {/* Icon button */}
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-purple-400 hover:border-purple-500 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= utilityCards.length - 3}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Service Areas */}
        <div className="mt-24">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-zinc-300 font-medium">Service Areas</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-2 hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <area.icon className="w-4 h-4 text-purple-400" />
                <span className="text-zinc-300 text-sm">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
