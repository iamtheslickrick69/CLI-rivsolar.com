"use client"

import { useState, useRef } from "react"
import { GripVertical, X, Sun } from "lucide-react"

interface ComparisonItem {
  icon: React.ReactNode
  text: string
  detail?: string
}

interface SolarComparisonProps {
  withoutSolar: ComparisonItem[]
  withSolar: ComparisonItem[]
  withoutChartSrc?: string
  withChartSrc?: string
}

function SolarComparison({ withoutSolar, withSolar, withoutChartSrc, withChartSrc }: SolarComparisonProps) {
  const [inset, setInset] = useState<number>(50)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-slide on cursor movement (no drag required)
  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    let x = 0

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left
    } else if ("clientX" in e) {
      x = e.clientX - rect.left
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setInset(percentage)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[720px] md:min-h-[760px] overflow-hidden rounded-[24px] md:rounded-[32px] select-none border border-[#333] cursor-ew-resize"
      onMouseMove={onMouseMove}
      onTouchMove={onMouseMove}
    >
      {/* WITHOUT SOLAR - Left Side (Background) - Orange theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-orange-950/20 to-[#111]">
        <div className="absolute inset-0 p-5 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <X className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase font-[family-name:var(--font-barlow-condensed)]">Without Solar</h3>
              <p className="text-orange-400/80 text-sm">Buying from the grid</p>
            </div>
          </div>

          {/* Chart Image */}
          {withoutChartSrc && (
            <div className="mb-4 rounded-xl overflow-hidden border border-orange-500/20 bg-white">
              <img
                src={withoutChartSrc}
                alt="Energy purchased from grid"
                className="w-full h-[140px] md:h-[160px] object-contain"
              />
            </div>
          )}

          {/* Comparison Items */}
          <div className="space-y-2">
            {withoutSolar.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-orange-500/5 border border-orange-500/20 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                  {item.detail && (
                    <p className="text-orange-300/60 text-xs truncate">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WITH SOLAR - Right Side (Overlay with clip) - Purple theme */}
      <div
        className="absolute inset-0 bg-[#111]"
        style={{
          clipPath: `inset(0 0 0 ${inset}%)`,
        }}
      >
        <div className="absolute inset-0 p-5 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 justify-end">
            <div className="text-right">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase font-[family-name:var(--font-barlow-condensed)]">With Solar</h3>
              <p className="text-purple-400/80 text-sm">Sending back to the grid</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          {/* Chart Image */}
          {withChartSrc && (
            <div className="mb-4 rounded-xl overflow-hidden border border-purple-500/20 bg-white">
              <img
                src={withChartSrc}
                alt="Energy sent back to grid"
                className="w-full h-[140px] md:h-[160px] object-contain"
              />
            </div>
          )}

          {/* Comparison Items */}
          <div className="space-y-2">
            {withSolar.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl flex-row-reverse text-right"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{item.text}</p>
                  {item.detail && (
                    <p className="text-purple-300/60 text-xs truncate">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute z-30 top-0 h-full w-1 bg-white/60 pointer-events-none"
        style={{
          left: `${inset}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-[#333]"
        >
          <GripVertical className="h-4 w-4 text-[#333]" />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap -translate-x-full -ml-1 uppercase tracking-wide">
            WITHOUT
          </span>
          <span className="bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap translate-x-0 ml-1 uppercase tracking-wide">
            WITH
          </span>
        </div>
      </div>

      {/* Hover instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-[#333] uppercase tracking-wide">
          ← Move cursor to compare →
        </div>
      </div>
    </div>
  )
}

export { SolarComparison }
