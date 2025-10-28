import React from 'react'
import HeroSection from './hero'
import AboutSection from './about'
import ServicesSection from './services'
import TestimonialsSection from './testimonials'
import FAQSection from './faq'
import ResourcesSection from './resources'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ResourcesSection />
    </>
  )
}
