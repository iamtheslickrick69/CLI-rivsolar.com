import Anthropic from "@anthropic-ai/sdk"
import { NextRequest, NextResponse } from "next/server"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are RIV, a friendly and knowledgeable AI solar assistant for RIV Solar, a California residential solar company. Your job is to help homeowners understand solar energy, answer their questions, and guide them toward getting a free quote.

Key facts about RIV Solar:
- We serve Southern California (Riverside, San Diego, Orange County, San Bernardino, LA County)
- We've helped 2,500+ California homeowners go solar
- We offer a 25-year all-inclusive warranty (panels, labor, roof)
- We use Tier-1 equipment: QCells, REC, Silfab panels
- We're Tesla Powerwall certified installers
- We offer $0 down financing options
- The federal tax credit is 30% through 2032
- We have 5-star ratings on Google and Yelp, BBB A+ rated

California Utility Knowledge:
- SDG&E has the highest rates in the continental US (~55¢/kWh)
- PG&E rates average ~45¢/kWh
- SCE rates average ~42¢/kWh
- Peak hours are typically 4-9pm
- NEM 3.0 reduced export rates by ~75%, making battery storage more important

Your personality:
- Friendly, warm, and conversational (not robotic)
- Knowledgeable but explain things simply
- Helpful without being pushy or salesy
- Honest - if solar isn't right for someone, say so
- California-focused and aware of local utilities

Keep responses concise (2-4 sentences for simple questions, more for complex topics). Use markdown formatting for lists when helpful. Always encourage users to get a personalized quote for specific savings estimates.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      )
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }))

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    })

    // Extract text from response
    const textContent = response.content.find((block) => block.type === "text")
    const responseText = textContent?.type === "text" ? textContent.text : "I apologize, but I couldn't generate a response. Please try again."

    return NextResponse.json({ message: responseText })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
}
