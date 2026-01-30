"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Problem", href: "/problem" },
  { name: "Solution", href: "/solution" },
  { name: "AI Tools", href: "/ai-tools" },
  { name: "Insights", href: "/insights" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main navbar container */}
        <div className="bg-black/80 backdrop-blur-xl border border-[#1a1a1a] rounded-xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Left - LARGER */}
            <Link
              href="/"
              className="flex items-center"
            >
              <img
                src="/transwhite.webp"
                alt="RIV Solar"
                width={84}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Center Nav - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white hover:text-purple-400 transition-colors px-4 py-2 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-[#e5e5e5] px-6 py-3 rounded-lg transition-all uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
              >
                Connect
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors border border-[#333]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-2 bg-[#111]/95 backdrop-blur-xl border border-[#333] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-5 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3.5 text-white hover:text-purple-400 transition-colors uppercase tracking-widest font-medium font-[family-name:var(--font-barlow-condensed)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/connect"
                    className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-black bg-white hover:bg-[#e5e5e5] px-6 py-4 rounded-xl mt-3 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Connect
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
