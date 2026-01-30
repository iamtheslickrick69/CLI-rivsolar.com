"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

interface CardProps {
  heading: string
  description: string
  imgSrc: string
}

const Card = ({ heading, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-72 md:h-80 w-full cursor-pointer overflow-hidden bg-gray-100 rounded-2xl"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="relative z-20 flex h-full flex-col justify-between p-6">
        <FiArrowRight className="ml-auto text-3xl text-white/70 transition-transform duration-500 group-hover:-rotate-45 group-hover:text-white" />
        <div>
          <h4 className="mb-2">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

interface AnimatedLetterProps {
  letter: string
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
}

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <div className="inline-block h-[48px] md:h-[56px] overflow-hidden font-bold text-4xl md:text-5xl uppercase font-[family-name:var(--font-barlow-condensed)]">
      <motion.span
        className="flex min-w-[4px] flex-col text-white"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  )
}

export { Card as ColorChangeCard }
