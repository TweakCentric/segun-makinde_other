import React from 'react'
import HeroSection from './hero'
import AboutSection from './about'
import ServicesSection from './services'
import TestimonialsSection from './testimonials'
import FAQSection from './faq'
import ResourcesSection from './resources'
import ValuesBanner from './values-banner'
import MissionVision from './mission_vision'
import ProfessionalSection from './professional'
import FreeDownload from './free-download'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesBanner />
      <AboutSection />
      <MissionVision />
      <ServicesSection />
      <ProfessionalSection />
      <FreeDownload />
      <TestimonialsSection />
      <FAQSection />
      <ResourcesSection />
    </>
  )
}
