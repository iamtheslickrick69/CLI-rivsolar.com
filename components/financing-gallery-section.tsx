"use client"

import { ExpandableGallery } from "@/components/ui/gallery-animation"

const financingOptions = [
  {
    image: "/images/unsplash/house-aerial.webp",
    title: "Purchase",
    description: "Own your system outright. Maximize savings with the 30% federal tax credit. Best long-term ROI.",
  },
  {
    image: "/images/unsplash/modern-house.webp",
    title: "Lease",
    description: "$0 down, fixed monthly payments. No maintenance worries. Start saving from day one.",
  },
  {
    image: "/images/unsplash/calculator.webp",
    title: "PPA",
    description: "Power Purchase Agreement. Pay only for the energy you use. Zero upfront cost.",
  },
  {
    image: "/images/unsplash/solar-roof.webp",
    title: "Battery",
    description: "Tesla Powerwall & Enphase. Backup power during outages. True energy independence.",
  },
]

export function FinancingGallerySection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-[#a3a3a3] text-sm font-medium mb-6 uppercase tracking-wide">
            Flexible Options
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]">
            Choose Your Path to{" "}
            <span className="text-[#a3a3a3]">
              Solar
            </span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            Whether you want to own, lease, or pay-as-you-go — we have a plan that fits your budget and goals.
          </p>
        </div>

        {/* Gallery */}
        <ExpandableGallery items={financingOptions} className="w-full" />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#e5e5e5] text-black font-semibold rounded-lg transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
          >
            COMPARE ALL OPTIONS
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
