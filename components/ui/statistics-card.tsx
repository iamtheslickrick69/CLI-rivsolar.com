"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const css = `
.candy-bg-dark {
    background-color: rgba(39, 39, 42, 0.3);
    background-image: linear-gradient(
      135deg,
      rgba(63, 63, 70, 0.5) 25%,
      transparent 25.5%,
      transparent 50%,
      rgba(63, 63, 70, 0.5) 50.5%,
      rgba(63, 63, 70, 0.5) 75%,
      transparent 75.5%,
      transparent
    );
    background-size: 10px 10px;
  }`;

interface BarChartProps {
  value: number;
  label: string;
  sublabel?: string;
  className?: string;
  showToolTip?: boolean;
  tooltipText?: string;
  delay?: number;
  suffix?: string;
}

const BarChart: React.FC<BarChartProps> = ({
  value,
  label,
  sublabel,
  className = "",
  showToolTip = false,
  tooltipText = "",
  delay = 0,
  suffix = "¢",
}) => {
  return (
    <div className="group relative h-full w-full">
      <div className="candy-bg-dark relative h-full w-full overflow-hidden rounded-[30px] border border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 100, height: 0 }}
          whileInView={{ opacity: 1, y: 0, height: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", damping: 20, delay }}
          className={cn(
            "absolute bottom-0 mt-auto w-full rounded-[30px] p-3 text-white",
            className || "bg-zinc-600/80"
          )}
        >
          <div className="relative flex h-14 w-full items-center justify-center gap-1 rounded-full bg-black/30 text-xl font-bold tracking-tighter">
            <NumberFlow value={value} />
            <span>{suffix}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100, height: 0 }}
        whileInView={{ opacity: 1, y: 0, height: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", damping: 15, delay }}
        className="absolute bottom-0 w-full pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: showToolTip ? 1 : 0, y: showToolTip ? 0 : 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", damping: 15, delay: delay + 0.3 }}
          className={cn(
            "absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-3 py-1.5 text-white text-sm font-semibold whitespace-nowrap",
            className || "bg-zinc-600"
          )}
        >
          <div
            className={cn(
              "absolute -bottom-9 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white transition-all duration-300 ease-in-out",
              className || "bg-zinc-600"
            )}
          />
          <svg
            className={cn(
              "absolute -bottom-2 left-1/2 -translate-x-1/2",
              className?.includes("bg-purple") ? "text-purple-500" : "text-zinc-600"
            )}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.83855 8.41381C4.43827 9.45255 5.93756 9.45255 6.53728 8.41381L9.65582 3.01233C10.2555 1.97359 9.50589 0.675159 8.30646 0.675159H2.06937C0.869935 0.675159 0.120287 1.97359 0.720006 3.01233L3.83855 8.41381Z"
              fill="currentColor"
            />
          </svg>
          {tooltipText}
        </motion.div>
      </motion.div>
      <div className="text-center mt-3">
        <p className="text-white font-semibold text-sm md:text-base">{label}</p>
        {sublabel && (
          <p className="text-zinc-500 text-xs">{sublabel}</p>
        )}
      </div>
    </div>
  );
};

export { BarChart };
