"use client"

import { FeatureCarousel } from "@/components/ui/animated-feature-carousel"

const solarSteps = [
  {
    id: "1",
    name: "Consultation",
    title: "Free Home Assessment",
    description: "Meet with a RIV Solar expert. We analyze your utility bill, assess your roof, and show you exactly how much you'll save. No pressure, just answers.",
  },
  {
    id: "2",
    name: "Custom Design",
    title: "Engineered for Your Home",
    description: "Your system is designed specifically for your roof angle, shading, and energy usage. Tier-1 panels, optimized layout, maximum production.",
  },
  {
    id: "3",
    name: "Installation",
    title: "Professional 1-2 Day Install",
    description: "Our in-house crews (never subcontractors) install your system quickly and cleanly. Most installations complete in just 1-2 days.",
  },
  {
    id: "4",
    name: "Savings",
    title: "Flip the Switch & Save",
    description: "Watch your meter spin backwards. Most RIV customers see bills under $20/month from day one. Track your production with our monitoring app.",
  },
] as const

const solarImages = {
  alt: "RIV Solar Installation Process",
  step1img1: "/images/unsplash/keys.webp",
  step1img2: "/images/unsplash/calculator.webp",
  step2img1: "/images/unsplash/tech.webp",
  step2img2: "/images/unsplash/energy.webp",
  step3img: "/images/unsplash/solar-panels.webp",
  step4img: "/images/unsplash/house-aerial.webp",
}

export function ProcessCarouselSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solar in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From free consultation to flipping the switch. We handle permits, paperwork, and installation — you just enjoy the savings.
          </p>
        </div>

        {/* Carousel */}
        <FeatureCarousel
          steps={solarSteps}
          image={solarImages}
        />

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4-8</div>
            <div className="text-zinc-500 text-sm">Weeks Total</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1-2</div>
            <div className="text-zinc-500 text-sm">Day Install</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$0</div>
            <div className="text-zinc-500 text-sm">Down Options</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25</div>
            <div className="text-zinc-500 text-sm">Year Warranty</div>
          </div>
        </div>
      </div>
    </section>
  )
}
