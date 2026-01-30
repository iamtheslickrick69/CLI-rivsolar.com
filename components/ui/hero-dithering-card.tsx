"use client"

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function DitheringCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-8 w-full flex justify-center items-center px-4 md:px-6 bg-black">
      <div
        className="w-full max-w-4xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-purple-500/30 bg-[#0a0a0a] min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-[#1a1a1a]" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#9333ea"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Purple gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-600/10 pointer-events-none" />

          <div className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              FREE QUOTE IN 60 SECONDS
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] uppercase font-[family-name:var(--font-barlow-condensed)]">
              Your energy,{" "}
              <br />
              <span className="text-purple-400">
                your savings.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#a3a3a3] text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Join 2,500+ California homeowners who switched to solar with RIV.
              Get your personalized savings estimate in under a minute.
            </p>

            {/* Button */}
            <a
              href="#"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-purple-600 hover:bg-purple-500 px-8 md:px-10 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-purple-500/30 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              <span className="relative z-10">GET YOUR FREE QUOTE</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Trust line */}
            <p className="mt-6 text-[#6b6b6b] text-xs">
              No commitment required • Takes 60 seconds • 100% free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
