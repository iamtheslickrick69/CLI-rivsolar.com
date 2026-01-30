"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    bullets?: string[];
    link?: { text: string; href: string };
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="h-[44rem] overflow-y-auto flex justify-between relative gap-16 scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      ref={ref}
    >
      {/* Left side - Text content */}
      <div className="relative flex items-start w-full lg:w-2/5">
        <div className="max-w-lg">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24 md:my-32 first:mt-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.15 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase font-[family-name:var(--font-barlow-condensed)] tracking-wide leading-[1.1]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.15 }}
                transition={{ duration: 0.3 }}
                className="text-[#a3a3a3] max-w-md mt-6 text-lg md:text-xl leading-relaxed"
              >
                {item.description}
              </motion.p>
              {item.bullets && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.15 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 space-y-3"
                >
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-base">
                      <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </motion.ul>
              )}
              {item.link && (
                <motion.a
                  href={item.link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.15 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 mt-8 text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all border border-white/20"
                >
                  {item.link.text} <ChevronRight className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>

      {/* Right side - LARGE Sticky Image */}
      <motion.div
        className={cn(
          "hidden lg:block w-3/5 h-[28rem] rounded-3xl sticky top-8 overflow-hidden shadow-2xl",
          contentClassName
        )}
        animate={{
          scale: [0.98, 1],
        }}
        transition={{ duration: 0.4 }}
        key={activeCard}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </div>
  );
};
