"use client"

import React, { useMemo, useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-debounced-dimensions"

interface AnimatedGradientProps {
  colors: string[]
  speed?: number
  blur?: "light" | "medium" | "heavy"
}

interface CircleConfig {
  top: number
  left: number
  tx1: number
  ty1: number
  tx2: number
  ty2: number
  tx3: number
  ty3: number
  tx4: number
  ty4: number
  sizeMultiplier: number
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const [mounted, setMounted] = useState(false)
  const [circleConfigs, setCircleConfigs] = useState<CircleConfig[]>([])

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  )

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]"

  // Generate random values only on client after mount to avoid hydration mismatch
  useEffect(() => {
    const configs = colors.map(() => ({
      top: Math.random() * 50,
      left: Math.random() * 50,
      tx1: Math.random() - 0.5,
      ty1: Math.random() - 0.5,
      tx2: Math.random() - 0.5,
      ty2: Math.random() - 0.5,
      tx3: Math.random() - 0.5,
      ty3: Math.random() - 0.5,
      tx4: Math.random() - 0.5,
      ty4: Math.random() - 0.5,
      sizeMultiplier: (Math.floor(Math.random() * 11) + 5) / 10,
    }))
    setCircleConfigs(configs)
    setMounted(true)
  }, [colors.length])

  if (!mounted) {
    return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn("absolute inset-0", blurClass)}>
        {colors.map((color, index) => {
          const config = circleConfigs[index]
          if (!config) return null
          return (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              style={
                {
                  top: `${config.top}%`,
                  left: `${config.left}%`,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": config.tx1,
                  "--ty-1": config.ty1,
                  "--tx-2": config.tx2,
                  "--ty-2": config.ty2,
                  "--tx-3": config.tx3,
                  "--ty-3": config.ty3,
                  "--tx-4": config.tx4,
                  "--ty-4": config.ty4,
                } as React.CSSProperties
              }
              width={circleSize * config.sizeMultiplier}
              height={circleSize * config.sizeMultiplier}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={color}
                className="opacity-30"
              />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export { AnimatedGradient }
