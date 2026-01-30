"use client"

import { motion } from "framer-motion"
import { ChevronRight, Sparkles, MessageCircle, Zap, Brain } from "lucide-react"
import { BillAnalyzerEmbedded } from "@/components/bill-analyzer-embedded"

export function AISection() {
  return (
    <section className="relative z-20">
      {/* Light theme container */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Top transition gradient */}
        <div
          className="h-32 -mb-32 relative z-10"
          style={{
            background: "linear-gradient(to bottom, #09090B 0%, transparent 100%)",
          }}
        />

        <div className="relative z-20 pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-medium">AI-Powered Tools</span>
              </div>

              {/* Heading */}
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-gray-900 max-w-4xl mx-auto mb-6"
                style={{
                  letterSpacing: "-0.03em",
                  fontWeight: 600,
                  lineHeight: 1.1,
                }}
              >
                Smart tools that{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  no competitor
                </span>{" "}
                has
              </h2>

              {/* Subheading */}
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get instant answers about solar, analyze your utility bill, and discover your
                savings potential — all powered by AI that understands California energy.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {[
                { icon: Zap, label: "Bill Analysis", color: "purple" },
                { icon: MessageCircle, label: "AI Chatbot", color: "blue" },
                { icon: Brain, label: "Smart Recommendations", color: "green" },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                    feature.color === "purple"
                      ? "bg-purple-50 border-purple-200 text-purple-700"
                      : feature.color === "blue"
                      ? "bg-blue-50 border-blue-200 text-blue-700"
                      : "bg-green-50 border-green-200 text-green-700"
                  }`}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Embedded Bill Analyzer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[32px] border border-gray-200 shadow-xl shadow-gray-200/50 p-8 md:p-12"
            >
              {/* Analyzer Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">AI Bill Analyzer</h3>
                    <p className="text-gray-500 text-sm">Understand your bill like a pro</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>AI Ready</span>
                </div>
              </div>

              {/* The Embedded Analyzer */}
              <BillAnalyzerEmbedded />
            </motion.div>

            {/* Bottom Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            >
              {/* RIV Chatbot Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-100 rounded-xl group-hover:bg-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">RIV AI Chatbot</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  24/7 AI assistant that answers solar questions instantly. No waiting, no sales pressure.
                </p>
                <div className="space-y-2">
                  {[
                    { emoji: "⚡", text: "Utility rates", sub: "PG&E, SDG&E, SCE" },
                    { emoji: "📋", text: "NEM 3.0", sub: "New rules explained" },
                    { emoji: "💰", text: "Financing", sub: "Tax credits & options" },
                  ].map((topic) => (
                    <div key={topic.text} className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm bg-blue-50">
                        <span>{topic.emoji}</span>
                        <span className="text-blue-700 font-medium">{topic.text}</span>
                      </span>
                      <span className="text-gray-400 text-sm">{topic.sub}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 border border-blue-200 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Chat with RIV
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Why AI Matters Card */}
              <div className="p-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-white/20 rounded-xl">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Why Our AI Matters</h3>
                </div>
                <p className="text-purple-100 mb-6">
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
                    <div key={stat.label} className="text-center p-3 bg-white/10 rounded-xl">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-purple-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom transition gradient */}
        <div
          className="h-32 -mt-32 relative z-10"
          style={{
            background: "linear-gradient(to top, #09090B 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  )
}
