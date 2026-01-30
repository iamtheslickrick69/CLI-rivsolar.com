"use client"

import { ProcessAccordion } from "@/components/ui/interactive-image-accordion"
import { Sparkles } from "lucide-react"

const processItems = [
  {
    id: 1,
    title: "Free Consultation",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: 2,
    title: "Custom Design",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    id: 3,
    title: "Professional Install",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    id: 4,
    title: "System Activation",
    imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
  },
  {
    id: 5,
    title: "Start Saving",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
]

export function ProcessAccordionSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Simple 5-Step Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Solar Freedom
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8">
              From free consultation to flipping the switch — we handle everything. Most homeowners go solar in just 4-8 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-[14px] shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-[14px] border border-zinc-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-3/5">
            <ProcessAccordion items={processItems} defaultActive={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
