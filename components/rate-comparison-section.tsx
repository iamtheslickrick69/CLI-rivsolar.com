"use client";

import { motion } from "framer-motion";
import { BarChart } from "@/components/ui/statistics-card";

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

const rateData = [
  {
    value: 95,
    label: "SDG&E",
    sublabel: "Highest in USA",
    className: "bg-red-500/80",
    delay: 0.2,
  },
  {
    value: 78,
    label: "SCE",
    sublabel: "So. California",
    className: "bg-orange-500/80",
    delay: 0.4,
  },
  {
    value: 72,
    label: "PG&E",
    sublabel: "No. California",
    className: "bg-yellow-500/80",
    delay: 0.6,
  },
  {
    value: 12,
    label: "SOLAR",
    sublabel: "With RIV Solar",
    className: "bg-purple-500",
    showToolTip: true,
    tooltipText: "Your Cost",
    delay: 0.8,
  },
];

export function RateComparisonSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <style>{css}</style>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            Rate Comparison
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            See Why California Is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Going Solar
            </span>
          </h2>
          <p className="text-lg text-zinc-400">
            Compare average electricity costs across California's major utilities vs. going solar with RIV. The numbers speak for themselves.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="relative mx-auto flex h-[400px] md:h-[450px] max-w-4xl items-end justify-center gap-3 md:gap-4">
          {rateData.map((props, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                damping: 12,
              }}
              className="h-full w-full max-w-[140px]"
            >
              <BarChart {...props} suffix="¢/kWh" />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          *Average rates as of 2025. Solar cost based on 25-year system ownership.
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-[14px] transition-colors shadow-lg shadow-purple-500/25"
          >
            Calculate Your Savings
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
