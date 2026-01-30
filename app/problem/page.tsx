"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, Zap, TrendingUp, Circle, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { TimelineSection } from "@/components/timeline-section"
import NumberFlow from "@number-flow/react"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Animated stat counter component
function AnimatedStat({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? <NumberFlow value={value} /> : "0"}
      {suffix}
    </span>
  )
}

// Stats data
const stats = [
  { value: 114, suffix: "%", label: "Rate increase", sublabel: "since 2014" },
  { value: 3, suffix: "M+", label: "Californians", sublabel: "hit by planned blackouts" },
  { prefix: "$", value: 600, suffix: "", label: "Projected", sublabel: "monthly bill by 2030" },
  { value: 1, prefix: "#", suffix: "", label: "Highest rates", sublabel: "in continental US" },
]

// Problem cards data
const problems = [
  {
    icon: TrendingUp,
    title: "Rates Are Exploding",
    points: [
      "PG&E: 21¢ → 48¢ since 2014",
      "SDG&E: Highest in continental US",
      "SCE: 6% increases every year",
    ],
    footer: "Average family: $350-500/month",
    accent: "Your bill isn't going down. Ever.",
  },
  {
    icon: Circle,
    title: "Blackouts Are On Purpose",
    points: [
      'They call them "Public Safety Power Shutoffs"',
      "3+ million Californians affected",
      "Some outages last 4-5 days",
    ],
    footer: "You still pay full price.",
    accent: "And they'll keep happening.",
  },
  {
    icon: DollarSign,
    title: "You're Paying For Their Mess",
    points: [
      "Infrastructure they neglected",
      "Wildfire lawsuit settlements",
      "Grid upgrades decades late",
      "Executive bonuses",
    ],
    footer: "PG&E made $4.2B profit in 2024.",
    accent: "Your rates still went up.",
  },
  {
    icon: Clock,
    title: "It's About To Get Worse",
    points: [
      "All new cars must be electric by 2035",
      "AI data centers doubling demand",
      "Same old failing infrastructure",
    ],
    footer: "Projected bills: $600-700/month by 2030",
    accent: "The grid isn't ready. Your wallet isn't either.",
  },
]

export default function ProblemPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/images/precision-grid.png')] opacity-5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
              The Problem
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
            style={{ fontWeight: 600, lineHeight: 1.1 }}
          >
            Your utility has a plan for you.
            <br />
            <span className="text-red-400">You're not going to like it.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10"
          >
            California electricity rates have more than doubled in 10 years.
            Blackouts are intentional. And it's about to get a lot worse.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => {
              document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors"
          >
            See the numbers
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: THE NUMBERS */}
      <section id="stats" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full">
              <span className="text-lg">📊</span>
              <span className="text-[#a3a3a3] text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                By The Numbers
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-white text-center uppercase font-[family-name:var(--font-barlow-condensed)] mb-16"
            style={{ fontWeight: 600 }}
          >
            The facts they hope you ignore
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 bg-[#111] border border-[#333] rounded-2xl text-center group hover:border-red-500/30 transition-colors"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-[family-name:var(--font-barlow-condensed)]">
                  <AnimatedStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-white font-medium">{stat.label}</p>
                <p className="text-[#6b6b6b] text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>

          {/* Source */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#6b6b6b] text-xs mt-8"
          >
            Sources: CPUC, Energy Toolbase, CA Public Advocates Office
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: THE 4 PROBLEMS */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl text-white text-center uppercase font-[family-name:var(--font-barlow-condensed)] mb-16"
            style={{ fontWeight: 600 }}
          >
            What your utility <span className="text-red-400">isn't</span> telling you
          </motion.h2>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 bg-[#111] border border-[#333] rounded-2xl hover:border-red-500/20 transition-all group"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl group-hover:bg-red-500/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)]">
                    {problem.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {problem.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#a3a3a3]">
                      <span className="text-red-400 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-5 border-t border-[#333]">
                  <p className="text-white font-medium mb-1">{problem.footer}</p>
                  <p className="text-red-400 text-sm font-medium">{problem.accent}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TIMELINE (Imported Component) */}
      <TimelineSection />

      {/* SECTION 5: THE TWO TYPES */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-12"
            style={{ fontWeight: 600 }}
          >
            Two types of Californians.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#6b6b6b] mb-4"
          >
            Those who don't know they have a problem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#6b6b6b] mb-16"
          >
            And those who don't know there's a solution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-white mb-10"
          >
            Now you know the problem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-[#e5e5e5] transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              See the Solution
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
            style={{ fontWeight: 600 }}
          >
            Ready to stop paying their price?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] mb-10"
          >
            Every month you wait, they win.
            <br />
            Let's talk about taking back control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-[#e5e5e5] transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              See the Solution
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Get a Free Quote
              <ChevronRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => {
                // This would trigger the chatbot
                const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
                chatButton?.click()
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Chat with RIV
              <span>🤖</span>
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
