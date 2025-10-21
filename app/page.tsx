import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PhilosophySection from '@/components/PhilosophySection'
import RemediesSection from '@/components/RemediesSection'
import PricingSection from '@/components/PricingSection'
import VisionSection from '@/components/VisionSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <RemediesSection />
      <PricingSection />
      <VisionSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
