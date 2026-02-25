import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExecutiveOverview } from '@/components/sections/ExecutiveOverview'
import { AguilarLegacy } from '@/components/sections/AguilarLegacy'
import { LivingHeritage } from '@/components/sections/LivingHeritage'
import { StrategicGeography } from '@/components/sections/StrategicGeography'
import { CulinaryEcosystem } from '@/components/sections/CulinaryEcosystem'
import { RoomsSection } from '@/components/sections/RoomsSection'
import { ExperiencesSection } from '@/components/sections/ExperiencesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BookingPartnersSection } from '@/components/sections/BookingPartnersSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <ExecutiveOverview />
        <AguilarLegacy />
        <LivingHeritage />
        <StrategicGeography />
        <CulinaryEcosystem />
        <RoomsSection />
        <ExperiencesSection />
        <TestimonialsSection />
        <GallerySection />
        <BookingPartnersSection />
        <ContactSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}

export default App
