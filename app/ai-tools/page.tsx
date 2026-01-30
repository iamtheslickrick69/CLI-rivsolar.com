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
import { Navbar } from "@/components/navbar"
import { BillAnalyzerEmbedded } from "@/components/bill-analyzer-embedded"

export default function AIToolsPage() {
  return (
    <main className="bg-black min-h-screen relative overflow-hidden">
      {/* Grain Gradient Background - FIXED position like the original */}
      <GrainGradient
        {...grainGradientPresets[0]}
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Banner Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                AI-Powered Tools
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
              Smart tools that{" "}
              <span className="text-purple-400">no competitor</span> has
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10"
            >
              Get instant answers about solar, analyze your utility bill, and discover your savings
              potential — all powered by AI that understands California energy.
            </motion.p>

            {/* Three Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#bill-analyzer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-medium rounded-full hover:bg-[#e5e5e5] transition-colors"
              >
                <Zap className="w-4 h-4" />
                Bill Analysis
              </a>

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

              <a
                href="#recommendations"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] text-white font-medium rounded-full hover:bg-[#2a2a2a] transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
                Smart Recommendations
              </a>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Bill Analyzer Card */}
            <motion.div
              id="bill-analyzer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#111]/90 backdrop-blur-md rounded-[32px] border border-purple-500/20 p-8 md:p-12 mb-8"
              style={{
                boxShadow: "0 0 60px rgba(168, 85, 247, 0.1), inset 0 1px 0 rgba(168, 85, 247, 0.1)"
              }}
            >
              {/* Purple corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-[32px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/30 rounded-tr-[32px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-purple-500/30 rounded-bl-[32px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-[32px] pointer-events-none" />

              {/* Analyzer Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-purple-500/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/25">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                      AI Bill Analyzer
                    </h2>
                    <p className="text-[#6b6b6b] text-sm">Understand your bill like a pro</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
                  <span>AI Ready</span>
                </div>
              </div>

              {/* The Embedded Analyzer */}
              <BillAnalyzerEmbedded />
            </motion.div>

            {/* Two Cards Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* RIV Chatbot Card */}
              <div className="p-6 bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl group-hover:bg-purple-500 transition-colors border border-purple-500/30">
                    <MessageCircle className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                    RIV AI Chatbot
                  </h3>
                </div>
                <p className="text-[#a3a3a3] mb-4">
                  24/7 AI assistant that answers solar questions instantly. No waiting, no sales pressure.
                </p>
                <div className="space-y-2">
                  {[
                    { emoji: "⚡", text: "Utility rates", sub: "PG&E, SDG&E, SCE" },
                    { emoji: "📋", text: "NEM 3.0", sub: "New rules explained" },
                    { emoji: "💰", text: "Financing", sub: "Tax credits & options" },
                  ].map((topic) => (
                    <div key={topic.text} className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm bg-purple-500/5 border border-purple-500/20">
                        <span>{topic.emoji}</span>
                        <span className="text-white font-medium">{topic.text}</span>
                      </span>
                      <span className="text-[#6b6b6b] text-sm">{topic.sub}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
                    chatButton?.click()
                  }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-[family-name:var(--font-barlow-condensed)] shadow-lg shadow-purple-500/25"
                >
                  CHAT WITH RIV
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Why AI Matters Card */}
              <div
                id="recommendations"
                className="p-6 bg-[#111]/90 backdrop-blur-md rounded-2xl border border-purple-500/20 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/25">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                    Why Our AI Matters
                  </h3>
                </div>
                <p className="text-[#a3a3a3] mb-6">
                  Traditional solar companies give you a generic quote. Our AI analyzes YOUR specific
                  bill, YOUR rate plan, and YOUR usage patterns to give personalized recommendations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "98%", label: "Accuracy" },
                    { value: "30s", label: "Analysis time" },
                    { value: "24/7", label: "Availability" },
                    { value: "$0", label: "Cost to you" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                      <p className="text-2xl font-bold text-purple-400 font-[family-name:var(--font-barlow-condensed)]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
