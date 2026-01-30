export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-2">
              Ready to cut your electric bill?
            </h2>
            <p className="text-zinc-400 text-lg">
              The 30% federal tax credit won't last forever. Lock in your savings today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Chat with RIV
            </button>
            <button className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition-colors text-sm">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
