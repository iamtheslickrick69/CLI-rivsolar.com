"use client"

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function DitheringCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6" style={{ backgroundColor: "#09090B" }}>
      <div
        className="w-full max-w-6xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] border border-zinc-800 bg-zinc-900/50 shadow-2xl min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-purple-900/10" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#9333EA"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              Free Quote in 60 Seconds
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Your energy,{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                your savings.
              </span>
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Join 2,500+ California homeowners who switched to solar with RIV.
              Get your personalized savings estimate in under a minute.
            </p>

            {/* Button */}
            <a
              href="#"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-purple-600 px-10 md:px-12 text-base font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-purple-500/30 shadow-lg shadow-purple-500/25"
            >
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Trust line */}
            <p className="mt-8 text-zinc-500 text-sm">
              No commitment required • Takes 60 seconds • 100% free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
