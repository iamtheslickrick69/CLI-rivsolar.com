"use client"

import { motion } from "framer-motion"
import { ChevronRight, Bot, Shield, Heart, DollarSign, HardHat, MapPin } from "lucide-react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"

const stickyContent = [
  {
    title: "Residential Solar",
    description:
      "Custom-designed for YOUR home. Premium Tier-1 equipment installed by our in-house certified crews. No subcontractors, no shortcuts.",
    bullets: [
      "Tier-1 panels (QCells, REC, Silfab)",
      "In-house installation crews",
      "25-year warranty on everything",
      "Optimized for your roof's layout",
    ],
    link: { text: "Learn More", href: "/solution" },
    content: (
      <Image
        src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7388.JPG"
        width={800}
        height={600}
        className="h-full w-full object-cover"
        alt="Solar panel installation"
        unoptimized
      />
    ),
  },
  {
    title: "Battery Storage",
    description:
      "Stay powered through blackouts. Store excess energy during the day and use it when rates are highest — or when the grid goes down. True energy independence.",
    bullets: [
      "Tesla Powerwall certified installer",
      "Enphase & Franklin options",
      "Blackout protection included",
      "Maximize savings under NEM 3.0",
    ],
    link: { text: "Learn More", href: "/solution" },
    content: (
      <Image
        src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house2.jpg"
        width={800}
        height={600}
        className="h-full w-full object-cover"
        alt="Home with battery storage"
        unoptimized
      />
    ),
  },
  {
    title: "Flexible Financing",
    description:
      "Go solar with $0 down. Choose from loan, lease, or cash options tailored to your budget. Make the switch affordable.",
    bullets: [
      "$0 down options available",
      "Loans, leases, or cash purchase",
      "30% federal tax credit",
      "5-8 year typical payback",
    ],
    link: { text: "Learn More", href: "/solution" },
    content: (
      <Image
        src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/coolaihomesavings.jpg"
        width={800}
        height={600}
        className="h-full w-full object-cover"
        alt="Solar savings visualization"
        unoptimized
      />
    ),
  },
]

const whyRivFeatures = [
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Chatbot + bill analyzer. Get 24/7 answers instantly.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Panels, labor, roof — all covered. Period.",
  },
  {
    icon: Heart,
    title: "No Pressure Ever",
    description: "We educate, not manipulate. Your timeline, your decision.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. No surprises. What we quote is what you pay.",
  },
  {
    icon: HardHat,
    title: "In-House Crews",
    description: "No subcontractors. Our people, our standards, our quality.",
  },
  {
    icon: MapPin,
    title: "Local CA Experts",
    description: "We know PG&E, SDG&E, SCE inside and out.",
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-24 bg-black">
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-6xl">
          {/* Logo centered at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-10"
          >
            <Image
              src="/logopurp.jpeg"
              width={80}
              height={80}
              alt="RIV Solar"
              className="rounded-xl"
            />
          </motion.div>

          {/* Header - centered with side-by-side subtitle */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
              style={{
                letterSpacing: "-0.02em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Complete Solar Solutions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-[#a3a3a3] leading-relaxed text-lg">
                RIV Solar provides everything you need to go solar — from Tier-1 panels to battery storage and flexible
                financing. No subcontractors, no hidden fees, just quality work.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline uppercase tracking-wide font-semibold">
                  GET STARTED <ChevronRight className="w-4 h-4 inline" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Sticky Scroll Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StickyScroll content={stickyContent} />
          </motion.div>


          {/* WHY RIV Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] text-center mb-10"
              style={{
                letterSpacing: "-0.02em",
                fontWeight: 538,
              }}
            >
              Why California Homeowners Choose RIV
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {whyRivFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#111] border border-[#333] hover:border-purple-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
