"use client"

import { motion } from "framer-motion"
import { Star, Shield, Award, CheckCircle } from "lucide-react"

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Trusted by California homeowners.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            From Riverside to San Diego.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Trust badges grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                5-Star Google
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Star className="w-5 h-5 fill-red-500 text-red-500" />
                5-Star Yelp
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                BBB A+ Rating
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Licensed & Insured
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                25-Year Warranty
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" />
                NABCEP Certified
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                Tesla Powerwall
              </div>
              <div className="text-white font-semibold text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-400" />
                Enphase Certified
              </div>
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-purple-600/80 backdrop-blur-sm border border-purple-500 rounded-full text-sm text-white flex items-center gap-2">
                Read customer reviews
                <span aria-hidden="true">›</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
