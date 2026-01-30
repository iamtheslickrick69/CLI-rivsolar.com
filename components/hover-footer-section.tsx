"use client"

import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { SimpleFooter } from "@/components/ui/simple-footer"

function HoverFooterSection() {
  return (
    <SimpleFooter
      logo={
        <Image
          src="/logopurp.jpeg"
          alt="RIV Solar"
          width={48}
          height={48}
          className="rounded-xl"
        />
      }
      brandName="RIV Solar"
      socialLinks={[
        {
          icon: <Facebook className="h-5 w-5 text-white" />,
          href: "https://facebook.com",
          label: "Facebook",
        },
        {
          icon: <Instagram className="h-5 w-5 text-white" />,
          href: "https://instagram.com",
          label: "Instagram",
        },
        {
          icon: <Linkedin className="h-5 w-5 text-white" />,
          href: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <Youtube className="h-5 w-5 text-white" />,
          href: "https://youtube.com",
          label: "YouTube",
        },
      ]}
      mainLinks={[
        { href: "/services/residential-solar", label: "Residential Solar" },
        { href: "/services/battery-storage", label: "Battery Storage" },
        { href: "/services/financing", label: "Solar Financing" },
        { href: "/utilities/pge", label: "PG&E Customers" },
        { href: "/utilities/sdge", label: "SDG&E Customers" },
        { href: "/utilities/sce", label: "SCE Customers" },
        { href: "/ai-tools", label: "AI Tools" },
        { href: "/contact", label: "Contact" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/licenses", label: "CSLB License #XXXXXXX" },
      ]}
      copyright={{
        text: `© ${new Date().getFullYear()} RIV Solar`,
        license: "All rights reserved",
      }}
    />
  )
}

export { HoverFooterSection }
