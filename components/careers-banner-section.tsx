"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Users, GraduationCap, ChevronRight } from "lucide-react"

export function CareersBannerSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Orange Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/r2/a1house.webp"
          alt="Careers background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6 uppercase tracking-wide">
              <Sparkles className="w-4 h-4" />
              Now Hiring
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 uppercase font-[family-name:var(--font-barlow-condensed)] drop-shadow-lg">
              Join the Solar{" "}
              <span className="text-white/80">Revolution</span>
            </h2>
            <p className="text-lg text-white/90 max-w-md drop-shadow-md">
              Build a career that matters. Help California families save while earning what you deserve.
            </p>
          </motion.div>

          {/* Right Side - Value Props + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-black">$150K+</p>
                  <p className="text-xs text-gray-600">Top Rep Earnings</p>
                </div>
                <div className="text-center border-x border-gray-200">
                  <p className="text-2xl md:text-3xl font-bold text-black">100%</p>
                  <p className="text-xs text-gray-600">Training Provided</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-black">SoCal</p>
                  <p className="text-xs text-gray-600">Based Teams</p>
                </div>
              </div>

              {/* Value Props */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">Uncapped commission + base salary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">No solar experience required — we train you</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">Supportive culture — not toxic hustle vibes</span>
                </div>
              </div>

              {/* Open Positions */}
              <div className="text-xs text-gray-500 mb-4 uppercase tracking-wide font-medium">
                Open Positions: D2D Sales Rep • Solar Consultant • Installer
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/careers"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-all uppercase tracking-widest text-sm font-[family-name:var(--font-barlow-condensed)]"
                >
                  VIEW OPEN POSITIONS
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/careers#culture"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-black text-black hover:bg-black/5 font-semibold px-6 py-3 rounded-lg transition-colors uppercase tracking-widest text-sm font-[family-name:var(--font-barlow-condensed)]"
                >
                  OUR CULTURE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
