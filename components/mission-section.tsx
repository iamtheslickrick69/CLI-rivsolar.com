"use client"

import { MagicText } from "@/components/ui/magic-text"

const missionText = `At RIV SOLAR, our mission is to empower all homeowners with clarity and understanding when it comes to their utility bill. Nearly 1/4 families struggle to pay the utility bill — and that's not okay with us. We are here to set the standard of the energy sector by empowering homeowners with clarity, and access to the best solutions for their family. Solar isn't for everyone — but then again, being stuck with one option isn't either.`

const highlightWords = [
  "empower",
  "clarity",
  "1/4",
  "families",
  "best",
  "solutions",
  "Solar",
  "everyone",
  "RIV"
]

export function MissionSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <MagicText
          text={missionText}
          highlightWords={highlightWords}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-medium leading-[1.4] md:leading-[1.5]"
        />
      </div>
    </section>
  )
}
