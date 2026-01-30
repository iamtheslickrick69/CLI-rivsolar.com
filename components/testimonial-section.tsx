"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Shield, Quote } from "lucide-react"

// Background images that rotate
const backgroundImages = [
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house3.webp",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house1.webp",
  "https://pub-716deb83cd7742f6beb7fe0ea0cdebcb.r2.dev/house4.webp",
]

export function TestimonialSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Rotate images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Rotating Background Images - CROSSFADE (no gap) */}
      <div className="absolute inset-0 z-0">
        {/* All images stacked - only active one visible */}
        {backgroundImages.map((src, index) => (
          <motion.div
            key={src}
            initial={false}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 12, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <img
              src={src}
              alt="California home with solar"
              className="w-full h-full object-cover" loading="lazy"
            />
          </motion.div>
        ))}

        {/* Very light overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Glass badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium mb-8 uppercase tracking-wide shadow-lg">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Real California Homeowners
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase font-[family-name:var(--font-barlow-condensed)] drop-shadow-lg">
            2,500+ Families{" "}
            <span className="text-yellow-300">
              Saving Big
            </span>
          </h2>
          <p className="text-white text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto">
            Don't take our word for it — hear from homeowners just like you.
          </p>
        </div>

        {/* Testimonials Card - SMALLER & MORE TRANSPARENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto"
        >
          <TestimonialsGlass />
        </motion.div>

        {/* Trust badges - Glass pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <div className="flex items-center gap-2 text-white bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">5.0 Google Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">5.0 Yelp Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3 rounded-full shadow-lg">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">BBB A+ Rated</span>
          </div>
        </motion.div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

// Glass-themed testimonials
function TestimonialsGlass() {
  const testimonials = [
    {
      id: 1,
      quote: "Our SDG&E bill went from $340 to $11. I still can't believe it. RIV Solar changed our lives.",
      author: "Maria G.",
      role: "Homeowner in Temecula",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    },
    {
      id: 2,
      quote: "After getting quotes from 5 companies, RIV was the only one who didn't pressure us. Honest pricing, quality install.",
      author: "James T.",
      role: "Homeowner in San Diego",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      id: 3,
      quote: "The battery storage was a game-changer. During the last outage, we were the only house on the block with power.",
      author: "Angela R.",
      role: "Homeowner in Riverside",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      id: 4,
      quote: "They explained NEM 3.0 in a way that actually made sense. System was designed perfectly for the new rules.",
      author: "Marcus W.",
      role: "Homeowner in Corona",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      id: 5,
      quote: "Two kids, pool, AC blasting all summer — and our bill is now $15. Should've done this years ago.",
      author: "Lisa & Tom P.",
      role: "Family in Murrieta",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Quote Container - Smaller */}
      <div className="relative px-4">
        <Quote className="absolute -left-1 -top-1 w-6 h-6 text-white/15 rotate-180" />

        <p
          className={`text-lg md:text-xl font-medium text-white text-center max-w-lg leading-relaxed transition-all duration-400 ease-out ${
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100"
          }`}
        >
          {displayedQuote}
        </p>

        <Quote className="absolute -right-1 -bottom-1 w-6 h-6 text-white/15" />
      </div>

      <div className="flex flex-col items-center gap-3">
        {/* Role text */}
        <p
          className={`text-xs text-white/60 tracking-[0.15em] uppercase transition-all duration-500 ease-out ${
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {displayedRole}
        </p>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index
            const isHovered = hoveredIndex === index && !isActive
            const showName = isActive || isHovered

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center gap-0 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive
                    ? "bg-white/25 backdrop-blur-sm shadow-md border border-white/30"
                    : "bg-transparent hover:bg-white/10 border border-transparent"
                } ${showName ? "pr-3 pl-1 py-1" : "p-0.5"}`}
              >
                {/* Avatar - Smaller */}
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className={`w-8 h-8 rounded-full object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? "ring-2 ring-white/50" : "ring-0"
                    } ${!isActive && "hover:scale-105"}`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <span
                      className="text-xs font-semibold whitespace-nowrap block text-white"
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
