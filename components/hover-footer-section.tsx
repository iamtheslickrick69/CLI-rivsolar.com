"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooterSection() {
  // Footer link data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Residential Solar", href: "#" },
        { label: "Battery Storage", href: "#" },
        { label: "Solar Financing", href: "#" },
        { label: "Free Consultation", href: "#" },
      ],
    },
    {
      title: "Utilities",
      links: [
        { label: "PG&E Customers", href: "#" },
        { label: "SDG&E Customers", href: "#" },
        { label: "SCE Customers", href: "#" },
        { label: "NEM 3.0 Guide", href: "#" },
      ],
    },
    {
      title: "AI Tools",
      links: [
        { label: "RIV Chatbot", href: "#", pulse: true },
        { label: "Bill Analyzer", href: "#" },
        { label: "Savings Calculator", href: "#" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#9333ea]" />,
      text: "info@rivsolar.com",
      href: "mailto:info@rivsolar.com",
    },
    {
      icon: <Phone size={18} className="text-[#9333ea]" />,
      text: "(XXX) XXX-XXXX",
      href: "tel:+1234567890",
    },
    {
      icon: <MapPin size={18} className="text-[#9333ea]" />,
      text: "Southern California",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#9333ea] text-3xl font-extrabold">
                ☀
              </span>
              <span className="text-white text-3xl font-bold">RIV Solar</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Californians helping Californians go solar. Premium installations with 25-year warranty.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-[#9333ea] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#9333ea] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-[#9333ea] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-zinc-400 hover:text-[#9333ea] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#9333ea] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-zinc-500">
            © {new Date().getFullYear()} RIV Solar. All rights reserved. CSLB License #XXXXXXX
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="RIV SOLAR" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export { HoverFooterSection };
