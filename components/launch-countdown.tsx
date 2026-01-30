"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CORRECT_PASSWORD = "CITYBOYYY"

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  // Generate stars only on client to avoid hydration mismatch
  const [stars, setStars] = useState<Array<{id: number, size: number, top: number, left: number, delay: number, duration: number}>>([])

  useEffect(() => {
    setStars(
      [...Array(50)].map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 3,
      }))
    )
  }, [])

  // Target: Monday, Feb 2nd, 2026 at 10:00 AM PST
  const targetDate = new Date("2026-02-02T10:00:00-08:00").getTime()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password.toUpperCase() === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword("")
    }
  }

  if (isAuthenticated) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          100% { transform: translateX(-200px) translateY(200px); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .star {
          animation: twinkle ease-in-out infinite;
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
        .shooting-star {
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
          animation: shootingStar 2s ease-out infinite;
        }
        .glow-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#05050a]" />

      {/* Subtle star field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute rounded-full bg-white"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              top: star.top + "%",
              left: star.left + "%",
              animationDelay: star.delay + "s",
              animationDuration: star.duration + "s",
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: "15%", right: "-100px", animationDelay: "0s" }} />
      <div className="shooting-star" style={{ top: "35%", right: "-100px", animationDelay: "3s" }} />
      <div className="shooting-star" style={{ top: "65%", right: "-100px", animationDelay: "6s" }} />

      {/* Ambient glow */}
      <div className="glow-pulse absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10 p-10 md:p-14 max-w-xl mx-4 w-full">

        {/* Rocket image with subtle float */}
        <div className="float relative">
          <div className="glow-pulse absolute -inset-8 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="relative w-64 h-40 md:w-80 md:h-48">
            <Image
              src="/rocket.jpg"
              alt="Launch"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.3em] text-white uppercase">
            Launching In
          </h1>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Countdown timer */}
        <div className="flex items-center gap-2 md:gap-4">
          <TimeBlock value={timeLeft.days} label="DAYS" />
          <span className="text-white/20 text-3xl md:text-4xl font-thin pb-6">:</span>
          <TimeBlock value={timeLeft.hours} label="HRS" />
          <span className="text-white/20 text-3xl md:text-4xl font-thin pb-6">:</span>
          <TimeBlock value={timeLeft.minutes} label="MIN" />
          <span className="text-white/20 text-3xl md:text-4xl font-thin pb-6">:</span>
          <TimeBlock value={timeLeft.seconds} label="SEC" />
        </div>

        {/* Launch date */}
        <p className="text-white/30 text-xs md:text-sm tracking-[0.4em] uppercase">
          February 2, 2026 • 10:00 AM PST
        </p>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5 mt-2">
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="ENTER ACCESS CODE"
              className={`relative w-full px-8 py-5 bg-white/[0.03] border ${
                error ? "border-red-500/40" : "border-white/10"
              } rounded text-white placeholder-white/25 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 text-center tracking-[0.25em] text-sm`}
              autoFocus
            />
            {error && (
              <p className="text-red-400/70 text-xs mt-3 text-center tracking-[0.2em] uppercase">
                Invalid access code
              </p>
            )}
          </div>

          <button
            type="submit"
            className="group relative w-full py-5 bg-white text-black font-medium tracking-[0.25em] text-sm uppercase rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Access Site</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </div>
    </div>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
      <span className="text-5xl md:text-7xl font-thin text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] md:text-[10px] text-white/30 mt-3 tracking-[0.4em] uppercase font-light">
        {label}
      </span>
    </div>
  )
}
