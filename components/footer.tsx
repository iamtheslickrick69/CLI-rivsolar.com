export function Footer() {
  const footerLinks = {
    Services: ["Residential Solar", "Battery Storage", "Solar Financing", "Free Consultation"],
    Utilities: ["PG&E Customers", "SDG&E Customers", "SCE Customers", "NEM 3.0 Guide"],
    Company: ["About Us", "Reviews", "Careers", "Contact"],
    "AI Tools": ["RIV Chatbot", "Bill Analyzer", "Savings Calculator"],
    Connect: ["Facebook", "Instagram", "LinkedIn", "YouTube"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-purple.webp"
                alt="RIV Solar"
                className="h-10 w-auto"
              />
              <span className="text-white font-bold">RIV SOLAR</span>
            </div>
            <p className="text-zinc-500 text-sm">
              Californians helping Californians go solar.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 text-sm">
            © 2025 RIV Solar. All rights reserved. CSLB License #XXXXXXX
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-purple-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
