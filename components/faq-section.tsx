"use client"

import { Accordion03 } from "@/components/ui/accordion-03"

const faqItems = [
  {
    id: "item-1",
    title: "How much can I save with solar?",
    content: "Most California homeowners save 70-90% on their electricity bills. With utility rates increasing 7-9% annually, a typical family saves $1,000-2,000 per year, adding up to $25,000-50,000+ over 25 years. Our AI Bill Analyzer gives you a personalized savings estimate based on your actual utility usage.",
    image: "/images/unsplash/solar-panels.webp",
  },
  {
    id: "item-2",
    title: "What is NEM 3.0?",
    content: "NEM 3.0 (Net Energy Metering) is California's updated solar policy. Export rates dropped ~75% from NEM 2.0, making self-consumption critical. That's why battery storage is now essential for maximizing ROI. RIV Solar designs systems specifically optimized for NEM 3.0 to ensure you get the best possible savings.",
    image: "/images/unsplash/solar-roof.webp",
  },
  {
    id: "item-3",
    title: "$0 down financing options",
    content: "We offer multiple financing options including $0 down solar loans, leases, and cash purchases. The 30% federal tax credit significantly reduces your total cost. Most customers find their solar payment is less than their current utility bill from day one, meaning immediate savings.",
    image: "/images/unsplash/calculator.webp",
  },
  {
    id: "item-4",
    title: "Our 25-year warranty",
    content: "Our all-inclusive 25-year warranty covers panels, inverters, workmanship, and production guarantees. Unlike big solar companies that use subcontractors, RIV Solar handles everything in-house. If anything goes wrong, we fix it — no finger-pointing, no runaround.",
    image: "/images/unsplash/handshake.webp",
  },
  {
    id: "item-5",
    title: "Installation timeline",
    content: "Typical installation takes 1-2 days. The full process from signing to solar takes 4-8 weeks, including permits, utility approvals, and inspections. We handle all the paperwork and keep you updated every step of the way.",
    image: "/images/unsplash/abstract.webp",
  },
  {
    id: "item-6",
    title: "Why choose RIV Solar?",
    content: "RIV Solar is Californians helping Californians. We use Tier-1 equipment, in-house installation crews (no subcontractors), and offer AI-powered tools like our 24/7 RIV Chatbot and Bill Analyzer that no competitor has. Plus, our transparent, no-pressure approach means honest pricing and real answers.",
    image: "/images/r2/adobestock.webp",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Accordion */}
        <Accordion03 items={faqItems} />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              CHAT WITH RIV
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black/5 font-semibold rounded-lg transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
