"use client"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Zap,
  Sun,
  Battery,
  Wallet,
  Shield,
  Bot,
  Users,
  Clock,
  Wrench,
  Check,
  X,
  FileText,
  Home,
  Sparkles,
  Star,
  Quote
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import NumberFlow from "@number-flow/react"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Animated stat counter component
function AnimatedStat({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? <NumberFlow value={value} /> : "0"}
      {suffix}
    </span>
  )
}

// Comparison data for "The Flip" section
const comparisonData = [
  { category: "Monthly Bill", without: "$350-500", with: "$0-15" },
  { category: "Rate Increases", without: "7-9% yearly", with: "Locked in" },
  { category: "Blackouts", without: "At mercy of grid", with: "Battery backup" },
  { category: "Control", without: "None", with: "100%" },
  { category: "25-Year Cost", without: "$150,000+", with: "$0 after payoff" },
]

// Service cards data
const services = [
  {
    icon: Sun,
    title: "Solar Panels",
    description: "Tier-1 panels designed for California sun. 25-year warranty. Maximum production guaranteed.",
    features: ["Tier-1 equipment", "25-year warranty", "Custom designed for your roof"],
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description: "Keep the lights on when the grid goes down. Store excess energy. Use power on your schedule.",
    features: ["Blackout protection", "Peak shaving", "Energy independence"],
  },
  {
    icon: Wallet,
    title: "Flexible Financing",
    description: "$0 down options. Loans, leases, and cash. We find the best fit for your situation.",
    features: ["$0 down available", "Multiple options", "30% tax credit eligible"],
  },
]

// Why RIV differentiators
const whyRiv = [
  { icon: Bot, title: "AI-Powered", description: "24/7 chatbot + bill analyzer" },
  { icon: Shield, title: "25-Year Warranty", description: "Panels, labor, roof — covered" },
  { icon: Users, title: "In-House Crews", description: "No subcontractors, ever" },
  { icon: Clock, title: "Fast Install", description: "1-2 days, not weeks" },
  { icon: Wrench, title: "Tier-1 Equipment", description: "Only premium panels" },
  { icon: Star, title: "5-Star Reviews", description: "Google, Yelp, BBB A+" },
]

// Process steps
const processSteps = [
  { step: 1, title: "Free Consultation", description: "We analyze your bill, assess your roof, and design a custom system.", time: "Day 1" },
  { step: 2, title: "Custom Design", description: "Engineering team designs your optimal solar + battery configuration.", time: "Week 1-2" },
  { step: 3, title: "Permits & Approvals", description: "We handle all paperwork with the city and utility company.", time: "Week 2-4" },
  { step: 4, title: "Installation Day", description: "Our in-house crew installs your system in 1-2 days.", time: "Week 4-6" },
]

// Testimonials
const testimonials = [
  {
    name: "Maria G.",
    location: "Temecula, CA",
    before: 340,
    after: 11,
    quote: "I was skeptical at first, but RIV walked me through everything. My bill went from $340 to $11. I wish I'd done this years ago.",
    image: "/images/testimonials/maria.jpg",
  },
  {
    name: "James T.",
    location: "San Diego, CA",
    before: 280,
    after: 12,
    quote: "SDG&E rates were killing us. Now we have battery backup AND pay almost nothing. The installation crew was professional and fast.",
    image: "/images/testimonials/james.jpg",
  },
  {
    name: "Marcus T.",
    location: "Corona, CA",
    before: 380,
    after: 15,
    quote: "The AI bill analyzer showed me exactly how much I was overpaying. RIV designed a system that eliminated my bill completely.",
    image: "/images/testimonials/marcus.jpg",
  },
]

// FAQ data
const faqData = [
  {
    question: "How much does solar cost?",
    answer: "Every home is different. Most of our customers pay $0 down and their monthly payment is less than their current electric bill. After the system is paid off (typically 8-12 years), your electricity is essentially free for the remaining 15+ years of warranty.",
  },
  {
    question: "Will solar panels damage my roof?",
    answer: "No. Our installations actually protect your roof from sun damage. We use roof-penetrating mounts with flashing and sealant that meet California building codes. Plus, our 25-year warranty covers any roof issues related to the installation.",
  },
  {
    question: "What about NEM 3.0?",
    answer: "NEM 3.0 reduced the value of exported energy by ~75%. This makes battery storage more important than ever. We design systems optimized for self-consumption, so you use more of what you produce and rely less on grid credits.",
  },
  {
    question: "How long does installation take?",
    answer: "The actual installation takes 1-2 days. The full timeline from signed contract to solar power is typically 4-8 weeks, mostly due to permit processing and utility approval (which we handle entirely for you).",
  },
  {
    question: "What happens during a blackout?",
    answer: "With battery storage, your essential loads stay powered during outages. Without battery, your solar system shuts off for safety reasons (to protect utility workers). We recommend battery for any customer concerned about blackouts.",
  },
  {
    question: "Do I qualify for the 30% tax credit?",
    answer: "If you pay federal income taxes, yes. The 30% Investment Tax Credit (ITC) applies to the total cost of your solar + battery system. We provide all documentation needed for your tax filing.",
  },
  {
    question: "What if I sell my home?",
    answer: "Solar increases home value. Studies show homes with solar sell faster and for more money. If you have a loan, it can transfer to the new owner or be paid off at closing. If you lease, the new owner assumes the lease.",
  },
  {
    question: "Why RIV Solar over big national companies?",
    answer: "We're local, we use in-house crews (not subcontractors), and we have AI tools that help you understand your bill and savings. Big companies treat you like a number. We're neighbors helping neighbors.",
  },
]

export default function SolutionPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/images/precision-grid.png')] opacity-5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
              The Solution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
            style={{ fontWeight: 600, lineHeight: 1.1 }}
          >
            Stop renting your power.
            <br />
            <span className="text-purple-400">Start owning it.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10"
          >
            Solar + battery = locked rates, backup power, and a $0 electric bill.
            <br />
            Here's how RIV Solar makes it happen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Get Your Free Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => {
                document.getElementById("flip")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 rounded-xl text-white hover:bg-white/5 transition-colors"
            >
              See How It Works
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE FLIP (Before/After Comparison) */}
      <section id="flip" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              The <span className="text-purple-400">flip</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg">What changes when you own your power</p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#333] rounded-3xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#333]">
              <div className="p-4 md:p-6"></div>
              <div className="p-4 md:p-6 text-center border-l border-[#333]">
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <X className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)]">Without Solar</span>
                </div>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-[#333] bg-purple-500/10">
                <div className="flex items-center justify-center gap-2 text-purple-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)]">With RIV Solar</span>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-3 border-b border-[#333] last:border-b-0"
              >
                <div className="p-4 md:p-6 flex items-center">
                  <span className="text-white font-medium">{row.category}</span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-[#333] flex items-center justify-center">
                  <span className="text-red-400 font-semibold">{row.without}</span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-[#333] bg-purple-500/5 flex items-center justify-center">
                  <span className="text-purple-400 font-semibold">{row.with}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-[#6b6b6b] text-sm">
              *Based on average California homeowner with 8kW system + battery
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE OFFER */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-[#a3a3a3] text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                What We Offer
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              Your complete solar solution
            </h2>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 bg-[#111] border border-[#333] rounded-2xl hover:border-purple-500/30 transition-all group"
              >
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#a3a3a3] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#6b6b6b]">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY RIV */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              Why <span className="text-purple-400">RIV</span> Solar?
            </h2>
            <p className="text-[#a3a3a3] text-lg">We're not like the big guys. Here's why that matters.</p>
          </motion.div>

          {/* 6-Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {whyRiv.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 md:p-6 bg-[#111] border border-[#333] rounded-2xl hover:border-purple-500/30 transition-all text-center group"
              >
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)] mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full mb-6">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="text-[#a3a3a3] text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                The Process
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              From quote to <span className="text-purple-400">power</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg">4-8 weeks. We handle everything.</p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent hidden sm:block" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center gap-6 mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-purple-600 border-4 border-black rounded-full flex items-center justify-center z-10 hidden sm:flex">
                  <span className="text-white font-bold">{step.step}</span>
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}>
                  <div className="p-6 bg-[#111] border border-[#333] rounded-2xl hover:border-purple-500/30 transition-all ml-0 sm:ml-16 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="sm:hidden w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </span>
                      <span className="text-purple-400 text-sm font-medium">{step.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#a3a3a3]">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: THE MATH */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-purple-950/20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              The <span className="text-purple-400">math</span> makes sense
            </h2>
            <p className="text-[#a3a3a3] text-lg">Real numbers from a real California homeowner</p>
          </motion.div>

          {/* Savings Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#333] rounded-3xl overflow-hidden"
          >
            {/* Top: Hero Savings */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-purple-600 to-purple-500 text-center">
              <p className="text-purple-200 text-sm uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] mb-2">
                25-Year Savings
              </p>
              <p className="text-5xl md:text-7xl font-bold text-white mb-2">
                $<AnimatedStat value={98000} />+
              </p>
              <p className="text-purple-200">That's money back in YOUR pocket</p>
            </div>

            {/* Bottom: Breakdown */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-[#1a1a1a] rounded-xl">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Before</p>
                  <p className="text-2xl font-bold text-red-400">$350<span className="text-sm">/mo</span></p>
                </div>
                <div className="text-center p-4 bg-[#1a1a1a] rounded-xl">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">After</p>
                  <p className="text-2xl font-bold text-purple-400">$12<span className="text-sm">/mo</span></p>
                </div>
                <div className="text-center p-4 bg-[#1a1a1a] rounded-xl">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Tax Credit</p>
                  <p className="text-2xl font-bold text-green-400">30%</p>
                </div>
                <div className="text-center p-4 bg-[#1a1a1a] rounded-xl">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Payback</p>
                  <p className="text-2xl font-bold text-white">~6<span className="text-sm"> yrs</span></p>
                </div>
              </div>

              <p className="text-center text-[#6b6b6b] text-sm">
                *Example based on 8kW system in Riverside County. Your savings depend on your usage, roof, and utility.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-colors"
            >
              <Bot className="w-5 h-5" />
              Analyze Your Bill with AI
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full mb-6">
              <Quote className="w-4 h-4 text-purple-400" />
              <span className="text-[#a3a3a3] text-sm font-medium uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]">
                Real Results
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              2,500+ California homeowners
            </h2>
            <p className="text-[#a3a3a3] text-lg">See what they're saying</p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#111] border border-[#333] rounded-2xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#a3a3a3] mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* Savings Badge */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <span className="text-red-400 line-through">${testimonial.before}/mo</span>
                  <ChevronRight className="w-4 h-4 text-[#6b6b6b]" />
                  <span className="text-purple-400 font-bold">${testimonial.after}/mo</span>
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-[#6b6b6b] text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Star, text: "5-Star Google" },
              { icon: Star, text: "5-Star Yelp" },
              { icon: Shield, text: "BBB A+ Rating" },
              { icon: Shield, text: "Licensed & Insured" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full"
              >
                <badge.icon className="w-4 h-4 text-purple-400" />
                <span className="text-[#a3a3a3] text-sm">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-4"
              style={{ fontWeight: 600 }}
            >
              Questions? <span className="text-purple-400">Answered.</span>
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#111] border border-[#333] rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#a3a3a3] pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-[#6b6b6b] mb-4">Still have questions?</p>
            <button
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement
                chatButton?.click()
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-colors"
            >
              <Bot className="w-5 h-5" />
              Chat with RIV AI
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase font-[family-name:var(--font-barlow-condensed)] mb-6"
            style={{ fontWeight: 600 }}
          >
            Ready to own your power?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] mb-10"
          >
            Get a free, no-pressure quote in minutes.
            <br />
            See exactly what solar can do for your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] text-lg"
            >
              Get Your Free Quote
              <ChevronRight className="w-6 h-6" />
            </Link>

            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
            >
              Try Our AI Tools
              <Bot className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Final trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[#6b6b6b] text-sm mt-10"
          >
            No spam. No pressure. Just honest answers from real Californians.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
