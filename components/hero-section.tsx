"use client"

import { motion } from "framer-motion"
import { Sparkles, Play, Shield, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/AdobeStock_599718178.jpeg"
          alt="Solar panels on California home"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        {/* Bottom fade to match site background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#09090B] to-transparent" />
        {/* Purple accent glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 mt-8">
        {/* Centered Logo at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <img
            src="/transwhite.jpeg"
            alt="RIV Solar"
            className="h-72 md:h-96 w-auto object-contain"
          />
        </motion.div>

        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-purple-200 text-sm font-medium">Rated 5 Stars by 2,500+ California Homeowners</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Power your home with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              California sunshine
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-300 mb-8 leading-relaxed"
          >
            $12M+ saved for homeowners. 25-year warranty. AI-powered tools that show your exact savings. No pushy sales tactics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <Sparkles className="w-5 h-5" />
              Get Your Free Quote
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-medium"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
              </div>
              <span>Watch how it works</span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-zinc-400 text-sm">25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">•</span>
              <span className="text-zinc-400 text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">•</span>
              <span className="text-zinc-400 text-sm">CSLB #XXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">•</span>
              <span className="text-zinc-400 text-sm">BBB A+ Rated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  )
}
