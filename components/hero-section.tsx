"use client"

import { motion } from "framer-motion"
import { Sparkles, Play, Shield, Star, Users, DollarSign, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image - NO TINT - Full brightness */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/r2/adobestock.webp"
          alt="Solar panels on California home"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient ONLY on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        {/* Subtle bottom gradient for stats area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* Left Side - Text Content */}
            <div className="lg:w-1/2">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium uppercase tracking-wide">Rated 5 Stars by 2,500+ California Homeowners</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8 uppercase tracking-tight font-[family-name:var(--font-barlow-condensed)]"
              >
                Power your home with{" "}
                <span className="text-white/70">
                  California sunshine
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-lg"
              >
                AI-powered tools that show your exact savings. No pushy sales tactics. Just honest solar solutions for California families.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
              >
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 text-base font-semibold text-black bg-white hover:bg-gray-100 px-8 py-4 rounded-xl transition-all uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] shadow-2xl shadow-white/25"
                >
                  <Sparkles className="w-5 h-5" />
                  GET YOUR FREE QUOTE
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors font-medium"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                  <span className="uppercase tracking-widest text-sm font-[family-name:var(--font-barlow-condensed)]">Watch How It Works</span>
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm">25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-white/90 text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-white/90 text-sm">BBB A+ Rated</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side - LARGE LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center lg:justify-end"
            >
              <img
                src="/transwhite.webp"
                alt="RIV Solar"
                className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row - Small horizontal cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 pb-10"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">$12M+</p>
                <p className="text-white/60 text-xs">Saved for Homeowners</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">2,500+</p>
                <p className="text-white/60 text-xs">Happy Families</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">25 Years</p>
                <p className="text-white/60 text-xs">Full Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
