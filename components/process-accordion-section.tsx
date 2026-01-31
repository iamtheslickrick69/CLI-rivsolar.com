"use client"

import { ProcessImageGallery } from "@/components/ui/process-image-gallery"
import { Sparkles } from "lucide-react"

const processItems = [
  {
    id: 1,
    title: "Free Consultation",
    imageUrl: "/process/comparison.webp",
    description: "One of our licensed experts will give you a completely free and accurate side-by-side comparison showing you all of your energy options. Solar is not for everyone — we let the numbers speak for themselves.",
    duration: "30 min call",
  },
  {
    id: 2,
    title: "Custom Design",
    imageUrl: "/process/blueprint.webp",
    description: "Our engineers design a system tailored to your home, roof layout, and energy usage. Every panel placement is optimized for maximum savings.",
    duration: "1-2 weeks",
  },
  {
    id: 3,
    title: "Professional Install",
    imageUrl: "/process/professionalinstall.webp",
    description: "Our in-house certified installers handle everything — no subcontractors. Most installations are completed in just 1-2 days.",
    duration: "1-2 days",
  },
  {
    id: 4,
    title: "System Activation",
    imageUrl: "/process/activation.webp",
    description: "We handle all permits, inspections, and utility paperwork. Once approved, we flip the switch and your system goes live.",
    duration: "2-4 weeks",
  },
  {
    id: 5,
    title: "Start Saving",
    imageUrl: "/images/unsplash/house-aerial.webp",
    description: "Watch your savings grow in real-time. Most homeowners see their first reduced bill within 30 days of activation.",
    duration: "Day 1",
  },
]

export function ProcessAccordionSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Content - Centered on top */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6 uppercase tracking-wide">
            Simple 5-Step Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight mb-6 uppercase font-[family-name:var(--font-barlow-condensed)]">
            Your Path to{" "}
            <span className="text-gray-500">
              Energy Freedom
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From free consultation to flipping the switch — we handle everything. Most homeowners go solar in just 4-8 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-all uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              <Sparkles className="w-5 h-5" />
              START YOUR JOURNEY
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black/5 font-semibold px-8 py-4 rounded-lg transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Gallery - Full width below */}
        <div className="w-full">
          <ProcessImageGallery items={processItems} />
        </div>
      </div>
    </section>
  )
}
