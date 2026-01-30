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
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: "Upload" },
    { num: 2, label: "Guess" },
    { num: 3, label: "Results" },
  ]

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((step, idx) => (
        <div key={step.num} className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                currentStep >= step.num
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-500"
              )}
            >
              {currentStep > step.num ? (
                <Check className="w-4 h-4" />
              ) : (
                step.num
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                currentStep >= step.num ? "text-gray-900" : "text-gray-400"
              )}
            >
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 mx-3 transition-colors",
                currentStep > step.num ? "bg-purple-600" : "bg-gray-200"
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
      <p className="text-sm font-medium text-gray-600">How Your Rate Compares</p>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-24">Your Rate</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(userRate / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full bg-red-500 rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-semibold">${userRate.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-24">CA Average</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stateAvg / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full bg-orange-400 rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-semibold">${stateAvg.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-24">US Average</span>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(nationalAvg / maxRate) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-full bg-green-500 rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-xs text-white font-semibold">${nationalAvg.toFixed(2)}</span>
            </motion.div>
          </div>
        </div>
      </div>

      <p className="text-xs text-red-600 font-medium">
        You're paying {((userRate - nationalAvg) / nationalAvg * 100).toFixed(0)}% more than the national average
      </p>
    </div>
  )
}

// Before/After comparison card
function BeforeAfterCard({ currentCost, solarCost, savings }: { currentCost: number; solarCost: number; savings: number }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 bg-red-50 border border-red-200 rounded-2xl">
        <p className="text-sm text-red-600 font-medium mb-1">Without Solar</p>
        <p className="text-3xl font-bold text-red-700">
          $<NumberFlow value={currentCost} />
          <span className="text-lg font-normal">/yr</span>
        </p>
        <p className="text-xs text-red-500 mt-1">Current annual cost</p>
      </div>

      <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
        <p className="text-sm text-green-600 font-medium mb-1">With Solar</p>
        <p className="text-3xl font-bold text-green-700">
          $<NumberFlow value={solarCost} />
          <span className="text-lg font-normal">/yr</span>
        </p>
        <p className="text-xs text-green-500 mt-1">Estimated with solar</p>
      </div>

      <div className="col-span-2 p-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-center">
        <p className="text-sm text-purple-100 mb-1">Your Annual Savings</p>
        <p className="text-4xl font-bold text-white">
          $<NumberFlow value={savings} />
        </p>
        <p className="text-xs text-purple-200 mt-1">That's ${(savings / 12).toFixed(0)}/month back in your pocket</p>
      </div>
    </div>
  )
}

export function BillAnalyzerEmbedded() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [guessedRate, setGuessedRate] = useState(25)
  const [activeTab, setActiveTab] = useState<"overview" | "usage" | "savings">("overview")
  const [analysis] = useState<BillAnalysis>(mockAnalysis)
  const [showConfetti, setShowConfetti] = useState(false)

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
    A: "text-green-600 bg-green-100 border-green-200",
    B: "text-blue-600 bg-blue-100 border-blue-200",
    C: "text-yellow-600 bg-yellow-100 border-yellow-200",
    D: "text-orange-600 bg-orange-100 border-orange-200",
    F: "text-red-600 bg-red-100 border-red-200",
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <StepIndicator currentStep={step} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Upload / Bill Preview */}
        <div>
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full"
            >
              <div
                {...getRootProps()}
                className={cn(
                  "h-full min-h-[400px] border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all",
                  isDragActive
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-300 hover:border-purple-400 hover:bg-purple-50/50"
                )}
              >
                <input {...getInputProps()} />
                <div className="p-5 bg-purple-100 rounded-2xl mb-6">
                  <Upload className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {isDragActive ? "Drop your bill here" : "Upload Your Utility Bill"}
                </h3>
                <p className="text-gray-500 text-center mb-4">
                  Drag & drop or click to browse
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FileText className="w-4 h-4" />
                  <span>PDF, PNG, or JPG supported</span>
                </div>

                {/* Utility logos */}
                <div className="flex items-center gap-4 mt-8">
                  <img src="/PGE.jpeg" alt="PG&E" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded" />
                  <img src="/SDGE.jpeg" alt="SDG&E" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded" />
                  <img src="/SCE.jpeg" alt="SCE" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all rounded" />
                </div>

                {/* Privacy note */}
                <div className="flex items-center gap-2 mt-6 text-xs text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Your bill is processed securely and never stored</span>
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
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={analysis.utilityLogo}
                    alt={analysis.utility}
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{analysis.utility}</p>
                    <p className="text-sm text-gray-500">{analysis.billingPeriod}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-green-600 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Analyzed</span>
                  </div>
                </div>

                {/* Mini bill preview */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Service Address</span>
                    <span className="text-sm font-medium text-gray-900">{analysis.serviceAddress.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Rate Plan</span>
                    <span className="text-sm font-medium text-gray-900">{analysis.ratePlan}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Billing Period</span>
                    <span className="text-sm font-medium text-gray-900">29 days</span>
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Guess your electricity rate
                      </h3>
                      <p className="text-gray-500 text-sm">
                        How much do you think you pay per kWh?
                      </p>
                    </div>

                    <div className="text-center py-4">
                      <span className="text-5xl font-bold text-purple-600">
                        {guessedRate}¢
                      </span>
                      <span className="text-2xl text-gray-400">/kWh</span>
                    </div>

                    <div className="space-y-2">
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={guessedRate}
                        onChange={(e) => setGuessedRate(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>10¢</span>
                        <span>80¢</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-orange-50 p-3 rounded-xl">
                      <Fuel className="w-4 h-4 text-orange-500" />
                      <span>
                        At {guessedRate}¢/kWh, that's like <span className="font-semibold text-orange-600">${((guessedRate / 100) * 33.7).toFixed(0)}/gallon</span> for gas
                      </span>
                    </div>

                    <button
                      onClick={handleGuessSubmit}
                      className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Reveal My Actual Rate
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* Guess Reveal (Step 3) */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500">You guessed</p>
                          <p className="text-2xl font-bold text-gray-700">{guessedRate}¢/kWh</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Actual rate</p>
                          <p className="text-2xl font-bold text-purple-600">
                            <NumberFlow value={Math.round(analysis.effectiveRate * 100)} />¢/kWh
                          </p>
                        </div>
                      </div>

                      {isHigherThanGuess && (
                        <div className="flex items-center gap-2 p-3 bg-orange-100 rounded-xl text-orange-700">
                          <AlertTriangle className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            You're paying {rateDifference}% more than you thought!
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Share buttons */}
                    <div className="flex items-center gap-3 mt-4">
                      <button className="flex-1 py-2 px-4 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button className="flex-1 py-2 px-4 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Results
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
            <div className="h-full min-h-[400px] bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">
                  Your Analysis Will Appear Here
                </h3>
                <p className="text-gray-400 text-sm">
                  {step === 1 ? "Upload your bill to get started" : "Guess your rate to reveal your analysis"}
                </p>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Tabs */}
              <div className="flex gap-1 p-1.5 bg-gray-100 rounded-xl mb-6">
                {(["overview", "usage", "savings"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all capitalize",
                      activeTab === tab
                        ? tab === "overview"
                          ? "bg-purple-600 text-white shadow-sm"
                          : tab === "usage"
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-green-600 text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {/* OVERVIEW TAB */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Bill Grade */}
                    <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl">
                      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold border", gradeColors[analysis.billGrade])}>
                        {analysis.billGrade}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Bill Grade</p>
                        <p className="text-sm text-gray-500">Room for optimization</p>
                      </div>
                    </div>

                    {/* Rate + Gas */}
                    <div className="p-5 bg-white border border-gray-200 rounded-2xl">
                      <p className="text-sm text-gray-500 mb-2">Your Effective Rate</p>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        $<NumberFlow value={analysis.effectiveRate} format={{ minimumFractionDigits: 2 }} />/kWh
                      </p>
                      <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 p-2 rounded-lg">
                        <Fuel className="w-4 h-4" />
                        <span>That's like paying <span className="font-semibold">${gasEquivalent}/gallon</span> for gas</span>
                      </div>
                    </div>

                    {/* Bill + Usage */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white border border-gray-200 rounded-2xl">
                        <p className="text-sm text-gray-500 mb-1">This Bill</p>
                        <p className="text-2xl font-bold text-gray-900">
                          $<NumberFlow value={analysis.totalBill} format={{ minimumFractionDigits: 2 }} />
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-2xl">
                        <p className="text-sm text-gray-500 mb-1">Usage</p>
                        <p className="text-2xl font-bold text-gray-900">
                          <NumberFlow value={analysis.totalUsage} /> kWh
                        </p>
                      </div>
                    </div>

                    {/* Climate Credit Warning */}
                    {analysis.climateCredit > 0 && (
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-yellow-800 font-semibold">Heads up!</p>
                            <p className="text-sm text-yellow-700">
                              This bill includes a ${analysis.climateCredit.toFixed(0)} Climate Credit (semi-annual).
                              Expect your next bill to be ~${(analysis.totalBill + analysis.climateCredit).toFixed(0)}.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rate Comparison */}
                    <div className="p-5 bg-white border border-gray-200 rounded-2xl">
                      <RateComparisonBar
                        userRate={analysis.effectiveRate}
                        stateAvg={analysis.stateAvgRate}
                        nationalAvg={analysis.nationalAvgRate}
                      />
                    </div>
                  </motion.div>
                )}

                {/* USAGE TAB */}
                {activeTab === "usage" && (
                  <motion.div
                    key="usage"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Usage Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white border border-gray-200 rounded-2xl">
                        <p className="text-sm text-gray-500 mb-1">Monthly Usage</p>
                        <p className="text-2xl font-bold text-blue-600">
                          <NumberFlow value={analysis.totalUsage} /> kWh
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-2xl">
                        <p className="text-sm text-gray-500 mb-1">Daily Average</p>
                        <p className="text-2xl font-bold text-blue-600">
                          <NumberFlow value={analysis.dailyAverage} format={{ minimumFractionDigits: 1 }} /> kWh
                        </p>
                      </div>
                    </div>

                    {/* YoY Change */}
                    <div className={cn(
                      "p-4 rounded-2xl flex items-center gap-3 border",
                      analysis.yoyChange > 0
                        ? "bg-red-50 border-red-200"
                        : "bg-green-50 border-green-200"
                    )}>
                      {analysis.yoyChange > 0 ? (
                        <TrendingUp className="w-8 h-8 text-red-500" />
                      ) : (
                        <TrendingDown className="w-8 h-8 text-green-500" />
                      )}
                      <div>
                        <p className={cn(
                          "font-semibold",
                          analysis.yoyChange > 0 ? "text-red-700" : "text-green-700"
                        )}>
                          {analysis.yoyChange > 0 ? "Up" : "Down"} {Math.abs(analysis.yoyChange)}% from last year
                        </p>
                        <p className="text-sm text-gray-600">
                          Your usage has {analysis.yoyChange > 0 ? "increased" : "decreased"} significantly
                        </p>
                      </div>
                    </div>

                    {/* Neighborhood Comparison */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-blue-500" />
                        <div>
                          <p className="font-semibold text-blue-800">Compared to neighbors</p>
                          <p className="text-sm text-blue-600">
                            You use {analysis.neighborhoodComparison}% more than similar homes in your area
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tier Breakdown */}
                    <div className="p-5 bg-white border border-gray-200 rounded-2xl">
                      <p className="text-sm font-medium text-gray-600 mb-4">Tier Breakdown</p>

                      <div className="h-10 rounded-xl overflow-hidden flex mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(analysis.tier1Usage / analysis.totalUsage) * 100}%` }}
                          transition={{ duration: 0.8 }}
                          className="bg-blue-500 flex items-center justify-center text-sm text-white font-semibold"
                        >
                          Tier 1
                        </motion.div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(analysis.tier2Usage / analysis.totalUsage) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="bg-orange-500 flex items-center justify-center text-sm text-white font-semibold"
                        >
                          Tier 2
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-3 h-3 rounded bg-blue-500" />
                            <span className="text-sm text-gray-500">Tier 1 (cheaper)</span>
                          </div>
                          <p className="text-lg font-bold text-gray-900">{analysis.tier1Usage} kWh</p>
                          <p className="text-sm text-gray-500">@ ${analysis.tier1Rate.toFixed(2)}/kWh</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-3 h-3 rounded bg-orange-500" />
                            <span className="text-sm text-gray-500">Tier 2 (expensive)</span>
                          </div>
                          <p className="text-lg font-bold text-gray-900">{analysis.tier2Usage} kWh</p>
                          <p className="text-sm text-gray-500">@ ${analysis.tier2Rate.toFixed(2)}/kWh</p>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-orange-600 bg-orange-50 p-3 rounded-xl flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        You're paying {((analysis.tier2Rate - analysis.tier1Rate) / analysis.tier1Rate * 100).toFixed(0)}% more for {((analysis.tier2Usage / analysis.totalUsage) * 100).toFixed(0)}% of your electricity
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* SAVINGS TAB */}
                {activeTab === "savings" && (
                  <motion.div
                    key="savings"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Before/After */}
                    <BeforeAfterCard
                      currentCost={analysis.annualCost}
                      solarCost={analysis.solarMonthlyCost * 12}
                      savings={analysis.solarAnnualSavings}
                    />

                    {/* Rate Plan */}
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Lightbulb className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-yellow-800">Rate Plan Optimization</p>
                          <p className="text-sm text-yellow-700 mt-1">
                            You're on: <span className="font-medium">{analysis.ratePlan}</span>
                          </p>
                          <p className="text-sm text-green-600 font-medium mt-1">
                            Switching to {analysis.recommendedPlan} could save ~${analysis.recommendedPlanSavings}/mo
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Items */}
                    <div className="p-5 bg-white border border-gray-200 rounded-2xl">
                      <p className="text-sm font-medium text-gray-600 mb-4">Recommended Actions</p>
                      <div className="space-y-3">
                        {[
                          { text: `Switch to ${analysis.recommendedPlan} plan`, sub: `Save ~$${analysis.recommendedPlanSavings}/month`, color: "purple" },
                          { text: `Investigate ${analysis.yoyChange}% usage increase`, sub: "Check for inefficient appliances", color: "blue" },
                          { text: "Reduce Tier 2 usage", sub: "You're paying 27% more for peak usage", color: "orange" },
                          { text: "Get a free solar quote", sub: `Save $${analysis.solarAnnualSavings.toLocaleString()}/year`, color: "green", highlight: true },
                        ].map((item, idx) => (
                          <div key={idx} className={cn(
                            "flex items-start gap-3 p-3 rounded-xl",
                            item.highlight ? "bg-green-50" : ""
                          )}>
                            <CheckCircle2 className={cn(
                              "w-5 h-5 mt-0.5",
                              item.color === "purple" ? "text-purple-500" :
                              item.color === "blue" ? "text-blue-500" :
                              item.color === "orange" ? "text-orange-500" :
                              "text-green-500"
                            )} />
                            <div>
                              <p className={cn(
                                "text-sm font-medium text-gray-900",
                                item.highlight && "font-semibold"
                              )}>{item.text}</p>
                              <p className="text-xs text-gray-500">{item.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Full Width CTA */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button className="w-full py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20">
            <PiggyBank className="w-6 h-6" />
            Get Your Free Solar Quote — Save ${analysis.solarAnnualSavings.toLocaleString()}/year
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  )
}
