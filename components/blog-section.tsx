"use client"

import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@/components/ui/progressive-carousel';

const blogItems = [
  {
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    title: "NEM 3.0 Explained",
    desc: "California's new net metering rules changed the game. Here's what every homeowner needs to know about maximizing solar savings in 2025.",
    sliderName: "nem3",
    category: "Policy",
  },
  {
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    title: "Why Batteries Matter",
    desc: "Under NEM 3.0, battery storage isn't optional — it's essential. Learn how Tesla Powerwall and Enphase can double your ROI.",
    sliderName: "batteries",
    category: "Technology",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    title: "30% Tax Credit Guide",
    desc: "The federal solar tax credit puts thousands back in your pocket. Our step-by-step guide shows you exactly how to claim it.",
    sliderName: "taxcredit",
    category: "Savings",
  },
  {
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    title: "California Rate Hikes",
    desc: "SDG&E, PG&E, and SCE rates are climbing 7-9% every year. See why going solar now saves more than waiting.",
    sliderName: "rates",
    category: "Utilities",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-[#a3a3a3] text-sm font-medium mb-6 uppercase tracking-wide">
            Solar Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase font-[family-name:var(--font-barlow-condensed)]">
            Learn Before You{" "}
            <span className="text-[#a3a3a3]">
              Leap
            </span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            Knowledge is power. Get the latest insights on California solar policy, savings strategies, and industry trends.
          </p>
        </div>

        {/* Carousel */}
        <ProgressSlider
          vertical={false}
          activeSlider="nem3"
          duration={6000}
          className="w-full"
        >
          <SliderContent>
            {blogItems.map((item, index) => (
              <SliderWrapper key={index} value={item.sliderName}>
                <div className="relative rounded-[20px] overflow-hidden">
                  <img
                    className="w-full h-[400px] md:h-[500px] object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="inline-block px-3 py-1 bg-white text-black text-xs font-medium rounded-full mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 uppercase font-[family-name:var(--font-barlow-condensed)]">
                      {item.title}
                    </h3>
                    <p className="text-[#a3a3a3] text-base md:text-lg max-w-2xl mb-4">
                      {item.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-white hover:text-[#a3a3a3] font-medium transition-colors"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="absolute bottom-0 left-0 right-0 h-fit bg-[#111]/90 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-b-[20px] border-t border-[#333]">
            {blogItems.map((item, index) => (
              <SliderBtn
                key={index}
                value={item.sliderName}
                className="text-left cursor-pointer p-4 md:p-5 border-r border-[#333] last:border-r-0 hover:bg-[#1a1a1a] transition-colors"
                progressBarClass="bg-white/10 h-full"
              >
                <span className="inline-block px-2 py-0.5 bg-[#1a1a1a] border border-[#333] text-[#a3a3a3] text-xs font-medium rounded mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-semibold text-sm md:text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-[#6b6b6b] text-xs md:text-sm line-clamp-2 hidden md:block">
                  {item.desc}
                </p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors uppercase tracking-widest font-[family-name:var(--font-barlow-condensed)]"
          >
            VIEW ALL ARTICLES
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
