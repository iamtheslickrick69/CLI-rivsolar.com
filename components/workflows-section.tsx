"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Zap, MapPin, Users } from "lucide-react"

const utilityCards = [
  {
    id: 1,
    utility: "PG&E",
    title: "Pacific Gas & Electric Customers",
    description: "Rates increasing ~7% per year. Save before it's too late.",
    color: "gray",
    stats: { avgRate: "$0.35/kWh", peakHours: "4-9pm", rateIncrease: "7%/year" },
  },
  {
    id: 2,
    utility: "SDG&E",
    title: "San Diego Gas & Electric Customers",
    description: "Highest rates in the nation. Battery storage is essential.",
    color: "gray",
    stats: { avgRate: "$0.45/kWh", peakHours: "4-9pm", rateIncrease: "9%/year" },
  },
  {
    id: 3,
    utility: "SCE",
    title: "Southern California Edison Customers",
    description: "Complex rate structures. We optimize for your plan.",
    color: "gray",
    stats: { avgRate: "$0.38/kWh", peakHours: "4-9pm", rateIncrease: "8%/year" },
  },
  {
    id: 4,
    utility: "NEM 3.0",
    title: "Understanding NEM 3.0",
    description: "Export rates dropped 75%. Self-consumption is critical now.",
    color: "gray",
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

function UtilityCardMockup({ utility, stats }: { utility: string; stats: Record<string, string> }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gray-100 border border-gray-200 text-gray-700 w-fit">
        <Zap className="w-3.5 h-3.5" />
        <span>{utility}</span>
      </div>
      <div className="space-y-2 mt-2">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between text-sm">
            <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className="font-medium text-gray-700">{value}</span>
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
    <section className="relative py-24 bg-white">
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.02), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <span className="text-sm text-gray-500">California Utilities</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.1]">
              We know your utility
              <br />
              inside and out
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-500 lg:max-w-sm lg:pt-12">
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
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[340px] flex flex-col">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <UtilityCardMockup utility={card.utility} stats={card.stats} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(249,250,251,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-1">{card.utility}</p>
                        <p className="text-sm text-gray-700 leading-snug">{card.description}</p>
                      </div>
                      {/* Icon button */}
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-500 transition-colors">
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
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= utilityCards.length - 3}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Service Areas */}
        <div className="mt-24">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium">Service Areas</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2 hover:border-gray-400 transition-colors cursor-pointer"
              >
                <area.icon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 text-sm">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
