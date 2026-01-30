"use client"

import React from "react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { Users, DollarSign, Star, Shield, Percent } from "lucide-react"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
  icon?: React.ReactNode
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
  icon,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-[#0a0a0a] rounded-2xl border border-[#222]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="heavy" />
      <motion.div
        className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div>
          <motion.div className="flex items-center gap-2 mb-2" variants={item}>
            {icon && <span className="text-white/60">{icon}</span>}
            <h3 className="text-sm md:text-base text-white/70 uppercase tracking-wider font-medium">
              {title}
            </h3>
          </motion.div>
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-barlow-condensed)]"
            variants={item}
          >
            {value}
          </motion.p>
        </div>
        {subtitle && (
          <motion.p
            className="text-sm text-white/50 mt-4"
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

export function SolarMetricsSection() {
  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-[#a3a3a3] text-sm font-medium mb-4 uppercase tracking-wide">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]">
            RIV Solar By The{" "}
            <span className="text-purple-400">Numbers</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card - Homeowners */}
          <div className="md:col-span-2 min-h-[200px]">
            <BentoCard
              title="Homeowners Powered"
              value="2,500+"
              subtitle="California families trusting RIV Solar"
              colors={["#7C3AED", "#3B82F6", "#8B5CF6"]}
              delay={0.1}
              icon={<Users className="w-4 h-4" />}
            />
          </div>

          {/* Small card - Savings */}
          <div className="min-h-[200px]">
            <BentoCard
              title="Customer Savings"
              value="$12M+"
              subtitle="Money back in pockets"
              colors={["#10B981", "#34D399", "#059669"]}
              delay={0.2}
              icon={<DollarSign className="w-4 h-4" />}
            />
          </div>

          {/* Small card - Rating */}
          <div className="min-h-[200px]">
            <BentoCard
              title="Google Rating"
              value="5.0★"
              subtitle="Verified reviews"
              colors={["#F59E0B", "#FBBF24", "#F97316"]}
              delay={0.3}
              icon={<Star className="w-4 h-4" />}
            />
          </div>

          {/* Large card - Warranty */}
          <div className="md:col-span-2 min-h-[200px]">
            <BentoCard
              title="Warranty Coverage"
              value="25 Years"
              subtitle="Panels, labor, roof — everything covered"
              colors={["#8B5CF6", "#EC4899", "#A855F7"]}
              delay={0.4}
              icon={<Shield className="w-4 h-4" />}
            />
          </div>

          {/* Full width - Tax Credit */}
          <div className="md:col-span-3 min-h-[180px]">
            <BentoCard
              title="Federal Tax Credit"
              value="30%"
              subtitle="Lock it in before rates change — available through 2032. The biggest solar incentive in history."
              colors={["#3B82F6", "#6366F1", "#8B5CF6"]}
              delay={0.5}
              icon={<Percent className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
