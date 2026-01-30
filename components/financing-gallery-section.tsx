"use client"

import { ExpandableGallery } from "@/components/ui/gallery-animation"

const financingOptions = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Purchase",
    description: "Own your system outright. Maximize savings with the 30% federal tax credit. Best long-term ROI.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Lease",
    description: "$0 down, fixed monthly payments. No maintenance worries. Start saving from day one.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    title: "PPA",
    description: "Power Purchase Agreement. Pay only for the energy you use. Zero upfront cost.",
  },
  {
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
    title: "Battery",
    description: "Tesla Powerwall & Enphase. Backup power during outages. True energy independence.",
  },
]

export function FinancingGallerySection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            Flexible Options
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Choose Your Path to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Solar
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Whether you want to own, lease, or pay-as-you-go — we have a plan that fits your budget and goals.
          </p>
        </div>

        {/* Gallery */}
        <ExpandableGallery items={financingOptions} className="w-full" />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-[14px] transition-colors shadow-lg shadow-purple-500/25"
          >
            Compare All Options
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
