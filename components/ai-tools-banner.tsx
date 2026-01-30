"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, MessageCircle, Lightbulb } from "lucide-react"
import Link from "next/link"
import NeuralBackground from "@/components/ui/flow-field-background"

export function AIToolsBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Flow Field Background - Contained within banner */}
      <div className="absolute inset-0 bg-black">
        <NeuralBackground
          color="#9333ea"
          particleCount={400}
          trailOpacity={0.12}
          speed={0.8}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
            AI-Powered Tools
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
          style={{ fontWeight: 600, lineHeight: 1.1 }}
        >
          Smart tools that{" "}
          <span className="text-purple-400">no competitor</span> has
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10"
        >
          Get instant answers about solar, analyze your utility bill, and discover your savings
          potential — all powered by AI that understands California energy.
        </motion.p>

        {/* Three Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/ai-tools#bill-analyzer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-medium rounded-full hover:bg-[#e5e5e5] transition-colors"
          >
            <Zap className="w-4 h-4" />
            Bill Analysis
          </Link>

          <button
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
              chatButton?.click()
            }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] text-white font-medium rounded-full hover:bg-[#2a2a2a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            AI Chatbot
          </button>

          <Link
            href="/ai-tools#recommendations"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] text-white font-medium rounded-full hover:bg-[#2a2a2a] transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            Smart Recommendations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
