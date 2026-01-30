"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the shader component to avoid SSR issues
const GrainGradientShader = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => {
    const { GrainGradient, grainGradientPresets } = mod

    // Return a component that uses the shader
    return function ShaderComponent({ className, style }: { className?: string; style?: React.CSSProperties }) {
      const purplePreset = {
        ...grainGradientPresets[0],
        colorBack: "#0a0a0a",
        color1: "#1a0a2e",
        color2: "#2d1b4e",
        color3: "#0f0f0f",
        color4: "#1a0a2e",
      }

      return (
        <GrainGradient
          {...purplePreset}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            ...style,
          }}
          className={className}
        />
      )
    }
  }),
  {
    ssr: false,
    loading: () => <GrainGradientFallback />
  }
)

// Fallback gradient for SSR and loading states
function GrainGradientFallback() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, #2d1b4e 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, #1a0a2e 0%, transparent 70%),
          #0a0a0a
        `
      }}
    />
  )
}

interface GrainGradientBackgroundProps {
  className?: string
  style?: React.CSSProperties
}

export function GrainGradientBackground({
  className,
  style,
}: GrainGradientBackgroundProps) {
  return (
    <Suspense fallback={<GrainGradientFallback />}>
      <GrainGradientShader className={className} style={style} />
    </Suspense>
  )
}
