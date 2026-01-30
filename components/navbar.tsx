"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X, Sun, Battery, DollarSign, Zap } from "lucide-react"

const servicesDropdown = [
  { name: "Residential Solar", description: "Tier-1 panels, in-house crews", icon: Sun },
  { name: "Battery Storage", description: "Tesla Powerwall & Enphase", icon: Battery },
  { name: "Solar Financing", description: "$0 down, loan, lease, or cash", icon: DollarSign },
]

const utilitiesDropdown = [
  { name: "PG&E Customers", description: "Rates increasing ~7%/year" },
  { name: "SDG&E Customers", description: "Highest rates in the nation" },
  { name: "SCE Customers", description: "Complex rate structures" },
]

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [utilitiesOpen, setUtilitiesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main navbar container with squircle shape */}
        <div className="bg-[#09090B]/90 backdrop-blur-xl border border-zinc-800/50 rounded-[20px] px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Spacer for balance */}
            <div className="hidden lg:block w-32"></div>

            {/* Center Nav - Desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-zinc-900/80 rounded-[14px] px-2 py-1.5 border border-zinc-800/50">
              {/* Logo - scrolls to top */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="flex items-center px-2 py-1"
              >
                <img
                  src="/logopurp.jpeg"
                  alt="RIV Solar"
                  className="h-8 w-auto object-contain rounded-[8px]"
                />
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setServicesOpen(!servicesOpen)
                    setUtilitiesOpen(false)
                  }}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-[10px] hover:bg-zinc-800/50"
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-[16px] shadow-2xl shadow-black/50 overflow-hidden">
                    {servicesDropdown.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-[10px] bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                          <item.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{item.name}</div>
                          <div className="text-zinc-500 text-xs">{item.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Utilities Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setUtilitiesOpen(!utilitiesOpen)
                    setServicesOpen(false)
                  }}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-[10px] hover:bg-zinc-800/50"
                >
                  Utilities
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${utilitiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {utilitiesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-[16px] shadow-2xl shadow-black/50 overflow-hidden">
                    {utilitiesDropdown.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800/50 transition-colors"
                      >
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <div>
                          <div className="text-white text-sm font-medium">{item.name}</div>
                          <div className="text-zinc-500 text-xs">{item.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-[10px] hover:bg-zinc-800/50">
                AI Tools
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-[10px] hover:bg-zinc-800/50">
                Reviews
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-[10px] hover:bg-zinc-800/50">
                Careers
              </a>
            </div>

            {/* CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-[12px] transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Get Free Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Logo + Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <img
                  src="/logopurp.jpeg"
                  alt="RIV Solar"
                  className="h-9 w-auto object-contain rounded-[8px]"
                />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-[12px] bg-zinc-800/50 text-zinc-400 hover:text-white transition-colors border border-zinc-700/50"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-[#09090B]/95 backdrop-blur-xl border border-zinc-800/50 rounded-[20px] overflow-hidden">
            <div className="px-5 py-5 space-y-4">
              {/* Services */}
              <div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Services</div>
                {servicesDropdown.map((item) => (
                  <a key={item.name} href="#" className="flex items-center gap-3 py-2.5 text-zinc-300 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-[8px] bg-purple-500/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Utilities */}
              <div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Utilities</div>
                {utilitiesDropdown.map((item) => (
                  <a key={item.name} href="#" className="flex items-center gap-3 py-2.5 text-zinc-300 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-[8px] bg-yellow-500/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-500" />
                    </div>
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Other Links */}
              <div className="space-y-1 pt-3 border-t border-zinc-800">
                <a href="#" className="block py-2.5 text-zinc-300 hover:text-white transition-colors">AI Tools</a>
                <a href="#" className="block py-2.5 text-zinc-300 hover:text-white transition-colors">Reviews</a>
                <a href="#" className="block py-2.5 text-zinc-300 hover:text-white transition-colors">Careers</a>
              </div>

              {/* Mobile CTA */}
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 px-6 py-4 rounded-[14px] mt-4 transition-colors"
              >
                Get Free Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
