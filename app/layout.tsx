import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RivAIChatbot } from '@/components/riv-ai-chatbot'
import './globals.css'

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: 'RIV Solar | California Residential Solar',
  description: 'Power your home with California sunshine. 2,500+ homeowners trust RIV Solar. AI-powered tools, 25-year warranty, and $0 down financing available.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <RivAIChatbot />
        <Analytics />
      </body>
    </html>
  )
}
