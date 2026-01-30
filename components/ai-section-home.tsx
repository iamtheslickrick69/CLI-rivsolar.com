"use client"

import { GrainGradient, grainGradientPresets } from '@paper-design/shaders-react'
import { motion } from "framer-motion"
import {
  Sparkles,
  Zap,
  MessageCircle,
  Lightbulb,
  ChevronRight,
  Brain
} from "lucide-react"
import Link from "next/link"
import { BillAnalyzerEmbedded } from "@/components/bill-analyzer-embedded"

export function AISectionHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Grain Gradient Background - Contained within section */}
      <div className="absolute inset-0 z-0">
        <GrainGradient
          {...grainGradientPresets[0]}
          style={{ position: "absolute", inset: 0 }}
        />
      </div>

      {/* Content - Condensed padding */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header - Condensed */}
          <div className="text-center mb-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                AI-Powered Tools
              </span>
            </motion.div>

            {/* Headline - Smaller */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600, lineHeight: 1.1 }}
            >
              Smart tools that{" "}
              <span className="text-purple-400">no competitor</span> has
            </motion.h2>

            {/* Subhead - Tighter */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-[#a3a3a3] max-w-xl mx-auto mb-8"
            >
              Get instant answers about solar, analyze your utility bill, and discover your savings
              potential — all powered by AI that understands California energy.
            </motion.p>

            {/* Three Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#bill-analyzer-home"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-[#e5e5e5] transition-colors"
              >
                <Zap className="w-4 h-4" />
                Bill Analysis
              </a>

              <button
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
                  chatButton?.click()
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] text-white text-sm font-medium rounded-full hover:bg-[#2a2a2a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                AI Chatbot
              </button>

              <Link
                href="/ai-tools"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] text-white text-sm font-medium rounded-full hover:bg-[#2a2a2a] transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
                Smart Recommendations
              </Link>
            </motion.div>
          </div>

          {/* Bill Analyzer Card - Condensed with better hover */}
          <motion.div
            id="bill-analyzer-home"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative bg-[#111]/90 backdrop-blur-md rounded-[28px] border border-purple-500/20 p-6 md:p-8 mb-5 group hover:border-purple-500/40 transition-all duration-300"
            style={{
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.08), inset 0 1px 0 rgba(168, 85, 247, 0.1)"
            }}
          >
            {/* Purple corner accents - smaller */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-purple-500/30 rounded-tl-[28px] pointer-events-none group-hover:border-purple-500/50 transition-colors" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-500/30 rounded-tr-[28px] pointer-events-none group-hover:border-purple-500/50 transition-colors" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-purple-500/30 rounded-bl-[28px] pointer-events-none group-hover:border-purple-500/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-500/30 rounded-br-[28px] pointer-events-none group-hover:border-purple-500/50 transition-colors" />

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 80px rgba(168, 85, 247, 0.15), 0 0 120px rgba(168, 85, 247, 0.1)"
              }}
            />

            {/* Analyzer Header - Compact */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/25">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                    AI Bill Analyzer
                  </h3>
                  <p className="text-[#6b6b6b] text-xs">Understand your bill like a pro</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-purple-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                <span className="text-xs">AI Ready</span>
              </div>
            </div>

            {/* The Embedded Analyzer */}
            <BillAnalyzerEmbedded compact />
          </motion.div>

          {/* Two Cards Row - Condensed with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* RIV Chatbot Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500 transition-colors border border-purple-500/30">
                  <MessageCircle className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-white uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                  RIV AI Chatbot
                </h3>
              </div>
              <p className="text-[#a3a3a3] text-sm mb-3">
                24/7 AI assistant that answers solar questions instantly. No waiting, no sales pressure.
              </p>
              <div className="space-y-1.5">
                {[
                  { emoji: "⚡", text: "Utility rates", sub: "PG&E, SDG&E, SCE" },
                  { emoji: "📋", text: "NEM 3.0", sub: "New rules explained" },
                  { emoji: "💰", text: "Financing", sub: "Tax credits & options" },
                ].map((topic) => (
                  <div key={topic.text} className="flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-md px-2 py-0.5 text-xs bg-purple-500/5 border border-purple-500/20">
                      <span>{topic.emoji}</span>
                      <span className="text-white font-medium">{topic.text}</span>
                    </span>
                    <span className="text-[#6b6b6b] text-xs">{topic.sub}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
                  chatButton?.click()
                }}
                className="mt-4 w-full py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] shadow-lg shadow-purple-500/25"
              >
                CHAT WITH RIV
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Why AI Matters Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-[#111]/90 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg shadow-purple-500/25">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-semibold uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                  Why Our AI Matters
                </h3>
              </div>
              <p className="text-[#a3a3a3] text-sm mb-4">
                Traditional solar companies give you a generic quote. Our AI analyzes YOUR specific
                bill, YOUR rate plan, and YOUR usage patterns to give personalized recommendations.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "98%", label: "Accuracy" },
                  { value: "30s", label: "Analysis time" },
                  { value: "24/7", label: "Availability" },
                  { value: "$0", label: "Cost to you" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-2.5 bg-purple-500/5 border border-purple-500/10 rounded-lg hover:bg-purple-500/10 transition-colors">
                    <p className="text-xl font-bold text-purple-400 font-[family-name:var(--font-barlow-condensed)]">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* View All AI Tools Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-6"
          >
            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              Explore all AI tools
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
