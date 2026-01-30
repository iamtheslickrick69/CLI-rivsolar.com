"use client"

import { motion } from "framer-motion"
import { ColorChangeCard } from "@/components/ui/color-change-card"

const cardData = [
  {
    heading: "STOP",
    description: "Purchasing your energy from out of state, and hundreds of miles away with heavy fees.",
    imgSrc: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/glencanyon2.webp",
  },
  {
    heading: "OUTDATED",
    description: "We are still using the same infrastructure that has been around for 100+ years. Stop paying the price for old technology.",
    imgSrc: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/pexels.webp",
  },
  {
    heading: "CONTROL",
    description: "Take control of your rate and start sending energy back to the grid—not drawing from it.",
    imgSrc: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/IMG_7385.webp",
  },
  {
    heading: "SAVE",
    description: "Not just today—but for your future, and your children's future.",
    imgSrc: "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/startsaving.webp",
  },
]

export function GridBrokenSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-4 uppercase tracking-wide">
            The Grid Is Broken
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]">
            It's Time For{" "}
            <span className="text-purple-600">Change</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            The energy system wasn't built for you. It was built for profit. Take back control.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ColorChangeCard
                heading={card.heading}
                description={card.description}
                imgSrc={card.imgSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
