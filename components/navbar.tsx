"use client"

import { useState } from "react"
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
                src="/transwhite.jpeg"
                alt="RIV Solar"
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
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#111] border border-[#333] rounded-xl overflow-hidden shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-white hover:text-purple-400 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/connect"
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-black bg-white hover:bg-[#e5e5e5] px-6 py-4 rounded-lg mt-4 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
