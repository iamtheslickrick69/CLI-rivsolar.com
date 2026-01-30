"use client"

import { Navbar } from "./navbar"
import { HeroSection } from "./hero-section"
import { TimelineSection } from "./timeline-section"
import { ProcessAccordionSection } from "./process-accordion-section"
import { RateComparisonSection } from "./rate-comparison-section"
import { SolarComparisonSection } from "./solar-comparison-section"
import { TestimonialSection } from "./testimonial-section"
import { FinancingGallerySection } from "./financing-gallery-section"
import { FeatureCardsSection } from "./feature-cards-section"
import { AISection } from "./ai-section"
import { FAQSection } from "./faq-section"
import { BlogSection } from "./blog-section"
import { ProductDirectionSection } from "./product-direction-section"
import { WorkflowsSection } from "./workflows-section"
import { DitheringCTASection } from "./dithering-cta-section"
import { HoverFooterSection } from "./hover-footer-section"

export function Hero3DStage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#09090B" }}>
        <HeroSection />
        <TimelineSection />
        <ProcessAccordionSection />
        <RateComparisonSection />
        <SolarComparisonSection />
        <TestimonialSection />
        <FinancingGallerySection />
        <FeatureCardsSection />
        <AISection />
        <FAQSection />
        <BlogSection />
        <ProductDirectionSection />
        <WorkflowsSection />
        <DitheringCTASection />
        <HoverFooterSection />
      </main>
    </>
  )
}
