"use client"

import { Navbar } from "./navbar"
import { HeroSection } from "./hero-section"
import { ProcessAccordionSection } from "./process-accordion-section"
import { SolarComparisonSection } from "./solar-comparison-section"
import { TestimonialSection } from "./testimonial-section"
import { SolarMetricsSection } from "./solar-metrics-section"
import { FinancingGallerySection } from "./financing-gallery-section"
import { GridBrokenSection } from "./grid-broken-section"
import { FeatureCardsSection } from "./feature-cards-section"
import { AISectionHome } from "./ai-section-home"
import { FAQSection } from "./faq-section"
import { BlogSection } from "./blog-section"
import { CareersBannerSection } from "./careers-banner-section"
import { MissionSection } from "./mission-section"
import { DitheringCTASection } from "./dithering-cta-section"
import { HoverFooterSection } from "./hover-footer-section"
import { TestimonialSphereSection } from "./testimonial-sphere-section"

export function Hero3DStage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <TestimonialSphereSection />
        <MissionSection />
        <ProcessAccordionSection />
        <SolarComparisonSection />
        <TestimonialSection />
        <SolarMetricsSection />
        <FinancingGallerySection />
        <GridBrokenSection />
        <FeatureCardsSection />
        <AISectionHome />
        <FAQSection />
        <BlogSection />
        <CareersBannerSection />
        <DitheringCTASection />
        <HoverFooterSection />
      </main>
    </>
  )
}
