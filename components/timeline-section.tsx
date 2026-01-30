"use client"

import { Timeline } from "@/components/ui/timeline"

const RateBadge = ({ utility, rate }: { utility: string; rate: string }) => (
  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs">
    <span className="text-zinc-400">{utility}</span>
    <span className="text-purple-400 font-medium">{rate}</span>
  </span>
)

const timelineData = [
  {
    title: "2014",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
          The Baseline
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <RateBadge utility="PG&E" rate="~21¢" />
          <RateBadge utility="SCE" rate="~17¢" />
          <RateBadge utility="SDG&E" rate="~22¢" />
        </div>
        <p className="text-zinc-300 text-sm md:text-base mb-4">
          California electricity was already expensive but manageable. Most families paid{" "}
          <span className="text-white font-medium">$150-180/month</span>.
        </p>
        <p className="text-zinc-400 text-sm">
          Federal solar tax credit was 30%, but few homeowners took advantage.
        </p>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
          California Makes Solar Mandatory
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <RateBadge utility="PG&E" rate="~24¢" />
          <RateBadge utility="SCE" rate="~19¢" />
          <RateBadge utility="SDG&E" rate="~25¢" />
        </div>
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">📜</span>
            <span className="text-purple-300 font-semibold">SOLAR MANDATE ADOPTED</span>
          </div>
          <p className="text-zinc-300 text-sm">
            California becomes the <span className="text-white font-bold">FIRST STATE IN AMERICA</span> to
            require solar panels on all new home construction.
          </p>
        </div>
        <p className="text-zinc-400 text-sm">
          The state recognized grid dependency as a vulnerability and made solar essential infrastructure, not a luxury.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
          Solar Becomes Law + Blackouts Begin
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <RateBadge utility="PG&E" rate="~23¢" />
          <RateBadge utility="SCE" rate="~20¢" />
          <RateBadge utility="SDG&E" rate="~27¢" />
        </div>
        <div className="space-y-4 mb-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🏠</span>
              <span className="text-green-300 font-semibold">TITLE 24 TAKES EFFECT</span>
            </div>
            <p className="text-zinc-300 text-sm">
              Starting January 1, every new single-family home and multi-family building (up to 3 stories)
              in California <span className="text-white font-bold">MUST have solar panels</span>.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚫</span>
              <span className="text-red-300 font-semibold">INTENTIONAL BLACKOUTS</span>
            </div>
            <p className="text-zinc-300 text-sm">
              Utilities began shutting off power to <span className="text-white font-bold">3+ million Californians</span> during
              high-risk fire conditions. Some outages lasted 4-5 days.
            </p>
          </div>
        </div>
        <p className="text-zinc-400 text-sm">
          Families still paid full price for unreliable power.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
          The Best Solar Deal in History
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <RateBadge utility="PG&E" rate="~32¢" />
          <RateBadge utility="SCE" rate="~26¢" />
          <RateBadge utility="SDG&E" rate="~38¢" />
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💰</span>
            <span className="text-yellow-300 font-semibold">INFLATION REDUCTION ACT</span>
          </div>
          <p className="text-zinc-300 text-sm mb-3">
            Federal solar tax credit boosted back to <span className="text-white font-bold">30% through 2032</span>.
            Battery storage now qualifies too.
          </p>
          <div className="bg-zinc-800/50 rounded-lg p-3">
            <p className="text-zinc-300 text-sm">
              A <span className="text-white">$30,000 system</span> = <span className="text-green-400 font-bold">$9,000 back</span> in your pocket
            </p>
          </div>
        </div>
        <p className="text-zinc-400 text-sm">
          Most generous solar incentive ever offered to American homeowners.
        </p>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">
          ⚡ NOW
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <RateBadge utility="PG&E" rate="~48¢" />
          <RateBadge utility="SCE" rate="~38¢" />
          <RateBadge utility="SDG&E" rate="~52¢" />
        </div>
        <div className="space-y-4 mb-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📈</span>
              <span className="text-red-300 font-semibold">RATES HAVE MORE THAN DOUBLED</span>
            </div>
            <p className="text-zinc-300 text-sm">
              PG&E rates up <span className="text-white font-bold">128% since 2014</span>. SDG&E now has the
              <span className="text-red-400 font-bold"> highest rates in the continental US</span>.
            </p>
            <p className="text-zinc-300 text-sm mt-2">
              Average family paying <span className="text-white font-bold">$350-500/month</span>.
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⏰</span>
              <span className="text-purple-300 font-semibold">TAX CREDIT WINDOW CLOSING</span>
            </div>
            <p className="text-zinc-300 text-sm">
              The 30% federal tax credit is available now but stepping down soon.
              <span className="text-purple-400 font-bold"> Best time to lock in savings.</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2030",
    content: (
      <div>
        <h4 className="text-xl md:text-2xl font-bold text-zinc-400 mb-4">
          The Projection
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs">
            <span className="text-zinc-500">PG&E</span>
            <span className="text-red-400 font-medium">~62¢</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs">
            <span className="text-zinc-500">SCE</span>
            <span className="text-red-400 font-medium">~48¢</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs">
            <span className="text-zinc-500">SDG&E</span>
            <span className="text-red-400 font-medium">~72¢</span>
          </span>
        </div>
        <div className="space-y-4 mb-4">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🚗</span>
              <span className="text-zinc-300 font-semibold">EV MANDATE HITS</span>
            </div>
            <p className="text-zinc-400 text-sm">
              California bans sale of new gas-powered cars. Every new vehicle must be electric.
              Millions more cars plugging into an already strained grid.
            </p>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚡</span>
              <span className="text-zinc-300 font-semibold">ELECTRICITY DEMAND EXPLOSION</span>
            </div>
            <p className="text-zinc-400 text-sm">
              AI data centers, electric vehicles, and electrification mandates expected to
              <span className="text-white font-bold"> DOUBLE grid demand</span>. Infrastructure can't keep up.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💸</span>
              <span className="text-red-300 font-semibold">PROJECTED BILLS</span>
            </div>
            <p className="text-zinc-300 text-sm">
              Average family paying <span className="text-red-400 font-bold">$500-700/month</span> for electricity.
              That's <span className="text-white font-bold">$6,000-8,400/year</span> just to keep the lights on.
            </p>
          </div>
        </div>
        <p className="text-zinc-500 text-sm">
          ⚫ Grid strain + wildfire risk = more intentional shutoffs. Utilities have stated it will take a decade+ to stabilize infrastructure.
        </p>
      </div>
    ),
  },
]

export function TimelineSection() {
  return (
    <section style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">⚡</span>
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            California Solar Timeline
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The 6 Moments That Matter
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mb-4">
          Why California homeowners are going solar faster than ever — and why waiting costs you more every year.
        </p>
      </div>
      <Timeline data={timelineData} />

      {/* Bottom Summary */}
      <div className="max-w-7xl mx-auto px-6 pb-24" style={{ backgroundColor: "#09090B" }}>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">The 3 Things to Remember</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-purple-400 font-bold text-lg">1. Rates Tripling</div>
              <p className="text-zinc-400 text-sm">
                Your bill is going from ~$165/month (2014) → $600+/month (2030). Without solar, you're funding their infrastructure failures.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400 font-bold text-lg">2. Solar is Mandatory</div>
              <p className="text-zinc-400 text-sm">
                California made it mandatory on new homes because they know grid dependency is dangerous. That tells you everything.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400 font-bold text-lg">3. Demand Exploding</div>
              <p className="text-zinc-400 text-sm">
                EV mandates, AI data centers, electrification push. Same old grid. More blackouts. Higher prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
