"use client"

import { useState } from "react"
import { GripVertical, X, Sun, Zap, DollarSign, Home, Shield, Leaf, TrendingUp, Battery, CloudOff, Flame } from "lucide-react"

interface ComparisonItem {
  icon: React.ReactNode
  text: string
  detail?: string
}

interface SolarComparisonProps {
  withoutSolar: ComparisonItem[]
  withSolar: ComparisonItem[]
}

function SolarComparison({ withoutSolar, withSolar }: SolarComparisonProps) {
  const [inset, setInset] = useState<number>(50)
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false)

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return

    const rect = e.currentTarget.getBoundingClientRect()
    let x = 0

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left
    } else if ("clientX" in e) {
      x = e.clientX - rect.left
    }

    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setInset(percentage)
  }

  return (
    <div
      className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-[24px] md:rounded-[32px] select-none border border-zinc-800"
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      {/* WITHOUT SOLAR - Left Side (Background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-red-950/30 to-zinc-900">
        <div className="absolute inset-0 p-6 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <X className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Without Solar</h3>
              <p className="text-red-400/80 text-sm">The painful reality</p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4 mt-8">
            {withoutSolar.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 md:p-4 bg-red-500/5 border border-red-500/20 rounded-[12px]"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">{item.text}</p>
                  {item.detail && (
                    <p className="text-red-300/60 text-xs md:text-sm mt-0.5">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WITH SOLAR - Right Side (Overlay with clip) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-purple-950/40 to-zinc-900"
        style={{
          clipPath: `inset(0 0 0 ${inset}%)`,
        }}
      >
        <div className="absolute inset-0 p-6 md:p-10">
          <div className="flex items-center gap-2 mb-6 justify-end">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white text-right">With Solar</h3>
              <p className="text-purple-400/80 text-sm text-right">Your brighter future</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-purple-400" />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4 mt-8">
            {withSolar.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-[12px] flex-row-reverse text-right"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">{item.text}</p>
                  {item.detail && (
                    <p className="text-green-300/60 text-xs md:text-sm mt-0.5">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute z-30 top-0 h-full w-1 bg-white/50"
        style={{
          left: `${inset}%`,
          transform: "translateX(-50%)",
        }}
      >
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl cursor-ew-resize flex items-center justify-center hover:scale-110 transition-transform border-4 border-purple-500"
          onTouchStart={(e) => {
            setOnMouseDown(true)
            onMouseMove(e)
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true)
            onMouseMove(e)
          }}
          onTouchEnd={() => setOnMouseDown(false)}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-5 w-5 text-purple-600" />
        </button>

        {/* Labels */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap -translate-x-full -ml-2">
            WITHOUT
          </span>
          <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap translate-x-0 ml-2">
            WITH
          </span>
        </div>
      </div>

      {/* Drag instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20">
          ← Drag to compare →
        </div>
      </div>
    </div>
  )
}

export { SolarComparison }
