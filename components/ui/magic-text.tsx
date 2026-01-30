"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface MagicTextProps {
  text: string
  highlightWords?: string[]
  className?: string
}

interface WordProps {
  children: string
  progress: any
  range: number[]
  isHighlight?: boolean
}

const Word: React.FC<WordProps> = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mr-2 md:mr-3">
      <span className={`absolute ${isHighlight ? "opacity-10" : "opacity-15"}`}>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className={isHighlight ? "text-purple-600 font-bold" : ""}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const MagicText: React.FC<MagicTextProps> = ({
  text,
  highlightWords = [],
  className = ""
}) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = text.split(" ")

  // Check if a word should be highlighted (handles punctuation)
  const shouldHighlight = (word: string) => {
    const cleanWord = word.replace(/[.,!?;:'"—-]/g, "").toLowerCase()
    return highlightWords.some(hw => cleanWord.includes(hw.toLowerCase()))
  }

  return (
    <p
      ref={container}
      className={`flex flex-wrap leading-relaxed ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={shouldHighlight(word)}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}
