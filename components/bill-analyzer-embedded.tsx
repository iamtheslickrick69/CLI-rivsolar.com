"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDropzone } from "react-dropzone"
import NumberFlow from "@number-flow/react"
import {
  Upload,
  FileText,
  Zap,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Fuel,
  PiggyBank,
  Share2,
  Mail,
  Shield,
  Sparkles,
  Check,
  ArrowRight,
  BarChart3,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types
interface BillAnalysis {
  utility: string
  utilityLogo: string
  accountHolder: string
  serviceAddress: string
  billingPeriod: string
  totalBill: number
  totalUsage: number
  effectiveRate: number
  tier1Usage: number
  tier1Rate: number
  tier2Usage: number
  tier2Rate: number
  climateCredit: number
  dailyAverage: number
  yoyChange: number
  ratePlan: string
  recommendedPlan: string
  recommendedPlanSavings: number
  billGrade: "A" | "B" | "C" | "D" | "F"
  annualCost: number
  solarMonthlyCost: number
  solarAnnualSavings: number
  deliveryCharges: number
  generationCharges: number
  feesAndSurcharges: number
  taxes: number
  stateAvgRate: number
  nationalAvgRate: number
  neighborhoodComparison: number
}

// Mock data based on the real SCE bill
const mockAnalysis: BillAnalysis = {
  utility: "Southern California Edison",
  utilityLogo: "/SCE.jpeg",
  accountHolder: "SUAREZ, HERLINDA",
  serviceAddress: "1366 S PLEASANT AVE, ONTARIO, CA 91761",
  billingPeriod: "09/10/24 - 10/08/24",
  totalBill: 151.84,
  totalUsage: 664,
  effectiveRate: 0.36,
  tier1Usage: 502,
  tier1Rate: 0.33,
  tier2Usage: 162,
  tier2Rate: 0.42,
  climateCredit: 86.0,
  dailyAverage: 22.9,
  yoyChange: 23,
  ratePlan: "DOMESTIC",
  recommendedPlan: "TOU-D-PRIME",
  recommendedPlanSavings: 18,
  billGrade: "C",
  annualCost: 2856,
  solarMonthlyCost: 89,
  solarAnnualSavings: 1788,
  deliveryCharges: 61.68,
  generationCharges: 88.72,
  feesAndSurcharges: 5.44,
  taxes: 0.2,
  stateAvgRate: 0.28,
  nationalAvgRate: 0.16,
  neighborhoodComparison: 23,
}

// Step indicator component
function StepIndicator({ currentStep, compact = false }: { currentStep: number; compact?: boolean }) {
  const steps = [
    { num: 1, label: "Upload" },
    { num: 2, label: "Guess" },
    { num: 3, label: "Results" },
  ]

  return (
    <div className={cn("flex items-center justify-center gap-2", compact ? "mb-5" : "mb-8")}>
      {steps.map((step, idx) => (
        <div key={step.num} className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "rounded-full flex items-center justify-center font-semibold transition-all",
                compact ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm",
                currentStep >= step.num
                  ? "bg-white text-black"
                  : "bg-[#333] text-[#6b6b6b]"
              )}
            >
              {currentStep > step.num ? (
                <Check className={compact ? "w-3 h-3" : "w-4 h-4"} />
              ) : (
                step.num
              )}
            </div>
            <span
              className={cn(
                "font-medium transition-colors",
                compact ? "text-xs" : "text-sm",
                currentStep >= step.num ? "text-white" : "text-[#6b6b6b]"
              )}
            >
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={cn(
                "h-0.5 mx-2 transition-colors",
                compact ? "w-8" : "w-12 mx-3",
                currentStep > step.num ? "bg-white" : "bg-[#333]"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// Rate comparison bar
function RateComparisonBar({ userRate, stateAvg, nationalAvg }: { userRate: number; stateAvg: number; nationalAvg: number }) {
  const maxRate = Math.max(userRate, stateAvg, nationalAvg) * 1.2

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[#a3a3a3]">How Your Rate Compares</p>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#6b6b6b] w-24">Your Rate</span>
          <div className="flex-1 h-6 bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(userRate / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full bg-white rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-black font-semibold">${userRate.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#6b6b6b] w-24">CA Average</span>
          <div className="flex-1 h-6 bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stateAvg / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full bg-[#6b6b6b] rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-semibold">${stateAvg.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#6b6b6b] w-24">US Average</span>
          <div className="flex-1 h-6 bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(nationalAvg / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-full bg-[#444] rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-[#a3a3a3] font-semibold">${nationalAvg.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <p className="text-xs text-white font-medium">
        You're paying {((userRate - nationalAvg) / nationalAvg * 100).toFixed(0)}% more than the national average
      </p>
    </div>
  )
}

// Before/After comparison card
function BeforeAfterCard({ currentCost, solarCost, savings }: { currentCost: number; solarCost: number; savings: number }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 bg-[#1a1a1a] border border-[#333] rounded-2xl">
        <p className="text-sm text-[#a3a3a3] font-medium mb-1">Without Solar</p>
        <p className="text-3xl font-bold text-white">
          $<NumberFlow value={currentCost} />
          <span className="text-lg font-normal">/yr</span>
        </p>
        <p className="text-xs text-[#6b6b6b] mt-1">Current annual cost</p>
      </div>

      <div className="p-5 bg-[#111] border border-[#333] rounded-2xl">
        <p className="text-sm text-[#a3a3a3] font-medium mb-1">With Solar</p>
        <p className="text-3xl font-bold text-white">
          $<NumberFlow value={solarCost} />
          <span className="text-lg font-normal">/yr</span>
        </p>
        <p className="text-xs text-[#6b6b6b] mt-1">Estimated with solar</p>
      </div>

      <div className="col-span-2 p-5 bg-white rounded-2xl text-center">
        <p className="text-sm text-[#6b6b6b] mb-1">Your Annual Savings</p>
        <p className="text-4xl font-bold text-black">
          $<NumberFlow value={savings} />
        </p>
        <p className="text-xs text-[#6b6b6b] mt-1">That's ${(savings / 12).toFixed(0)}/month back in your pocket</p>
      </div>
    </div>
  )
}

export function BillAnalyzerEmbedded({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [guessedRate, setGuessedRate] = useState(25)
  const [activeTab, setActiveTab] = useState<"overview" | "usage" | "savings">("overview")
  const [analysis] = useState<BillAnalysis>(mockAnalysis)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showBillDetails, setShowBillDetails] = useState(false)
  const [showRateDetails, setShowRateDetails] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0])
      setTimeout(() => setStep(2), 500)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
  })

  const handleGuessSubmit = () => {
    setStep(3)
    setTimeout(() => setShowConfetti(true), 1000)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const gasEquivalent = (analysis.effectiveRate * 33.7).toFixed(0)
  const rateDifference = Math.abs(((analysis.effectiveRate - guessedRate / 100) / (guessedRate / 100) * 100)).toFixed(0)
  const isHigherThanGuess = analysis.effectiveRate > guessedRate / 100

  const gradeColors = {
    A: "text-white bg-[#1a1a1a] border-[#333]",
    B: "text-white bg-[#1a1a1a] border-[#333]",
    C: "text-white bg-[#1a1a1a] border-[#333]",
    D: "text-white bg-[#1a1a1a] border-[#333]",
    F: "text-white bg-[#1a1a1a] border-[#333]",
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <StepIndicator currentStep={step} compact={compact} />

      <div className={cn("grid grid-cols-1 lg:grid-cols-2", compact ? "gap-5" : "gap-8")}>
        {/* Left Column - Upload / Bill Preview */}
        <div>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              {/* Gradient border wrapper */}
              <div className={cn(
                "relative rounded-3xl p-[2px] group/upload",
                isDragActive
                  ? "bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600"
                  : "bg-gradient-to-br from-purple-500/30 via-[#333] to-purple-500/30 hover:from-purple-500/50 hover:via-purple-500/20 hover:to-purple-500/50"
              )}>
                <div
                  {...getRootProps()}
                  className={cn(
                    "rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all bg-[#0a0a0a]",
                    compact ? "min-h-[280px] p-6" : "min-h-[400px] p-8",
                    isDragActive && "bg-[#111]"
                  )}
                >
                  <input {...getInputProps()} />
                  <div className={cn(
                    "bg-[#1a1a1a] rounded-2xl mb-4 group-hover/upload:bg-purple-500/20 transition-colors",
                    compact ? "p-3" : "p-5"
                  )}>
                    <Upload className={cn("text-[#a3a3a3] group-hover/upload:text-purple-400 transition-colors", compact ? "w-8 h-8" : "w-10 h-10")} />
                  </div>
                  <h3 className={cn(
                    "font-semibold text-white mb-2 uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)]",
                    compact ? "text-base" : "text-xl"
                  )}>
                    {isDragActive ? "Drop your bill here" : "Upload Your Utility Bill"}
                  </h3>
                  <p className={cn("text-[#a3a3a3] text-center mb-3", compact ? "text-sm" : "")}>
                    Drag & drop or click to browse
                  </p>
                  <div className={cn("flex items-center gap-2 text-[#6b6b6b]", compact ? "text-xs" : "text-sm")}>
                    <FileText className={compact ? "w-3 h-3" : "w-4 h-4"} />
                    <span>PDF, PNG, or JPG supported</span>
                  </div>

                  {/* Utility logos */}
                  <div className={cn("flex items-center gap-4", compact ? "mt-5" : "mt-8")}>
                    <img src="/PGE.jpeg" alt="PG&E" className={cn("opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded", compact ? "h-6" : "h-8")} />
                    <img src="/SDGE.jpeg" alt="SDG&E" className={cn("opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded", compact ? "h-6" : "h-8")} />
                    <img src="/SCE.jpeg" alt="SCE" className={cn("opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded", compact ? "h-6" : "h-8")} />
                  </div>

                  {/* Privacy note */}
                  <div className={cn("flex items-center gap-2 text-[#6b6b6b]", compact ? "mt-4 text-[10px]" : "mt-6 text-xs")}>
                    <Shield className={compact ? "w-3 h-3" : "w-4 h-4"} />
                    <span>Your bill is processed securely and never stored</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full"
            >
              {/* Bill Preview Card */}
              <div className={cn("bg-[#1a1a1a] border border-[#333] rounded-3xl h-full", compact ? "p-4" : "p-6")}>
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={analysis.utilityLogo}
                    alt={analysis.utility}
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{analysis.utility}</p>
                    <p className="text-sm text-[#a3a3a3]">{analysis.billingPeriod}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-[#a3a3a3] text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Analyzed</span>
                  </div>
                </div>

                {/* Mini bill preview */}
                <div className="bg-[#111] rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#a3a3a3]">Service Address</span>
                    <span className="text-sm font-medium text-white">{analysis.serviceAddress.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#a3a3a3]">Rate Plan</span>
                    <span className="text-sm font-medium text-white">{analysis.ratePlan}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a3a3a3]">Billing Period</span>
                    <span className="text-sm font-medium text-white">29 days</span>
                  </div>
                </div>

                {/* Guess Your Rate (Step 2) */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-1 uppercase tracking-wide font-[family-name:var(--font-barlow-condensed)]">
                        Guess your electricity rate
                      </h3>
                      <p className="text-[#a3a3a3] text-sm">
                        How much do you think you pay per kWh?
                      </p>
                    </div>

                    <div className="text-center py-4">
                      <span className="text-5xl font-bold text-white">
                        {guessedRate}¢
                      </span>
                      <span className="text-2xl text-[#6b6b6b]">/kWh</span>
                    </div>

                    <div className="space-y-2">
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={guessedRate}
                        onChange={(e) => setGuessedRate(parseInt(e.target.value))}
                        className="w-full h-3 bg-[#333] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                      <div className="flex justify-between text-sm text-[#6b6b6b]">
                        <span>10¢</span>
                        <span>80¢</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-[#a3a3a3] bg-[#111] p-3 rounded-xl">
                      <Fuel className="w-4 h-4 text-[#a3a3a3]" />
                      <span>
                        At {guessedRate}¢/kWh, that's like <span className="font-semibold text-white">${((guessedRate / 100) * 33.7).toFixed(0)}/gallon</span> for gas
                      </span>
                    </div>

                    <button
                      onClick={handleGuessSubmit}
                      className="w-full py-4 bg-white hover:bg-[#e5e5e5] text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
                    >
                      Reveal My Actual Rate
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* Guess Reveal (Step 3) - Simplified */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {/* Rate Reveal Card */}
                    <div className="bg-[#111] rounded-2xl p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-[#6b6b6b] uppercase tracking-wide">You guessed</p>
                          <p className="text-2xl font-bold text-[#6b6b6b] line-through">{guessedRate}¢</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-500" />
                        <div className="text-right">
                          <p className="text-xs text-[#6b6b6b] uppercase tracking-wide">Actual rate</p>
                          <p className="text-2xl font-bold text-purple-400">
                            <NumberFlow value={Math.round(analysis.effectiveRate * 100)} />¢
                          </p>
                        </div>
                      </div>

                      {isHigherThanGuess && (
                        <div className="flex items-center gap-2 mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                          <AlertTriangle className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-medium text-purple-300">
                            {rateDifference}% more than you thought!
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Share Row - Compact */}
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-2.5 px-3 border border-[#333] rounded-xl text-xs text-[#6b6b6b] hover:bg-[#111] hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Share2 className="w-3.5 h-3.5" />
                        Share
                      </button>
                      <button className="flex-1 py-2.5 px-3 border border-[#333] rounded-xl text-xs text-[#6b6b6b] hover:bg-[#111] hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column - Results */}
        <div>
          {step < 3 ? (
            <div className={cn(
              "h-full bg-[#111] rounded-3xl flex flex-col items-center justify-center",
              compact ? "min-h-[280px] p-6" : "min-h-[400px] p-8"
            )}>
              <div className="text-center">
                <div className={cn(
                  "bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4",
                  compact ? "w-12 h-12" : "w-16 h-16"
                )}>
                  <BarChart3 className={cn("text-[#6b6b6b]", compact ? "w-6 h-6" : "w-8 h-8")} />
                </div>
                <h3 className={cn(
                  "font-semibold text-[#6b6b6b] mb-2 uppercase font-[family-name:var(--font-barlow-condensed)]",
                  compact ? "text-sm" : "text-lg"
                )}>
                  Your Analysis Will Appear Here
                </h3>
                <p className={cn("text-[#6b6b6b]", compact ? "text-xs" : "text-sm")}>
                  {step === 1 ? "Upload your bill to get started" : "Guess your rate to reveal your analysis"}
                </p>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={compact ? "space-y-3" : "space-y-4"}
            >
              {/* HERO SAVINGS - The Big Number */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className={cn(
                  "bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl text-center relative overflow-hidden",
                  compact ? "p-5" : "p-8"
                )}
              >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
                <div className="relative z-10">
                  <p className={cn("text-purple-200 font-medium uppercase tracking-widest mb-1", compact ? "text-xs" : "text-sm")}>You could save</p>
                  <p className={cn("font-bold text-white mb-1 font-[family-name:var(--font-barlow-condensed)]", compact ? "text-4xl md:text-5xl" : "text-6xl md:text-7xl")}>
                    $<NumberFlow value={analysis.solarAnnualSavings} /><span className={compact ? "text-xl" : "text-3xl"}>/yr</span>
                  </p>
                  <p className={cn("text-purple-100", compact ? "text-sm" : "text-lg")}>
                    That's <span className="font-bold">${(analysis.solarAnnualSavings / 12).toFixed(0)}/month</span> back in your pocket
                  </p>
                </div>
              </motion.div>

              {/* Quick Stats Row */}
              <div className={cn("grid grid-cols-3", compact ? "gap-2" : "gap-3")}>
                <div className={cn("bg-[#1a1a1a] border border-[#333] rounded-2xl text-center", compact ? "p-3" : "p-4")}>
                  <p className={cn("font-bold text-white", compact ? "text-lg" : "text-2xl")}>${analysis.totalBill.toFixed(0)}</p>
                  <p className={cn("text-[#6b6b6b]", compact ? "text-[10px]" : "text-xs")}>This Bill</p>
                </div>
                <div className={cn("bg-[#1a1a1a] border border-[#333] rounded-2xl text-center", compact ? "p-3" : "p-4")}>
                  <p className={cn("font-bold text-white", compact ? "text-lg" : "text-2xl")}>{analysis.totalUsage}</p>
                  <p className={cn("text-[#6b6b6b]", compact ? "text-[10px]" : "text-xs")}>kWh Used</p>
                </div>
                <div className={cn("bg-[#1a1a1a] border border-[#333] rounded-2xl text-center", compact ? "p-3" : "p-4")}>
                  <p className={cn("font-bold text-purple-400", compact ? "text-lg" : "text-2xl")}>${analysis.effectiveRate.toFixed(2)}</p>
                  <p className={cn("text-[#6b6b6b]", compact ? "text-[10px]" : "text-xs")}>Per kWh</p>
                </div>
              </div>

              {/* Why You're Overpaying - Collapsible */}
              <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setShowRateDetails(!showRateDetails)}
                  className={cn("w-full flex items-center justify-between text-left hover:bg-[#222] transition-colors", compact ? "p-3" : "p-4")}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("bg-purple-500/20 rounded-lg", compact ? "p-1.5" : "p-2")}>
                      <TrendingUp className={cn("text-purple-400", compact ? "w-4 h-4" : "w-5 h-5")} />
                    </div>
                    <div>
                      <p className={cn("font-semibold text-white", compact && "text-sm")}>Why you're overpaying</p>
                      <p className={cn("text-[#6b6b6b]", compact ? "text-xs" : "text-sm")}>
                        {((analysis.effectiveRate - analysis.nationalAvgRate) / analysis.nationalAvgRate * 100).toFixed(0)}% above national average
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={cn("text-[#6b6b6b] transition-transform", compact ? "w-4 h-4" : "w-5 h-5", showRateDetails && "rotate-90")} />
                </button>

                <AnimatePresence>
                  {showRateDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-[#333]"
                    >
                      <div className="p-5">
                        <RateComparisonBar
                          userRate={analysis.effectiveRate}
                          stateAvg={analysis.stateAvgRate}
                          nationalAvg={analysis.nationalAvgRate}
                        />

                        {/* Tier breakdown simplified */}
                        <div className="mt-4 pt-4 border-t border-[#333]">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#a3a3a3]">Tier 1 ({analysis.tier1Usage} kWh)</span>
                            <span className="text-white font-medium">${analysis.tier1Rate.toFixed(2)}/kWh</span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-[#a3a3a3]">Tier 2 ({analysis.tier2Usage} kWh)</span>
                            <span className="text-purple-400 font-medium">${analysis.tier2Rate.toFixed(2)}/kWh</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Climate Credit Warning - Only if applicable */}
              {analysis.climateCredit > 0 && (
                <div className={cn("bg-[#111] border border-purple-500/20 rounded-2xl", compact ? "p-3" : "p-4")}>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={cn("text-purple-400", compact ? "w-4 h-4" : "w-5 h-5")} />
                    <div>
                      <p className={cn("text-white font-medium", compact ? "text-xs" : "text-sm")}>
                        This bill includes a ${analysis.climateCredit} credit
                      </p>
                      <p className={cn("text-[#6b6b6b]", compact ? "text-[10px]" : "text-xs")}>
                        Your typical bill is ~${(analysis.totalBill + analysis.climateCredit).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Simple Next Steps */}
              <div className={cn("bg-[#1a1a1a] border border-[#333] rounded-2xl", compact ? "p-4" : "p-5")}>
                <p className={cn("font-medium text-white uppercase tracking-wide", compact ? "text-xs mb-3" : "text-sm mb-4")}>Your next steps</p>
                <div className={compact ? "space-y-2" : "space-y-3"}>
                  <div className="flex items-center gap-3">
                    <div className={cn("rounded-full bg-purple-500 text-white font-bold flex items-center justify-center", compact ? "w-5 h-5 text-[10px]" : "w-6 h-6 text-xs")}>1</div>
                    <p className={cn("text-[#a3a3a3]", compact ? "text-xs" : "text-sm")}>
                      Switch to <span className="text-white font-medium">{analysis.recommendedPlan}</span> — save ${analysis.recommendedPlanSavings}/mo
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={cn("rounded-full bg-purple-500 text-white font-bold flex items-center justify-center", compact ? "w-5 h-5 text-[10px]" : "w-6 h-6 text-xs")}>2</div>
                    <p className={cn("text-[#a3a3a3]", compact ? "text-xs" : "text-sm")}>
                      Get a free solar quote — <span className="text-purple-400 font-medium">save ${analysis.solarAnnualSavings.toLocaleString()}/year</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Full Width CTA */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={compact ? "mt-5" : "mt-8"}
        >
          <button className={cn(
            "w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)] shadow-lg shadow-purple-500/25",
            compact ? "py-3.5 text-sm" : "py-5 text-lg"
          )}>
            <Sparkles className={compact ? "w-5 h-5" : "w-6 h-6"} />
            Get Your Free Solar Quote — Save ${analysis.solarAnnualSavings.toLocaleString()}/year
            <ChevronRight className={compact ? "w-4 h-4" : "w-5 h-5"} />
          </button>
        </motion.div>
      )}
    </div>
  )
}
