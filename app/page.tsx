import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PhilosophySection from '@/components/PhilosophySection'
import RemediesSection from '@/components/RemediesSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <PricingSection />
      <RemediesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
